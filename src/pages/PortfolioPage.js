import React from 'react';


import Hero from '../components/Hero';
import Carousal from '../components/Carousal'


function PortfolioPage(props) {
    
    return(
        <div className="custom">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousal />
        </div>
    );
    
}

export default PortfolioPage;