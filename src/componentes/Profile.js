function Profile(props){
	const {name,lastname}=props;

	return(
		<h1> 
		Nombre completo: {name} {lastname}

		</h1>
	);
}
export default Profile