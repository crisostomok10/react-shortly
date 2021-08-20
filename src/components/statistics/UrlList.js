import React from 'react'
import UrlShortField from './UrlShortField'

function UrlList( {urlList} ) {
    return (
        urlList.map(url => {
            return <UrlShortField key={url.id} url={url}/>
        })
        // <div>Hello</div>
    )
}

export default UrlList
