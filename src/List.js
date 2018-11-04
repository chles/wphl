import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

class List extends Component {
    render() {
        const { movies } = this.props;
        return (
            <ul className='list-movies'>
               <ListContent movies={movies} />
            </ul>
        );
    }
}

const ListContent = props => {
    const movies = props.movies.map((movie, index) => {
        return (
            <li key={index}><Link to={movie.id}>{movie.title}</Link></li>
        )
    });
    return movies;
}

export default List;