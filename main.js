let h = +prompt("Enter the number of hours", "24");
let s = h*3600;

if(h < 0) {
    alert("Sorry, are you dumb? Try again.")
} else {
    alert(`In ${h} hours there are ${s} seconds`);
}