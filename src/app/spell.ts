import { Trait, TraitList } from './trait' ;

export class Spell {

    spellName: string ;
    raw: any ;
    range: string ;
    duration: string ;
    target: string ;
    technique: string ;
    form: string ;
    level: number ;
    constructor(ob) {
      console.log( ob ) ;
      this.spellName = ob["rdfs:label"] ;
      this.raw = ob ;
      this.range = ob["arm:hasRangeString"] || "";
      this.duration = ob["arm:hasDurationString"] || "";
      this.target = ob["arm:hasTargetString"] || "";
      this.technique = ob["arm:hasTechniqueString"] || "";
      this.form = ob["arm:hasFormString"] || "";
      this.level = ob["arm:hasLevel"] || 0;
    }
    getSignature() : string {
      return this.technique.substring(0,2) 
           + this.form.substring(0,2) + this.level ;
    }

}

export function parseSpells( l: any[] ) : Spell[] {
   return l.map( ob => new Spell(ob) ) ;
}
