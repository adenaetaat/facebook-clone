import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




function Header() {
  return ( 
  <div className="header">
      <div className="header__left">
      <img
        src="Https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
        alt=""
      />
      <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
      </div>
    </div>
      <div className="header__center">
        <div className="header__option
        header__option--active">
            <HomeIcon fontsize="large"/>
        </div>
        <div className="header__option">
            <FlagIcon fontsize="large"/>
        </div>  
        <div className="header__option">
            <SubscriptionsOutlinedIcon fontsize="large"/>
        </div>  
        <div className="header__option">
            <StorefrontOutlinedIcon fontsize="large"/>
        </div>  
        <div className="header__option">
            <SupervisedUserCircleRoundedIcon fontsize="large"/>
        </div>  
      </div>

      <div className="header__right">
        <div className="header__info">
              <Avatar src=' '/>
              <h4>Adena Etaat</h4>
            </div>

            <IconButton>
                  <AddIcon />
            </IconButton>

            <IconButton>
                  <ForumIcon />
            </IconButton>

            <IconButton>
                  <NotificationsActiveIcon />
            </IconButton>

            <IconButton>
                  <ExpandMoreIcon />
            </IconButton>

      </div>
  </div>
  )
}

export default Header
