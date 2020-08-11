import React, {Component} from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

class Recipe extends Component{
	static propTypes = {
		title: PropTypes.string.isRequired,
		ing: PropTypes.arrayOf(PropTypes.string).isRequired,
		instruction: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired
	}
	render(){
		const {title, img, instruction} = this.props;
		const ingredients = this.props.ing.map((ing, index) => (
			<li key={index}>{ing}</li>
			));
		return(
				<div className ="recipe-card">
					<div className="recipe-card-img">
						<img src={img} alt={title}/>
					</div>
					<div className="recipe-card-content">
						<h3 className="recipe-card-title">{title}</h3>
						<h4>Ingredients:</h4>
						<ul>
							{ingredients}
						</ul>
						<h4>Instructions:</h4>
						<p>{instruction}</p>
					</div>	
				</div>
			);
	}
}

export default Recipe;