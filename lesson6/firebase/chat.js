import { db } from "./config.js"
import { collection, query, getDocs,addDoc,serverTimestamp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const ref = collection(db, "messengers");
const q = query(ref);

const querySnapshot = await getDocs(q);
console.log(querySnapshot);
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(1, doc.data());
});

const inputMessage = document.getElementById("message");
const sendBtn = document.getElementById("messages");
const addMessage = async() =>{
    const message = inputMessage.value;
    await addDoc(ref, {
        content:message,
        sender:'Me',
        createdAt: serverTimestamp()
        
      });
}

sendBtn.addEventListener("click",addMessage);