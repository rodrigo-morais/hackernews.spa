import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import A from '../../shared/A'

const Div = styled.div`
	display: inline-block;
`

const Span = styled.span`
	padding: 0 5px 0 5px;
`

const Link = ({ data: { href, text, last } }) => (
	<Div>
		<A href={href}>
			{text}
		</A>
		{!last && <Span>|</Span>}
	</Div>
)

Link.propTypes = {
	data: PropTypes.object.isRequired,
}

export default Link
