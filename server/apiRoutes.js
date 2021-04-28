module.exports = function(router, database) {
  router.get('/reset', (req, res) => {
    database.resetDB()
  })
  router.post('/regions', (req, res) => {
    database.addRegion(req.body['region'])
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
    database.addPlayer(req.body['player'])
      .then(player => {
        res.send(player)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/tournaments', (req, res) => {
    database.addTournament(req.body['tournament'])
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
    database.addGame(req.body['game'])
      .then(game => {
        res.send(game)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/games_played', (req, res) => {
    database.addGamePlayed(req.body['game'])
      .then(gamePlayed => {
        res.send(gamePlayed)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/eliminations', (req, res) => {
    database.addElimination(req.body['elim'])
      .then(elimination => {
        res.send(elimination)
      })
      .catch(e => {
        console.error(e)
        res.send(e)
      });
  });
  router.post('/eliminationsnofeed', (req, res) => {
    database.addEliminationNoFeed(req.body['elim'])
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
  router.get(`/getplayers`, (req, res) => {
    database.getPlayers()
    .then(players => {
      res.send(players)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/getsoloelims', (req, res) => {
    console.log(req.query)
    database.getSoloElims(req.query.id)
    .then(elims => {
      res.send(elims)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/getsoloelimsnofeed', (req, res) => {
    database.getSoloElims(req.query.id)
    .then(elims => {
      res.send(elims)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/getduoelims', (req, res) => {
    database.getDuoElims(req.query.id)
    .then(elims => {
      res.send(elims)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/gettrioelims', (req, res) => {
    database.getTrioElims(req.query.id)
    .then(elims => {
      res.send(elims)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/getduos', (req, res) => {
    database.getDuos(req.query.id)
    .then(duos => {
      res.send(duos)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/gettrios', (req, res) => {
    database.getTrios(req.query.id)
    .then(trios => {
      res.send(trios)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/getsologamesplayed', (req, res) => {
    database.getSoloGamesPlayed(req.query.id)
    .then(games => {
      res.send(games)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/getduogamesplayed', (req, res) => {
    database.getDuoGamesPlayed(req.query.id)
    .then(games => {
      res.send(games)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get('/gettriogamesplayed', (req, res) => {
    database.getTrioGamesPlayed(req.query.id)
    .then(games => {
      res.send(games)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  router.get(`/gettournaments`, (req, res) => {
    database.getTournaments()
    .then(tournaments => {
      res.send(tournaments)
    })
    .catch(e => {
      console.error(e)
      res.send(e)
    })
  })
  return router;
}
