

import { forwardRef,useCallback,useContext, useEffect, useRef, useState } from "react";
import Icon from './icon'
import{DatabaseContext} from "../firebaseContext";




 function AddMenu(props, ref){

    const db = useContext(DatabaseContext);

    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [icon,setIcon] = useState("");
   

    const iconRow = useRef(null);

  
 
    const submitedForm = (e) =>{
        e.preventDefault();
    

       

       db.doc().set({
           "date":date,
           "time":time,
           "icon":icon,
           "tododesc":desc,
           "todoname":name,
           "isDone":false
       });

     



    }
    const IconClick = (e) =>{
        e.preventDefault()
        setIcon(e.currentTarget.attributes.href.value.replace("#",""))

        iconRow.current.childNodes.forEach(item=>{
            // console.log( item.children[0].classList.contains("active"))
            if (item.children[0].classList.contains("active") && item.children[0]) {
                item.children[0].classList.remove("active");
            }
        })
        e.currentTarget.classList.add("active");

        

    }

    return(
        <div className="add-menu" ref={ref}>
        <h2>NEW TASK</h2>

        <div className="icon-set">
            <p>Icon</p>
            <div className="icon-row" ref ={iconRow}>
                <div className="icon-box">
                    <a href="#basketball" onClick={IconClick} >
                        <div className="img-container">
                        <Icon shape="basketball" point={false}></Icon>
                        </div>
                    </a>
                </div>
               
                <div className="icon-box">
                    <a href="#drink" onClick={IconClick} >
                        <div className="img-container">
                        <Icon shape="drink" point={false}></Icon>
                        </div>
                    </a>
                </div>
                <div className="icon-box">
                    <a href="#pin" onClick={IconClick}>
                        <div className="img-container">
                        <Icon shape="pin" point={false}></Icon>
                        </div>
                    </a>
                </div>
                <div className="icon-box">
                    <a href="#sport" onClick={IconClick}>
                        <div className="img-container">
                        <Icon shape="sport" point={false}></Icon>
                        </div>
                    </a>
                </div>
                <div className="icon-box">
                    <a href="#" onClick={IconClick}>
                        <div className="img-container">
                        <Icon shape="" point={false}></Icon>
                        </div>
                    </a>
                </div>
            </div>
        </div>


        <div className="add-form">
            <form action="/" onSubmit={submitedForm}>
                <div className="name-input">
                    <label htmlFor="todo-name">Name</label>
                    <div className="input">
                        <input required type="text" name="todo-name" id="todo-name" onChange={e=>setName(e.target.value)} />
                    </div>

                </div>

                <div className="description-input">
                    <label htmlFor="todo-description">Description</label>
                    <div className="input">
                        <textarea required name="" id="" onChange={e=>setDesc(e.target.value)}>

                        </textarea>
                    </div>
                </div>

                <div className="date-input">
                    <label htmlFor="Date">Date:</label>
                    <div className="input">
                        <input required type="date" id="Date" name="Date" onChange={e=>setDate(e.target.value)}/>
                    </div>

                </div>
                <div className="date-input">
                    <label htmlFor="time">Time:</label>
                    <div className="input">
                        <input required type="time" id="time" name="time" onChange={e=>setTime(e.target.value)}/>
                    </div>

                </div>

                <div className="date-input">
                    <div className="input">
                        <button type="submit">Add</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
    )
}



export default forwardRef(AddMenu);