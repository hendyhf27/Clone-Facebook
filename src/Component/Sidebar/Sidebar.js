import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    VideoLibrary,
    ExpandMoreOutlined,
} from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Title="Hendy" src="usericon" />
            <SidebarRow Icon={LocalHospital} Title="Covid-19 Information Center" />
            <SidebarRow Icon={EmojiFlags} Title="Pages" />
            <SidebarRow Icon={People} Title="Friends" />
            <SidebarRow Icon={Chat} Title="Messager" />
            <SidebarRow Icon={VideoLibrary} Title="Video" />
            <SidebarRow Icon={ExpandMoreOutlined} Title="Marketplace" />
        </div>
    )
}

export default Sidebar