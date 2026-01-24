
export interface Car {
    licensePlate:string
    image:string,
    model:string,
    type:string,
    people:number,
    bags:number,
    price:number
}

export interface AdminCarDTO {
    licensePlate:string
    image:string,
    model:string,
    type:string,
    people:number,
    bags:number,
    price:number,
    status:boolean
}