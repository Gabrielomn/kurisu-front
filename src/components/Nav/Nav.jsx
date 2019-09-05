import React from 'react'
import './Nav.css'

export class Nav extends React.Component{


    render (){
        return <div className="Nav">
            <i>Logo</i>
            <div className="buttons">
                <button>Home</button>
                <button>Duvidas</button>
                <button>About Us</button>
            </div>
        </div>

    }
}