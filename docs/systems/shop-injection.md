---
id: shop-injection
title: Shop Injection
sidebar_position: 3
---

# Shop Injection

## Controlling which shops carry your item

Use `shop_npc` to restrict an item to a specific vendor. The value is matched as a **case-insensitive substring** against each NPC's internal identifier.

The framework logs the identifier of every shop that opens:

```
[ItemShop] Shop opened: 'CongregationScholar': use this as shop_npc value.
```

### Known base-camp vendor identifiers

| Identifier | Vendor |
|---|---|
| `CongregationScholar` | Scholar / books |
| `CongregationScavenger` | Scavenger / consumables |
| `CongregationRepairman` | Repairman / equipment |

Additional identifiers for level vendors will appear in the log as you visit them in-game.

---

## Shop keys

```
# Random stock at all shops
shop_weight = 10

# Always in stock (not random) at a specific vendor
shop_weight = 1
shop_always = true
shop_npc    = CongregationScholar

# At multiple specific vendors: use multiple shop_npc lines
shop_weight = 5
shop_npc    = CongregationScholar
shop_npc    = CongregationScavenger
```

:::note
If a `shop_npc` filter is added to an item after it was already baked into a player's shop save cache, CIF will automatically remove it from the stale cache on the next visit.
:::
