class Retangulo{
   constructor(altura,largura){
       this.altura = altura
       this.largura = largura
   } 
   
   calcularArea(){
    return this.altura * this.largura
   }

   area(){
    return this.calcularArea() 
   }
}

let retangulo_1 = new Retangulo(90,60);


let retangulo_2 = new Retangulo(299,725);

console.log( retangulo_1.area(),retangulo_2.area())



