import { connect } from 'react-redux'

import Comments from '../../components/Comments'

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps)(Comments)
