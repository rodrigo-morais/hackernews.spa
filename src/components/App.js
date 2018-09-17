import React from 'react'
import PropTypes from 'prop-types'

import TopStories from '../containers/TopStories'

const App = ({ getTopStories }) => {
	getTopStories()

	return (
		<TopStories />
	)
}

App.propTypes = {
	getTopStories: PropTypes.func.isRequired,
}

export default App
