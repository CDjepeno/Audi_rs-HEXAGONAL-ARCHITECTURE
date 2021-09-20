import {ICar} from "../../src/Core domain/online store/Entities/VO/Car";
// @ts-ignore
import {UserRepositoryBuilder} from "./UserRepositoryBuilder";
import {Utils} from "../../src/Core domain/common/Utils";

export class CarRepositoryBuilder {

    static carStub(): ICar{
        const ownerCar= UserRepositoryBuilder.UserStub()
        return {
            id: Utils.generateUniqueId(),
            name:'Audi_rs6',
            km: 1150,
            price: 50000,
            image: 'Audi_rs6.png',
            owner: ownerCar,
            available: true
        }
    }

    static carsStub(): ICar[] {
        const ownerCar1= UserRepositoryBuilder.UserStub()
        const ownerCar2= UserRepositoryBuilder.UserStub()
        const ownerCar3= UserRepositoryBuilder.UserStub()
        return [
            {
                id: Utils.generateUniqueId(),
                name:'Audi_rs6',
                km: 1150,
                price: 50000,
                image: 'Audi_rs6.png',
                owner: ownerCar1,
                available: true
            },
            {
                id: Utils.generateUniqueId(),
                name:'Audi_rs7',
                km: 1150,
                price: 80000,
                image: 'Audi_rs7.png',
                owner: ownerCar2,
                available: true
            },
            {
                id: Utils.generateUniqueId(),
                name:'Audi_RSQ3',
                km: 1150,
                price: 80000,
                image: 'Audi_rsq3.png',
                owner: ownerCar3,
                available: true
            }
        ]
    }



}