import React from 'react'
import {Link} from 'react-router-dom'
import history from '../history'
import {connect} from 'react-redux'
import {fetchContents} from '../actions'
import Score from './Score';
class Item extends React.Component{
 
    renderThumbnail(){
        const {thumbnail} = this.props
        
        var source = ''

        switch(thumbnail){
            case "self":
                source='https://impostorsyndrome.com/wp-content/uploads/2017/08/Self-300x125.png'
                return(
                    <div style={{marginRight:"10px"}}>
                        <div className="ui tiny image">
                                <img src={source} alt=''/>
                        </div>
                    </div>
                )
            case "default":
                source='https://i.redd.it/130am13nj6201.png'
                return(
                    <div style={{marginRight:"10px"}}>
                        <div className="ui tiny image">
                                <img src={source} alt=''/>
                        </div>
                    </div>
                )
            case null:
                return(
                    <> </>
                )
            case "":
                return(
                    <> </>
                )
            default:
                source=thumbnail
                return(
                    <div style={{marginRight:"10px"}}>
                        <div className="ui tiny image">
                                <img src={source} alt=''/>
                        </div>
                    </div>
                )
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


    renderLink(){
        const {title, id, subreddit, url} = this.props;
        if (this.props.isSelf || this.props.isReddit) {
            return(
                <Link to={{pathname: `/${subreddit}/comments/${id}`, state:{currentSub:this.props.currentSub, currentSort: this.props.currentSort, timeAgo:this.renderTime()}}} className="header">
                    {title}
                </Link>
            )
        } else return(
            <a className="header" href={url}>
                {title}
            </a>
        )
    }

    onDismiss=()=>{
        history.push(`/${this.props.currentSub}/${this.props.currentSort}`)
    }

    description(){
        const {subreddit, author, comments, id} = this.props;
        return(
            <div className="description">
                <p>Submitted {this.renderTime()} by {author} to 
                    <Link to={`/${subreddit}`}> r/{subreddit} </Link>
                </p>
                <p>
                    <Link to={{pathname: `/${subreddit}/comments/${id}`, state:{currentSub:this.props.currentSub, currentSort: this.props.currentSort, timeAgo:this.renderTime()}}} className="header">
                        {comments} comments
                    </Link>                
                </p>
            </div>
        )
    }

    render(){
        const {id, score} = this.props;
    return(
            <div className="item" key={id}>
                <div style={{display:"flex", float: "left", marginRight:"10px"}}>
                    <Score score={score} size={''}></Score>
                </div>
                {this.renderThumbnail()}
                
                <div className="content">
                    {this.renderLink()}
                    {this.description()}
                </div>
            </div>
        )
    }

}

export default connect(null,{fetchContents})(Item)


// if(this.props.time.hours >= 1){
//     time = time.hours
// } else {
//     time = time.mins
// }
// if((thumbnail === ("default")) || (thumbnail === "self")){
//     thumbnail="https://i.redd.it/130am13nj6201.png"
// }
// var message = time.hours >= 1 ? 'hours' : 'minutes';

