import { Component } from "react";

export default class ClassEvent extends Component{
	handleClick(){
		console.log("class base event handling")
	}
	render(){
		return (
			<div>
				This a class commponent event
				<button onClick={this.handleClick}>Clic</button>
			</div>
		)
	}
}
