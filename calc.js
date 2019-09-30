function add(x, y,z) 
{
     return x + y+z 
}
function mul(x,y,z)
{
    return x * y *z
}

function average(x,y,z)
{
    return (x+y+z)/3
}

function smallest(x,y,z)
{
    if((x<y)&&(x<z))
    {
        return x
    }
    else if((y<z)&&(y<x))
    {
        return y
    }
else {
    return z
}
}
document.ready
document.querySelector('#addition').addEventListener('click', () => {   
    const s = document.querySelector('#guest').value   
    const i = parseInt(document.querySelector('#firstNumber').value)   
    const j = parseInt(document.querySelector('#secondNumber').value)
    const k = parseInt(document.querySelector('#thirdnumber').value) 
    addcount=0
    if(localStorage.getItem("addcount")!=null)
        addcount=localStorage.getItem("addcount");
    addcount++
    localStorage.setItem("addcount",addcount);
    const ans =    s +', your sum is '+add(i,j,k)+' This has been '+ addcount
    document.getElementById('result').innerHTML = ans
})
document.querySelector('#average').addEventListener('click', () => {   
    const s = document.querySelector('#guest').value.length  
    const i = parseInt(document.querySelector('#firstNumber').value)   
    const j = parseInt(document.querySelector('#secondNumber').value)
    const k = parseInt(document.querySelector('#thirdnumber').value) 
    const ans = `   ${s} , your avrage is ${average(i,j,k)}.`
    document.getElementById('result').innerHTML = ans
})
document.querySelector('#multiplication').addEventListener('click', () => {   
    const s = document.querySelector('#guest').value   
    const i = parseInt(document.querySelector('#firstNumber').value)   
    const j = parseInt(document.querySelector('#secondNumber').value)
    const k = parseInt(document.querySelector('#thirdnumber').value) 
    const ans = `   ${s} , your multiplication is ${add(i,j,k)}.`
    document.getElementById('result').innerHTML = ans
})