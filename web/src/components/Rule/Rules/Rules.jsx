import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Rule/RulesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_RULE_MUTATION = gql`
  mutation DeleteRuleMutation($id: Int!) {
    deleteRule(id: $id) {
      id
    }
  }
`

const RulesList = ({ rules }) => {
  const [deleteRule] = useMutation(DELETE_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('Rule deleted')
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
    if (confirm('Are you sure you want to delete rule ' + id + '?')) {
      deleteRule({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule.id}>
              <td>{truncate(rule.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.rule({ id: rule.id })}
                    title={'Show rule ' + rule.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRule({ id: rule.id })}
                    title={'Edit rule ' + rule.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete rule ' + rule.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(rule.id)}
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

export default RulesList
