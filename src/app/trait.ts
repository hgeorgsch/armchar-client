

export class TraitList {

   private traitlist : Trait[] ;

   constructor ( r: Trait[] ) {
       this.traitlist = r ;
       for ( let trait of r ) {
         this[trait.raw["arm:hasID"]] = trait ;
       }
   }
   
}

export class Trait {

    order: number ;
    label: string ;
    score: number ;
    xp: number ;
    raw?: any ;

   constructor(ob) {
      this.order = ob["arm:hasOrder"] || 0 ;
      this.label = ob["rdfs:label"] ;
      this.score = ob["arm:hasScore"] || 0 ;
      this.xp = ob["arm:hasXP"] || 0 ;
      this.raw = ob ;
   }
   public get(k:string) {
      if ( k in this ) 
         return this[k] ;
      if ( "arm:" + k in this.raw ) 
         return this.raw["arm:"+k] ;
      return undefined ;
   }
   public getEffect() : string {
      var e = this.get("hasEffect") ;
      if ( typeof(e) === "string" ) return e ;
      if ( typeof(e) === "undefined" ) return "no effects" ;
      if ( e === [] ) return "no effects" ;
      var r = "" ;
      for ( let p of e ) {
         if ( r !== "" ) r += "; " ;
	 r += p ;
      }
      return r ;
      
   }
}

export function parseTraitList( l: any[] ) : TraitList {
   return new TraitList( l.map( ob => new Trait(ob) ) ) ;
}
