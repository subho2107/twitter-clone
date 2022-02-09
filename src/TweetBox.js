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
            avatar: "https://lh3.googleusercontent.com/a-/AOh14GhryYwQYwxiOu-Zh72jShKLP4PxUVEM2Gd3tNQi5ro=s288-p-rw-no",
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src='https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/67411709_415162175875112_5645915560643395584_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=5dQTbJpTFisAX8btRfv&_nc_ht=scontent.fccu3-1.fna&oh=2278780dbef7b6323150f114f26e3c96&oe=61544366'/>
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
