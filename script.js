


function rollDice(){
    const numberOfDice= document.getElementById('numberOfDice').value;
    const result= document.getElementById('result');
    const Diceimages= document.getElementById('images');

    const values=[];
    const image=[];
    let totalSum = 0;

    for(let i=0 ; i< numberOfDice ;i++){
        const value= Math.floor(Math.random()*6)+1;
        values.push(value);
        image.push(`<img src="photos/dice-${value}.png">`);
        totalSum+= values[i];
    }
    result.textContent=`dice : ${values.join(',')}`;
    Diceimages.innerHTML = image.join('')
    

    const submit=document.querySelector('.submit');
    submit.addEventListener("click" , ()=>{
        localStorage.setItem('score',totalSum);
        window.location.href="connect.html";
    })
     
     
      
}

 