import React from 'react'
import Button from '../components/Button/Button'
import '../styles/home.scss'

import Menu from '../components/Menu/Menu'
import InfoCard from '../components/InfoCard/InfoCard'

import open from '../assets/images/open-source.png'
import services from '../assets/images/services.png'
import user from '../assets/images/user.png'

function Home() {

    return (
        <div className="home-container">
            
            <Menu active="Home"/>

            <div id="home-left">

                <div className="home-content">

                    <span className="home-title">Bem vindo Herbertianx</span>

                    <span className="home-subtitle">Para uso pessoal do Herbert de Souza.</span>

                    <span className="home-descript">Software desenvolvido por Archesz para o Projeto Popular Cursinho Herbert de Souza.</span>

                    <Button classes="full big" text="Start"/>

                </div>

            </div>

            <div id="home-rigth">

            </div>

            <div id="home-footer">

                <InfoCard title="Open Source" descript="Software de código aberto disponível no github." img={open}/>
                <InfoCard title="Reprodutibilidade" descript="Reprodutibilidade para outros projetos que utilizem sistemas semelhantes" img={services}/>
                <InfoCard title="Usuários" descript="Desenvolvido para facilitar o trabalho da secretaria, professores e coordenadores." img={user}/>

            </div>

        </div>
    )
}

export default Home