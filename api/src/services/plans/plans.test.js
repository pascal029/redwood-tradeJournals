import { plans, plan, createPlan, updatePlan, deletePlan } from './plans'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plans', () => {
  scenario('returns all plans', async (scenario) => {
    const result = await plans()

    expect(result.length).toEqual(Object.keys(scenario.plan).length)
  })

  scenario('returns a single plan', async (scenario) => {
    const result = await plan({ id: scenario.plan.one.id })

    expect(result).toEqual(scenario.plan.one)
  })

  scenario('creates a plan', async () => {
    const result = await createPlan({
      input: { pair: 'String', description: 'String' },
    })

    expect(result.pair).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a plan', async (scenario) => {
    const original = await plan({ id: scenario.plan.one.id })
    const result = await updatePlan({
      id: original.id,
      input: { pair: 'String2' },
    })

    expect(result.pair).toEqual('String2')
  })

  scenario('deletes a plan', async (scenario) => {
    const original = await deletePlan({ id: scenario.plan.one.id })
    const result = await plan({ id: original.id })

    expect(result).toEqual(null)
  })
})
