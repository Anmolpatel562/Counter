var value=document.querySelector('#counter');
// increment=()=>{
//    let v=parseInt(value.innerText);
//    v=v+1;
//    value.innerText=v;
// }
// decrement=()=>{
//    let v=parseInt(value.innerText);
//    v=v-1;
//    value.innerText=v;
// }


// By Using EventListner

var content0=document.querySelector('#b1');
if(content0.addEventListener('click',function(){
    let v=parseInt(value.innerText);
    v=v-1;
    value.innerText=v;
}));
var content1=document.querySelector('#b2');
if(content1.addEventListener('click',function(){
    let v=parseInt(value.innerText);
    v=v+1;
    value.innerText=v;
}));