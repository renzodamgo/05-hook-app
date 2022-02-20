import React, { useEffect, useState } from 'react'
import "./form.css"

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        console.log('hey')
    }, [])

    useEffect(() => {
        console.log('FormState Cambio')
    }, [formState])

    useEffect(() => {
        console.log('email Cambio')
    }, [email])

    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
            [target.name]:target.value

        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

        </>

    )
}
