import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import robot from '../assets/img/robot.png';
import todo from '../assets/img/todo.png';
import faceapp from '../assets/img/faceapp.png';
import bg from '../assets/img/bg.png';
import javatodo from '../assets/img/javatodo.png';
import robofriends1 from '../assets/img/robofriends.png';


class Carousal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Face Recognition App',
                    subTitle: 'Built with React',
                    imgSrc: faceapp,
                    link: 'https://ghost-brain.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'ToDo App',
                    subTitle: 'Built with React',
                    imgSrc: todo,
                    link: 'https://murmuring-hamlet-87236.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'RoboFriends App',
                    subTitle: 'Built with React & Redux with RoboHash API',
                    imgSrc: robofriends1,
                    link: 'https://robofriendspro.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Background Generator',
                    subTitle: 'Built with javascript',
                    imgSrc: bg,
                    link: 'https://bamz-west.github.io/background-generator/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'ToDo List',
                    subTitle: 'Built with javascript',
                    imgSrc: javatodo,
                    link: 'https://bamz-west.github.io/Dom/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Robot',
                    subTitle: 'Simple Robot built with css',
                    imgSrc: robot,
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
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id} />
        });
    }

    render() {

        return(
            <Container fluid={true}>
                <Row className="card-container">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );

    }

}

export default Carousal;