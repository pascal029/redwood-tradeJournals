import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ImageEntryRule/ImageEntryRulesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_IMAGE_ENTRY_RULE_MUTATION = gql`
  mutation DeleteImageEntryRuleMutation($id: Int!) {
    deleteImageEntryRule(id: $id) {
      id
    }
  }
`

const ImageEntryRulesList = ({ imageEntryRules }) => {
  const [deleteImageEntryRule] = useMutation(DELETE_IMAGE_ENTRY_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('ImageEntryRule deleted')
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
    if (confirm('Are you sure you want to delete imageEntryRule ' + id + '?')) {
      deleteImageEntryRule({ variables: { id } })
    }
  }

  return (
    <div className="">
      {imageEntryRules.map((imageEntryRule) => {
        return (
          <>
            <img src={imageEntryRule.url} alt={imageEntryRule.title} height={300} width={300} />

          </>
        )
      })}

      {/* <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {imageEntryRules.map((imageEntryRule) => (
            <tr key={imageEntryRule.id}>
              <td>{truncate(imageEntryRule.id)}</td>
              <td>{truncate(imageEntryRule.title)}</td>
              <td>{truncate(imageEntryRule.url)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.imageEntryRule({ id: imageEntryRule.id })}
                    title={
                      'Show imageEntryRule ' + imageEntryRule.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editImageEntryRule({ id: imageEntryRule.id })}
                    title={'Edit imageEntryRule ' + imageEntryRule.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default ImageEntryRulesList
