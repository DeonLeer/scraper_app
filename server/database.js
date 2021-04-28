const { Pool } = require('pg')
const pool = new Pool({
  user: 'deon',
  password: '123',
  host: 'localhost',
  database: 'scraper_app'
})
const resetDB = function() {
  const resetString = `DROP TABLE IF EXISTS players CASCADE;
CREATE TABLE players (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);
DROP TABLE IF EXISTS regions CASCADE;
CREATE TABLE regions (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);
DROP TABLE IF EXISTS seasons CASCADE;
CREATE TABLE seasons (
  id INTEGER PRIMARY KEY NOT NULL,
  season INTEGER NOT NULL
);
DROP TABLE IF EXISTS tournaments CASCADE;
CREATE TABLE tournaments (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  region VARCHAR(255) REFERENCES regions(id) ON DELETE CASCADE,
  season INTEGER REFERENCES seasons(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS solos CASCADE;
CREATE TABLE solos (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  player1_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS duos CASCADE;
CREATE TABLE duos (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  player1_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player2_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS trios CASCADE;
CREATE TABLE trios (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  player1_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player2_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player3_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE 
);
DROP TABLE IF EXISTS squads CASCADE;
CREATE TABLE squads (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  player1_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player2_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player3_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player4_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE  
);
DROP TABLE IF EXISTS solo_games CASCADE;
CREATE TABLE solo_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIMESTAMP NOT NULL,
  duration INTEGER,
  winners VARCHAR(255),
  zones VARCHAR(255)
);
DROP TABLE IF EXISTS duo_games CASCADE;
CREATE TABLE duo_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIMESTAMP NOT NULL,
  duration INTEGER,
  winners VARCHAR(255),
  zones VARCHAR(255)
);
DROP TABLE IF EXISTS trio_games CASCADE;
CREATE TABLE trio_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIMESTAMP NOT NULL,
  duration INTEGER,
  winners VARCHAR(255),
  zones VARCHAR(255)
);
DROP TABLE IF EXISTS squad_games CASCADE;
CREATE TABLE squad_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIMESTAMP NOT NULL,
  duration INTEGER,
  winners VARCHAR(255),
  zones VARCHAR(255)
);
DROP TABLE IF EXISTS solo_games_played CASCADE;
CREATE TABLE solo_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  game_id VARCHAR(255) REFERENCES solo_games(id) ON DELETE CASCADE,
  solo_id VARCHAR(255) REFERENCES solos(id) ON DELETE CASCADE,
  placement INTEGER,
  time_alive INTEGER,
  elims INTEGER
);
DROP TABLE IF EXISTS duo_games_played CASCADE;
CREATE TABLE duo_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  duo_id VARCHAR(255) REFERENCES duos(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES duo_games(id) ON DELETE CASCADE,
  placement INTEGER,
  time_alive INTEGER,
  elims INTEGER
);
DROP TABLE IF EXISTS trio_games_played CASCADE;
CREATE TABLE trio_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  trio_id VARCHAR(255) REFERENCES trios(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES trio_games(id) ON DELETE CASCADE,
  placement INTEGER,
  time_alive INTEGER,
  elims INTEGER
);
DROP TABLE IF EXISTS squad_games_played CASCADE;
CREATE TABLE squad_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  squad_id VARCHAR(255) REFERENCES trios(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES squad_games(id) ON DELETE CASCADE,
  placement INTEGER,
  time_alive INTEGER,
  elims INTEGER
);
DROP TABLE IF EXISTS solo_eliminations_no_feed CASCADE;
CREATE TABLE solo_eliminations_no_feed (
  id SERIAL PRIMARY KEY NOT NULL,
  player_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES solo_games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS solo_eliminations CASCADE;
CREATE TABLE solo_eliminations (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  match_id VARCHAR(255) REFERENCES solo_games(id) ON DELETE CASCADE,
  time INTEGER,
  victimId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  victimX DECIMAL(15, 4),
  victimY DECIMAL(15, 4),
  victimZ DECIMAL(15, 4),
  instigatorId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  instigatorX DECIMAL(15, 4),
  instigatorY DECIMAL(15, 4),
  instigatorZ DECIMAL(15, 4),
  deathCause INTEGER,
  dbno BOOLEAN
);
DROP TABLE IF EXISTS duo_eliminations CASCADE;
CREATE TABLE duo_eliminations (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  match_id VARCHAR(255) REFERENCES duo_games(id) ON DELETE CASCADE,
  time INTEGER,
  victimId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  victimX DECIMAL(15, 4),
  victimY DECIMAL(15, 4),
  victimZ DECIMAL(15, 4),
  instigatorId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  instigatorX DECIMAL(15, 4),
  instigatorY DECIMAL(15, 4),
  instigatorZ DECIMAL(15, 4),
  deathCause INTEGER,
  dbno BOOLEAN
);
DROP TABLE IF EXISTS trio_eliminations CASCADE;
CREATE TABLE trio_eliminations (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  match_id VARCHAR(255) REFERENCES trio_games(id) ON DELETE CASCADE,
  time INTEGER,
  victimId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  victimX DECIMAL(15, 4),
  victimY DECIMAL(15, 4),
  victimZ DECIMAL(15, 4),
  instigatorId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  instigatorX DECIMAL(15, 4),
  instigatorY DECIMAL(15, 4),
  instigatorZ DECIMAL(15, 4),
  deathCause INTEGER,
  dbno BOOLEAN
);
DROP TABLE IF EXISTS squad_eliminations CASCADE;
CREATE TABLE squad_eliminations (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  match_id VARCHAR(255) REFERENCES squad_games(id) ON DELETE CASCADE,
  time INTEGER,
  victimId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  victimX DECIMAL(15, 4),
  victimY DECIMAL(15, 4),
  victimZ DECIMAL(15, 4),
  instigatorId VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  instigatorX DECIMAL(15, 4),
  instigatorY DECIMAL(15, 4),
  instigatorZ DECIMAL(15, 4),
  deathCause INTEGER,
  dbno BOOLEAN
  );`
  pool.query(resetString)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log('query error', err.stack))
}
exports.resetDB = resetDB
const addPlayer = function(player) {
  return pool.query(`
    INSERT INTO players(id, name)
    VALUES ($1, $2)
    RETURNING *
  `, [player.id, player.name])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addPlayer = addPlayer
const addSeason = function(season) {
  return pool.query(`
    INSERT INTO seasons(id, season)
    VALUES ($1, $2)
    RETURNING *
  `, [season, season])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addSeason = addSeason
const addRegion = function(region) {

  return pool.query(`
    INSERT INTO regions(id, name)
    VALUES ($1, $2)
    RETURNING *
  `, [region, region])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addRegion = addRegion
const addTournament = function(tournament) {
  return pool.query(`
    INSERT INTO tournaments(id, name, region, season)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [tournament.id, tournament.name, tournament.region, tournament.season])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addTournament = addTournament
const addTeam = function(team) {
  let insertString = `id, player1_id`
  let valueString = `$1, $2`
  let teamArray = [team.id, team.player1_id]
  let mode
  if (team.size === 1) {
    mode = 'solo'
  } else if (team.size === 2) {
    mode = 'duo'
    insertString = insertString.concat(`, player2_id`)
    valueString = valueString.concat(`, $3`)
    teamArray.push(team.player2_id)
  } else if (team.size === 3) {
    mode = 'trio'
    insertString = insertString.concat(`, player2_id, player3_id`)
    valueString = valueString.concat(`, $3, $4`)
    teamArray.push(team.player2_id, team.player3_id)
  } else if (team.size === 4) {
    mode = 'squad'
    insertString = insertString.concat(`, player2_id, player3_id, player4_id`)
    valueString = valueString.concat(`, $3, $4, $5`)
    teamArray.push(team.player2_id, team.player3_id, team.player4_id)
  } else {
    return "error, team size must be 1, 2, 3 or 4"
  }
  console.log(insertString, '\n', valueString, '\n', teamArray )
  return pool.query(`
    INSERT INTO ${mode}s(${insertString})
    VALUES (${valueString})
    RETURNING *
  `, teamArray )
    .then((data) => {
      return data.rows[0]
    })
}
exports.addTeam = addTeam
const addGame = function(game) {
  return pool.query(`
    INSERT INTO ${game.mode}_games(id, tournament_id, time, duration, winners)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [game.id, game.tournament_id, game.time, game.duration, game.winners])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addGame = addGame
const addGamePlayed = function(game) {
  return pool.query(`
    INSERT INTO ${game.mode}_games_played(${game.mode}_id, game_id, placement, time_alive, elims)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [game.team_id, game.game_id, game.placement, game.time_alive, game.elims])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addGamePlayed = addGamePlayed
const addElimination = function(elimination) {
  return pool.query(`
    INSERT INTO ${elimination.mode}_eliminations(id, match_id, time, victimId, victimX, victimY, victimZ, instigatorId, instigatorX, instigatorY, instigatorZ, deathCause, dbno)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *
  `, [elimination.id, elimination.matchId, elimination.time, elimination.victimId, elimination.victimX, elimination.victimY, elimination.victimZ, elimination.instigatorId, elimination.instigatorX, elimination.instigatorY, elimination.instigatorZ, elimination.deathCause, elimination.dbno])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addElimination = addElimination
const addEliminationNoFeed = function(elimination) {
  return pool.query(`
    INSERT INTO solo_eliminations_no_feed(game_id, player_id)
    VALUES($1, $2)
    RETURNING *
  `, [elimination.matchId, elimination.playerId])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addEliminationNoFeed = addEliminationNoFeed
const updateZone = function(game, mode, zones) {
  return pool.query(`
    UPDATE ${mode}_games SET zones = ${zones} WHERE id = ${game}
  `)
}
exports.updateZone = updateZone

const getPlayers = function() {
  return pool.query(`SELECT name, id FROM players;`)
}
exports.getPlayers = getPlayers

const getSoloElims = function(id) {
  return pool.query(`SELECT match_id, time, victimX, victimY, victimZ, victimID, instigatorX, instigatorY, instigatorZ, deathCause FROM solo_eliminations WHERE instigatorID = '${id}';`)}
exports.getSoloElims = getSoloElims

const getSoloElimsNoFeed = function(id) {
  return pool.query(`SELECT * FROM solo_eliminations_no_feed WHERE player_id = '${id}'`)}
exports.getSoloElimsNoFeed = getSoloElimsNoFeed

const getDuoElims = function(id) {
  return pool.query(`SELECT match_id, time, victimX, victimY, victimZ, victimID, instigatorX, instigatorY, instigatorZ, deathCause FROM duo_eliminations WHERE instigatorID = '${id}';`)}
exports.getDuoElims = getDuoElims

const getTrioElims = function(id) {
  return pool.query(`SELECT match_id, time, victimX, victimY, victimZ, victimID, instigatorX, instigatorY, instigatorZ, deathCause FROM trio_eliminations WHERE instigatorID = '${id}';`)}
exports.getTrioElims = getTrioElims

const getDuos = function(id) {
  return pool.query(`SELECT * FROM duos WHERE player1_id = '${id}' OR player2_id = '${id}';`)  }
exports.getDuos = getDuos

const getTrios = function(id) {
  return pool.query(`SELECT * FROM trios WHERE player1_id = '${id}' OR player2_id = '${id}' OR player3_id = '${id}';`)}
exports.getTrios = getTrios

const getSoloGamesPlayed = function(id) {
  return pool.query(`SELECT *, solo_games.tournament_id FROM solo_games_played JOIN solo_games ON solo_games_played.game_id = solo_games.id JOIN solos ON solo_id = solos.id JOIN players ON players.id = solos.player1_id WHERE players.id = '${id}';`)}
exports.getSoloGamesPlayed = getSoloGamesPlayed

const getDuoGamesPlayed = function(id) {
  return pool.query(`SELECT *, duo_games.tournament_id FROM duo_games_played JOIN duo_games ON duo_games_played.game_id = duo_games.id JOIN duos ON duo_id = duos.id JOIN players ON players.id = duos.player1_id OR players.id = duos.player2_id WHERE players.id = '${id}';`)}
exports.getDuoGamesPlayed = getDuoGamesPlayed

const getTrioGamesPlayed = function(id) {
  return pool.query(`SELECT *, trio_games.tournament_id FROM trio_games_played JOIN trio_games ON trio_games_played.game_id = trio_games.id JOIN trios ON trio_id = trios.id JOIN players ON players.id = trios.player1_id OR players.id = trios.player2_id OR players.id = trios.player3_id WHERE players.id = '${id}';`)}
exports.getTrioGamesPlayed = getTrioGamesPlayed

const getTournaments = function() {
  return pool.query('SELECT * FROM tournaments;')}
exports.getTournaments = getTournaments
