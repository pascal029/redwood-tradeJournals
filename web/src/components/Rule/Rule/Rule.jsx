import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_RULE_MUTATION = gql`
  mutation DeleteRuleMutation($id: Int!) {
    deleteRule(id: $id) {
      id
    }
  }
`

const Rule = ({ rule }) => {
  const [deleteRule] = useMutation(DELETE_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('Rule deleted')
      navigate(routes.rules())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete rule ' + id + '?')) {
      deleteRule({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Rule {rule.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{rule.id}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{rule.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRule({ id: rule.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(rule.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Rule
