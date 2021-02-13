import React from 'react';
import { Button } from 'reactstrap';
import './index.css';

const Row = ({ questions, remove, update }) => {
    return (
        <tr className="center" key={questions._id}>
            <td>{questions.what}</td>
            <td>{questions.why}</td>
            <td>{questions.where}</td>
            <td>{questions.when}</td>
            <td>{questions.who}</td>
            <td>{questions.how}</td>
            <td>{questions.how_much}</td>
            <td>
                <div className="buttons">
                <Button color="warning" outline onClick={() => update(questions)}>
                    Editar
                    </Button>
                <Button color="danger" outline onClick={() => remove(questions)}>
                    Deletar
                    </Button>
                </div>
            </td>
        </tr>
    )
}

export default Row