import React from 'react';
import FavoriteItem from './FavoriteItem';
class Favorites extends React.Component{
 render()
 {

	 return(
	 <div className='favorites'>
		<h3> ❤ <br />Favorites</h3>
	
			{ this.props.favoritePhotos.map((p)=> <FavoriteItem 
			photo={p} 
			key={p.id} /> )}

	 </div>);
 }


}
export default Favorites;