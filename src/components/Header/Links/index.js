import React from 'react'
import styled from 'styled-components'

import { HN_URL } from '../../../constants'

import Title from './Title'
import Link from './Link'

const Td = styled.td`
	line-height: 12pt;
	height: 10px;
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10pt;
	color: #222222;
`
const links = [
	{ href: 'newest', text: 'new' },
	{ href: `${HN_URL}newcomments`, text: 'comments' },
	{ href: `${HN_URL}show`, text: 'show' },
	{ href: `${HN_URL}ask`, text: 'ask' },
	{ href: `${HN_URL}jobs`, text: 'jobs' },
	{ href: `${HN_URL}submit`, text: 'submit', last: true },
]

const Links = () => (
	<Td>
		<Title />
		{links.map((link, index) => (
			<Link key={index} data={link} />
		))}
	</Td>
)

export default Links
