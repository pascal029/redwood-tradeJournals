import { render } from '@redwoodjs/testing/web'

import UnAuthenticatedLayout from './UnAuthenticatedLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UnAuthenticatedLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UnAuthenticatedLayout />)
    }).not.toThrow()
  })
})
