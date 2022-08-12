import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const registration = () => {
        console.log(data)

        axios.post("/user/signup",
            {
                "login": data.email,
                "password": data.password,
            }

        ).then((response) => {
            console.log(response)
            localStorage.setItem('token', response.data.token)
            navigate('/')
        }).catch(
            (response) => { console.log(response) }
        )

    }
    return (
        <div className="mb-5" >
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form>

                        <Form.Control className="mb-3" type="email" placeholder="Введите email" value={data.email} onChange={(e) => {
                            setData({
                                ...data,
                                email: e.target.value
                            })
                        }} />
                        <Form.Control className="mb-3" type="password" placeholder="Введите пароль" value={data.password} onChange={
                            (e) => {
                                setData({
                                    ...data,
                                    password: e.target.value
                                })
                            }
                        } />
                        <Form.Control className="mb-3" type="password" placeholder="Повторите пароль" />
                        <Button variant="primary" onClick={registration}>
                            Зарегистрироваться
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default Registration