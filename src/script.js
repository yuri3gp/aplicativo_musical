let gridItem = Array.from(document.querySelectorAll('.grid-item'))
var audio = [];
fetch(`${window.location.href}/folders.php`)
.then(response => response.json())
.then(response => {
    response.map(patch=>{
        audio.push(new Audio(`audio/${patch}`))
    })
})
gridItem.map((element,index)=>{
    element.addEventListener("click",()=>{
        audio[index].play()
    })
})