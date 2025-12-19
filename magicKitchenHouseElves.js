// Base class: all house elves share these traits
class HouseElf {
  constructor(name, wage) {
    this.name = name;
    this.wage = wage;
    this.vacationDays = 10;
    this.isAssigned = false;
    this.assignedKitchen = null;
  }

  assignToKitchen(kitchenType) {
    if (this.isAssigned) {
      return `${this.name} is already assigned to a kitchen.`;
    }
    this.isAssigned = true;
    this.assignedKitchen = kitchenType;
    return `${this.name} has been assigned to a ${kitchenType} kitchen.`;
  }

  releaseFromKitchen() {
    if (!this.isAssigned) {
      return `${this.name} is not assigned to any kitchen.`;
    }
    this.isAssigned = false;
    const oldKitchen = this.assignedKitchen;
    this.assignedKitchen = null;
    return `${this.name} has been released from the ${oldKitchen} kitchen.`;
  }

  checkAssignmentStatus() {
    return this.isAssigned
      ? `${this.name} is assigned to a kitchen.`
      : `${this.name} is not assigned to a kitchen.`;
  }
}

// Subclass: elves suited for Werewolf kitchens
class WerewolfSpecialistElf extends HouseElf {
  constructor(name, wage) {
    super(name, wage);
    this.comfortWithWolves = true;
  }

  isSuitableFor(kitchenType) {
    return kitchenType === "werewolf";
  }
}

// Subclass: elves suited for Defense Against the Dark Farts kitchens
class DarkFartsDefenseElf extends HouseElf {
  constructor(name, wage) {
    super(name, wage);
    this.olfactoryTolerance = "High";
  }

  isSuitableFor(kitchenType) {
    return kitchenType === "defense";
  }
}

// Example usage
const dobby = new WerewolfSpecialistElf("Dobby", 35);
const winky = new DarkFartsDefenseElf("Winky", 42);

console.log(dobby.checkAssignmentStatus()); // not assigned
console.log(dobby.isSuitableFor("werewolf")); // true
console.log(dobby.assignToKitchen("werewolf")); // assigned
console.log(dobby.assignToKitchen("defense")); // already assigned
console.log(dobby.releaseFromKitchen()); // released
console.log(dobby.assignToKitchen("defense")); // reassigned now

console.log(winky.isSuitableFor("defense")); // true
console.log(winky.isSuitableFor("werewolf")); // false
