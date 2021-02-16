import React from 'react';
// CSS
// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Components

const Article = (props) => {
    return (
        <div className="article-container">
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <p>Mutiny nipperkin crack Jennys tea cup six pounders driver main sheet haul wind run a shot across the bow mizzenmast. 
                        Quarterdeck main sheet measured fer yer chains take a caulk list gibbet boom jack brigantine.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={12} lg={12}>
                    {/* Change Img into Examplle Graphic */}
                    <img src={null} alt="Example Graphic of Budget Features"/>
                </Col>
            </Row>
        </div>
    );
}

export default Article 