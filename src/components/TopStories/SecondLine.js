import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { HN_URL } from '../../constants'

import Tr from '../shared/Tr'
import A from '../shared/A'

const Td = styled.td`
	font-family: Verdana, Geneva, sans-serif;
	font-size: 7pt;
	color: #828282;
`

const AColor = styled(A)`
	color: #828282;
`

const StyledLink = styled(Link)`
  text-decoration: none;
	color: #828282;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const SecondLine = ({ story }) => {
	const timeDiff = (new Date() - new Date(story.time * 1000)) / 1000 / 60
	const time = timeDiff > 60 ? Math.floor(timeDiff / 60) : Math.floor(timeDiff)
	const timeMeasure = `${timeDiff > 60 ? 'hour' : 'minutes'}${time === 1 ? '' : 's'}`

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
            <StyledLink to={`/item?id=${story.id}`}>
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
}

export default SecondLine
