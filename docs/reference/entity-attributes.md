---
id: entity-attributes
title: Entity Attributes
sidebar_position: 2
---

# Entity Attributes

Used by `modifier` (armor and passives) and `add` (consumables). These affect the **player character**.

```
modifier = Stat_MaxHealth Flat 25
add      = Stat_MovementSpeed PercentAdd 0.1 10
remove   = NegativeEffect_Burning
```

:::note Source acknowledgement
Descriptions on this page are inferred from the `EntityAttributes` enum and surrounding game source code. If anything looks wrong, corrections are very welcome.
:::

---

## Damage Bonuses

Flat or percentage bonus to damage dealt with a specific weapon type or damage element.

| Attribute | Description |
|---|---|
| `ExtraDamage_AssaultRifle` | Bonus damage with assault rifles. |
| `ExtraDamage_Automatic` | Bonus damage with all automatic weapons (overlaps with specific automatic weapon types). |
| `ExtraDamage_Earth` | Bonus damage dealt as the Earth element. |
| `ExtraDamage_Electric` | Bonus damage dealt as the Electric element. |
| `ExtraDamage_Fire` | Bonus damage dealt as the Fire element. |
| `ExtraDamage_Frost` | Bonus damage dealt as the Frost element. |
| `ExtraDamage_Holy` | Bonus damage dealt as the Holy element. |
| `ExtraDamage_LMG` | Bonus damage with light machine guns. |
| `ExtraDamage_Melee` | Bonus melee attack damage. |
| `ExtraDamage_Pistol` | Bonus damage with pistols. |
| `ExtraDamage_Poison` | Bonus damage dealt as the Poison element. |
| `ExtraDamage_Revolver` | Bonus damage with revolvers. |
| `ExtraDamage_Rifle` | Bonus damage with bolt-action and semi-auto rifles. |
| `ExtraDamage_Shadow` | Bonus damage dealt as the Shadow element. |
| `ExtraDamage_Shotgun` | Bonus damage with shotguns. |
| `ExtraDamage_SMG` | Bonus damage with submachine guns. |
| `ExtraDamage_Sniper` | Bonus damage with sniper rifles. |

---

## Resistances

Reduce incoming damage or the potency of a specific damage type or debuff source.

| Attribute | Description |
|---|---|
| `Resistance_Armor` | General physical damage reduction. |
| `Resistance_Bleed` | Reduces bleed damage taken. |
| `Resistance_Charm` | Reduces the chance or duration of being charmed by enemies. |
| `Resistance_Earth` | Reduces incoming Earth-type damage. |
| `Resistance_Electric` | Reduces incoming Electric damage. |
| `Resistance_Explosive` | Reduces blast and explosion damage. |
| `Resistance_Fire` | Reduces incoming Fire damage. |
| `Resistance_Frost` | Reduces incoming Frost damage. |
| `Resistance_Holy` | Reduces incoming Holy damage. |
| `Resistance_Petrified` | Reduces the chance or duration of being petrified. |
| `Resistance_Poison` | Reduces incoming Poison damage. |
| `Resistance_Punish` | Reduces damage from the Punish damage type. |
| `Resistance_Shadow` | Reduces incoming Shadow damage. |

---

## Stats

General player stats affecting movement, combat effectiveness, and survival.

| Attribute | Description |
|---|---|
| `Stat_AimMovingBonus` | Improves accuracy while moving and firing. Reduces the accuracy penalty from moving. |
| `Stat_Blindfolded` | Simulates wearing a blindfold. Likely removes or obscures the player's view. |
| `Stat_BonusXP` | Increases the amount of experience gained from kills and other sources. |
| `Stat_Charisma` | Affects shop prices or NPC dialogue outcomes. Higher values likely yield better deals. |
| `Stat_CoyoteTime` | Extends the window after walking off a ledge during which the player can still jump. |
| `Stat_CritChance` | Increases the chance of landing a critical hit when firing from the hip. |
| `Stat_CritChanceADS` | Increases critical hit chance specifically when aiming down sights. |
| `Stat_CrouchSlide` | Enables or extends the ability to slide while crouching at speed. |
| `Stat_CrouchSpeed` | Increases movement speed while crouching. |
| `Stat_DefaultTimeScale` | Adjusts the global time scale. Values below 1 create a slow-motion effect. |
| `Stat_DetectionDistance` | Modifies the range at which enemies detect the player. Lower values make the player harder to spot. |
| `Stat_ExtraJumps` | Grants additional mid-air jumps. Each point is one extra jump. |
| `Stat_GlobalDamageMultiplier` | Multiplies all damage dealt by the player, regardless of weapon or element. |
| `Stat_HealthRegen` | Regenerates health over time. Value is health restored per second. |
| `Stat_JumpDuration` | Extends how long holding jump keeps the player airborne, increasing jump height. |
| `Stat_JumpPower` | Increases the initial upward velocity of jumps. |
| `Stat_JumpShotDamage` | Bonus damage applied to shots fired while airborne. |
| `Stat_Lifesteal` | Restores health as a fraction of damage dealt. Value is a decimal (0.1 = 10% lifesteal). |
| `Stat_LuckGain` | Increases the rate at which the player accumulates luck. |
| `Stat_LungCapacity` | Extends how long the player can hold their breath in water or toxic environments. |
| `Stat_MaxHealth` | Increases the player's maximum health pool. |
| `Stat_MeleeDamage` | Increases the damage dealt by melee attacks. |
| `Stat_MovementSpeed` | Increases base movement speed. |
| `Stat_MovementSpeedBoostAfterEating` | Grants a temporary speed burst after consuming a food or consumable item. |
| `Stat_Oxygen` | Increases the player's available oxygen reserve. |
| `Stat_SlowMotion` | Activates or intensifies a slow-motion effect for the player. |
| `Stat_SpringyShoes` | Causes the player to bounce on landing, adding a springy jump mechanic. |
| `Stat_SprintBonus` | Adds speed on top of base movement specifically during sprinting. |
| `Stat_SwimSpeed` | Increases the player's speed while swimming. |
| `Stat_Thorns` | Reflects a portion of melee damage back at attackers. |
| `Stat_WeaponWeightPenalty` | Reduces the movement speed penalty imposed by heavy weapons. |
| `Stat_WearingEarPro` | Simulates ear protection. Likely reduces or suppresses tinnitus/flash-hearing effects from gunfire. |
| `Stat_WearingRudolfNose` | Cosmetic seasonal effect. Equips a Rudolph-style nose on the player model. |
| `Stat_WearingShades` | Simulates sunglasses. May reduce or negate the blinding effect of flash grenades or bright light. |

---

## Mutations

Grant the player an active mutation. Most mutations trigger passively on melee hit, ranged hit, or movement.

| Attribute | Description |
|---|---|
| `Stat_Mutation_Big` | Enlarges the player's character model. May affect hitbox or movement. |
| `Stat_Mutation_Blink` | Grants a short-range teleport blink ability. |
| `Stat_Mutation_Bomb` | Player explodes or emits a blast on some trigger condition. |
| `Stat_Mutation_Fire` | Melee attacks emit fire, burning targets on hit. |
| `Stat_Mutation_Fire_Ranged` | Ranged projectiles gain fire, burning targets on hit. |
| `Stat_Mutation_Frost` | Melee attacks emit frost, chilling or freezing targets on hit. |
| `Stat_Mutation_Frost_Ranged` | Ranged projectiles gain frost, chilling targets on hit. |
| `Stat_Mutation_FrostTrail` | Player leaves a trail of frost puddles while moving. |
| `Stat_Mutation_Lava` | Player creates lava on some trigger, burning enemies who walk into it. |
| `Stat_Mutation_Lightning` | Player emits lightning strikes on some trigger or hit condition. |
| `Stat_Mutation_Monstrosity` | Mutates the player into a monstrous form. Exact effects depend on the game's mutation system. |
| `Stat_Mutation_Noxiosa` | Player generates noxious toxic clouds that damage nearby enemies. |
| `Stat_Mutation_Poison` | Melee attacks poison targets on hit. |
| `Stat_Mutation_Poison_Ranged` | Ranged projectiles poison targets on hit. |
| `Stat_Mutation_PoisonNova` | Player periodically emits a burst of poison in all directions. |
| `Stat_Mutation_Shapeshifter` | Grants access to the shapeshifter mutation ability. |
| `Stat_Mutation_Shock` | Player emits electric shock pulses on some trigger. |
| `Stat_Mutation_Small` | Shrinks the player's character model. May affect hitbox or speed. |
| `Stat_Mutation_Surge` | Player emits a physical surge/shockwave on melee hit. |
| `Stat_Mutation_Surge_Ranged` | Ranged hits produce a surge/shockwave effect at the impact point. |

---

## Status

Toggle or directly set specific player status conditions.

| Attribute | Description |
|---|---|
| `Status_1HPSurvivial` | Allows the player to survive a killing blow, staying at 1 HP instead of dying. Single-use per trigger. |
| `Status_AirInLungs` | Grants the player air in their lungs even in environments that would cause suffocation. |
| `Status_Buoyant` | Player floats and cannot sink in liquid. |
| `Status_CurrentHealth` | Directly modifies the player's current health value by the given amount. |
| `Status_Invisible` | Renders the player invisible to enemies. |
| `Status_Luck` | Directly sets or adjusts the player's luck value. |
| `Status_NoNormalItemDrops` | Suppresses standard item drops from killed enemies. |
| `Status_OneInTheChamber` | Killing an enemy with the last bullet in the magazine automatically reloads one round. |
| `Status_SpawnFriendOnLevelLoad` | Spawns a friendly companion unit when a new level is loaded. |
| `Status_UnhealableDamage` | Marks damage taken as unhealable, preventing it from being recovered. |
| `Status_WearingGoggles` | Simulates wearing goggles. May improve underwater vision or negate certain visual debuffs. |
| `Status_WearingStraitJacket` | Simulates wearing a straitjacket. Likely restricts or prevents arm-related actions. |

---

## Negative Effects (`remove` key)

Used with the `remove` key on consumables to instantly cure the specified status effect from the player.

| Attribute | Description |
|---|---|
| `NegativeEffect_Bleed` | Removes the active bleed effect. |
| `NegativeEffect_Blinded` | Removes blindness. |
| `NegativeEffect_Burning` | Extinguishes active burning. |
| `NegativeEffect_ChainLightning` | Removes chain lightning jumping between the player and nearby targets. |
| `NegativeEffect_Charmed` | Removes the charmed status from an entity. |
| `NegativeEffect_Charmed_Player` | Removes the charmed status specifically from the player. |
| `NegativeEffect_Crusader` | Removes the Crusader effect. |
| `NegativeEffect_Electrocuted` | Removes electrocution. |
| `NegativeEffect_Feared` | Removes fear, restoring normal movement control. |
| `NegativeEffect_Flashed` | Clears flash blindness immediately. |
| `NegativeEffect_Frozen` | Thaws the target from being frozen solid. |
| `NegativeEffect_Knockback` | Suppresses or removes an active knockback force. |
| `NegativeEffect_Oily` | Removes the oily coating (which makes the target flammable). |
| `NegativeEffect_Petrified` | Breaks petrification, restoring movement. |
| `NegativeEffect_Poisoned` | Cures active poison. |
| `NegativeEffect_Rooted` | Removes the root effect, restoring the ability to move. |
| `NegativeEffect_Stunned` | Clears stun and restores player control. |
| `NegativeEffect_Suffocating` | Removes the suffocating status. |
| `NegativeEffect_Voodoo` | Removes the Voodoo curse. |
| `NegativeEffect_Wet` | Removes the wet status (which makes the target more vulnerable to electric attacks). |

---

## Resource Types (`resource` key)

Used with the `resource` key on consumables to grant ammo or other resources on use.

| Attribute | Description |
|---|---|
| `Resource_Ammo_9mm` | Grants 9mm pistol ammunition. |
| `Resource_Ammo_12Ga` | Grants 12-gauge shotgun shells. |
| `Resource_Ammo_50BMG` | Grants .50 BMG rounds for heavy sniper rifles. |
| `Resource_Ammo_556` | Grants 5.56mm rifle ammunition. |
| `Resource_Ammo_762` | Grants 7.62mm ammunition for certain rifles. |
| `Resource_Ammo_EnergyCell` | Grants energy cells for energy-based weapons. |
| `Resource_AmuletCharge` | Restores amulet charge. |
| `Resource_Stamp` | Grants stamps, used in the game's card or crafting economy. |
| `Resource_SulfCoin` | Grants Sulf Coins, the game's primary currency. |
