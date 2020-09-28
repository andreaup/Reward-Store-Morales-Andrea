import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'


const mapStateToProps = state => ({
  articles: state.articles,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

export default connect(
  mapStateToProps,
  null
)(ArticleList)
