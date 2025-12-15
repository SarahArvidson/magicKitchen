// magicKitchenDogEnchantment.js

/* World activity
Something finally happens inside the already built kitchen */

const event = {
  type: "dogTastesCookie",
  target: Augie,
};

/* Event listener logic
The enchantment reacts when its condition is met */

const handleDogTastesCookie = (event) => {
  if (event.target.species === "dog") {
    event.target.canSpeak = true;
    console.log("Every cookie is excellent");
  }
};

/* The enchantment reacts to the event */

if (
  dogSpeechEnchantment.active &&
  event.type === dogSpeechEnchantment.listensFor
) {
  handleDogTastesCookie(event);
}

// Augie can now speak
// Parth did not control this
// The reaction was pre-registered
