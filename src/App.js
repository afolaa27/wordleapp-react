import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user :" ",
      topTime : "",
      newTime : "",
    }
  }

  loadPage = async () =>{
    const url = "http://localhost:8000/members"
    try{
      const Data = await fetch(url,{
        credentials: 'include',
        method: 'GET',
        
      })
      const dataJson = await Data.json()

      console.log(dataJson.data)
      
     
      
    }catch(err){
      if(err){
        console.error(err)
      }
    }
    console.log(url)

  }


render(){
    
    return (
        <div > 
            
           {this.loadPage()}
        </div>


      )
  }
} 

export default App;
