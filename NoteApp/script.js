 
let $=document

let mainMessage=$.querySelector('.main-message')


let inputNote=$.querySelector('.input-note')
let addBtn=$.querySelector('.add')
let Notes=$.querySelector('.Notes')
let clear=$.querySelector('.clear')

let colors=$.querySelector('.colors')

let colorsArray=['white','#FFD37F','#FFFA81',
             '#D5FA80','#78F87F','79FBD6',
             '#79FDFE','#7AD6FD','#7B84FC',
               '#D687FC','#FF89FD']


addBtn.addEventListener('click',function(event){
    addNote(event)
})

inputNote.addEventListener('keydown',function(event){
    addNote(event)
})

clear.addEventListener('click',clearInput)

function clearInput(){
    inputNote.value=''
    inputNote.style.backgroundColor='#fff'
}


function addNote(event){
    if(event.key==='Enter' || event.type==='click')
    {
        if(inputNote.value)
        {

                let newNoteElem=$.createElement('div')
                newNoteElem.className='Note'
                newNoteElem.innerHTML=inputNote.value
            // addBtn.classList.toggle('add-click')
                newNoteElem.style.backgroundColor=inputNote.style.backgroundColor
                newNoteElem.addEventListener('click',function(event){
                    //    newNoteElem.remove()
                    event.target.remove()
                })
                Notes.append(newNoteElem)
                clearInput()


         }else{
               mainMessage.style.display='block'

            let newMassageBoxElem=$.createElement('div')
            newMassageBoxElem.classList.add('message-box')

            let newMessage=$.createElement('p')
              newMessage.innerHTML='Please Enter a value!'

            let newIcon=$.createElement('i')
            newIcon.className='fa fa-warning'

           mainMessage.append(newMassageBoxElem)
           newMassageBoxElem.append(newMessage,newIcon)

           setTimeout(function(){
              newMassageBoxElem.style.display='none'
           },2000)
         }
    
    }

}



     
colorsArray.forEach(function(color){
     let newColorElem=$.createElement('div')
     newColorElem.className='color'
     newColorElem.style.backgroundColor=color

     newColorElem.addEventListener('click',function(event){
   inputNote.style.backgroundColor=event.target.style.backgroundColor
     })
     colors.append(newColorElem)
})






            



