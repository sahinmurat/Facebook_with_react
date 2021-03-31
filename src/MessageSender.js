import { Avatar } from '@material-ui/core'
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import VideocamIcon from "@material-ui/icons/Videocam";
import React, { useState } from 'react'
import './MessageSender.css'

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('');
        setImageUrl('')
    }

    const handleMessage = (e) =>{
        setInput(e.target.value)
    }

    const handleImage = (e) =>{
        setImageUrl(e.target.value)
    }

    return (
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar />
                <form action="">
                    <input
                        value={input}
                        onChange={handleMessage}
                        className='messageSender_input'
                        placeholder={'Whats on your mind'}
                        type="text" />
                    <input
                        value={imageUrl}
                        onChange={handleImage}
                        placeholder="image URL (optional"
                        type="text" />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
