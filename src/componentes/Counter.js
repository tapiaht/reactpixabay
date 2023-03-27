import { Component } from "react";

export default class Counter extends Component{
	constructor(){
		super();
		this.state={
			counter:0,
		};
		this.increment=this.increment.bind(this);
	}
	// =()=>
	// increment(){
	increment (){
		console.log(this);
		this.setState({
			
			counter:this.state.counter + 1,
		});
	}
	render(){
		return (
		<div>
				<h3>Count:{this.state.counter} </h3>
					{/* <button onClick={()=>this.increment()}>Increment</button> */}
					<button onClick={this.increment}>Increment</button>
					{/* <button onClick={()=>this.increment()}>Increment</button> */}
		</div>	
		)
	}
}