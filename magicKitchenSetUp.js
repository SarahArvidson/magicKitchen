/* This is an analogy ChatGPT and I made together to try to help me understand JS Functions, Factory Functions, Callers, Objects, and Methods
Clean, complete magic kitchen analogy
Even though people are people and not objects, for the sake of the analogy we will treat Sarah and Alex as baker objects.

• Sarah is a baker object who only makes chocolate chip cookies
• Alex is a baker object who only makes blueberry cupcakes
• Each baker gets their own MagicKitchen instance
• Each MagicKitchen stores who the current baker is
• Appliances are properties on the kitchen
• Appliances become methods when their functions are called

In the magical kitchen
• The pantry and stand mixer are magical appliances
• They adapt based on the current baker stored on the kitchen
• They are written as normal functions
• They check who is cooking by reading kitchen state

The muggle oven
• The oven is a non magical appliance
• It was built cheaply and programmed once
• It ignores who is cooking
• It always bakes at the same temperature and time
• It is written as an arrow function

What this means in story form
• Sarah enters her MagicKitchen
• The kitchen stores currentBaker as Sarah
• When the pantry is called, it looks at currentBaker and gives chocolate chips
• When the mixer is called, it adapts to Sarah’s recipe
• When the oven is called, it ignores Sarah and bakes everything the same way

• Alex enters their MagicKitchen
• That kitchen stores currentBaker as Alex
• The pantry gives blueberries
• The mixer adapts to cupcakes
• The oven still ignores Alex and burns everything exactly the same way

The exact story is written below as factory functions.

A factory function creates multiple independent kitchens, each with its own state. 

Why this example is important
• Each kitchen instance is its own caller object
• Bakers are objects stored as data on the kitchen
• Factory functions prevent kitchens from sharing state
• Normal methods adapt based on the calling kitchen
• Arrow functions ignore the calling kitchen
• Nothing crashes
• Incorrect behavior shows up as wrong results, not errors

Final mental lock in
• Factories create separate worlds
• Normal methods ask who is using me
• Arrow functions say I do not care who you are
• People are represented as data, not callers*/

// Factory Function:
const createMagicKitchen = (baker) => {
  return {
    currentBaker: baker,

    pantry() {
      if (this.currentBaker.name === "Sarah") {
        return "chocolate chips";
      }
      if (this.currentBaker.name === "Alex") {
        return "blueberries";
      }
    },

    standMixer() {
      return `${this.currentBaker.name}'s batter is perfectly mixed`;
    },

    oven: () => {
      return "Baking at 600 degrees for 90 minutes";
    },
  };
};

//Baker Objects

const Sarah = { name: "Sarah" };
const Alex = { name: "Alex" };

//Separate Kitchens for Each Baker

const sarahsKitchen = createMagicKitchen(Sarah);
const alexsKitchen = createMagicKitchen(Alex);

// What prints when Sarah cooks, then what prints when Alex cooks:

sarahsKitchen.pantry();
// 'chocolate chips'

sarahsKitchen.standMixer();
// "Sarah's batter is perfectly mixed"

sarahsKitchen.oven();
// 'Baking at 600 degrees for 90 minutes'

alexsKitchen.pantry();
// 'blueberries'

alexsKitchen.standMixer();
// "Alex's batter is perfectly mixed"

alexsKitchen.oven();
// 'Baking at 600 degrees for 90 minutes'
