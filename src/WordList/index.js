import React from 'react'
import {Item, Button, Image, Container, Icon, Divider} from 'semantic-ui-react'
import '../index.css'



function WordList(props){

	const letter = props.wordle
	console.log("i dey here sooo >",letter[2])

return(

	<Container className= "wordContainer">
	<h2 id='wordle'>WORDLE</h2>
	<Divider/>
		<div className='bigSquare'>

			<div className='firstRow' id='row'>

				<div className = 'firstRowOne' id= 'square'></div>
				<div className = 'firstRowTwo' id= 'square'></div>
				<div className = 'firstRowThree' id= 'square'></div>
				<div className = 'firstRowFour' id= 'square'></div>
				<div className = 'firstRowFive' id= 'square'></div>

			</div>
	
			<div className='secondRow' id='row'>
					<div className = 'secondRowOne' id= 'square'></div>
					<div className = 'secondRowTwo' id= 'square'></div>
					<div className = 'secondRowThree' id= 'square'></div>
					<div className = 'secondRowFour' id= 'square'></div>
					<div className = 'secondRowFive' id= 'square'></div>
			</div>
			
			<div className='thirdRow' id='row'>
					<div className = 'thirdRowOne' id= 'square'></div>
					<div className = 'thirdRowTwo' id= 'square'></div>
					<div className = 'thirdRowThree' id= 'square'></div>
					<div className = 'thirdRowFour' id= 'square'></div>
					<div className = 'thirdRowFive' id= 'square'></div>
			</div>
			
			<div className='fourthRow' id ='row'>
					<div className = 'fourthRowOne' id= 'square'></div>
					<div className = 'fourthRowTwo' id= 'square'></div>
					<div className = 'fourthRowThree' id= 'square'></div>
					<div className = 'fourthRowFour' id= 'square'></div>
					<div className = 'fourthRowFive' id= 'square'></div>
			</div>
			
			<div className='fifthRow' id='row'>
					<div className = 'fifthRowOne' id= 'square'></div>
					<div className = 'fifthRowTwo' id= 'square'></div>
					<div className = 'fifthRowThree' id= 'square'></div>
					<div className = 'fifthRowFour' id= 'square'></div>
					<div className = 'fifthRowFive' id= 'square'></div>
			</div>

			<div className='sixthRow' id='row'>
					<div className = 'sixthRowOne' id= 'square'></div>
					<div className = 'sixthRowTwo' id= 'square'></div>
					<div className = 'sixthRowThree' id= 'square'></div>
					<div className = 'sixthRowFour' id= 'square'></div>
					<div className = 'sixthRowFive' id= 'square'></div>
			</div>
		</div>
		
	</Container>
	)

}





export default WordList