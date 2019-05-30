import App from '../App'
import { connect } from 'react-redux'
import { loadMyMovieList } from '../actions'

const mapStateToProps = (state)=> {
    return {
        myMovieList: state.myMovieList,
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        loadMyMovieList: () => dispatch(loadMyMovieList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)