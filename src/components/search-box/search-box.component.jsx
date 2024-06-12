import {Component} from 'react';
import './search-box.styles.css';

class SearchBox extends Component{

    render(){
        // const {props} = this.props;
        return (    
            <div>
        <input className="search-box" type="search" placeholder={this.props.placeholder}
         onChange={this.props.searchChange}
        />
            </div>

         );
    }
}

export default SearchBox;