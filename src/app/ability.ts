import { Trait, TraitList } from './trait' ;

export class AbilityList {

   private ablist : Ability[] ;

   constructor ( r: Ability[] ) {
       this.ablist = r ;
       this.ablist.sort( (x,y) => { if ( x.label < y.label ) return -1 ; 
          if ( x.label > y.label ) return 1 ; 
	  return 0 ; }
       ) ;
   }

   get() : Ability[] { return this.ablist ; }
   
}

export class Ability extends Trait {

    order: number ;
    label: string ;
    spec: string ;
    score: number ;
    xp: number ;
    desc: string ;
    desc2: string ;
}

function parseAbility( ob ) : Ability {
   return { order: ob["arm:hasOrder"] || 0,
            label: ob["arm:hasLabel"],
            spec: ob["arm:hasSpeciality"] || "",
            desc: ob["arm:hasDescription"] || "",
            score: ob["arm:hasScore"] || 0,
            xp: ob["arm:hasXP"] || 0
   } as Ability ;
}
export function parseAbilityList( l: any[] ) : AbilityList {
   if ( typeof(l) === "undefined" ) return undefined ;
   if ( ! l ) return undefined ;
   return new AbilityList( l.map( parseAbility ) ) ;
}
