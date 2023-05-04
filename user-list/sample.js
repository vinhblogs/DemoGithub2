const list= document.getElementById('list') 
const search= document.getElementById('search')
const listItems=[]

search.addEventListener("input", e=>filterInput(e.target.value))

getDataFromPublicApi()
async function getDataFromPublicApi(){
    const responseApi= await fetch("https://randomuser.me/api?results=50")
    const datas= await responseApi.json()
    list.innerHTML="Loading..."
    console.log("data:::", datas)
    setTimeout(()=>{
        list.innerHTML=""
        datas.results.forEach(data=>{
            const divItem=document.createElement("div")
            // listItems.push(divItem)
            divItem.innerHTML=`
            <img
            src="${data.picture.thumbnail}" 
            alt="${data.email}"
            />
            <div classs="detail">
                <h2>${data.name.title}. ${data.name.first} ${data.name.last}</h2>
                <p>${data.email}</p>
            </div>
            `
            list.appendChild(divItem)
         
        })
    },2000)
}
function filterInput(keySearch){
    const searchTerm=keySearch.toLowerCase()
    console.log("searchTerm:>>",searchTerm)
    console.log("listItem:>>",listItems)
    listItems.forEach((item)=>{
        if(item.innerText.toLowerCase().includes(searchTerm)){
            item.classList.remove("hidden")
        }else{
            item.classList.add("hidden")
        }
    })
}
const arr = [1, 2, 3, 4, 5];

arr.forEach(function(num) {
  console.log(num);
  if (num === 3) {
    return false;
  }
});