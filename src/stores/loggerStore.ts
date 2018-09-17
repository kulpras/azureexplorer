import { observable, action } from "mobx";

class LoggerStore {
  @observable public visible: boolean = false;

  @action
  public toggle() {
this.visible = !this.visible;
  }
}

export default new LoggerStore();
