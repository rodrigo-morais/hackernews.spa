import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FirstLine from './FirstLine'
import SecondLine from './SecondLine'
import ThirdLine from './ThirdLine'
import More from './More'

import TableBody from '../shared/TableBody'
import Tr from '../shared/Tr'
import Tbody from '../shared/Tbody'


const TrMoreSpace = styled(Tr)`
	height: 10px;
`

const showEmptyStories = () => (<Tr></Tr>)

const showTopStories = (data, getNextTopStories, getComments) => {
  const { stories, page, last } = data

  return (
    <Tr>
      <td>
        <TableBody>
          <Tbody>
            { !!stories && stories.map((story, index) => [<FirstLine story={story} page={page} key={`First_${story.id}`} index={index} />,
                <SecondLine story={story} getComments={getComments} key={`Second_${story.id}`} />,
                <ThirdLine key={`Third_${story.id}`} />])}
            <TrMoreSpace />
            {!last && <More page={page} getNextTopStories={getNextTopStories} />}
          </Tbody>
        </TableBody>
      </td>
    </Tr>
  )
}

const TopStories = ({ topStories: { data }, getNextTopStories, getComments }) => !!data ? showTopStories(data, getNextTopStories, getComments) : showEmptyStories()

TopStories.propTypes = {
	topStories: PropTypes.shape({
    data: PropTypes.shape({
      stories: PropTypes.array,
      page: PropTypes.number.isRequired,
      last: PropTypes.bool,
    }),
  }),
	getNextTopStories: PropTypes.func.isRequired,
	getComments: PropTypes.func.isRequired,
}

export default TopStories
