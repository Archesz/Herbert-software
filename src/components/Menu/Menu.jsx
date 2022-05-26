import React from 'react'
import './Menu.scss'

const itens = ['Home', 'Membros', 'Sobre', 'Atualizações']

function Menu(props) {

    return (

        <div id="home-menu">

            <div className="logo"/>

            <div className="menu-items">
                
                {itens.map((item) => {
                    if(props.active === item){
                        return(
                            <div className="menu-item"><span className="item-active">{item}</span></div>
                        )
                    } else{
                        return(
                            <div className="menu-item">{item}</div>
                        )
                    }
                })}

            </div>

        </div>

    )
}

export default Menu