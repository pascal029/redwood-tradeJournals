import { Link, routes } from '@redwoodjs/router'

import Plans from 'src/components/Plan/Plans'

export const QUERY = gql`
  query FindPlans {
    plans {
      id
      pair
      image
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No plans yet. '}
      <Link to={routes.newPlan()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ plans }) => {
  return <Plans plans={plans} />
}
