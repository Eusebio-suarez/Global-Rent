
export interface ReserveRequest{
    licensePlate:string
    startPlace:string,
    endPlace:string,
    startDate:string,
    startTime:string
    endDate:string,
    endTime:string
}

export interface ReserveDetails{
    licensePlate?:string
    startPlace?:string,
    endPlace?:string,
    startDate?:string,
    startTime?:string
    endDate?:string,
    endTime?:string
}