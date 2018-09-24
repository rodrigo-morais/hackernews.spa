import { connect } from 'react-redux'

import More from '../../components/TopStories/More'
import { getNextTopStories } from './actionsCreator'

const mapStateToProps = ({ topStories: { data: { page } } }) => ({ page })

const mapDispatchToProps = {
	getNextTopStories,
}

export default connect(mapStateToProps, mapDispatchToProps)(More)
