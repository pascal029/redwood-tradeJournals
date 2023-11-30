import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_PLAN_MUTATION = gql`
  mutation DeletePlanMutation($id: Int!) {
    deletePlan(id: $id) {
      id
    }
  }
`

const Plan = ({ plan }) => {
  const [deletePlan] = useMutation(DELETE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('Plan deleted')
      navigate(routes.plans())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete plan ' + id + '?')) {
      deletePlan({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Plan {plan.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{plan.id}</td>
            </tr>
            <tr>
              <th>Pair</th>
              <td>{plan.pair}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{plan.image}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{plan.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlan({ id: plan.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(plan.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Plan
