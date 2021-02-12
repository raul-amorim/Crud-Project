import React from 'react'
import { Formik, Field, Form as FormikForm } from 'formik';
import { Button, Input, ModalFooter } from 'reactstrap';

const Form = ({ questions, cancel, save }) => {
    return (

        <Formik
            initialValues={questions}
            onSubmit={(values) => save(values)}
        >
            <FormikForm>
                <label htmlFor="what">What</label>
                <Input tag={Field} id="what" name="what" />

                <label htmlFor="why">Why</label>
                <Input tag={Field} id="why" name="why" />

                <label htmlFor="where">Where</label>
                <Input tag={Field} id="where" name="where" />

                <label htmlFor="when">When</label>
                <Input tag={Field} id="when" name="when" />

                <label htmlFor="who">Who</label>
                <Input tag={Field} id="who" name="who" />

                <label htmlFor="how">How</label>
                <Input tag={Field} id="how" name="how" />

                <label htmlFor="how_much">How Much</label>
                <Input tag={Field} id="how_much" name="how_much" />

                <ModalFooter>
                    <Button type="submit">Salvar</Button>
                    <Button onClick={() => cancel()}>Cancelar</Button>
                </ModalFooter>

            </FormikForm>
        </Formik>

   )
}

export default Form