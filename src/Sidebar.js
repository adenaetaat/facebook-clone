import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFLHQ6oiQfjfA/profile-displayphoto-shrink_800_800/0/1602731252080?e=2147483647&v=beta&t=kwc7Ze3uW4jPcfEX2k3tp5ltSVdKGJ2dQ82zxzlFrYY" 
                title="Adena Etaat" 
                />
            <SidebarRow
                Icon={LocalHospitalRoundedIcon}
                title="Covid-10 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsRoundedIcon} title="Pages" />
            <SidebarRow Icon={PeopleRoundedIcon} title="Friends"/>
            <SidebarRow Icon={ForumRoundedIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontOutlinedIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryRoundedIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon}
            title="Marketplace" />
        </div>
    );
}

export default Sidebar