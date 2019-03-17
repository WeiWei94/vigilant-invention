import React from 'react'
import ReactDOM from 'react-dom'
import Score from './Score'
import CommentList from './CommentList';
class Modal extends React.Component{

    renderDescription(){
        return(
            <>
                <div style={{position:'absolute'}}>
                    <p style={{marginLeft:'60px',marginTop:'10px'}}><strong>r/{this.props.sub}</strong> • Posted by {this.props.author} {this.props.timeAgo}</p>
                </div>                      
                <div style={{position:'relative', marginLeft:'60px',marginRight:'50px', marginTop:'50px'}}>
                    <h3>{this.props.title}</h3>
                </div>
            </>
        )
    }

    contentDecider(){
        if(this.props.domain === "i.redd.it"){
            return(
                <>
                    {this.renderDescription()}
                    <div className="image content">   
                        <img src={this.props.content} alt="not found" style={{maxHeight:'800px', maxWidth:'100%', marginLeft:'auto', marginRight:'auto'}}></img>
                    </div>
                </>
            )
        } else if (this.props.domain ==="v.redd.it") {
            const source = (this.props.media) ? this.props.media.reddit_video.fallback_url : `${this.props.content}/DASH_720`
            return(
                <>
                    {this.renderDescription()}                  
                    <div className="image content">
                        <iframe 
                            title="vreddit"
                            height="500px" 
                            width="100%"
                            frameBorder="0" 
                            src={source}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </>
            )
        } else if (this.props.domain ==="gfycat.com") {
            const gfyId = this.props.content.split('/').pop()
            return(
                <>
                    {this.renderDescription()}
                    <div className="image content">
                        <iframe 
                            title="gfycat"
                            height="500px" 
                            width="100%"
                            frameBorder="0" 
                            src={`https://gfycat.com/ifr/${gfyId}`}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </>
            )
        } else if(this.props.self){
            return(
                <div className="content">
                    {this.renderDescription()}               
                    <div className="content">
                        {this.props.selftext}
                    </div>
                </div>
            )
        } else if(this.props.domain ==="youtube.com" || this.props.domain ==="youtu.be"){
            
            const videoId = (this.props.domain === "youtube.com") ? this.props.content.split('=').pop() : this.props.content.split('/').pop()
            return(
                <>
                    {this.renderDescription()}   
                    <div className="image content" style={{}}>
                        <iframe 
                            title="youtube"
                            height="500px" 
                            width="100%" 
                            src={`https://www.youtube.com/embed/${videoId}`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </>
            )

        } else {
            return(
                <div className="content">
                    <div className="ui divided list">
                        <div className="item">
                            <p style={{marginLeft:'60px',marginTop:'10px'}}><strong>r/{this.props.sub}</strong> • Posted by {this.props.author} {this.props.timeAgo}</p>
                            <div style={{position:'relative', marginLeft:'60px',marginRight:'50px', marginTop:'10px'}}>
                                <h3>{this.props.title}</h3>
                            </div> 
                        </div>
                        <div className="item">
                            <br/>
                        </div>
                    </div>
                </div>
            )
        }
    }



    render(){
        return ReactDOM.createPortal(
            (<div className="ui active dimmer visible" onClick={this.props.onDismiss}>
                <div className="ui standard modal visible active" style={{maxHeight:'80%', maxWidth:'100%', overflow:'auto'}} onClick={(event)=> event.stopPropagation()}>
                    {/* <div style={{display:'flex', alignItems:'center', float:'left'}}>
                        {this.renderUpvotes()}
                    </div> */}
                    <div style={{display: 'flex', float:'left'}}>
                        <Score score={this.props.score} size="large"></Score>
                    </div>
                    {this.contentDecider()}
                    <div className="content">
                        <CommentList></CommentList>
                    </div>
                </div>
            </div>
            ),document.querySelector('#modal')
        )
    }
}


export default Modal