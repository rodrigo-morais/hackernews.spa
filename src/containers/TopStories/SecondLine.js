import { connect } from 'react-redux'

import SecondLine from '../../components/TopStories/SecondLine'
import { getComments } from '../Comments/actionsCreator'

const mapDispatchToProps = {
  getComments,
}

export default connect(null, mapDispatchToProps)(SecondLine)
