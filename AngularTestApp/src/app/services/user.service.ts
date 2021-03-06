import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { User } from './../classes/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {
    private APIURL = environment.APIURL;
    users: User[] = [
        {
            "id": 1,
            "name": {
                "title": "Ms",
                "first": "Özsu",
                "last": "Babacan"
            },
            "location": {
                "street": {
                    "number": 4183,
                    "name": "Anafartalar Cd"
                },
                "city": "Karabük",
                "state": "Çanakkale",
                "country": "Turkey",
                "postcode": 90141
            },
            "email": "ozsu.babacan@example.com",
            "login": {
                "username": "greengoose218",
                "password": "1013"
            },
            "phone": "(977)-642-3276"
        },
        {
            "id": 2,
            "name": {
                "title": "Ms",
                "first": "Diane",
                "last": "Bernard"
            },
            "location": {
                "street": {
                    "number": 5315,
                    "name": "Rue de la Gare"
                },
                "city": "Saint-Denis",
                "state": "Gard",
                "country": "France",
                "postcode": 35766
            },
            "email": "diane.bernard@example.com",
            "login": {
                "username": "smallzebra232",
                "password": "best"
            },
            "phone": "02-25-57-14-97"
        },
        {
            "id": 3,
            "name": {
                "title": "Mr",
                "first": "Lee",
                "last": "Richardson"
            },
            "location": {
                "street": {
                    "number": 486,
                    "name": "Queens Road"
                },
                "city": "Stirling",
                "state": "County Londonderry",
                "country": "United Kingdom",
                "postcode": "JN4 0PX"
            },
            "email": "lee.richardson@example.com",
            "login": {
                "username": "happytiger217",
                "password": "lollipop"
            },
            "phone": "013873 66844"
        },
        {
            "id": 4,
            "name": {
                "title": "Mr",
                "first": "Sander",
                "last": "Madsen"
            },
            "location": {
                "street": {
                    "number": 8873,
                    "name": "Søvang"
                },
                "city": "Rønnede",
                "state": "Nordjylland",
                "country": "Denmark",
                "postcode": 38731
            },
            "email": "sander.madsen@example.com",
            "login": {
                "username": "goldenostrich998",
                "password": "physics"
            },
            "phone": "87421663"
        },
        {
            "id": 5,
            "name": {
                "title": "Mr",
                "first": "Torvald",
                "last": "Sandum"
            },
            "location": {
                "street": {
                    "number": 7966,
                    "name": "Terneveien"
                },
                "city": "Hovdenakken",
                "state": "Sør-Trøndelag",
                "country": "Norway",
                "postcode": "1714"
            },
            "email": "torvald.sandum@example.com",
            "login": {
                "username": "happywolf730",
                "password": "popopo"
            },
            "phone": "87815364"
        },
        {
            "id": 6,
            "name": {
                "title": "Mr",
                "first": "Isaac",
                "last": "Hayes"
            },
            "location": {
                "street": {
                    "number": 144,
                    "name": "Westmoreland Street"
                },
                "city": "Athlone",
                "state": "Meath",
                "country": "Ireland",
                "postcode": 97814
            },
            "email": "isaac.hayes@example.com",
            "login": {
                "username": "yellowleopard109",
                "password": "rocker"
            },
            "phone": "011-398-2404"
        },
        {
            "id": 7,
            "name": {
                "title": "Mr",
                "first": "مانی",
                "last": "سهيلي راد"
            },
            "location": {
                "street": {
                    "number": 8414,
                    "name": "سهروردی"
                },
                "city": "دزفول",
                "state": "خوزستان",
                "country": "Iran",
                "postcode": 37962
            },
            "email": "mny.shylyrd@example.com",
            "login": {
                "username": "lazyelephant680",
                "password": "antonio"
            },
            "phone": "028-84143273"
        },
        {
            "id": 8,
            "name": {
                "title": "Mrs",
                "first": "Quísnia",
                "last": "Gonçalves"
            },
            "location": {
                "street": {
                    "number": 7876,
                    "name": "Rua São Paulo "
                },
                "city": "Itapetininga",
                "state": "Amapá",
                "country": "Brazil",
                "postcode": 12827
            },
            "email": "quisnia.goncalves@example.com",
            "login": {
                "username": "bigleopard757",
                "password": "microsoft"
            },
            "phone": "(36) 9170-0987"
        },
        {
            "id": 9,
            "name": {
                "title": "Mr",
                "first": "Brent",
                "last": "Wade"
            },
            "location": {
                "street": {
                    "number": 7082,
                    "name": "West Street"
                },
                "city": "Swansea",
                "state": "Suffolk",
                "country": "United Kingdom",
                "postcode": "NR08 3GW"
            },
            "email": "brent.wade@example.com",
            "login": {
                "username": "lazysnake870",
                "password": "marathon"
            },
            "phone": "019467 50409"
        },
        {
            "id": 10,
            "name": {
                "title": "Mr",
                "first": "Murat",
                "last": "Yıldızoğlu"
            },
            "location": {
                "street": {
                    "number": 5457,
                    "name": "Bağdat Cd"
                },
                "city": "Bilecik",
                "state": "Kırklareli",
                "country": "Turkey",
                "postcode": 62908
            },
            "email": "murat.yildizoglu@example.com",
            "login": {
                "username": "yellowbear529",
                "password": "domingo"
            },
            "phone": "(552)-676-2802"
        },
        {
            "id": 11,
            "name": {
                "title": "Mr",
                "first": "Frederik",
                "last": "Madsen"
            },
            "location": {
                "street": {
                    "number": 1402,
                    "name": "Gammel Skolevej"
                },
                "city": "Øster Assels",
                "state": "Syddanmark",
                "country": "Denmark",
                "postcode": 97606
            },
            "email": "frederik.madsen@example.com",
            "login": {
                "username": "heavygoose811",
                "password": "annabell"
            },
            "phone": "76069144"
        },
        {
            "id": 12,
            "name": {
                "title": "Mr",
                "first": "Leevi",
                "last": "Haataja"
            },
            "location": {
                "street": {
                    "number": 7640,
                    "name": "Esplanadi"
                },
                "city": "Isojoki",
                "state": "Tavastia Proper",
                "country": "Finland",
                "postcode": 56255
            },
            "email": "leevi.haataja@example.com",
            "login": {
                "username": "bigleopard705",
                "password": "playtime"
            },
            "phone": "07-545-587"
        },
        {
            "id": 13,
            "name": {
                "title": "Miss",
                "first": "Ülkü",
                "last": "Erbay"
            },
            "location": {
                "street": {
                    "number": 101,
                    "name": "Talak Göktepe Cd"
                },
                "city": "Şırnak",
                "state": "Batman",
                "country": "Turkey",
                "postcode": 87761
            },
            "email": "ulku.erbay@example.com",
            "login": {
                "username": "silverbird246",
                "password": "sticks"
            },
            "phone": "(873)-784-7571"
        },
        {
            "id": 14,
            "name": {
                "title": "Mr",
                "first": "Estevão",
                "last": "Porto"
            },
            "location": {
                "street": {
                    "number": 6616,
                    "name": "Rua Alagoas "
                },
                "city": "Itabira",
                "state": "Paraíba",
                "country": "Brazil",
                "postcode": 36977
            },
            "email": "estevao.porto@example.com",
            "login": {
                "username": "smallrabbit523",
                "password": "master"
            },
            "phone": "(14) 7990-3286"
        },
        {
            "id": 15,
            "name": {
                "title": "Mr",
                "first": "کوروش",
                "last": "کامروا"
            },
            "location": {
                "street": {
                    "number": 5149,
                    "name": "شهید باهنر"
                },
                "city": "قائم‌شهر",
                "state": "اصفهان",
                "country": "Iran",
                "postcode": 64631
            },
            "email": "khwrwsh.khmrw@example.com",
            "login": {
                "username": "lazymeercat507",
                "password": "lovers"
            },
            "phone": "005-07381186"
        }
];
    index: number = this.users.length;

    constructor(private http: HttpClient, private auth: AuthService) {}

    getAuthHeader() {
        let headers = new HttpHeaders({
            Authorization : 'Bearer '+ this.auth.getToken()
        });
        return headers;
    }

    getUsers(num: number = 15) {
        // return this.http.get(this.APIURL, { headers: this.getAuthHeader()} );
        return this.users;
    }

    getUser(id: number): User {

        //return this.http.get('APIURL'+'/'+id, { headers: this.getAuthHeader()} );
        
        // return this.users.find(user=> user.id === id)
        const userSelected: User[] = this.users.filter((user) => {
            return user.id === id;
        });
        return userSelected[0];
    }

    deleteUser(user: User) {
        let index = this.users.indexOf(user);
        if(index >= 0) {
            /*
                const data = {
                    method: 'DELETE'
                };
                return this.http.post(this.APIURL+'/'+user.id, data, { headers: this.getAuthHeader()});
            */
            this.users.splice(index, 1);
        }
    }

    updateUser(user: User) {
    /*
        user['_method'] = 'PUT';
        return this.http.post(this.APIURL+'/'+user.id, user , { headers: this.getAuthHeader()});
    */ 

        const idx = this.users.findIndex((v) => v.id === user.id);
        if(idx !== -1) {
            this.users[idx] = user;
        } else {
            alert("Errore nel'aggiornamento dell'utente");
        }
    }

    createUser(user: User) {
        user.id = this.index + 1;
        this.index++;
        /*
            user['_method'] = 'PUT';
            return this.http.post(this.APIURL, user, { headers: this.getAuthHeader()});
        */ 
        this.users.splice(0,0,user);
    }
}