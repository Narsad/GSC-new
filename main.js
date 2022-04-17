const user        = document.querySelector(".login");
      modalLogin  = document.querySelector(".modal-login");
      closeModal  = document.querySelector(".close-button");
      search      = document.querySelector(".search");
      modalSearch = document.querySelector(".modal-search");
      reg         = document.querySelector("#reg");
      modalReg    = document.querySelector(".modal-reg");
      closeReg    = document.querySelector("#close-reg");
      UserName    = document.querySelector("#userName");
      pass1       = document.querySelector("#pass1");
      pass2       = document.querySelector("#pass2");
      buttonReg   = document.querySelector("#button-reg");
      menu        = document.querySelector(".fa-bars");
      nav         = document.querySelector(".nav");
      closeMenu   = document.querySelector(".fa-xmark");
      // open login window
    user.addEventListener("click", function(){
      modalLogin.style.display = "flex";
      document.body.style.overflow = "hidden";
});
      // close login window
      function close(){
        modalLogin.style.display = "none";
        document.body.style.overflow = "visible";
      }
    closeModal.addEventListener("click", close)

    search.addEventListener("click", function(){
      modalSearch.style.display = "flex";
      document.body.style.overflow = "hidden";
    })

    reg.addEventListener("click", function(){
      modalLogin.style.display = "none";
      modalReg.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
    function close2(){
      modalReg.style.display = "none";
      document.body.style.overflow = "visible";
    }
    closeReg.addEventListener("click", close2 
    );

    // validation form
    buttonReg.addEventListener("click", function(){
      if(UserName.value != 0){
        if(pass1.value == pass2.value){
          if(pass1.value.length >= 8){
            close2();
          }else{
            alert("Գախտնաբառը պետք է պարունակի ոչ պակաս քան 8 նիշ")
          }
          
        }else{
          alert("Գախտնաբառերը չեն համընկնում");
        }
      }else{
        alert("Անուն բաժինը լրացված չէ")
      }
      
      
    });

    // menu bar

    menu.addEventListener("click", function(){
      nav.classList.add('active-menu');
    });

    closeMenu.addEventListener("click", function(){
      nav.classList.remove('active-menu');
    });