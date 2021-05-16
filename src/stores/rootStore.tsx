import CountriesStore from './countriesStore';
import UIStore from './uiStore';

export default class RootStore {
  countriesStore: CountriesStore;
  uiStore: UIStore

  constructor() {
    this.countriesStore = new CountriesStore();
    this.uiStore = new UIStore();
  }
}