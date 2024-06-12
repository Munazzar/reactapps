import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

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
      <h1 className='app-title'>Monsters Rolodox</h1>

       <SearchBox searchChange = {onSearchChange}
        placeholder='Search Monsters'/>
      <CardList monsters = {filtered_data}/>
      </div>
      
    );
  }
}


export default App;
