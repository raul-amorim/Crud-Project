import React, { useEffect, useState } from 'react';
import Table from '../Table';
import Form from '../Form';
import ModalForm from '../ModalForm';
import ToastAlert from '../ToastAlert';
import { Button, Fade } from 'reactstrap';
import { addQuestion, editQuestion, getList, removeQuestion } from '../../service/mongo';
import './index.css';

const initialState = {
    questions: { _id: '', what: '', why: '', when: '', where: '', who: '', how: '', how_much: '' },
    list: []
}

const Crud = () => {

    const [questions, setQuestions] = useState(initialState.questions)

    const [list, setList] = useState([])

    const [modal, setModal] = useState(false)

    const [fadeToggle, setFadeToggle] = useState(false)

    const [mensagemAlert, setMensagelAlert] = useState("")

    function clear() {
        setQuestions(initialState.questions)
        toggleModal()
    }

    async function updateList() {
        const response = await getList()
        setList(response.data.list)
    }

    async function save(data) {
        try {
            const request = {
                what: data.what,
                why: data.why,
                when: data.when,
                where: data.where,
                who: data.who,
                how: data.how,
                how_much: data.how_much
            };
            !!data._id ? (
                (await editQuestion(data._id, request))
            ) : (
                (await addQuestion(request))
            )
            clear();
            setMensagelAlert("Sucesso!")
        } catch (error) {
            setMensagelAlert("Erro!")
            console.log(error)
        } finally {
            updateList();
            showToast();
        }
    }

    function updateField(questions) {
        setQuestions(questions)
        toggleModal()
    }

    async function remove(questions) {
        await removeQuestion(questions._id)
        updateList()
        showToast();
    }

    function toggleModal() {
        setModal(!modal)
    }

    function showToast(){
        setFadeToggle(true)
        setTimeout(() => {setFadeToggle(false)}, 2500)
    }

    useEffect(() => {
        updateList()
    }, [list])

    return (
        <div >
            <ToastAlert open={fadeToggle} mensagem={mensagemAlert}/>
            <div className="header">
                <h2>Metodologia 5W2H</h2>
            </div>
            <div className="container">
                <ModalForm isOpen={modal}>
                    <Form questions={questions} cancel={clear} save={save} />
                </ModalForm>
                <div className="wrapper">
                    <div className="actions">
                        <h4>Planos de Ação:</h4>
                        <Button onClick={() => toggleModal()}>Adicionar</Button>
                    </div>
                    <div className="table">
                        <Table questionsList={list} remove={remove} update={updateField} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crud