export const ACTOR_TYPES = [
    'character',
    'npc'
]

export const PROPERTIES = [
    'activeEffect.deleted',
    'activeEffect.disabled',
    'actor.inCombat',
    'actor.itemCreated',
    'actor.itemDeleted',
    'actor.name',
    'actor.system.abilities.cha.dmg',
    'actor.system.abilities.cha.lvl',
    'actor.system.abilities.cha.min',
    'actor.system.abilities.cha.mod',
    'actor.system.abilities.cha.value',
    'actor.system.abilities.cha.value',
    'actor.system.abilities.con.dmg',
    'actor.system.abilities.con.lvl',
    'actor.system.abilities.con.min',
    'actor.system.abilities.con.mod',
    'actor.system.abilities.con.value',
    'actor.system.abilities.dex.dmg',
    'actor.system.abilities.dex.lvl',
    'actor.system.abilities.dex.min',
    'actor.system.abilities.dex.mod',
    'actor.system.abilities.dex.value',
    'actor.system.abilities.int.dmg',
    'actor.system.abilities.int.lvl',
    'actor.system.abilities.int.min',
    'actor.system.abilities.int.mod',
    'actor.system.abilities.int.value',
    'actor.system.abilities.str.dmg',
    'actor.system.abilities.str.lvl',
    'actor.system.abilities.str.min',
    'actor.system.abilities.str.mod',
    'actor.system.abilities.str.value',
    'actor.system.abilities.wis.dmg',
    'actor.system.abilities.wis.lvl',
    'actor.system.abilities.wis.min',
    'actor.system.abilities.wis.mod',
    'actor.system.abilities.wis.value',
    'actor.system.attributes.ac.base',
    'actor.system.attributes.ac.mod',
    'actor.system.attributes.ac.value',
    'actor.system.attributes.attack.arcane.bonus',
    'actor.system.attributes.attack.divine.bonus',
    'actor.system.attributes.attack.melee.bonus',
    'actor.system.attributes.attack.ranged.bonus',
    'actor.system.attributes.attackMod.value',
    'actor.system.attributes.critMod.atk.value',
    'actor.system.attributes.critMod.def.value',
    'actor.system.attributes.disengage',
    'actor.system.attributes.disengageBonus',
    'actor.system.attributes.escalation.value',
    'actor.system.attributes.hp.automatic',
    'actor.system.attributes.hp.base',
    'actor.system.attributes.hp.max',
    'actor.system.attributes.hp.min',
    'actor.system.attributes.hp.temp',
    'actor.system.attributes.hp.tempmax',
    'actor.system.attributes.hp.value',
    'actor.system.attributes.init.mod',
    'actor.system.attributes.init.value',
    'actor.system.attributes.level.max',
    'actor.system.attributes.level.min',
    'actor.system.attributes.level.value',
    'actor.system.attributes.md.base',
    'actor.system.attributes.md.min',
    'actor.system.attributes.md.value',
    'actor.system.attributes.pd.base',
    'actor.system.attributes.pd.min',
    'actor.system.attributes.pd.value',
    'actor.system.attributes.recoveries.automatic',
    'actor.system.attributes.recoveries.avg',
    'actor.system.attributes.recoveries.base',
    'actor.system.attributes.recoveries.dice',
    'actor.system.attributes.recoveries.formula',
    'actor.system.attributes.recoveries.max',
    'actor.system.attributes.recoveries.value',
    'actor.system.attributes.saves.bonus',
    'actor.system.attributes.saves.deathFails.max',
    'actor.system.attributes.saves.deathFails.value',
    'actor.system.attributes.saves.disengageBonus',
    'actor.system.attributes.saves.lastGaspFails.max',
    'actor.system.attributes.saves.lastGaspFails.value',
    'actor.system.attributes.standardBonuses.value',
    'actor.system.attributes.weapon.jab.dice',
    'actor.system.attributes.weapon.kick.dice',
    'actor.system.attributes.weapon.melee.dice',
    'actor.system.attributes.weapon.punch.dice',
    'actor.system.attributes.weapon.ranged.dice',
    'actor.system.backgrounds.bg1.bonus.value',
    'actor.system.backgrounds.bg1.isActive.value',
    'actor.system.backgrounds.bg1.name.value',
    'actor.system.backgrounds.bg2.bonus.value',
    'actor.system.backgrounds.bg2.isActive.value',
    'actor.system.backgrounds.bg2.name.value',
    'actor.system.backgrounds.bg3.bonus.value',
    'actor.system.backgrounds.bg3.isActive.value',
    'actor.system.backgrounds.bg3.name.value',
    'actor.system.backgrounds.bg4.bonus.value',
    'actor.system.backgrounds.bg4.isActive.value',
    'actor.system.backgrounds.bg4.name.value',
    'actor.system.backgrounds.bg5.bonus.value',
    'actor.system.backgrounds.bg5.isActive.value',
    'actor.system.backgrounds.bg5.name.value',
    'actor.system.backgrounds.bg6.bonus.value',
    'actor.system.backgrounds.bg6.isActive.value',
    'actor.system.backgrounds.bg6.name.value',
    'actor.system.backgrounds.bg7.bonus.value',
    'actor.system.backgrounds.bg7.isActive.value',
    'actor.system.backgrounds.bg7.name.value',
    'actor.system.backgrounds.bg8.bonus.value',
    'actor.system.backgrounds.bg8.isActive.value',
    'actor.system.backgrounds.bg8.name.value',
    'actor.system.coins.copper.value',
    'actor.system.coins.gold.value',
    'actor.system.coins.platinum.value',
    'actor.system.coins.silver.value',
    'actor.system.details.class.value',
    'actor.system.details.level.max',
    'actor.system.details.level.min',
    'actor.system.details.level.value',
    'actor.system.details.out.value',
    'actor.system.details.race.value',
    'actor.system.icons.i1.bonus.value',
    'actor.system.icons.i1.isActive.value',
    'actor.system.icons.i1.name.value',
    'actor.system.icons.i1.relationship.value',
    'actor.system.icons.i2.bonus.value',
    'actor.system.icons.i2.isActive.value',
    'actor.system.icons.i2.name.value',
    'actor.system.icons.i2.relationship.value',
    'actor.system.icons.i3.bonus.value',
    'actor.system.icons.i3.isActive.value',
    'actor.system.icons.i3.name.value',
    'actor.system.icons.i3.relationship.value',
    'actor.system.icons.i4.bonus.value',
    'actor.system.icons.i4.isActive.value',
    'actor.system.icons.i4.name.value',
    'actor.system.icons.i4.relationship.value',
    'actor.system.icons.i5.bonus.value',
    'actor.system.icons.i5.isActive.value',
    'actor.system.icons.i5.name.value',
    'actor.system.icons.i5.relationship.value',
    'actor.system.incrementals.abilMultiplier',
    'actor.system.incrementals.abilityScoreBonus',
    'actor.system.incrementals.extraMagicItem',
    'actor.system.incrementals.feat',
    'actor.system.incrementals.hp',
    'actor.system.incrementals.iconRelationshipPoint',
    'actor.system.incrementals.powerSpell1',
    'actor.system.incrementals.powerSpell2',
    'actor.system.incrementals.powerSpell3',
    'actor.system.incrementals.powerSpell4',
    'actor.system.incrementals.recovery',
    'actor.system.incrementals.skillInitiative',
    'actor.system.incrementals.skills',
    'actor.system.incrementals.talent',
    'actor.system.resources.perCombat.commandsPoints.current',
    'actor.system.resources.perCombat.commandsPoints.enabled',
    'actor.system.resources.perCombat.focus.current',
    'actor.system.resources.perCombat.focus.enabled',
    'actor.system.resources.perCombat.momentum.current',
    'actor.system.resources.perCombat.momentum.enabled',
    'actor.system.resources.perCombat.rhythm.current',
    'actor.system.resources.perCombat.rhythm.default',
    'actor.system.resources.perCombat.rhythm.enabled',
    'actor.system.resources.perCombat.rhythm.secondEdition',
    'actor.system.resources.spendable.custom1.current',
    'actor.system.resources.spendable.custom1.enabled',
    'actor.system.resources.spendable.custom1.label',
    'actor.system.resources.spendable.custom1.max',
    'actor.system.resources.spendable.custom1.rest',
    'actor.system.resources.spendable.custom2.current',
    'actor.system.resources.spendable.custom2.enabled',
    'actor.system.resources.spendable.custom2.label',
    'actor.system.resources.spendable.custom2.max',
    'actor.system.resources.spendable.custom2.rest',
    'actor.system.resources.spendable.custom3.current',
    'actor.system.resources.spendable.custom3.enabled',
    'actor.system.resources.spendable.custom3.label',
    'actor.system.resources.spendable.custom3.max',
    'actor.system.resources.spendable.custom3.rest',
    'actor.system.resources.spendable.custom4.current',
    'actor.system.resources.spendable.custom4.enabled',
    'actor.system.resources.spendable.custom4.label',
    'actor.system.resources.spendable.custom4.max',
    'actor.system.resources.spendable.custom4.rest',
    'actor.system.resources.spendable.custom5.current',
    'actor.system.resources.spendable.custom5.enabled',
    'actor.system.resources.spendable.custom5.label',
    'actor.system.resources.spendable.custom5.max',
    'actor.system.resources.spendable.custom5.rest',
    'actor.system.resources.spendable.custom6.current',
    'actor.system.resources.spendable.custom6.enabled',
    'actor.system.resources.spendable.custom6.label',
    'actor.system.resources.spendable.custom6.max',
    'actor.system.resources.spendable.custom6.rest',
    'actor.system.resources.spendable.custom7.current',
    'actor.system.resources.spendable.custom7.enabled',
    'actor.system.resources.spendable.custom7.label',
    'actor.system.resources.spendable.custom7.max',
    'actor.system.resources.spendable.custom7.rest',
    'actor.system.resources.spendable.custom8.current',
    'actor.system.resources.spendable.custom8.enabled',
    'actor.system.resources.spendable.custom8.label',
    'actor.system.resources.spendable.custom8.max',
    'actor.system.resources.spendable.custom8.rest',
    'actor.system.resources.spendable.custom9.current',
    'actor.system.resources.spendable.custom9.enabled',
    'actor.system.resources.spendable.custom9.label',
    'actor.system.resources.spendable.custom9.max',
    'actor.system.resources.spendable.custom9.rest',
    'actor.system.resources.spendable.ki.current',
    'actor.system.resources.spendable.ki.enabled',
    'actor.system.resources.spendable.ki.max',
    'actor.system.tier',
    'actor.system.tierMult',
    'item.name',
    'item.system.attributes.ac.bonus',
    'item.system.attributes.attack.arcane.bonus',
    'item.system.attributes.attack.divine.bonus',
    'item.system.attributes.attack.melee.bonus',
    'item.system.attributes.attack.ranged.bonus',
    'item.system.attributes.chackra',
    'item.system.attributes.disengage.bonus',
    'item.system.attributes.hp.bonus',
    'item.system.attributes.md.bonus',
    'item.system.attributes.pd.bonus',
    'item.system.attributes.recoveries.bonus',
    'item.system.attributes.save.bonus',
    'item.system.attributes.save.threshold',
    'item.system.isActive',
    'item.system.maxQuantity.value',
    'item.system.powerUsage.value',
    'item.system.quantity.value',
    'item.system.recharge.value',
    'item.system.rechargeAttempts.value',
    'token.disposition',
    'token.elevation',
    'token.name',
    'token.rotation',
    'token.sight.angle',
    'token.sight.attenuation',
    'token.sight.brightness',
    'token.sight.color',
    'token.sight.contrast',
    'token.sight.enabled',
    'token.sight.range',
    'token.sight.saturation',
    'token.sight.visionMode'
]

export const DERIVED_PROPERTIES = [
]
