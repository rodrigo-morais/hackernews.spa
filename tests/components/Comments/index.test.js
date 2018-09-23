import React from 'react'
import renderer from 'react-test-renderer'

import Comments from '../../../src/components/Comments'
import data from '../../data/comments'

const DATE = new Date(1537666329761)
global.Date = jest.fn(() => DATE)

const comments = { data }

describe('Comments', () => {
  describe('Rendering', () => {
    test('renders according to design', () => {
      const component = renderer.create(
				<Comments comments={comments} />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
