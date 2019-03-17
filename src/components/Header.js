import React from 'react';
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar';
import {connect} from 'react-redux'
import {fetchSubreddits} from '../actions'
class Header extends React.Component{

    onSubmit=(formValue)=>{
        this.props.fetchSubreddits(formValue);
    }

    render(){
        return(
            <div className="ui secondary menu">
                <Link to="/"className="item">
                    Home
                </Link>
                <Link to="/all" className="item">
                    All
                </Link>
                <div className="item">
                    <Searchbar onSubmit={this.onSubmit}></Searchbar>
                </div>
                
            </div>

        )
    }
}


export default connect(null,{fetchSubreddits})(Header)