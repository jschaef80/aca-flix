export const myMovieListLoaded = (movies) => {
    return {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
    };
}

export const loadMyMovieList = () => {
    return (dispatch) => {
        fetch('/movies')
        .then(res => {return res.json()})
        .then(movies => {dispatch(myMovieListLoaded(movies))})
    }
}

export const searchLoaded = (movies) => {
    return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
    }
}

export const loadSearch = (searchTerm) => {
    return function (dispatch) {
        fetch('https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=e2e36515bf90a4dc69c62966e94e6b4a')
            .then((res) => {
                return res.json()
            })
            .then((movies) => {
                dispatch(searchLoaded(movies));
            })
    }
}



export const saveMyMovie = (movie) => {
    return function (dispatch) {
        fetch("/movies", {method: "post"})
        .then((res) => {
            return res.json();
        })
        .then((movies) => {
            dispatch(loadMyMovieList())
        })
    }
}

export const removeMyMovie = (id) => {
        return function (dispatch) {
            fetch(`/movies/${id}`, {method: "delete"})
        
        .then((res) => {
            return res.json();
        })
        .then((movies) => {
            dispatch(loadMyMovieList())
    
        })
    }
}
