import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';

class PhotoBrowser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {currentPhoto: 1 };
	}
	
render(){	
	return(
	<section className="container">
		<PhotoList photos={this.props.photos}
				   showImageDetails={this.showImageDetails}
				   updateFavorites={this.props.updateFavorites}/>
		<EditPhotoDetails photos={this.props.photos}
						  currentPhoto={this.state.currentPhoto}
						  updatePhoto={this.props.updatePhoto}/>
	</section>
	
	);
}

showImageDetails = (id) => {
	this.setState({ currentPhoto: id });
}
}
export default PhotoBrowser;