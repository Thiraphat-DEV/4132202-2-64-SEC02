import React, {useEffect, useState} from 'react'
// customHook
import useFetch  from './useFetch'
const createTable = () => {
    const users = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td> 
                    <td>{user.username}</td> 
                    <td>{user.email}</td> 
                    <td>{user.phone}</td> 

                </tr>
            ))}
        </>
    )
}

const genTable = (persons) => {
    return persons.map((person) => {
        const {id, name: rname, age  } = person
        return (
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
                <td>{age}</td>
            </tr>
        )
    } )
}

function dataTable() {

    const students = [
        {
            id: 1,
            name: 'thiraphat',
            age: 18
        },
        {
            id: 2,
            name: 'hello',
            age:19
        }
    ]
    return (
        <>
            <table>
                <tbody>{genTable(students)}</tbody>
            </table>
        </>
    )
}

export default dataTable