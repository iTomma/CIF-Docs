---
id: sound-system
title: Sound System
sidebar_position: 8
---

# Sound System

The framework supports four sound keys in item definition files:

| Key | What it controls |
|---|---|
| `copy_sounds` | Copies use + pickup + putdown sounds from a vanilla item |
| `sound_use` | Custom audio file for the consume/use event |
| `sound_pickup` | Custom audio file for picking up in inventory |
| `sound_putdown` | Custom audio file for placing down in inventory |

Audio files (`.wav`, `.ogg`, `.mp3`) must be placed in the **same folder** as the item file that references them.

---

## Resolution order

```
Use/consume:       sound_use     >  copy_sounds  >  UI swoosh fallback
Inventory pickup:  sound_pickup  >  copy_sounds  >  game default
Inventory putdown: sound_putdown >  copy_sounds  >  game default
```

`copy_sounds` fills in any slot not explicitly overridden by a specific key. You can use `copy_sounds` as a base and then only override the one sound you want to change.

---

## Common `copy_sounds` values

| Value | Sounds like |
|---|---|
| `Item_Cheeseburger` | Eating / food sounds |
| `Item_BottledWater` | Drinking / potion sounds (good for oils and scrolls) |
| `Item_ArmorVest` | Armor / passive inventory sounds |
