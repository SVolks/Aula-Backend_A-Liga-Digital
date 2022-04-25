class calculos {
    calcular = (termo, a, b) => {
        switch(termo){
            case "some":
            case "+":
                return(`Resultado: ${a} + ${b} = ${a+b}`);
            case "subt":
            case "-":
                return(`Resultado: ${a} - ${b} = ${a-b}`);
            case "div":
            case "/":
                return(`Resultado: ${a} / ${b} = ${a/b}`);
            case "mult":
            case "*":
                return(`Resultado: ${a} * ${b} = ${a*b}`);
            case "porcen":
            case "%":
                return(`Resultado: (${a}% * ${b}) /100 = ${(a*b)/100}`);
            case "elev":
            case "^":
                return(`Resultado: ${a} ^ ${b} = ${a**b}`);
            default:
                return(`Termo ${termo} inválido. Para GET favor utilizar um dos seguintes termos: some, subt, div, mult, porcen, elev. E para POST utilize um dos seguintes símbolos: +, -, /, *, %, ^.\n :D`)
            
        }
    }
}

module.exports = new calculos();