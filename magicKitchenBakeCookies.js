// This is code for Analogy #2 of the magicKitchen JS for ADHD & Dyscalculia Series

/* Entering the magic kitchen
Sarah enters the magicKitchen. The kitchen is an object that stores who is currently cooking.
The kitchen itself is what methods will adapt to. */

const Sarah = { name: "Sarah" };

const MagicKitchen = {
  currentBaker: Sarah,
};

/* The magical pantry and the stand mixer
Sarah opens the magical pantry and uses the stand mixer.
These are magical appliances, meaning they adapt to the kitchen that calls them.
They look at the kitchen’s state to decide how to behave.
Here, this refers to the kitchen, not Sarah. Sarah is data stored on the kitchen. */

MagicKitchen.pantry = function () {
  if (this.currentBaker.name === "Sarah") {
    return ["flour", "sugar", "butter", "chocolate chips"];
  }
};

MagicKitchen.standMixer = function () {
  return `${this.currentBaker.name}'s dough is gently mixed`;
};

MagicKitchen.pantry();
MagicKitchen.standMixer();

/* The muggle oven
Sarah uses the oven. The oven does not adapt to the kitchen.
It always behaves the same way, no matter who is cooking.
This is intentional, even though it is stupid. */

MagicKitchen.oven = () => {
  return "Baking at 600 degrees for 90 minutes";
};

MagicKitchen.oven();

// The code runs. Nothing crashes.
// The behavior is just wrong for cookies, which is exactly what arrow functions do when used as appliances.

/* A tray of cookies appears
Sarah now successfully bakes a batch of cookies and has a tray of them.
Each cookie has a count of chocolate chips, a symmetry descriptor, and a scorch level. */

const cookieTray = [
  { chips: 12, symmetry: "perfect", scorchLevel: 70 },
  { chips: 4, symmetry: "lopsided", scorchLevel: 85 },
  { chips: 9, symmetry: "perfect", scorchLevel: 90 },
  { chips: 2, symmetry: "perfect", scorchLevel: 98 },
];

/* Quality Control House Elf
Sarah hires a Quality Control Inspection House Elf.
This helper does exactly one thing.
When handed a cookie, it checks whether the cookie has enough chocolate chips.
It does not know who is cooking and does not care about the kitchen. */

const qualityControlElf = (cookie) => {
  return cookie.chips >= 8;
};

// This helper, the house elf, is a callback function.
// It is active, small, and focused.

/* Cookie inspection
Sarah wants to know which cookies are disappointing.
The kitchen visits each cookie on the tray and hands it to the house elf. */

cookieTray.forEach((cookie) => {
  if (!qualityControlElf(cookie)) {
    console.log("This cookie needs help");
  }
});

// Each cookie is inspected.
// No cookies are changed.
// No new tray is created.

/* Baking an improved batch
Sarah decides to bake a NEW batch of cookies.
She uses the original tray as reference, but does not modify it.
Cookies that lack chocolate chips get sprinkles added during baking. */

const upgradedTray = cookieTray.map((cookie) => {
  if (qualityControlElf(cookie)) {
    // Bake a fresh cookie that matches the original
    return {
      chips: cookie.chips,
      symmetry: cookie.symmetry,
      scorchLevel: cookie.scorchLevel,
    };
  }

  // Bake a fresh cookie with upgrades
  return {
    chips: cookie.chips,
    symmetry: cookie.symmetry,
    scorchLevel: cookie.scorchLevel,
    sprinkles: true,
  };
});

// A brand new tray is created.
// The original tray still has the original cookies.
// Both trays now exist at the same time.

/* Gift selection (.filter())
Sarah now wants to set aside only gift-worthy cookies.
A gift cookie must have perfect symmetry and be less than 95% scorched.
The original tray should remain untouched. */

const giftQualityElf = (cookie) => {
  return cookie.symmetry === "perfect" && cookie.scorchLevel < 95;
};

const giftTray = upgradedTray.filter((cookie) => {
  return giftQualityElf(cookie);
});

// giftTray contains only gift-worthy cookies
// upgradedTray still exists unchanged
