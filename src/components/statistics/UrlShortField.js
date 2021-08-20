import React, { useState } from 'react'

function UrlShortField({ url }) {

    const [copyToggle, setCopyToggle] = useState(true);

    const handleCopy = () => {
        navigator.clipboard.writeText(url.short);
        setCopyToggle(false)
    }

    return (
        <>
        <h2 className="url-success-msg">Congratulations! We have successfully shortened your Link!</h2>
        <div className="short-url-container">
            <div className="long-url">
                {url.long}
            </div>
            <div className="short-url">
                <a href={url.short} target="_blank">{url.short}</a>
                <button id={!copyToggle ? "hidden" : ""} onClick={handleCopy}>Copy</button>
                <button className="copied-btn" id={copyToggle ? "hidden" : ""} disabled>Copied</button>
            </div>
        </div>
        </>
    )
}

export default UrlShortField
