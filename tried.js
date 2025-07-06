function getHumanChoice()
{
    
    // let arr=[];
    let userinput ;
    const option=document.getElementById('options');
    option.addEventListener('click',function(e)
        {
            
            const just=e.target.id;
            // console.log('rock clicked');
            switch(just)
            {
                case 'rock':
                   document.getElementById('rock').style.border='10px solid #DAA520 ';
                   userinput='rock';
                   return userinput; 
                   
                case 'paper':
                    document.getElementById('paper').style.border='10px solid #DAA520';
                    userinput='paper';
                    return userinput;
                    
                    break;
                case 'scissor':
                    document.getElementById('scissor').style.border='10px solid #DAA520';
                    userinput='scissor';
                    return userinput;

            }
        }
    )
}
function getComputerChoice()
    

    // return userinput;

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
const choices = function()
{
    const arr=new Array;
    console.log(arr);
    const a = getComputerChoice();
    const b = getHumanChoice();
    arr.push(a);
    arr.push(b);
    console.log(arr[0],a,arr[1],b);
    return arr;

}
// getComputerChoice();

// getHumanChoice();
// let humanscore=0,computerscore=0;
function playround(humanchoice,computerchoice)
{
    // let humanscore= 0 , computerscore= 0; 
    // console.log(humanchoice);
    if( humanchoice =='rock')
    {
        if( computerchoice=='paper')
        {
            document.getElementById('result').textContent='Computer won';
            document.getElementById('result').style.display='block';
            computerscore+=1;
            document.getElementById('computerscore').innerHTML=computerscore;
            
        }
        else if( computerchoice=='rock'){
            document.getElementById('result').textContent='NO one won';
            document.getElementById('result').style.display='block';

        }
        else
        {
            document.getElementById('result').textContent='You won';
            document.getElementById('result').style.display='block';

            humanscore+=1;
            document.getElementById('humanscore').innerHTML=humanscore;
        }
    }
    else if(humanchoice=='paper')
    {
        if( computerchoice=='paper')
        {
            document.getElementById('result').innerHTML='NO one won';
            document.getElementById('result').style.display='block';
           
        }
        else if( computerchoice=='rock'){
            document.getElementById('result').innerHTML='You won';
            document.getElementById('result').style.display='block';

            humanscore+=1;
            document.getElementById('humanscore').innerHTML=humanscore;
        }
        else
        {
            document.getElementById('result').innerHTML='Computer won';
            document.getElementById('result').style.display='block';

            computerscore+=1;
            document.getElementById('computerscore').innerHTML=computerscore;
        }

    }
    else if( humanchoice=='scissor')
    {
        if( computerchoice=='scissor')
        {
            document.getElementById('result').innerHTML='NO one won';
            document.getElementById('result').style.display='block';

        }
        else if( computerchoice=='rock'){
           document.getElementById('result').innerHTML='Computer won';
            document.getElementById('result').style.display='block';

           computerscore+=1;
            document.getElementById('computerscore').innerHTML=computerscore;
        }
        else
        {
            document.getElementById('result').innerHTML='You won';

            humanscore+=1;
            document.getElementById('humanscore').innerHTML=humanscore;
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
                document.getElementById('note').style.display='none';
                console.log(rounds);
                playgame(rounds);
                
            }
        
        }
    
    })
function playgame()
{

    
    let humanscore=0,computerscore=0;
    console.log(rounds);
    for( let i = 1 ;i<=rounds;i++)
    {
        
        const val  = choices();
        const humanchoice = val[0];
        const computerchoice = val[1];
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
playgame();