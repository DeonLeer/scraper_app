const axios = require('axios');
const fs = require('fs')
const urlStart = 'https://fortnitetracker.com/events/epicgames_'
const regions = ['NAE', 'EU', 'NAW', 'ASIA', 'BR', 'ME', 'OCE']
const seasons = [12, 13, 14, 15]
const dreamhackS13 = ['July', 'August']
const dreamhackS14 = ['September', 'October', 'November']
const dreamhackS15 = ['December', 'January']
const getURLs = function() {
  const urlArray = []
  for (let season of seasons) {
    switch(season){
      case 12:
        for (let region of regions) {
          urlArray.push(`${urlStart}S12_FNCS_Invitational_${region}_Week3`)
        }
        break;
      case 13:
        for (let region of regions) {
          if (region === "NAE" || region === "NAW" || region === "EU") {
            for (let dreamhack of dreamhackS13) {
              urlArray.push(`${urlStart}S13_Dreamhack_${dreamhack}_${region}_Finals`)
            }
          }
          if (region === "ME" || region === "OCE" || region === "ASIA") {
            for (let i = 1; i <= 4; i++) {
              urlArray.push(`${urlStart}S13_FNCS_${region}_Qualifier${i}_PC`)
            }
            for (let i = 1; i <= 2; i++) {
              urlArray.push(`${urlStart}S13_FNCS_${region}_Finals_PC?window=S13_FNCS_${region}_Finals_PC_Heat${i}`)
            }
          } else if (region === "NAW") {
            for (let i = 1; i <= 4; i++) {
              urlArray.push(`${urlStart}S13_FNCS_${region}_Finals_PC?window=S13_FNCS_${region}_Finals_PC_Heat${i}`)
            }
            for (let i = 2; i <= 4; i++) {
              urlArray.push(`${urlStart}S13_FNCS_${region}_Qualifier${i}_PC`)
            }
          } else {
            for (let i = 1; i <= 4; i++) {
              urlArray.push(`${urlStart}S13_FNCS_${region}_Finals_PC?window=S13_FNCS_${region}_Finals_PC_Heat${i}`)
              urlArray.push(`${urlStart}S13_FNCS_${region}_Qualifier${i}_PC`)
            }
          }

          urlArray.push(`${urlStart}S13_FNCS_${region}_Finals_PC`)
        }
        break;
      case 14:
        for (let region of regions) {
          if (region === "NAE" || region === "NAW" || region === "EU") {
            for (let dreamhack of dreamhackS14) {
              urlArray.push(`${urlStart}S14_Dreamhack_${dreamhack}_${region}_Finals`)
            }
          }
          for (let i = 1; i <= 3; i++) {
            urlArray.push(`${urlStart}S14_FNCS_Qualifier${i}_${region}_PC?window=S14_FNCS_Qualifier${i}_${region}_PC_Event4&sm=floating`)
          }
          if (region === "ME" || region === "OCE" || region === "ASIA") {
            for (let i = 1; i <= 2; i++) {
              urlArray.push(`${urlStart}S14_FNCS_Finals_${region}_PC_Heat${i}?window=S14_FNCS_Finals_${region}_PC_Heat${i}_Event1&sm=floating`)
            }
          } else {
            for (let i = 1; i <= 4; i++) {
              urlArray.push(`${urlStart}S14_FNCS_Finals_${region}_PC_Heat${i}?window=S14_FNCS_Finals_${region}_PC_Heat${i}_Event1&sm=floating`)
            }
          }
          urlArray.push(`${urlStart}S14_FNCS_Finals_${region}_PC_GrandFinals?window=S14_FNCS_Finals_${region}_PC_Grandfinals_Event1&sm=floating`)
        }
        break;
      case 15:
        for (let region of regions) {
          if (region === "NAE" || region === "NAW" || region === "EU") {
            for (let dreamhack of dreamhackS15) {
              urlArray.push(`${urlStart}S15_Dreamhack_${dreamhack}_${region}_Finals`)
            }
          }
          for (let i = 1; i <= 3; i++) {
            urlArray.push(`${urlStart}S15_FNCS_Qualifier${i}_${region}`)
          }
          ['A', 'B', 'C', 'D'].map((heat) => {urlArray.push(`${urlStart}S15_FNCS_SemiFinals_${region}?window=S15_FNCS_SemiFinals_${region}_Heat${heat}`)})
          urlArray.push(`${urlStart}S15_FNCS_GrandFinals_${region}?window=S15_FNCS_GrandFinals_${region}_Round2&sm=floating`)
          urlArray.push(`${urlStart}S15_FNCS_RebootRound_${region}`)
        }
        break;
      default:
    }
  }
  return urlArray
}
const urlArray = getURLs()
let promiseArray = urlArray.map((url) => { return axios.get(url)})
let data = { tournaments: {}, matches: {}, matches_played: [], players: {}, teams: {} }
Promise.all(promiseArray)
.then(res => {
  res.map((x) => {
    let leaderboard = JSON.parse(x.data.split("imp_leaderboard = ")[1].split(';')[0])
    let matches = JSON.parse(x.data.split("imp_matches = ")[1].split(';')[0])
    let eventWindow = JSON.parse(x.data.split("imp_eventWindow = ")[1].split(';')[0])
    let players = leaderboard.internal_Accounts
    let teams = leaderboard.entries
    let tournamentID = eventWindow.eventId
    let tournamentRegion
    let tournamentSeason
    for (region of regions) {
      if (tournamentID.includes(region)) {
        tournamentRegion = region
      }
    }
    for (season of seasons) {
      if (tournamentID.includes(season.toString())) {
        tournamentSeason = season
      }
    }
    let mode = teams[0].teamAccountIds.length
    data.tournaments[tournamentID] = ({  name: tournamentID, region: tournamentRegion, season: tournamentSeason })
    Object.keys(players).map((player) => {
      if (!data.players[player]) { data.players[player] = { name: players[player].nickname }}
      else if (data.players[player].name != players[player].nickname) { data.players[player].name = data.players[player].name + ', ' + players[player].nickname}
    })
    matches.map((match) => {
      data.matches[match.sessionId] = ({ tournamentID: tournamentID, winners: match.winners, time: match.startTime, duration: match.matchDuration, mode: mode })
    })
    teams.map((team) => {
      if(!data.teams[team.teamId]) { data.teams[team.teamId] =  team.teamAccountIds }
      team.sessionHistory.map((match) => { 
        data.matches_played.push({ game_id: match.sessionId, team_id: team.teamId, placement: match['trackedStats']['PLACEMENT_STAT_INDEX'], time_alive: match['trackedStats']['TIME_ALIVE_STAT'], elims: match['trackedStats']['TEAM_ELIMS_STAT_INDEX'], mode: mode }) 
      })
    })
  })
  let tournamentData = JSON.stringify(data.tournaments, null, 1)
  let matchData = JSON.stringify(data.matches, null, 1)
  let matchPlayedData = JSON.stringify(data.matches_played, null, 1)
  let playerData = JSON.stringify(data.players, null, 1)
  let teamData = JSON.stringify(data.teams, null, 1)
  fs.writeFile('data/tournamentdata.js', tournamentData, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
  fs.writeFile('data/gamesdata.js', matchData, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
  fs.writeFile('data/gamesplayeddata.js', matchPlayedData, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
  fs.writeFile('data/playerdata.js', playerData, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
  fs.writeFile('data/teamdata.js', teamData, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
})
.catch(function(err){
  console.log(err)
})
