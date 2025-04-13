
function akingfunction() {
    alert('Hi babe!!');

  
    document.getElementById("gif").style.display = "block";


    setTimeout(function() {
        alert("Hey bae, just a little reminder to take a deep breath and know that it’s okay to take things one step at a time. You’ve got this, and I’m here for you!");

        // Open YouTube link after the second alert
        window.open('https://youtube.com/clip/UgkxIVEZ0EigpD6ME2kb3UhDz_lpZR1y-Hy8?si=o56jubjW5OloObeg', '_blank');
    }, 100); // 1000 milliseconds = 1 second
}

document.getElementById("button1").addEventListener("click", akingfunction);
