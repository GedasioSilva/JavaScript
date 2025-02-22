//Os operadores lógicos comparam dois valores booleanos e retorna um valor true ou false. São eles:

//&&, || e !

true && false; // false
false || false; // false
!true; // false

//É comum usarmos estes operadores lógicos, para combinar operações relacionais como as que vemos a seguir:
1 == '1' || "a" == "a"; // true
35 === '35' && 1 == 10; // false
!( 'a' == 1); // true

//Através do operador E(&&) é possível comparar dois valores e retorna true apenas se os dois valores comparados forem true.

true && true // true
true && false // false
false && false // false

//Ou lógico (||)
//Ao comparar dois valores usando o operador OU (||), o resultado será true se pelo menos um /dos dois valores for true.

true || false // true
false || true // true
false || false // false
//Um ponto importante desse operador é que caso o primeiro valor seja true, ele simplesmente vai ignorar tudo que vier depois dele. Veja um exemplo

//NÃO lógico (!)
//O operador lógico NÃO (!) vai mudar o valor posterior a ele, ou seja, true será false e false será true.

!false // true
!true // false

//Com este operador também é possível negar o resultado de uma expressão inteira, para isso colocamos a expressão que queremos negar dentro de parênteses:

!(true || false) // false
!(true || true && false) // false