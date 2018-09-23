import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { StaticRouter } from 'react-router-dom'

import TopStories from '../../../src/components/TopStories'
import stories from '../../data/topStories'

const DATE = new Date(1537666329761)
const _Date = Date
global.Date = jest.fn(() => DATE)
global.Date.now = _Date.now

const getNextTopStories = jest.fn()
const getComments = jest.fn()

const topStories = { data: { stories, page: 1 } }
const context = {}

describe('TopStories', () => {
  let wraper

  beforeEach(() => {
    wraper = (<StaticRouter location="/comments" context={context}>
      <TopStories topStories={topStories} getNextTopStories={getNextTopStories} getComments={getComments} />
    </StaticRouter>)
  })

  describe('Rendering', () => {
    test('renders according to design', () => {
      const component = renderer.create(wraper)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('onClick callback', () => {
    beforeEach(() => {
      getNextTopStories.mockClear();
      getComments.mockClear();
    });

    it('execute getNextTopStories callback when unlocked', () => {
      const component = mount(wraper)
      component.find('a').last().simulate('click');
      expect(getNextTopStories).toBeCalled();
    });

    it('execute getNextTopStories callback when unlocked', () => {
      const wrapper = mount(
        <StaticRouter location="/comments" context={context}>
          <TopStories topStories={topStories} getNextTopStories={getNextTopStories} getComments={getComments} />
        </StaticRouter>
      );
      wrapper.find('Link').first().simulate('click');
      expect(getComments).toBeCalled();
    });
  });
})
