import React from 'react'
import { Button } from 'reactstrap'

const Row = ({ questions, remove, update }) => {
    return (
        <tr key={questions._id}>
            <td>{questions.what}</td>
            <td>{questions.why}</td>
            <td>{questions.where}</td>
            <td>{questions.when}</td>
            <td>{questions.who}</td>
            <td>{questions.how}</td>
            <td>{questions.how_much}</td>
            <td>
                <Button color="warning"onClick={() => update(questions)}>
                    Edit
                    </Button>
                <Button color="danger" onClick={() => remove(questions)}>
                    Delete
                    </Button>
            </td>
        </tr>
    )
}

export default Row