import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService implements InMemoryDbService {  //data are the result of web api return, not from database 

  createDb() {  //po prostu te dane beda zwracane w przypadku z serwisu nie zaleznie od warunkow
    const Data = [
      { Id: 1, Name: 'Mr. Nice', Kind: 'Pies', Age: 2, CityName:'Kutno', OwnerId:1},
      { Id: 2, Name: 'Narco', Kind: 'Pies', Age: 2, CityName:'Łódź', OwnerId:2 },
      { Id: 3, Name: 'Bombasto', Kind: 'Pies', Age: 4, CityName:'Gledzianów', OwnerId:3 },
      { Id: 4, Name: 'Celeritas', Kind: 'Pies', Age: 5, CityName:'Kutno', OwnerId:1 },
      { Id: 5, Name: 'Magneta', Kind: 'Pies', Age: 2, CityName:'Paryz', OwnerId:4 },
      { Id: 6, Name: 'RubberMan', Kind: 'Pies', Age: 5, CityName:'Kutno', OwnerId:2 },
      { Id: 7, Name: 'Dynama', Kind: 'Pies', Age: 1, CityName:'Paryz', OwnerId:4 },
      { Id: 8, Name: 'Dr IQ', Kind: 'Pies', Age: 3, CityName:'Kutno', OwnerId:5 },
      { Id: 9, Name: 'Magma', Kind: 'Pies', Age: 7, CityName:'Kutno', OwnerId:1 },
      { Id: 10, Name: 'Tornado', Kind: 'Pies', Age: 9, CityName:'Kutno', OwnerId:2 }
    ];
    return { Data };
  }
  constructor() { }

}

export class Users implements InMemoryDbService { 
  createDb() {
    const Data = [
      { Id: 1, Name: 'Mateusz', Surname: 'Lewandowski', CityName: 'Kutno', Telephone:'542354', Email:'hfditf@gmail.com', CityId:1 },
      { Id: 2, Name: 'Irena', Surname: 'Olczak', CityName: 'Paryz', Telephone:'543534', Email:'gfkkrytvvfcdgf@gmail.com', CityId:2 },
      { Id: 3, Name: 'Paulina', Surname: 'Lewandowska', CityName: 'Łódź', Telephone:'12354', Email:'jgdferg@gmail.com', CityId:3 },
      { Id: 4, Name: 'Przemek', Surname: 'Najlepszy', CityName: 'Gledzianów', Telephone:'8657656323', Email:'ewthjtejt@gmail.com', CityId:4 },
      { Id: 5, Name: 'Janusz', Surname: 'Graczyk', CityName: 'Kutno', Telephone:'6455782354', Email:'fdsgfs@gmail.com', CityId:1 },
    ];
    return { Data };
  }
  constructor() { }
}

export class Regions implements InMemoryDbService{// ta tabela powinna byc zaimplementowana w bazie defaultowo
   createDb() {
    const Data = [{ Id: 1, Name: 'Łódzkie'},
      { Id: 2, Name: 'Mazowieckie'},
      { Id: 3, Name: 'Świętokrzyskie'},
      { Id: 4, Name: 'Pomorskie'}
      ];
    return { Data };
}
}

export class Cities implements InMemoryDbService { 
  createDb() {
    const Data = [
      { Id: 1, Name: 'Kutno', Postcode:"99-300"},
      { Id: 2, Name: 'Paryz', Postcode:"22-340"},     
      { Id: 3, Name: 'Gledzianów', Postcode:"22-490"},
      { Id: 4, Name: 'Łódź', Postcode:"92-340"},
      { Id: 5, Name: 'Łódź', Postcode:"92-240"} //because can exists more than one postcode in Łódź
      //te postcody powinny byc raczej rozdzielone tak jak regiony ale to w przyszlosci najwyzej rozdziele bo narazie mi nie jest to potrzebne !!!!! TODO
    ];
    return { Data };
  }
  constructor() { }
}

export class Messages implements InMemoryDbService { 
  createDb() {
    const Data = [
      { Id: 1, Title: 'Adopcja psa', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:null, ReceiverUserId:2, IsRead:false}, //SenderUserId is null if person does not have account
      { Id: 2, Title: 'Chce tego psa', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:1, ReceiverUserId:2},
      { Id: 3, Title: 'Pytanie', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:1, ReceiverUserId:3},
      { Id: 4, Title: 'Adopcja', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:1, ReceiverUserId:4},
      { Id: 5, Title: 'Ile lat ma ten pies', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:1, ReceiverUserId:2},
      { Id: 6, Title: 'Adopcja', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:1, ReceiverUserId:5},
      { Id: 7, Title: 'Adopcja', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:1, ReceiverUserId:5},
      { Id: 8, Title: 'Adopcja', Content:"dzien dobry chce zaadoptowac psa", MessageFrom:"", SenderUserId:1, ReceiverUserId:5},
    ];
    return { Data };
  }
  constructor() { }
}