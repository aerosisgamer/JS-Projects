let emoji = document.getElementById("emoji");

emoji.addEventListener("mouseenter", function(){
    emoji.innerText = "😁"
});

emoji.addEventListener("mouseleave", function(){
    emoji.innerText = "🙂"
});