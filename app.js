
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
//click ke liye kaam karega
btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;//originally add hoga doc main

    //to add the delete button to all the list items
    let delbtn = document.createElement("button");
    delbtn.innerText = "remove me";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);


    ul.appendChild(item);//ul ka child hai usme add kara hai
    console.log(inp.value);//to print the task in consol
    inp.value = "";//input bar ko khali karne ke liye agar ek baar task enter ho gaya
});

//to delte the new elements also, we use bubbling
ul.addEventListener("click", function(event){
    console.log(event.target);
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("item delted")
});

