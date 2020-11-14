

export class TraitList {

   private traitlist : Trait[] ;

   constructor ( r: Trait[] ) {
       this.traitlist = r ;
       for ( let trait of r ) {
         this[trait.label] = trait ;
       }
   }
   
}

export class Trait {

    order: number ;
    label: string ;
    score: number ;
    xp: number ;
    raw?: any ;

   get(k:string) {
      if ( k in this ) 
         return this[k] ;
      if ( "arm:" + k in this.raw ) 
         return this.raw["arm:"+k] ;
      return undefined ;
   }
}

function parseTrait( ob ) : Trait {
   return { order: ob["arm:hasOrder"] || 0,
            label: ob["rdfs:label"],
            score: ob["arm:hasScore"] || 0,
            xp: ob["arm:hasXP"] || 0,
            raw: ob
   } as Trait ;
}
export function parseTraitList( l: any[] ) : TraitList {
   return new TraitList( l.map( parseTrait ) ) ;
}
