
const roun = document.getElementById('rounds');
const option= document.getElementById('options');
const infodiv =document.getElementById('result');
const scoreofhuman = document.getElementById('humanscore');
const scoreofcomputer = document.getElementById('computerscore');
const nextbutton= document.getElementById('nextround');

let humanscore = 0 ; let computerscore = 0
let currentround = 1;let humanroundscore; let computerroundscore; 

//function ...
function getComputerChoice()
    

    // return userinput;

{
    let randomNo = Math.random();
    randomNo = randomNo.toFixed(1); //the random number is of type 0.1 or 0.4 etc
    if( randomNo>0 && randomNo<=0.3)
    {
        document.getElementById('crock').style.border='10px solid #1E90FF';
        return 'rock';
    }
    else if( randomNo>0.3 && randomNo<=0.7)
    {
        
        document.getElementById('cpaper').style.border='10px solid #1E90FF';

        return 'paper';
    }
    else
    {
        
        document.getElementById('cscissor').style.border='10px solid #1E90FF';

        return 'scissor';
    }
}

function startround(currentround,rounds)
{
        if( currentround>rounds)
        {
            return 0 ;
        }
        else
        {
            return 1; 
        }
} 
function playround(humanchoice,computerchoice,humanroundscore,computerroundscore)
{
    //not referenced by values easily 
    if( humanchoice =='rock')
    {
        if( computerchoice=='paper')
        {
            computerscore+=1;
            computerroundscore++;
            
        }
        else if( computerchoice=='rock'){

        }
        else
        {

            humanscore+=1;
            humanroundscore++;
        }
    }
    else if(humanchoice=='paper')
    {
        if( computerchoice=='paper')
        {
            
           
        }
        else if( computerchoice=='rock'){

            humanscore+=1;
            humanroundscore++;

        }
        else
        {

            computerscore+=1;
            computerroundscore++;
        }

    }
    else if( humanchoice=='scissor')
    {
        if( computerchoice=='scissor')
        {

        }
        else if( computerchoice=='rock'){

           computerscore+=1;
           computerroundscore++;
        }
        else if( computerchoice=='paper')
        {

            humanscore+=1;
            humanroundscore++;

        }


    }
    else
    {
        
    }
   
    console.log(`Human-score => ${humanscore}`);
    console.log(`Computer-score => ${computerscore}`);
    
}
function result(humanscore, computerscore)
{
    if(humanscore>computerscore)
    {
        console.log('Human won the round..');
        return 'Human won ';
    }
    else if(computerscore> humanscore)
    {
        console.log('Computer won this round..');
        return 'computer won '
    }
    else if( computerscore==humanscore)
    {
        console.log('No-One won this round..');
        return 'no-one won '
    }

}
function resultinfo()
{
    return ``
}
const cuntinue= function(computerchoice, humanchoice)
{
    nextbutton.style.display='block';
                nextbutton.addEventListener('click',()=>
                {
                    document.getElementById(humanchoice).style.border='none';
                    if( computerchoice=='rock')
                    { document.getElementById('crock').style.border='none';}  
                    else if(computerchoice =='paper')
                    { document.getElementById('cpaper').style.border='none';}   
                    else if(computerchoice =='scissor')
                    { document.getElementById('cscissor').style.border='none';}   
                    console.log(currentround);
                    playgame(roun.value ,humanscore,computerscore,currentround);
                    
    
                                 
                     
                    
                }
                )

}
// const isdigit = function ()=>{}
// console.log(roun);
roun.addEventListener('keypress',(e)=>
{
    if( e.key==='Enter')
    {
        e.preventDefault();
        if(roun.value<=0 && !(isNaN(roun.value)))
        {
            
            alert("don't be oversmart... give only positive values...");
        }
        else
        {
            document.getElementById('taking').style.display='none';
            document.getElementById('game').style.transform='scale(1)';
            document.getElementById('enjoy').style.display='none';
            document.getElementById('note').style.display='block';

            console.log('selected rounds are '+roun.value);
            playgame(Number(roun.value),currentround);
        }

    }
})

function playgame(rounds,currentround)
{
    humanroundscore=0;computerroundscore=0;
    // let currentround = 1;
    let humanchoice; let computerchoice;
    // if(currentround==1)
    // {
        
        infodiv.style.display='block';
        infodiv.innerHTML=` Round-${currentround}`;
    // }
    // infodiv.
    option.addEventListener('click',(e)=>
    {

            infodiv.style.display='none';
            infodiv.innerHTML='';
            if( e.target.id=='rock')
            {
                console.log('humanchoice is Rock');
                humanchoice='rock';
            }
            else if( e.target.id=='paper')
            {
                console.log('humanchoice is Paper');

                humanchoice='paper';
            }
            else if(e.target.id=='scissor')
            {
                console.log('humanchoice is Scissor');
                humanchoice='scissor';
            }
            else
            {
                console.log('choose at least one');
                console.log('click only on the images only ');
                infodiv.style.display='block';
                infodiv.style.fontSize='20px';
                infodiv.innerHTML='plesae chooses your option by clicking on image';

                
                
            }
            // document.getElementById('upresult').style.display='hidden';
            // infodiv.style.display='hidden';
            // infodiv.innerHTML='';
            
            option.removeEventListener('click',e);
            document.getElementById(humanchoice).style.border='10px solid #DAA520 ';
            computerchoice = getComputerChoice();
            console.log('Computer choice is '+computerchoice);
            const score = playround(humanchoice,computerchoice,humanroundscore,computerroundscore);
            
            console.log(`scores ->   ${humanscore} v/s ${computerscore}`);
            // console.log(typeof score[0]);
            infodiv.style.display='block';
            infodiv.style.fontSize='20px';
            
            infodiv.innerText=result(humanroundscore,computerroundscore);
            scoreofhuman.innerText=humanscore;
            scoreofcomputer.innerText=computerscore;
            currentround++;
            console.log(currentround);
            if(startround(currentround,))
            {
                // nextbutton.style.display='block';
                // nextbutton.addEventListener('click',()=>
                // {
                //     document.getElementById(humanchoice).style.border='none';
                //     if( computerchoice=='rock')
                //     { document.getElementById('crock').style.border='none';}  
                //     else if(computerchoice =='paper')
                //     { document.getElementById('cpaper').style.border='none';}   
                //     else if(computerchoice =='scissor')
                //     { document.getElementById('cscissor').style.border='none';}   
                //     console.log(currentround);
                    
                    
    
                                 
                     
                    
                // }
                // )
                cuntinue(computerchoice,humanchoice);
            }
            else
            {
                infodiv.innerText=result(humanscore,computerscore);
                nextbutton.style.display='none';
                return ;
            }
               

        
    }   );
    
        
    
    


            
        
        

    

        
        

}