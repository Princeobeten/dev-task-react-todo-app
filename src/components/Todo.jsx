import { FaRegCalendarPlus } from "react-icons/fa";
import TodoItems from './TodoItems';
import { useEffect, useRef, useState } from "react";

const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem('todos')? JSON.parse(localStorage.getItem('todos')) : []);

    const inputRef = useRef();
    
    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === '') {
            return null;
        }

        // New Todo List Obejet
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }

        // adding the todo list obetject to the Todo list setter method and adding previous todo list.
        setTodoList((prev)=> [...prev, newTodo]);
        inputRef.current.value=''; // clearing the input field
    }

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
        });
    }

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            });
        });
    }

    useEffect(() => {localStorage.setItem('todos', JSON.stringify(todoList));},[todoList]);


    return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

        {/* Title */}
        <div className="flex items-center mt-7 gap-2">
            <FaRegCalendarPlus className="text-2xl"/>
            <h1 className="text-3xl font-semibold text-blue-600">To-Do List</h1>
        </div>

        {/* Input box */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} type="text" placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' />
            <button onClick={add} className='border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-blue-700'>Add +</button>
        </div>

        {/* Todo itmes */}
        <div className="h-80 max-h-96 overflow-y-scroll">
            {todoList.map((item, index) => {
                return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
            })}
        </div>
    </div>
    )
}

export default Todo