import React ,{useEffect, useState} from "react";


function Home ({seconds})
{
	return (<div className="clock d-flex justify-content-center my-5 w-100 p-3 bg-dark text-dark">
		
		
		<div className="px-2">
		<div className="primero object-fit-none border rounded fs-1 px-2 bg-light ">{Math.floor(seconds / 100000) % 10}</div>
		</div>

		<div className="px-2">
			<div className="segundo object-fit-none border rounded fs-1 px-2 bg-light">{Math.floor(seconds / 10000) % 10}</div>
		</div>

		<div className="px-2">
			<div className="tercero object-fit-none border rounded fs-1 px-2 bg-light">{Math.floor(seconds / 1000) % 10}</div>
		</div>

		<div className="px-2">
			<div className="Cuarto object-fit-none border rounded fs-1 px-2 bg-light">{Math.floor(seconds / 100) % 10}</div>
		</div>

		<div className="px-2">
			
			<div className="quinto object-fit-none border rounded fs-1 px-2 bg-light">{Math.floor(seconds / 10) % 10}</div>
		</div>

		<div className="px-2">
			<div className="sexto object-fit-none border rounded fs-1 px-2 bg-light">{Math.floor(seconds / 1) % 10}</div>
		</div>

	</div>);
};


export default Home;






