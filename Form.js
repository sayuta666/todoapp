import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)

        if (value === '') {
            alert('何も記入されていません')    // 演習１
            return false
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )

}

export default Form

