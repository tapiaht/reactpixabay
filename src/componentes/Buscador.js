// const name="dsd";
const displayMessage=()=>{
  return "I ndeed ";
}

function Buscador (){
		return (
				<form >
					<div className="row">
						<div className="form-group col-md-8">
							<input type="text" className="form-control form-control-lg" placeholder="Busca tu Imagen"/>
						</div>
						<div className="form-group col-md-4">
							<input type="submit" className="btn btn-lg btn-danger btn-blok" value="Buscar"/>

						</div>
						<h1>Total es {displayMessage()}</h1>
					</div>
				</form>
		);
	}
	
	// const Buscador=()=><h1>Hello here</h1>
	export default Buscador;
