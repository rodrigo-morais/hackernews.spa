import React from 'react'
import styled from 'styled-components'

import A from '../../shared/A'

const B = styled.b`
	margin-right: 5px;
`
const Title = () => (
	<B>
		<A href="#">Hacker News</A>
	</B>
)

export default Title
