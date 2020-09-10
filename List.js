import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return (
                        <Item
                            content={todo.content}
                            id={todo.id}
                            key={index}
                            deleteTodo={deleteTodo}
                        />
                    )
                })
            }
        </ul>
    )
}

export default List