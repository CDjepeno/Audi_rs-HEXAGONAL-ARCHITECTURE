import {CarRepository} from "../../src/Core domain/online store/Repository/CarRepository";
import {Car, ICar} from "../../src/Core domain/online store/Entities/VO/Car";
// @ts-ignore
import {CarRepositoryBuilder} from "./CarRepositoryBuilder";

export class InMemoryCarRepository implements CarRepository{
    private cars: Map<string, ICar>

    constructor() {
        this.cars = new Map()
    }

    async addCar(car: ICar): Promise<"Véhicule ajouté"> {
        if(this.cars.get(car.id)) {
            this.cars.delete(car.id);
        }
        this.cars.set(car.id,car)
        return Promise.resolve('Véhicule ajouté')
    }

    addCars(carsTab: ICar[]) {
        for(let car of carsTab) {
            return  this.cars.set(car.id ,car)
        }
        return this.cars
    }

    async getCars():Promise<ICar[]> {
        const result = CarRepositoryBuilder.carsStub()
        return Promise.resolve(result)
    }

    async getCar(id: string): Promise<ICar>{
        return Promise.resolve(this.cars.get(id))
    }

    async deleteCar(id: string): Promise<"Véhicule supprimé"> {
        // if(!this.exist(car)) {
            return Promise.resolve("Véhicule supprimé")
        // }
    }
}
