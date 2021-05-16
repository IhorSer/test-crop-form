import { observable, action, makeObservable } from 'mobx';
import { Country } from '../models/country';
import * as countriesJSON from '../data.json'

export default class CountriesStore {
    
    countries: Country[] = [];
    selectedCountry: string | undefined = '';
    selectedCountryRegions: string[] | undefined = [];
    selectedCountryRegion: string | undefined = '';
    constructor() {
        makeObservable(this, {
            countries: observable,
            selectedCountry: observable,
            selectedCountryRegions: observable,
            selectedCountryRegion: observable,
            getCountries: action,
            selectCountry: action,
            selectRegion: action
      });
    }

    getCountries = () => {
        this.countries = countriesJSON.countries?.map((item: any) => {
            return {
                countryName: item.countryName,
                regions: item.regions.map((item: any) => item.name)
            }
        });
    }

    selectCountry = (country: string) => {
        const selectCountry = this.countries.find(item => item?.countryName === country);
        this.selectedCountryRegion = '';
        this.selectedCountryRegions = selectCountry?.regions;
        this.selectedCountry = selectCountry?.countryName;
    }

    selectRegion = (region: string) => {
        this.selectedCountryRegion = region;
    }
}