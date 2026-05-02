---
id: multi-file
title: Multi-File Items & Priority
sidebar_position: 2
---

# Multi-File Items & Priority

Multiple `.txt` files can contribute to a single item. Files are grouped by their `id` value and merged before the item is built: filenames are irrelevant.

## Merge rules

| Key type | Behaviour |
|---|---|
| Scalar keys (`display_name`, `price`, `quality`, etc.) | **Last-write-wins**: the highest-priority file's value is used |
| List keys (`modifier`, `add`, `loot_env`, `shop_npc`, `remove`, `resource`, `recipe`, `enchant`, `drop_faction`) | **Accumulated**: values from all files are combined |
| Localization keys (`en.name`, `de.flavor`, etc.) | **Accumulated**: all languages from all files are collected |

## The `priority` key

```
priority = 0    # default: processed first
priority = 5    # processed after priority 0 files
priority = -1   # processed before priority 0 files
```

Lower values are processed first. When two files share the same priority, the filesystem path is the tiebreaker.

## Example: splitting loca into a separate file

```
# myHelmet/base.txt  (priority 0)
id             = myHelmet
display_name   = Iron Helmet
slot_type      = Head
max_durability = 100
modifier       = Resistance_Fire 0.1

# myHelmet/loca.txt  (priority 0, same priority is fine for loca)
id      = myHelmet
en.name = Iron Helmet
de.name = Eisenhelm
en.flavor = Heavy, but reliable.
de.flavor = Schwer, aber zuverlässig.
```

## Example: a compatibility patch from another mod

```
# AnotherMod/cif_items/myHelmet_patch.txt  (priority 5)
id             = myHelmet
max_durability = 150
modifier       = Resistance_Frost 0.05
```

Result: `max_durability` is overridden to `150`. The `Resistance_Fire` modifier from `base.txt` is preserved: list keys accumulate, so the patch's new `modifier` line is added on top rather than replacing.
