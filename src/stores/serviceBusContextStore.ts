import { observable } from "mobx";
import { loggerStore } from "../stores";
const azure = require("azure-sb");

class ServiceBusContextStore {
 public serviceBusService: any;

 @observable public appName: "Typo";
 @observable public sidebarVisible: boolean = true;

 public async connect(connectionString: string) {
  this.serviceBusService = azure.createServiceBusService(connectionString);
  if (this.serviceBusService) {
 loggerStore.log("Connected.");
 loggerStore.log("Fetching queue details");
 this.serviceBusService.getQueue("default", function (error: any, results: any) {
  if (error) {
   loggerStore.log("Error : " + error);
   alert("error"  + JSON.stringify(error));
  } else {
alert(`Found ${results.length} queues.`);
alert(` queues : ${JSON.stringify(results)}`);
  }
 });
  } else {
   alert("Unable to connect");
  }
 }

 public async getQueue() {
  if (this.serviceBusService) {
   loggerStore.log("Fetching queue details");
   this.serviceBusService.getQueue("prasanna-test", function (error: any, results: any) {
    if (error) {
     loggerStore.log(JSON.stringify(results));
    } else {
 loggerStore.log(`Found ${results.length} queues.`);
 loggerStore.log(` queues : ${JSON.stringify(results)}`);
    }
   });
  }
 }
 public async listQueues() {
  if (this.serviceBusService) {
   loggerStore.log("Fetching queue details");
   this.serviceBusService.listQueues(null, function (error: any, results: any) {
    if (error) {
     loggerStore.log(JSON.stringify(results));
    } else {
 loggerStore.log(`Found ${results.length} queues.`);
 loggerStore.log(` queues : ${JSON.stringify(results)}`);
    }
   });
  }
 }
}

export default new ServiceBusContextStore();
