---
id: intro
slug: /
title: Introduction
sidebar_position: 1
---

# Custom Item Framework

Custom Item Framework (CIF) is a BepInEx 5 / Harmony mod for SULFUR that lets you add entirely new items to the game without touching or replacing any game files.

This documentation covers the full internals for modders who want to understand exactly how the framework works, what the limits are, and what happens under the hood.

---

## What can CIF do?

- Add **consumables**, **armor**, **passive trinkets**, **enchantment oils/scrolls**, and **slotless items**
- Inject items into **loot tables**, **shop inventories**, and **enemy drop pools**
- Define **crafting recipes**
- Add **localization** for any supported language
- Ship items from **any BepInEx plugin** without a hard dependency on CIF

---

## Quick links

| Topic | Description |
|---|---|
| [item.txt Full Reference](reference/item-txt) | Every key you can use in an item definition file |
| [Entity Attributes](reference/entity-attributes) | Stats for `modifier` and `add` (armor, passives, consumables) |
| [Item Attributes](reference/item-attributes) | Stats for `enchant` (oils and scrolls) |
| [Known Limitations](known-limitations) | What CIF currently cannot do |

---

## Getting started

Items are defined as plain `.txt` files using simple `key = value` syntax. Drop them in the right folder and the framework picks them up automatically on the next game start.

```
BepInEx/plugins/CustomItemFramework/Items/myItem/myItem.txt
```

A minimal consumable looks like this:

```
id           = myHealingPotion
display_name = Healing Potion
slot_type    = Consumable
price        = 80
loot_weight  = 5

en.name      = Healing Potion
en.flavor    = Tastes like regret, works like a miracle.

add = Stat_MaxHealth 25
```

See [item.txt Full Reference](reference/item-txt) for every available key.
