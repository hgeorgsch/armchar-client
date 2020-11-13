
import { CharacteristicList, parseCharList } from './characteristic';
export class Charsheet { id: string;
  name: string;
  raw?: any ;
  charlist?: CharacteristicList ;
  constructor(id:string,n:string) {
    this.id = id ;
    this.name = n ;
  }
  get(k:string) {
    if ( k in this ) 
       return this[k] ;
    if ( "arm:" + k in this.raw ) 
       return this.raw["arm:"+k] ;
  }
}

export function  charsheetParse( j: any ): Charsheet {
  var n = j["@id"] ;
  var cs = new Charsheet( j["@id"], j["arm:hasName"] ) ;
  cs.raw = j ;
  cs.charlist = parseCharList( j["arm:hasCharacteristic"] ) ;
  return cs ;
}
