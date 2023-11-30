import {
  imageEntryRules,
  imageEntryRule,
  createImageEntryRule,
  updateImageEntryRule,
  deleteImageEntryRule,
} from './imageEntryRules'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('imageEntryRules', () => {
  scenario('returns all imageEntryRules', async (scenario) => {
    const result = await imageEntryRules()

    expect(result.length).toEqual(Object.keys(scenario.imageEntryRule).length)
  })

  scenario('returns a single imageEntryRule', async (scenario) => {
    const result = await imageEntryRule({
      id: scenario.imageEntryRule.one.id,
    })

    expect(result).toEqual(scenario.imageEntryRule.one)
  })

  scenario('creates a imageEntryRule', async () => {
    const result = await createImageEntryRule({
      input: { title: 'String', url: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a imageEntryRule', async (scenario) => {
    const original = await imageEntryRule({
      id: scenario.imageEntryRule.one.id,
    })
    const result = await updateImageEntryRule({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a imageEntryRule', async (scenario) => {
    const original = await deleteImageEntryRule({
      id: scenario.imageEntryRule.one.id,
    })
    const result = await imageEntryRule({ id: original.id })

    expect(result).toEqual(null)
  })
})
