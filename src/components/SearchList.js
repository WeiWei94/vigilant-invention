import React from 'react'
import {connect} from 'react-redux'
import {fetchSubreddits} from '../actions'
import SearchItem from './SearchItem';

class SearchList extends React.Component{


    componentDidMount(){
        if(!this.props.results){  
            this.props.fetchSubreddits(this.props.match.params.subreddit)
        }
    }

    renderResults(){
        if(this.props.results){
            const items = this.props.results.data.children.map(item=> {
                return(
                    <SearchItem
                        url={item.data.display_name_prefixed}
                        description={item.data.public_description}
                        subscribers={item.data.subscribers}
                        created={item.data.created}
                        key={item.data.id}
                    />
                )
            })
            return items
        }
    }

    render(){
        return(
            <div className="ui container">
                <div className="ui list">
                    {this.renderResults()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        results:state.subs.subreddits
    })
}

export default connect(mapStateToProps,{fetchSubreddits})(SearchList)