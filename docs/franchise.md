## magicKitchenFranchise: modules, imports, exports

### The headquarters spellbook

Chef Sarah is a franchiser and she does not allow every franchisee enchanted cookie shop to invent its own magic. That leads to scorched cookies, inconsistent results, and dogs speaking fluent human languages in only some towns. Instead, the magicKitchen headquarters maintains a single master spellbook stored in the modules wing of the workshop.

This spellbook contains only approved spells that are safe to share across the franchise:

- a scorch fixer spell that rescues burned cookies
- a werewolf cookie spell that makes a werewolf’s howl 125 percent louder
- a dog speech cookie spell that lets dogs talk after one bite

In JavaScript terms, this headquarters spellbook is a module file, and each spell is a value that can be exported.

### Exporting spells for the franchise

When Chef Sarah approves a spell, it is written on a recipe card and placed on the public shelf of the headquarters spellbook. Only spells on that shelf are allowed to travel to other kitchens.

Each exported spell is a named export. The kitchen may export many spells at once or declare them with the export keyword as they are written.

### Importing spells into local cookie shops

Every enchanted cookie shop is its own independent kitchen. Some serve mountain villages filled with werewolves. Others operate dog cafés in busy cities. Each shop imports only the spells it actually needs.

- The mountain shop imports the scorch fixer and werewolf howl booster
- The dog café imports the scorch fixer and dog speech enchantment

This prevents unnecessary magic from leaking into places where it does not belong.

### Renaming spells to avoid magical collisions

Occasionally two different departments create spells with the same name. One kitchen may already have a healCookie spell, while another department exports its own healCookie.

To prevent spellbook chaos, the shop applies a nickname when importing so both spells can coexist safely. This is how naming collisions are avoided in the franchise.

### The full spell crate as a default export

Sometimes a new shop is launched and needs the entire headquarters spell collection at once. In those cases, Chef Sarah ships the whole spell crate instead of individual jars.

This crate is the default export. The shop imports the crate, opens it on the counter, and pulls out the exact spells it wants to use.

### The modern sharing sign

Every enchanted cookie shop must hang the modern sharing sign on its front door. Without it, the spellbook refuses to open and the kitchen throws strange arcane errors.

In browser terms, this sign is the type="module" attribute on the script tag.

### How this maps to JavaScript

- The headquarters spellbook is a module file inside a modules folder
- Each spell is an exported function
- Enchanted cookie shops are separate JavaScript programs that import spells
- Renaming imports prevents name collisions
- Default exports represent shipping the entire spell crate at once

### Why this matters

Without the magicKitchenSpellbook, every shop would copy spells by hand. Bugs would be fixed in one town and remain broken everywhere else. Werewolves in one village would howl at the wrong volume while dogs in another would never learn to speak.

Modules allow Chef Sarah to fix magic once at headquarters and have every enchanted cookie franchise benefit immediately.

[← Previous](./elves.md) | [Next → (TBD)]
