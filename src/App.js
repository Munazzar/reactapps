import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:'',

      
    };
  }

  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=> this.setState(()=>{
      return {monsters:users};
    }))
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
      this.setState(()=>{
        return {searchField}; 
      });
    };
  
  render(){

    const {monsters,searchField} = this.state;
    const {onSearchChange} = this
    const filtered_data = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
            });
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder='search monsters' 
        onChange={onSearchChange}
        />
      {
        filtered_data.map((monster)=>{

        return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })
      }
      </div>
    );
  }
}


export default App;
