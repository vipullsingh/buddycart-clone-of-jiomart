let banner = ["https://www.jiomart.com/images/category/6047/premium-fruits-20220911.jpeg","https://www.jiomart.com/images/category/2/groceries-20210201.jpeg","https://www.jiomart.com/images/category/3/fashion-20200902.jpeg"]

let baseURL = "https://jiomart-backend.onrender.com/api/Allproduct";

let cardContainer = document.getElementById("cardContainer")
window.addEventListener("load",()=>{
    fetchAndRender()
})

async function fetchAndRender(){
    let response = await fetch(baseURL);
    let result = await response.json();
    console.log(result[0].Electronic);
    // cardContainer.innerHTML = display(result[0].Electronic)
    cardContainer.innerHTML = display(result[0].Electronic)
}
function display(data){
    cardContainer.innerHTML = ""
    let AllCards = data.map((elem)=> getcard(elem.name,elem.image,elem.price,elem.strikeprice)).join("")
    console.log(AllCards)
    
    return AllCards
    // cardContainer.innerHTML = AllCards
}

function getcard(name,img,price,stPrice){
    return `
            <div class="card">
                <img src="${img}" alt="image">
                <p>${name}</p>
                <div class ="stPrice"><p> ₹${stPrice}</p> <h3> ₹${price}</h3> <p> ${Math.floor(((stPrice-price)/stPrice)*100)}% OFF</p></div>
                <button class="elementToFadeInAndOut">Add +</button>
            </div>
            `
}