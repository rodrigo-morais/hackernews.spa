import { connect } from 'react-redux'
import App from '../components/App'

import { getTopStories } from './TopStories/actionsCreator'

const mapDispatchToProps = {
	getTopStories,
}

export default connect(null, mapDispatchToProps)(App)
