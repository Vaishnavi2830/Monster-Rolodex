import { Component } from "react";
import './search-box.style.css';

class SearchBox extends Component{
    render(){
        return(
            <input//for making search bar to find monsters
                className={'search-box ${this.props.className}'}
                type='search'// It gives us an inbuild function of search box the cross'x' mark buy ehich if we cross it the search will automaticly get removed
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox; 