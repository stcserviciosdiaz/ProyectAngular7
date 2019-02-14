import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faulscoin = false

  cardinfor = [
    {
      title: '¿Qué es Bitcoins Analytica?',
      description: 'Bitcoins Analytica es una herramienta para invertir en criptomonedas. Nuestra herramienta realiza pequeñas inversiones de compra/venta con el objetivo de ir aumentando el capital inicial, para que puedas lograr la ansiada libertad financiera.'
    },
    {
      title: '¿Cuánto cuesta Bitcoins Analytica?',
      description: 'Puedes probar nuestra herramienta durante 30 días sin coste alguno. Un vez pasado el mes de prueba, el acceso nuestra herramienta cuesta 149$ mensuales. Tenemos muchos métodos de pago a tu disposición como PayPal o tarjeta de crétido/débito.'
    },
    {
      title: '¿Cómo funciona Bitcoins Analytica?',
      description: 'Bitcoins Analytica es un conjunto de potentes algoritmos que analizan en tiempo real el estado del mercado de las criptomonedas así como sus tendencias en las principales casas de cambio. Con un gran histórico a nuestras espaldas, nuestras operaciones son en un alto porcentaje exitosas. Lo que nos beneficia a todos.'
    }
  ]

  ngOnInit() {
  }

  
}
