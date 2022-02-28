import React from 'react'
import {Item, Button, Image, Container, Icon, Divider} from 'semantic-ui-react'
import '../index.css'



function WordList(props){

	const letter = props.wordle
	console.log("i dey here sooo >",letter[2])

return(

	<Container className= "wordContainer">
	<h2 id='wordle'>Wordle</h2>

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

		<div className ='keyHolder'>
			<div className='mainCont'>
				
				<button id = 'keyLetters'>Q</button>
				<button id = 'keyLetters'>W</button>
				<button id = 'keyLetters'>E</button>
				<button id = 'keyLetters'>R</button>
				<button id = 'keyLetters'>T</button>
				<button id = 'keyLetters'>Y</button>
				<button id = 'keyLetters'>U</button>
				<button id = 'keyLetters'>I</button>
				<button id = 'keyLetters'>O</button>
				<button id = 'keyLetters'>P</button>

			</div>
			<div className='mainCont'>
				
				<button id = 'keyLetters'>A</button>
				<button id = 'keyLetters'>S</button>
				<button id = 'keyLetters'>D</button>
				<button id = 'keyLetters'>F</button>
				<button id = 'keyLetters'>G</button>
				<button id = 'keyLetters'>H</button>
				<button id = 'keyLetters'>J</button>
				<button id = 'keyLetters'>K</button>
				<button id = 'keyLetters'>L</button>
				

			</div>
			<div className='mainCont'>
				
				<button id = 'keyLetterd'>ENTER</button>
				<button id = 'keyLetters'>Z</button>
				<button id = 'keyLetters'>X</button>
				<button id = 'keyLetters'>C</button>
				<button id = 'keyLetters'>V</button>
				<button id = 'keyLetters'>B</button>
				<button id = 'keyLetters'>N</button>
				<button id = 'keyLetters'>M</button>
				<button id = 'keyLetterd'>DEL</button>
				

			</div>

		</div>
		

		
	</Container>
	)

	
}





export default WordList