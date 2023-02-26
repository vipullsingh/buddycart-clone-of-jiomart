
// console.log(fName)
//                 signedInName.textContent = `Welcome ${fName}`;
//                 signedInName.style.display = "block"

//                 logout.style.display = "block"
//                 signupBtn.style.display = "none"
let searchBar= document.getElementById("searchBar")

searchBar.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(searchBar[0].value)
})


window.addEventListener("load",()=>{
    let LoggedName = JSON.parse(localStorage.getItem("LoggedName"))
    console.log(LoggedName)
    let signedInName = document.getElementById("signedIn_Name")
    let signupBtn = document.getElementById("signUpBtn")
    let logout = document.getElementById("logOutBtn")

    if(LoggedName === null){
        signupBtn.style.display = "inline-block"
        logout.style.display = "none"
    }else{
        signedInName.textContent = `Welcome ${LoggedName}`
        signupBtn.style.display = "none"
        logout.style.display = "inline-block"
    }
    
    logout.addEventListener("click",()=>{
        localStorage.removeItem("LoggedName")
        signedInName.textContent = null;
        signupBtn.style.display = "inline-block"
        logout.style.display = "none"
        alert("You are logged out")
    })
})