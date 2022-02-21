'use strict'

function grafitiDisplay(number, icon){

    let str =' ';

    for(let i = 0; i <= number; i++){
    for(let j = 0; j <= number ; j++){
        if( i === 0 || i === number || j === 0 || j === number || i === j){ 
                str += icon ;
        } else{
                str += ' ';
            }
    
            
        }

    str +='\n';
    }
return str;
}
console.log(grafitiDisplay(10,'*'));





function pUgol(size, simvol){

    let stp =' ';

    for(let i = 0; i <= size; i++){
    for(let j = 0; j <= size ; j++){
        if( i === size ||i >=j ||j === 0 ||  i === j){ 
                stp += simvol ;
        } else{
                stp += ' ';
            }
    
            
        }

    stp +='\n';
    }
return stp;
}
console.log(pUgol(10,'*'));





////  должен был быть равнобедренный треугольник
function ugol(x,y, sim){

    let stk =' ';

    for(let i = 0; i <= y; i++){
    for(let j = 0; j <= x ; j++){
        if( i=j)
{                stk += sim ;
        } else{
                stk += ' ';
            }
    
            
        }

    stk +='\n';
    }
return stk;
}
console.log(ugol(4,7,'*'));
