import React from 'react'
import {ReactComponent as HomeImg} from '../../assets/svg/homeImg.svg'
import {ReactComponent as GitHubImg} from '../../assets/svg/github.svg'
import './Home.css'

export class Home extends React.Component{


    render (){
        return <div className="Home">
                    <HomeImg></HomeImg>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, amet omnis exercitationem sequi nesciunt vel eaque deserunt reprehenderit adipisci quod? Labore dicta temporibus necessitatibus tempora repellat tenetur consequuntur enim nemo.</p>
                        <h3>Desenvolvedores</h3>
                    <div className="devs">
                        <div className="dev">
                            <h3>Gabriel Nóbrega</h3>
                            <GitHubImg></GitHubImg>
                        </div>
                        <div className="dev">
                            <h3>João Felipe</h3>
                            <GitHubImg></GitHubImg>
                        </div>
                    </div>
                </div>
    }
}