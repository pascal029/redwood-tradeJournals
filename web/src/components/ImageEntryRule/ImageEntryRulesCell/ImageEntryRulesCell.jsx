import { Link, routes } from '@redwoodjs/router'

import ImageEntryRules from 'src/components/ImageEntryRule/ImageEntryRules'

export const QUERY = gql`
  query FindImageEntryRules {
    imageEntryRules {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No imageEntryRules yet. '}
      <Link to={routes.newImageEntryRule()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ imageEntryRules }) => {
  return <ImageEntryRules imageEntryRules={imageEntryRules} />
}
