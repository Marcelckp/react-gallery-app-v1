import React from 'react';
import axios from 'axios';

//Key
import Key from '../config';

import Nav from '../components/Nav';
import Search from '../components/SearchForm';
import PhotoContainer from '../components/PhotoContainer';

class Sunset extends React.Component {

    constructor() {
        super()
        this.state = {
            images: [],
            isSearching: true,
            title: 'Sunsets'
        }
    }

    componentDidMount() {
        this.search()
    }

    search(query = 'sunsets') {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => {
            const data = res.data.photos.photo;
            const p = data.map((foto) => {
            const id = foto.id;
            const server = foto.server;
            const secret = foto.secret;
            return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
            })

            this.setState({
                images: p,
                isSearching: false,
                title: query
            })
        })
        .catch((err) => console.error(err))
    }

    render() {
        // console.log(this.state.images)
        return ( 
            <div className = "container" >
                <h1 > My Cool React App </h1> 
                <Search />
                <Nav />
                <div className = "photo-container" >
                <h2>{this.state.title}</h2>

                { this.state.isSearching ? <h2> Loading... </h2> : <PhotoContainer p={this.state.images} alt='Sunsets' /> }

                </div> 
            </div>
        )
    }
}

export default Sunset;