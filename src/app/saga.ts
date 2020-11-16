import { CharacteristicList, parseCharList } from './characteristic';
import { AbilityList, parseAbilityList } from './ability';
import { Trait, TraitList, parseTraitList } from './trait';
import { Spell, parseSpells } from './spell';

export class Saga { 
  id: string;
  title: string;
  description?: string ;
  raw?: any ;
  constructor(id:string,n:string) {
    this.id = id ;
    this.title = n ;
  }
  get(k:string) {
    if ( k in this ) 
       return this[k] ;
    if ( "arm:" + k in this.raw ) 
       return this.raw["arm:"+k] ;
  }
}

export function  sagaParse( j: any ): Saga {
  var n = j["@id"] ;
  var cs = new Saga( j["@id"], j["arm:hasTitle"] ) ;
  cs.description = j["rdfs:comment"] ;
  cs.raw = j ;
  return cs ;
}
