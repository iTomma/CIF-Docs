---
id: crafting-recipes
title: Crafting Recipes
sidebar_position: 6
---

# Crafting Recipes

## Recipe keys

```
recipe        = ingredientName quantity   # one ingredient slot: use multiple lines for more
recipe_output = 1                         # how many items are crafted (default: 1)
recipe_type   = cooking                   # crafting station type (see below)
recipe_known  = true                      # known from the start without crafting first
```

Ingredient names can be the `id` of any custom item or the internal name of any vanilla item. Custom items are resolved first.

### recipe_type values

| Value | Station |
|---|---|
| `cooking` | Cooking station (default) |
| `enchantment` | Enchantment station |
| `generic` | Generic crafting station |

---

## Recipe list vs. craft button

The craft button activates for any valid grid combination, regardless of whether the recipe is "known." The recipe won't appear in the recipe list panel until the player crafts it once: unless `recipe_known = true`.

---

## Stability

:::danger Never rename or reorder recipes after release
Each recipe's learned/unlearned state is stored by item ID and recipe index. Renaming the item's `id` or reordering its `recipe` lines after players have learned a recipe will cause them to lose that progress. See [Stability Rules](../guide/stability-rules).
:::
