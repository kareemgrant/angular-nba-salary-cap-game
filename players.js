angular.module('players', []).
  factory('playerList', function(){
    return {
      getAllPlayers: function(){
         return [
          {
            name: 'Kobe Bryant',
            team: 'Lakers',
            salary:  30453805
          },
          {
            name: 'Dirk Nowitzki',
            team: 'Mavericks',
            salary:  22721381
          },
          {
            name: 'Amare Stoudemire',
            team: 'Knicks',
            salary:  21679893
          },
          {
            name: 'Joe Johnson',
            team: 'Nets',
            salary:  21466718
          },
          {
            name: 'Carmelo Anthony',
            team: 'Knicks',
            salary:  21388953
          }
        ];
      }
    };
  });
