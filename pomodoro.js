const menu= document.getElementById("btn")
const listemenu= document.getElementById("menu")
const btn =document.getElementById("tache")
const table=document.getElementById("table")
const acc=document.getElementById("acc")
const acceuil=document.getElementById("acceuil")
const add= document.getElementById("add")
const Create= document.getElementById("Create")
const done = document.getElementById("done")


menu.addEventListener("click",()=>{
    listemenu.style.display = listemenu.style.display == "block" ? "none" : "block"
})

btn.addEventListener("click",()=>{
    table.style.display="block"
    listemenu.style.display="none"

})

acc.addEventListener("click",()=>{
    table.style.display="none"
    listemenu.style.display="none"
})

add.addEventListener("click",()=>{
    Create.style.display="block"
})

done.addEventListener("click",(e)=>{
    e.preventDefault()
    Create.style.display="none"
})
