import React, {Component} from 'react'
import {Item, Button, Image, Container, Icon, Divider} from 'semantic-ui-react'
import '../index.css'


class WordList extends Component{
	constructor(props){
		super(props)

		this.state={
			color:  '',
			st:'',
			level : 0,
			firstG : [],
			position: 0,
			char: '',
			one: '',
			two:'' ,
			three:'',
			five: '',
			six: '',
			seven : '',
			eight : '',
			nine : '',
			ten : '',

 		}
	}



addLetter (letPos) {
	if(this.state.level == 0){
		if(this.state.position == 0){
			this.setState({
				one : letPos,
				firstG: this.state.firstG.concat(letPos),
				position : 1
			})
			
		}
		else if(this.state.position == 1){
			this.setState({
				two : letPos,
				firstG: this.state.firstG.concat(letPos),
				position : 2
			})
		}
		else if(this.state.position == 2){
			this.setState({
				three : letPos,
				firstG: this.state.firstG.concat(letPos),
				position : 3
			})
		}
		else if(this.state.position == 3){
			this.setState({
				four : letPos,
				firstG: this.state.firstG.concat(letPos),
				position : 4
			})
		}
		else if(this.state.position == 4){
			this.setState({
				five : letPos,
				firstG: this.state.firstG.concat(letPos),
				position : 0,
				
			})
		}

	}
	
}

keyClicked = async(input) => {
	const val = input
	const lett = val.target.value
	console.log('ive been clicked', lett)
	console.log("i dey here sooo >>>>>>",this.props.wordle[1])
	this.addLetter(lett)

}


checkWord =async()=>{

	console.log("new lerr" , this.state.firstG)
	const wordleLen = this.props.wordle.length
	

	if(this.state.level === 0){

		for(let i = 0; i < wordleLen ; i++){
			for(let j =0; j<this.state.firstG.length; j++){
			console.log(this.props.wordle[i].toUpperCase())

				if(this.props.wordle[i].toUpperCase() === this.state.firstG[j]){
						
					this.setState({
								color: 'FirstGreen'
					})
					
				}
			}
		}
	}
}

changeColor = async(rowNum)=>{

		//this.setState({
			//color: 'FirstGreen'+i,
		//})
	//}
}

render(){

return(

	<Container className= "wordContainer">
	<h2 id='wordle'>Wordle</h2>

		<Divider/>

			//this is where my squares are stored
			<div className='bigSquare'>

				<div className='firstRow' id='row'>

					<div className = {'bK' + this.state.color}  id= 'square'> <h2>{this.state.one}</h2> </div>
					<div className = {'bK' + this.state.color} id= 'square'> < h2>{this.state.two}</h2> </div>
					<div className = {'bK' + this.state.color} id= 'square'> < h2>{this.state.three}</h2> </div>
					<div className = {'bK' + this.state.color} id= 'square'> < h2>{this.state.four}</h2> </div>
					<div className = {'bK' + this.state.color} id= 'square'> < h2>{this.state.five}</h2> </div>

				</div>
		
				<div className='secondRow' id='row'>
						<div className = 'firstRow1'  id= 'square'><h2>{this.state.six}</h2></div>
						<div className = 'secondRowTwo' id= 'square'><h2>{this.state.seven}</h2></div>
						<div className = 'secondRowThree' id= 'square'><h2>{this.state.eight}</h2></div>
						<div className = 'secondRowFour' id= 'square'><h2>{this.state.nine}</h2></div>
						<div className = 'secondRowFive' id= 'square'><h2>{this.state.nine}</h2></div>
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
				
				<button id = 'keyLetters' onClick= {this.keyClicked} value='Q'>Q</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='W'>W</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='E'>E</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='R'>R</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='T'>T</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='Y'>Y</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='U'>U</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='I'>I</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='O'>O</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='P'>P</button>

			</div>
			<div className='mainCont'>
				
				<button id = 'keyLetters' onClick= {this.keyClicked} value='A'>A</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='S'>S</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='D'>D</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='F'>F</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='G'>G</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='H'>H</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='J'>J</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='K'>K</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='L'>L</button>
				

			</div>
			<div className='mainCont'>
				
				<button id = 'keyLetterd' onClick= {this.checkWord}>ENTER</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='Z'>Z</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='X'>X</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='C'>C</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='V'>V</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='B'>B</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='N'>N</button>
				<button id = 'keyLetters' onClick= {this.keyClicked} value='M'>M</button>
				<button id = 'keyLetterd'>DEL</button>
				

			</div>

		</div>
		

		
	</Container>
	)

	
	}
}





export default WordList