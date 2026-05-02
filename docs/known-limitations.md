---
id: known-limitations
title: Known Limitations
sidebar_position: 99
---

# Known Limitations

## Shop cache persistence

Shop items from a previous session may appear in shops until reset. Because Sulfur serialises shop inventories to disk, items injected in a previous session (before a `shop_npc` filter was added, for example) will persist in cached shop saves until the shop resets. The framework automatically removes stale custom items that no longer pass the current filter on the next visit.

## Armor loot is environment-specific

The injection targets `GameManager.currentEnvironment.armorLoot`. Armor items with `loot_env` entries for other environments will only drop when the player is actually in those environments.

## IDs must be stable after release

| Thing | Why it must be stable |
|---|---|
| Item `id` | The save-compatible `ItemId` is derived from it via FNV-1a hash. Renaming breaks saves. |
| Recipe line order | The recipe learned/unlearned state uses `CIF_<ItemId>_<index>`. Reordering loses progress. |
| Enchantment item `id` | The `EnchantmentId` is derived from it. Renaming causes the enchantment to be silently dropped from any weapon that had it applied. |

## Enchantments are lost if the mod is removed

On save load, the framework's safe indexer returns null for unknown enchantment IDs and the enchantment is silently removed rather than crashing.

## Recipes appear in the list only after first craft

Unless `recipe_known = true`, a recipe won't appear in the recipe list panel until the player crafts it once. The craft button will still activate for any valid grid combination regardless.

## No sprite atlas

Custom item sprites are loaded as individual standalone textures rather than being packed into the game's texture atlases. This is visually identical but slightly less memory-efficient at very large item counts.

## Audio files must be co-located with the item file

Sound paths are resolved relative to the source file's directory. Audio files cannot be referenced by absolute path or from a different folder.
