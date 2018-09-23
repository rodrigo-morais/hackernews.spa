import React from 'react'
import PropTypes from 'prop-types'

import Tr from '../shared/Tr'
import Td from '../shared/Td'
import AColor from '../shared/AColor'

const More = ({ page, getNextTopStories }) => (
	<Tr>
		<Td colSpan="2"></Td>
		<Td>
			<AColor href="#" onClick={() => getNextTopStories(page + 1)}>More</AColor>
		</Td>
	</Tr>
)

More.propTypes = {
	page: PropTypes.number.isRequired,
	getNextTopStories: PropTypes.func.isRequired,
}

export default More
