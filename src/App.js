import { Component } from 'react'; /*for making a class*/

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-bar/search-box.component.jsx';
import './App.css';

class App extends Component {

  constructor(){
    super();/*for now just write this always whenever you form a constructer*/

    this.state={
      monsters: [],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((user)=>
        this.setState(
          () => {
            return {monsters:user};
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
//search value changes after every search
  onSearchChange = (event)=>{
    const searchField= event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });

    }
    
//we are searching the monster by name and by removing the searched name we get the origenal form back
  render(){

    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
  });

    return (
      <div className="App">
      <h1 className="appTitle">Monster Rolodex</h1>

        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'
          className='monsters-seacrh-box'
         />
        <CardList monsters={filteredMonster}/>
      </div>
      );
  }
}

export default App;
