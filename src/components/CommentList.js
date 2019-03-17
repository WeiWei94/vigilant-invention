import React from 'react'
import {connect} from 'react-redux'
import CommentItem from './CommentItem';



class CommentList extends React.Component{

    time(timeCreated){
        var now = new Date(Date.now())
        var a = new Date(timeCreated*1000)
        var deltaMins = (((now - a)/1000)/60)
        var hh = Math.floor((deltaMins/60))
        var mm = Math.floor(deltaMins%60)

        return({hours: hh, minutes:mm, delta:deltaMins})
    }

    renderComments(){
        const comments = this.props.comments.children.map(item => {
            if(item.kind === "t1"){
                return(
                    <CommentItem
                        author={item.data.author}
                        flair={item.data.author_flair_text}
                        score={item.data.score}
                        time={this.time(item.data.created)}
                        comment={item.data.body}
                        replies={item.data.replies}
                        id={item.data.id}
                        kind={item.kind}
                        key={item.data.id}
                    />
                )
            } else {
                return(null)
            }
        })
        return comments
    }

    render(){
        return(
            <div className="ui divided list">
                {this.renderComments()}
            </div>

        )        
    }
}

const mapStateToProps = (state) => {
    return({
        comments:state.threads.comment.data
    })
}

export default connect(mapStateToProps)(CommentList)