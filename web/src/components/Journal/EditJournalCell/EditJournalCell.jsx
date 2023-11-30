import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JournalForm from 'src/components/Journal/JournalForm'

export const QUERY = gql`
  query EditJournalById($id: Int!) {
    journal: journal(id: $id) {
      id
      pair
      imageBefore
      imageAfter
      description
    }
  }
`
const UPDATE_JOURNAL_MUTATION = gql`
  mutation UpdateJournalMutation($id: Int!, $input: UpdateJournalInput!) {
    updateJournal(id: $id, input: $input) {
      id
      pair
      imageBefore
      imageAfter
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ journal }) => {
  const [updateJournal, { loading, error }] = useMutation(
    UPDATE_JOURNAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Journal updated')
        navigate(routes.journals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateJournal({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Journal {journal?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <JournalForm
          journal={journal}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
