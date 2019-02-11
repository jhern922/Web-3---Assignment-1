import React from "react";
import './EditPhotoDetails.css';

class EditPhotoDetails extends React.Component {
	render() {
		const id = this.props.currentPhoto;
		const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
		
		if (this.props.photos.length > 0 ) {
			const photo = this.props.photos.find(p => p.id === id);
		
		return(
		 <article className="details">
		  <div className="detailsPhotoBox">
			<form className="photoForm">
			   <legend>Edit Photo Details</legend>
			   <img src={imgURL+photo.path} alt={photo.title} />
			   
			   <label>Title</label>
			   <input type='text' name='title' value={photo.title}  onChange={this.handleChange} />
			   
			   	<label>City</label>
			   <input type='text' name='city' value={photo.city} onChange={this.handleChange}/>
			   
			   <label>Country</label>
			   <input type='text' name='country' value={photo.country}  onChange={this.handleChange}/>
			   
			</form>
		  </div>
		 </article>
		);
		}
		else{
		return null;
		}
		
	}
	
	handleChange = e => {
		 const id = this.props.currentPhoto
		 const photo = this.props.photos.find( p => p.id === id);
		 
		 const clonedPhoto = {...photo };
		 clonedPhoto[e.currentTarget.name] = e.currentTarget.value;
		 this.props.updatePhoto(this.props.currentPhoto, clonedPhoto);
	}
}

export default EditPhotoDetails;