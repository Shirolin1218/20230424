let str = "outer";

function fn1() {
    let str = "inner";
    console.log(str);

    setTimeout(function () {
        fn2();
        console.log("上面是3秒後的fn2");
    }, 3000);
}

function fn2() {
    console.log(str);
}

fn1();
fn2();

const go = document.querySelector("#go");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

go.addEventListener("click", function () {
    if (box1.getAttribute("class") === "box box1") {
        box1.setAttribute("class", "box box1 box-move-down");
        setTimeout(function(){
            box2.setAttribute("class", "box box2 box-move-down");
        },500);
    } else {
        box1.setAttribute("class", "box box1");
        setTimeout(function(){
            box2.setAttribute("class", "box box2 ");
        },500);
    }
});
