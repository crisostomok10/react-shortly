import React, { useState, useRef } from 'react';
import './Statistics.css';
import UrlList from './UrlList';
import shortid from 'shortid';

function UrlField() {

    const [urlList, setUrlList] = useState([]);
    const [urlMsg, setUrlMsg] = useState("Shorten a link here...");
    const [loading, setLoading] = useState(true);

    const urlInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUrl = urlInputRef.current.value
        const newId = shortid.generate()
        const textBox = document.getElementById("url-input-field");

        console.log(validURL(newUrl));
        
        if (validURL(newUrl)) {
            textBox.classList.remove("red-outline")
            document.getElementById("url-input-field").disabled = true;
            document.getElementById("url-submit-btn").disabled = true;
            setUrlMsg("Please wait while we shorten your URL...")
            setLoading(false)

            fetch("https://api.shrtco.de/v2/shorten?url="+newUrl)
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("url-input-field").disabled = false;
                document.getElementById("url-submit-btn").disabled = false;
                setUrlList(prevUrlList => {
                    // return [...prevUrlList, {id: newId, long: newUrl, short: data.result.full_short_link}]
                    return [{id: newId, long: newUrl, short: data.result.full_short_link}]
                })
                setLoading(true)
                setUrlMsg("Shorten a link here...")
            });

            urlInputRef.current.value = null
            
        } else {
            setUrlMsg("Invalid Url. Please Enter a valid Url...")
            urlInputRef.current.value = null
            textBox.classList.add("red-outline")
        }
        
    }

    const validURL = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

    return (
        <>
        <div className="url-field-container">
            <form className="url-field-wrap" onSubmit={handleSubmit}> 
                <input id="url-input-field" className="url-input-field" type="text" 
                    ref={urlInputRef}
                    placeholder ={urlMsg}
                />
                <input id="url-submit-btn" className="url-submit-btn" type="submit" value="Shorten It!"/>
            </form>
        </div>
        <div id={loading ? "hidden" : ""} className="loader"></div>
        <div id={loading ? "" : "hidden"} className="short-url-wrap">
            <UrlList urlList={urlList}/>
        </div>
        </>
    )
}

export default UrlField
