import React, { useState } from 'react'
import { Avatar, Icon } from '@material-ui/core'
import './MessageSender.css'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'

const MessageSender = () => {
    const [input, setInput] = useState(' Test ')
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        // some clever db stuff

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="message-sender">
            <div className="message-sender__top">
                <Avatar src={`wajah.jpeg`} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="message-sender__input"
                        placeholder={`What's on your mind, Hendy ?`}
                    />

                    <input
                        // value={imageUrl}
                        // onChange={(e) => setImageUrl(e.target.value)}
                        placeholder={`imageUrl (optional)`}
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="message-sender__bottom">
                <div className="message-sender__option">
                    <Videocam style={{ color: "red" }} />
                    <h3> Live Video</h3>
                </div>

                <div className="message-sender__option">
                    <PhotoLibrary style={{ color: "green" }} />
                    <h3> Photo / Video </h3>
                </div>

                <div className="message-sender__option">
                    <InsertEmoticon style={{ color: "orange" }} />
                    <h3> Feeling / Activity </h3>
                </div>
            </div>



        </div>
    )
}
export default MessageSender