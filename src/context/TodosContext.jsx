import {
    useState,
    useEffect,
    createContext,
    useContext,
  } from 'react';
  import PropTypes from 'prop-types';
  import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext(null);
export const TodosProvider = ({ children }) => {
    const getInitialTodos = () => {
        // getting stored items
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
      };
      const [todos, setTodos] = useState(getInitialTodos());
      useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
      }, [todos]);
    
    const handleChange = (id) => {
        setTodos((prevState) =>
        prevState.map((todo) => {
        if (todo.id === id) {
        return {
            ...todo,
            completed: !todo.completed,
        };
        }
        return todo;
        })
        );
    };
    const delTodo = (id) => {
        setTodos([
            ...todos.filter((todo) => {
              return todo.id !== id;
            }),
          ]);
    };
    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
          };
          setTodos([...todos, newTodo]);
      };
      const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) => {
              if (todo.id === id) {
                todo.title = updatedTitle;
              }
              return todo;
            })
          );
      };
  return (
    <TodosContext.Provider 
    value={{
        todos,
        handleChange,
        delTodo,
        addTodoItem,
        setUpdate,
      }}>
      {children}
    </TodosContext.Provider>
  );
};

TodosProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useTodosContext = () => useContext(TodosContext);
