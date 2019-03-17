import React from 'react';
import {Link} from 'react-router-dom'

class SearchItem extends React.Component {
    
    timeFunc(created){
        var a = new Date(Date.now())
        var b = new Date(created * 1000)
        var diffSeconds = (a-b)/1000
        if(diffSeconds < 60){
            return(`${diffSeconds} seconds`)
        } else if (diffSeconds >= 60 && diffSeconds < 3600){
            var minutesAgo = Math.floor(diffSeconds/60)
            return(`${minutesAgo} minutes `)
        } else if (diffSeconds >= 3600 && diffSeconds < 86400) {
            var hoursAgo = Math.floor(diffSeconds/3600)
            return(`${hoursAgo} hours`)
        } else if (diffSeconds >= 86400 && diffSeconds < 2592000) {
            var daysAgo = Math.floor(diffSeconds/86400)
            return(`${daysAgo} days`)
        } else if (diffSeconds >= 2592000 && diffSeconds < 31104000) {
            var monthsAgo = Math.floor(diffSeconds/2592000)
            return(`${monthsAgo} months`)
        } else {
            var yearsAgo = Math.floor(diffSeconds/31104000)
            return(`${yearsAgo} years`)
        }
    }


    render(){
        const {created, url, subscribers, description} = this.props
        const linkUrl = url.split('/').pop()
        return(
            <div className="item">
                <div className="content">
                    <Link to={`/${linkUrl}`} className="header">
                        {url}
                    </Link>
                    <div className="description">
                        {description}
                    </div>
                    {subscribers} subscribers, a community for {this.timeFunc(created)}
                </div>
            </div>
        )
    }
}

export default SearchItem