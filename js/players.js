'use strict';

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
            },
            {
              name: 'Dwight Howard',
              team: 'Rockets',
              salary:  20513178
            },
            {
              name: 'Pau Gasol',
              team: 'Lakers',
              salary:  19285850
            },
            {
              name: 'Chris Bosh',
              team: 'Heat',
              salary:  19067500
            },
            {
              name: 'Lebron James',
              team: 'Heat',
              salary:  19067500
            },

            {
              name: 'Dwayne Wade',
              team: 'Heat',
              salary:  18673000
            },
            {
              name: 'Chris Paul',
              team: 'Clippers',
              salary:  18668431
            },
            {
              name: 'Deron Williams',
              team: 'Nets',
              salary:  18466130
            },
            {
              name: 'Zach Randolph',
              team: 'Grizzilies',
              salary:  18238333
            },
            {
              name: 'Rudy Gay',
              team: 'Kings',
              salary:  17888932
            },
            {
              name: 'Kevin Durant',
              team: 'Thunder',
              salary:  17832627
            }
          ];
        }
      };
    });
