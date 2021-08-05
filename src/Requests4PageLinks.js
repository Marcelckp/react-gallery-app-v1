import axios from 'axios';
import apiKey from './config';

let cats = [];
let sunsets = [];
let dogs = [];


axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
        const data = res.data.photos.photo;

        const p = data.map((foto) => {
            const id = foto.id;
            const server = foto.server;
            const secret = foto.secret;
            return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
        })
        dogs = p;
    })
    .catch((err) => console.error(err))

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
        const data = res.data.photos.photo;

        const p = data.map((foto) => {
            const id = foto.id;
            const server = foto.server;
            const secret = foto.secret;
            return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
        })
        cats = p;
    })
    .catch((err) => console.error(err))


axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
        const data = res.data.photos.photo;

        const p = data.map((foto) => {
            const id = foto.id;
            const server = foto.server;
            const secret = foto.secret;
            return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`
        })
        sunsets = p;
    })
    .catch((err) => console.error(err))


export { cats, dogs, sunsets };