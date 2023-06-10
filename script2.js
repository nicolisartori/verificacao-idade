function calcular() {
    let txtnum1 = document.getElementById('txtnum1')
    let num1 = Number(txtnum1.value)

    if (num1 < 0){
        alert(`Insira uma idade válida`)
    }
    else if (num1 >= 18) {
        alert(`Você é maior de idade!`)
    } else {
        alert(`Você é menor de idade!`)
    }
}