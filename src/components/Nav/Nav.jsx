import React from 'react'
import './Nav.css'
import {withRouter} from 'react-router-dom';


class Nav extends React.Component{


    render (){
        return <div className={"Nav " + this.getPath()}>
            <div className="logo">
                <i>Logo</i>
            </div>
            <div className="buttons">
                <a id="duvidasLink" className = "button"  href="/duvidas"><p className="linkText">Duvidas</p></a>
                <a id="howToLink" className = "button" href="/howTo"><p className="linkText">Como Usar</p></a>
                <a id="homeLink" className = "button" href="/"><p className="linkText">Home</p></a>
            </div>
        </div>

    }


    getPath(){
        let path = this.props.location.pathname
        return path.slice(1) || "home" 

    }
}

export default withRouter(Nav)