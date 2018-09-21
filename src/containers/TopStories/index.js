import { connect } from 'react-redux'

import TopStories from '../../components/TopStories'
import { getNextTopStories } from './actionsCreator'
import { getComments } from '../Comments/actionsCreator'

const mapStateToProps = ({ topStories }) => ({ topStories })

const mapDispatchToProps = {
	getNextTopStories,
  getComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStories)
