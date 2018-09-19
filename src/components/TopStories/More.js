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

const More = ({ getNextTopStories }) => (
	<Tr>
		<Td colSpan="2"></Td>
		<Td>
			<AColor href="#" onClick={getNextTopStories}>More</AColor>
		</Td>
	</Tr>
)

More.propTypes = {
	getNextTopStories: PropTypes.func.isRequired,
}

export default More
