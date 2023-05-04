// async function getUsers(){
//     let respone =await fetch("https://jsonplaceholder.typicode.com/users")
//     let data=await respone.json()
//     return data
// }
// getUsers().then(data=>console.log("data", data))

 let data 

 async function getData(){
    const response=await fetch("http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=37caab5d3144ad88882cc0d73a16f905")
    const datas=await response.json()
    // console.log("data::",datas)
    data = datas
    console.log("data: ",data)
    return datas
    
 }
 
 getData().then() && console.log("data::::: ",data)
console.log("data base")
//  console.log("new dataa:::",newData)
//  const data=getData()
//  console.log("data:::",data)

// c2
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(respone=> respone.json())
//     .then(data=>console.log("data :::",data))
//     .catch(error =>console.log("haha lỗi"))

// axios
// fetch("https://reqres.in/api/users?page=2")
//     .then(respone=> respone.json())
//     .then(data=>{
//         console.log(data.data[1])
//         console.log(data.data[3])
//         console.log(data)
//     })    
//     .catch(error =>console.log("haha lỗi"))
// console.log(data.data[2])
    // axois

// async function getData(){
//     let res = await fetch ("https://api.openweathermap.org/data/2.5/weather?id=37caab5d3144ad88882cc0d73a16f905&appid=New York")
//     let data = await res.json()
//     return data
// }
// getData().then (data =>{
//     console.log("dataa:::",data)
// })
// const api_key ="37caab5d3144ad88882cc0d73a16f905";
// const city = 'hanoi';
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

// let datas=fetch("http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=37caab5d3144ad88882cc0d73a16f905")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
    
//   })
  
//   .catch(error => {
//     console.error('Error fetching weather data:', error);
//   });
// console.log("data:::",datas)



// const api_key ="37caab5d3144ad88882cc0d73a16f905";
// const city = 'New York';
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching weather data:', error);
//   });