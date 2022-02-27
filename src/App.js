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
  Loadpage()
  Loadpage = async(loadPageData) =>{
    const url = "http://localhost:8000/members"
    try{
      const Data = await fetch(url,{
        credentials: 'include',
        method: 'GET',
      })
      const dataRecived = await url.json()
      console.log(">>>>>>>" + dataRecived.data)
    }catch(err){
      if(err){
        console.error(err)
      }
    }
    console.log(url)
    this.setState({
      user : url
    })
  }



render(){
   
    return (
        <div className = 'loadpage'> 
          
      
        </div>


      )
  }
} 

export default App;
