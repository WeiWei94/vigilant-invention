import React from 'react';
import Modal from './Modal';
import history from '../history'
import {connect} from 'react-redux'
import {fetchContents} from '../actions'
class Content extends React.Component{

    componentDidMount(){
        if(this.props.match.params.subreddit){
            this.props.fetchContents(this.props.match.params.subreddit,this.props.match.params.id)
        } else {
            this.props.fetchContents(this.props.match.params.subreddit)
        }
    }

    determineContent(){
        return (
            <Modal 
                onDismiss={this.onDismiss} 
                content={this.props.content.data.children[0].data.url} 
                domain={this.props.content.data.children[0].data.domain} 
                self={this.props.content.data.children[0].data.is_self}
                title={this.props.content.data.children[0].data.title}
                selftext={this.props.content.data.children[0].data.selftext}
                timeAgo={this.props.location.state.timeAgo}
                sub={this.props.content.data.children[0].data.subreddit}
                author={this.props.content.data.children[0].data.author}
                media={this.props.content.data.children[0].data.media}
                score={this.props.content.data.children[0].data.score}>
            </Modal>
        )
    }

    helpRender(){
        if(this.props.content){
            return(
                <>
                    {this.determineContent()}
                </>
            )
        }
    }

    onDismiss=()=>{
        if(this.props.location.state.currentSort){
            history.push(`/${this.props.location.state.currentSub}/${this.props.location.state.currentSort}`)
        } else if(!this.props.location.state.currentSub){
            history.push('/')
        }else{
            history.push(`/${this.props.location.state.currentSub}`)
        }
        
    }

    render(){
        return(
            <div>
                {this.helpRender()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return({
        content:state.threads.content,
        comments:state.threads.comments
    })
}

export default connect(mapStateToProps,{fetchContents})(Content)