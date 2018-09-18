import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TopStories from '../../containers/TopStories'
import Header from '../Header'

import Tbody from '../shared/Tbody'

const Table = styled.table`
	border: 0;
	cellpadding: 0;
	cellspacing: 0;
  width: 85%;
  background-color: #f6f6ef;
`

const App = ({ getTopStories }) => {
	getTopStories()

	return (
		<center>
			<Table>
				<Tbody>
					<Header />
					<TopStories />
				</Tbody>
			</Table>
		</center>
	)
}

App.propTypes = {
	getTopStories: PropTypes.func.isRequired,
}

export default App
