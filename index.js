function getHumanChoice()
{
    // let userinput ;
    // const option=document.getElementById('options');
    // option.addEventListener('click',function(e)
    //     {
            
    //         const just=e.target.id;
    //         // console.log('rock clicked');
    //         switch(just)
    //         {
    //             case 'rock':
    //                document.getElementById('rock').style.border='10px solid #DAA520 ';
    //                userinput='rock';
    //                return userinput;
    //                break; 
    //             case 'paper':
    //                 document.getElementById('paper').style.border='10px solid #DAA520';
    //                 userinput='paper';
    //                 return userinput
    //                 break;
    //             case 'scissor':
    //                 document.getElementById('scissor').style.border='10px solid #DAA520';
    //                 userinput='scissor';
    //                 return userinput;
    //                 break;

    //         }
    //     }
    // )
    let userinput ; 
    document.getElementById('rock').addEventListener('click',function ()
        {
            document.getElementById('rock').style.border='10px solid #DAA520';
            userinput = 'rock';
            
            
        }
        
    )
    return userinput;

    // return userinput;
}

function getComputerChoice()
{
    let randomNo = Math.random();
    randomNo = randomNo.toFixed(1); //the random number is of type 0.1 or 0.4 etc
    if( randomNo>0 && randomNo<=0.3)
    {
        document.getElementById('crock').style.border='10px solid #1E90FF';
        return 'Rock';
    }
    else if( randomNo>0.3 && randomNo<=0.7)
    {
        
        document.getElementById('cpaper').style.border='10px solid #1E90FF';

        return 'Paper';
    }
    else
    {
        
        document.getElementById('cscissor').style.border='10px solid #1E90FF';

        return 'Scissor';
    }
}
// getComputerChoice();

// getHumanChoice();
let humanscore=0,computerscore=0;
function playround(humanchoice,computerchoice)
{
    if( humanchoice.toUpperCase()=='ROCK')
    {
        if( computerchoice.toUpperCase()=='PAPER')
        {
            document.getElementById('result').textContent='Computer won';
            computerscore+=1;
            document.getElementById('computerscore').textContent='computerscore';
            
        }
        else if( computerchoice.toUpperCase()=='ROCK'){
            document.getElementById('result').textContent='NO one won';

        }
        else
        {
            document.getElementById('result').textContent='You won';
            humanscore+=1;
            document.getElementById('humanscore').textContent='humanscore';
        }
    }
    else if(humanchoice.toUpperCase()=='PAPER')
    {
        if( computerchoice.toUpperCase()=='PAPER')
        {
            document.getElementById('result').textContent='NO one won';
           
        }
        else if( computerchoice.toUpperCase()=='ROCK'){
            document.getElementById('result').textContent='You won';
            humanscore+=1;
            document.getElementById('humanscore').textContent='humanscore';
        }
        else
        {
            document.getElementById('result').textContent='Computer won';
            computerscore+=1;
            document.getElementById('computerscore').textContent='computerscore';
        }

    }
    else if( humanchoice.toUpperCase()=='SCISSOR')
    {
        if( computerchoice.toUpperCase()=='SCISSOR')
        {
            document.getElementById('result').textContent='NO one won';

        }
        else if( computerchoice.toUpperCase()=='ROCK'){
           document.getElementById('result').textContent='Computer won';
            computerscore+=1;
            document.getElementById('computerscore').textContent='computerscore';
        }
        else
        {
            document.getElementById('result').textContent='You won';
            humanscore+=1;
            document.getElementById('humanscore').textContent='humanscore';
        }

    }
    else
    {
        
    }

      

}
// const val = window.prompt("enter the rounds :",3);
const val = document.getElementById('rounds');
let  rounds; 
val.addEventListener('keypress',function (e)
{
    // alert(rounds)
    rounds = val.value;
    if( e.key === "Enter")
    {
        if( rounds<=0 )
        {
            window.alert("hey don't be oversmart....Give positive values only");
            
        }
        else{
            const take  = document.getElementById('taking');
            take.style.display='none';
        document.getElementById('enjoy').style.display='none';
        document.getElementById('game').style.transform='scale(1)';
            playgame(rounds);
        }
        
    }
    
})

function playgame(rounds)
{
    for( let i = 0 ;i<rounds;i++)
    {
        let humanchoice = getHumanChoice();
        let computerchoice = getComputerChoice();
        playround(humanchoice,computerchoice);
    }
    if( humanscore>computerscore)
    {
        alert('human won the game!!');
        console.log('human won the game');
    }
    else if( humanscore<computerscore)
    {
        alert('computer won the game!!');
        console.log('computer won the game');
        
    }
    else if( humanscore==computerscore && rounds>0)
    {
        alert('no-one won the match was draw');
        console.log('match was draw');
    }
    
}