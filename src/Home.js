import React, { Component } from 'react';
import List from './List';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }
    componentDidMount() {
        const rawmovieslist = 'http://localhost/wp-json/wphl/v2/rawmovieslist';

        fetch(rawmovieslist)
            .then(results => results.json())
            .then(results => this.setState({
                    movies: results
            }))
    }
    render() {
        const { movies } = this.state;
        return (
            <div>
                <h1>Movies</h1>
                <List movies={movies} />
            </div>
        );
    }
}

export default Home;