import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {


  /*appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree="Ordinateur";*/
  val='hh';

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });



 isAuth = false;
 appareils: any[];

 constructor( private appareilService: AppareilService)
 {
   console.log("fff"+this.val);
   setTimeout(
     ()=> {
       this.isAuth = true;
      }, 4000
   );
 }

 ngOnInit(): void {
  this.appareils = this.appareilService.appareils;
}

onAllumer()
{
  this.appareilService.switchOnAll();
}
onEteindre()
{
  this.appareilService.switchOffAll();
}


}
