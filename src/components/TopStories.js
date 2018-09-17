import React from 'react'
import PropTypes from 'prop-types'

const TopStories = ({ topStories: { data } }) => (
	<ul>
		{ !!data && data.map((story) => <li key={story.id}>{story.title}</li>) }
	</ul>
)

TopStories.propTypes = {
	topStories: PropTypes.object.isRequired,
}

export default TopStories
