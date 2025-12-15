// magicKitchenDogSafety.js

/* World building
The MagicKitchen exists before any baking or reactions occur */

const MagicKitchen = {
  enchantments: [],
  dogsPresent: [],
};

/* Dog speech enchantment
Installed long ago due to a misunderstanding */

const dogSpeechEnchantment = {
  listensFor: "dogTastesCookie",
  active: true,
};

/* Augie exists in the kitchen, but nothing magical happens yet */

const Augie = {
  species: "dog",
  canSpeak: false,
};

MagicKitchen.enchantments.push(dogSpeechEnchantment);
MagicKitchen.dogsPresent.push(Augie);

// No events have fired
// No reactions have occurred
// Everything exists, waiting
