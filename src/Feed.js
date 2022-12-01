import React from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from "./Post";
import StoryReel from "./StoryReel";



function Feed() {
    return (
        <div className= "feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQFLHQ6oiQfjfA/profile-displayphoto-shrink_800_800/0/1602731252080?e=2147483647&v=beta&t=kwc7Ze3uW4jPcfEX2k3tp5ltSVdKGJ2dQ82zxzlFrYY"
                message="Facebook Clone!"
                timestamp="This is a timestamp"
                username="adenaetaat"
                image="https://www.bu.edu/admissions/files/2018/09/16-10227-SKYLINE-006-cropped-compressed-1200x675.jpg"
                />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQFLHQ6oiQfjfA/profile-displayphoto-shrink_800_800/0/1602731252080?e=2147483647&v=beta&t=kwc7Ze3uW4jPcfEX2k3tp5ltSVdKGJ2dQ82zxzlFrYY"
                message="Facebook Clone!"
                timestamp="This is a timestamp"
                username="adenaetaat"
                />
            <Post />
        </div>
    );
}

export default Feed