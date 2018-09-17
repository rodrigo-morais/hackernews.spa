import React from 'react'
import PropTypes from 'prop-types'

const TopStories = ({ topStories: { data }, getNextTopStories }) => (
	<div>
		<ul>
			{ !!data && data.map((story) => <li key={story.id}>{story.title}</li>) }
		</ul>
		<a href="#" onClick={getNextTopStories}>More</a>
	</div>
)

TopStories.propTypes = {
	topStories: PropTypes.object.isRequired,
	getNextTopStories: PropTypes.func.isRequired,
}

export default TopStories
