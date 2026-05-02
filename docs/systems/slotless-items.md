---
id: slotless-items
title: Slotless Items
sidebar_position: 5
---

# Slotless Items

Items with `slot_type = None` (or with an absent/unrecognised slot type) are slotless. They have no equip or consume action and never occupy an equipment slot.

## What slotless items can do

- Appear in shops (`shop_weight`, `shop_npc`)
- Drop from enemies (`drop_weight`, `drop_faction`)
- Appear in global loot pools (`loot_weight`, `loot_table`)
- Be used as crafting ingredients in any item's `recipe` lines

The framework does not gatekeep which loot systems a slotless item can participate in: that decision belongs entirely to the item author.

## Typical use cases

- Quest or collectible items
- Crafting materials / components
- Currency or tokens
- Junk / vendor trash
