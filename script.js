var result

changeTheme(1)

// Função para mudar o tema da página
function changeTheme(theme) {
    $("body").removeClass().addClass("body-theme" + theme)
    $("#teclado").removeClass().addClass("teclado-theme" + theme)
    $("#display").removeClass().addClass("display-theme" + theme)
    $("#header").removeClass().addClass("header-theme" + theme)
    criaBotoes(theme)
}

//Função para gerar botões do teclado númerico automaticamente
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

function calcClick(btn) {
    var display = document.getElementById("display")
    if ((+btn >= 0 && +btn <= 9) || btn === "+" || btn === "-" || btn === "x" || btn === "/" || btn === ".") {
        if (!verificaUltimoCaracter(display.textContent)) {
            display.innerText += btn
        }
    } else {
        switch (btn) {
            case 'DEL':
                display.textContent = display.textContent.substring(0, display.textContent.length - 1)
                break;
            case 'RESET':
                document.getElementById("display").innerText = ""
                vlrs = []
                break;
            case '=':
                if (display.textContent != "") {
                    result = eval(display.textContent.replace("x", "*"))
                    if (contarCasasDecimais(result) > 5) {
                        display.innerText = result.toFixed(5)
                    } else {
                        display.innerText = result
                    }
                }
                break;
        }
    }
}

function contarCasasDecimais(numero) {
    // Converte o número em uma string
    const numeroString = numero.toString();

    // Verifica se há uma parte decimal
    if (numeroString.includes('.')) {
        // Divide a string nas partes inteira e decimal
        const partes = numeroString.split('.');

        // A segunda parte após a divisão é a parte decimal
        const parteDecimal = partes[1];

        // Retorna o número de casas decimais na parte decimal
        return parteDecimal.length;
    } else {
        // Se não houver parte decimal, retorna 0
        return 0;
    }
}

function verificaUltimoCaracter(display) {
    console.log(display.lastIndexOf("+"));
    console.log(display.length);
    return display.charAt(display.length - 1) === '+' || display.lastIndexOf("-") === display.length || display.lastIndexOf("x") === display.length || display.lastIndexOf("/") === display.length || display.lastIndexOf(".") === display.length
}