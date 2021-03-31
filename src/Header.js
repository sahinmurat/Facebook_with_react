import React from 'react';
import './Header.css';

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {

    return (
        <div className='header'>

            <div className="header_left">
                <img src='data:image/png;base64,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' alt='logo' />
                <div className="header_input">
                    <SearchIcon />
                    <input placeholder='Search Facebook' type='text' />
                </div>
            </div>

            <div className="header_middle">
                <div className="header_option header_option--active ">
                    <HomeIcon fontsize='large' />
                </div>
                <div className="header_option">
                    <FlagIcon fontsize='large' />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>sahin</h4>
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
