---
id: loot-injection
title: Loot Injection
sidebar_position: 1
---

# Loot Injection

## Consumables, Passives, and Enchantment Items

These item types are added to one of Sulfur's global loot tables using the `loot_table` key:

| `loot_table` value | Target table | What drops from it |
|---|---|---|
| `global` *(default)* | `gadgetLootTable` | Standard gadget/consumable drops from enemies |
| `gadget` | `gadgetLootTable` | Same as above (alias) |
| `scavenge` | `scavengeGlobalLootTable` | Breakable containers, world drops, food sources |

Injection happens once in `ItemLoader.Run()`. The changes persist for the entire session.

**Slotless items** (`slot_type = None`) also support `loot_weight`: there is no restriction on which loot pools any item type can appear in. The decision is left entirely to the mod author.

---

## Armor

Armor loot is environment-specific. Each `WorldEnvironment` ScriptableObject has an `armorLoot` table that is loaded when the player enters that environment. The framework injects armor into `GameManager.currentEnvironment.armorLoot` on every level load and gameplay state change.

Duplicate prevention scans the live entries list before every insertion. A `loot_env` weight of `0` explicitly blocks the item in that environment even if `loot_weight` is non-zero.

```
# Only drop in a specific environment, excluded from others
loot_weight = 10
loot_env    = ForestEnvironment 10
loot_env    = DesertEnvironment 0
```
