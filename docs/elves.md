## magicKitchenHouseElves: classes and inheritance

### The House Elf Registry

Before a magical kitchen is delivered, before any cookies are baked, and long before a wizard tastes the results, the magicKitchenWorkshop contractor must consult the House Elf Registry in Diagon Alley. The registry is where every house elf employee is recorded. They are not tools. They are people with wages, vacation days, and they retain the right to quit at any time.
The registry defines what all house elves have in common. Every elf must:

- have a name
- earn wages
- receive vacation days
- be allowed to quit
- start unassigned to any kitchen

In JavaScript terms, the registry is a class, and each individual elf created from it is an instance.

### Specialized elf heritage: inheritance

Not all houses or kitchens need the same kind of elf. Some kitchens are in the homes of werewolves who track lunar cycles and howl at inconvenient times. Other kitchens specialize in minimizing flatulence because those kitchens are in the homes of Defense Against the Dark Farts specialists.

The registry includes branches of elf heritage suited to these special environments.

A Werewolf Specialist Elf inherits everything a normal house elf has: name, wage, vacation days, and the right to quit. It also inherits a unique comfort with wolves and confidence in chaotic lunar environments.

A Defense Against the Dark Farts Specialist Elf inherits the same base rights and wages but is born with heroic olfactory tolerance and has no fear of flatulence. This heritage makes them a natural fit for kitchens specializing in fart prevention enchantments.
These inheritances are not optional. They are traits passed down through the class hierarchy.

### Assignment and suitability

When a wizard orders a kitchen, the contractor must match it to an elf. Not every elf is free to be assigned. Some are already employed. Others are unassigned but not a good fit for the specific kitchen type requested.
The registry allows three essential checks:

- Is the elf currently assigned to a kitchen
- Is the elf suitable for the requested kitchen type
- If unassigned and suitable, can the elf be assigned now
  An elf who is already assigned cannot be assigned again. An elf who is unsuitable must not be forced into a kitchen where their traits are mismatched. This prevents a werewolf specialist from being placed in a fart defense kitchen where lunar expertise is irrelevant and flatulence tolerance is required.

### How this maps to JavaScript

- The HouseElf class defines shared traits and shared methods
- The WerewolfSpecialistElf and DarkFartsDefenseElf subclasses inherit those shared traits and add new ones
- Instances created with _new_ represent individual elves
- The contractor uses methods to check assignment and suitability
- Inheritance allows all elves to share behavior while still being different

In class syntax terms:

- class HouseElf defines shared properties and methods
- class WerewolfSpecialistElf extends HouseElf and class DarkFartsDefenseElf extends HouseElf show inheritance
- isSuitableFor() demonstrates subclass specific behavior
- assignToKitchen() demonstrates shared behavior inherited by all subclasses
- super() is used to initialize shared state in each subclass

### Why this matters

Factory functions in this the magicKitchen repository explain how kitchens are built and upgraded. There are classes that are used for different types of kitchens, but we take classes a step further in the magicKitchenHouseElves feature by using classes to demonstrate how inheritance works.

This separation helps clarify that:

- factory functions produce things
- classes produce people like objects that persist
- subclasses exist to represent more specific types that still share a common base

[← Previous](./workshop.md) | [Next →](./franchise.md)
