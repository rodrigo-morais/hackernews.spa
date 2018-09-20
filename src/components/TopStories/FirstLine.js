import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { HN_URL } from '../../constants'

import Tr from '../shared/Tr'
import A from '../shared/A'

const Td = styled.td`
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10pt;
	color: #828282;
	vertical-align: top
`

const TdRight = styled(Td)`
	text-align: right;
`

const Vote = styled.div`
	background-size: 10px;
	background-image: url(../../../assets/images/grayarrow2x.gif);
	width: 10px;
	height: 10px;
`

const Span = styled.span`
	font-size: 10px;
	margin-left: 5px;
`

const AHost = styled(A)`
	color: #828282;
`

const FirstLine = ({ story, page, index }) => {
	const url = story.url ? new URL(story.url) : null

	return (
		<Tr>
			<TdRight>
				<span>{`${((page - 1) * 30) + (index + 1)}.`}</span>
			</TdRight>
			<Td>
				<center>
					<A href={`${HN_URL}vote?id=18014283&how=up&goto=news`}>
						<Vote />
					</A>
				</center>
			</Td>
			<Td>
				<A href={story.url}>{story.title}</A>
				{url && (
          <Span>
            (
              <AHost href={url.origin}>
                {url.hostname}
              </AHost>
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
