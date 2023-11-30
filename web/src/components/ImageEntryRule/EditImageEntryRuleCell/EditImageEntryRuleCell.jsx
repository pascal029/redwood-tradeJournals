import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ImageEntryRuleForm from 'src/components/ImageEntryRule/ImageEntryRuleForm'

export const QUERY = gql`
  query EditImageEntryRuleById($id: Int!) {
    imageEntryRule: imageEntryRule(id: $id) {
      id
      title
      url
    }
  }
`
const UPDATE_IMAGE_ENTRY_RULE_MUTATION = gql`
  mutation UpdateImageEntryRuleMutation(
    $id: Int!
    $input: UpdateImageEntryRuleInput!
  ) {
    updateImageEntryRule(id: $id, input: $input) {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ imageEntryRule }) => {
  const [updateImageEntryRule, { loading, error }] = useMutation(
    UPDATE_IMAGE_ENTRY_RULE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImageEntryRule updated')
        navigate(routes.imageEntryRules())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateImageEntryRule({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ImageEntryRule {imageEntryRule?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ImageEntryRuleForm
          imageEntryRule={imageEntryRule}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
