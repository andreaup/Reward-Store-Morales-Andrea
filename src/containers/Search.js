import { connect } from 'react-redux'
import { getArticles} from '../actions'
import Menu from '../components/Menu'

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getArticles(input)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
