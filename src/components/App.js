import React from 'react'
import {Router, Route} from 'react-router-dom'
import Header from './Header'
import history from '../history'
import MainPage from './MainPage';
import Content from './Content'
import SearchList from './SearchList';
class App extends React.Component{
    
    render(){
        return(
            <div>
                <Router history={history}>
                    <div>
                        <div>
                            <Header></Header>
                            <Route exact path="/" component={MainPage}/>
                            <Route exact path="/:subreddit" component={MainPage}/>
                            <Route exact path="/:subreddit/:sort" component={MainPage}/>
                            <Route exact path="/:subreddit/comments/:id" component={Content} />
                            <Route exact path="/subreddits/search/:subreddit" component={SearchList} />
                        </div>

                    </div>
                </Router>
            </div>
        )
    }

}

export default App