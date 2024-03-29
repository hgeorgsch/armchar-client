

export class TraitList {

   private traitlist : Trait[] ;

   constructor ( r: Trait[] ) {
       this.traitlist = r ;
       for ( let trait of r ) {
         this[trait.label] = trait ;
       }
       console.log( "TraitList", this ) ;
   }
   public get( k: string ) {
     if ( k in this ) {
        return this[k] ;
     } else {
        return null ;
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
      this.label = ob["arm:hasLabel"] ;
      this.score = ob["arm:hasScore"] || 0 ;
      if ( typeof(this.score) !== "number" ) {
         this.score = this.score["@value"]  ;
      }
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
      console.log("effect:", e) ;
      if ( typeof(e) === "string" ) return e ;
      if ( ! e ) return "no effects" ;
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
   console.log( l ) ;
   if ( typeof(l) === "undefined" ) return undefined ;
   if ( !l ) return undefined ;
   if ( "@id" in l ) l = [ l ] ;
   return new TraitList( l.map( ob => new Trait(ob) ) ) ;
}
export function parseTraits( l: any[] ) : Trait[] {
   if ( ! l ) return [] ;
   if ( "@id" in l ) l = [ l ] ;
   return ( l.map( ob => new Trait(ob) ) ) ;
}
