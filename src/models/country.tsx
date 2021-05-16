interface ICountry {
    countryName: string;
    regions: string[];
}

export type Country = ICountry | null | undefined;