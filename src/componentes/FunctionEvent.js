function FunctionEvent(){
	function handleClick(){
		console.log("clien ");
	}
	return(
		<div>
			Funcional componentes
			<button onClick={handleClick}>Clic</button>
		</div>
	);
}
export default FunctionEvent;