import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import robot1 from '../assets/img/robot1.png';
import todos from '../assets/img/todos.png';
import faceapp1 from '../assets/img/faceapp1.png';
import bg1 from '../assets/img/bg1.png';
import javatodos from '../assets/img/javatodos.png';
import robofriends1 from '../assets/img/robofriends.png';
import covid from '../assets/img/covid.png';
import mapPin from '../assets/img/map-pin.png';


class Carousal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Covid-19 Tracker',
                    subTitle: 'Detailed list of covid-19 cases in Nigeria',
                    imgSrc: covid,
                    link: 'https://covid19-tracker-ng.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Map-pin App',
                    subTitle: 'A map enabling registered users to pin and rate different locations',
                    imgSrc: mapPin,
                    link: 'https://travel-pin-frontend.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Face Recognition App',
                    subTitle: 'Detects the faces on pictures uploaded',
                    imgSrc: faceapp1,
                    link: 'https://ghost-brain.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'ToDo App',
                    subTitle: 'An app for tracking tasks',
                    imgSrc: todos,
                    link: 'https://react-todo-list-application.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'RoboFriends App',
                    subTitle: 'Built with React & Redux with RoboHash API',
                    imgSrc: robofriends1,
                    link: 'https://robofriendspro.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Background Generator',
                    subTitle: 'Built with javascript',
                    imgSrc: bg1,
                    link: 'https://bamz-west.github.io/background-generator/',
                    selected: false
                },
                {
                    id: 6,
                    title: 'ToDo List',
                    subTitle: 'Built with javascript',
                    imgSrc: javatodos,
                    link: 'https://bamz-west.github.io/Dom/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Robot',
                    subTitle: 'Simple Robot built with css',
                    imgSrc: robot1,
                    link: 'https://bamz-west.github.io/bamzwest.github.io/',
                    selected: false
                }
                
            ]
        }
    }

    handleCardClick = (id, card) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({ items });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id.e))} key={item.id} />
        });
    }

    render() {

        return(
            <Container fluid={true}>
                <Row className="card-container ml-5">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );

    }

}

export default Carousal;