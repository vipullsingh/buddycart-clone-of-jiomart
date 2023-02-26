
    let Lsdata=[]
   fetch("http://localhost:3000/LoginAdmin").then((res)=>res.json()).then((data)=>{
    functionfecthdata(data)
   
   }).catch((err)=>{
    console.log(err)
   })

   function functionfecthdata(data){
    console.log(data)
    let buttonlogin=document.getElementById("buttonlogin")
    let Name=document.getElementById("name")
    let eml=document.getElementById("exampleInputEmail");
    let ps=document.getElementById("exampleInputPassword")
     let Lsdata=[]
   buttonlogin.addEventListener("click",(e)=>{
    e.preventDefault()
    let flag=0
    let name;
      data.forEach((ele,index)=>{ 
        if(eml.value==ele.email&&ps.value==ele.password){
           flag=1,name=ele.name;
           return flag,name
        }else{
            flag=0
            return flag
        }
       })
       if(flag==1){
         window.location.assign("./Dashboard.html")
       } else if(flag==0){
        Swal.fire('Invalid...', 'You failed!', 'error')
       }
       eml.value=""
       ps.value=""
   })
}
