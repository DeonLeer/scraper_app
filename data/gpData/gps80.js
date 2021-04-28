const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 10,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 16,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 27,
  "time_alive": 777,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 12,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 18,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 16,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 25,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 16,
  "time_alive": 1320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 29,
  "time_alive": 460,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 5,
  "time_alive": 1459,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 18,
  "time_alive": 1277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 18,
  "time_alive": 1204,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 27,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 8,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 31,
  "time_alive": 244,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 2,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 26,
  "time_alive": 442,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 7,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 22,
  "time_alive": 1170,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 21,
  "time_alive": 1169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 14,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 12,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 10,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 21,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 16,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 29,
  "time_alive": 619,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 9,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 11,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 23,
  "time_alive": 712,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 30,
  "time_alive": 436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 28,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 8,
  "time_alive": 1378,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 32,
  "time_alive": 142,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 21,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 31,
  "time_alive": 287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 29,
  "time_alive": 238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 15,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 26,
  "time_alive": 838,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 3,
  "time_alive": 1522,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 31,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 29,
  "time_alive": 252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 15,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 21,
  "time_alive": 1183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 17,
  "time_alive": 1278,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 27,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 25,
  "time_alive": 977,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 4,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 16,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 24,
  "time_alive": 976,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 23,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 17,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 17,
  "time_alive": 1190,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 24,
  "time_alive": 504,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 14,
  "time_alive": 1376,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 18,
  "time_alive": 1235,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 10,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 28,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 8,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 19,
  "time_alive": 1243,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 15,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 28,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 15,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 28,
  "time_alive": 722,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 19,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 27,
  "time_alive": 391,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 8,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 29,
  "time_alive": 822,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 23,
  "time_alive": 1088,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 21,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 17,
  "time_alive": 1306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 26,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 19,
  "time_alive": 1207,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 11,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 25,
  "time_alive": 865,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 23,
  "time_alive": 1066,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 22,
  "time_alive": 727,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 31,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 31,
  "time_alive": 306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 29,
  "time_alive": 532,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 11,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 28,
  "time_alive": 858,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 30,
  "time_alive": 788,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 17,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 9,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 30,
  "time_alive": 305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 12,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 24,
  "time_alive": 1061,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 20,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 17,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 26,
  "time_alive": 956,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 24,
  "time_alive": 974,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 20,
  "time_alive": 1198,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 13,
  "time_alive": 1364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 24,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 28,
  "time_alive": 772,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 29,
  "time_alive": 690,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 18,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 20,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 7,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 25,
  "time_alive": 492,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 28,
  "time_alive": 981,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 30,
  "time_alive": 818,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 13,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 15,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 24,
  "time_alive": 984,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 11,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 22,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 30,
  "time_alive": 644,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 25,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 21,
  "time_alive": 1110,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 27,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 15,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 26,
  "time_alive": 1106,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 8,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 32,
  "time_alive": 266,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 31,
  "time_alive": 143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 18,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 22,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 30,
  "time_alive": 205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 32,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 28,
  "time_alive": 623,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 30,
  "time_alive": 265,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 30,
  "time_alive": 609,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 30,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 27,
  "time_alive": 1053,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 19,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 30,
  "time_alive": 302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 30,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 31,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 27,
  "time_alive": 823,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 24,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 18,
  "time_alive": 1242,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 24,
  "time_alive": 1073,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 23,
  "time_alive": 963,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 20,
  "time_alive": 1107,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 28,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 29,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 15,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 27,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 24,
  "time_alive": 990,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 23,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 29,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 27,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 22,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 22,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 19,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 1,
  "time_alive": 1516,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 3,
  "time_alive": 1511,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 10,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 8,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 14,
  "time_alive": 1354,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d:b278a355c3094a7b99908a0dcc2bd8e0:f92f388865a24f8c8a7c7980258a353e",
  "placement": 5,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 2,
  "time_alive": 1516,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 4,
  "time_alive": 1493,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 6,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "8c4439d0a25142d4ae1186f48e6d03ae:ccbb75a14bbb4f5695918d6e41f25a26:f41e848486784debb8be3767956fee05",
  "placement": 13,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 18,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 9,
  "time_alive": 1450,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "e2a055a1a0224606ba51bc6fb879066b:e9f472e3817e4d9a994361326ee5fdd4:fb2966cc253344179a65f5ca2d2d9fa1",
  "placement": 11,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "99161b526d594bb39d773154f9826534:9d213c60c03b4e8c9b73e1917cf16008:de4c84fec30e44fd8d37a114431e9a25",
  "placement": 19,
  "time_alive": 1302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 22,
  "time_alive": 1143,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "10cbfcc22bdf45afabc7e63ef05fff58:7b866cbea7a747e4b621d2834139ab58:c92714f0458649a3998dc5d920cb73bf",
  "placement": 27,
  "time_alive": 188,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 7,
  "time_alive": 1465,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "3d04d2352738484298fc576f9310cdc3:823e6f3a7cc84c41b363de516e369aae:d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 20,
  "time_alive": 1179,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 24,
  "time_alive": 1087,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "3c25f75aed4644e484e139340f0f6023:440fc8ec008d4938b6507bc458eece38:afc0a88bf98f471a9fdc390aee4ab0a2",
  "placement": 12,
  "time_alive": 1384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "5820d012a9a04ace925f48dc7cc76091:5df1dd01d2b94ba882a9ce65371b536f:c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 15,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 16,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "32928e9b31544806a48ea3d7243befcd:53e9c5d238fe4e81a67ae3c02c9b23d1:81a879edfa564a618ef4330e0349a73f",
  "placement": 17,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 21,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 23,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 25,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 26,
  "time_alive": 468,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "065e9fbe90c64b119185967580b932b1:24d6558a589343e0b148014e925df2ff:efcb3e576540466f926b74f93fca5fb5",
  "placement": 28,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1157c23a-729a-4472-9652-8d1282e74dfd",
  "team_id": "45e996ea960549de9bc86a5129476eef:99340f8d264f40f8965caebceeccba1f:f198554f661042508f197b7a41c7f0c6",
  "placement": 29,
  "time_alive": 73,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 6,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 14,
  "time_alive": 1395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 14,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 5,
  "time_alive": 1419,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1475,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1510,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 6,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 24,
  "time_alive": 1019,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 22,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 8,
  "time_alive": 1393,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1475,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 10,
  "time_alive": 1430,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 30,
  "time_alive": 328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1529,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 13,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 2,
  "time_alive": 1496,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 6,
  "time_alive": 1444,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 1,
  "time_alive": 1510,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 15,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 7,
  "time_alive": 1469,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 15,
  "time_alive": 1383,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 16,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 9,
  "time_alive": 1433,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:ba34ad89c2d8488ba2f61ef1b57e2e23:e31851f8c5104eaba60b888f5410d37a",
  "placement": 12,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:ba34ad89c2d8488ba2f61ef1b57e2e23:e31851f8c5104eaba60b888f5410d37a",
  "placement": 19,
  "time_alive": 1255,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:ba34ad89c2d8488ba2f61ef1b57e2e23:e31851f8c5104eaba60b888f5410d37a",
  "placement": 2,
  "time_alive": 1529,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:ba34ad89c2d8488ba2f61ef1b57e2e23:e31851f8c5104eaba60b888f5410d37a",
  "placement": 2,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:ba34ad89c2d8488ba2f61ef1b57e2e23:e31851f8c5104eaba60b888f5410d37a",
  "placement": 11,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:ba34ad89c2d8488ba2f61ef1b57e2e23:e31851f8c5104eaba60b888f5410d37a",
  "placement": 15,
  "time_alive": 1324,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 8,
  "time_alive": 1471,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 2,
  "time_alive": 1484,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 12,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 1,
  "time_alive": 1510,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 12,
  "time_alive": 1342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 24,
  "time_alive": 733,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:7aebdffba5044b24bdb485e473ce66bf:9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 16,
  "time_alive": 1316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:7aebdffba5044b24bdb485e473ce66bf:9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 12,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:7aebdffba5044b24bdb485e473ce66bf:9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 3,
  "time_alive": 1501,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:7aebdffba5044b24bdb485e473ce66bf:9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 4,
  "time_alive": 1499,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:7aebdffba5044b24bdb485e473ce66bf:9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 3,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:7aebdffba5044b24bdb485e473ce66bf:9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 17,
  "time_alive": 1223,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 26,
  "time_alive": 870,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 5,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 11,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 3,
  "time_alive": 1500,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 31,
  "time_alive": 458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 10,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 13,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 14,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 19,
  "time_alive": 1231,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 8,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 10,
  "time_alive": 1382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 3,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 22,
  "time_alive": 1049,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 7,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 8,
  "time_alive": 1469,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 16,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 6,
  "time_alive": 1407,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 8,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 27,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 4,
  "time_alive": 1462,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 26,
  "time_alive": 911,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 28,
  "time_alive": 502,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 7,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 7,
  "time_alive": 1435,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 23,
  "time_alive": 1009,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 8,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 17,
  "time_alive": 1316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 7,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 13,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 11,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 17,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 16,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 9,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 20,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 14,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 5,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 28,
  "time_alive": 741,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 10,
  "time_alive": 1385,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 6,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 5,
  "time_alive": 1483,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 28,
  "time_alive": 641,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 18,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 9,
  "time_alive": 1439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 23,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 21,
  "time_alive": 1176,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 29,
  "time_alive": 427,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 1,
  "time_alive": 1496,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 19,
  "time_alive": 1207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 3,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 22,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 18,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 18,
  "time_alive": 1276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 4,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "1be680a560154d3c9460687293c1c3c1:45b91147ac3742059204f9e06bbc711c:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 3,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "1be680a560154d3c9460687293c1c3c1:45b91147ac3742059204f9e06bbc711c:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 22,
  "time_alive": 1155,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "1be680a560154d3c9460687293c1c3c1:45b91147ac3742059204f9e06bbc711c:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 20,
  "time_alive": 1212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "1be680a560154d3c9460687293c1c3c1:45b91147ac3742059204f9e06bbc711c:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 12,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "1be680a560154d3c9460687293c1c3c1:45b91147ac3742059204f9e06bbc711c:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 30,
  "time_alive": 476,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "1be680a560154d3c9460687293c1c3c1:45b91147ac3742059204f9e06bbc711c:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 28,
  "time_alive": 424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 5,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 24,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 23,
  "time_alive": 1088,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 10,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 24,
  "time_alive": 1085,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 29,
  "time_alive": 383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe:998136143df74a9883d006e032f548b3",
  "placement": 18,
  "time_alive": 1201,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe:998136143df74a9883d006e032f548b3",
  "placement": 25,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe:998136143df74a9883d006e032f548b3",
  "placement": 10,
  "time_alive": 1460,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe:998136143df74a9883d006e032f548b3",
  "placement": 6,
  "time_alive": 1483,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe:998136143df74a9883d006e032f548b3",
  "placement": 27,
  "time_alive": 658,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe:998136143df74a9883d006e032f548b3",
  "placement": 13,
  "time_alive": 1376,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 31,
  "time_alive": 305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 18,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 16,
  "time_alive": 1356,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 32,
  "time_alive": 98,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 4,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 12,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 4,
  "time_alive": 1497,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 9,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 25,
  "time_alive": 952,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 27,
  "time_alive": 537,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 29,
  "time_alive": 540,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 23,
  "time_alive": 960,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 14,
  "time_alive": 1332,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 27,
  "time_alive": 812,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 26,
  "time_alive": 709,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 25,
  "time_alive": 684,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 7,
  "time_alive": 1472,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 21,
  "time_alive": 1161,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 15,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 19,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 9,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 20,
  "time_alive": 1177,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 11,
  "time_alive": 1427,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 28,
  "time_alive": 549,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 13,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 25,
  "time_alive": 707,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 20,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 26,
  "time_alive": 664,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b:74d56dc60f8944bcb3cb08c7ce9808c1:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 25,
  "time_alive": 911,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b:74d56dc60f8944bcb3cb08c7ce9808c1:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 31,
  "time_alive": 140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b:74d56dc60f8944bcb3cb08c7ce9808c1:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 31,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b:74d56dc60f8944bcb3cb08c7ce9808c1:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 9,
  "time_alive": 1440,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b:74d56dc60f8944bcb3cb08c7ce9808c1:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 19,
  "time_alive": 1205,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b:74d56dc60f8944bcb3cb08c7ce9808c1:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 27,
  "time_alive": 627,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200:277e7bba9ac84e19bc039f708d2e284b:d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 24,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200:277e7bba9ac84e19bc039f708d2e284b:d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 17,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200:277e7bba9ac84e19bc039f708d2e284b:d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 5,
  "time_alive": 1483,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200:277e7bba9ac84e19bc039f708d2e284b:d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 31,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200:277e7bba9ac84e19bc039f708d2e284b:d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 32,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200:277e7bba9ac84e19bc039f708d2e284b:d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 31,
  "time_alive": 200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 21,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 11,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 4,
  "time_alive": 1499,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 21,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 22,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 22,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5:54f23635792b41a0961aba28062d56e1:e641077448d8449eb0850930938d6062",
  "placement": 30,
  "time_alive": 406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5:54f23635792b41a0961aba28062d56e1:e641077448d8449eb0850930938d6062",
  "placement": 13,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5:54f23635792b41a0961aba28062d56e1:e641077448d8449eb0850930938d6062",
  "placement": 29,
  "time_alive": 430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5:54f23635792b41a0961aba28062d56e1:e641077448d8449eb0850930938d6062",
  "placement": 11,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5:54f23635792b41a0961aba28062d56e1:e641077448d8449eb0850930938d6062",
  "placement": 21,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5:54f23635792b41a0961aba28062d56e1:e641077448d8449eb0850930938d6062",
  "placement": 32,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 29,
  "time_alive": 467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 29,
  "time_alive": 439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 30,
  "time_alive": 287,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 23,
  "time_alive": 1144,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 25,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 14,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 15,
  "time_alive": 1328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 20,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 32,
  "time_alive": 172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 30,
  "time_alive": 412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 15,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 21,
  "time_alive": 1135,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 19,
  "time_alive": 1201,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 26,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 18,
  "time_alive": 1250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 26,
  "time_alive": 669,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 23,
  "time_alive": 1104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 16,
  "time_alive": 1309,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496edb3-463f-4038-b5c3-7685cbaedc2a",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02a99773-f12c-44fd-aba8-4ee47a7c5f04",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 32,
  "time_alive": 91,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 27,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 17,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 17,
  "time_alive": 1281,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 33,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e979a1d-e1a9-4f57-ac08-ff763874baa0",
  "team_id": "30ec0c5eeeb54c2caaadf103b1a9467a:8e59f3bb61e64eab8a53485e5243cd0d:e5c670247ed14c36ba48b4c33c987689",
  "placement": 28,
  "time_alive": 678,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "58c146dd-6b34-4e69-aa99-fa1241d9bef1",
  "team_id": "30ec0c5eeeb54c2caaadf103b1a9467a:8e59f3bb61e64eab8a53485e5243cd0d:e5c670247ed14c36ba48b4c33c987689",
  "placement": 24,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d7d65ea-2254-4c98-b081-54cc45eea78c",
  "team_id": "30ec0c5eeeb54c2caaadf103b1a9467a:8e59f3bb61e64eab8a53485e5243cd0d:e5c670247ed14c36ba48b4c33c987689",
  "placement": 33,
  "time_alive": 338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0348467a-badf-4a20-95e0-9df800dbe031",
  "team_id": "30ec0c5eeeb54c2caaadf103b1a9467a:8e59f3bb61e64eab8a53485e5243cd0d:e5c670247ed14c36ba48b4c33c987689",
  "placement": 30,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 15,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 5,
  "time_alive": 1389,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1382,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 2,
  "time_alive": 1496,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 11,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 8,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 14,
  "time_alive": 1356,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 2,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 8,
  "time_alive": 1353,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 3,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 1,
  "time_alive": 1463,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "72629dda44b84118ba4037fc7216fbf2:b681f129a70e4bc3976c1b576966fca9:db11b4c9c95342eda44b50ca51beb086",
  "placement": 19,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 7,
  "time_alive": 1392,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 10,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 26,
  "time_alive": 685,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 6,
  "time_alive": 1435,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 3,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 7,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e:f70e096e0270452fa78e0f3a56445d72",
  "placement": 3,
  "time_alive": 1456,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e:f70e096e0270452fa78e0f3a56445d72",
  "placement": 16,
  "time_alive": 1289,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e:f70e096e0270452fa78e0f3a56445d72",
  "placement": 20,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e:f70e096e0270452fa78e0f3a56445d72",
  "placement": 16,
  "time_alive": 1314,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e:f70e096e0270452fa78e0f3a56445d72",
  "placement": 2,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0:f1142da7a93c4ec48bba5bbf2b150b9e:f70e096e0270452fa78e0f3a56445d72",
  "placement": 5,
  "time_alive": 1465,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 2,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 11,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 13,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 4,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 9,
  "time_alive": 1397,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 9,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 10,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 4,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 7,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 11,
  "time_alive": 1373,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 19,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 2,
  "time_alive": 1499,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "559695864dea41f0831d6340819b8819:7329b73ad28746c589ad4de9f880d63d:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 6,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "559695864dea41f0831d6340819b8819:7329b73ad28746c589ad4de9f880d63d:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 3,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "559695864dea41f0831d6340819b8819:7329b73ad28746c589ad4de9f880d63d:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 11,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "559695864dea41f0831d6340819b8819:7329b73ad28746c589ad4de9f880d63d:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 9,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "559695864dea41f0831d6340819b8819:7329b73ad28746c589ad4de9f880d63d:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 5,
  "time_alive": 1446,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "559695864dea41f0831d6340819b8819:7329b73ad28746c589ad4de9f880d63d:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 21,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 5,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 1,
  "time_alive": 1421,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 4,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 27,
  "time_alive": 533,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 13,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 12,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 17,
  "time_alive": 1286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 3,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 10,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 17,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 1,
  "time_alive": 1499,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 1,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 26,
  "time_alive": 643,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 12,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 15,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 16,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "848941c78039476e90e26c5269e880d1:933b34486f244cd9b7c01b36e8290713:9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 3,
  "time_alive": 1492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 9,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 19,
  "time_alive": 1272,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 5,
  "time_alive": 1367,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 17,
  "time_alive": 1252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 6,
  "time_alive": 1416,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 4,
  "time_alive": 1491,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 4,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 7,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 27,
  "time_alive": 583,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 13,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 24,
  "time_alive": 483,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 11,
  "time_alive": 1421,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 24,
  "time_alive": 919,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 25,
  "time_alive": 763,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 5,
  "time_alive": 1436,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 28,
  "time_alive": 332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 30,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 17,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 15,
  "time_alive": 1292,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 24,
  "time_alive": 843,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 19,
  "time_alive": 1213,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 14,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 6,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 16,
  "time_alive": 1341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 8,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 9,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 12,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 12,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 17,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 28,
  "time_alive": 457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 20,
  "time_alive": 1252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 1,
  "time_alive": 1496,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 8,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 29,
  "time_alive": 227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 22,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 28,
  "time_alive": 568,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 2,
  "time_alive": 1382,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 22,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 18,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 14,
  "time_alive": 1397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "3719f89006f44f16a26decf02c730908:b1abcb47f9ee412487c946c0e6332cde:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 8,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "3719f89006f44f16a26decf02c730908:b1abcb47f9ee412487c946c0e6332cde:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 6,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "3719f89006f44f16a26decf02c730908:b1abcb47f9ee412487c946c0e6332cde:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 18,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "3719f89006f44f16a26decf02c730908:b1abcb47f9ee412487c946c0e6332cde:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 7,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "3719f89006f44f16a26decf02c730908:b1abcb47f9ee412487c946c0e6332cde:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "3719f89006f44f16a26decf02c730908:b1abcb47f9ee412487c946c0e6332cde:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 31,
  "time_alive": 179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 19,
  "time_alive": 1288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 25,
  "time_alive": 688,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 22,
  "time_alive": 1030,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 29,
  "time_alive": 290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 4,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 10,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf:bda71e01bf554454bdd098d277075aaf:f461d39c585742fc9a03d963c064c82a",
  "placement": 26,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf:bda71e01bf554454bdd098d277075aaf:f461d39c585742fc9a03d963c064c82a",
  "placement": 23,
  "time_alive": 952,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf:bda71e01bf554454bdd098d277075aaf:f461d39c585742fc9a03d963c064c82a",
  "placement": 23,
  "time_alive": 1022,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf:bda71e01bf554454bdd098d277075aaf:f461d39c585742fc9a03d963c064c82a",
  "placement": 25,
  "time_alive": 798,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf:bda71e01bf554454bdd098d277075aaf:f461d39c585742fc9a03d963c064c82a",
  "placement": 32,
  "time_alive": 75,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf:bda71e01bf554454bdd098d277075aaf:f461d39c585742fc9a03d963c064c82a",
  "placement": 15,
  "time_alive": 1383,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 13,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 22,
  "time_alive": 1018,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 15,
  "time_alive": 1265,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 8,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 31,
  "time_alive": 191,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 24,
  "time_alive": 627,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 11,
  "time_alive": 1377,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 27,
  "time_alive": 625,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 21,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 14,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 13,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 22,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 18,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 12,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 14,
  "time_alive": 1292,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 32,
  "time_alive": 135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 23,
  "time_alive": 692,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 18,
  "time_alive": 1200,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "52ef3fcff4cc45cc8b1f1eb8354cd341:c9e807e36d00498687c645352f1dab9c:df66029739c845cbbddf08d3d89c214f",
  "placement": 21,
  "time_alive": 1168,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "52ef3fcff4cc45cc8b1f1eb8354cd341:c9e807e36d00498687c645352f1dab9c:df66029739c845cbbddf08d3d89c214f",
  "placement": 21,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "52ef3fcff4cc45cc8b1f1eb8354cd341:c9e807e36d00498687c645352f1dab9c:df66029739c845cbbddf08d3d89c214f",
  "placement": 28,
  "time_alive": 393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "52ef3fcff4cc45cc8b1f1eb8354cd341:c9e807e36d00498687c645352f1dab9c:df66029739c845cbbddf08d3d89c214f",
  "placement": 24,
  "time_alive": 955,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "52ef3fcff4cc45cc8b1f1eb8354cd341:c9e807e36d00498687c645352f1dab9c:df66029739c845cbbddf08d3d89c214f",
  "placement": 10,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "52ef3fcff4cc45cc8b1f1eb8354cd341:c9e807e36d00498687c645352f1dab9c:df66029739c845cbbddf08d3d89c214f",
  "placement": 16,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 31,
  "time_alive": 209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 9,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 6,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 21,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 20,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 26,
  "time_alive": 462,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 32,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 30,
  "time_alive": 356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 19,
  "time_alive": 1170,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 31,
  "time_alive": 205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 29,
  "time_alive": 212,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 12,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 27,
  "time_alive": 822,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 14,
  "time_alive": 1293,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 17,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 20,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 25,
  "time_alive": 428,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 23,
  "time_alive": 780,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 24,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 18,
  "time_alive": 1278,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 31,
  "time_alive": 115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 33,
  "time_alive": 61,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 7,
  "time_alive": 1407,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 28,
  "time_alive": 229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 23,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 13,
  "time_alive": 1297,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 10,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 26,
  "time_alive": 787,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 27,
  "time_alive": 364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 25,
  "time_alive": 537,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 29,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 29,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 16,
  "time_alive": 1260,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 30,
  "time_alive": 207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 26,
  "time_alive": 367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 25,
  "time_alive": 984,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 31,
  "time_alive": 209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 32,
  "time_alive": 89,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 18,
  "time_alive": 1215,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 21,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 27,
  "time_alive": 231,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 20,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 32,
  "time_alive": 168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 30,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 28,
  "time_alive": 434,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 15,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 20,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02e35d33-24df-4068-b5ea-e4a18195cb13",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 30,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "198f8609-e13c-4026-a2c8-edddf1e20ca0",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 33,
  "time_alive": 166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3521cecf-6f7a-4d47-b0ad-b00ae39278cf",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 29,
  "time_alive": 311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "28c982f7-15c6-4332-9e1e-7905e4afae17",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 23,
  "time_alive": 1042,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29935b52-dded-45b2-b043-e6721dcc48e4",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 30,
  "time_alive": 191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07671211-c118-40e8-b2dc-14f26c508e48",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 32,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 8,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 11,
  "time_alive": 1304,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 6,
  "time_alive": 1408,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 7,
  "time_alive": 1333,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 7,
  "time_alive": 1496,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695:b7a1d419ff62483785bd8600d10e774d:c5db53cd0d464be2aa6256814d789b81",
  "placement": 1,
  "time_alive": 1616,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 2,
  "time_alive": 1632,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 6,
  "time_alive": 1366,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 5,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 6,
  "time_alive": 1341,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 3,
  "time_alive": 1671,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 15,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 18,
  "time_alive": 1276,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 13,
  "time_alive": 1289,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 24,
  "time_alive": 891,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 1,
  "time_alive": 1462,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 18,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 14,
  "time_alive": 1379,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 28,
  "time_alive": 508,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 1,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 1,
  "time_alive": 1486,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 2,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "1a47ba12da3d4473b6e44ce6804581d1:596ff531905244a4b699883dae5691da:bbb34b662e22499fbe897c2161714685",
  "placement": 23,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 5,
  "time_alive": 1562,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 7,
  "time_alive": 1323,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 10,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 10,
  "time_alive": 1315,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 2,
  "time_alive": 1683,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 18,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 1,
  "time_alive": 1632,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 28,
  "time_alive": 485,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 9,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 12,
  "time_alive": 1294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 20,
  "time_alive": 1275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 2,
  "time_alive": 1616,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 3,
  "time_alive": 1581,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 12,
  "time_alive": 1298,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 23,
  "time_alive": 1096,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 4,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 6,
  "time_alive": 1555,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "24b8547e8a3b48bf85f01592312bdd28:3d67da85f6514fb2b90d47cc6ecfac73:91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 4,
  "time_alive": 1535,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 23,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 2,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 2,
  "time_alive": 1486,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 20,
  "time_alive": 1093,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 19,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 5,
  "time_alive": 1528,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 7,
  "time_alive": 1534,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 3,
  "time_alive": 1379,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 15,
  "time_alive": 1313,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 9,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 12,
  "time_alive": 1413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "12ae0730885348878edd48c82232a5cb:998136143df74a9883d006e032f548b3:a1461707ba7446298ac73988af8a11ae",
  "placement": 6,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe",
  "placement": 11,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe",
  "placement": 19,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe",
  "placement": 14,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe",
  "placement": 27,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe",
  "placement": 1,
  "time_alive": 1683,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:1da01e1880bf4cef83482af90f5ecbd9:2bef9dce40204e238254099a69393afe",
  "placement": 13,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 14,
  "time_alive": 1309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 4,
  "time_alive": 1376,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 7,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 11,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 17,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 7,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 12,
  "time_alive": 1333,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 18,
  "time_alive": 1224,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 26,
  "time_alive": 798,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 14,
  "time_alive": 1279,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 5,
  "time_alive": 1571,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 27,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "d2f3ae45edd7443882de9b0af136fc04:db911938355b43a28686877effc40a1f:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 15,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "d2f3ae45edd7443882de9b0af136fc04:db911938355b43a28686877effc40a1f:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 15,
  "time_alive": 1272,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "d2f3ae45edd7443882de9b0af136fc04:db911938355b43a28686877effc40a1f:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 17,
  "time_alive": 1240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "d2f3ae45edd7443882de9b0af136fc04:db911938355b43a28686877effc40a1f:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 8,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "d2f3ae45edd7443882de9b0af136fc04:db911938355b43a28686877effc40a1f:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 13,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "d2f3ae45edd7443882de9b0af136fc04:db911938355b43a28686877effc40a1f:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 3,
  "time_alive": 1591,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "38770c898f334976bde48c4b9fe0cc18:54aece80c1b0411dbf9ac456a79ae6f7:f86ad0922926454885345da63a833910",
  "placement": 6,
  "time_alive": 1546,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "38770c898f334976bde48c4b9fe0cc18:54aece80c1b0411dbf9ac456a79ae6f7:f86ad0922926454885345da63a833910",
  "placement": 10,
  "time_alive": 1311,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "38770c898f334976bde48c4b9fe0cc18:54aece80c1b0411dbf9ac456a79ae6f7:f86ad0922926454885345da63a833910",
  "placement": 8,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "38770c898f334976bde48c4b9fe0cc18:54aece80c1b0411dbf9ac456a79ae6f7:f86ad0922926454885345da63a833910",
  "placement": 24,
  "time_alive": 981,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "38770c898f334976bde48c4b9fe0cc18:54aece80c1b0411dbf9ac456a79ae6f7:f86ad0922926454885345da63a833910",
  "placement": 26,
  "time_alive": 390,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "38770c898f334976bde48c4b9fe0cc18:54aece80c1b0411dbf9ac456a79ae6f7:f86ad0922926454885345da63a833910",
  "placement": 16,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 19,
  "time_alive": 1212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 24,
  "time_alive": 945,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 4,
  "time_alive": 1444,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 3,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 29,
  "time_alive": 231,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 20,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 25,
  "time_alive": 934,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 27,
  "time_alive": 577,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 13,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 30,
  "time_alive": 770,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 4,
  "time_alive": 1626,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 8,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "4eeab423340d46699db3f433bd9f6289:c8e226ffcccf4067b9ca60f7a9994048:ca08de34945641d388380b1bfb5a39a4",
  "placement": 16,
  "time_alive": 1292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "4eeab423340d46699db3f433bd9f6289:c8e226ffcccf4067b9ca60f7a9994048:ca08de34945641d388380b1bfb5a39a4",
  "placement": 8,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "4eeab423340d46699db3f433bd9f6289:c8e226ffcccf4067b9ca60f7a9994048:ca08de34945641d388380b1bfb5a39a4",
  "placement": 12,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "4eeab423340d46699db3f433bd9f6289:c8e226ffcccf4067b9ca60f7a9994048:ca08de34945641d388380b1bfb5a39a4",
  "placement": 13,
  "time_alive": 1286,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "4eeab423340d46699db3f433bd9f6289:c8e226ffcccf4067b9ca60f7a9994048:ca08de34945641d388380b1bfb5a39a4",
  "placement": 25,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "4eeab423340d46699db3f433bd9f6289:c8e226ffcccf4067b9ca60f7a9994048:ca08de34945641d388380b1bfb5a39a4",
  "placement": 23,
  "time_alive": 1059,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7:447b1db77c2f47639bd3030153d46581:f061a5e20a0c44b3b0fdcfdc3b8ed7c3",
  "placement": 13,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7:447b1db77c2f47639bd3030153d46581:f061a5e20a0c44b3b0fdcfdc3b8ed7c3",
  "placement": 16,
  "time_alive": 1261,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7:447b1db77c2f47639bd3030153d46581:f061a5e20a0c44b3b0fdcfdc3b8ed7c3",
  "placement": 20,
  "time_alive": 1183,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7:447b1db77c2f47639bd3030153d46581:f061a5e20a0c44b3b0fdcfdc3b8ed7c3",
  "placement": 28,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7:447b1db77c2f47639bd3030153d46581:f061a5e20a0c44b3b0fdcfdc3b8ed7c3",
  "placement": 14,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7:447b1db77c2f47639bd3030153d46581:f061a5e20a0c44b3b0fdcfdc3b8ed7c3",
  "placement": 17,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da:ae9bd7153291439fb770ce7e58b561ee:cff72203d9474f9b8b47afd275022000",
  "placement": 20,
  "time_alive": 1121,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da:ae9bd7153291439fb770ce7e58b561ee:cff72203d9474f9b8b47afd275022000",
  "placement": 3,
  "time_alive": 1468,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da:ae9bd7153291439fb770ce7e58b561ee:cff72203d9474f9b8b47afd275022000",
  "placement": 29,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da:ae9bd7153291439fb770ce7e58b561ee:cff72203d9474f9b8b47afd275022000",
  "placement": 16,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da:ae9bd7153291439fb770ce7e58b561ee:cff72203d9474f9b8b47afd275022000",
  "placement": 21,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "6f55be977f104904b3e06fcd708fb1cc:b360e8f7ac834ecca42093709d2ac07b:f364004d88f047bda4514f81f6f36f7a",
  "placement": 33,
  "time_alive": 142,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "6f55be977f104904b3e06fcd708fb1cc:b360e8f7ac834ecca42093709d2ac07b:f364004d88f047bda4514f81f6f36f7a",
  "placement": 32,
  "time_alive": 248,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "6f55be977f104904b3e06fcd708fb1cc:b360e8f7ac834ecca42093709d2ac07b:f364004d88f047bda4514f81f6f36f7a",
  "placement": 19,
  "time_alive": 1154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "6f55be977f104904b3e06fcd708fb1cc:b360e8f7ac834ecca42093709d2ac07b:f364004d88f047bda4514f81f6f36f7a",
  "placement": 8,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "6f55be977f104904b3e06fcd708fb1cc:b360e8f7ac834ecca42093709d2ac07b:f364004d88f047bda4514f81f6f36f7a",
  "placement": 11,
  "time_alive": 1385,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 4,
  "time_alive": 1573,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 17,
  "time_alive": 1226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 30,
  "time_alive": 528,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 23,
  "time_alive": 1062,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 31,
  "time_alive": 125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "161cb2edbb244198b0834fc6afa12f91:7cc29720cc01405795da151849f033f2:a2bcf6ac4b54453bb2bf491a0b7a369f",
  "placement": 24,
  "time_alive": 737,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "081830f67aa84b60abc0ed7cbb48c6e5:0ad70f78e34f4930b7785228e4731f46:4ae9645262834ee58e7655661de2d8ec",
  "placement": 21,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "081830f67aa84b60abc0ed7cbb48c6e5:0ad70f78e34f4930b7785228e4731f46:4ae9645262834ee58e7655661de2d8ec",
  "placement": 9,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "081830f67aa84b60abc0ed7cbb48c6e5:0ad70f78e34f4930b7785228e4731f46:4ae9645262834ee58e7655661de2d8ec",
  "placement": 11,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "081830f67aa84b60abc0ed7cbb48c6e5:0ad70f78e34f4930b7785228e4731f46:4ae9645262834ee58e7655661de2d8ec",
  "placement": 5,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "081830f67aa84b60abc0ed7cbb48c6e5:0ad70f78e34f4930b7785228e4731f46:4ae9645262834ee58e7655661de2d8ec",
  "placement": 30,
  "time_alive": 190,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "081830f67aa84b60abc0ed7cbb48c6e5:0ad70f78e34f4930b7785228e4731f46:4ae9645262834ee58e7655661de2d8ec",
  "placement": 28,
  "time_alive": 450,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 24,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 26,
  "time_alive": 752,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 18,
  "time_alive": 1237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 15,
  "time_alive": 1274,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 10,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 30,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3:412097e98a744da994f4727728facf9e:54c96b33af6e420eaf21154f009233f2",
  "placement": 22,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3:412097e98a744da994f4727728facf9e:54c96b33af6e420eaf21154f009233f2",
  "placement": 5,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3:412097e98a744da994f4727728facf9e:54c96b33af6e420eaf21154f009233f2",
  "placement": 33,
  "time_alive": 226,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3:412097e98a744da994f4727728facf9e:54c96b33af6e420eaf21154f009233f2",
  "placement": 16,
  "time_alive": 1263,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3:412097e98a744da994f4727728facf9e:54c96b33af6e420eaf21154f009233f2",
  "placement": 24,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3:412097e98a744da994f4727728facf9e:54c96b33af6e420eaf21154f009233f2",
  "placement": 19,
  "time_alive": 1263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 9,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 23,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 27,
  "time_alive": 762,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 25,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 21,
  "time_alive": 1218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 9,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "6e6a5c28287f456583f1c8678a17913c:a4a881da733d4ac0b710bb38fb671568:fc1158d5dc854467bd1d20209521e6ef",
  "placement": 26,
  "time_alive": 781,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "6e6a5c28287f456583f1c8678a17913c:a4a881da733d4ac0b710bb38fb671568:fc1158d5dc854467bd1d20209521e6ef",
  "placement": 14,
  "time_alive": 1282,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "6e6a5c28287f456583f1c8678a17913c:a4a881da733d4ac0b710bb38fb671568:fc1158d5dc854467bd1d20209521e6ef",
  "placement": 31,
  "time_alive": 268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "6e6a5c28287f456583f1c8678a17913c:a4a881da733d4ac0b710bb38fb671568:fc1158d5dc854467bd1d20209521e6ef",
  "placement": 17,
  "time_alive": 1236,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "6e6a5c28287f456583f1c8678a17913c:a4a881da733d4ac0b710bb38fb671568:fc1158d5dc854467bd1d20209521e6ef",
  "placement": 15,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "6e6a5c28287f456583f1c8678a17913c:a4a881da733d4ac0b710bb38fb671568:fc1158d5dc854467bd1d20209521e6ef",
  "placement": 12,
  "time_alive": 1383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 17,
  "time_alive": 1283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 30,
  "time_alive": 341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 22,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 21,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 9,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 29,
  "time_alive": 357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 30,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 22,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 29,
  "time_alive": 678,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 32,
  "time_alive": 309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 11,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 22,
  "time_alive": 1092,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 20,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 32,
  "time_alive": 277,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 21,
  "time_alive": 1104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 31,
  "time_alive": 760,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 28,
  "time_alive": 325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 10,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 31,
  "time_alive": 308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 16,
  "time_alive": 1281,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 22,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 22,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:3f00394b697e46c4a6126c9b492002c1:60545900be27429292f40daccfad9188",
  "placement": 27,
  "time_alive": 646,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:3f00394b697e46c4a6126c9b492002c1:60545900be27429292f40daccfad9188",
  "placement": 25,
  "time_alive": 930,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:3f00394b697e46c4a6126c9b492002c1:60545900be27429292f40daccfad9188",
  "placement": 19,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:3f00394b697e46c4a6126c9b492002c1:60545900be27429292f40daccfad9188",
  "placement": 26,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:3f00394b697e46c4a6126c9b492002c1:60545900be27429292f40daccfad9188",
  "placement": 27,
  "time_alive": 351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:3f00394b697e46c4a6126c9b492002c1:60545900be27429292f40daccfad9188",
  "placement": 25,
  "time_alive": 559,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "04db39b0d77d460db1e7c0407abcffcd:135f07975f4c410fba58718b5b7dce3a:9da354098ea24dc39d57645ca748a594",
  "placement": 10,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "04db39b0d77d460db1e7c0407abcffcd:135f07975f4c410fba58718b5b7dce3a:9da354098ea24dc39d57645ca748a594",
  "placement": 21,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "04db39b0d77d460db1e7c0407abcffcd:135f07975f4c410fba58718b5b7dce3a:9da354098ea24dc39d57645ca748a594",
  "placement": 25,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "04db39b0d77d460db1e7c0407abcffcd:135f07975f4c410fba58718b5b7dce3a:9da354098ea24dc39d57645ca748a594",
  "placement": 18,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2",
  "team_id": "04db39b0d77d460db1e7c0407abcffcd:135f07975f4c410fba58718b5b7dce3a:9da354098ea24dc39d57645ca748a594",
  "placement": 32,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c0a4aa-e363-498c-a3be-e0bcff378a3e",
  "team_id": "04db39b0d77d460db1e7c0407abcffcd:135f07975f4c410fba58718b5b7dce3a:9da354098ea24dc39d57645ca748a594",
  "placement": 26,
  "time_alive": 500,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0797079e-1bd7-46e0-b6ee-4db757a952d7",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 29,
  "time_alive": 332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d756921-c411-4e3f-b8cf-366cf1dacd8d",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 29,
  "time_alive": 447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1502163b-d6ad-4ae4-b56c-b8f7262b923f",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 28,
  "time_alive": 706,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c7794a0-f302-4fe8-8a71-ebe171fb6062",
  "team_id": "38befec997ae46959b31094dec8a7028:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 33,
  "time_alive": 295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 10,
  "time_alive": 1386,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 2,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1508,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 4,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1468,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "04489b66290d48968dde800325510257:63617d654b8149189dd11747b850d636:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 3,
  "time_alive": 1433,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 4,
  "time_alive": 1463,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 6,
  "time_alive": 1446,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 6,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 5,
  "time_alive": 1397,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 24,
  "time_alive": 495,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a:ba1b57c961e94311a7c16a0139bc3f9f:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 1,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 22,
  "time_alive": 1117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 5,
  "time_alive": 1471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 3,
  "time_alive": 1502,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 2,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 4,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de:9553dfcebe82446387f60e33699dc76c:aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 12,
  "time_alive": 1343,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 30,
  "time_alive": 97,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 18,
  "time_alive": 1236,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 29,
  "time_alive": 510,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 16,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 2,
  "time_alive": 1468,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e:960471547daa44bc8c4a6a92161a7996:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 6,
  "time_alive": 1429,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:ca81f31bc0d548208d851e322bb506a0",
  "placement": 2,
  "time_alive": 1493,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:ca81f31bc0d548208d851e322bb506a0",
  "placement": 10,
  "time_alive": 1376,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:ca81f31bc0d548208d851e322bb506a0",
  "placement": 24,
  "time_alive": 956,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:ca81f31bc0d548208d851e322bb506a0",
  "placement": 20,
  "time_alive": 1291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:ca81f31bc0d548208d851e322bb506a0",
  "placement": 5,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:ca81f31bc0d548208d851e322bb506a0",
  "placement": 5,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 11,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 1,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 27,
  "time_alive": 818,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 8,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 14,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "9e76e2c0b0244462917f8f8aba0909de:d2541f7c88f4413e943898d28e132511:f89cbd6eb8914a399fa5797fe6f38faf",
  "placement": 2,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "833503550a624a78a31e97ecc29a54c4:910c7fc4742f42cbbc47e45dec2d13a7:f42826504add4745a8d5eb14f59ecce7",
  "placement": 1,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "833503550a624a78a31e97ecc29a54c4:910c7fc4742f42cbbc47e45dec2d13a7:f42826504add4745a8d5eb14f59ecce7",
  "placement": 12,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "833503550a624a78a31e97ecc29a54c4:910c7fc4742f42cbbc47e45dec2d13a7:f42826504add4745a8d5eb14f59ecce7",
  "placement": 15,
  "time_alive": 1292,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "833503550a624a78a31e97ecc29a54c4:910c7fc4742f42cbbc47e45dec2d13a7:f42826504add4745a8d5eb14f59ecce7",
  "placement": 11,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "833503550a624a78a31e97ecc29a54c4:910c7fc4742f42cbbc47e45dec2d13a7:f42826504add4745a8d5eb14f59ecce7",
  "placement": 20,
  "time_alive": 1165,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "833503550a624a78a31e97ecc29a54c4:910c7fc4742f42cbbc47e45dec2d13a7:f42826504add4745a8d5eb14f59ecce7",
  "placement": 4,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 4,
  "time_alive": 1487,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 22,
  "time_alive": 1088,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 9,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 7,
  "time_alive": 1398,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 14,
  "time_alive": 1307,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 7,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 19,
  "time_alive": 1219,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 25,
  "time_alive": 903,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 14,
  "time_alive": 1333,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 8,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "45b91147ac3742059204f9e06bbc711c:8584d75c37e44b8a93f0dc61a1a01678:c70e7a88ca35421393e576c7bdb8edc8",
  "placement": 10,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 5,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 3,
  "time_alive": 1498,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 9,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 7,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 15,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "4043636849724feb8462eebb31f55a66:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 22,
  "time_alive": 990,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 8,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 4,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 3,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 6,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "36a2842f03e74688bee739598fc46ae1:8a19e9eea2784a3dbce99715c152a7e1:f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 31,
  "time_alive": 89,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 29,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 11,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 2,
  "time_alive": 1508,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 21,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 18,
  "time_alive": 1295,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "87bc172ab3bb491aa6f9754a07944e63:d33ed82d1a8c48ca8a37c5370a647488:d794d93c0e854c428b4596dda8f11987",
  "placement": 8,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "1b71a904be4d4dee98d827b132679004:3a1d059814144f1cb694b19731f2820a:de386ef1ee864194879a9fd09b05f6b5",
  "placement": 17,
  "time_alive": 1306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "1b71a904be4d4dee98d827b132679004:3a1d059814144f1cb694b19731f2820a:de386ef1ee864194879a9fd09b05f6b5",
  "placement": 14,
  "time_alive": 1308,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "1b71a904be4d4dee98d827b132679004:3a1d059814144f1cb694b19731f2820a:de386ef1ee864194879a9fd09b05f6b5",
  "placement": 19,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "1b71a904be4d4dee98d827b132679004:3a1d059814144f1cb694b19731f2820a:de386ef1ee864194879a9fd09b05f6b5",
  "placement": 1,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "1b71a904be4d4dee98d827b132679004:3a1d059814144f1cb694b19731f2820a:de386ef1ee864194879a9fd09b05f6b5",
  "placement": 12,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "1b71a904be4d4dee98d827b132679004:3a1d059814144f1cb694b19731f2820a:de386ef1ee864194879a9fd09b05f6b5",
  "placement": 25,
  "time_alive": 353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "d4e8845a14d94acfb34a0a1895a3138f:f3359f60e5284617ba6fd27c5c51fe8c:fcea7ec1c6c64b2ebc1b0f19ccbb4135",
  "placement": 3,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "d4e8845a14d94acfb34a0a1895a3138f:f3359f60e5284617ba6fd27c5c51fe8c:fcea7ec1c6c64b2ebc1b0f19ccbb4135",
  "placement": 21,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "d4e8845a14d94acfb34a0a1895a3138f:f3359f60e5284617ba6fd27c5c51fe8c:fcea7ec1c6c64b2ebc1b0f19ccbb4135",
  "placement": 17,
  "time_alive": 1260,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "d4e8845a14d94acfb34a0a1895a3138f:f3359f60e5284617ba6fd27c5c51fe8c:fcea7ec1c6c64b2ebc1b0f19ccbb4135",
  "placement": 13,
  "time_alive": 1335,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "d4e8845a14d94acfb34a0a1895a3138f:f3359f60e5284617ba6fd27c5c51fe8c:fcea7ec1c6c64b2ebc1b0f19ccbb4135",
  "placement": 10,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "d4e8845a14d94acfb34a0a1895a3138f:f3359f60e5284617ba6fd27c5c51fe8c:fcea7ec1c6c64b2ebc1b0f19ccbb4135",
  "placement": 11,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 23,
  "time_alive": 1021,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 8,
  "time_alive": 1372,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 6,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 17,
  "time_alive": 1299,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c:6c5c9ad52ed74beba7cceaac4b093da7:fb1c3744329c49bca8bdc5cb0468a040",
  "placement": 9,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 13,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 7,
  "time_alive": 1432,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 5,
  "time_alive": 1468,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 17,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 11,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "1dba682e6f6c4a43bf73b854e11d8a33:2e6cfe8107c54fa9a9c93a09569d18b8:d87d90ebe8804d6a9e5f7d4c692bcf73",
  "placement": 19,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "28b679034cf24da18192f176db61fa2a:ade9b5cb24784a3998d979435c98b68f:bee66f681444457f8f4b079aee505214",
  "placement": 15,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "28b679034cf24da18192f176db61fa2a:ade9b5cb24784a3998d979435c98b68f:bee66f681444457f8f4b079aee505214",
  "placement": 28,
  "time_alive": 801,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "28b679034cf24da18192f176db61fa2a:ade9b5cb24784a3998d979435c98b68f:bee66f681444457f8f4b079aee505214",
  "placement": 7,
  "time_alive": 1391,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "28b679034cf24da18192f176db61fa2a:ade9b5cb24784a3998d979435c98b68f:bee66f681444457f8f4b079aee505214",
  "placement": 19,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "28b679034cf24da18192f176db61fa2a:ade9b5cb24784a3998d979435c98b68f:bee66f681444457f8f4b079aee505214",
  "placement": 28,
  "time_alive": 235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "28b679034cf24da18192f176db61fa2a:ade9b5cb24784a3998d979435c98b68f:bee66f681444457f8f4b079aee505214",
  "placement": 20,
  "time_alive": 1095,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "37b27e2e60544e3e8a50de8f0a913287:c5b6433aa46e46b4967ab713ae9aea75:d3543cd7e80141bd840c68664ac5c157",
  "placement": 8,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "37b27e2e60544e3e8a50de8f0a913287:c5b6433aa46e46b4967ab713ae9aea75:d3543cd7e80141bd840c68664ac5c157",
  "placement": 9,
  "time_alive": 1377,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "37b27e2e60544e3e8a50de8f0a913287:c5b6433aa46e46b4967ab713ae9aea75:d3543cd7e80141bd840c68664ac5c157",
  "placement": 18,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "37b27e2e60544e3e8a50de8f0a913287:c5b6433aa46e46b4967ab713ae9aea75:d3543cd7e80141bd840c68664ac5c157",
  "placement": 15,
  "time_alive": 1333,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "37b27e2e60544e3e8a50de8f0a913287:c5b6433aa46e46b4967ab713ae9aea75:d3543cd7e80141bd840c68664ac5c157",
  "placement": 23,
  "time_alive": 648,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "37b27e2e60544e3e8a50de8f0a913287:c5b6433aa46e46b4967ab713ae9aea75:d3543cd7e80141bd840c68664ac5c157",
  "placement": 21,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 9,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 15,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 12,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 12,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 25,
  "time_alive": 441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "4ff014492756492e8cd0fce71c030a79:d2f00d4d262a41ae91203cb896423a57:f59581518f68499982f8495197fb2fd4",
  "placement": 26,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "51fd537f871e408da0639104acd4dc43:5cf520531cf84601b7a4f8d7a7606dc8:a85a9ebb40784223a9564ee5ace3ccd5",
  "placement": 16,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "51fd537f871e408da0639104acd4dc43:5cf520531cf84601b7a4f8d7a7606dc8:a85a9ebb40784223a9564ee5ace3ccd5",
  "placement": 22,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "51fd537f871e408da0639104acd4dc43:5cf520531cf84601b7a4f8d7a7606dc8:a85a9ebb40784223a9564ee5ace3ccd5",
  "placement": 14,
  "time_alive": 1298,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "51fd537f871e408da0639104acd4dc43:5cf520531cf84601b7a4f8d7a7606dc8:a85a9ebb40784223a9564ee5ace3ccd5",
  "placement": 22,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "51fd537f871e408da0639104acd4dc43:5cf520531cf84601b7a4f8d7a7606dc8:a85a9ebb40784223a9564ee5ace3ccd5",
  "placement": 3,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "51fd537f871e408da0639104acd4dc43:5cf520531cf84601b7a4f8d7a7606dc8:a85a9ebb40784223a9564ee5ace3ccd5",
  "placement": 24,
  "time_alive": 489,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 18,
  "time_alive": 1299,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 26,
  "time_alive": 822,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 16,
  "time_alive": 1283,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 10,
  "time_alive": 1346,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 13,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "3552d737745c4972bcc14e99dfba397b:71524d668f394f71894472e5e03fbc60:832e7712dc1b43b5b397de8f2a131146",
  "placement": 16,
  "time_alive": 1294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 6,
  "time_alive": 1434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 17,
  "time_alive": 1294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 21,
  "time_alive": 1113,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 18,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 22,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "42ac382ac6724055ade32e700a1ed9b3:69b4cba126544ab197eb785ad5db5b16:d32611a6073445029361494abf3f2e8f",
  "placement": 7,
  "time_alive": 1397,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 19,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 13,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 10,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 29,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 30,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "230722ce4d5549f495ca383e35be4985:3da224d249ef470789b8b31440d81eb6:dadb827915c34f69b75f774844b264f9",
  "placement": 15,
  "time_alive": 1298,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 27,
  "time_alive": 444,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 23,
  "time_alive": 942,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 31,
  "time_alive": 378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 30,
  "time_alive": 308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 27,
  "time_alive": 264,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "5c2f175e17db4e14936809de55704697:89ec4f00d3c2487f937bfada3293eb48:d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 13,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 28,
  "time_alive": 238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 16,
  "time_alive": 1304,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 11,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 26,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 9,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "1a93877a621e40a78eeb6533074c5a63:805b6624380b4fd9a5b171726c5f2971:9fdba3ca3bcf4179ae6813b52f07a16a",
  "placement": 28,
  "time_alive": 219,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "5e018aa2e8ac47198715ec83fedfbbe2:611b4c421c64425388024b751876dd12:762ad2315fed4b4c81efcf13ad03718e",
  "placement": 24,
  "time_alive": 928,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "5e018aa2e8ac47198715ec83fedfbbe2:611b4c421c64425388024b751876dd12:762ad2315fed4b4c81efcf13ad03718e",
  "placement": 20,
  "time_alive": 1216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "5e018aa2e8ac47198715ec83fedfbbe2:611b4c421c64425388024b751876dd12:762ad2315fed4b4c81efcf13ad03718e",
  "placement": 30,
  "time_alive": 483,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "5e018aa2e8ac47198715ec83fedfbbe2:611b4c421c64425388024b751876dd12:762ad2315fed4b4c81efcf13ad03718e",
  "placement": 27,
  "time_alive": 628,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "5e018aa2e8ac47198715ec83fedfbbe2:611b4c421c64425388024b751876dd12:762ad2315fed4b4c81efcf13ad03718e",
  "placement": 21,
  "time_alive": 1154,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "5e018aa2e8ac47198715ec83fedfbbe2:611b4c421c64425388024b751876dd12:762ad2315fed4b4c81efcf13ad03718e",
  "placement": 18,
  "time_alive": 1273,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "93298f7723af4c4cb463e8414096232e:a02c72c72b7e442e82753bc5efe27828:b746271d631a4254a11bd3c3286c6d72",
  "placement": 12,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "93298f7723af4c4cb463e8414096232e:a02c72c72b7e442e82753bc5efe27828:b746271d631a4254a11bd3c3286c6d72",
  "placement": 24,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "93298f7723af4c4cb463e8414096232e:a02c72c72b7e442e82753bc5efe27828:b746271d631a4254a11bd3c3286c6d72",
  "placement": 26,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "93298f7723af4c4cb463e8414096232e:a02c72c72b7e442e82753bc5efe27828:b746271d631a4254a11bd3c3286c6d72",
  "placement": 24,
  "time_alive": 1101,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "93298f7723af4c4cb463e8414096232e:a02c72c72b7e442e82753bc5efe27828:b746271d631a4254a11bd3c3286c6d72",
  "placement": 19,
  "time_alive": 1277,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "93298f7723af4c4cb463e8414096232e:a02c72c72b7e442e82753bc5efe27828:b746271d631a4254a11bd3c3286c6d72",
  "placement": 23,
  "time_alive": 532,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 14,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 30,
  "time_alive": 354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 32,
  "time_alive": 327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 31,
  "time_alive": 162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 31,
  "time_alive": 164,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "27c219d3704c478fbef700722c2623a2:3fbdf16d706f4b3884b252d660861346:55ec34cc481a4360ab69b32e8b71bd77",
  "placement": 29,
  "time_alive": 212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "4061419f7ca54ac0ae300ec0d4b9af23:6cc73471b9a34abfaf5731de3a5dc591:6d9462e29f0148639350b13379c475ff",
  "placement": 21,
  "time_alive": 1122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "4061419f7ca54ac0ae300ec0d4b9af23:6cc73471b9a34abfaf5731de3a5dc591:6d9462e29f0148639350b13379c475ff",
  "placement": 31,
  "time_alive": 284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "4061419f7ca54ac0ae300ec0d4b9af23:6cc73471b9a34abfaf5731de3a5dc591:6d9462e29f0148639350b13379c475ff",
  "placement": 13,
  "time_alive": 1302,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "4061419f7ca54ac0ae300ec0d4b9af23:6cc73471b9a34abfaf5731de3a5dc591:6d9462e29f0148639350b13379c475ff",
  "placement": 32,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "4061419f7ca54ac0ae300ec0d4b9af23:6cc73471b9a34abfaf5731de3a5dc591:6d9462e29f0148639350b13379c475ff",
  "placement": 26,
  "time_alive": 345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "4061419f7ca54ac0ae300ec0d4b9af23:6cc73471b9a34abfaf5731de3a5dc591:6d9462e29f0148639350b13379c475ff",
  "placement": 27,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455:661c58860bc94c2eafe4ecffc2305eec:7b814d19dbd5473da9b9a02dbccfe77c",
  "placement": 25,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455:661c58860bc94c2eafe4ecffc2305eec:7b814d19dbd5473da9b9a02dbccfe77c",
  "placement": 25,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455:661c58860bc94c2eafe4ecffc2305eec:7b814d19dbd5473da9b9a02dbccfe77c",
  "placement": 20,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455:661c58860bc94c2eafe4ecffc2305eec:7b814d19dbd5473da9b9a02dbccfe77c",
  "placement": 28,
  "time_alive": 404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455:661c58860bc94c2eafe4ecffc2305eec:7b814d19dbd5473da9b9a02dbccfe77c",
  "placement": 16,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455:661c58860bc94c2eafe4ecffc2305eec:7b814d19dbd5473da9b9a02dbccfe77c",
  "placement": 17,
  "time_alive": 1276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "24ac441995fc4630bafa10ba43ee3ac7:a0e15fbd44914e4d91dbd3bc606497bb:c75194cd16b8475da878a9757cf21836",
  "placement": 20,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "24ac441995fc4630bafa10ba43ee3ac7:a0e15fbd44914e4d91dbd3bc606497bb:c75194cd16b8475da878a9757cf21836",
  "placement": 29,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "24ac441995fc4630bafa10ba43ee3ac7:a0e15fbd44914e4d91dbd3bc606497bb:c75194cd16b8475da878a9757cf21836",
  "placement": 23,
  "time_alive": 1072,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "24ac441995fc4630bafa10ba43ee3ac7:a0e15fbd44914e4d91dbd3bc606497bb:c75194cd16b8475da878a9757cf21836",
  "placement": 23,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "24ac441995fc4630bafa10ba43ee3ac7:a0e15fbd44914e4d91dbd3bc606497bb:c75194cd16b8475da878a9757cf21836",
  "placement": 32,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20f2bfa8-acc9-4222-a9f6-389f67de0864",
  "team_id": "24ac441995fc4630bafa10ba43ee3ac7:a0e15fbd44914e4d91dbd3bc606497bb:c75194cd16b8475da878a9757cf21836",
  "placement": 30,
  "time_alive": 118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d79403a-f9fd-42c5-9622-17310b8e1de5",
  "team_id": "4cd6ece2d64e4f798273f9191913e32c:956ea841ae3747b39c27c0d545fb0f41:9b7329afbecb4bcd90f25428f61d7368",
  "placement": 26,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "611732ba-bb67-46c6-858f-92316d07a9d2",
  "team_id": "4cd6ece2d64e4f798273f9191913e32c:956ea841ae3747b39c27c0d545fb0f41:9b7329afbecb4bcd90f25428f61d7368",
  "placement": 27,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8344eff5-7c0f-40ef-8e31-a499555c5aea",
  "team_id": "4cd6ece2d64e4f798273f9191913e32c:956ea841ae3747b39c27c0d545fb0f41:9b7329afbecb4bcd90f25428f61d7368",
  "placement": 28,
  "time_alive": 555,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d265c04f-e0c6-4e0d-98ca-b08789d896f8",
  "team_id": "4cd6ece2d64e4f798273f9191913e32c:956ea841ae3747b39c27c0d545fb0f41:9b7329afbecb4bcd90f25428f61d7368",
  "placement": 25,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "74c008ab-61c7-401e-835c-23aca05fb41f",
  "team_id": "4cd6ece2d64e4f798273f9191913e32c:956ea841ae3747b39c27c0d545fb0f41:9b7329afbecb4bcd90f25428f61d7368",
  "placement": 29,
  "time_alive": 209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 3,
  "time_alive": 1485,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 2,
  "time_alive": 1506,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 7,
  "time_alive": 1437,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 1,
  "time_alive": 1502,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 2,
  "time_alive": 1477,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "234887ea510f41d48d59e3042f944c6e:e7a1ec8965a749689b51dbca97c07042:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 25,
  "time_alive": 579,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1506,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1519,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 2,
  "time_alive": 1502,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 5,
  "time_alive": 1419,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 19,
  "time_alive": 961,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1502,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 3,
  "time_alive": 1467,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 12,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 7,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 4,
  "time_alive": 1472,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 9,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 11,
  "time_alive": 1361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 3,
  "time_alive": 1509,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 23,
  "time_alive": 1109,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 3,
  "time_alive": 1460,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "0529e3157ade4a059b83468bd8712142:143ab2fd5f8d4c05bc8f9864c20851bf:4e47d907a47841a0a9b356f4f6445d91",
  "placement": 1,
  "time_alive": 1489,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 10,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 12,
  "time_alive": 1351,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 2,
  "time_alive": 1519,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 3,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 21,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "a09e637463a540979d9fb9679ded772a:df84fbb27b544a6f8981e0bf3c28aa1b:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 14,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 18,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 6,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 28,
  "time_alive": 699,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 17,
  "time_alive": 1269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 1,
  "time_alive": 1477,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:f1173e7a553343c8a478e388d4299266",
  "placement": 5,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 22,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 11,
  "time_alive": 1409,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 18,
  "time_alive": 1206,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 4,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:83e9f231efee418fb011134bb93c0a9a:85a3a7884e364e64a8430a141078059d",
  "placement": 6,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 7,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 15,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 6,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 12,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 12,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:560538af4d20401b9695784100eebaa5:e7f97e7c64834303ad533b5418b748cc",
  "placement": 3,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 8,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 25,
  "time_alive": 1044,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 5,
  "time_alive": 1478,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 4,
  "time_alive": 1390,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "76e34b2fbcd04060ab13e04209d46cd0:8b54573d4a6344409611a28554ee49de:d6806f1a25f948f99244c412b59402b6",
  "placement": 11,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "1553a85739a04ae5aea8c93614351847:6e7f228d7b32417eb72dfb6fa0803549:8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 16,
  "time_alive": 1277,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff",
  "team_id": "1553a85739a04ae5aea8c93614351847:6e7f228d7b32417eb72dfb6fa0803549:8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 17,
  "time_alive": 1291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b5106a1-2642-48c4-b7a1-3b9d9a31f974",
  "team_id": "1553a85739a04ae5aea8c93614351847:6e7f228d7b32417eb72dfb6fa0803549:8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 10,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c15edec-5403-4731-a341-64705d872827",
  "team_id": "1553a85739a04ae5aea8c93614351847:6e7f228d7b32417eb72dfb6fa0803549:8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 6,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "29e5bdb8-8629-4265-a41e-fc0536070cf1",
  "team_id": "1553a85739a04ae5aea8c93614351847:6e7f228d7b32417eb72dfb6fa0803549:8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 10,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "258bba08-2965-40f7-9583-ae002fd4ad8f",
  "team_id": "1553a85739a04ae5aea8c93614351847:6e7f228d7b32417eb72dfb6fa0803549:8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 7,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f85e049-a4ea-4738-a83f-6ff450c8f05e",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:d54bf8c45e87476eb6ea10f37924f962",
  "placement": 19,
  "time_alive": 1208,
  "elims": 2,
  "mode": 3
 }
]
    const modes = {1: 'solo', 2: 'duo', 3: 'trio', 4: 'squad'}
    gamesplayed.map((game) => {
      axios.post('http://localhost:3000/api/games_played', {game: {
        game_id: game.game_id,
        team_id: game.team_id,
        placement: game.placement,
        time_alive: game.time_alive,
        elims: game.elims,
        mode: modes[game.mode]
      }})
      .then(function(response) {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    })
    