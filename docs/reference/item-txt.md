---
id: item-txt
title: item.txt Full Reference
sidebar_position: 1
---

# item.txt Full Reference

All item properties are defined as `key = value` lines in any `.txt` file. Blank lines and lines starting with `#` are ignored. Keys are case-insensitive.

:::note
`name` is a deprecated alias for `id`. It still works but logs a warning and will be removed in a future version.
:::

---

## Identity

| Key | Type | Description |
|---|---|---|
| `id` | string | Unique internal identifier for this item. **Never rename after release.** Used to generate the stable save-compatible `ItemId`. |
| `display_name` | string | The item name shown in-game. Overridden by localization keys if present. |
| `slot_type` | string | Determines what kind of item this is. See [Slot Types](#slot-type-values) below. |

---

## Multi-file

| Key | Type | Description |
|---|---|---|
| `priority` | int | Controls merge order when multiple files share the same `id`. Lower values are processed first. Default: `0`. |

---

## Lore

| Key | Type | Description |
|---|---|---|
| `flavor` | string | Flavor text shown in the item tooltip. Overridden by localization keys if present. |

---

## Economy

| Key | Type | Description |
|---|---|---|
| `price` | int | Buy price at shops. |
| `sellable` | bool | Whether the player can sell this item. Default: `true`. |
| `quality` | string | Item quality tier. Affects tooltip border color. |

---

## Inventory

| Key | Type | Description |
|---|---|---|
| `inv_width` | int | Width of the item in the inventory grid (in cells). Default: `1`. |
| `inv_height` | int | Height of the item in the inventory grid (in cells). Default: `1`. |
| `artwork` | string | Filename of the icon image (`.png`). Resolved relative to the item file's folder. Falls back to `artwork.png` in the same folder if not specified. |

---

## Armor

| Key | Type | Description |
|---|---|---|
| `max_durability` | float | Maximum durability. Required for armor slot types (`Head`, `Torso`, `Feet`). |
| `modifier` | string | Adds a stat modifier while the armor is equipped. Format: `modifier = StatName value`. Can be used multiple times. See [Entity Attributes](entity-attributes). |

---

## Passive

| Key | Type | Description |
|---|---|---|
| `modifier` | string | Adds a stat modifier while the passive is in the player's inventory. Same as armor `modifier`. See [Entity Attributes](entity-attributes). |

---

## Consumable

| Key | Type | Description |
|---|---|---|
| `add` | string | Adds a stat effect when the item is consumed. Format: `add = StatName value`. Can be used multiple times. See [Entity Attributes](entity-attributes). |
| `remove` | string | Removes a negative status effect when consumed. Format: `remove = NegativeEffect_Name`. Can be used multiple times. |
| `resource` | string | Grants a resource (ammo, currency, etc.) when consumed. Format: `resource = Resource_Name amount`. Can be used multiple times. |

---

## Enchantment

| Key | Type | Description |
|---|---|---|
| `enchant` | string | Adds a weapon stat modifier when the oil/scroll is applied. Format: `enchant = StatName value`. Can be used multiple times. See [Item Attributes](item-attributes). |
| `enchant_costs_durability` | bool | Whether applying this enchantment costs weapon durability. |
| `enchant_is_elemental` | bool | Marks this enchantment as elemental (affects some game logic). |

---

## Sound

| Key | Type | Description |
|---|---|---|
| `copy_sounds` | string | Internal name of a vanilla item whose sounds to copy (use, pickup, putdown). |
| `sound_use` | string | Custom audio file for the use/consume event. Resolved relative to item folder. |
| `sound_pickup` | string | Custom audio file for picking up in inventory. Resolved relative to item folder. |
| `sound_putdown` | string | Custom audio file for placing down in inventory. Resolved relative to item folder. |

---

## Loot

| Key | Type | Description |
|---|---|---|
| `loot_weight` | int | Weight in the global loot table. Higher = more common. `0` disables. |
| `loot_table` | string | Which global loot table to inject into. `global` / `gadget` (default) or `scavenge`. |
| `loot_env` | string | Per-environment loot weight override. Format: `loot_env = EnvironmentName weight`. Can be used multiple times. A weight of `0` blocks the item in that environment. |

---

## Enemy Drops

| Key | Type | Description |
|---|---|---|
| `drop_weight` | int | Weight in enemy unit loot tables. Higher = more common. |
| `drop_faction` | string | Restricts drops to a specific enemy faction. Matched by enum name or display name substring. Omit to drop from all factions. Can be used multiple times. |

---

## Shop

| Key | Type | Description |
|---|---|---|
| `shop_weight` | int | Weight in shop stock. Higher = more likely to appear. |
| `shop_always` | bool | If `true`, the item is always in stock (not random). |
| `shop_npc` | string | Restricts the item to a specific shop NPC. Matched as a case-insensitive substring of the NPC's internal identifier. Omit to sell at all shops. Can be used multiple times. |

---

## Crafting

| Key | Type | Description |
|---|---|---|
| `recipe` | string | One ingredient slot in the recipe. Format: `recipe = itemId quantity`. Use multiple lines for multiple ingredients. |
| `recipe_output` | int | Number of items produced per craft. Default: `1`. |
| `recipe_type` | string | Crafting station type. |
| `recipe_known` | bool | If `true`, the recipe is known from the start without needing to craft it first. |

---

## Localization

Localization keys use the format `<lang>.<field>`:

| Key | Example | Description |
|---|---|---|
| `<lang>.name` | `en.name = Iron Helmet` | Localized display name for the given language. |
| `<lang>.flavor` | `de.flavor = Schwer, aber zuverlässig.` | Localized flavor text. |

Language codes accept ISO-639-1 short codes (`en`, `de`, `zh-CN`), lowercase full names (`german`), or full I2 language names (`German`).

---

## Slot type values

| Value | Description |
|---|---|
| `Consumable` | Single-use item. Supports `add`, `remove`, `resource`. Goes into gadget/scavenge loot pool. |
| `Head` | Helmet armor. Supports `modifier`, `max_durability`. Uses per-environment `loot_env`. |
| `Torso` | Chest armor. Same as `Head`. |
| `Feet` | Boot armor. Same as `Head`. |
| `PassiveEnhancements` | Passive trinket. Supports `modifier`. No durability. Goes into gadget loot pool. |
| `Enchantment` | Oil or scroll. Dragged onto a weapon to permanently apply weapon stat modifiers. Uses the `enchant` key. |
| `None` | Slotless. No equip or consume action. Can drop from enemies, appear in shops, and be used as a crafting ingredient. |
