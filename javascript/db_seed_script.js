Object.keys(tournaments).map((tournament) => {
  axios.post('http://localhost:3000/api/tournaments', {
    tournament: {
      id: tournament,
      name: tournament,
      region: tournaments[tournament].region,
      season: tournaments[tournament].season
    }
  })
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})

Object.keys(teams).map((team) => {
  let teamObject = {id: team, size: teams[team].length}
  teams[team].map((player, index) => {
    teamObject[`player${index+1}_id`] = player
  })
  axios.post('http://localhost:3000/api/teams', teamObject)
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})

Object.keys(games).map((game) => {
  console.log(games[game])
  axios.post('http://localhost:3000/api/games', {game: {
    id: game,
    tournament_id: games[game].tournamentID,
    time: games[game].time,
    duration: games[game].duration,
    winners: games[game].winners.join(),
    mode: game.mode,

  }})
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})


Object.keys(players).map((player) => {
  axios.post('http://localhost:3000/api/players', {player: {id: player, name: players[player].name}})
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})


gamesplayed.map((game) => {
  axios.post('http://localhost:3000/api/games', {game})
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})

elims.map((elim) => {
  axios.post('http://localhost:3000/api/eliminations', {elim})
  .then(function(response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
})
