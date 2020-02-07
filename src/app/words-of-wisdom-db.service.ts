import { Injectable } from '@angular/core';

import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { Observable, from} from 'rxjs';
import PouchDB from 'pouchdb';


@Injectable({
  providedIn: 'root'
})
export class WordsOfWisdomDbService {
  public pdb; 
  public quotes;
  public categories;
  public users;
  
  constructor() { 
    
  }

  createPouchDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this.pdb = new PouchDB('wordsofwisdomdb.db'); 
  }

  create(quote) {  
    return this.pdb.post(quote);
  }

  update(quote) {  
    return this.pdb.put(quote);
  } 

  delete(quote) {  
    return this.pdb.delete(quote);
  }   
  
  read(): Observable<any> {  
    return from(this.pdb.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      // handle result
      return result.rows.map((row :any)=> { return row.doc; });           

    }).catch(function (err) {
      console.log(err);
    }));
    
  }       
  
}
