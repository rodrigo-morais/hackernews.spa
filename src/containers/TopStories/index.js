import { connect } from 'react-redux'

import TopStories from '../../components/TopStories'
import { getNextTopStories } from './actionsCreator'

const mapStateToProps = ({ topStories }) => ({ topStories })

const mapDispatchToProps = {
	getNextTopStories,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStories)
