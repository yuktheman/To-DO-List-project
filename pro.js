let add = document.querySelector('.add')
let main = document.querySelector('.main')
let text = document.querySelector('.text')
let i  = document.querySelector('.ri-add-box-fill')
let todo = document.querySelector('.todo')

let arrow = document.querySelector('.ri-radio-button-line')

add.addEventListener('click' , function(){


if (text.value) {
 
  let newdivv = document.createElement("div")
let textvalue= document.createElement('div')
textvalue.classList.add('textyy')
textvalue.textContent=text.value;

newdivv.classList.add('todo')
newdivv.appendChild(textvalue)

let arrow = document.createElement('i')
arrow.classList.add('ri-check-line')
let buttonin = document.createElement('div')
buttonin.classList.add('buttonin')
main.appendChild(newdivv)
newdivv.appendChild(arrow)
newdivv.appendChild(buttonin)
buttonin.textContent='Close'
text.value=''


arrow.addEventListener('click',function(){
console.log('hello')
textvalue.classList.toggle('textyy1')


let length = textvalue.textContent.length;

if (length > 40) {
  textvalue.style.fontSize = '6px';
}
if (length > 60) {
  textvalue.style.fontSize = '2px';
}
if (length > 80) {
  textvalue.style.fontSize = '1px';
}

})
buttonin.addEventListener('click' ,function(dets){
newdivv.remove()
})
}


else{
alert('Write something')
}
})

window.addEventListener('keydown', function(e){
  console.log(e)
  if(text.value && e.key === 'Enter')

  {

    add.click()

  }
})