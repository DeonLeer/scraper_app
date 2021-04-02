const axios = require('axios');
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
let playerList = {}
let types = []
regions.map((region) => {
  seasons.map((season) => {
    types.push({id: `S${season}_FNCS_${region}`, season_id: season, region_id: region})
    let months = []
    switch(season){
      case 13:
        months = dreamhackS13
        break;
      case 14:
        months = dreamhackS14
        break;
      case 15:
        months = dreamhackS15
        break;
      default:
        months = []
    }
    if (months.length) {
      for (let month of months) {
        types.push({id: `S${season}_Dreamhack_${month}_${region}`, season_id: season, region_id: region})
      }
    }
  })
})
let tournaments = {}
let teams = {}
let games = {}
let games_played = []
let eliminations = {}

Promise.all([promiseArray[0], promiseArray[1]])
.then(res => {
  res.map((x)=> {
    let tournamentID = x.data.split(`eventWindow = {`)[1].split(`eventId": "`)[1].split(`"`)[0];
    let playerInfoArray = ((x.data.split('"internal_Accounts":')[1]).split(`"entries"`)[0]).slice(0, ((x.data.split('"internal_Accounts":')[1]).split(`"entries"`)[0]).length - 5).split(`}`)
    playerInfoArray.map((player) => {
      let playerObj = ('{'+player.split(`,`)[1]+'}}')
      if (!playerObj.includes('{undefined}') && playerObj.includes('nickname')) {
        let playerParsed = JSON.parse(playerObj)
        if (playerList[Object.keys(playerParsed)[0]] && (!playerList[Object.keys(playerParsed)[0]].includes(playerParsed[Object.keys(playerParsed)[0]]))) {
          playerList[Object.keys(playerParsed)[0]] = playerList[Object.keys(playerParsed)[0]] + ',' + playerParsed[Object.keys(playerParsed)[0]].nickname
        } else if (!playerList[Object.keys(playerParsed)[0]]) {
          playerList[Object.keys(playerParsed)[0]] = playerParsed[Object.keys(playerParsed)[0]].nickname
        }
      }
    })
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
    let type
    if (tournamentID.includes('FNCS')) {
      type = 'FNCS'
    } else {
      type = tournamentID.split('_')[2]+"_"+tournamentID.split('_')[3]
    }
    tournaments[tournamentID] = `S${tournamentSeason}_${type}_${tournamentRegion}`
    let teamArray = x.data.split("imp_leaderboard")[1].split("teamAccountIds")
    let size = teamArray[1].split('[')[1].split(']')[0].split(',').length
    if (size > 1) {
      teamArray.map((team, index) => {
        if (index > 0) {
          let players = team.split('[')[1].split(']')[0].split(',')
          let id = team.split(`teamId":`)[1].split(`"`)[1]
          teams[id] = {size: size}
          players.map((x, i) => {
            teams[id][`player${i+1}_id`] = x.split(`"`)[1]
          })
        }
      })
    }
    let matches = JSON.parse(x.data.split('var imp_matches = ')[1].split(`;`)[0])
    let mode
    if (matches[0]) {
      switch(matches[0].winners.length){
        case 1: mode = 'solo'
          break
        case 2: mode = 'duo'
          break
        case 3: mode = 'trio'
          break 
        case 4: mode = 'squad'
          break
      }
    }
    if (mode) {
      matches.map((game) => {
        games[game.sessionId] = {mode: mode, tournamentID: tournamentID}
      })
    }
  })
  console.log(games)
})
.catch(function(err){
  console.log(err)
})

