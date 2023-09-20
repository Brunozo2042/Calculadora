
criaBotoes()

//Função para gerar botões do teclad númerico automaticamente
function criaBotoes() {
    var teclado = $("#teclado")

    var botoes = [["7", "btn1"], ["8", "btn1"], ["9", "btn1"], ["DEL", "btn2"], ["4", "btn1"], ["5", "btn1"], ["6", "btn1"], ["+", "btn1"],
    ["1", "btn1"], ["2", "btn1"], ["3", "btn1"], ["-", "btn1"], [".", "btn1"], ["0", "btn1"], ["/", "btn1"], ["x", "btn1"], ["RESET", "btn2"], ["=", "btn3"]]

    for (let i = 0; i < botoes.length; i++) {
        const element = document.createElement("button");
        console.log(botoes[0][0]);
        element.textContent = botoes[i][0];

        element.classList.add(botoes[i][1])
        element.classList.add("btn")

        if (i == 16 || i == 17) {
            element.classList.add("double")
        }

        teclado.append(element);
    }
}
