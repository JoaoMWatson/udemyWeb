const escola = "Cod3r"

// carAt pega o letra referente ao valor passado
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// pega o valor unicode referente ao valor passado
console.log(escola.charCodeAt(3))

// passa o index referente ao valor passado
console.log(escola.indexOf("o"))

// equivalente ao python, ira mostrar do valor passado até o final da string ou o limite imposto
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// bem obviu
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('ana, maria')