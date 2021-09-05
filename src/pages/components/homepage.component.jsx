import React from 'react'
import './homepage.styles.scss'
// import Directory from '../../components/directoy/directoy.component'
import Directory from '../../components/directory/directory.component'

const Homepage = () => {
    return (
        <>
            <div className="homepage">
                <Directory />
            </div>
        </>
    )
}

export default Homepage
/*
Hompage
    directory-menu
        menu-item
            content
                title
                    subtitle
*/