
let $=document;

let changeBtn=$.querySelector('.change');
let title=$.querySelector('.title');
let input=$.querySelector('.input');

let resetBtn=$.querySelector('.reset');

let convertBtn=$.querySelector('.convert');
let result=$.querySelector('.result');

changeBtn.addEventListener('click',ChangeTitle);

resetBtn.addEventListener('click',ResetValue);

convertBtn.addEventListener('click',ConvertTemp);

let titleValue='Converter °C to °F';
var flag=true;
function ChangeTitle(){
  if(titleValue===title.innerHTML)
  {
      title.innerHTML='Converter °F to °C';
     input.placeholder='°F'
     $.title='°F to °C';
     flag=false;
  }
  else{
      title.innerHTML='Converter °C to °F';
     input.placeholder='°C'
      $.title='°C to °F';
      flag=true;
  }
}

function ResetValue(){
    input.value=''
    result.innerHTML=''
}




function ConvertTemp(){

    

   
    if(input.value==='')
    {
        result.innerHTML='Write correct value';
        result.style.color='red'
    }
    else if(isNaN(input.value))
    {
        result.innerHTML='Wrong value';
    }
    else{
       if(flag)
       {
           let CValue=input.value;
           let F=(CValue*1.8)+32;
           result.innerHTML=CValue+'°C to '+F+'°F';
           result.style.color='rgb(255, 255, 102)';
       }
       else{
        let FValue=input.value;
        let C=(32-32)*5/9;
        C.toFixed(2);
        result.innerHTML=FValue+'°F to '+C+'°C';
        result.style.color='rgb(255, 255, 102)';
       }
    }
}


