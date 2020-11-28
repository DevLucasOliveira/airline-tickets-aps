export class FilterDTO {
    origin: string;
    destiny: string;
    travelDate: Date;
    returnDate: Date;
    onlyTravel: boolean;
    totalPeople: number;
}

export class Ticket {
    filter: FilterDTO;
    travelPrice: number;
    extras: TravelExtras;
    placePicture: string;
    priceTotal: number;
}

export class TravelExtras {
    countTotalBaggage: number;
    countTotalHotelDays: number;
    priceBaggage: number;
    priceHotel: number;
    foodIncluded: boolean;
}

export class State {
    id: number;
    nome: string;
    sigla: string;
}



