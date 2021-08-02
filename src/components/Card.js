import React from 'react';
// import Cardinfo from './Cardinfo';


function Card(props) {
    
    return(

        // <div className="d-inline-block" onClick={(e) => props.click(props.item)}>
        //     <div className="">
        //         <img src={props.item.imgSrc} alt={props.item.imgSrc} />
        //     </div>
        //     <div>
        //         { props.item.selected && <Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        //     </div>
        // </div>

        <div className="d-block">
            <div className="card">
                <div className="card-img">
                    <img src={props.item.imgSrc} alt={props.item.imgSrc} />
                </div>
                <div className="card-info">
                    <h4>{props.item.title}</h4>
                    <p className="card-info-p">{props.item.subTitle}</p>
                    <a href={props.item.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </div>

    );

}

export default Card;