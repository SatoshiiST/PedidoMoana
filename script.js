function fuja() {
    var BtnNao = document.getElementById("nao");

    var LargJanela = window.innerWidth;
    var AtJanela = window.innerHeight;

    var maxX = LargJanela - BtnNao.offsetWidth;
    var maxY = AtJanela - BtnNao.offsetHeight;

    var PosBtnX = Math.floor(Math.random() * maxX);
    var PosBtnY = Math.floor(Math.random() * maxY);

    BtnNao.style.left = PosBtnX + "px";
    BtnNao.style.top = PosBtnY + "px";
}