const myProfile = document.getElementById('profile');
const changePassword = document.getElementById('change-password');
  const handleChangepassword = ()=>{
    window.location = './changepassword.html'
  };
   const handleMyprofile = () => {
    window.location = './profile.html'
   };

  changePassword.addEventListener("click", handleChangepassword);
  myProfile.addEventListener("click",handleMyprofile);




