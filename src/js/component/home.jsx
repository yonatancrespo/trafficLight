


import React, { useState } from 'react';



export function Home() {

const [selectedColor, setSelectedColor] = useState("yellow");

return (
	<>
	<div className='traffic-light'>
		<div
	onClick={() => setSelectedColor("red")}
	className={
		"light red" + (selectedColor === "red" ? " glow" : '')}></div>
			<div
	onClick={() => setSelectedColor("red")}
	className={
		"light red" + (selectedColor === "red" ? " glow" : '')}></div>
			<div
	onClick={() => setSelectedColor("red")}
	className={
		"light red" + (selectedColor === "red" ? " glow" : '')}></div>
</div>
</>
 	)
};

export default Home;
