// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

// }

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuotePage } from './../quote/quote.page';
import { WordsOfWisdomDbService } from '../words-of-wisdom-db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public quotes : [] = [];
  constructor(public modalCtrl: ModalController, public quoteService : WordsOfWisdomDbService) {


  }
    ngOnInit() {

            this.quoteService.createPouchDB();

            this.quoteService.read()
            .subscribe(
              (quotes)=>{
           
                    this.quotes = quotes;
           
               }); 

    }
    
    async addQuote()
    {
      await this.showDetails({});
    }
    async showDetails(quote) {
        let modal = await this.modalCtrl.create({ component: QuotePage, componentProps: quote });
        modal.present();
    }  


}
