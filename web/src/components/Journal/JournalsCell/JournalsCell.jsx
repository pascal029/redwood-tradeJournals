import { Link, routes } from '@redwoodjs/router'

import Journals from 'src/components/Journal/Journals'

export const QUERY = gql`
  query FindJournals {
    journals {
      id
      pair
      imageBefore
      imageAfter
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No journals yet. '}
      <Link to={routes.newJournal()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ journals }) => {
  return <Journals journals={journals} />
}
