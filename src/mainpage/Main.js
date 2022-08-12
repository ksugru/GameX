import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../component/Cards';
import Image from 'react-bootstrap/Image'
import { useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const posts = [
        {
            img: 'https://mobimg.b-cdn.net/v3/fetch/d3/d3453adf1225f45ecf7649238f9de2bf.jpeg?w=1470&r=0.5625',
            desc: "Такие горы",
        },
        {
            img: 'https://img1.akspic.ru/attachments/crops/3/8/0/2/0/102083/102083-nacionalnyj_park-gora-pejzazhi_gor-fjord-lofoten-2560x1440.jpg',
            desc: "Такие выходные",
        },
        {
            img: 'https://mobimg.b-cdn.net/v3/fetch/d3/d3453adf1225f45ecf7649238f9de2bf.jpeg?w=1470&r=0.5625',
            desc: "Такие горы",
        },
        {
            img: 'https://img1.akspic.ru/attachments/crops/3/8/0/2/0/102083/102083-nacionalnyj_park-gora-pejzazhi_gor-fjord-lofoten-2560x1440.jpg',
            desc: "Такие выходные",
        },
        {
            img: 'https://mobimg.b-cdn.net/v3/fetch/d3/d3453adf1225f45ecf7649238f9de2bf.jpeg?w=1470&r=0.5625',
            desc: "Такие горы",
        },
        {
            img: 'https://img1.akspic.ru/attachments/crops/3/8/0/2/0/102083/102083-nacionalnyj_park-gora-pejzazhi_gor-fjord-lofoten-2560x1440.jpg',
            desc: "Такие выходные",
        },
    ]

   
    return (
        <Container>
            <div className="mb-5" >
                <Row>
                    <Col md={12}>
                        <div className="profile-heder__container">
                            <div className="profile-heder__image">
                                <Image src="https://img.desktopwallpapers.ru/rocks/pics/wide/1920x1200/27640f370156a0e0ae3ee9608fc8480a.jpg"
                                    width={170}
                                    height={170}
                                    roundedCircle={true}
                                />
                            </div>
                            <div className="profile-heder__content">
                                <div className="mb-2" >
                                    <Form.Text className="text-muted profile-heder__login" >
                                        Login
                                    </Form.Text>
                                    <Button className="ml-2" variant="outline-dark" size="sm">Редактировать профиль</Button>
                                </div>
                                <div className="mb-2" >
                                    <Form.Text className="text-muted">
                                        Имя
                                    </Form.Text>
                                </div>
                                <Form.Text className="text-muted">
                                    Описание
                                </Form.Text>
                            </div>
                        </div>

                    </Col>


                </Row>
            </div>
            <Row>
                {posts.map((post,i) => {
                    return (
                        <Col md={4} key={i}>
                            <Cards img={post.img} desc={post.desc} />
                        </Col>
                    )
                })}

            </Row>

        </Container>
    )

}
export default Main