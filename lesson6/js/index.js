const myProfile = document.getElementById('profile');
const changePassword = document.getElementById('change-password');
const chatPage = document.getElementById('chat');
  const handleChangepassword = ()=>{
    window.location = './changepassword.html'
  };
   const handleMyprofile = () => {
    window.location = './profile.html'
   };
   const handleChatpage = () =>{
    window.location='./chat.html'
   };
  chatPage.addEventListener("click",handleChatpage);
   changePassword.addEventListener("click", handleChangepassword);
  myProfile.addEventListener("click",handleMyprofile);




