import { CharacteristicList, parseCharList } from './characteristic';
import { AbilityList, parseAbilityList } from './ability';
import { Trait, TraitList, parseTraitList, parseTraits } from './trait';
import { Spell, parseSpells } from './spell';
import { parseCharacterAdvancements, CharacterAdvancement } from './advancement';

export class Charsheet { id: string;
  name: string;
  age: number ;
  raw?: any ;
  charlist?: CharacteristicList ;
  ablist?: AbilityList ;
  arts?: TraitList ;
  spells?: Spell[] ;
  othertraits?: TraitList ;
  ptraits?: Trait[] ;
  vis?: any[] ;
  equipment?: any[] ;
  weapons?: any[] ;
  constructor(id:string,n:string) {
    this.id = id ;
    this.name = n ;
    // console.log( "New charsheet", id, n ) ;
  }
  get(k:string) {
    if ( k in this ) 
       return this[k] ;
    if ( "arm:" + k in this.raw ) 
       return this.raw["arm:"+k] ;
  }
}

export function  charsheetParse( j: any ): Charsheet {
  if ( typeof(j) === "undefined" ) return undefined ;
  var n = j["@id"] ;
  var cs = new Charsheet( j["@id"], j["arm:hasName"] ) ;
  cs.raw = j ;
  cs.charlist = parseCharList( j["arm:hasCharacteristic"] ) ;
  cs.ablist = parseAbilityList( j["arm:hasAbility"] ) ;
  // console.log( "arts",  j["arm:hasArt"] ) ;
  cs.arts = parseTraitList( j["arm:hasArt"] ) ;
  cs.spells = parseSpells( j["arm:hasSpell"] ) ;
  cs.ptraits = parseTraits( j["arm:hasPersonalityTrait"] ) ;
  cs.othertraits = parseTraitList( j["arm:hasOtherTrait"] ) ;
  cs.vis = parseTraits( j["arm:hasVis"] ) ;
  cs.equipment = parseTraits( j["arm:hasEquipment"] ) ;
  cs.weapons = parseTraits( j["arm:hasWeapon"] ) ;
  cs.age = j["arm:hasAge"] ;
  // console.log( "charsheetParse", cs.age, cs ) ;
  if ( cs.age && ( typeof(cs.age) === "object" ) && ( "@value" in cs.age ) )
     cs.age = cs.age["@value"] ;
  // console.log( "charsheetParse", cs ) ;
  return cs ;
}

export class Character { 
  id: string;
  name: string;
  adv: CharacterAdvancement[] ;
  raw?: any ;

  constructor(id:string,n:string) {
    this.id = id ;
    this.name = n ;
    this.adv = [] ;
  }
  get(k:string) {
    if ( k in this ) 
       return this[k] ;
    if ( "arm:" + k in this.raw ) 
       return this.raw["arm:"+k] ;
  }
}
export function  characterParse( j: any ): Character {
  if ( typeof(j) === "undefined" ) return undefined ;
  var cs = new Character( j["@id"], j["arm:hasName"] ) ;
  cs.raw = j ;
  var advlist = j["arm:hasAdvancementList"] ;
  // console.log( advlist ) ;
  cs.adv = parseCharacterAdvancements( advlist["@list"], j["@dict"] ) ;
  return cs ;
}
