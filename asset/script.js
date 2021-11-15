/*Text*/
document.getElementById("text").innerHTML="TOP 5 Real Money Online Casino Bonus List!";
document.getElementById("text2").innerHTML="Play online slots for real money at trusted online casinos in Europe. Claim your exclusive welcome bonus and start playing slots today!";
document.getElementById("text3").innerHTML="10,302 Claimed Bonuses And Counting!";

/*Title*/
document.getElementById("title1").innerHTML="PLAYER FAVORITE";
document.getElementById("title2").innerHTML="TRENDING";
document.getElementById("title3").innerHTML="NUMBER 1 IN EVROPE";
document.getElementById("title4").innerHTML="EXCLUSIVE";
document.getElementById("title5").innerHTML="BONUS";

/*Rating*/
document.addEventListener('DOMContentLoaded', function(){
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star){
        star.addEventListener('click', setRating); 
    });
    
    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev){
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index){
        if(match){
            star.classList.remove('rated');
        }else{
            star.classList.add('rated');
        }
        if(star === span){
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);
}

/*Button*/

function myFunction() {

    //var today = new Date();
    //var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //var dateTime = date + ' ' + time;
    //document.getElementById('btn').value = 'dateTime';
    //console.log(dateTime);
    //alert(dateTime);


    //var ip = "si gjendet ip e userit";

    //var buttonId = document.getElementById("btn").value;

    //var save = save ne nje file;
   
}

