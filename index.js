

function getComputerChoice()
{
    let randomNo = Math.random();
    randomNo = randomNo.toFixed(1); //the random number is of type 0.1 or 0.4 etc
    if( randomNo>0 && randomNo<=0.3)
    {
        return 'Rock';
    }
    else if( randomNo>0.3 && randomNo<=0.7)
    {
        return 'Paper';
    }
    else
    {
        return 'Scissor';
    }
}

function getHumanChoice()
{
    let userinput= window.prompt('choose one :Rock , paper, Scissor',null);
    return userinput;
}
let humanscore=0,computerscore=0;
function playround(humanchoice,computerchoice)
{
    if( humanchoice.toUpperCase()=='ROCK')
    {
        if( computerchoice.toUpperCase()=='PAPER')
        {
            console.log('computer wins this round');
            computerscore+=1;
        }
        else if( computerchoice.toUpperCase()=='ROCK')(
            console.log('this round is drawss...')
        )
        else
        {
            console.log("Human wins this round");
            humanscore+=1;
        }
    }
    else if(humanchoice.toUpperCase()=='PAPER')
    {
        if( computerchoice.toUpperCase()=='PAPER')
        {
            console.log('this round is drawss...');            
        }
        else if( computerchoice.toUpperCase()=='ROCK'){
            console.log("Human wins this round");
            humanscore+=1;
        }
        else
        {
            console.log("computer wins this round");
            computerscore+=1;
        }

    }
    else if( humanchoice.toUpperCase()=='SCISSOR')
    {
        if( computerchoice.toUpperCase()=='SCISSOR')
        {
            console.log('this round is drawss...');            
        }
        else if( computerchoice.toUpperCase()=='ROCK'){
            console.log("computer wins this round");
            computerscore+=1;
        }
        else
        {
            console.log("Human wins this round")
            humanscore+=1;
        }

    }
    else
    {
        
    }

      

}
let rounds = window.prompt("enter the rounds :",3);
function playgame()
{
    for( let i = 0 ;i<rounds;i++)
    {
        let computerchoice = getComputerChoice();
        let humanchoice = getHumanChoice();
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
    else
    {
        alert('no-one won the match was draw');
        console.log('match was draw');
    }
    let RESULT=`humanscore is ${humanscore} && computerscore is ${computerscore}`;
    console.log(RESULT);
}
playgame();