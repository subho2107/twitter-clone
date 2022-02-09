import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button} from "@material-ui/core";
import db from './firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "TirthankarBhat8",
            userName: "mrRobot",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.ibb.co/CvTJvJ7/241637070-906056000119058-609799124452711299-n.jpg",
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src='https://i.ibb.co/CvTJvJ7/241637070-906056000119058-609799124452711299-n.jpg'/>
                    <input placeholder="What's happening" type='text' onChange={e => setTweetMessage(e.target.value)}
                           value={tweetMessage}/>
                </div>
                <input className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'
                       value={tweetImage} onChange={e => setTweetImage(e.target.value)}/>
                <Button className='tweetBox__tweetButton' type="submit" onClick={sendTweet}>Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;
