import React from 'react'
import './Nav.css'

export class Nav extends React.Component{


    render (){
        return <div className="Nav">
            <i>Logo</i>
            <div className="buttons">
                <a className = "button"  href="/duvidas"><p className="linkText">Duvidas</p></a>
                <a className = "button" href="/howTo"><p className="linkText">Como Usar</p></a>
                <a className = "button" href="/"><p className="linkText">Home</p></a>
            </div>
        </div>

    }
}