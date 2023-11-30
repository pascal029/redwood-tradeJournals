import { rules, rule, createRule, updateRule, deleteRule } from './rules'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rules', () => {
  scenario('returns all rules', async (scenario) => {
    const result = await rules()

    expect(result.length).toEqual(Object.keys(scenario.rule).length)
  })

  scenario('returns a single rule', async (scenario) => {
    const result = await rule({ id: scenario.rule.one.id })

    expect(result).toEqual(scenario.rule.one)
  })

  scenario('creates a rule', async () => {
    const result = await createRule({
      input: { description: 'String' },
    })

    expect(result.description).toEqual('String')
  })

  scenario('updates a rule', async (scenario) => {
    const original = await rule({ id: scenario.rule.one.id })
    const result = await updateRule({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a rule', async (scenario) => {
    const original = await deleteRule({ id: scenario.rule.one.id })
    const result = await rule({ id: original.id })

    expect(result).toEqual(null)
  })
})
