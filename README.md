# MessageMixer

Message Mixer is a [SerenityJS](https://github.com/SerenityJS/serenity/tree/rc-1) plugin to add a dynamic MOTD

---

### Config

The Config Has 3 keys

- "enabled"
  - **Boolean** - Enable/Disable The Dynamic MOTD
- "enable_formatting"
  - **Boolean** - Allow Minecraft formatting such as `§3Hello`
- "default_messages"
  - **Message[]** - An Array of objects telling what motd's to show and for how long

```json
{
  //ID of MOTD in motds.json
  "id": "example",
  //How Long To Display The MOTD (in ms)
  "length": 5000
}
```

### MOTDS

Default MOTD Config:

```json
{
  //The MOTD ID
  "default": {
    //All The Messages Of The MOTD
    "messages": ["SerenityJS"],
    //Go In Decending order or random
    "random": false,
    //Interval Between Each Messages
    "rotation_interval": 1000
  },

  "example": {
    "messages": ["h", "he", "hel", "hell", "hello", "hell", "hel", "he"],
    "random": false,
    "rotation_interval": 500
  }
}
```
