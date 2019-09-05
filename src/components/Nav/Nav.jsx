import React from 'react'
import './Nav.css'

export class Nav extends React.Component{


    render (){
        return <div className="Nav">
            <i>Logo</i>
            <div className="buttons">
                <button><a href="/duvidas">Duvidas</a></button>
                <button><a href="/howTo">Como usar</a></button>
                <button><a href="/">Home</a></button>
            </div>
        </div>

    }
}