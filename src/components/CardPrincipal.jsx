import React from 'react'
import "../components/CardPrincipal.css"

const CardPrincipal = (props) => {
    return (
        <>  
            <div className="contPrincipal">
                <img src={props.img} className="card" alt="imagen de Unsplash"></img>
            </div>
        </>
    )
}

export default CardPrincipal
