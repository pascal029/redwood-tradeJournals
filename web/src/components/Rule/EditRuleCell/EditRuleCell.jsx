import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RuleForm from 'src/components/Rule/RuleForm'

export const QUERY = gql`
  query EditRuleById($id: Int!) {
    rule: rule(id: $id) {
      id
      description
    }
  }
`
const UPDATE_RULE_MUTATION = gql`
  mutation UpdateRuleMutation($id: Int!, $input: UpdateRuleInput!) {
    updateRule(id: $id, input: $input) {
      id
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rule }) => {
  const [updateRule, { loading, error }] = useMutation(UPDATE_RULE_MUTATION, {
    onCompleted: () => {
      toast.success('Rule updated')
      navigate(routes.rules())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateRule({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Rule {rule?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RuleForm rule={rule} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
