import React from 'react'
import {Item, Button, Image, Container, Icon, Divider} from 'semantic-ui-react'
import '../index.css'

function addLetter() {
	const count = 0;
	
}
function keyClicked(input){
	const val = input
	console.log('ive been clicked', val.target.value)
}
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
				
				<button id = 'keyLetters' onClick={keyClicked} value='Q'>Q</button>
				<button id = 'keyLetters' onClick={keyClicked} value='W'>W</button>
				<button id = 'keyLetters' onClick={keyClicked} value='E'>E</button>
				<button id = 'keyLetters' onClick={keyClicked} value='R'>R</button>
				<button id = 'keyLetters' onClick={keyClicked} value='T'>T</button>
				<button id = 'keyLetters' onClick={keyClicked} value='Y'>Y</button>
				<button id = 'keyLetters' onClick={keyClicked} value='U'>U</button>
				<button id = 'keyLetters' onClick={keyClicked} value='I'>I</button>
				<button id = 'keyLetters' onClick={keyClicked} value='O'>O</button>
				<button id = 'keyLetters' onClick={keyClicked} value='P'>P</button>

			</div>
			<div className='mainCont'>
				
				<button id = 'keyLetters' onClick={keyClicked} value='A'>A</button>
				<button id = 'keyLetters' onClick={keyClicked} value='S'>S</button>
				<button id = 'keyLetters' onClick={keyClicked} value='D'>D</button>
				<button id = 'keyLetters' onClick={keyClicked} value='F'>F</button>
				<button id = 'keyLetters' onClick={keyClicked} value='G'>G</button>
				<button id = 'keyLetters' onClick={keyClicked} value='H'>H</button>
				<button id = 'keyLetters' onClick={keyClicked} value='J'>J</button>
				<button id = 'keyLetters' onClick={keyClicked} value='K'>K</button>
				<button id = 'keyLetters' onClick={keyClicked} value='L'>L</button>
				

			</div>
			<div className='mainCont'>
				
				<button id = 'keyLetterd'>ENTER</button>
				<button id = 'keyLetters' onClick={keyClicked} value='Z'>Z</button>
				<button id = 'keyLetters' onClick={keyClicked} value='X'>X</button>
				<button id = 'keyLetters' onClick={keyClicked} value='C'>C</button>
				<button id = 'keyLetters' onClick={keyClicked} value='V'>V</button>
				<button id = 'keyLetters' onClick={keyClicked} value='B'>B</button>
				<button id = 'keyLetters' onClick={keyClicked} value='N'>N</button>
				<button id = 'keyLetters' onClick={keyClicked} value='M'>M</button>
				<button id = 'keyLetterd'>DEL</button>
				

			</div>

		</div>
		

		
	</Container>
	)

	
}





export default WordList