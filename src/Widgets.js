import React from 'react';
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder='Search Twitter' type='text'/>
            </div>
            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1353387087660150786"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName={"elonmusk"} options={{height : 400}}/>
                <TwitterShareButton url={"https://www.facebook.com/tirthankar.bhattacharya.925/"}
                 options={{text:"#reactjs is sugeee", via:"TirthankarBhat8"}}/>
            </div>
        </div>
    );
};

export default Widgets;
