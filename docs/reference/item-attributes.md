---
id: item-attributes
title: Item Attributes
sidebar_position: 3
---

# Item Attributes

Used by `enchant` on **Enchantment items** (`slot_type = Enchantment`). These modify the **weapon** the oil or scroll is applied to, not the player.

```
enchant = Damage Flat 10
enchant = CritChance PercentAdd 0.05
enchant = ProjectileApplyFire Flat 1
```

:::warning
Item Attributes are only valid on Enchantment items. Using `enchant` on armor or passives will not work and CIF will log a warning.
:::

:::note Source acknowledgement
Descriptions on this page are inferred from the `ItemAttributes` enum and surrounding game source code. If anything looks wrong, corrections are very welcome.
:::

---

## Core Weapon Stats

| Attribute | Description |
|---|---|
| `AimMovingBonus` | Reduces the accuracy penalty when firing while moving. |
| `ConsumeAmmoChance` | Chance per shot that ammo is consumed normally. Reducing this gives a chance to fire for free. |
| `ConsumeExtraAmmoChance` | Chance per shot that an extra round of ammo is consumed in addition to the normal cost. |
| `CritChance` | Increases the weapon's critical hit chance when firing from the hip. |
| `CritChanceADS` | Increases critical hit chance when aiming down sights. |
| `Damage` | Flat bonus added to the weapon's damage per shot. |
| `DamageModifier` | Percentage modifier applied on top of total weapon damage. |
| `DisableADS` | Disables the ability to aim down sights with this weapon. |
| `DisableLootMoney` | Enemies killed by this weapon do not drop money. |
| `DisableLootOrgans` | Enemies killed by this weapon do not drop organs. |
| `DisableMuzzleFlash` | Suppresses the muzzle flash visual effect when firing. |
| `Durability` | Directly adjusts the weapon's current durability value. |
| `DurabilityLoss` | Changes how much durability is consumed per shot. |
| `Experience` | Grants bonus experience on each use of the weapon. |
| `FullAuto` | Enables fully automatic fire mode. |
| `Homing` | Causes projectiles to track and home in on targets. |
| `KickCompensation` | Reduces the recoil kick felt by the player when firing. |
| `KickMultiplier` | Multiplies the amount of recoil kick produced per shot. |
| `KnockbackPower` | Increases the physics knockback force applied to enemies on hit. |
| `Lifesteal` | Restores a fraction of damage dealt back as health. Value is a decimal (0.1 = 10%). |
| `MaxDurability` | Increases the weapon's maximum durability cap. |
| `ProjectileAmount` | Fires additional projectiles per shot, like a shotgun spread. |
| `ReloadSpeed` | Increases the speed at which the weapon reloads. |
| `RPM` | Changes the weapon's rounds per minute, affecting fire rate. |
| `Silenced` | Suppresses the weapon's audio signature and removes the muzzle sound/flash. |
| `Spread` | Adjusts the bullet spread cone. Lower values increase accuracy. |

---

## Projectile: Status Effects on Hit

Causes projectiles to inflict a status effect on whatever they hit.

| Attribute | Description |
|---|---|
| `ProjectileApplyBlind` | Projectiles blind the target on hit. |
| `ProjectileApplyCharm` | Projectiles charm the target on hit, temporarily turning them into an ally. |
| `ProjectileApplyCrusader` | Projectiles apply the Crusader effect on hit. |
| `ProjectileApplyElectricity` | Projectiles electrocute the target on hit. |
| `ProjectileApplyFear` | Projectiles cause the target to flee in fear on hit. |
| `ProjectileApplyFire` | Projectiles set the target on fire on hit. |
| `ProjectileApplyFrost` | Projectiles chill or freeze the target on hit. |
| `ProjectileApplyOil` | Projectiles coat the target in oil on hit, making them flammable. |
| `ProjectileApplyPetrification` | Projectiles petrify the target on hit, immobilizing them. |
| `ProjectileApplyPoison` | Projectiles poison the target on hit. |
| `ProjectileApplyRoot` | Projectiles root (immobilize) the target on hit without petrifying. |
| `ProjectileApplyStun` | Projectiles stun the target on hit, briefly preventing action. |
| `ProjectileApplyVoodoo` | Projectiles apply the Voodoo curse on hit. |
| `ProjectileApplyWet` | Projectiles wet the target on hit, increasing their vulnerability to electric damage. |

---

## Projectile: Physics and Behaviour

Modify how projectiles travel and interact with the world.

| Attribute | Description |
|---|---|
| `ProjectileBehaviourTimeout` | The projectile despawns after a fixed duration regardless of whether it hit anything. |
| `ProjectileBounce` | Number of times the projectile bounces off surfaces before stopping. |
| `ProjectileBounciness` | Controls how elastically the projectile bounces. Higher values retain more velocity. |
| `ProjectileDrag` | Increases aerodynamic drag on the projectile, slowing it down over distance. |
| `ProjectileForce` | Applies additional forward force to the projectile on spawn. |
| `ProjectileGravityFactor` | Adjusts the gravity applied to the projectile. 0 makes it fly straight; higher values cause a steep arc. |
| `ProjectileKinematicForce` | Applies kinematic steering force to the projectile for homing or curved shots. |
| `ProjectileKinematicSteerable` | Allows the projectile to be actively steered after firing. |
| `ProjectileLifeTime` | How long the projectile exists in the world before despawning. |
| `ProjectileMass` | Adjusts the projectile's physics mass, affecting collisions and knockback. |
| `ProjectileMoveAsLight` | Projectile travels in a perfectly straight line at maximum speed with no gravity. |
| `ProjectileMoveAsSpray` | Projectile is launched in a spray pattern rather than a single straight path. |
| `ProjectilePenetration` | Number of targets the projectile passes through before stopping. |
| `ProjectilePenetrationDamageMultiplier` | Multiplier applied to damage for each successive target penetrated. |
| `ProjectileScale` | Changes the visual and physical size of the projectile. |
| `ProjectileTimeScale` | Alters the time scale affecting the projectile's movement speed. |

---

## Projectile: On-Hit Area Effects

Trigger additional environmental effects at the point of impact.

| Attribute | Description |
|---|---|
| `ProjectileOnHitAftershock` | Creates a shockwave burst at the impact point, pushing nearby enemies back. |
| `ProjectileOnHitChainLightning` | Chains an arc of lightning to nearby enemies from the impact point. |
| `ProjectileOnHitCorpseExplosion` | Causes nearby corpses to explode on impact. |
| `ProjectileOnHitCorrosiveBlood` | Creates a pool of corrosive blood at the impact point. |
| `ProjectileOnHitExplosion` | Triggers a small explosion at the impact point. |
| `ProjectileOnHitExplosionRPG` | Triggers a large RPG-scale explosion at the impact point. |
| `ProjectileOnHitLava` | Creates a lava pool at the impact point. |
| `ProjectileOnHitNoxiosaCloud` | Creates a toxic noxious cloud at the impact point. |
| `ProjectileOnHitOil` | Spills an oil slick at the impact point. |
| `ProjectileOnHitSacredGround` | Creates a sacred ground area at the impact point that benefits allies. |
| `ProjectileOnHitStormSurge` | Triggers a storm surge effect at the impact point. |
| `ProjectileOnHitWater` | Creates a water puddle at the impact point. |

---

## Projectile: Visuals and Miscellaneous

Change how projectiles look or enable special behavioural flags.

| Attribute | Description |
|---|---|
| `ProjectileChaosStrike` | Applies the Chaos Strike visual and effect to projectiles. |
| `ProjectileDark` | Gives projectiles a dark shadow visual appearance. |
| `ProjectileDisableDamageComponentEffects` | Disables the visual and audio effects triggered by the damage component on impact. |
| `ProjectileFrostPuddle` | Projectiles leave a frost puddle on impact. |
| `ProjectileHoly` | Gives projectiles a holy visual appearance and holy damage type. |
| `ProjectileHolyFire` | Projectiles burn with combined holy and fire energy. |
| `ProjectilieFlameThrower` | Projectiles behave like flamethrower streams. |
| `ProjectilePesticide` | Projectiles apply a pesticide effect, effective against certain enemy types. |
| `ProjectilePrism` | Projectiles refract on impact, splitting into multiple directions. |
| `ProjectileSacrifice` | Projectile has a sacrifice mechanic, potentially costing health for extra power. |
| `ProjectileSteam` | Projectiles create steam clouds on impact or in flight. |
| `ProjectileThunderbolt` | Calls down a thunderbolt strike at the projectile's impact point. |
| `ProjectileToxicLobotomy` | Applies a toxic lobotomy effect to targets on hit. |
| `ProjectileTurnOffBulletHoles` | Suppresses the bullet hole decal from being placed on surfaces. |
| `ProjectileVisualArrow` | Replaces the projectile's visual with an arrow model. |
| `ProjectileVisualCorruptedSludge` | Replaces the projectile's visual with corrupted sludge. |
| `ProjectileVisualRocket` | Replaces the projectile's visual with a rocket model. |
| `ImpactEffectSoundOnly` | At impact, plays only the audio effect without spawning any visual effect. |
| `ShootEffectSoundOnly` | On firing, plays only the shot audio without the muzzle flash visual. |

---

## Enchantment Special Effects

High-level enchantment behaviours that trigger on hit or equip rather than modifying a raw stat.

| Attribute | Description |
|---|---|
| `EnchantmentAddRandomOilAttributes` | When applied, adds a set of random oil-style attributes to the weapon on top of the defined enchant lines. |
| `EnchantmentAlwaysSpawnOrgan` | Enemies killed with this weapon always drop an organ, guaranteed. |
| `EnchantmentBlindAoe` | On hit, blinds all enemies within a radius of the target. |
| `EnchantmentDamageAoe` | On hit, deals additional damage to all enemies within a radius of the target. |
| `EnchantmentDurabilityCost` | Each time the enchantment effect triggers it costs the weapon some durability. |
| `EnchantmentIncreaseHeadshotDamage` | Increases the damage multiplier for headshots with this weapon. |
| `EnchantmentRemoveBullets` | On hit, removes any bullets lodged in the target. |
| `EnchantmentSelfDamage` | The weapon deals damage back to the player each time it fires. |
| `EnchantmentSolidFreezeChance` | Chance per hit to completely freeze the target solid instead of just chilling them. |
| `EnchantmentSwapUnits` | On hit, teleports the player to the target's location and the target to the player's previous location. |

---

## Item and Durability Stats

Weapon-level stats that affect durability, loot, and movement when the weapon is held.

| Attribute | Description |
|---|---|
| `Durability` | Adjusts the weapon's current durability. |
| `DurabilityLoss` | Changes how much durability is lost per shot. |
| `MaxDurability` | Raises the weapon's maximum durability. |
| `Experience` | Bonus experience granted per use. |
| `ItemStat_JumpPower` | Bonus jump power while this weapon is equipped. |
| `ItemStat_LootChanceMultiplier` | Multiplies the chance of loot dropping from enemies killed with this weapon. |
| `ItemStat_MoveSpeed` | Movement speed bonus applied while this weapon is equipped. |

---

## Dual-Wield Extra Damage

| Attribute | Description |
|---|---|
| `ExtraDamage_RightGun` | Extra damage applied to the right-hand weapon in a dual-wield configuration. |
| `ExtraDamage_LeftGun` | Extra damage applied to the left-hand weapon in a dual-wield configuration. |
