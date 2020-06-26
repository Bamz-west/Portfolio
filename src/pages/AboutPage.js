import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    
    return(
        <div className="custom-2">
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Adeolu. I'm a full stack web developer with experience in Javascript, Express JS, Node JS, PHP, Laravel, mySQL, Postgres SQL and React</p>

                <p>I'm constantly learning new things, currently those things include gaining more experience with React, NodeJS, ExpressJS and Laravel</p>

                <p>Currently I improve my skills by watching tutorials on YouTube and using resources like <a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer">freecodecamp</a> to further improve my knowledge and skills</p>
            </Content>
        </div>
    );
    
}

export default AboutPage;