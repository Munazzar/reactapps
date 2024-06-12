import {Component} from 'react';

import'./card.styles.css';

class Card extends Component{

    render(){
        const {id,name,email} = this.props;
        return(

            <div key={id} className='card-container'>
                <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set4&size=350x350`}
                />
                <p>{name}</p>
                <p>{email}</p>
            </div>
        );  

    }
}

export default Card;