import './public/scss/app.scss';

import menu_btn from "./public/img/menu-btn.svg";
import { useEffect, useRef } from 'react';
import {DatabaseContext} from './firebaseContext';
import { useAuthState } from 'react-firebase-hooks/auth';

/* Firebase */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/* Components */
import AddMenu from './components/AddMenu';
import TodoContainer from './components/TodoContainer';
import Footer from './components/Footer';

const firebaseConfig = {
  apiKey: "AIzaSyCGY6wdWb-bBdr04FqheTAgrPejiRCHU6o",
  authDomain: "react-todo-e24a5.firebaseapp.com",
  databaseURL: "https://react-todo-e24a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-todo-e24a5",
  storageBucket: "react-todo-e24a5.appspot.com",
  messagingSenderId: "575452710977",
  appId: "1:575452710977:web:d53471e3af06d7090d1ec0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


/*
 TODO
  - login butonu güzelleştir
  - context ile database i aktar
  - todo ekleme
  - todo tarih düzenle
  - componentleri toparla
  - yeni tasarımları ekle
  - masaüstü tasarımı düzenle
  - github

*/
const auth = firebase.auth();


function App() {
  const menu = useRef(null);
  const [user] = useAuthState(auth)
  
  
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const database = firebase.firestore();


  
  


  const openMenu = (e) =>{
    e.preventDefault();
    if (menu)
     {
       menu.current.classList.add("opened")
      
    }
  }

  useEffect(()=>{

    window.addEventListener("mouseup",(e)=>{
      if (menu.current && !menu.current.contains(e.target)) {
        menu.current.classList.remove("opened")
      }
    })
   
  })

if (user) {
  const usersTodo = database.collection("Accounts").doc(user.uid);


  usersTodo.get()
  .then((docSnapshot) => {
    if (!docSnapshot.exists) {
      usersTodo.set({
        username:user.email,
        todos:[]
      });
    } 
});
  return (
 <DatabaseContext.Provider value={usersTodo.collection("TODOS")}>
 
       <header>
         <h1>TODO</h1>
         <div className="menu-btn-wrapper">
             <a href="#" id="menubtn" onClick={openMenu}>
                 <img src={menu_btn} />
             </a>
         </div>
       </header>
 
 
       <AddMenu ref={menu} />
       <main>
 
 
         <TodoContainer />
 
 
     </main>
  
     {/* <Footer/> */}
 
    </DatabaseContext.Provider>
  
   );
} 

if(!user){
  return(
    <button id="googleLogin" onClick={()=>{auth.signInWithPopup(googleProvider)}}>Sign in</button>
  )
}
  
}

export default App;
