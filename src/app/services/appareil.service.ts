export class AppareilService
{
    appareils =[
        {id:1, name:'Machine à laver', status :'éteint'},
        {id:2, name:'Frigo', status :'allumé'},
        {id:3, name:'Ordinateur', status :'allumé'}
      ];

      getAppareilById(id:number)
      {
          const appareil =  this.appareils.find(
              (s) =>{
                  return s.id ===id
                }
          );
          return appareil;
      }

      switchOnAll()
      {
          for(let a of this.appareils)
          {
              a.status ='allumé';
          }
      }
      switchOffAll()
      {
          for(let a of this.appareils)
          {
              a.status ='éteint';
          }
      }

      switchOnOne(indexAppareil: number)
      {
            this.appareils[indexAppareil].status ='allumé';
      }
      switchOffOne(indexAppareil: number)
      {
            this.appareils[indexAppareil].status ='éteint';
      }

}