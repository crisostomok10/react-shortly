import React from 'react'
import './Statistics.css'
import iconRecognition from '../../images/icon-brand-recognition.svg'
import iconRecords from '../../images/icon-detailed-records.svg'
import iconCustomizable from '../../images/icon-fully-customizable.svg'
import UrlField from './UrlField'

function statistics() {
    return (
        <div className="statistics-container">
            <UrlField />
            <div className="statistics-wrap">
                <div className="statistics-text-container">
                    <div className="statistics-header">
                        Advanced Statistics
                    </div>
                    <div className="statistics-body">
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </div>
                </div>
                <div className="statistic-cards-container">
                    <div className="background-line"></div>
                    <div className="statistic-card card-1">
                        <div className="icon-container">
                            <img src={iconRecognition} alt="" />
                        </div>
                        <div className="card-text-container">
                            <div className="card-header">
                                Brand Recognition
                            </div>
                            <div className="card-body">
                                Boost your brand recognition with 
                                each click. Generic links don't mean 
                                a thing. Branded links help instill 
                                confidence in your content.
                            </div>
                        </div>
                    </div>
                    <div className="statistic-card card-2">
                        <div className="icon-container">
                            <img src={iconRecords} alt="" /> 
                        </div>
                        <div className="card-text-container">
                            <div className="card-header">
                                Detailed Records
                            </div>
                            <div className="card-body">
                                Gain insights into who is clicking your 
                                links. Knowing when and where 
                                people engage with your content 
                                helps inform better decisions.
                            </div>
                        </div>
                    </div>
                    <div className="statistic-card card-3">
                        <div className="icon-container">
                            <img src={iconCustomizable} alt="" />
                        </div>
                        <div className="card-text-container">
                            <div className="card-header">
                                Fully Customizable
                            </div>
                            <div className="card-body">
                                Improve brand awareness and 
                                content discoverability through 
                                customizable links, supercharging 
                                audience engagement.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default statistics
