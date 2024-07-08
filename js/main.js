


let content = document.querySelector('.content')


let inp = document.querySelector(".inp")

function searchNum(val){

    content.innerHTML=""
    if(val){
        x.Sheet1.map(ele2=>{
            if(ele2.الاسم.includes(val)|| String(ele2["رقم الواتساب"]).includes(val) || String(ele2["رقم الهاتف"]).includes(val)){
                content.innerHTML +=`       
            <div class="row my-4">
                <div class=" col-12 col-md-4">
                    <div class="bg-secondary p-4 text-light fw-bold rounded-3" style="width: 98%;">
                        <label for="pwd" class="form-label">Name:</label>
                        <input type="text" class="form-control" placeholder="Name"  value="${ele2.الاسم}">
                    </div>
                  </div>
                <div class=" col-12 col-md-4">
                    <div class="bg-success p-4 text-light fw-bold rounded-3" style="width: 98%;">
                        <label for="pwd" class="form-label">WhatsApp number:</label>
                        <input type="text" class="form-control"  placeholder="WhatsApp number"  value=${ele2["رقم الواتساب"]}>
                    </div>
    
                  </div>
                <div class=" col-12 col-md-4">
                    <div class="bg-primary p-4 text-light fw-bold rounded-3" style="width: 98%;">
                        <label for="pwd" class="form-label">Phone number:</label>
                        <input type="text" class="form-control"  placeholder="Phone number"  value=${ele2["رقم الهاتف"]}>
                    </div>
    
                  </div>


                `
            }
        })
    }

}
inp.addEventListener("keypress",(event)=>{
    if (event.key === "Enter"){
        searchNum(inp.value)
    }
})
inp.addEventListener("keyup",()=>{
    if (inp.value === ""){
         content.innerHTML=""
    }
})





