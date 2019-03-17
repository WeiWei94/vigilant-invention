import React from "react"
import history from '../history'

class Searchbar extends React.Component {


    state=({term:''})

    onSubmit = (event) => {
        this.props.onSubmit(this.state.term)
        event.preventDefault();
        history.push(`/subreddits/search/${this.state.term}`)
        this.setState({term:''})
    }

    onChange = (event) => {
        this.setState({term: event.target.value})
    }

    render(){
        return (
            <div className="ui form">
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Subreddit search" type="text" onChange={this.onChange} value={this.state.term}>
                    </input>
                </form>
            </div>
        )    
    }
}

export default Searchbar