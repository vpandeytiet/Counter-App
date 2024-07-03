const countValue=document.querySelector('#counter');

const increment=()=>{ 
    //get the value from UI     (parseInt==> used to convert string to integer)
    let value=parseInt(countValue.innerText);
    //update the value
    value=value+1;
    //set or return the value onto UI
    countValue.innerText=value;
};

const decrement=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value
    value=value-1;
    //set the value onto UI
    countValue.innerText=value;
};
