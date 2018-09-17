import { observable, action } from "mobx";

class LoggerStore {
public newLine: string = "\r\n";
@observable public visible: boolean = false;
@observable public logMessage: string = "";

  @action
  public toggle() {
this.visible = !this.visible;
}
@action
public clearLogs() {
 this.logMessage = "";
}
@action
public log(message: string) {
if (message) {
this.logMessage += this.newLine + new Date().toLocaleString() + " : " + message;
}
}
}

export default new LoggerStore();
