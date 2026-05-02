---
id: stability-rules
title: Stability Rules
sidebar_position: 3
---

# Stability Rules

CIF derives save-compatible IDs from the text in your item files using a hash. This means certain values **must never change after you release a mod**, or players will lose data.

## What must stay stable

| Value | What breaks if you change it |
|---|---|
| Item `id` | The item's save ID is derived from this. Renaming loses the item from any save that contains it. |
| `recipe` line order | The learned/unlearned state for each recipe is stored by index. Reordering loses crafting progress. |
| Enchantment item `id` | The enchantment ID is derived from this. Renaming causes the enchantment to be silently dropped from any weapon that had it applied. |

:::danger
Treat `id` as permanent the moment you ship. If you need to "rename" an item, add the new name as `display_name` or a localization key: never change `id`.
:::

---

## What happens when a mod is removed

CIF protects saves from crashing when a mod is gone. When a save is loaded and a custom item is no longer registered:

- Items that were in the player's inventory are **silently dropped**.
- Enchantments applied to weapons are **silently removed**.
- No crash, no corrupted save.
