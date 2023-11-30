import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_IMAGE_ENTRY_RULE_MUTATION = gql`
  mutation DeleteImageEntryRuleMutation($id: Int!) {
    deleteImageEntryRule(id: $id) {
      id
    }
  }
`

const ImageEntryRule = ({ imageEntryRule }) => {
  const [deleteImageEntryRule] = useMutation(DELETE_IMAGE_ENTRY_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('ImageEntryRule deleted')
      navigate(routes.imageEntryRules())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete imageEntryRule ' + id + '?')) {
      deleteImageEntryRule({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ImageEntryRule {imageEntryRule.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{imageEntryRule.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{imageEntryRule.title}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{imageEntryRule.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editImageEntryRule({ id: imageEntryRule.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(imageEntryRule.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ImageEntryRule
