import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Cards = ({img,desc}) => {
 
    return (
        <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cards