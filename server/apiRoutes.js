module.exports = function(router, database) {
  router.get('/reset', (req, res) => {
    database.resetDB()
  })
  router.post('/regions', (req, res) => {
    database.addRegion(req.body['name'])
      .then(region => {
        res.send(region)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/seasons', (req, res) => {
    // console.log("REQUEST OBJECT", req.body)
    database.addSeason(req.body['season'])
      .then(season => {
        res.send(season)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/players', (req, res) => {
    console.log(req.body)
    database.addPlayer({id: req.body.id, name: req.body.name})
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
  router.post('/eliminations', (req, res) => {
    database.addElimination(req.body)
      .then(elimination => {
        res.send(elimination)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/eliminationsnofeed', (req, res) => {
    database.addEliminationNoFeed(req.body)
      .then(elimination => {
        res.send(elimination)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/update_zone', (req, res) => {
    database.updateZone(req.body)
      .then(zone => {
        res.send(zone)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  return router;
}