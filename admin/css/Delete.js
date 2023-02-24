let banner = ["https://www.jiomart.com/images/category/6047/premium-fruits-20220911.jpeg","https://www.jiomart.com/images/category/2/groceries-20210201.jpeg","https://www.jiomart.com/images/category/3/fashion-20200902.jpeg"]

let baseURL = "http://localhost:3000/data";
let itemcount;
fetch(`${baseURL}`).then((res)=>res.json()).then((data)=>{console.log(data.length)
    itemcount=data.length})
let cardContainer = document.getElementById("cardContainer")



let price_low_to_high=`http://localhost:3000/data?_sort=price&_order=asc&_limit=12&_page=`
let price_high_to_low=`http://localhost:3000/data?_sort=price&_order=desc&_limit=12&_page=`
let price_without_sort=`http://localhost:3000/data?_limit=12&_page=`

let deletebutton=document.getElementsByClassName("elementToFadeInAndOut")
console.log(deletebutton)


function forapi(api){
    window.addEventListener("load",()=>{
        fetchAndRender()
    })
async function fetchAndRender(page=1){
    let response = await fetch(`${api}${page}`);
    let result = await response.json();
    console.log(result);
    let totalpage=Math.ceil(itemcount/12)
    console.log(totalpage)
    paginationpagerenering(totalpage)
    // cardContainer.innerHTML = display(result[0].Electronic)
    // cardContainer.innerHTML = display(result.data)
    display(result)
}
fetchAndRender()
function display(data){
    cardContainer.innerHTML = ""
    cardContainer.innerHTML=`${data.map((elem)=> getcard(elem.name,elem.image,elem.price,elem.strikeprice)).join("")}`
    

    // cardContainer.innerHTML = AllCards
}

function getcard(name,img,price,stPrice){
    return `<div class="card"><img src="${img}" alt="image">
                <p>${name}</p>
                <div class ="stPrice"><p> ₹${stPrice}</p> <h3> ₹${price}</h3> <p> ${Math.floor(((stPrice-price)/stPrice)*100)}% OFF</p></div>
                <button class="elementToFadeInAndOut">Delete </button></div>
            `
}
///pagination 
let paginationwrapper=document.getElementById("pagination-wrapper")
function paginationpagerenering(pages){
    let btn_arr=[];
    for(let i=1;i<=pages;i++){
      btn_arr.push(` <button class="pagination-button" data-page-number=${i}>${i}</button>
    `)
    }
    paginationwrapper.innerHTML=btn_arr.join("")
    let all_button_check=document.querySelectorAll("#pagination-wrapper button")
   for(let btn of all_button_check){
    btn.addEventListener("click",(e)=>{
        fetchAndRender(e.target.dataset.pageNumber)
    })
   }
  }

}
  forapi(price_without_sort)
let filter=document.getElementById("sort")
filter.addEventListener("change",(e)=>{
    e.preventDefault();
    let filtervalue=filter.value;
    if(filtervalue==""){
        forapi(price_without_sort)
    }else if(filtervalue=="asc"){
        forapi(price_low_to_high)
    }else if(filtervalue=="desc"){
        forapi(price_high_to_low)
    }
})





// http://localhost:3000/data?_sort=price&_order=desc&_limit=12&_page=1
