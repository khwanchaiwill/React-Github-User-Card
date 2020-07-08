import React from 'react'
const FollowersCard = props =>{
    console.log(props)
    return (
        <div className="card">
                    
                {props.followers.map(card => (
                <div className="card-detail" key={card.id}>
                    <div className="card-image">
                        <img className="follower-image" src={card.avatar_url} alt={card.name} />   
                    </div>
                    <div className="info">
                        <p> <span>Name:</span> {card.login} </p>
                        <p><span>Github Id:</span> &nbsp;<a href={card.html_url}>{card.html_url} </a></p>
                    </div>
                    
                </div>
                ))}
        
        </div>
    )
}
export default FollowersCard;