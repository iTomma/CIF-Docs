---
id: enemy-drops
title: Enemy Drops
sidebar_position: 2
---

# Enemy Drops

Any item of any type can drop from enemies using `drop_weight` and `drop_faction`, independently of the global loot pools.

## Drop keys

```
# Drop from all factions
drop_weight = 5

# Drop only from a specific faction
drop_weight  = 8
drop_faction = Goblins

# Drop from multiple specific factions: use multiple lines
drop_weight  = 6
drop_faction = Goblins
drop_faction = Bandits
```

## Faction matching

`drop_faction` values are matched in this order:

1. Exact `FactionIds` enum name (e.g. `Goblins`)
2. Case-insensitive enum name (e.g. `goblins`)
3. Substring of the faction's display name

Omitting `drop_faction` entirely makes the item drop from **all factions** that have a unit loot table.

:::note
Breakable containers use a separate loot path. To drop from breakables, use `loot_table = scavenge` instead.
:::
