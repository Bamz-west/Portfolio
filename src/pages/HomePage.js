import React from 'react';


import user2 from '../assets/img/user2.jpg';

function HomePage(props) {
    
    return(

        <section className="intro">
            <h1 className="section-title section-title-intro custom">
                Hi, I am <strong className="strong">Bamise Adeolu</strong>
            </h1>
            <p className="section-subtitle section-subtitle-intro">
                Full Stack Web Developer
            </p>
            <img src={user2} alt="" className="intro-img"></img>
        </section>

    );

}

export default HomePage;