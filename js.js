 const inputBox = document.getElementById("input-box");
 const listContainer = document.getElementById("list-container")
 
 //thêm list
 function addTask(){
    if(inputBox.value === ''){
        alert("Bạn phải viết từ gì đó");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7"; //dấu x
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
 }
// chọn 1 list định xóa và xóa
 listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if( e.target.tagName === "SPAN")
     {     e.target.parentElement.remove();
        saveData();
    }
 },false);
//lưu text đã thêm trong local Storage
 function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
 }
 //lưu list thêm vào khi load lại trang ko bị mất
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();