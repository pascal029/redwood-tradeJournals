import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ImageEntryRuleForm from 'src/components/ImageEntryRule/ImageEntryRuleForm'

const CREATE_IMAGE_ENTRY_RULE_MUTATION = gql`
  mutation CreateImageEntryRuleMutation($input: CreateImageEntryRuleInput!) {
    createImageEntryRule(input: $input) {
      id
    }
  }
`

const NewImageEntryRule = () => {
  const [createImageEntryRule, { loading, error }] = useMutation(
    CREATE_IMAGE_ENTRY_RULE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ImageEntryRule created')
        navigate(routes.imageEntryRules())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createImageEntryRule({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ImageEntryRule</h2>
      </header>
      <div className="rw-segment-main">
        <ImageEntryRuleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewImageEntryRule
