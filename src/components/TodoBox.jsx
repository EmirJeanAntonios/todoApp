
import { useRef,useContext, useEffect, useState, useCallback } from "react";
import Icon from './icon'
import completebtn from '../public/img/complete.svg'
import deletebtn from '../public/img/delete.svg'
import {DatabaseContext} from '../firebaseContext';
export default function TodoBox({ name, description, date, time,icon,docid,isDone }) {
    const descBox = useRef(null)


    const db = useContext(DatabaseContext);
  
    const touch = (e) => {
       

        

        if (descBox.current.classList.contains("active")) {
            descBox.current.classList.remove("active")
            descBox.current.lastChild.style.maxHeight = null;
        }else{
            descBox.current.classList.add("active")
            descBox.current.lastChild.style.maxHeight = descBox.current.lastChild.scrollHeight + "px";
        }
       

    }
    const [done,setDone] = useState(false)

    db.doc(docid).get().then(snapshot=>{
        if (snapshot.data().isDone) {
            setDone(true)
        }else{
            setDone(false)
        }
    })

   useEffect(()=>{

    if (done) {
        descBox.current.classList.add("done")
        
    }

   },[done])


    const complete = (e) =>{
        e.preventDefault();

        setDone(true);
        db.doc(docid).update({
            "isDone" : true
        })
    }


    const deleteClick = (e) => {
        e.preventDefault();
        db.doc(docid).delete()

    }


    return (

        <div className="todo-box" id ={docid}  ref={descBox} onClick={touch} > 
           
            <div className="img-container">
           
              <Icon shape={icon} point={true}></Icon>
            </div>

            <div className="content">
                <p>{name}</p>
            </div>
            <div className="date-contanier">
                <span className="date">{date}</span>
                <span className="time">{time}</span>
            </div>
            <div className="desc">
                <p >{description}</p>
                <div className="buttons">
                <a href="#" onClick={complete}>
                    <img src={completebtn} alt="" />
                </a><a href="#" onClick={deleteClick}>
                    <img src={deletebtn} />
                </a>
                </div>
               
            </div>
        </div>
    )
}