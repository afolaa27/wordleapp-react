import React, {Component} from 'react'
import {Button, Container, Form, Search, Grid, Input} from 'semantic-ui-react'
import WordList from '../WordList'



class FindWords extends Component{
	constructor(props){
		super(props)
		this.state={
			wordOfTheDay : '',
			wordSplit : '',
			FirstGuess: '',
			SecondGuess: '',
			ThirdGuess: '',
			FourthGuess: '',
			FifthGuess: ''
		}
	}

	componentDidMount = async()=>{
		await this.getWord()
		
	}

	getWord = async () =>{
		console.log('i got hit')
		const wordsApi = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true&letters=5&letterpattern=[1]+$", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_API_TOKEN
			}
		})

		const words = await wordsApi.json()
		this.setState({
			wordOfTheDay : words.word

		})
		console.log(this.state.wordOfTheDay)
		this.splitWord()
	}

	splitWord = async () =>{
		console.log(this.state.wordOfTheDay)
		const splitW  = this.state.wordOfTheDay.split("")
		console.log(" i amm here ", splitW)
		this.setState({
			wordSplit : splitW
		})
		console.log(this.state.wordSplit)

	}
	render(){
		return(

				<div>
					<WordList wordle={this.state.wordSplit}/>
				</div>

			)
	}
}
export default FindWords