const team = {
  _players:[
    {
      firstName: 'Francis',
      lastName: 'Coffie',
      age: 11
    },
    {
      firstName: 'Emma',
      lastName: 'Sankah',
      age:13
    },
    {
      firstName: 'Kojoe',
      lastName: 'Nel',
      age: 12
    }
    ],
  _games:[
    {
      opponet: 'fighters',
      teamPoints: 72,
      opponetPoints: 71
    },
    {
      opponet: 'pandas',
      teamPoints: 69,
      opponetPoints: 84
    },
    {
      opponet: 'killers',
      teamPoints: 94,
      opponetPoints: 86
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
   addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponet, teamPoints, opponetPoints) {
    let game = {
      opponet: opponet,
      teamPoints: teamPoints,
      opponetPoints: opponetPoints
    }
    return this.games.push(game);
  },
};

team.addPlayer('Kuma', 'Sam', 28);
team.addPlayer('Kofi','Agyiman', 44);
team.addPlayer('Bob','Cobbinah', 76);

console.log(team.players);

team.addGame('The strongers', 95, 80);
team.addGame('Worriors', 99, 96);
team.addGame('Franco', 91, 87);

console.log(team.games);


