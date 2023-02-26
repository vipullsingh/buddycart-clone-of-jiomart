async function fetchdata(){
    try {
        let res=await fetch(`http://localhost:3000/checkout`)
        let data= await res.json()
        datafetch(data)
    } catch (error) {
        console.log(error)
    }
}

fetchdata()
let product=document.getElementById("product")
function datafetch(datafetch){
    product.innerHTML=""
    datafetch.forEach(element => {
      
        let card=document.createElement("div")
        card.setAttribute("class","card");
        let h2ordersdata=document.createElement("h2")
        h2ordersdata.innerText=element.OrderStatus
        let divAdressOrder=document.createElement("div")
        divAdressOrder.setAttribute("class","address-ordeno")
         let h4ordernumber=document.createElement("h4")
         let pAddress=document.createElement("p")
         h4ordernumber.innerText=element.OrderNO
         pAddress.innerText=element.Address;
         let divproductname_quantity=document.createElement("div");
         divproductname_quantity.setAttribute("class","product-details")
         let divforproduct=document.createElement("div")
         let bag=[]
           for(let i=0;i<=element.Product.length-1;i++){
            bag.push(`<h4>${element.Product[i]}</h4><p>${element.Quantity[i]}</p>`)
           }
            console.log(bag)
             divforproduct.innerHTML=bag.join('')
         divproductname_quantity.append(divforproduct)
         divAdressOrder.innerHTML=""
         divAdressOrder.append(h4ordernumber,pAddress)
         let divAmount=document.createElement("div")
         let ptottal=document.createElement("p")
         ptottal.innerText="Total Amount"
         let pAmount=document.createElement("p")
         pAmount.innerText=element.TotalAmount
         divAmount.append(ptottal,pAmount)
         let deletebutton=document.createElement("button");
         deletebutton.innerText="Delete Order"
         deletebutton.addEventListener("click",(e)=>{
            e.preventDefault()
            functionfordeletereq(elem)
         })
         card.append(h2ordersdata,divAdressOrder,divproductname_quantity,divAmount,deletebutton)
         product.append(card)
    });
}



function functionfordeletereq(elem){
    fetch(`http://localhost:3000/data/${elem.id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
    })
}