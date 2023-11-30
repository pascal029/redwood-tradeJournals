import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlanForm from 'src/components/Plan/PlanForm'

export const QUERY = gql`
  query EditPlanById($id: Int!) {
    plan: plan(id: $id) {
      id
      pair
      image
      description
    }
  }
`
const UPDATE_PLAN_MUTATION = gql`
  mutation UpdatePlanMutation($id: Int!, $input: UpdatePlanInput!) {
    updatePlan(id: $id, input: $input) {
      id
      pair
      image
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ plan }) => {
  const [updatePlan, { loading, error }] = useMutation(UPDATE_PLAN_MUTATION, {
    onCompleted: () => {
      toast.success('Plan updated')
      navigate(routes.plans())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePlan({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Plan {plan?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlanForm plan={plan} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
