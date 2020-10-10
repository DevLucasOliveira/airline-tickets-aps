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
}

export class TravelExtras {
    countTotalBaggage: number;
    countTotalHotelDays: number;
    priceBaggage: number;
    priceHotel: number;
    foodIncluded: boolean;
}
