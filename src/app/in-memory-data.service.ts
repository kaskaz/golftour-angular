import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const courses = [
      {
        id: 1,
        name: 'Campo Real',
        openingYear: '2005',
        architect: 'Donald Steel',
        holes: 18,
        pairs: 72,
        facilities: ['Driving Range', 'Putting Green', 'Chipping Green', 'Buggies', 'Trolleys', 'Aluguer de Tacos', 'Loja', 'Restaurante', 'Bar', 'Sauna', 'Centro Hípico', 'Futebol', 'Piscina', 'Ténis'],
        isClubHouse: false,
        isAcademy: true,
        website: 'https://www.dolcecamporeal.com/pt/golfe/',
        local: 'Turcifal',
        county: 'Torres Vedras',
        district: 'Lisboa',
        latitude: 39.0327626768318,
        longitude: -9.24289579133255
      }, 
      {
        id: 2,
        name: 'Quinta do Vale Golf Resort',
        openingYear: '2008',
        architect: 'Severiano Ballesteros',
        holes: 18,
        pairs: 72,
        facilities: ['Driving Range', 'Putting Green', 'Chipping Green', 'Buggies', 'Trolleys', 'Aluguer de Tacos', 'Loja', 'Restaurante', 'Bar', 'Sauna', 'Centro Hípico', 'Futebol', 'Piscina', 'Ténis'],
        isClubHouse: true,
        isAcademy: false,
        website: 'https://www.dolcecamporeal.com/pt/golfe/',
        local: 'Turcifal',
        county: 'Torres Vedras',
        district: 'Lisboa',
        latitude: 39.0327626768318,
        longitude: -9.24289579133255
      }
    ];

    const accommodations = [
      {
        id: 1,
        name: 'Three Tiles',
        type: 'Apartamento',
        capacity: 4,
        address: 'Rua Costa do Castelo 140 1º dtº',
        local: 'Lisboa',
        county: 'Lisboa',
        district: 'Lisboa',
        latitude: 38.7146327963228,
        longitude: -9.13176641804601 
      },
      {
          id: 2,
          name: 'John Peter Hamilton Merry',
          type: 'Apartamento',
          capacity: 6,
          address: 'Urbanização Jardim da Meia Praia Lt. 22 Apt 105 Fração E',
          local: 'Lagos',
          county: 'Faro',
          district: 'Lisboa',
          latitude: 37.1131010114453,
          longitude: -8.66064158962408 
      }
    ]

    return {courses,accommodations};
  }
}
