var suma = document.getElementById("sumar");
suma.addEventListener('click', function(){
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)
    resultadoSuma = num1+num2;
    document.querySelector(".resultado").innerHTML = `La suma entre ${num1} + ${num2} = ${resultadoSuma}`
})

var resta = document.getElementById("restar");
resta.addEventListener('click', function(){
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)
    resultadoResta = num1-num2;
    if (resultadoResta < 0){
        document.querySelector(".resultado").innerHTML = `La resta entre ${num1} - ${num2} = 0`
    } else {
    return document.querySelector(".resultado").innerHTML = `La resta entre ${num1} - ${num2} = ${resultadoResta}`
    }
})


