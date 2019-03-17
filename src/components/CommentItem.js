import React from 'react'
import Score from './Score';


class CommentItem extends React.Component {
    

    timeFunc(created){
        var a = new Date(Date.now())
        var b = new Date(created * 1000)
        var diffSeconds = (a-b)/1000
        if(diffSeconds < 60){
            return(`${diffSeconds} seconds ago`)
        } else if (diffSeconds >= 60 && diffSeconds < 3600){
            var minutesAgo = Math.floor(diffSeconds/60)
            return(`${minutesAgo} minutes ago `)
        } else if (diffSeconds >= 3600 && diffSeconds < 86400) {
            var hoursAgo = Math.floor(diffSeconds/3600)
            return(`${hoursAgo} hours ago`)
        } else {
            var daysAgo = Math.floor(diffSeconds/86400)
            return(`${daysAgo} days ago`)
        }
    }

    renderTime(){
        const {time} = this.props;
        //const units = time.hours >= 1 ? 'hours' : 'minutes'
        //const delta = time.hours >= 1? time.hours : time.minutes
        
        var units;
        var delta;

        if(time.hours>=24){
            units = "days"
            delta = Math.floor(time.delta/60/24)
        } else if(time.hours >= 1 && time.hours < 24){
            units ="hours"
            delta = time.hours
        } else if(time.minutes >= 1 && time.minutes <= 60){
            units = "minutes"
            delta = time.minutes
        } else {
            units = "seconds"
            delta = Math.floor(time.delta*60)
        }
        
        return(
            `${delta} ${units} ago`
            )
    }

    renderReplies(){
        if(this.props.replies){
            const replies = this.props.replies.data.children.map(item => {
                if(item.kind === "t1"){
                    return(
                        <div className="item" key={item.data.id}>
                            <div style={{display:"flex", float: "left", marginRight:"10px"}}>
                                <Score></Score>
                                <div className="content">
                                    <div style={{position:"relative",top:"6px"}}>
                                        <p>{item.data.author}  {item.data.author_flair_text}  {item.data.score} points {this.timeFunc(item.data.created)}</p>
                                        <p>{item.data.body}</p>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return(null)
                }
            })
            return(
                <div className="ui list" style={{marginLeft:"20px"}}>
                    {replies}
                </div>
            )
        } else {
        }
    }

    renderComments(){
        const {author, flair, score, comment,id} = this.props
        if(this.props.kind === "t1"){
            return(
                <div className="content" key={id}>
                    <div style={{position:"relative",top:"6px"}}>
                        <p>{author}  {flair}  {score} points {this.renderTime()}</p>
                        <p>{comment}</p>
                        <br/>
                    </div>
                    {this.renderReplies()}
                </div>
            )
        }
    }


    render(){
        return(
            <div className="item">
                <div style={{display:"flex", float: "left", marginRight:"10px"}}>
                    <Score></Score>
                    {this.renderComments()}
                </div>
            </div>
        )
    }
}




export default CommentItem