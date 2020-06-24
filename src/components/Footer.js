import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="navbar fixed-bottom">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Bamise Deolu
                    </Col>
                    <Col className="p-0 justify-content-end" md={3} sm={12} >
                        This site was made by Bamise Adeolu
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}


export default Footer;