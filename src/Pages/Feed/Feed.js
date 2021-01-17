import "./Feed.css"
import StoryReel from "../../Component/Story/StoryReel"
import MessageSender from "../../Component/MessageSender/MessageSender"
const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

        </div>
    )
}

export default Feed