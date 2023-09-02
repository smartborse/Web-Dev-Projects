const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target)
        // if(e.target.id === 'red'){
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = 'white';
        // }
        switch(e.target.id){
            case 'red' : body.style.backgroundColor = 'red';
                         body.style.color = 'white';
                         break;

            case 'white' : body.style.backgroundColor = 'white';
                         body.style.color = 'black';
                         break;

            case 'blue' : body.style.backgroundColor = 'blue';
                         body.style.color = 'white';
                         break;

            case 'yellow' : body.style.backgroundColor = 'yellow';
                         body.style.color = 'black';
                         break;

            default : body.style.backgroundColor = 'cyan';
        }
    })
});