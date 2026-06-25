const database = []
const RegisterData = (e)=>{
     
    e.preventDefault()
 
    const username = document.getElementById("userName").value
    const useremail = document.getElementById("userEmail").value
    const userpassword = document.getElementById("userPassword").value
    const fromdata = document.getElementById("fromdata")

    if(username === "" || useremail === "" || userpassword === ""){

        alert('Please Fill the All Datas')
        return

    }

    const userDatas = {username,useremail,userpassword}

   
    const checkEmail = database.find((e)=>e.useremail === useremail)

    //console.log('checkEmail',checkEmail);

    if(checkEmail){

        alert('Email id is already there use Different')
        return

    }
    
    database.push(userDatas)

    // console.log(database);

    //console.log('database',database);
    
    localStorage.setItem("userDatas",JSON.stringify(database))

    

    alert('Register Successfully Done')
    
    fromdata.reset()

    // window.location.href = "login.html"


}


const LoginData = (e)=>{
 e.preventDefault()

    const loginemail = document.getElementById("loginEmail").value
    const loginpassword = document.getElementById("loginPassword").value
    const fromdatalogin = document.getElementById("fromdata")

    //   if(useremail === "" || userpassword === ""){

    //     alert('Please Fill the All Datas')
    //     return

    // }
  
    console.log('database',database);
    
    // console.log(loginemail);
    // console.log(loginpassword);
    
    
    const takeData = localStorage.getItem("userDatas")

    const changedata = JSON.parse(takeData)

     const logincheck = changedata.find((e)=>e.useremail === loginemail && e.userpassword === loginpassword)
    
    //console.log('logincheck',logincheck);
    

     if(!logincheck){
        
        alert("Your Not Valid user")
        return
     }

       localStorage.setItem("users",JSON.stringify(logincheck))
     window.location.href = "user.html"

     fromdatalogin.reset()


}