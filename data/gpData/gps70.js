const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 21,
  "time_alive": 1383,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 24,
  "time_alive": 1338,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 44,
  "time_alive": 336,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "5ba637a299344ee29980d31fcf930e1e:f35842ac33ca42879e56f89bac9967a3",
  "placement": 7,
  "time_alive": 1486,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "5ba637a299344ee29980d31fcf930e1e:f35842ac33ca42879e56f89bac9967a3",
  "placement": 6,
  "time_alive": 1481,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "5ba637a299344ee29980d31fcf930e1e:f35842ac33ca42879e56f89bac9967a3",
  "placement": 30,
  "time_alive": 1162,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "5ba637a299344ee29980d31fcf930e1e:f35842ac33ca42879e56f89bac9967a3",
  "placement": 49,
  "time_alive": 149,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "5ba637a299344ee29980d31fcf930e1e:f35842ac33ca42879e56f89bac9967a3",
  "placement": 25,
  "time_alive": 1260,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "5ba637a299344ee29980d31fcf930e1e:f35842ac33ca42879e56f89bac9967a3",
  "placement": 5,
  "time_alive": 1495,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 32,
  "time_alive": 1136,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 5,
  "time_alive": 1489,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 22,
  "time_alive": 1364,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 9,
  "time_alive": 1471,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 11,
  "time_alive": 1464,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 48,
  "time_alive": 262,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 6,
  "time_alive": 1488,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 9,
  "time_alive": 1455,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 23,
  "time_alive": 1363,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 45,
  "time_alive": 238,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 31,
  "time_alive": 1110,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 12,
  "time_alive": 1403,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "2dfc71015e5349ee938b57a94d205587:f9f799677d8a47668f32ae99f38866e0",
  "placement": 21,
  "time_alive": 1374,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "2dfc71015e5349ee938b57a94d205587:f9f799677d8a47668f32ae99f38866e0",
  "placement": 4,
  "time_alive": 1499,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "2dfc71015e5349ee938b57a94d205587:f9f799677d8a47668f32ae99f38866e0",
  "placement": 25,
  "time_alive": 1344,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "2dfc71015e5349ee938b57a94d205587:f9f799677d8a47668f32ae99f38866e0",
  "placement": 7,
  "time_alive": 1487,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "2dfc71015e5349ee938b57a94d205587:f9f799677d8a47668f32ae99f38866e0",
  "placement": 36,
  "time_alive": 637,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "2dfc71015e5349ee938b57a94d205587:f9f799677d8a47668f32ae99f38866e0",
  "placement": 20,
  "time_alive": 1353,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c",
  "placement": 9,
  "time_alive": 1475,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c",
  "placement": 26,
  "time_alive": 1184,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c",
  "placement": 8,
  "time_alive": 1440,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c",
  "placement": 4,
  "time_alive": 1520,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c",
  "placement": 27,
  "time_alive": 1155,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c",
  "placement": 38,
  "time_alive": 621,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:ce85174826c04d4f90d278800dafc68b",
  "placement": 14,
  "time_alive": 1437,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:ce85174826c04d4f90d278800dafc68b",
  "placement": 30,
  "time_alive": 1125,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:ce85174826c04d4f90d278800dafc68b",
  "placement": 21,
  "time_alive": 1367,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:ce85174826c04d4f90d278800dafc68b",
  "placement": 6,
  "time_alive": 1493,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:ce85174826c04d4f90d278800dafc68b",
  "placement": 22,
  "time_alive": 1357,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:ce85174826c04d4f90d278800dafc68b",
  "placement": 33,
  "time_alive": 1124,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "a55f52a33c044a548f3925f1cd373a3e:c55f92adc30347dab903c1ec4c7fa3d3",
  "placement": 10,
  "time_alive": 1465,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "a55f52a33c044a548f3925f1cd373a3e:c55f92adc30347dab903c1ec4c7fa3d3",
  "placement": 20,
  "time_alive": 1386,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "a55f52a33c044a548f3925f1cd373a3e:c55f92adc30347dab903c1ec4c7fa3d3",
  "placement": 12,
  "time_alive": 1412,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "a55f52a33c044a548f3925f1cd373a3e:c55f92adc30347dab903c1ec4c7fa3d3",
  "placement": 26,
  "time_alive": 1260,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "a55f52a33c044a548f3925f1cd373a3e:c55f92adc30347dab903c1ec4c7fa3d3",
  "placement": 30,
  "time_alive": 1125,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "a55f52a33c044a548f3925f1cd373a3e:c55f92adc30347dab903c1ec4c7fa3d3",
  "placement": 7,
  "time_alive": 1443,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 39,
  "time_alive": 778,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 11,
  "time_alive": 1448,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 34,
  "time_alive": 1149,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 13,
  "time_alive": 1442,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 26,
  "time_alive": 1194,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 11,
  "time_alive": 1405,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 41,
  "time_alive": 629,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 36,
  "time_alive": 866,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 6,
  "time_alive": 1456,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 18,
  "time_alive": 1406,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 35,
  "time_alive": 775,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 41,
  "time_alive": 369,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "822c6a5a12ff4148b358da33a9569313:c163c59e6ed24df59f833294d2ad2c0e",
  "placement": 34,
  "time_alive": 1075,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "822c6a5a12ff4148b358da33a9569313:c163c59e6ed24df59f833294d2ad2c0e",
  "placement": 32,
  "time_alive": 1018,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "822c6a5a12ff4148b358da33a9569313:c163c59e6ed24df59f833294d2ad2c0e",
  "placement": 7,
  "time_alive": 1450,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "822c6a5a12ff4148b358da33a9569313:c163c59e6ed24df59f833294d2ad2c0e",
  "placement": 14,
  "time_alive": 1428,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "822c6a5a12ff4148b358da33a9569313:c163c59e6ed24df59f833294d2ad2c0e",
  "placement": 14,
  "time_alive": 1440,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "822c6a5a12ff4148b358da33a9569313:c163c59e6ed24df59f833294d2ad2c0e",
  "placement": 25,
  "time_alive": 1315,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "2b3da27c62d14887bd6daa865df33487:9fca471401a743cbbb71ea31dc252473",
  "placement": 29,
  "time_alive": 1163,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "2b3da27c62d14887bd6daa865df33487:9fca471401a743cbbb71ea31dc252473",
  "placement": 45,
  "time_alive": 420,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "2b3da27c62d14887bd6daa865df33487:9fca471401a743cbbb71ea31dc252473",
  "placement": 16,
  "time_alive": 1396,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "2b3da27c62d14887bd6daa865df33487:9fca471401a743cbbb71ea31dc252473",
  "placement": 22,
  "time_alive": 1379,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "2b3da27c62d14887bd6daa865df33487:9fca471401a743cbbb71ea31dc252473",
  "placement": 7,
  "time_alive": 1493,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "2b3da27c62d14887bd6daa865df33487:9fca471401a743cbbb71ea31dc252473",
  "placement": 17,
  "time_alive": 1361,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "3524aa3a4b614323aec1c03bbacf4f8c:e90dfc38f97f41259bd34e01a210e884",
  "placement": 31,
  "time_alive": 1144,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "3524aa3a4b614323aec1c03bbacf4f8c:e90dfc38f97f41259bd34e01a210e884",
  "placement": 46,
  "time_alive": 302,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "3524aa3a4b614323aec1c03bbacf4f8c:e90dfc38f97f41259bd34e01a210e884",
  "placement": 43,
  "time_alive": 674,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "3524aa3a4b614323aec1c03bbacf4f8c:e90dfc38f97f41259bd34e01a210e884",
  "placement": 11,
  "time_alive": 1465,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "3524aa3a4b614323aec1c03bbacf4f8c:e90dfc38f97f41259bd34e01a210e884",
  "placement": 17,
  "time_alive": 1412,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "3524aa3a4b614323aec1c03bbacf4f8c:e90dfc38f97f41259bd34e01a210e884",
  "placement": 19,
  "time_alive": 1354,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 44,
  "time_alive": 275,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 48,
  "time_alive": 256,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 48,
  "time_alive": 204,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 46,
  "time_alive": 222,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 15,
  "time_alive": 1435,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 4,
  "time_alive": 1498,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:913bbd393717454eb4dd1cecf3fc6e02",
  "placement": 46,
  "time_alive": 218,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:913bbd393717454eb4dd1cecf3fc6e02",
  "placement": 40,
  "time_alive": 640,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:913bbd393717454eb4dd1cecf3fc6e02",
  "placement": 39,
  "time_alive": 869,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:913bbd393717454eb4dd1cecf3fc6e02",
  "placement": 24,
  "time_alive": 1314,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:913bbd393717454eb4dd1cecf3fc6e02",
  "placement": 8,
  "time_alive": 1475,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:913bbd393717454eb4dd1cecf3fc6e02",
  "placement": 16,
  "time_alive": 1374,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "70142717f92e4b86b123e082dc57be53:c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 20,
  "time_alive": 1382,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "70142717f92e4b86b123e082dc57be53:c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 21,
  "time_alive": 1369,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "70142717f92e4b86b123e082dc57be53:c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 19,
  "time_alive": 1369,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "70142717f92e4b86b123e082dc57be53:c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 20,
  "time_alive": 1386,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "70142717f92e4b86b123e082dc57be53:c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 13,
  "time_alive": 1448,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "70142717f92e4b86b123e082dc57be53:c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 21,
  "time_alive": 1326,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 15,
  "time_alive": 1421,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 7,
  "time_alive": 1469,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 24,
  "time_alive": 1349,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 37,
  "time_alive": 778,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 20,
  "time_alive": 1387,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 45,
  "time_alive": 307,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 43,
  "time_alive": 280,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 8,
  "time_alive": 1457,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 28,
  "time_alive": 1192,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 16,
  "time_alive": 1416,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 34,
  "time_alive": 874,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 46,
  "time_alive": 302,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e:fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 49,
  "time_alive": 147,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e:fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 10,
  "time_alive": 1450,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e:fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 11,
  "time_alive": 1432,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e:fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 29,
  "time_alive": 1165,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e:fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 45,
  "time_alive": 228,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e:fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 39,
  "time_alive": 579,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 40,
  "time_alive": 678,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 44,
  "time_alive": 487,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 2,
  "time_alive": 1479,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 44,
  "time_alive": 256,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 44,
  "time_alive": 300,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 30,
  "time_alive": 1191,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 48,
  "time_alive": 175,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 12,
  "time_alive": 1448,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 44,
  "time_alive": 444,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 23,
  "time_alive": 1330,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 23,
  "time_alive": 1356,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 42,
  "time_alive": 363,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "04fc53da8234493aa4541a4eac90cab6:deba55791903440889f2eba6a32a3d80",
  "placement": 35,
  "time_alive": 1073,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "04fc53da8234493aa4541a4eac90cab6:deba55791903440889f2eba6a32a3d80",
  "placement": 35,
  "time_alive": 884,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "04fc53da8234493aa4541a4eac90cab6:deba55791903440889f2eba6a32a3d80",
  "placement": 32,
  "time_alive": 1155,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "04fc53da8234493aa4541a4eac90cab6:deba55791903440889f2eba6a32a3d80",
  "placement": 10,
  "time_alive": 1468,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "04fc53da8234493aa4541a4eac90cab6:deba55791903440889f2eba6a32a3d80",
  "placement": 21,
  "time_alive": 1372,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "04fc53da8234493aa4541a4eac90cab6:deba55791903440889f2eba6a32a3d80",
  "placement": 36,
  "time_alive": 717,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 25,
  "time_alive": 1342,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 22,
  "time_alive": 1368,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 17,
  "time_alive": 1391,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 25,
  "time_alive": 1262,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 38,
  "time_alive": 562,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 14,
  "time_alive": 1397,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 38,
  "time_alive": 804,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 31,
  "time_alive": 1073,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 27,
  "time_alive": 1232,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 33,
  "time_alive": 1103,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 33,
  "time_alive": 886,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 8,
  "time_alive": 1438,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:609bd47a67884f8e988cef95c8facb06",
  "placement": 37,
  "time_alive": 842,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:609bd47a67884f8e988cef95c8facb06",
  "placement": 17,
  "time_alive": 1402,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:609bd47a67884f8e988cef95c8facb06",
  "placement": 26,
  "time_alive": 1281,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:609bd47a67884f8e988cef95c8facb06",
  "placement": 38,
  "time_alive": 722,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:609bd47a67884f8e988cef95c8facb06",
  "placement": 37,
  "time_alive": 633,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:609bd47a67884f8e988cef95c8facb06",
  "placement": 37,
  "time_alive": 694,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "bce9e87d7fa344d99cd9c9d8e37c359c:cac03742e18c4fca999cb638e4f6c92e",
  "placement": 50,
  "time_alive": 113,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "bce9e87d7fa344d99cd9c9d8e37c359c:cac03742e18c4fca999cb638e4f6c92e",
  "placement": 14,
  "time_alive": 1439,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "bce9e87d7fa344d99cd9c9d8e37c359c:cac03742e18c4fca999cb638e4f6c92e",
  "placement": 50,
  "time_alive": 144,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "bce9e87d7fa344d99cd9c9d8e37c359c:cac03742e18c4fca999cb638e4f6c92e",
  "placement": 27,
  "time_alive": 1217,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "bce9e87d7fa344d99cd9c9d8e37c359c:cac03742e18c4fca999cb638e4f6c92e",
  "placement": 50,
  "time_alive": 102,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "bce9e87d7fa344d99cd9c9d8e37c359c:cac03742e18c4fca999cb638e4f6c92e",
  "placement": 34,
  "time_alive": 1099,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 11,
  "time_alive": 1464,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 41,
  "time_alive": 639,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 38,
  "time_alive": 871,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 19,
  "time_alive": 1394,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 42,
  "time_alive": 326,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 28,
  "time_alive": 1214,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 28,
  "time_alive": 1176,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 49,
  "time_alive": 244,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 47,
  "time_alive": 232,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 30,
  "time_alive": 1148,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 46,
  "time_alive": 207,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 26,
  "time_alive": 1310,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "6b439d84a2174635a88af04766a600bb:9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 36,
  "time_alive": 983,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "6b439d84a2174635a88af04766a600bb:9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 23,
  "time_alive": 1325,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "6b439d84a2174635a88af04766a600bb:9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 20,
  "time_alive": 1368,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "6b439d84a2174635a88af04766a600bb:9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 34,
  "time_alive": 990,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "6b439d84a2174635a88af04766a600bb:9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 41,
  "time_alive": 329,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "6b439d84a2174635a88af04766a600bb:9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 31,
  "time_alive": 1174,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 27,
  "time_alive": 1306,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 39,
  "time_alive": 642,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 33,
  "time_alive": 1152,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 12,
  "time_alive": 1455,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 28,
  "time_alive": 1150,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 27,
  "time_alive": 1218,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 17,
  "time_alive": 1408,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 25,
  "time_alive": 1257,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 37,
  "time_alive": 891,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 28,
  "time_alive": 1197,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 40,
  "time_alive": 429,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 43,
  "time_alive": 347,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "2a01c1d278984e77b66c030c93745b82:682c34482d0a495ca90eb47412acd1d5",
  "placement": 42,
  "time_alive": 450,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "2a01c1d278984e77b66c030c93745b82:682c34482d0a495ca90eb47412acd1d5",
  "placement": 27,
  "time_alive": 1174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "2a01c1d278984e77b66c030c93745b82:682c34482d0a495ca90eb47412acd1d5",
  "placement": 29,
  "time_alive": 1164,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "2a01c1d278984e77b66c030c93745b82:682c34482d0a495ca90eb47412acd1d5",
  "placement": 47,
  "time_alive": 203,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "2a01c1d278984e77b66c030c93745b82:682c34482d0a495ca90eb47412acd1d5",
  "placement": 29,
  "time_alive": 1147,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "2a01c1d278984e77b66c030c93745b82:682c34482d0a495ca90eb47412acd1d5",
  "placement": 22,
  "time_alive": 1323,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "3acad0c155e841bd9441a95e984733cd:5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 24,
  "time_alive": 1357,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "3acad0c155e841bd9441a95e984733cd:5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 37,
  "time_alive": 840,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "3acad0c155e841bd9441a95e984733cd:5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 31,
  "time_alive": 1160,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "3acad0c155e841bd9441a95e984733cd:5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 36,
  "time_alive": 915,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "3acad0c155e841bd9441a95e984733cd:5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 18,
  "time_alive": 1395,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "3acad0c155e841bd9441a95e984733cd:5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 29,
  "time_alive": 1205,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 45,
  "time_alive": 253,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 42,
  "time_alive": 619,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 45,
  "time_alive": 321,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 40,
  "time_alive": 379,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 48,
  "time_alive": 126,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 47,
  "time_alive": 271,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "5b804cf9aec94180821570a64c165cf4:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 33,
  "time_alive": 1122,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "5b804cf9aec94180821570a64c165cf4:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 33,
  "time_alive": 952,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "5b804cf9aec94180821570a64c165cf4:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 49,
  "time_alive": 200,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "5b804cf9aec94180821570a64c165cf4:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 43,
  "time_alive": 289,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "5b804cf9aec94180821570a64c165cf4:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 49,
  "time_alive": 125,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "5b804cf9aec94180821570a64c165cf4:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 32,
  "time_alive": 1142,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21:657905a7c4c14055b4a6804a5af0c99e",
  "placement": 47,
  "time_alive": 213,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21:657905a7c4c14055b4a6804a5af0c99e",
  "placement": 43,
  "time_alive": 510,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21:657905a7c4c14055b4a6804a5af0c99e",
  "placement": 35,
  "time_alive": 1149,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21:657905a7c4c14055b4a6804a5af0c99e",
  "placement": 41,
  "time_alive": 340,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21:657905a7c4c14055b4a6804a5af0c99e",
  "placement": 39,
  "time_alive": 435,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21:657905a7c4c14055b4a6804a5af0c99e",
  "placement": 35,
  "time_alive": 898,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "ae227af9d7284badba2d066ed60dece8:c3005bbd9be54748a9392e5db0e8e139",
  "placement": 30,
  "time_alive": 1153,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "ae227af9d7284badba2d066ed60dece8:c3005bbd9be54748a9392e5db0e8e139",
  "placement": 38,
  "time_alive": 780,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "ae227af9d7284badba2d066ed60dece8:c3005bbd9be54748a9392e5db0e8e139",
  "placement": 36,
  "time_alive": 1111,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "ae227af9d7284badba2d066ed60dece8:c3005bbd9be54748a9392e5db0e8e139",
  "placement": 48,
  "time_alive": 171,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "ae227af9d7284badba2d066ed60dece8:c3005bbd9be54748a9392e5db0e8e139",
  "placement": 43,
  "time_alive": 323,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "ae227af9d7284badba2d066ed60dece8:c3005bbd9be54748a9392e5db0e8e139",
  "placement": 50,
  "time_alive": 175,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 15,
  "time_alive": 1387,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 6,
  "time_alive": 1448,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 12,
  "time_alive": 1373,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 49,
  "time_alive": 179,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 19,
  "time_alive": 1382,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 3,
  "time_alive": 1498,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 23,
  "time_alive": 1328,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 5,
  "time_alive": 1432,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 5,
  "time_alive": 1461,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 15,
  "time_alive": 1362,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 1,
  "time_alive": 1488,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 42,
  "time_alive": 703,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 40,
  "time_alive": 831,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 39,
  "time_alive": 620,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 13,
  "time_alive": 1391,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 3,
  "time_alive": 1445,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 49,
  "time_alive": 146,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 21,
  "time_alive": 1294,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 4,
  "time_alive": 1459,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 3,
  "time_alive": 1456,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 1,
  "time_alive": 1519,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 24,
  "time_alive": 1289,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 9,
  "time_alive": 1436,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "341c179499594c18924bb1e421347321:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 14,
  "time_alive": 1347,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 13,
  "time_alive": 1394,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 25,
  "time_alive": 1203,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 42,
  "time_alive": 816,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1478,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 17,
  "time_alive": 1392,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 6,
  "time_alive": 1458,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 42,
  "time_alive": 589,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 4,
  "time_alive": 1435,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 6,
  "time_alive": 1451,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 47,
  "time_alive": 212,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 6,
  "time_alive": 1423,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 31,
  "time_alive": 1148,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 21,
  "time_alive": 1356,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 16,
  "time_alive": 1345,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 3,
  "time_alive": 1487,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 1,
  "time_alive": 1450,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 28,
  "time_alive": 1171,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 4,
  "time_alive": 1465,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 5,
  "time_alive": 1444,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 5,
  "time_alive": 1433,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 4,
  "time_alive": 1495,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 28,
  "time_alive": 1183,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 11,
  "time_alive": 1400,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 22,
  "time_alive": 1275,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 2,
  "time_alive": 1513,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1445,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 13,
  "time_alive": 1368,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 27,
  "time_alive": 1224,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 39,
  "time_alive": 841,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 15,
  "time_alive": 1361,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1425,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 35,
  "time_alive": 953,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 16,
  "time_alive": 1375,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 1,
  "time_alive": 1537,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 34,
  "time_alive": 1144,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 23,
  "time_alive": 1308,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 28,
  "time_alive": 1313,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 21,
  "time_alive": 1303,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 2,
  "time_alive": 1492,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 10,
  "time_alive": 1368,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 3,
  "time_alive": 1473,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 34,
  "time_alive": 1083,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 41,
  "time_alive": 828,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 39,
  "time_alive": 855,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 42,
  "time_alive": 658,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 1,
  "time_alive": 1499,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 26,
  "time_alive": 1217,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "209917540fbf4740a913898eec12b86b:d8f0af8cfed84359bdcbe8177d8692e3",
  "placement": 9,
  "time_alive": 1369,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 4,
  "time_alive": 1466,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 9,
  "time_alive": 1413,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 9,
  "time_alive": 1400,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 40,
  "time_alive": 845,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 12,
  "time_alive": 1415,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 40,
  "time_alive": 611,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 22,
  "time_alive": 1345,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "47f70d3f350e4fdabc25803460bfee81:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 48,
  "time_alive": 164,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 20,
  "time_alive": 1356,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 23,
  "time_alive": 1218,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 17,
  "time_alive": 1339,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 25,
  "time_alive": 1291,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 2,
  "time_alive": 1519,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 33,
  "time_alive": 994,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 4,
  "time_alive": 1477,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 13,
  "time_alive": 1353,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 30,
  "time_alive": 1167,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 42,
  "time_alive": 408,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 8,
  "time_alive": 1404,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 11,
  "time_alive": 1403,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 7,
  "time_alive": 1449,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 12,
  "time_alive": 1409,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 12,
  "time_alive": 1399,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 30,
  "time_alive": 1145,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 41,
  "time_alive": 810,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 50,
  "time_alive": 93,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 3,
  "time_alive": 1477,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 38,
  "time_alive": 856,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 11,
  "time_alive": 1419,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 26,
  "time_alive": 1241,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 6,
  "time_alive": 1460,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 2,
  "time_alive": 1450,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 25,
  "time_alive": 1263,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 10,
  "time_alive": 1412,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 7,
  "time_alive": 1411,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 21,
  "time_alive": 1323,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 3,
  "time_alive": 1509,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 11,
  "time_alive": 1424,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 17,
  "time_alive": 1375,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 25,
  "time_alive": 1243,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 17,
  "time_alive": 1368,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 13,
  "time_alive": 1393,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 16,
  "time_alive": 1345,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 19,
  "time_alive": 1332,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 9,
  "time_alive": 1420,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 37,
  "time_alive": 847,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 39,
  "time_alive": 853,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 34,
  "time_alive": 1052,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 7,
  "time_alive": 1448,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 45,
  "time_alive": 233,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 20,
  "time_alive": 1300,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 6,
  "time_alive": 1458,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 4,
  "time_alive": 1484,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 30,
  "time_alive": 1170,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 40,
  "time_alive": 645,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "c07f32024afb49ed9ab87d8c72d32202:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 42,
  "time_alive": 790,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "c07f32024afb49ed9ab87d8c72d32202:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 2,
  "time_alive": 1537,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "c07f32024afb49ed9ab87d8c72d32202:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 48,
  "time_alive": 359,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "c07f32024afb49ed9ab87d8c72d32202:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 35,
  "time_alive": 930,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "c07f32024afb49ed9ab87d8c72d32202:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 38,
  "time_alive": 641,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "c07f32024afb49ed9ab87d8c72d32202:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 1,
  "time_alive": 1492,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "c07f32024afb49ed9ab87d8c72d32202:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 11,
  "time_alive": 1357,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 1,
  "time_alive": 1513,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 35,
  "time_alive": 998,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 26,
  "time_alive": 1249,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 28,
  "time_alive": 1190,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 8,
  "time_alive": 1433,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 19,
  "time_alive": 1329,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 5,
  "time_alive": 1463,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 24,
  "time_alive": 1254,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 10,
  "time_alive": 1405,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 17,
  "time_alive": 1354,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 30,
  "time_alive": 1172,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 15,
  "time_alive": 1362,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 38,
  "time_alive": 848,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 22,
  "time_alive": 1299,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 7,
  "time_alive": 1456,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 19,
  "time_alive": 1310,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 8,
  "time_alive": 1446,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 12,
  "time_alive": 1406,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 14,
  "time_alive": 1349,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 18,
  "time_alive": 1348,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 18,
  "time_alive": 1391,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 8,
  "time_alive": 1439,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 28,
  "time_alive": 1182,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:e1983d4364b443febd24a698f021e8d9",
  "placement": 20,
  "time_alive": 1306,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 35,
  "time_alive": 974,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 39,
  "time_alive": 754,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 22,
  "time_alive": 1260,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 13,
  "time_alive": 1389,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 5,
  "time_alive": 1461,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 7,
  "time_alive": 1453,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 32,
  "time_alive": 1005,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 7,
  "time_alive": 1408,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 34,
  "time_alive": 979,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 26,
  "time_alive": 1200,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 43,
  "time_alive": 762,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 2,
  "time_alive": 1478,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 30,
  "time_alive": 1147,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 9,
  "time_alive": 1437,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 31,
  "time_alive": 1014,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 45,
  "time_alive": 313,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 26,
  "time_alive": 1249,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 3,
  "time_alive": 1497,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 19,
  "time_alive": 1325,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 10,
  "time_alive": 1404,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 36,
  "time_alive": 889,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 23,
  "time_alive": 1296,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 41,
  "time_alive": 609,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 17,
  "time_alive": 1328,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 14,
  "time_alive": 1393,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 37,
  "time_alive": 881,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 32,
  "time_alive": 1166,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 4,
  "time_alive": 1440,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 50,
  "time_alive": 188,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 25,
  "time_alive": 1252,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 33,
  "time_alive": 1001,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 12,
  "time_alive": 1355,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 9,
  "time_alive": 1409,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 30,
  "time_alive": 1169,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 21,
  "time_alive": 1268,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 36,
  "time_alive": 946,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 13,
  "time_alive": 1405,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 10,
  "time_alive": 1436,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 35,
  "time_alive": 910,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711",
  "placement": 41,
  "time_alive": 602,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 31,
  "time_alive": 1164,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 48,
  "time_alive": 164,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 11,
  "time_alive": 1387,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 48,
  "time_alive": 310,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 43,
  "time_alive": 493,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 5,
  "time_alive": 1480,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 29,
  "time_alive": 1174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 6,
  "time_alive": 1410,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 23,
  "time_alive": 1325,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 36,
  "time_alive": 970,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 40,
  "time_alive": 854,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 7,
  "time_alive": 1424,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 37,
  "time_alive": 874,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 20,
  "time_alive": 1306,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 8,
  "time_alive": 1438,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "980acb394091440799af3c2378590ba7:acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 32,
  "time_alive": 1120,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 27,
  "time_alive": 1174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 41,
  "time_alive": 528,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 29,
  "time_alive": 1192,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 37,
  "time_alive": 865,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 23,
  "time_alive": 1345,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 2,
  "time_alive": 1499,
  "elims": 11,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 40,
  "time_alive": 849,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 18,
  "time_alive": 1316,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:95b8c65a16ec4322824da21fe511371a",
  "placement": 45,
  "time_alive": 317,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:95b8c65a16ec4322824da21fe511371a",
  "placement": 40,
  "time_alive": 561,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1488,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:95b8c65a16ec4322824da21fe511371a",
  "placement": 22,
  "time_alive": 1318,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:95b8c65a16ec4322824da21fe511371a",
  "placement": 25,
  "time_alive": 1339,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:95b8c65a16ec4322824da21fe511371a",
  "placement": 38,
  "time_alive": 853,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:95b8c65a16ec4322824da21fe511371a",
  "placement": 46,
  "time_alive": 220,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 11,
  "time_alive": 1401,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 16,
  "time_alive": 1359,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 28,
  "time_alive": 1221,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 32,
  "time_alive": 1110,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 15,
  "time_alive": 1393,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 45,
  "time_alive": 319,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 46,
  "time_alive": 280,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 49,
  "time_alive": 154,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 29,
  "time_alive": 1168,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 44,
  "time_alive": 303,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 45,
  "time_alive": 660,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 9,
  "time_alive": 1406,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 14,
  "time_alive": 1395,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 14,
  "time_alive": 1390,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 19,
  "time_alive": 1364,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 36,
  "time_alive": 916,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 46,
  "time_alive": 285,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 5,
  "time_alive": 1459,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 23,
  "time_alive": 1258,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 47,
  "time_alive": 396,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 26,
  "time_alive": 1328,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 34,
  "time_alive": 945,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 34,
  "time_alive": 961,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "41ecfd92a1df47e2b203a87a25246417:6af53b8857034085baa07e46db2948b4",
  "placement": 16,
  "time_alive": 1336,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 18,
  "time_alive": 1367,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 8,
  "time_alive": 1423,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 37,
  "time_alive": 1126,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 33,
  "time_alive": 1063,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 20,
  "time_alive": 1365,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 17,
  "time_alive": 1343,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 27,
  "time_alive": 1196,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 26,
  "time_alive": 1233,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 24,
  "time_alive": 1319,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 33,
  "time_alive": 1115,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 15,
  "time_alive": 1347,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 14,
  "time_alive": 1384,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 10,
  "time_alive": 1420,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 27,
  "time_alive": 1195,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 49,
  "time_alive": 124,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 44,
  "time_alive": 520,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 38,
  "time_alive": 867,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 11,
  "time_alive": 1409,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 10,
  "time_alive": 1397,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 46,
  "time_alive": 460,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 31,
  "time_alive": 1140,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 36,
  "time_alive": 855,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 21,
  "time_alive": 1349,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "6836c1ada1494eefa005aac3604892d3:9fca471401a743cbbb71ea31dc252473",
  "placement": 42,
  "time_alive": 578,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 32,
  "time_alive": 1065,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 29,
  "time_alive": 1185,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 35,
  "time_alive": 1134,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 8,
  "time_alive": 1420,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 29,
  "time_alive": 1156,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 42,
  "time_alive": 370,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 15,
  "time_alive": 1379,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:d84b415adc684941b0edb6825bd607f1",
  "placement": 21,
  "time_alive": 1297,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 19,
  "time_alive": 1357,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 31,
  "time_alive": 1157,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 18,
  "time_alive": 1331,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 29,
  "time_alive": 1172,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 45,
  "time_alive": 273,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 13,
  "time_alive": 1406,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 18,
  "time_alive": 1372,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "bd5c68b6315f4aa2936b10587060a944:ce85174826c04d4f90d278800dafc68b",
  "placement": 23,
  "time_alive": 1255,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 12,
  "time_alive": 1400,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 28,
  "time_alive": 1186,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 36,
  "time_alive": 1133,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 45,
  "time_alive": 495,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 41,
  "time_alive": 674,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 32,
  "time_alive": 1004,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 25,
  "time_alive": 1229,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 31,
  "time_alive": 1129,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 40,
  "time_alive": 833,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 49,
  "time_alive": 153,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 38,
  "time_alive": 873,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 44,
  "time_alive": 520,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 16,
  "time_alive": 1393,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 18,
  "time_alive": 1342,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 45,
  "time_alive": 285,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487",
  "placement": 39,
  "time_alive": 681,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 43,
  "time_alive": 776,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 18,
  "time_alive": 1326,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 25,
  "time_alive": 1251,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 12,
  "time_alive": 1401,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 48,
  "time_alive": 201,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 48,
  "time_alive": 161,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 37,
  "time_alive": 860,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb",
  "placement": 29,
  "time_alive": 1150,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 44,
  "time_alive": 770,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 24,
  "time_alive": 1204,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 27,
  "time_alive": 1239,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 34,
  "time_alive": 1020,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 46,
  "time_alive": 262,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 35,
  "time_alive": 902,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 14,
  "time_alive": 1386,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 50,
  "time_alive": 145,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 21,
  "time_alive": 1344,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 43,
  "time_alive": 309,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 49,
  "time_alive": 286,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 6,
  "time_alive": 1429,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 24,
  "time_alive": 1342,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 31,
  "time_alive": 1004,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 36,
  "time_alive": 868,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:c6cab05d382c4befaf51fd583a64836a",
  "placement": 28,
  "time_alive": 1153,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 36,
  "time_alive": 971,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 27,
  "time_alive": 1187,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 33,
  "time_alive": 1146,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 26,
  "time_alive": 1230,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 22,
  "time_alive": 1346,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 41,
  "time_alive": 547,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 43,
  "time_alive": 421,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 15,
  "time_alive": 1337,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 39,
  "time_alive": 853,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 32,
  "time_alive": 1135,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 46,
  "time_alive": 448,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 17,
  "time_alive": 1354,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 44,
  "time_alive": 342,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 44,
  "time_alive": 324,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 16,
  "time_alive": 1375,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:f11366bc03f2496899f7511de25f4557",
  "placement": 38,
  "time_alive": 696,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 47,
  "time_alive": 285,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 46,
  "time_alive": 228,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 47,
  "time_alive": 405,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 41,
  "time_alive": 826,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 47,
  "time_alive": 247,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 47,
  "time_alive": 258,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 48,
  "time_alive": 125,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 8,
  "time_alive": 1387,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 33,
  "time_alive": 1006,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 20,
  "time_alive": 1300,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 24,
  "time_alive": 1251,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 24,
  "time_alive": 1307,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 32,
  "time_alive": 1114,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 30,
  "time_alive": 1096,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 20,
  "time_alive": 1364,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "c3999c31dde04b3baacae2c6fd8cb8d7:e7018526b68e4132a536748c9ef20641",
  "placement": 43,
  "time_alive": 571,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 22,
  "time_alive": 1339,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 22,
  "time_alive": 1251,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 44,
  "time_alive": 684,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 30,
  "time_alive": 1156,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 49,
  "time_alive": 195,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 29,
  "time_alive": 1115,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 24,
  "time_alive": 1255,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "0269497009fe4320b8d130cdbd5e0aa1:208d8dffd91040b9a501d38219fc7c0c",
  "placement": 33,
  "time_alive": 1098,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 37,
  "time_alive": 934,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 38,
  "time_alive": 801,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 39,
  "time_alive": 860,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 20,
  "time_alive": 1327,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 34,
  "time_alive": 960,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 43,
  "time_alive": 370,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 50,
  "time_alive": 114,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:f9f799677d8a47668f32ae99f38866e0",
  "placement": 37,
  "time_alive": 875,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 19,
  "time_alive": 1301,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 50,
  "time_alive": 174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 35,
  "time_alive": 999,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 27,
  "time_alive": 1323,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 49,
  "time_alive": 86,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 44,
  "time_alive": 393,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9",
  "placement": 27,
  "time_alive": 1156,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "50e993cb-3f08-4b55-8277-bf72f8dc0f08",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 48,
  "time_alive": 266,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2d655c69-609d-48c3-9823-ea8b054c5bfd",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 14,
  "time_alive": 1383,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 31,
  "time_alive": 1169,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a9f64101-887c-4b7a-8a96-7b4efff7e2cb",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 43,
  "time_alive": 584,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4c2084b1-56da-4ab7-b3d9-b1215b5963f8",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 33,
  "time_alive": 1016,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35b348b9-0570-462c-bb73-cb7e78759f6e",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 46,
  "time_alive": 287,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2a7de992-7e6d-4e66-a342-6bf6c69337cd",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 47,
  "time_alive": 278,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5e370cdf-a525-4481-ad3e-a71e9f6bba59",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695:fd76ad15d9cb4467b1828f82d2afc744",
  "placement": 47,
  "time_alive": 174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1476,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 7,
  "time_alive": 1444,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 5,
  "time_alive": 1545,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1481,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 10,
  "time_alive": 1441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 9,
  "time_alive": 1463,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 7,
  "time_alive": 1412,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1462,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 14,
  "time_alive": 1420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 3,
  "time_alive": 1476,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1578,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 15,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 12,
  "time_alive": 1376,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 2,
  "time_alive": 1483,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 2,
  "time_alive": 1571,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 16,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 14,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 7,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 16,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 9,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 1,
  "time_alive": 1571,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 5,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 1,
  "time_alive": 1578,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 11,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 3,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 4,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 6,
  "time_alive": 1501,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 6,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 5,
  "time_alive": 1505,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 26,
  "time_alive": 974,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 4,
  "time_alive": 1453,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 1,
  "time_alive": 1483,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 13,
  "time_alive": 1427,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 12,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 16,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 6,
  "time_alive": 1497,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 5,
  "time_alive": 1442,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 10,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 9,
  "time_alive": 1467,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 4,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 4,
  "time_alive": 1516,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 25,
  "time_alive": 1043,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 9,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 28,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 18,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 7,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 3,
  "time_alive": 1565,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 5,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 24,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 15,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 12,
  "time_alive": 1430,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 24,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 11,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1550,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 27,
  "time_alive": 831,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 8,
  "time_alive": 1426,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 15,
  "time_alive": 1399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 8,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 6,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 18,
  "time_alive": 1265,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 20,
  "time_alive": 1117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 3,
  "time_alive": 1482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 19,
  "time_alive": 1288,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 26,
  "time_alive": 622,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 16,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 15,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 29,
  "time_alive": 467,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 3,
  "time_alive": 1562,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 10,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 17,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 20,
  "time_alive": 1257,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 6,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 32,
  "time_alive": 258,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 33,
  "time_alive": 128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 23,
  "time_alive": 1145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 13,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1506,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 21,
  "time_alive": 1094,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 16,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 22,
  "time_alive": 1044,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 17,
  "time_alive": 1284,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 19,
  "time_alive": 1267,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 3,
  "time_alive": 1536,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 22,
  "time_alive": 1016,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 22,
  "time_alive": 1065,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 7,
  "time_alive": 1496,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 27,
  "time_alive": 609,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 8,
  "time_alive": 1449,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 19,
  "time_alive": 1261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 13,
  "time_alive": 1374,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 11,
  "time_alive": 1402,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 25,
  "time_alive": 538,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 19,
  "time_alive": 1244,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 24,
  "time_alive": 1083,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 14,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 17,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 21,
  "time_alive": 1141,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 4,
  "time_alive": 1557,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 15,
  "time_alive": 1335,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 20,
  "time_alive": 1235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 8,
  "time_alive": 1484,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 31,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 31,
  "time_alive": 294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 31,
  "time_alive": 193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 29,
  "time_alive": 437,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 22,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 2,
  "time_alive": 1550,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 20,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 16,
  "time_alive": 1371,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 9,
  "time_alive": 1436,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 31,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 12,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 14,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 13,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 20,
  "time_alive": 1285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 18,
  "time_alive": 1278,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 18,
  "time_alive": 1270,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 17,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 23,
  "time_alive": 971,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 18,
  "time_alive": 1242,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 32,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 32,
  "time_alive": 233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 12,
  "time_alive": 1408,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 10,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 2,
  "time_alive": 1476,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 17,
  "time_alive": 1267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 30,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 33,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 25,
  "time_alive": 712,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 29,
  "time_alive": 382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 19,
  "time_alive": 1224,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 30,
  "time_alive": 326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 23,
  "time_alive": 985,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 28,
  "time_alive": 470,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 15,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 24,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "21fa6dc671514c38ac85019541d85e4d:5f15662b708a42788c35345d1f6c092c:7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 25,
  "time_alive": 927,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "21fa6dc671514c38ac85019541d85e4d:5f15662b708a42788c35345d1f6c092c:7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 12,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "21fa6dc671514c38ac85019541d85e4d:5f15662b708a42788c35345d1f6c092c:7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 8,
  "time_alive": 1476,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "21fa6dc671514c38ac85019541d85e4d:5f15662b708a42788c35345d1f6c092c:7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 26,
  "time_alive": 910,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "21fa6dc671514c38ac85019541d85e4d:5f15662b708a42788c35345d1f6c092c:7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 7,
  "time_alive": 1464,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "21fa6dc671514c38ac85019541d85e4d:5f15662b708a42788c35345d1f6c092c:7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 22,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 30,
  "time_alive": 280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 6,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 29,
  "time_alive": 354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 20,
  "time_alive": 1212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 9,
  "time_alive": 1448,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 30,
  "time_alive": 260,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 10,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 19,
  "time_alive": 1202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 11,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 22,
  "time_alive": 1171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 33,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 32,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 8,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 25,
  "time_alive": 927,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 26,
  "time_alive": 522,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 14,
  "time_alive": 1341,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 27,
  "time_alive": 450,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 27,
  "time_alive": 581,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 11,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 26,
  "time_alive": 900,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 10,
  "time_alive": 1439,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 25,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 28,
  "time_alive": 402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 23,
  "time_alive": 1183,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 26,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 14,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 27,
  "time_alive": 411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 21,
  "time_alive": 1174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 30,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 13,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 29,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 27,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 17,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 13,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 23,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 31,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 18,
  "time_alive": 1250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 23,
  "time_alive": 990,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 28,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 11,
  "time_alive": 1426,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 21,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 28,
  "time_alive": 536,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 28,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 33,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 21,
  "time_alive": 1162,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 31,
  "time_alive": 295,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 29,
  "time_alive": 262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 33,
  "time_alive": 87,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0023c311-f020-4e67-b5b1-2d1f5397c950",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 32,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0264110e-b555-4f5c-9bd4-c01f18d50554",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 24,
  "time_alive": 947,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013cbcd0-fb1d-4508-8af9-5d86294f28aa",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 24,
  "time_alive": 748,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0043f58b-4b7c-46cc-a2cd-34d838fd7ade",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 30,
  "time_alive": 402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "027aca23-fc7e-4794-9508-d8d569ff9c2e",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 32,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02cfa2b9-1fc8-4177-8956-dfd64b2ab643",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 21,
  "time_alive": 1256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 6,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 1,
  "time_alive": 1486,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 7,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 3,
  "time_alive": 1449,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 7,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 21,
  "time_alive": 698,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 17,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 9,
  "time_alive": 1316,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 1,
  "time_alive": 1469,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 13,
  "time_alive": 1318,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 1,
  "time_alive": 1393,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 14,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 14,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 3,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 11,
  "time_alive": 1338,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 1,
  "time_alive": 1477,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 15,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 6,
  "time_alive": 1439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 2,
  "time_alive": 1518,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 4,
  "time_alive": 1351,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 20,
  "time_alive": 1104,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 26,
  "time_alive": 609,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 6,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1513,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 2,
  "time_alive": 1513,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 6,
  "time_alive": 1338,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 19,
  "time_alive": 1114,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 10,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 6,
  "time_alive": 1348,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 12,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 26,
  "time_alive": 478,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 7,
  "time_alive": 1334,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 14,
  "time_alive": 1301,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 2,
  "time_alive": 1477,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 12,
  "time_alive": 1315,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 26,
  "time_alive": 427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 28,
  "time_alive": 284,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 24,
  "time_alive": 907,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 4,
  "time_alive": 1416,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 19,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 2,
  "time_alive": 1393,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 10,
  "time_alive": 1373,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 10,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 2,
  "time_alive": 1486,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 26,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 18,
  "time_alive": 1165,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 18,
  "time_alive": 1092,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 9,
  "time_alive": 1375,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 3,
  "time_alive": 1483,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 12,
  "time_alive": 1282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 3,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 20,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 5,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 3,
  "time_alive": 1494,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 11,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 4,
  "time_alive": 1369,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 22,
  "time_alive": 960,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 22,
  "time_alive": 1073,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 9,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 1,
  "time_alive": 1518,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 13,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 25,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 10,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 5,
  "time_alive": 1423,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 13,
  "time_alive": 1315,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 8,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 22,
  "time_alive": 1191,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 5,
  "time_alive": 1368,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 2,
  "time_alive": 1469,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 23,
  "time_alive": 822,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 25,
  "time_alive": 597,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 18,
  "time_alive": 1000,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 4,
  "time_alive": 1461,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 17,
  "time_alive": 1169,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 8,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 6,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 11,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 23,
  "time_alive": 630,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 23,
  "time_alive": 1149,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 11,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 33,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 7,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 3,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 15,
  "time_alive": 1275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 5,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 16,
  "time_alive": 1192,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 13,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 11,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 19,
  "time_alive": 1088,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 17,
  "time_alive": 1029,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 12,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 15,
  "time_alive": 1194,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 18,
  "time_alive": 1193,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 16,
  "time_alive": 1243,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 10,
  "time_alive": 1322,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 7,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1215,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 28,
  "time_alive": 352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 4,
  "time_alive": 1430,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 20,
  "time_alive": 1070,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 27,
  "time_alive": 372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 21,
  "time_alive": 1204,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 10,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 15,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 21,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 28,
  "time_alive": 472,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 5,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 15,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 30,
  "time_alive": 368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 20,
  "time_alive": 1086,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 31,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 31,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 11,
  "time_alive": 1359,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 30,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 13,
  "time_alive": 1233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 30,
  "time_alive": 324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 29,
  "time_alive": 229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 17,
  "time_alive": 1268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 4,
  "time_alive": 1465,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 24,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 23,
  "time_alive": 918,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 12,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 9,
  "time_alive": 1377,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 32,
  "time_alive": 145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 24,
  "time_alive": 530,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 19,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 8,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 17,
  "time_alive": 1275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 8,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 21,
  "time_alive": 1010,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 30,
  "time_alive": 212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 7,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 32,
  "time_alive": 99,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 16,
  "time_alive": 1293,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 27,
  "time_alive": 412,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 26,
  "time_alive": 548,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 32,
  "time_alive": 147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 32,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 22,
  "time_alive": 966,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 5,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 25,
  "time_alive": 706,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 22,
  "time_alive": 962,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 28,
  "time_alive": 355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 16,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 18,
  "time_alive": 1161,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 32,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 17,
  "time_alive": 1186,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 14,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 20,
  "time_alive": 829,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 25,
  "time_alive": 1100,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 19,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 25,
  "time_alive": 816,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 30,
  "time_alive": 200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 8,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 13,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 31,
  "time_alive": 223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 9,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 28,
  "time_alive": 405,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 24,
  "time_alive": 736,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 19,
  "time_alive": 979,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 8,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 31,
  "time_alive": 174,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 27,
  "time_alive": 525,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 32,
  "time_alive": 96,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 23,
  "time_alive": 909,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 29,
  "time_alive": 235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 9,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 21,
  "time_alive": 1052,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 31,
  "time_alive": 275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 24,
  "time_alive": 818,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 27,
  "time_alive": 528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 16,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 29,
  "time_alive": 276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 28,
  "time_alive": 754,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 29,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 12,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 33,
  "time_alive": 95,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 31,
  "time_alive": 156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 18,
  "time_alive": 1303,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 29,
  "time_alive": 460,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 23,
  "time_alive": 930,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 15,
  "time_alive": 1245,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 16,
  "time_alive": 1301,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 27,
  "time_alive": 310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 26,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 24,
  "time_alive": 877,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0661b6b4-8b64-4f91-b435-f323c817e2e5",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 14,
  "time_alive": 1313,
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
    