export class Historic {
    id: string;
    origin: string;
    destiny: string;
    totalPeople: number;
    priceTotal: number;
}

export class HistoricBuilder {
    private readonly historic: Historic;

    constructor() {
        this.historic = {
            id:  '_' + Math.random().toString(36).substr(2, 9),
            origin: '',
            destiny: '',
            totalPeople: 0,
            priceTotal: 0
        };
    }

    id(id: string): HistoricBuilder {
        this.historic.id = id;
        return this;
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
