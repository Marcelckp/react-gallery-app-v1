import React from 'react';
import axios from 'axios';

//Key
import Key from '../config';

import Nav from '../components/Nav';
import Search from '../components/SearchForm';
import PhotoContainer from '../components/PhotoContainer';

class Home extends React.Component {

    constructor(props) {
        super()
        this.state = {
            photos: [],
            isSearching: true,
            title: 'Super Cars'
        }
    }

    componentDidMount() {
        this.search()
    }

    search = (query = 'super cars') => {
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
                photos: p,
                isSearching: false,
                title: query
            })
        })
        .catch((err) => console.error(err))
    }

    // componentWillUnmount() {
    // }

    render() {
        // console.log(this.state.photos)
        return (
                <div className="container">
                    <h1> My Cool React App </h1>
                    <Search onSearch={this.search}/>
                    <Nav />
                    <div className="photo-container">
                    <h2>{this.state.title}</h2>

                    {this.state.isSearching ? <h2>Loading...</h2> : <PhotoContainer p={this.state.photos} alt='SuperCars' />}

                    </div>
                </div>
        )
    }
}

export default Home;