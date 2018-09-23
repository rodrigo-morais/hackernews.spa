import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tr from '../shared/Tr'
import A from '../shared/A'
import AColor from '../shared/AColor'
import Vote from '../shared/Vote'
import Td from '../shared/Td'

const TdRight = styled(Td)`
	text-align: right;
`

const Span = styled.span`
	font-size: 10px;
	margin-left: 5px;
`

const FirstLine = ({ story, page, index }) => {
	const url = story.url ? new URL(story.url) : null

	return (
		<Tr>
			<TdRight>
				<span>{`${((page - 1) * 30) + (index + 1)}.`}</span>
			</TdRight>
			<Td>
        <Vote />
			</Td>
			<Td>
				<A href={story.url}>{story.title}</A>
				{url && (
          <Span>
            (
              <AColor href={url.origin}>
                {url.hostname}
              </AColor>
            )
          </Span>
        )}
			</Td>
		</Tr>
	)
}

FirstLine.propTypes = {
	story: PropTypes.object.isRequired,
	page: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
}

export default FirstLine
