import React from 'react'

const Score = ({score, size=''}) => {
    return(
        <div className="ui list" style={{marginLeft:'10px', marginTop:'5px', display:'inline'}}>
            <div className="item"> 
                <div>
                    <i className={`${size} arrow up icon`}/>
                </div>
            </div>
            <div className="item">{score}</div>
            <div className="item"> 
                <div>
                    <i className={`${size} arrow down icon`}/> 
                </div>
            </div>
        </div>
    )
}

export default Score