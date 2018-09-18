import React from 'react'
import styled from 'styled-components'

import A from '../shared/A'
import Image from './Image'

import logo from '../../../assets/images/logo.gif'

const Td = styled.td`
	width: 18px;
	height: 18px;
	padding: 0;
	padding-right: 4px;
`

const Logo = () => (
	<Td>
		<A href="#">
			<Image src={logo} />
		</A>
	</Td>
)

export default Logo
