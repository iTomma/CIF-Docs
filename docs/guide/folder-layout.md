---
id: folder-layout
title: Folder Layout
sidebar_position: 1
---

# Folder Layout

CIF picks up item files from two places.

## Your own Items folder

```
BepInEx/plugins/CustomItemFramework/Items/
```

This folder is created automatically on first run. Drop your item files here.

## Shipping items inside another plugin

Any BepInEx plugin can include CIF items by creating a `cif_items/` subfolder:

```
BepInEx/plugins/YourMod/cif_items/
```

No registration call, no manifest, no hard dependency on CIF required: the folder's presence is the only signal.

:::tip
Items from all sources are pooled together, so a file in your `cif_items/` can patch an item defined in another mod's folder as long as it uses the same `id` and a higher `priority`.
:::

---

## Folder conventions

You can organise files inside `Items/` however you like. Three conventions are shown in the included examples.

### Loose files

```
Items/
  myPotion.txt
  myPotion.png
```

Files sit directly in `Items/`. The `id` key inside the file is what groups things together: the filename doesn't matter.

### Shared folder

```
Items/
  MyArmor/
    helmet.txt
    chestplate.txt
    artwork.png        ← shared fallback icon for both items
    chestplate.png     ← explicit icon for chestplate only
```

Multiple unrelated items can share a folder and even share an icon fallback.

### Dedicated per-item folder

```
Items/
  MyHelmet/
    base.txt           ← priority 0, core definition
    patch.txt          ← priority 5, overrides or adds to base
```

Useful when you want to split a single item across multiple files. See [Multi-File Items & Priority](multi-file) for how this works.
