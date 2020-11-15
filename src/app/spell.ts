import { Trait, TraitList } from './trait' ;

export class Spell {

    spellName: string ;
    raw: any ;
    constructor(ob) {
      console.log( ob ) ;
      this.spellName = ob["rdfs:label"] ;
      this.raw = ob ;
    }
    getSignature() : string {
      return "" ;
    }

}

export function parseSpells( l: any[] ) : Spell[] {
   return l.map( ob => new Spell(ob) ) ;
}
