import ImageEntryRule from 'src/components/ImageEntryRule/ImageEntryRule'

export const QUERY = gql`
  query FindImageEntryRuleById($id: Int!) {
    imageEntryRule: imageEntryRule(id: $id) {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ImageEntryRule not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ imageEntryRule }) => {
  return <ImageEntryRule imageEntryRule={imageEntryRule} />
}
