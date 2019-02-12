import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAmounts'
})
export class FilterAmountsPipe implements PipeTransform {

  transform(amount: any, currency, ): any {
    let numberFormat = new Intl.NumberFormat('es-VE', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
    if (currency === 'USD'){
        numberFormat = new Intl.NumberFormat('en-US', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if(currency === 'MXN'){
        numberFormat = new Intl.NumberFormat('es-MX', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if(currency === 'EUR'){
        numberFormat = new Intl.NumberFormat('hy-AM', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'ARS') {
      	numberFormat = new Intl.NumberFormat('es-MX', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
        // code...
    }else if (currency === 'DOP') {
    	numberFormat = new Intl.NumberFormat('es-DO', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'BRL') {
    	numberFormat = new Intl.NumberFormat('pt-BR', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'CNY') {
    	numberFormat = new Intl.NumberFormat('zh-CN', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'AUD') {
    	numberFormat = new Intl.NumberFormat('en-AU', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'CLP') {
    	numberFormat = new Intl.NumberFormat('es-CL', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'RUB') {
    	numberFormat = new Intl.NumberFormat('ru-RU', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'CAD'){
		  numberFormat = new Intl.NumberFormat('en-CA', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'GBP') {
    	numberFormat = new Intl.NumberFormat('es-MX', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'COP') {
    	numberFormat = new Intl.NumberFormat('es-CO', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'UYU') {
    	numberFormat = new Intl.NumberFormat('es-UY', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }else if (currency === 'JPY') {
    	numberFormat = new Intl.NumberFormat('ja-JP', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        });
    }
    return numberFormat.format(amount)
  }

}
