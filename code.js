//written by: Travis Mitchell Date 05/13/2021 tramitc1@uat.edu
//This is the week one assignment two countdown time sould run 10...1 then Blastoff!!. 
function startCountdown() {
    var count = 10;

    document.getElementById("CountdownTimer").innerHTML = count; //Going to change the Countdown feild to 10 when start butten is pressed.
    count = count - 1;//Will set the count -1

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1 
    }, 1000);//runs count ater one second

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 2000);//rounds count after 2 seconds 

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 3000);//runs count after 3 seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 4000); //rouns count after four seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 5000); // runs count after five seconds 

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1. 
    }, 6000);// runs count after six seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1  
    }, 7000); // runs count after seven seconds 

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1 
    }, 8000);//runs count after eight seconds

    setTimeout(function () {
        //after one second, will run code in here.
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;//will set the count -1
    }, 9000);//runs count after nine seconds

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = "Blastoff!!!!!";//displays blastoff in timer stop    
    }, 10000);// displays Blastoff after ten seconds
}
