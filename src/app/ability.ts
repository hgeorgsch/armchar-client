

export class AbilityList {

   ablist : Ability[] ;

   constructor ( r: Ability[] ) {
       r.sort( (x,y) => { if ( x.label < y.label ) return -1 ; 
          if ( x.label > y.label ) return 1 ; 
	  return 0 ; }
       ) ;
       this.ablist = r ;
   }
   
}

export class Ability {

    order: number ;
    label: string ;
    spec: string ;
    score: number ;
    xp: number ;
}

function parseAbility( ob ) : Ability {
   return { order: ob["arm:hasOrder"] || 0,
            label: ob["rdfs:label"],
            spec: ob["arm:hasSpeciality"] || "",
            score: ob["arm:hasScore"] || 0,
            xp: ob["arm:hasXP"] || 0
   } as Ability ;
}
export function parseAbilityList( l: any[] ) : AbilityList {
   return new AbilityList( l.map( parseAbility ) ) ;
}
