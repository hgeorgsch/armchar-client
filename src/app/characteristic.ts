

export class CharacteristicList {

   charlist : Characteristic[] ;

   constructor ( r: Characteristic[] ) {
       r.sort( (x,y) => x.order < y.order ) ;
       this.charlist = r ;
   }
   
}

export class Characteristic {

    order: int ;
    label: string ;
    spec: string ;
    score: int ;
}

parseCharacteristic( ob: any ) : Characteristic {
   return { order: ob["arm:hasOrder"] || 0,
            label: ob["rdfs:label"],
            spec: ob["arm:hasSpecialisation"] || "",
            score: ob["arm:hasScore"] || 0
   } as Characteristic ;
}
export function parseCharList( l: any[] ) : Characteristic {
   return l.map( parseCharacteristic ) ;
}
