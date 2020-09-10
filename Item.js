

import React, { useState } from 'react' // 予めimportすることで、React. を省略可
// import React from 'react'

const Item = ({ content, id, key, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)

    const handleDelete = () => {
        deleteTodo(id)
    }

    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }} />
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }
            }>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>


    )
}
export default Item

