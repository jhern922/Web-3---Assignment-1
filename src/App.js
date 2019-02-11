import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Favorites from './components/Favorites.js';
class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = { photos: [], favoritePhotos: []};
	}
	
	async componentDidMount() {
		try {const url = "http://randyconnolly.com/funwebdev/services/travel/images.php";
			 const response = await fetch(url);
			 const jsonData = await response.json();
			 this.setState( {photos: jsonData} );
		}
		catch (error) {
			console.error(error);
		}
		
	}
	
	updatePhoto = (id,photo) => {
		const copyPhotos = cloneDeep(this.state.photos);
		const photoToReplace = copyPhotos.find ( p => p.id === id);
		
		photoToReplace.title = photo.title;
		photoToReplace.city = photo.city;
		photoToReplace.country = photo.country;
		
		this.setState( {photos: copyPhotos } );
	}
	
	updateFavorites = (id) => {
	   const newFavoritePhotos = cloneDeep(this.state.favoritePhotos);
	   const photoToPush = this.state.photos.find( p => p.id === id);
	   newFavoritePhotos.push(photoToPush);
	   this.setState( {favoritePhotos: newFavoritePhotos});
	}
  render() {
    return (
      <div>
		<HeaderApp />
		<Favorites favoritePhotos={this.state.favoritePhotos}/>
		<Route path='/' exact component={Home} />
		<Route path='/home' exact component={Home} />
		<Route path='/browse' exact 
			render={ (props) =>
				<PhotoBrowser 
				photos={this.state.photos}
				updatePhoto={this.updatePhoto}
				updateFavorites={this.updateFavorites}/> } 
		/>
		<Route path='/about' exact component={About} />
      </div>
    );
  }
}

export default App;
