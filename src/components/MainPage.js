import React from 'react';
import {connect} from 'react-redux'
import {fetchThreads, fetchSortedThreads} from '../actions'
import ItemList from './ItemList';
import Sort from './Sort'
class MainPage extends React.Component{

    componentDidMount(){
        if(this.props.match.params.sort){
            this.props.fetchSortedThreads(this.props.match.params.subreddit, this.props.match.params.sort)
        } else {
            this.props.fetchThreads(this.props.match.params.subreddit)
        }
    }

    render(){
        return(
            <div>
                <div className="ui container">
                    <div>
                        <Sort subreddit={this.props.match.params.subreddit}></Sort>
                    </div>
                    <div>
                        <ItemList subreddit={this.props.match.params.subreddit} sort={this.props.match.params.sort}></ItemList>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return({threads:state.threads.list})
}

export default connect(mapStateToProps, {fetchThreads, fetchSortedThreads})(MainPage)