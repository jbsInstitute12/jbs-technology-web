import React from 'react'
import { Link } from 'react-router-dom'

function Common({title}) {
    return (
        <>
            <div className="common-text">
                <h1 >{title}</h1>
                <div className="common-text-p">
                    <p><Link to="/">Home</Link> - {title}</p>
                </div>
            </div>
        </>
    )
}

export default Common