import React from 'react'


const SearchResultCard = props =>{
    
    return(
        <div className="search-user">
            <img width="500px" src={props.otherUser.avatar_url} />
            <p><span> {props.otherUser.name}</span> </p>
            <p><span>Locantion:</span> {props.otherUser.location} </p>
                <p><span>Login:</span> {props.otherUser.login} </p>
                <p><span>Followers:</span> {props.otherUser.followers} people </p>
                <p><span>Following:</span> {props.otherUser.following} people</p>
        </div>
    )
}
export default SearchResultCard;