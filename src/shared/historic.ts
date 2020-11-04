export class Historic {
    origin: string;
    destiny: string;
    totalPeople: number;
    priceTotal: number;
}

export class HistoricBuilder {
    private readonly historic: Historic;

    constructor() {
        this.historic = {
            origin: '',
            destiny: '',
            totalPeople: 0,
            priceTotal: 0
        };
    }

    origin(origin: string): HistoricBuilder {
        this.historic.origin = origin;
        return this;
    }

    destiny(destiny: string): HistoricBuilder {
        this.historic.destiny = destiny;
        return this;
    }

    totalPeople(totalPeople: number): HistoricBuilder {
        this.historic.totalPeople = totalPeople;
        return this;
    }

    priceTotal(priceTotal: number): HistoricBuilder {
        this.historic.priceTotal = priceTotal;
        return this;
    }

    build(): Historic {
        return this.historic;
    }
}
