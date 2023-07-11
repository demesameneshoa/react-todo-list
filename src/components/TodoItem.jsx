import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import PropTypes from 'prop-types';
import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';
import { useTodosContext } from '@/context/TodosContext';
const TodoItem = ({ itemProp }) => {
    const { handleChange, delTodo, setUpdate } = useTodosContext();
    const [updateInput, setUpdateInput] = useState(itemProp.title);
    const [editing, setEditing] = useState(false);
    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }
    const handleEditing = () => {
        setEditing(true);
      };
    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
            setUpdate(updateInput, itemProp.id);
            setEditing(false);
        }
    };
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
    return (
        <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
            <input 
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
         />
         <button onClick={handleEditing}><AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }}/></button>
        <button onClick={() => delTodo(itemProp.id)}><FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }}/></button>
        <span style={itemProp.completed ? completedStyle : null}>
        {updateInput}
        </span>
        </div>
        <input style={editMode}
        type="text"
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
        value={updateInput}
        className={styles.textInput}
        />
        </li>
    );
   
  };

  TodoItem.propTypes = {
    itemProp: PropTypes.any,
  };
  export default TodoItem;
  