import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  expression = false

  cardinfor = [
    {
      id: 1,
      title: '¿Qué es Bitcoins Analytica?',
      description: 'Bitcoins Analytica es una herramienta para invertir en criptomonedas. Nuestra herramienta realiza pequeñas inversiones de compra/venta con el objetivo de ir aumentando el capital inicial, para que puedas lograr la ansiada libertad financiera.'
    },
    {
      id: 2,
      title: '¿Cuánto cuesta Bitcoins Analytica?',
      description: 'Puedes probar nuestra herramienta durante 30 días sin coste alguno. Un vez pasado el mes de prueba, el acceso nuestra herramienta cuesta 149$ mensuales. Tenemos muchos métodos de pago a tu disposición como PayPal o tarjeta de crétido/débito.'
    },
    {
      id: 3,
      title: '¿Cómo funciona Bitcoins Analytica?',
      description: 'Bitcoins Analytica es un conjunto de potentes algoritmos que analizan en tiempo real el estado del mercado de las criptomonedas así como sus tendencias en las principales casas de cambio. Con un gran histórico a nuestras espaldas, nuestras operaciones son en un alto porcentaje exitosas. Lo que nos beneficia a todos.'
    }
  ]

  ngOnInit() {
  }

  botbitcoin(index){
    this.expression = false
    let words = this.cardinfor
      words.forEach(item => {
        if(item[index].id = 1){
          console.log('1', item.id)
          //this.expression = true
        }else if(item[index].id = 2){
          console.log('2', item.id)
          //this.expression = false
        }else if(item.id = 3){
          console.log('3333', item.id)
          //return
        }
      })
  }
}
