import React from 'react'
import {useSelector} from 'react-redux'
import { todosSelector } from '../store/reducer/todosSlice';

const Navbar = () => {
    const todos = useSelector(todosSelector)

  return (
    <div className='navbar'>
        <h1>
            My redux
            
        </h1>
        <ul>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Total todo: {todos.length}
            </li>
        </ul>
    </div>
  )
}

export default Navbar