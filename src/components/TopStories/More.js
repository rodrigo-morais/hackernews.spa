import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tr from '../shared/Tr'
import A from '../shared/A'

const Td = styled.td`
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10pt;
`

const AColor = styled(A)`
	color: #828282;
`

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
