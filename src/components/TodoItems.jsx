import { PiCheckCircleFill } from "react-icons/pi";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <div  onClick={() => toggle(id)} className="flex flex-1 items-center cursor-pointer">
           <div  className="text-3xl text-blue-600">{
                isComplete ? <PiCheckCircleFill/> 
                : <RiCheckboxBlankCircleLine/>
            }
            </div>
            <p className={ `text-slate-700 ml-2 text-[17px] decoration-slate-500 ${isComplete ? 'line-through opacity-60' : ''}`}>{text}</p>
        </div>
        <MdDelete onClick={()=> deleteTodo(id)} className="text-2xl text-red-600 cursor-pointer mr-2 hover:bg-red-200 hover:rounded-full"/>
    </div>
  )
}

export default TodoItems