import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IndexeddbService {
private db: IDBPDatabase<MyDB>;
  constructor() {  this.connectToDb(); }


  async connectToDb() {
    this.db = await openDB<MyDB>('my-db', 1, {
      upgrade(db) {
        db.createObjectStore('user-store');
      },
    });
  }

  addID(id: string) {
    return this.db.put('user-store', id, 'id');
  }

  deleteID(key: string) {
    return this.db.delete('user-store', key);
  }
}

interface MyDB extends DBSchema {
  'user-store': {
    key: string;
    value: string;
  };
}

