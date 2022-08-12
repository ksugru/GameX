import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const Authorization = () => {
    
    const[data, setData] = useState({
        email: "",
        password: "",
    })


    const authorization = () => {
        console.log(data)
        setData({
            email: "",
            password: "",
        }

)
    }

   const setDataByKey = (key, e) => {
        setData({
            ...data,
            [key]: e.target.value,
        })
    }


    return (
        <div className="mb-5" >
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form>
                        <Form.Control className="mb-3" type="email" placeholder="Введите email" value={data.email} onChange={
                            (e) => setDataByKey ('email',e)
                            } />
                        <Form.Text className="text-muted">
                            Ввведите email указанный при регистрации
                        </Form.Text>
                        <Form.Control className="mb-3" type="password" placeholder="Введите пароль" value={data.password} onChange={
                            (e) => { 
                                setDataByKey('password', e)
}} />
                        <Button variant="primary" onClick={authorization}>
                            Войти
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default Authorization