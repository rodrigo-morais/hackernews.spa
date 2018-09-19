import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import TopStories from '../../../src/components/TopStories'

const getNextTopStories = jest.fn()
const topStories = { data: [] }

describe('TopStories', () => {
  describe('Rendering', () => {
    test('renders according to design', () => {
      const component = renderer.create(
				<TopStories topStories={topStories} getNextTopStories={getNextTopStories} />
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  describe('onTap callback', () => {
    beforeEach(() => {
      getNextTopStories.mockClear();
    });

    it('execute onTap callback when unlocked', () => {
      const wrapper = mount(
				<TopStories topStories={topStories} getNextTopStories={getNextTopStories} />
      );
      wrapper.find('a').last().simulate('click');
      expect(getNextTopStories).toBeCalled();
    });
  });
})
