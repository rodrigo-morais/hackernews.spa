import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FirstLine from './FirstLine'
import SecondLine from './SecondLine'
import ThirdLine from './ThirdLine'
import More from './More'

import Tr from '../shared/Tr'
import Tbody from '../shared/Tbody'

const Table = styled.table`
	border-top-width: 0px;
	border-right-width: 0px;
	border-bottom-width: 0px;
	border-left-width: 0px;
	-webkit-border-horizontal-spacing: 0px;
	-webkit-border-vertical-spacing: 0px;
`
const TrMoreSpace = styled(Tr)`
	height: 10px;
`

const TopStories = ({ topStories: { data }, getNextTopStories }) => (
	<Tr>
		<td>
			<Table>
				<Tbody>
					{ !!data && data.map((story, index) => [<FirstLine story={story} key={`First_${story.id}`} index={index} />,
							<SecondLine story={story} key={`Second_${story.id}`} />,
							<ThirdLine key={`Third_${story.id}`} />])}
					<TrMoreSpace />
					<More getNextTopStories={getNextTopStories} />
				</Tbody>
			</Table>
		</td>
	</Tr>
)

TopStories.propTypes = {
	topStories: PropTypes.object.isRequired,
	getNextTopStories: PropTypes.func.isRequired,
}

export default TopStories
