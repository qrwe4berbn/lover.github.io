//使用原生地JavaScript選到class="navbar-btn"的按鈕並為其綁定click事件
document.querySelector(".navbar-btn").addEventListener("click", function () {
    //點擊後要做的動作
    //選到class="navbar-list" 並為其切換 active 的class
    document.querySelector(".navbar-list").classList.toggle("active");
});
