import React from 'react'
import styled from 'styled-components'

import { HN_URL } from '../../../constants'

import A from '../../shared/A'

const Td = styled.td`
	line-height: 12pt;
	height: 10px;
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10pt;
	color: #222222;
	text-align:right;
	padding-right:4px;
`

const Login = () => (
	<Td>
		<A href={`${HN_URL}login?goto=news`}>login</A>
	</Td>
)

export default Login
