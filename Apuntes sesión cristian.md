# Apuntes sesión cristian

El array es una estructura de datos. para poder guardar data en una variable. Permite guardar strings, booleanos, números, lo que se quiera.
Para poder ver los datos dentro de un array usamos el índice, que empieza de 0. 
La cantidad por otro lado, nos sirve para saber cuántos elementos tengo. 
Los objetos no tienen la misma estructura de almacenamiento que los array, porque no tienen índice. Para poder identificar los elementos tenemos que usar su par de clave(llave)-valor.
Por ejemplo, si yo tengo un objeto, hago objeto.habilidades. pero habilidades ya es un array, por lo que para acceder ahí ya busco su subíndice. El for in es el ciclo for en un objeto. 

dot notation es el obj.habilidad por ejemplo
pero hay otra forma que es el bracket.
obj['habilidad']; 
Esto sirve mucho para hacer un for in, porque los objetos no tienen índice (?)

funciones

Una función es una parte del código que es ejecutable, puede recibir argumentos y devuelve algo. Es un algoritmo ejecutable. Una lista de órdenes paso a paso, para ser ejecutadas en el tiempo.

Para que una función sea reutilizable, se le dan parámetros que esta pueda recibir luego para ejecutarlo. 

Diferencia entre una función normal y la función flecha es que se elimina el return

Un callback es una función que recibe una función para ejecutar algo. 

Con el .filter no es necesario crear un array vacío para después pushearlo, porque de por sí el filter crea un nuevo array que devuelve. 

sintaxisde diferentes tipos de estructuras de datos

array => se le asigna a una variable con [] Se maneja por índices.

objeto => se le asigna a una variable con {} Se maneja por par clave-valor

función => function <nombre> (<argumentos/parámetros/propiedades>) {<lo que quiero ejecutar>}

    arrow function => se guarda en una variable y no tiene return
    let suma = (<argumentos/parámetros/propiedades>) => {<lo que quiero ejecutar>}