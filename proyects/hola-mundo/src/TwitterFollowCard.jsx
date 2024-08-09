import React, { useState } from "react";


// Podemos pasar funciones y objetos como props y utilizarlas en el componente ademas se pueden nombrar valores por defecto a los props
function TwitterFollowCard({ children, userName = 'unknow', initialIsFollowing }) {
    //Podemos utilizar hooks para manejar el estado de un componente
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    //PFuncion que cambia el estado de isFollowing
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    //Podemos utilizar operadores ternarios para asignar una clase u otra   
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-Following'
        : 'tw-followCard-button';
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt={`Avatar of ${userName}`}
                    src={`https://unavatar.io/${userName}`}
                />
                <div className="tw-followCard-info">
                    {/* //Se usa el children para mostrar el contenido que se pasa entre las etiquetas del componente */}
                    <strong>{children}</strong>
                    {/* Podemos utilizar funciones que pasamos como props */}
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                {/* //Podemos utilizar operadores ternarios para asignar una clase u otra */}
                {/* //Se llama a la funcion handleClick cuando se hace click en el boton */}
                <button className={buttonClassName} onClick={() => handleClick()}>
                    {/*Podemos utilizar operadores ternarios para mostrar un texto u otro */}

                    <span className="tw-followCard-text">{isFollowing ? 'Siguiendo' : 'Seguir'}</span>

                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;
