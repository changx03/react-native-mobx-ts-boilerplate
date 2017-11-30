import { observable } from 'mobx';

class CounterStore {
  @observable count = 0;

  getCount = (): number => {
    return this.count;
  }

  add = () => {
    this.count++;
  };

  minus = () => {
    if (this.count > 0) {
      this.count--;
    }
  }
}

export default new CounterStore();
