import { Trait, parseTraits } from './trait' ;

export class CharacterAdvancement {

    type: string ;
    season: string ;
    year: number ;
    xp?: number ;
    traits?: Trait[] ;
    raw: any ;
    constructor(ob) {
      console.log( ob ) ;
      this.season = ob["arm:atSeason"] ;
      this.year = ob["arm:inYear"] ;
      this.type = ob["arm:hasAdvancementTypeString"] || "" ;
      if ( "arm:awardsXP" in ob ) 
         this.xp = ob["arm:awardsXP"] ;
      this.traits = parseTraits( ob["arm:advanceTrait"] ) ;
      this.raw = ob ;
    }
    get(k) : string {
      if ( k in this ) return this[k] 
      else return this.raw[k] ;
    }

}

export function parseCharacterAdvancements( l: any[] ) : CharacterAdvancement[] {
   return l.map( ob => new CharacterAdvancement(ob) ) ;
}