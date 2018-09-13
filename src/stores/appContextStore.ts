import { observable, action } from "mobx";

class AppContextStore {
  @observable public appName: "Typo";
  @observable public sidebarVisible: boolean = true;

  @action
  public toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}

export default new AppContextStore();