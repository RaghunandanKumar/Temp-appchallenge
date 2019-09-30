function largest(x, y) {
    if (x > y) {
        return document.querySelector('#firstString').value
    }
    else {
        return document.querySelector('#secondString').value
    }
}

document.ready
document.querySelector('#addition').addEventListener('click', () => {
    const s = document.querySelector('#guest').value
    const i = document.querySelector('#firstString').value.length
    const j = document.querySelector('#secondString').value.length
    if(i==j)
    {
        const ans = "Enter Valid input"
        document.getElementById('result').innerHTML = ans
        }
        else
        {
    const ans = s + ', your largest word is ' + largest(i, j)
    document.getElementById('result').innerHTML = ans
}


    
})
