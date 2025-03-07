// alert("ola mundo")
//
// var test = prompt("digite qualquer coisa")
//
// alert(test)


function textTexto() {
    document.getElementById("titulo").innerHTML = "Bem-vinda à WePink"
}


function textColor() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = "pink"
    titulo.style.fontStyle = "26px"
}


function reset() {
    document.getElementById("titulo").innerHTML = "Bem-vinda à WePink"
}

function testInput() {
    document.getElementById("input").value = "69,90"

}

function limpaInput() {
    document.getElementById('inputEmail4').value = ''
    document.getElementById("inputPassword4").value = ''
     document.getElementById("inputAddress").value = ''
     document.getElementById("inputAddress2").value = ''
     document.getElementById("inputCity").value = ''
     document.getElementById("inputState").value = ''
     document.getElementById("inputZip").value = ''

    let num = confirm("Continuar para limpar:")
    alert(num)
}

