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
            avatar: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/71773935_459662254758437_8646048515815899136_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=d_xGXDUIi1wAX8bEa89&_nc_ht=scontent.fccu3-1.fna&oh=4ec7c20b251333139e7dac514b14485d&oe=6032968B",
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/71773935_459662254758437_8646048515815899136_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=d_xGXDUIi1wAX8bEa89&_nc_ht=scontent.fccu3-1.fna&oh=4ec7c20b251333139e7dac514b14485d&oe=6032968B'/>
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
