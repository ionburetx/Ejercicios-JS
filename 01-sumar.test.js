//Importamos en la Línea 1 desde visest los elementos que nos interesan que aparecen dentro de los parentesis.
import { describe, it, expect } from 'vitest'

//Importamos la funcion que hemos creado en el archivo "01-sumar.js"
import { sumar } from './01-sumar.js'

//Describe para poner lo que nosotros queremos entre parentesis seguido por una coma y llamar a la funcion seguido por ()
//Ponemos el segundo elemento de vitest que mendionamos (IT) y escribimos toda la descripción que queremos. 
//
describe ('Suma de dos números', function() {
    it('Given dos números positivos (2 y 3), when se suman, then el resultado debe ser 5', 
        function (){

            //Given dos números positivos (2 y 3)
            const numero1 = 2
            const numero2 = 3

            //When se suman
            const resultado = sumar(numero1, numero2)

            //Then el resultado debe ser 5
            expect (resultado) .toBe (5)
        })

    it('Given dos números (5 y -3), when se suman, then el resultado debe ser 2', 
        function (){

            //Given dos números (5 y -3)
            const numero1 = 5
            const numero2 = -3

            //When se suman
            const resultado = sumar(numero1, numero2)

            //Then el resultado debe ser 2
            expect (resultado) .toBe (2)
        })

    it('Given dos números negativos (-1 y -1), when se suman, then el resultado debe ser -2', 
        function (){
    
            //Given dos números negativos (-1 y -1)
            const numero1 = -1
            const numero2 = -1
                
            //When se suman
            const resultado = sumar(numero1, numero2)
    
            //Then el resultado debe ser -2
            expect (resultado) .toBe (-2)
        })

    it('Given cero y un número (0 y 5), when se suman, then el resultado debe ser el mismo número (5)', 
        function (){
        
            //Given 0 y un numero positivo (0 y 5)
            const numero1 = 0
            const numero2 = 5
                    
            //When se suman
            const resultado = sumar(numero1, numero2)
        
            //Then el resultado debe ser 5
            expect (resultado) .toBe (5)
        })
     

})