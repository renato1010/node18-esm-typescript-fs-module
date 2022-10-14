import { EventEmitter } from "events";

const customEventEmitter = new EventEmitter();

customEventEmitter.on("response", () => {
  console.log("data recieved");
});
customEventEmitter.on("response", (day: string, time: string) => {
  console.log(`data recieved, day: ${day} at ${time} hours`);
});

// shoot
customEventEmitter.emit("response", "Wednesday", "14:00");
