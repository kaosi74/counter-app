let count = 0;
let countLabel = document.getElementById("countLabel")

let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");

decreaseBtn.addEventListener("click", () => {
    count -= 1;
    countLabel.innerHTML = count;
})
resetBtn.addEventListener("click", () => {
    count = 0;
    countLabel.innerHTML = count;
})
increaseBtn.addEventListener("click", () => {
    count += 1;
    countLabel.innerHTML = count;
})