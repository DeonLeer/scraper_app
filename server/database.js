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
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);
DROP TABLE IF EXISTS seasons CASCADE;
CREATE TABLE seasons (
  id SERIAL PRIMARY KEY NOT NULL,
  season INTEGER NOT NULL
);
DROP TABLE IF EXISTS types CASCADE;
CREATE TABLE types (
  id SERIAL PRIMARY KEY NOT NULL,
  season_id INTEGER REFERENCES seasons(id) ON DELETE CASCADE,
  region_id INTEGER REFERENCES regions(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS tournaments CASCADE;
CREATE TABLE tournaments (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  type INTEGER REFERENCES types(id) ON DELETE CASCADE
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
  time TIME NOT NULL
);
DROP TABLE IF EXISTS duo_games CASCADE;
CREATE TABLE duo_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIME NOT NULL
);
DROP TABLE IF EXISTS trio_games CASCADE;
CREATE TABLE trio_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIME NOT NULL
);
DROP TABLE IF EXISTS squad_games CASCADE;
CREATE TABLE squad_games (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  tournament_id VARCHAR(255) REFERENCES tournaments(id) ON DELETE CASCADE,
  time TIME NOT NULL
);
DROP TABLE IF EXISTS solo_games_played CASCADE;
CREATE TABLE solo_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  solo_id VARCHAR(255) REFERENCES solos(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES solo_games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS duo_games_played CASCADE;
CREATE TABLE duo_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  duo_id VARCHAR(255) REFERENCES duos(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES duo_games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS trio_games_played CASCADE;
CREATE TABLE trio_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  trio_id VARCHAR(255) REFERENCES trios(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES trio_games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS squad_games_played CASCADE;
CREATE TABLE squad_games_played (
  id SERIAL PRIMARY KEY NOT NULL,
  squad_id VARCHAR(255) REFERENCES trios(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES squad_games(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS solo_eliminations CASCADE;
CREATE TABLE solo_eliminations (
  id SERIAL PRIMARY KEY NOT NULL,
  player_eliminated_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player_elimination_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES solo_games(id) ON DELETE CASCADE,
  time INTEGER
);
DROP TABLE IF EXISTS duo_eliminations CASCADE;
CREATE TABLE duo_eliminations (
  id SERIAL PRIMARY KEY NOT NULL,
  player_eliminated_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player_elimination_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES duo_games(id) ON DELETE CASCADE,
  time INTEGER
);
DROP TABLE IF EXISTS trio_eliminations CASCADE;
CREATE TABLE trio_eliminations (
  id SERIAL PRIMARY KEY NOT NULL,
  player_eliminated_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player_elimination_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES trio_games(id) ON DELETE CASCADE,
  time INTEGER
);
DROP TABLE IF EXISTS squad_eliminations CASCADE;
CREATE TABLE squad_eliminations (
  id SERIAL PRIMARY KEY NOT NULL,
  player_eliminated_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  player_elimination_id VARCHAR(255) REFERENCES players(id) ON DELETE CASCADE,
  game_id VARCHAR(255) REFERENCES squad_games(id) ON DELETE CASCADE,
  time INTEGER
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
    INSERT INTO regions(name)
    VALUES ($1)
    RETURNING *
  `, [region])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addRegion = addRegion
const addType = function(type) {
  return pool.query(`
    INSERT INTO types(id, season_id, region_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [type.id, type.season_id, type.region_id])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addType = addType
const addTournament = function(tournament) {
  return pool.query(`
    INSERT INTO tournaments(id, name, type)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [tournament.id, tournament.name, tournament.type])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addTournament = addTournament
const addTeam = function(team, size) {
  let insertString = `id, player1_id, player2_id`
  let valueString = `$1, $2, $3`
  let teamArray = [team.id, team.player1_id, team.player2_id]
  let mode
  if (size === 2) {
    mode === 'duo'
  } else if (size === 3) {
    mode === 'trio'
    insertString = insertString.concat(`, player3_id`)
    valueString = valueString.concat(`, $4`)
    teamArray.push(team.player3_id)
  } else if (size === 4) {
    mode === 'squad'
    insertString = insertString.concat(`, player3_id, player4_id`)
    valueString = valueString.concat(`, $4, $5`)
    teamArray.push(team.player3_id, team.player4_id)
  } else {
    return "error, team size must be 2, 3 or 4"
  }
  return pool.query(`
    INSERT INTO ${size}s(${insertString})
    VALUES (${valueString})
    RETURNING *
  `, teamArray )
    .then((data) => {
      return data.rows[0]
    })
}
exports.addTeam = addTeam
const addGame = function(game, mode) {
  return pool.query(`
    INSERT INTO ${mode}_games(id, tournament_id, time)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [game.id, game.tournament_id, game.time])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addGame = addGame
const addGamePlayed = function(game, mode, team) {
  return pool.query(`
    INSERT INTO ${mode}_games_played(${mode}_id, game_id)
    VALUES ($1, $2)
    RETURNING *
  `, [team.id, game.id])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addGamePlayed = addGamePlayed
const addElimination = function(game, mode, killer, victim, time) {
  return pool.query(`
    INSERT INTO ${mode}_eliminations(player_eliminated_id, player_elimination_id, game_id, time)
    VALUES($1, $2, $3, $4)
    RETURNING *
  `, [victim.id, killer.id, game.id, time])
    .then((data) => {
      return data.rows[0]
    })
}
exports.addElimination = addElimination