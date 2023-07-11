import TodoItem from "@/components/TodoItem";
import PropTypes from 'prop-types';
import { useTodosContext } from '@/context/TodosContext';
const TodosList = ({ handleChange, delTodo, setUpdate }) => {
    const { todos } = useTodosContext();
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate}/>
        ))}
      </ul>
    );
  };

TodosList.propTypes = {
    handleChange: PropTypes.any,
    delTodo: PropTypes.any,
    setUpdate: PropTypes.any,
}
  export default TodosList;