import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Authorization from './Authorization';
import Registration from './Registration';


const Auth = () => {


    

    return (
        <Container>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >

                <Tab eventKey="home" title="Вход">
                    <Authorization/>
                </Tab>
                <Tab eventKey="profile" title="Регистрация">
                    <Registration/>
                </Tab>

            </Tabs>
        </Container>
    )
}

export default Auth