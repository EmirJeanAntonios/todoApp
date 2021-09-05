import TodoBox from "./TodoBox";
import { useContext, useEffect, useState } from "react";
import { DatabaseContext } from "../firebaseContext";


export default function TodoContainer() {
    const db = useContext(DatabaseContext);


   
    const [todos,setTodo] = useState([])
 

    useEffect(()=>{
        db.onSnapshot((querySnapshot)=>{
            setTodo(querySnapshot.docs.map((doc)=>({
                "id":doc.id,
                "date":doc.data().date,
                "time":doc.data().time,
                "tododesc":doc.data().tododesc,
                "todoname":doc.data().todoname,
                "icon":doc.data().icon,
                "isDone" : doc.data().isDone

            })))
        })
    },[])

    return (
        <section className="TODOS">
            <div className="todo-container">
                <div className="todo-row">
                    {todos && todos.map(item => <TodoBox key={item.id} isDone = {item.isDone} docid={item.id} name={item.todoname} date={item.date} description={item.tododesc} time={item.time} icon={item.icon}></TodoBox>)}




                </div>
            </div>
        </section>

    );
}