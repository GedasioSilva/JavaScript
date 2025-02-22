//Na programação é comum “quebrar” strings em partes menores e usar essas substrings para algum fim

let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

let paises_array = paises_string.split(" ");
//split separa a variavel paises_string em substrings menores a cada espaço 
//em branco encontrado;

console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]

let cores_string = "vermelho,azul,branco,cinza,roxo";

let cores_array = cores_string.split(",");
//split separa a variavel cores_string em substrings menores a cada ","  
//que for encontrado;

console.log(cores_array); // (5) ["vermelho", "azul", "branco", "cinza", "roxo"]