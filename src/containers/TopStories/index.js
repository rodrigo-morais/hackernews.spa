import { connect } from 'react-redux'
import TopStories from '../../components/TopStories'

const mapStateToProps = ({ topStories }) => ({ topStories })

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(TopStories)
