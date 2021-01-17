import './SidebarRow.css'
import { Avatar } from '@material-ui/core'

const SidebarRow = ({ src, Icon, Title }) => {
    return (
        <div className="sidebar-row">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{Title}</h4>
        </div>
    )
}

export default SidebarRow