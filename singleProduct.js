  let srcBtn = document.getElementById("pinSearchBtn")
    let searchInput = document.getElementById("pinSearchInput")
    let display = document.getElementById("place")
    let estimatedDate = document.getElementById("estimatedDate")

    srcBtn.addEventListener("click",()=>{
        let toSearch = searchInput.value;
        // console.log()
        if(toSearch === ""){
            display.textContent = "Please provide a pin"
        
        }else
        {
            fetch(`https://api.postalpincode.in/pincode/${toSearch}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.length)
                // console.log(data[0].PostOffice[0].Name)
                if(data[0].PostOffice.length){
                    let toShow = `${data[0].PostOffice[0].Name}, ${data[0].PostOffice[0].Block}, ${data[0].PostOffice[0].Circle}`
                    display.textContent = toShow

                Date.prototype.addDays = function(days) {
                    let DOW = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
                    var date = new Date(this.valueOf());
                    let res = ` <b>${date.getDate()}-${date.getMonth()+days}-${date.getFullYear()+1} (${DOW[date.getDay()]})</b>`
                    return res;
                }

                var date = new Date();

                estimatedDate.innerHTML = `Estimated delivery date is : ${date.addDays(2)}.`
                }
            }).catch(err =>{
                display.textContent = "Please Enter a correct Pin"
            })
        }
    })
