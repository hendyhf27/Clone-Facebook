import './Header.css'
import {
    Search,
    Home as HomeIcon,
    Flag as FlagIcon,
    SubscriptionsOutlined as SubscriptionsOutlinedIcon,
    StorefrontOutlined as StorefrontOutlinedIcon,
    SupervisedUserCircleOutlined as SupervisedUserCircleOutlinedIcon,
    Add as AddIcon,
    Forum as ForumIcon,
    NotificationsActive as NotificationsActiveIcon,
    ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'

import { Avatar, IconButton } from "@material-ui/core"


function Header() {
    return (
        <div className="header">
            <div className="header__left" >
                <img src="FBLogo.png" />

                <div className="header__input">
                    <Search />
                    <input placeholder="Searh Facebook" type="text" />
                </div>
            </div>
            <div className="header__center" >
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right" >
                <div className="header__info">
                    <Avatar />
                    <h4>Hendy Febiansyah</h4>
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
