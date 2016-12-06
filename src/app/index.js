import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  	constructor() {
		super();
		this.state = {jokes:[]};

	}

	componentDidMount() {
		fetch(`http://api.icndb.com/jokes`)
			.then(result => result.json())
			.then(jokes => this.setState({jokes: jokes.value}))
	}

	render () {
		var mapFunction = this.state.jokes.map(joke => {
						const x = Math.floor(Math.random() * 584) + 1 
						return joke.joke
						})

		return (
			<div>
				<blockquote> 
				<p className='quoteFont'> {mapFunction[ (Math.floor(Math.random()*583)) ]} </p>
				</blockquote>
			</div>
		);
	}
}
