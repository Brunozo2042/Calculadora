
changeTheme(1)

criaBotoes(1)

// Função para mudar o tema da página
function changeTheme(theme) {
    switch (theme) {
        case 1:
            theme1()
            break;
        case 2:

            break;
        case 3:

            break;
    }
}

function theme1() {
    $("body").addClass("body-theme1")
    $("#teclado").addClass("teclado-theme1")
    $("#display").addClass("display-theme1")
}

//Função para gerar botões do teclad númerico automaticamente
function criaBotoes(theme) {
    var teclado = $("#teclado")

    teclado.empty();

    var botoes = [["7", "btn1-theme" + theme], ["8", "btn1-theme" + theme], ["9", "btn1-theme" + theme], ["DEL", "btn2-theme" + theme], ["4", "btn1-theme" + theme],
    ["5", "btn1-theme" + theme], ["6", "btn1-theme" + theme], ["+", "btn1-theme" + theme], ["1", "btn1-theme" + theme], ["2", "btn1-theme" + theme],
    ["3", "btn1-theme" + theme], ["-", "btn1-theme" + theme], [".", "btn1-theme" + theme], ["0", "btn1-theme" + theme], ["/", "btn1-theme" + theme],
    ["x", "btn1-theme" + theme], ["RESET", "btn2-theme" + theme], ["=", "btn3-theme" + theme]]

    for (let i = 0; i < botoes.length; i++) {
        const element = document.createElement("button");
        element.textContent = botoes[i][0];

        element.classList.add(botoes[i][1])
        element.classList.add("btn")

        if (i == 16 || i == 17) {
            element.classList.add("double")
        }

        element.setAttribute("onclick", "calcClick(this.textContent)")

        teclado.append(element);
    }
}

function calcClick(val) {
    if (typeof (val) == "Number") {

    }
}