let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let img = document.querySelectorAll("#slid");
let count = 0;
let sekil = ["dodge01.jpg","dodge02.jpg","dodge03.jpg","dodge04","dodge05","dodge06"];



function deyish(x) {
    img.src = x;
    console.log(x);
}
deyish(sekil[count]);
next.onclick = function () {
    // document.querySelector(img).src = x;
    if (count<sekil.length-1) {
        count++
    }else{
        count=0
    };
    deyish(sekil[count]);
    console.log(next);
};

