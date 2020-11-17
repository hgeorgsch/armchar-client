import { Trait, TraitList } from './trait' ;

export class CharacterAdvancement {

    season: string ;
    year: number ;
    raw: any ;
    constructor(ob) {
      console.log( ob ) ;
      this.raw = ob ;
      this.season = "" ;
      this.season = 0 ;
    }
    get(k) : string {
      if ( k in this ) return this[k] 
      else return this.raw[k] ;
    }

}

export function parseCharacterAdvancements( l: any[] ) : CharacterAdvancement[] {
   return l.map( ob => new CharacterAdvancement(ob) ) ;
}
