// FACTORY FUNCTION
// This is the Diagon Alley contractor workshop itself
// It always builds the same base kitchen first
// I added a beef detector because I'm allergic to beef. It's a personal touch
function buildBaseKitchen() {
  return {
    concealedFromMuggles: true,
    cauldron: true,
    beefIngredientDetector: true,
    countertops: true,
    pantry: true,
    oven: true,
    qualityControlElf: "Assigned",
    features: [],
  };
}

// Patrons will need to choose from one of the existing classes, or types of kitchen builds


// CLASS 1: Defense Against the Dark Farts
// This is a certified kitchen TYPE
// It does not build kitchens
// It upgrades a kitchen according to strict rules
class DefenseAgainstTheDarkFartsKitchen {
  applyTo(kitchen) {
    kitchen.flatulenceReductionLevel = "High";
    kitchen.features.push("Anti dark farts enchantments");
    return kitchen;
  }
}


// CLASS 2: Werewolf Kitchen
// Another certified kitchen TYPE
// Also upgrades an existing kitchen
class WerewolfKitchen {
  applyTo(kitchen) {
    kitchen.dogBed = true;
    kitchen.boneRack = [
      "chicken",
      "cow",
      "goat",
      "whale",
      "mermaid",
      "mystery creature"
    ];
    kitchen.moonPhaseClock = true;
    kitchen.features.push("Werewolf accommodations");
    return kitchen;
  }
}

// WORKSHOP ORDER PROCESS
// This is where the wizard makes the required choice
function magicKitchenWorkshop(kitchenType) {
  const kitchen = buildBaseKitchen();

  if (kitchenType === "defense") {
    const upgrade = new DefenseAgainstTheDarkFartsKitchen();
    return upgrade.applyTo(kitchen);
  }

  if (kitchenType === "werewolf") {
    const upgrade = new WerewolfKitchen();
    return upgrade.applyTo(kitchen);
  }

  throw new Error("Wizard must choose a certified kitchen type");
}

// EXAMPLES
const mollyKitchen = magicKitchenWorkshop("defense");
const remusKitchen = magicKitchenWorkshop("werewolf");



