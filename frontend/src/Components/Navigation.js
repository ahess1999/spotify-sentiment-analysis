import React from 'react'
import './Navigation.css'
export default function Navigation(props) {

    const logged_out_nav = (
        <div>
            <button id='navbuttons' onClick={() => props.display_form('signup')}>Signup</button>
            <button id='navbuttonl' onClick={() => props.display_form('login')}>Login</button>
        </div>
    )

    return (
        <div>
            {logged_out_nav}
        </div>
    )
}
