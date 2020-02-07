// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.page.html',
//   styleUrls: ['./quote.page.scss'],
// })
// export class QuotePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';
import { WordsOfWisdomDbService } from '../words-of-wisdom-db.service';



@Component({
  selector: 'app-quote',
  templateUrl: 'quote.page.html',
  styleUrls: ['quote.page.scss']
})
export class QuotePage implements OnInit {
  quote: any = {};
  canDelete : boolean = false;
  canUpdate : boolean = false;    
  constructor(private navParams: NavParams, private quoteService: WordsOfWisdomDbService) {

  }
ngOnInit(){
    var quote = this.navParams.get('quote');
    if(quote){
            this.quote = quote;
            this.canDelete = true;
            this.canUpdate = true;
    }
}

    addOrUpdate() {


        if (this.canUpdate) {
            this.quoteService.update(this.quote)
                .catch(()=>{});
        } else {
            this.quoteService.create(this.quote)
                .catch(()=>{});
        }

        //this.viewCtrl.dismiss(this.employee);
    }

    delete() {
        this.quoteService.delete(this.quote)
            .catch(()=>{});

        //this.viewCtrl.dismiss(this.employee);
    }



}