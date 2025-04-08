import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { List } from "./List";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 w-50 mx-auto m-5 d-flex">
					<List />
					<div className="card pag2 mx-auto ms-2"></div>
					<div className="card pag3 mx-auto ms-3"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;