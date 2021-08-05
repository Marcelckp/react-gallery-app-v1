//Modules
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

//Key
import apiKey from './config';

//Components
import PageError from './components/404Page';
import { cats, dogs, sunsets} from './Requests4PageLinks';
import Nav from './components/Nav';
import Search from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
class App extends React.Component {

  state = {
    images: [],
    isSearching: true,
    title: 'Super Cars'
  }

  componentDidMount() {
    this.search(this.state.title);
  }

  search = (query) => {
    this.setState({isSearching: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
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

        return p;
    })
    .catch((err) => console.error(err))

    
  }

  render() {

    // console.log(cats,dogs,sunsets)

    return ( 

      <BrowserRouter>
        <div className="container">
          <h1> My React Gallery App </h1>
          <Search onSearch={this.search} />
          <Nav />

            {this.state.isSearching ? <h2>Loading...</h2> : 
              (<Switch>
                <Route exact path = '/' render={() => 
                <PhotoContainer 
                  p={this.state.images}
                  alt={this.state.title}
                  search={this.search}

                />} />

                <Route path = '/dogs' render={() => 
                <PhotoContainer 
                  p={dogs} 
                  alt='Dogs'
                  search={this.search}
                />} />

                <Route path = '/cats' render={() => 
                <PhotoContainer 
                  p={cats}
                  alt='Cats'
                  search={this.search}
                />} />

                <Route path = '/sunsets' render={() => 
                <PhotoContainer 
                  p={sunsets}
                  alt='Sunsets'
                  search={this.search}
                />} />

                <Route path = '/search/:query' render={( { match } ) => 
                <PhotoContainer 
                  p = {this.state.images}
                  alt={match.params.query}
                  search={this.search}
                />} />

                <Route component={PageError} />
              </Switch> )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;