import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: null,
            datas: null
        };
    }
    componentDidMount() {
        const movieid = this.props.match.params.id;
        const moviedatas = 'http://localhost/wp-json/wp/v2/movie/'+movieid;

        fetch(moviedatas)
            .then(this.handleErrors)
            .then(results => this.setState({
                status: 200,
                datas: results
            }))
            .catch(error => this.setState({
                status: error.status,
                datas : error.statusText
            }));
    }
    handleErrors(response) {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    }
    render() {
        const { datas } = this.state;

        if (this.state.status === 200 ) {
            return (
                <h1>{datas.title.rendered}</h1>
            )
        }else if( this.state.status === 404 ){
            return (
                <p>Not found.</p>
            )
        }else{
            return(
                <p>Loading...</p>
            )
        }
    }
}

export default Details;