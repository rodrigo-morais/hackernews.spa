import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { HN_URL } from '../../constants'

import getTime from '../../lib/time'

import Tr from '../shared/Tr'
import AColor from '../shared/AColor'
import TdShared from '../shared/Td'

const Td = styled(TdShared)`
	font-size: 7pt;
`

const StyledLink = styled(Link)`
  text-decoration: none;
	color: #828282;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const SecondLine = ({ story, getComments }) => {
	const { time, timeMeasure } = getTime(story.time)

	return (
		<Tr>
			<Td colSpan="2"></Td>
			<Td>
				{story.score}
        &nbsp;points by&nbsp;
        <AColor href={`${HN_URL}user?id=${story.by}`}>{story.by}</AColor>
				{` ${time} ${timeMeasure} ago `}
				|&nbsp;
        <AColor href="#">hide</AColor>
        &nbsp;|
            <StyledLink to={`/item?id=${story.id}`} onClick={() => getComments(story.kids)}>
              {story.descendants === 0
                ? ' discuss'
                : ` ${story.descendants} comments`
              }
            </StyledLink>
			</Td>
		</Tr>
	)
}

SecondLine.propTypes = {
	story: PropTypes.object.isRequired,
  getComments: PropTypes.func.isRequired,
}

export default SecondLine
