import React from 'react'

const DisplayCard = props => {
    return(
        <div className="user-card">
            <div className="h1-div">
                <h1>My Github</h1>
            </div>
            <div className="user-card">
            <div className="image-div">
                <img className="user-image" src={props.myGithub.avatar_url} alt={props.myGithub.name} />
            </div>
            <div className="user-detail" >
                <p><span>Name:</span> {props.myGithub.name} </p>
                <p><span>Github Id:</span> &nbsp;<a href={props.myGithub.html_url}>{props.myGithub.html_url} </a></p>
                <p><span>Locantion:</span> {props.myGithub.location} </p>
                <p><span>Login:</span> {props.myGithub.login} </p>
                <p><span>Followers:</span> {props.myGithub.followers} people </p>
                <p><span>Following:</span> {props.myGithub.following} people</p>
            </div>
            </div>
        </div>
    )
}
export default DisplayCard;