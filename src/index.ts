import { Dimension, EntityInventoryTrait, ItemIdentifier, ItemStack, Serenity, WorldEvent } from "@serenityjs/core";
import { Plugin } from "@serenityjs/plugins";
import config from "../config.json"
import motds_data from "../motds.json";

interface MOTDConfig {
  [key: string]: {
    messages: string[];
    random: boolean;
    rotation_interval: number;
  };
}

const motds: MOTDConfig = motds_data as MOTDConfig;

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const plugin = new Plugin("MessageMixer", "1.0.0", {

  onStartUp(plugin) {
    if (config.enabled) {
      startLoop(plugin.serenity)
    }
  }

});

function startLoop(serenity: Serenity) {
  let messageIndex = 0;

  setInterval(() => {
    const message = config.default_messages[messageIndex]!;
    if (!motds[message.id]) {
      messageIndex = (messageIndex + 1) % config.default_messages.length;
      return;
    }

    const motd = motds[message.id]!;
    let index = 0;

    const endLoopTime = Date.now() + message.length;

    const innerInterval = setInterval(() => {
      if (Date.now() >= endLoopTime) {
        clearInterval(innerInterval);
        return;
      }

      const msg = motd.random
        ? motd.messages[getRandomInt(0, motd.messages.length - 1)]!
        : motd.messages[index]!;

      serenity.setMotd(msg);

      index = (index + 1) % motd.messages.length;
    }, motd.rotation_interval);

    messageIndex = (messageIndex + 1) % config.default_messages.length;
  }, config.default_messages[0]!.length);
}






export default plugin;
