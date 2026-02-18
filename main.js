
let title=document.querySelector('.csss')
let turn='x';
let sqers=[];
function end(num1,num2,num3){
     title.innerHTML=`${sqers[num1]} winner`;
    document.getElementById('item'+num1).style.background='#000'
    document.getElementById('item'+num2).style.background='#000'
    document.getElementById('item'+num3).style.background='#000'
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},4000)
}
function winnner(){
for(let i=1;i<10;i++)
    {
   sqers[i]= document.getElementById('item'+i).innerHTML;
}
if(sqers[1]==sqers[2]&&sqers[2]==sqers[3]&&sqers[1]!='')
{
   end(1,2,3);
}
else if(sqers[4]==sqers[5]&&sqers[5]==sqers[6]&&sqers[4]!='')
{
   end(4,5,6);
}
else if(sqers[7]==sqers[8]&&sqers[8]==sqers[9]&&sqers[7]!='')
{
   end(7,8,9); 
}
else  if(sqers[1]==sqers[5]&&sqers[5]==sqers[9]&&sqers[1]!='')
{
  end(1,5,9)  ;
}
else if(sqers[3]==sqers[5]&&sqers[5]==sqers[7]&&sqers[3]!='')
{
    end(3,5,7);
}
else if(sqers[1]==sqers[4]&&sqers[4]==sqers[7]&&sqers[1]!='')
{
  end(1,4,7) 
}
else if(sqers[2]==sqers[5]&&sqers[5]==sqers[8]&&sqers[2]!='')
{
    end(2,5,8);
}
else if(sqers[3]==sqers[6]&&sqers[6]==sqers[9]&&sqers[3]!='')
{
    end(3,6,9); 
}
}
function game(id){
    let elment=document.getElementById(id)
if(turn === 'x' && elment.innerHTML== "")
{
    elment.innerHTML='X';
    turn='o';
    title.innerHTML='O';
}

else if(turn==='o' && elment.innerHTML==''){
    elment.innerHTML='O';
    turn='x';
    title.innerHTML='X';
}
winnner();
}