// lấy phần tử html

const todoList=document.getElementById("todo-list")
const addTodoForm=document.getElementById("add-todo-form")
const todoInput=document.getElementById("todo-input")

function addString(){
    // 
    var node=document.getElementById("wrapper")

    // tạo thẻ p
    var p=document.createElement("p")
    p.innerHTML="hello thiện" // thêm texxt vào p

    node.appendChild(p)
}
function deleteString(elementId){
    var element=document.getElementById(elementId)

    element.removeChild()

}
// thêm task
addTodoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todoText=todoInput.value
    if (todoText!==""){
        const newTodo=document.createElement('li')
        newTodo.textContent=todoText
        todoList.appendChild(newTodo)
        todoInput.value=""
    }
})

// xóa
todoList.addEventListener("click",e=>{
    if(e.target.tagName==="LI"){
        e.target.remove()
    }
})

// sửa
todoList.addEventListener("dblclick",e=>{
    if (e.target.tagName==="LI"){
        const todoText=e.target.textContent
        const todoInput=document.createElement("input")

        todoInput.value=todoText
        e.target.textContent=""
        e.target.appendChild(todoInput)
        todoInput.focus()

        todoInput.addEventListener("blur",()=>{
            e.target.textContent=todoInput.value
        })

        todoInput.addEventListener("keypress",e=>{
            if(e.keyCode===13){
                e.target.blur()
            }
        })
    }


})
