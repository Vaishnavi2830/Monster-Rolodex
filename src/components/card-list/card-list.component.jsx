import { Component } from "react";

import './card-list.style.css';
import Card from '../card/card.componant';

class CardList extends Component{
    render(){
        const {monsters} = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) => {

                    return (
                       <Card monster={monster} />
                    );
        })}
            </div>
            );
    }
}


export default CardList;