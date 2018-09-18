import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'
import Login from './Login'

import Tbody from '../shared/Tbody'
import Tr from '../shared/Tr'

const Table = styled.table`
	border: 0;
  width: 100%;
  padding: 2px;
`

const Td = styled.td`
	background-color: #ff6600;
`

const Header = () => (
	<tr>
		<Td>
			<Table>
				<Tbody>
					<Tr>
						<Logo />
						<Links />
						<Login />
					</Tr>
				</Tbody>
			</Table>
		</Td>
	</tr>
)

export default Header
