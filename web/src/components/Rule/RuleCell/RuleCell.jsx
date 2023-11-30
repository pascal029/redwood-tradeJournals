import Rule from 'src/components/Rule/Rule'

export const QUERY = gql`
  query FindRuleById($id: Int!) {
    rule: rule(id: $id) {
      id
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Rule not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rule }) => {
  return <Rule rule={rule} />
}
