import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {
    constructor() { }
    createDb() {
        return {
            products: [
                {
                    "id": 1,
                    "firstName": "Krystian",
                    "lastName": "Nowak"
                },
                {
                    "id": 2,
                    "firstName": "Maciej",
                    "lastName": "Kowalski"
                },
                {
                    "id": 3,
                    "firstName": "Zbigniew",
                    "lastName": "Czajka"
                }
            ]
        };
    }
}