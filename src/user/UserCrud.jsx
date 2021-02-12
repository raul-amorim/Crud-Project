import React, { useEffect, useState } from 'react'
import Table from '../component/Table'
import Form from '../component/Form'
import ModalForm from '../component/ModalForm'
import { Button } from 'reactstrap'
import { addQuestion, editQuestion, getList, removeQuestion } from '../service/mongo'

const initialState = {
    questions: { _id: '', what: '', why: '', when: '', where: '', who: '', how: '', how_much: '' },
    list: []
}

export const UserCrud = () => {

    const [questions, setQuestions] = useState
        ({ _id: '', what: '', why: '', when: '', where: '', who: '', how: '', how_much: '' })

    const [list, setList] = useState([])

    const [modal, setModal] = useState(false)

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
                where: data.where,
                when: data.when,
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
        } catch (error) {
            console.log(error)
        } finally {
            updateList();
        }
    }

    function updateField(questions) {
        setQuestions(questions)
        toggleModal()
    }

    async function remove(questions) {
        await removeQuestion(questions._id)
        updateList()
    }

    function toggleModal() {
        setModal(!modal)
    }

    useEffect(() => {
        updateList()
    }, [list])

    return (
        <div >
            <h2>Metodologia 5W2H</h2>
            <hr></hr>
            <ModalForm isOpen={modal}>
                <Form questions={questions} cancel={clear} save={save} />
            </ModalForm>
            <h4>Planos de Ação:</h4>
            <Button onClick={() => toggleModal()}>add</Button>
            <Table questionsList={list} remove={remove} update={updateField} />
        </div>
    )
}

export default UserCrud