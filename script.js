const calculateTemp=()=>{
   const numberTemp=document.getElementById('temp').value;
   //console.log(numberTemp);
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

   // console.log(valueTemp);
   const celToFah=(cel)=>{
       let f=Math.round((cel*9/5)+32);
       return f;
   }
   const fahToCel=(f)=>{
    let c=Math.round((f-32)*5/9);
    return c;
}
    let result;
    if(valueTemp=='cel'){
        result=celToFah(numberTemp);
        //console.log(result);
        document.getElementById('resultContainer').innerHTML= `= ${result} \xB0F.`;
    }
    else{
        result=fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result} \xB0C.`;
        
    }
}