const countValue = document.querySelector("#countEl");
const increment = document.querySelector(".increaseEl");
const reset = document.querySelector(".resetEl");
const decrement = document.querySelector(".decreaseEl");
const doubleEl = document.querySelector(".doubleEl");


window.load = countValue.style.color = "blue"
increment.addEventListener("click", () => {
    countValue.textContent++;
    if (countValue.textContent >= 1) {
        countValue.style.color = "green";
    }
});

reset.addEventListener("click", () => {
    countValue.textContent = 0;
    if (countValue.textContent == 0) {
        countValue.style.color = "blue";
    }
});

decrement.addEventListener("click", () => {
    countValue.textContent--;
    if (countValue.textContent < 0) {
        countValue.style.color = "red";
    }
});

doubleEl.addEventListener("click", () => {
    countValue.textContent++;
    if (countValue.textContent >= 2) {
        countValue.style.color = "green";
    }
});