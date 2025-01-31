import React from "react";
import ReactDOM from "react-dom/client";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { MyCard } from "./mycard";
import { MyNavbar } from "./navbar";
import { JumboTron } from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<div className="text-center">
							<MyNavbar />
							<JumboTron />
							<MyCard />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};


export default Home;
