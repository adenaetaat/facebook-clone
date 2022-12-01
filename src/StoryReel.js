import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return <div className="storyReel">
        <Story
            image="https://www.bu.edu/admissions/files/2018/09/16-10227-SKYLINE-006-cropped-compressed-1200x675.jpg"
            profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQFLHQ6oiQfjfA/profile-displayphoto-shrink_800_800/0/1602731252080?e=2147483647&v=beta&t=kwc7Ze3uW4jPcfEX2k3tp5ltSVdKGJ2dQ82zxzlFrYY"
            title="Adena Etaat"
        />

        <Story
            image="https://www.investors.com/wp-content/uploads/2019/01/Stock-MarketUptrend-04-adobe.jpg"
            profileSrc="https://static7.depositphotos.com/1298242/789/i/600/depositphotos_7894140-stock-photo-cheerful-hispanic-man-smiling-at.jpg"
            title="Max"
        />
        <Story
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1230696945.jpg?crop=0.6669921875xw:1xh;center,top&resize=640:*"
            profileSrc="https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg"
            title="Joe Biden"
        />
        <Story
            image="https://media.gq.com/photos/578e1ab01f30c3137e14781e/master/pass/melania-trump-speech-2.jpg"
            profileSrc="https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg"
            title="Donald Trump"
        />
        <Story
            image="https://cdn.theatlantic.com/thumbor/kGs9Ljp6ZkBxnfOKJ8iEzmsebYE=/192x0:3308x2337/1200x900/media/img/mt/2019/05/RTX6TTHC/original.jpg"
            profileSrc="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
            title="Mark Zuckerberg"
        />
    </div>
}

export default StoryReel;