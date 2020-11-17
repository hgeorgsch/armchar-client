

export class CharacteristicList {

   charlist : Characteristic[] ;

   constructor ( r: Characteristic[] ) {
       r.sort( (x,y) => { if ( x.order < y.order ) return -1 ; 
          if ( x.order > y.order ) return 1 ; 
	  return 0 ; }
       ) ;
       this.charlist = r ;
   }
   
}

export class Characteristic {

    order: number ;
    label: string ;
    spec: string ;
    score: number ;
}

function parseCharacteristic( ob ) : Characteristic {
   return { order: ob["arm:hasOrder"] || 0,
            label: ob["rdfs:label"],
            spec: ob["arm:hasSpecialisation"] || "",
            score: ob["arm:hasScore"] || 0
   } as Characteristic ;
}
export function parseCharList( l: any[] ) : CharacteristicList {
   if ( typeof(l) === "undefined" ) return undefined ;
   return new CharacteristicList( l.map( parseCharacteristic ) ) ;
}
