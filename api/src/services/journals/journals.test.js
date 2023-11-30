import {
  journals,
  journal,
  createJournal,
  updateJournal,
  deleteJournal,
} from './journals'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('journals', () => {
  scenario('returns all journals', async (scenario) => {
    const result = await journals()

    expect(result.length).toEqual(Object.keys(scenario.journal).length)
  })

  scenario('returns a single journal', async (scenario) => {
    const result = await journal({ id: scenario.journal.one.id })

    expect(result).toEqual(scenario.journal.one)
  })

  scenario('creates a journal', async () => {
    const result = await createJournal({
      input: { pair: 'String', description: 'String' },
    })

    expect(result.pair).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a journal', async (scenario) => {
    const original = await journal({ id: scenario.journal.one.id })
    const result = await updateJournal({
      id: original.id,
      input: { pair: 'String2' },
    })

    expect(result.pair).toEqual('String2')
  })

  scenario('deletes a journal', async (scenario) => {
    const original = await deleteJournal({
      id: scenario.journal.one.id,
    })
    const result = await journal({ id: original.id })

    expect(result).toEqual(null)
  })
})
