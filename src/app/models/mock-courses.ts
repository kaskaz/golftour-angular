import { Course } from './course';

export const COURSES: Course[] = [
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
]