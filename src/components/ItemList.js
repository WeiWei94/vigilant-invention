import React from 'react';
import {connect} from 'react-redux'
import Item from './Items';
import {fetchSortedThreads, fetchThreads} from '../actions'
class ItemList extends React.Component{

    // componentDidMount(){
    //     if(this.props.sort){
    //         this.props.fetchSortedThreads(this.props.subreddit, this.props.sort)
    //     } else {
    //         this.props.fetchThreads(this.props.subreddit)
    //     }
    // }
    
    time(threadCreated){
        var now = new Date(Date.now())
        var a = new Date(threadCreated*1000)
        var deltaMins = (((now - a)/1000)/60)
        var hh = Math.floor((deltaMins/60))
        var mm = Math.floor(deltaMins%60)

        return({hours: hh, minutes:mm, delta:deltaMins})
    }

    renderThreads(){
        if(this.props.threads){
            const items = this.props.threads.data.children.map(item => {
                return(
                    <Item 
                        thumbnail = {item.data.thumbnail} 
                        title = {item.data.title} 
                        key = {item.data.id} 
                        id = {item.data.id} 
                        time = {this.time(item.data.created_utc)} 
                        subreddit = {item.data.subreddit}
                        permalink = {item.data.permalink}
                        url = {item.data.url}
                        currentSub = {this.props.subreddit}
                        currentSort = {this.props.sort}
                        isReddit = {item.data.is_reddit_media_domain}
                        isSelf = {item.data.is_self}
                        score = {item.data.score}
                        author = {item.data.author}
                        comments = {item.data.num_comments}
                    />
                )
            })
            return items
        }
    }


    render(){
        return(
            <div className="ui divided items">
                {this.renderThreads()}
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return({
        threads:state.threads.list
    })
}
export default connect(mapStateToProps,{fetchSortedThreads, fetchThreads})(ItemList)