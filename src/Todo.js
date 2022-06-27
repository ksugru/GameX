import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const ItemRow = (props) => {

    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.date}</td>
            <td>
                <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    checked={props.data.isSuccess}
                    onChange={() => props.toggleTask(props.data.id)}
                />
            </td>
            <td>
                <Button className="btn btn-outline-danger btn-sm btn-block" variant="outline-danger" onClick={() => props.deleteTask(props.data.id)}> Удалить</Button>
            </td>
        </tr>
    )

}



const Todo = () => {

    const [nameTask, setNameTask] = useState("")
    const [date, setDate] = useState('')
    const [id, setId] = useState('')


    const [items, setItems] = useState([
        {

            id: 1,
            name: 'Задание 1',
            date: '21-03-2017',
            isSuccess: false

        },
        {

            id: 2,
            name: 'Задание 2',
            date: '21-04-2017',
            isSuccess: false

        }
    ]
    )



    const addItem = () => {
        setItems([
            ...items,
            {

                id: (items.length + 1),
                name: nameTask,
                date: date,
                isSuccess: false

            },

        ])

        setNameTask("");
        setDate('');
        setId('');


    }

    const toggleTask = (id) => {
        console.log(id)

        const callback = (item) => {
            if (id !== item.id) {
                return item
            }
            return {
                ...item,
                isSuccess: !item.isSuccess

            }


        }

        const result = items.map(callback)
        setItems(result)


    }

    const deleteTask = (id) => {
        const callback = (item) => {
            if (id === item.id) {
                return false
            }
            return true
        }
        const result = items.filter(callback)
        setItems(result)

    }

    return (
        <Container>
            <div className="mb-5" >
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">UTask</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Главная</Nav.Link>
                            <Nav.Link href="#features">Контакты</Nav.Link>
                            <Nav.Link href="#pricing">Блог</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div className="mb-5">
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Введите название" value={nameTask} onChange={(e) => { setNameTask(e.target.value) }} />
                    <Form.Control className="me-auto" placeholder="Введите дату" value={date} onChange={(e) => { setDate(e.target.value) }} />
                    <Button variant="outline-success" onClick={addItem} >Добавить</Button>
                    <div className="vr" />
                    <Button variant="outline-danger" onClick={() => { setNameTask(""); setDate(''); }}>Стереть</Button>
                </Stack>
            </div>


            <div className="mb-5" >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Название</th>
                            <th>Дата</th>
                            <th>Выполнено</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {items.map((item) => (
                            <ItemRow key={item.id} data={item} toggleTask={toggleTask} deleteTask={deleteTask} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>


    )
}

export default Todo