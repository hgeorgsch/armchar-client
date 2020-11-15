import { Trait, TraitList } from './trait' ;

export class Spell {

    spellName: string ;
    raw: any ;
    range: string ;
    duration: string ;
    target: string ;
    constructor(ob) {
      console.log( ob ) ;
      this.spellName = ob["rdfs:label"] ;
      this.raw = ob ;
      this.range = ob["arm:hasRangeString"] || "";
      this.duration = ob["arm:hasDurationString"] || "";
      this.target = ob["arm:hasTargetString"] || "";
    }
    getSignature() : string {
      return "" ;
    }

}

export function parseSpells( l: any[] ) : Spell[] {
   return l.map( ob => new Spell(ob) ) ;
}
