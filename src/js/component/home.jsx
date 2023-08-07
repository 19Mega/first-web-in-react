import React from "react";
import NavBar from './navbar';
import Jumbotron from './jumbotron';
import Footer from './footer';
import Card from "./card";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		// <>  ...  </>  react fragment
		<> 
			<div className="container">
				<NavBar/>
				<Jumbotron/>

				<div>
				
					<div className="container text-center">
						<div className="row">
							<div className="col">
								<Card/>
							</div>
							<div className="col">
								<Card/>
							</div>
							<div className="col">
								<Card/>
							</div>
							<div className="col">
								<Card/>
							</div>
						</div>
					</div>

				</div>
				
				<Footer/>
			</div>
		</>


	);
};

export default Home;
