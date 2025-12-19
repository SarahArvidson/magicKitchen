# magicKitchenDogSafety: document.body, parent-child DOM, script defer, set up

### Note

Many JavaScript courses introduce events by showing a visible reaction first and then saying “we’ll explain this later.” Codecademy frequently does this. For some learners, especially those with ADHD or dyscalculia, that delay increases stress and raises the affective filter, making it harder to integrate new information.

In this repo, I intentionally flip that order because it makes more sense to me.

I build the world first, then show you what happens inside of it.

If you prefer the traditional approach, there's no harm in skipping to the next analogy and then doing this one afterward.

### The Magic Kitchen Dog Safety Upgrade

Even though people are people and not objects, for the sake of this analogy, there is a baker whose name is Parth. Parth is Sarah's parthner. He really loves her cookies.

The MagicKitchen was in the house when Parth bought it. It has walls, counters, appliances, and enchantments that were installed long ago. None of these things are reacting to anything when the kitchen isn't being used. They simply exist.

One day, Augie ate some loose garbage like some kind of feral idiot, so Sarah had to take him to the emergency vet. Six hours and two thousand dollars later, he had a mild pancreatitis diagnosis. Sarah and Parth didn't want to go through this again, so they hired a wizarding contractor to renovate the kitchen, making it more “dog friendly.” Unfortunately, the request was misunderstood.

Instead of installing slip resistant floors and a robot vacuum that would pick up any scraps of food that aren't safe for dogs, like avocados and grapes, the contractor installed a dog speech enchantment. Who knows what she was thinking?

The enchantment has three important properties:

- It exists independently of Parth or Sarah.
- It listens continuously for a specific condition.
- It does nothing until that condition is met.

The enchantment is configured to listen for any dog tasting a cookie.

No magic happens until that condition is met. In that case, Augie can visit the kitchen, but he's not going to do more than yip or whine. There might be cookies in there, but as long as Augie doesn't eat one, the enchantment lies dormant.

This is what the DOM is like.

The kitchen exists.  
The elements exist.  
The rules exist.  
Nothing is reacting... _yet_.

[← Previous](./bake-cookies.md) | [Next →](./dog-enchantment.md)
