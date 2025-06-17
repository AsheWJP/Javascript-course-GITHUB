let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count === 10){
        alert("Your Instagram page has gained 10 followers!");
    } else if (count === 20){
        alert("Your Instagram page gained 20 followers!")
    }
}

function resetCount(){
    document.getElementById('countDisplay').innerHTML=0;
    alert("You have reset your follower count!");
    count = 0;
}