
changeTheme(1)

// Função para mudar o tema da página
function changeTheme(theme) {
    switch (theme) {
        case 1:
            theme1()
            break;
        case 2:
            theme2()
            break;
        case 3:
            theme3()
            break;
    }
}

function theme1() {
    $("body").removeClass().addClass("body-theme1")
    $("#teclado").removeClass().addClass("teclado-theme1")
    $("#display").removeClass().addClass("display-theme1")
    criaBotoes(1)
}

function theme2() {
    $("body").removeClass().addClass("body-theme2")
    $("#teclado").removeClass().addClass("teclado-theme2")
    $("#display").removeClass().addClass("display-theme2")
    criaBotoes(2)
}

function theme3() {
    $("body").removeClass().addClass("body-theme3")
    $("#teclado").removeClass().addClass("teclado-theme3")
    $("#display").removeClass().addClass("display-theme3")
    criaBotoes(3)
}

//Função para gerar botões do teclad númerico automaticamente
function criaBotoes(theme) {
    var teclado = $("#teclado")

    //Limpa o teclaod
    teclado.empty();

    var botoes = [["7", "btn1-theme" + theme], ["8", "btn1-theme" + theme], ["9", "btn1-theme" + theme], ["DEL", "btn2-theme" + theme], ["4", "btn1-theme" + theme],
    ["5", "btn1-theme" + theme], ["6", "btn1-theme" + theme], ["+", "btn1-theme" + theme], ["1", "btn1-theme" + theme], ["2", "btn1-theme" + theme],
    ["3", "btn1-theme" + theme], ["-", "btn1-theme" + theme], [".", "btn1-theme" + theme], ["0", "btn1-theme" + theme], ["/", "btn1-theme" + theme],
    ["x", "btn1-theme" + theme], ["RESET", "btn2-theme" + theme], ["=", "btn3-theme" + theme]]

    for (let i = 0; i < botoes.length; i++) {
        const element = document.createElement("button");

        // Adiciona o conteúdo no botão
        element.textContent = botoes[i][0];

        // Adiciona a classe do botão
        element.classList.add(botoes[i][1])
        element.classList.add("btn")

        if (i == 16 || i == 17) {
            element.classList.add("double")
        }

        // Propriedade para aparecer conteúdo no display ao clicar
        element.setAttribute("onclick", "calcClick(this.textContent)")

        // Insere o elemento no teclado numérico
        teclado.append(element);
    }
}

function calcClick(val) {
    if (typeof (val) == "Number") {

    } else {

    }
}