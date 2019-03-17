import React from 'react';
import {Link} from 'react-router-dom'
import {fetchSortedThreads, fetchThreads} from '../actions'
import {connect} from 'react-redux'
class Sort extends React.Component{
    
    clickHandler = (sort) => {
        const {subreddit} = this.props
        this.props.fetchSortedThreads(subreddit,sort)
    }

    

    render(){
        const {subreddit} = this.props
        if(subreddit){
            return(
                <div className="ui secondary menu">
                    <Link to={`/${subreddit}/hot`} className="item" onClick={() => {this.clickHandler('hot')}}>
                        hot
                    </Link>
                    <Link to={`/${subreddit}/new`} className="item" onClick={() => {this.clickHandler('new')}}>
                        new
                    </Link>
                    <Link to={`/${subreddit}/rising`} className="item" onClick={() => {this.clickHandler('rising')}}>
                        rising
                    </Link>
                    <Link to={`/${subreddit}/controversial`} className="item" onClick={() => {this.clickHandler('controversial')}}>
                        controversial
                    </Link>
                    <Link to={`/${subreddit}/top`} className="item" onClick={() => {this.clickHandler('top')}}>
                        top
                    </Link>
                </div>
            )
        }
        return(<div>
            
        </div>)
    }
}


export default connect(null,{fetchSortedThreads,fetchThreads})(Sort)
