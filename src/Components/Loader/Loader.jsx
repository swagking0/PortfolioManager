import React from 'react'
import "../../Styles/Components/loader.css"

function Loader() {
    return (
        <div className="loader__container">
            <div className="loader__wrapper">
                <h2>loading ...</h2>
                <div className="loader__loader"></div>
            </div>
        </div>
    )
}

export default Loader
