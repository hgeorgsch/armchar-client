export class Charsheet {
  id: string;
  name: string;
  constructor(id:string,n:string) {
    this.id = id ;
    this.name = n ;
  }
}

function  computeCharsheet( j: any, n: string, t: string ): Charsheet {
  var cs = new Charsheet( 'armchar:${n}#${t}', n) ;
 
  return cs ;
}
