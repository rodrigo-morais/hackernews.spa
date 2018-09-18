import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../../../src/components/Header'

describe('Header', () => {
  describe('Rendering', () => {
    test('renders according to design', () => {
      const component = renderer.create(
				<Header />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
