//Importamos en la Línea 1 desde visest los elementos que nos interesan que aparecen dentro de los parentesis.
import { describe, it, expect } from 'vitest'

//Importamos la funcion que hemos creado en el archivo "01-sumar.js"
import { verificar } from './02-verificarpar.js'

describe ('Verificar si un número es par', function(){
    it ('Given un número par positivo (4), when se verifica, then debe devolver true',
        function (){

            //Given un número par positivo (4)
            const numero = (4)

            //when se verifica
            const resultado = verificar (numero)
            console.log (verificar(4));
            //then debe devolver true
            expect (resultado) .toBe (true)
        })
        

    it ('Given un número impar positivo (7), when se verifica, then debe devolver false',
        function (){
    
            //Given un número impar positivo (7)
            const numero = (7)
    
            //when se verifica
            const resultado = verificar (numero)
    
            //then debe devolver false
            expect (resultado) .toBe (false)
        })
    
    it ('Given un número par negativo (-6), when se verifica, then debe devolver true',
        function (){
        
            //Given un número par negativo (-6)
            const numero = (-6)
        
            //when se verifica
            const resultado = verificar (numero)
        
            //then debe devolver true
            expect (resultado) .toBe (true)
        })       

    it ('Given cero (0), when se verifica, then debe devolver true',
        function (){
            
            //Given un número (0))
            const numero = (0)
            
            //when se verifica
            const resultado = verificar (numero)
            
            //then debe devolver true
            expect (resultado) .toBe (true)
        }) 
})