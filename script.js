let input=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button')

let string="";

let arr=Array.from(buttons)
arr.forEach(button=>{
    button.addEventListener('click', (res)=>{
        if(res.target.innerHTML =='='){
            string=eval(string);
            input.value=string;
        }
        else if(res.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(res.target.innerHTML=='DEL'){
            string=string.substring(0, string.length-1);
            input.value=string;
        }
        else{
            string+=res.target.innerHTML;
            input.value=string;
        }
    })
})