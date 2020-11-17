import { Trait, TraitList } from './trait' ;

export class CharacterAdvancement {

    season: string ;
    year: number ;
    raw: any ;
    constructor(ob) {
      console.log( ob ) ;
      this.season = ob["arm:atSeason"] ;
      this.year = ob["arm:inYear"] ;
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
