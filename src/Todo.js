import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from './component/Loader';
import moment from 'moment';




const ItemRow = (props) => {

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.data.text}</td>
            <td>{moment(props.data.date).format('DD.MM.YYYY')}</td>
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
    const [items, setItems] = useState([])
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate()

    const addItemBackEnd = async () => {
        setIsShow(true)
        await axios.post("/task",
            {
                "text": nameTask,
                "isSuccess": false,
                "date": date
            }
        ).catch((respons) => {
            alert('Все пропало, гипс снимают-клиент уезжает')
        })

        setIsShow(false)

    }


    const loadData = () => {
        return axios.get('/task')
            .then((response) => {
                console.log(response)
                setItems(response.data)
            }).catch((response) => {
                console.log(response)
                if (response.response.status === 401) {
                    navigate('/auth')
                }

            })
    }

    useEffect(() => { loadData() }, [])

    const addItem = () => {

        addItemBackEnd().then(loadData)

        setNameTask("");
        setDate('');
        setId('');


    }

    const toggleTask = (id) => {
        const callback = (item) => {
            if (id === item.id) {
                return true
            }
        }
        const result = items.find(callback)
        console.log(result)

        result.isSuccess = !result.isSuccess
        setIsShow(true)
        axios.put("/task/" + id,
            result,
        ).then(loadData).then(() => setIsShow(false))


    }

    const deleteTask = (id) => {
        setIsShow(true)
        axios.delete('/task/' + id)
            .then(loadData)
            .then(() => setIsShow(false))
    }

    return (
        <>
            <Container>

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

                            {items.map((item, i) => (
                                <ItemRow index={i} key={item.id} data={item} toggleTask={toggleTask} deleteTask={deleteTask} />
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
            <Loader isShow={isShow} />
        </>

    )
}

export default Todo