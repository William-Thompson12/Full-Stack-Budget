import React from 'react';
// CSS
import '../components/actionContainer.css';
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Components

const Article = (props) => {
    return (
        <div className="action-container">
            <Row>
                <Col sm={12} md={10} lg={10}>
                    <p>Mutiny nipperkin crack Jennys tea cup six pounders driver main sheet haul wind run a shot across the bow mizzenmast. 
                        Quarterdeck main sheet measured fer yer chains take a caulk list gibbet boom jack brigantine.
                        Mutiny nipperkin crack Jennys tea cup six pounders driver main sheet haul wind run a shot across the bow mizzenmast.</p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={10} lg={10}>
                    {/* Change Img into Examplle Graphic */}
                    <img src={null} alt="Example Graphic of Budget Features"/>
                </Col>
            </Row>
        </div>
    );
}

export default Article 