import { db } from "./config.js"
import { collection, query, getDocs,addDoc,serverTimestamp,orderBy,onSnapshot } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

let messageList = [];
const ref = collection(db, "messengers");
const q = query(ref,orderBy('createdAt'));
//them message sd firebase
const inputMessage = document.getElementById("message");
const sendBtn = document.getElementById("messages");
const addMessage = async() =>{
    const message = inputMessage.value;
    const sender  = localStorage.getItem('currentUser');
    const userProfile = JSON.parse(sender);
    await addDoc(ref, {
        content:message,
        sender: userProfile.displayName ? userProfile.displayName : userProfile.email,
        createdAt: serverTimestamp(),
        
      });
}

sendBtn.addEventListener("click",addMessage);

//render data ra giao dien
 const warpperMessage = document.getElementById('messages-list');
 const renderMessage = () => {
    warpperMessage.innerHTML = ""
    messageList.forEach((message)=>{
        const msgElm = document.createElement('p');
        msgElm.textContent = message.content;
        warpperMessage.appendChild(msgElm);
    })
 }
 //lang nghe thay doi data tu firebase

 onSnapshot(q, (querySnapshot) => {
    messageList = []
    querySnapshot.forEach((doc)=>{
        messageList.push(doc.data());
    });
    renderMessage();
 });

