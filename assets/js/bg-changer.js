let btn = document.querySelectorAll("input");

btn.forEach(btn => {
    btn.addEventListener("change", function(val){
        document.body.style.backgroundColor =   window.getComputedStyle(btn.nextElementSibling).backgroundColor;
    });
});