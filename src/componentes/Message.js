import { Component } from "react";

class Message extends Component{
	render(){
		return <h1>Mi mensaje: {this.props.messagecontent}{this.props.messagecode}</h1>;
	}
}

export default Message