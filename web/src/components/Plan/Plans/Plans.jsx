import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Plan/PlansCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PLAN_MUTATION = gql`
  mutation DeletePlanMutation($id: Int!) {
    deletePlan(id: $id) {
      id
    }
  }
`

const PlansList = ({ plans }) => {
  const [deletePlan] = useMutation(DELETE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('Plan deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete plan ' + id + '?')) {
      deletePlan({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Image</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{truncate(plan.pair)}</td>
              <td>
                <a href={plan.image} target="_blank">
                  <img src={plan.image} style={{ maxWidth: '50px' }} />
                </a>
              </td>
              <td>{truncate(plan.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.plan({ id: plan.id })}
                    title={'Show plan ' + plan.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPlan({ id: plan.id })}
                    title={'Edit plan ' + plan.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete plan ' + plan.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(plan.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlansList
