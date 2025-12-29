// Shared spell module: magicKitchen headquarters exports cookie enchantments
export const scorchFixer = (cookie) => {
  cookie.isScorched = false;
  return `The cookie has been rescued from burning.`;
};

export const werewolfCookie = (werewolf) => {
  werewolf.howlVolume = werewolf.howlVolume * 1.25;
  return `The werewolf howls at ${werewolf.howlVolume}% volume.`;
};

export const dogSpeechCookie = (dog) => {
  dog.canSpeak = true;
  return `${dog.name} can now talk like a human.`;
};
// Mountain shop: imports only spells it needs for its clientele
import { scorchFixer, werewolfCookie } from "../modules/magicKitchen.js";

const luna = { howlVolume: 100 };
const burntCookie = { isScorched: true };

console.log(scorchFixer(burntCookie));
console.log(werewolfCookie(luna)); // howl now 125 percent

// City dog café: imports different spells from the same headquarters
import { scorchFixer, dogSpeechCookie } from "../modules/magicKitchen.js";

const buddy = { name: "Buddy", canSpeak: false };
const sadCookie = { isScorched: true };

console.log(scorchFixer(sadCookie));
console.log(dogSpeechCookie(buddy)); // Buddy can now talk

// Name collision handling: two kitchens export healCookie so this shop renames them
import { healCookie as healMoonCookie } from "../modules/werewolfKitchen.js";
import { healCookie as healPuppyCookie } from "../modules/dogKitchen.js";

console.log(healMoonCookie());
console.log(healPuppyCookie());

// Default export: headquarters ships the entire spell crate instead of single jars
const scorchFixer = () => {};
const werewolfCookie = () => {};
const dogSpeechCookie = () => {};

const spellCrate = { scorchFixer, werewolfCookie, dogSpeechCookie };
export default spellCrate;

// Franchise shop using default import and unpacking the spell crate
import spellCrate from "../modules/magicKitchen.js";

const { scorchFixer, werewolfCookie } = spellCrate;
