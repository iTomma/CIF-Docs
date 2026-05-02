---
id: enchantments
title: Enchantment Items
sidebar_position: 4
---

# Enchantment Items

Enchantment items (`slot_type = Enchantment`) are oils and scrolls that the player drags onto a weapon to permanently apply stat modifiers to it.

---

## Two stat systems

CIF uses two separate stat systems that mirror the game's own internal separation:

| Key | Affects | Used by |
|---|---|---|
| `modifier` | Player, while item is equipped | Armor, Passives |
| `enchant` | Weapon, when oil/scroll is applied | Enchantment items only |

:::warning
Using `modifier` on an enchantment item or `enchant` on armor will not work. CIF logs a warning on misuse.
:::

See [Entity Attributes](../reference/entity-attributes) (`modifier`) and [Item Attributes](../reference/item-attributes) (`enchant`) for the full stat lists.

---

## The enchant key

```
enchant = <ItemAttribute> <ModType> <value>
```

`ModType` controls how the value is applied to the weapon's existing stat:

| ModType | Effect |
|---|---|
| `Flat` | Adds a flat amount |
| `PercentAdd` | Adds a percentage (0.1 = +10%) |
| `PercentMult` | Multiplies by a percentage (0.1 = +10% multiplicative) |

---

## Example enchantment item

```
id           = myFireOil
display_name = Fire Oil
slot_type    = Enchantment
price        = 120

enchant = ProjectileApplyFire Flat 1
enchant = Damage Flat 5

copy_sounds = Item_BottledWater

en.name   = Fire Oil
en.flavor = Makes your bullets angrier.
```

---

## Save compatibility

:::danger Never rename an enchantment item's `id` after release
The enchantment's save ID is derived from the item `id`. Renaming it causes the enchantment to be silently removed from any weapon that had it applied. See [Stability Rules](../guide/stability-rules).
:::
