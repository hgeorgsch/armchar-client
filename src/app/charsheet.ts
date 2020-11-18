import { CharacteristicList, parseCharList } from './characteristic';
import { AbilityList, parseAbilityList } from './ability';
import { Trait, TraitList, parseTraitList } from './trait';
import { Spell, parseSpells } from './spell';
import { parseCharacterAdvancements, CharacterAdvancement } from './advancement';

export class Charsheet { id: string;
  name: string;
  raw?: any ;
  charlist?: CharacteristicList ;
  ablist?: AbilityList ;
  arts?: TraitList ;
  spells?: Spell[] ;
  othertraits?: TraitList ;
  constructor(id:string,n:string) {
    this.id = id ;
    this.name = n ;
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
  cs.arts = parseTraitList( j["arm:hasArt"] ) ;
  cs.spells = parseSpells( j["arm:hasSpell"] ) ;
  cs.othertraits = parseTraitList( j["arm:hasOtherTrait"] ) ;
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
  cs.adv = parseCharacterAdvancements( j["arm:hasAdvancement"], j["@dict"] ) ;
  return cs ;
}
