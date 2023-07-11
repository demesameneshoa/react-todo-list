import { TodosProvider } from '@/context/TodosContext';
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
const TodosLogic = () => {
   
    return (
        <TodosProvider>
        <InputTodo />
        <TodosList />
      </TodosProvider>
    )
  }
  export default TodosLogic;