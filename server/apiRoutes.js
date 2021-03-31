module.exports = function(router, database) {

  router.post('/reset', (req, res) => {
    database.resetDB()
      .then(()=>{
        res.send('reset db :)')
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      })
  })
  router.post('/regions', (req, res) => {
    database.addRegion(req.query)
      .then(region => {
        res.send(region)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/seasons', (req, res) => {
    database.addSeason(req.query)
      .then(season => {
        res.send(season)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/players', (req, res) => {
    database.addPlayer(req.body)
      .then(player => {
        res.send(player)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/types', (req, res) => {
    database.addType(req.body)
      .then(season => {
        res.send(season)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/tournaments', (req, res) => {
    database.addTournament(req.body)
      .then(tournament => {
        res.send(tournament)
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });
  router.post('/teams', (req, res) => {
    database.addTeam(req.body)
      .then(team => {
        res.send(team)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/games', (req, res) => {
    database.addGame(req.body)
      .then(game => {
        res.send(game)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/games_played', (req, res) => {
    database.addGamesPlayed(req.body)
      .then(gamePlayed => {
        res.send(gamePlayed)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/eliminationss', (req, res) => {
    database.addElimination(req.body)
      .then(elimination => {
        res.send(elimination)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });

  return router;
}