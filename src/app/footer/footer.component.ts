import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // Ejecuta funtion javascrit
      //window.addEventListener('scroll', this.scrollTopFooter, true)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //window.addEventListener('scroll', this.scrollTopFooter, true)
  }

  // scrollTopFooter () {
  //     const scrollHidden = document.getElementById('ScrollTop')
  //     const scroll = window.scrollY
  //     if (scroll <= 0){
  //         scrollHidden.classList.add('newClass')
  //     }else{
  //         scrollHidden.classList.remove('newClass')
  //     }   
  // }

}
