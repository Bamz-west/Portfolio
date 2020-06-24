import React from 'react';
import Cardinfo from './Cardinfo';


function Card(props) {
    
    return(

        <div className="d-inline-block b-card" onClick={(e) => props.click(props.item)}>
            <div className="b-card-image">
                <img src={props.item.imgSrc} alt={props.item.imgSrc} />
            </div>
            { props.item.selected && <Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>

    );

}

export default Card;