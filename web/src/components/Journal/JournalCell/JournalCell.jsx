import Journal from 'src/components/Journal/Journal'

export const QUERY = gql`
  query FindJournalById($id: Int!) {
    journal: journal(id: $id) {
      id
      pair
      imageBefore
      imageAfter
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Journal not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ journal }) => {
  return <Journal journal={journal} />
}
