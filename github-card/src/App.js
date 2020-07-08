import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import FollowersCard from './component/CardList'
import DisplayCard from './component/DisplayCard'
import Styled from './style'
import Search from './component/SearchBar'
import SearchResultCard from './component/SearchResult';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      myGithub: [],
      followers: [],
      otherUser:[],
      userText:""
    }
  }
componentDidMount(){
  axios.get(`https://api.github.com/users/khwanchaiwill`)
  .then(res => {
    console.log(res.data)
    this.setState({
      myGithub: res.data 
    })
  })
  .catch(err =>{
    console.log('something went wrong')
  })
  axios.get(`https://api.github.com/users/khwanchaiwill/followers`)
  .then(res =>{
    this.setState({
      followers: res.data
    })
  })
}
handleChange = evt =>{
  this.setState({
      userText: evt.target.value
  })
}

searchSubmit = evt =>{
  evt.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.userText}`)
  .then(res => {
    console.log(res.data)
    this.setState({
        otherUser: res.data,
    
    })
    
  })
}
  render() {
  return (
    <div className="App">
      <Styled>
      <header className="App-header">
        <div className="image-logo">
          <img src="https://i.pinimg.com/originals/68/89/d7/6889d7b561a0072d1bc6bd7adfdcc5c5.png" className="App-logo" alt="logo" width="50"/>
        </div>
        <div className="h1-div">
          <h1>Github Users Card</h1>
        </div>
      <div className="image-logo"> 
       <Search 
       handleChange={this.handleChange} 
       searchSubmit={this.searchSubmit}
       />
          {/* <img src="https://i.pinimg.com/originals/68/89/d7/6889d7b561a0072d1bc6bd7adfdcc5c5.png" className="App-logo" alt="logo" width="50"/> */}
      </div>
     
      </header>
      
      <DisplayCard myGithub={this.state.myGithub} />
      <h1>The search Result appear here</h1>
      <SearchResultCard otherUser={this.state.otherUser} />
      <div className="follower">
          <h1>followers</h1>
      </div>
      <FollowersCard followers={this.state.followers} />
      
       </Styled>
    </div>
   
  );
}
}

export default App;
