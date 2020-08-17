import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

export class UserSettingService
{
    //private db: SQLite;
    private DatabaseName: string = "UserSettings.sqlite";

    constructor( private platform: Platform, private db: SQLite ) {
        this.platform.ready().then(() => {
           // this.db = new SQLite();
            // this.db.openDatabase({name: "data.db", location: "default"}).then(() => {
            //     this.refresh();
            // }, (error) => {
            //     console.log("ERROR: ", error);
            // });
        });

    }

    // Only need to initialize db when system startup
    public InitializeDb() {
        this.db.create({
            name: this.DatabaseName,
            location: "default"
        }).then((dbInstance: SQLiteObject) => {
            dbInstance.executeSql("CREATE TABLE IF NOT EXISTS UserQuote (Id INTEGER PRIMARY KEY AUTOINCREMENT, QuoteId TEXT, IsHearted NUMERIC, IsFavourite NUMERIC)", []).then((data) => {
                console.log("TABLE CREATED: ", data);
            }, (error) => {
                console.error("Unable to execute sql", error);
            })
        }, (error) => {
            console.error("Unable to open database", error);
        });
    }
}