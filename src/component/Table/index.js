import React from 'react'
import Row from '../Row'

const Table = ({ questionsList, remove , update}) => {
    return (
        <div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>What</th>
                        <th>Why</th>
                        <th>Where</th>
                        <th>When</th>
                        <th>Who</th>
                        <th>How</th>
                        <th>How Much</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody >
                    {questionsList.map(list => 
                        { return <Row key={list._id} questions={list} remove={remove} update={update}/> })}
                </tbody>
            </table>
        </div>
    )
}

export default Table