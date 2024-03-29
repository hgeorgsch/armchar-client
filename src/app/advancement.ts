import { Trait, parseTraits } from './trait' ;

export class CharacterAdvancement {

    type: string ;
    season: string ;
    description: string ;
    year: number ;
    xp?: number ;
    spentxp?: number ;
    traits?: Trait[] ;
    raw: any ;
    constructor(ob,dict?) {
      this.season = ob["arm:atSeason"] ;
      this.year = ob["arm:inYear"] ;
      this.type = ob["arm:hasAdvancementTypeString"] || "" ;
      this.description = ob["arm:hasAdvancementDescription"] || "" ;
      if ( "arm:awardsXP" in ob ) 
         this.xp = ob["arm:awardsXP"] ;
      if ( "arm:hasSpentXP" in ob ) 
         this.spentxp = ob["arm:hasSpentXP"] ;

      let tl = ob["arm:advanceTrait"] ;
      if ( ! ( "map" in tl ) ) tl = [ tl ] ;
      if ( typeof(dict) !== "undefined" ) {
         tl = tl.map( x => dict[x["@id"]] ) ;
      }

      this.traits = parseTraits( tl ) ;
      this.raw = ob ;
    }
    get(k) : string {
      if ( k in this ) return this[k] 
      else return this.raw[k] ;
    }

}

function timerank( x: any ) {
  var seasonval = { "Winter" : 1, "Spring" : 2, "Summer" : 3, "Autumn" : 4 } ; 
  var r = 0 ;
  if ( "year" in x ) r += x["year"]*10 ;
  if ( "season" in x ) r += seasonval[x["season"]] ;
  return r ;
}

function compare( x : CharacterAdvancement, y : CharacterAdvancement ) {
   if ( timerank( x ) < timerank( y ) ) { return -1 }
   else if ( timerank( x ) > timerank( y ) ) { return +1 }
   else return 0 ;
}

export function parseCharacterAdvancements( l: any[], dict: any ) : CharacterAdvancement[] {
   if ( typeof(l) === "undefined" ) return [] ;
   var list = l.map( ob => new CharacterAdvancement(ob,dict) ) ;
   list.sort( compare ) ;
   return list ;
}
export function parseCharacterAdvancementList( l: any ) : CharacterAdvancement[] {
   if ( typeof(l) === "undefined" ) return [] ;
   if ( "@list" in l ) l = l["@list"] ;
   var r = l.map( ob => new CharacterAdvancement(ob) ) ;
   return r ;
}
