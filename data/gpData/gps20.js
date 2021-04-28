const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 68,
  "time_alive": 576,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 96,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 31,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 19,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 42,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 17,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 47,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 15,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 64,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 67,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 9,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 48,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 81,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 29,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 80,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 43,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 28,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 23,
  "time_alive": 1376,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 92,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 24,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 21,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 29,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 47,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 36,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 45,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 26,
  "time_alive": 1365,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 65,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 15,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 93,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 96,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 53,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 50,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 28,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 18,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 99,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 34,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 91,
  "time_alive": 644,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 27,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 26,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 78,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 97,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 8,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 90,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 6,
  "time_alive": 1444,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 74,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 28,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 56,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 60,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 53,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 47,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 38,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 43,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 30,
  "time_alive": 1321,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064",
  "placement": 57,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064",
  "placement": 9,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064",
  "placement": 100,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064",
  "placement": 26,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064",
  "placement": 64,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064",
  "placement": 85,
  "time_alive": 322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 17,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 44,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 44,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 31,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 85,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 39,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 32,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 36,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 68,
  "time_alive": 963,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 33,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 67,
  "time_alive": 767,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 41,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 59,
  "time_alive": 1148,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 30,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 27,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 32,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 60,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 67,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 75,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 45,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 39,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 89,
  "time_alive": 360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 7,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 67,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 100,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 77,
  "time_alive": 830,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 73,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 15,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 25,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 38,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 39,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 91,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 44,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 20,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 62,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "d5c512a6731d4caf89c30225ea25e953",
  "placement": 99,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "d5c512a6731d4caf89c30225ea25e953",
  "placement": 56,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "d5c512a6731d4caf89c30225ea25e953",
  "placement": 38,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "d5c512a6731d4caf89c30225ea25e953",
  "placement": 41,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "d5c512a6731d4caf89c30225ea25e953",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "d5c512a6731d4caf89c30225ea25e953",
  "placement": 20,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 8,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 12,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 88,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 62,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 80,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 69,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 44,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 51,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 23,
  "time_alive": 1384,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 66,
  "time_alive": 1054,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 73,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 82,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "bdc773427c734889adf20d0e119098be",
  "placement": 46,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "bdc773427c734889adf20d0e119098be",
  "placement": 38,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "bdc773427c734889adf20d0e119098be",
  "placement": 64,
  "time_alive": 986,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "bdc773427c734889adf20d0e119098be",
  "placement": 51,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "bdc773427c734889adf20d0e119098be",
  "placement": 76,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "bdc773427c734889adf20d0e119098be",
  "placement": 19,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 94,
  "time_alive": 499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 35,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 12,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 90,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 40,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 100,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 31,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 52,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 46,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 96,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 27,
  "time_alive": 1371,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 97,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 55,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 74,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 13,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 71,
  "time_alive": 916,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 100,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 80,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4b6ab44fae9d4c83b93590f64947ba24",
  "placement": 100,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4b6ab44fae9d4c83b93590f64947ba24",
  "placement": 93,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4b6ab44fae9d4c83b93590f64947ba24",
  "placement": 4,
  "time_alive": 1446,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4b6ab44fae9d4c83b93590f64947ba24",
  "placement": 64,
  "time_alive": 1075,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4b6ab44fae9d4c83b93590f64947ba24",
  "placement": 90,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4b6ab44fae9d4c83b93590f64947ba24",
  "placement": 78,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 49,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 65,
  "time_alive": 929,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 29,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 77,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 34,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 57,
  "time_alive": 838,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 40,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 84,
  "time_alive": 720,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 55,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 22,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 56,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 70,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "a215a9b8071b487da2987a88a6f96589",
  "placement": 27,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "a215a9b8071b487da2987a88a6f96589",
  "placement": 63,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "a215a9b8071b487da2987a88a6f96589",
  "placement": 51,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "a215a9b8071b487da2987a88a6f96589",
  "placement": 21,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "a215a9b8071b487da2987a88a6f96589",
  "placement": 65,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "a215a9b8071b487da2987a88a6f96589",
  "placement": 91,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 58,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 40,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 18,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 87,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 49,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 53,
  "time_alive": 966,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 74,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 46,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 16,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 79,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 26,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 65,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 39,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 61,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 70,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 49,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 57,
  "time_alive": 973,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 35,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 51,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 88,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 30,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 58,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 58,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 29,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "79180036b0e2452eb701e368a75ad5e6",
  "placement": 64,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "79180036b0e2452eb701e368a75ad5e6",
  "placement": 67,
  "time_alive": 905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "79180036b0e2452eb701e368a75ad5e6",
  "placement": 45,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "79180036b0e2452eb701e368a75ad5e6",
  "placement": 45,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "79180036b0e2452eb701e368a75ad5e6",
  "placement": 70,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "79180036b0e2452eb701e368a75ad5e6",
  "placement": 33,
  "time_alive": 1290,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 37,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 78,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 20,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 61,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 83,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 74,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 61,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 66,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 76,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 16,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 74,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 48,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 25,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 94,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 47,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 88,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 92,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 56,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 73,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 60,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 93,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 92,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 18,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "dcb36d653be74f7f9c1c0cd9ae468263",
  "placement": 63,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "dcb36d653be74f7f9c1c0cd9ae468263",
  "placement": 59,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "dcb36d653be74f7f9c1c0cd9ae468263",
  "placement": 41,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "dcb36d653be74f7f9c1c0cd9ae468263",
  "placement": 34,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "dcb36d653be74f7f9c1c0cd9ae468263",
  "placement": 52,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "dcb36d653be74f7f9c1c0cd9ae468263",
  "placement": 44,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 82,
  "time_alive": 824,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 68,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 17,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 57,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 41,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 79,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 78,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 37,
  "time_alive": 1333,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 79,
  "time_alive": 825,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 98,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 82,
  "time_alive": 500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 72,
  "time_alive": 458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 52,
  "time_alive": 1198,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 98,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 96,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 27,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 96,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 71,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 76,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 48,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 58,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 46,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 72,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 64,
  "time_alive": 670,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 65,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 72,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 35,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 70,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 98,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 61,
  "time_alive": 748,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 41,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 58,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 71,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 59,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 42,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 50,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "74f718c06a064e25b665c109b73e1b15",
  "placement": 25,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "74f718c06a064e25b665c109b73e1b15",
  "placement": 75,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "74f718c06a064e25b665c109b73e1b15",
  "placement": 63,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "74f718c06a064e25b665c109b73e1b15",
  "placement": 88,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "74f718c06a064e25b665c109b73e1b15",
  "placement": 95,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "74f718c06a064e25b665c109b73e1b15",
  "placement": 48,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 47,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 70,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 86,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 43,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 62,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 54,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "332e04c592104f07b72ffba4c515045f",
  "placement": 79,
  "time_alive": 834,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "332e04c592104f07b72ffba4c515045f",
  "placement": 43,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "332e04c592104f07b72ffba4c515045f",
  "placement": 99,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "332e04c592104f07b72ffba4c515045f",
  "placement": 97,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "332e04c592104f07b72ffba4c515045f",
  "placement": 39,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "332e04c592104f07b72ffba4c515045f",
  "placement": 90,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 95,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 62,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 92,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 99,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 94,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 58,
  "time_alive": 819,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 54,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 89,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 97,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 60,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 66,
  "time_alive": 772,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 95,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 80,
  "time_alive": 831,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 85,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 62,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 65,
  "time_alive": 1057,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 69,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 73,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 86,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 33,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 61,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 83,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 89,
  "time_alive": 365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 89,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 62,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 94,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 49,
  "time_alive": 1217,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 76,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 79,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 87,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 72,
  "time_alive": 879,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 79,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 87,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 81,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 50,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 83,
  "time_alive": 362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "ced9b5b3d5174cd18f81b9f8bc294c8c",
  "placement": 97,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "ced9b5b3d5174cd18f81b9f8bc294c8c",
  "placement": 69,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "ced9b5b3d5174cd18f81b9f8bc294c8c",
  "placement": 59,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "ced9b5b3d5174cd18f81b9f8bc294c8c",
  "placement": 91,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "ced9b5b3d5174cd18f81b9f8bc294c8c",
  "placement": 71,
  "time_alive": 727,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "ced9b5b3d5174cd18f81b9f8bc294c8c",
  "placement": 94,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "c48e801f1eb148588a44078f36e5063d",
  "placement": 77,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "c48e801f1eb148588a44078f36e5063d",
  "placement": 55,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "c48e801f1eb148588a44078f36e5063d",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "c48e801f1eb148588a44078f36e5063d",
  "placement": 82,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "c48e801f1eb148588a44078f36e5063d",
  "placement": 77,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "c48e801f1eb148588a44078f36e5063d",
  "placement": 46,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9",
  "placement": 93,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9",
  "placement": 83,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9",
  "placement": 54,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9",
  "placement": 52,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9",
  "placement": 63,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9",
  "placement": 88,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 81,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 42,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 82,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 86,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 75,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 86,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 71,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 99,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 57,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 100,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 54,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 93,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 84,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 97,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 83,
  "time_alive": 637,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 84,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 84,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 66,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "7564707fd1f84a1d8b147880fb15e249",
  "placement": 83,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "7564707fd1f84a1d8b147880fb15e249",
  "placement": 95,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "7564707fd1f84a1d8b147880fb15e249",
  "placement": 98,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "7564707fd1f84a1d8b147880fb15e249",
  "placement": 63,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "7564707fd1f84a1d8b147880fb15e249",
  "placement": 91,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "7564707fd1f84a1d8b147880fb15e249",
  "placement": 63,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 13,
  "time_alive": 1450,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 9,
  "time_alive": 1407,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 7,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 10,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 51,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 10,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 12,
  "time_alive": 1450,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 22,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 1,
  "time_alive": 1488,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 11,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 31,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 22,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 1,
  "time_alive": 1542,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 13,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 53,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 36,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 2,
  "time_alive": 1528,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 30,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 6,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 78,
  "time_alive": 675,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 17,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 16,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 3,
  "time_alive": 1511,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 4,
  "time_alive": 1502,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 20,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 33,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 7,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 29,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 18,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 8,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 12,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 93,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 84,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 17,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 68,
  "time_alive": 709,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 45,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 5,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 2,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 39,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 31,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 74,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1488,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 17,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 30,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 2,
  "time_alive": 1542,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 71,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 16,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 23,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 86,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 38,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 41,
  "time_alive": 1297,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 31,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 9,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 68,
  "time_alive": 1020,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 6,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 17,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 16,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 69,
  "time_alive": 676,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 14,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 65,
  "time_alive": 1081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 15,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 11,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 15,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 77,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 20,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 32,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 9,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 13,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 42,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 11,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 22,
  "time_alive": 1397,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 24,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 24,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 41,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 26,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 30,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 59,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 13,
  "time_alive": 1430,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 7,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 49,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 65,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 23,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 18,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 78,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 3,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 12,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 78,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 52,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 62,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 1,
  "time_alive": 1514,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 4,
  "time_alive": 1461,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 62,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 96,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 58,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 91,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 75,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 1,
  "time_alive": 1472,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 7,
  "time_alive": 1482,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 32,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 65,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 10,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 43,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 5,
  "time_alive": 1454,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 64,
  "time_alive": 1032,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 6,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 15,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 36,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 40,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 20,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 31,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 55,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 39,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 6,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 9,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 33,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 4,
  "time_alive": 1496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 69,
  "time_alive": 992,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 49,
  "time_alive": 1122,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 80,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 90,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 56,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 1,
  "time_alive": 1528,
  "elims": 13,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 49,
  "time_alive": 1260,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 7,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 5,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 63,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 90,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 16,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 47,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 12,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 77,
  "time_alive": 726,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 77,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 11,
  "time_alive": 1425,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 20,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 60,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 2,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 69,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 27,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 12,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 66,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 19,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 5,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 30,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 92,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 39,
  "time_alive": 1340,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 98,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 46,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 55,
  "time_alive": 1080,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 28,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 81,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 13,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 5,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 18,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 37,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 35,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 15,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 58,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 48,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 14,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 10,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 51,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 29,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 32,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 65,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 22,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 26,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 81,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 3,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 47,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 24,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 10,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 46,
  "time_alive": 1159,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 25,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 87,
  "time_alive": 225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 78,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 28,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 11,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 42,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 17,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 72,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 73,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 40,
  "time_alive": 1318,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 71,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 4,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 52,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 6,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 45,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 85,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 28,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 3,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 46,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 52,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 71,
  "time_alive": 536,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 21,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 25,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 40,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 31,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 22,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 54,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 58,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 5,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 32,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 76,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 35,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 44,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 71,
  "time_alive": 835,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 86,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 19,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 55,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 12,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 48,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 37,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 9,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 14,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 93,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 56,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 61,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 47,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 3,
  "time_alive": 1535,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 98,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 37,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 16,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 77,
  "time_alive": 419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 83,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 54,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 27,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 48,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 8,
  "time_alive": 1469,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 85,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 69,
  "time_alive": 950,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 52,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 80,
  "time_alive": 433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 50,
  "time_alive": 1191,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 8,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 15,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 34,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 29,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 11,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 42,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 62,
  "time_alive": 955,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 68,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 21,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 95,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 26,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 31,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 46,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 9,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 82,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 99,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 32,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 45,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 14,
  "time_alive": 1415,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 27,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 58,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 59,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 2,
  "time_alive": 1514,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 75,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 26,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 24,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 90,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 60,
  "time_alive": 1074,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 46,
  "time_alive": 1244,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 28,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 46,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 64,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 87,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 8,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 94,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 35,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "3b6f461d7ea94eaf8744843e635f9c85",
  "placement": 44,
  "time_alive": 1270,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 40,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 79,
  "time_alive": 436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 64,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 25,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 18,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 29,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 7,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 21,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 68,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 44,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 49,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 45,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 73,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 60,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 3,
  "time_alive": 1487,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 74,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 53,
  "time_alive": 1158,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "019de15597f441fd991d8697ca029743",
  "placement": 76,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 27,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 33,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 70,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 89,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 79,
  "time_alive": 394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 6,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 51,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 18,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 75,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 62,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 38,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 8,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "8abe374371934c4db4452db00c597b0d",
  "placement": 85,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "8abe374371934c4db4452db00c597b0d",
  "placement": 50,
  "time_alive": 1122,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "8abe374371934c4db4452db00c597b0d",
  "placement": 71,
  "time_alive": 878,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "8abe374371934c4db4452db00c597b0d",
  "placement": 20,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "8abe374371934c4db4452db00c597b0d",
  "placement": 52,
  "time_alive": 1181,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "8abe374371934c4db4452db00c597b0d",
  "placement": 50,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 25,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 15,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 76,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 41,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 72,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 23,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 16,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 96,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 30,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 65,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 74,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 43,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 8,
  "time_alive": 1408,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 98,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 34,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 68,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 78,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 48,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 24,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 44,
  "time_alive": 1234,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 66,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 27,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 54,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 37,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 54,
  "time_alive": 1083,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 21,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 59,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 76,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 43,
  "time_alive": 1279,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "5947cd090d594e7d8c52c956e9c25118",
  "placement": 61,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "5947cd090d594e7d8c52c956e9c25118",
  "placement": 41,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "5947cd090d594e7d8c52c956e9c25118",
  "placement": 2,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "5947cd090d594e7d8c52c956e9c25118",
  "placement": 85,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "5947cd090d594e7d8c52c956e9c25118",
  "placement": 43,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "5947cd090d594e7d8c52c956e9c25118",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 63,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 56,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 84,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 14,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 26,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 89,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 35,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 75,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 43,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 10,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 79,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 20,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 35,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 47,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 70,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 81,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 57,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 89,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 39,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 23,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 60,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 72,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 48,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 61,
  "time_alive": 1057,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 60,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 57,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 25,
  "time_alive": 1399,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 33,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 45,
  "time_alive": 1179,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 41,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 73,
  "time_alive": 792,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 63,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 33,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 56,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 44,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 56,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 21,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 66,
  "time_alive": 869,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 23,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 70,
  "time_alive": 911,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 53,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 83,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 57,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 70,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 14,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 39,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 63,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 13,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 80,
  "time_alive": 529,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 96,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 61,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 87,
  "time_alive": 239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 57,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 19,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 41,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 72,
  "time_alive": 523,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 86,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 45,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 86,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 34,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 54,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 60,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 19,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 76,
  "time_alive": 557,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 94,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 39,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 18,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 22,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 84,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 29,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 17,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 57,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 37,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 88,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 55,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 68,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 73,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 49,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 84,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 19,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 42,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "7a8f128d4a3742fe89c54639efae12f9",
  "placement": 88,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "7a8f128d4a3742fe89c54639efae12f9",
  "placement": 28,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "7a8f128d4a3742fe89c54639efae12f9",
  "placement": 38,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "7a8f128d4a3742fe89c54639efae12f9",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "7a8f128d4a3742fe89c54639efae12f9",
  "placement": 42,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "7a8f128d4a3742fe89c54639efae12f9",
  "placement": 36,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 77,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 62,
  "time_alive": 1013,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 29,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 55,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 67,
  "time_alive": 867,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 82,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 95,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 34,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 23,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 69,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 55,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 81,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 38,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 100,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 100,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 26,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 37,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 80,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 75,
  "time_alive": 631,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 72,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 63,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 79,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 50,
  "time_alive": 1221,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 51,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 97,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 82,
  "time_alive": 416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 40,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 48,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 59,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 52,
  "time_alive": 1210,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 36,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 70,
  "time_alive": 586,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 66,
  "time_alive": 1002,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 50,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 83,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "8fee4d031edb4273ba47a351d5ec3b1e",
  "placement": 88,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 89,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 78,
  "time_alive": 453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 27,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 33,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 87,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 94,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 59,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 43,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 90,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 19,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 82,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 57,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 90,
  "time_alive": 216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 36,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 82,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 86,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 21,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 59,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "28e4c2c7e2e34568ae4f02c142bb38b5",
  "placement": 91,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "28e4c2c7e2e34568ae4f02c142bb38b5",
  "placement": 64,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "28e4c2c7e2e34568ae4f02c142bb38b5",
  "placement": 42,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "28e4c2c7e2e34568ae4f02c142bb38b5",
  "placement": 91,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "28e4c2c7e2e34568ae4f02c142bb38b5",
  "placement": 30,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "28e4c2c7e2e34568ae4f02c142bb38b5",
  "placement": 34,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "c3fbb30b52914ddea348be2935f524f3",
  "placement": 62,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "c3fbb30b52914ddea348be2935f524f3",
  "placement": 97,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "c3fbb30b52914ddea348be2935f524f3",
  "placement": 79,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "c3fbb30b52914ddea348be2935f524f3",
  "placement": 36,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "c3fbb30b52914ddea348be2935f524f3",
  "placement": 34,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "c3fbb30b52914ddea348be2935f524f3",
  "placement": 53,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 81,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 96,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 88,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 28,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 74,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 90,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "c9fee7a81b7845df8df290ecb6e03c4b",
  "placement": 92,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "c9fee7a81b7845df8df290ecb6e03c4b",
  "placement": 61,
  "time_alive": 1033,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "c9fee7a81b7845df8df290ecb6e03c4b",
  "placement": 85,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "c9fee7a81b7845df8df290ecb6e03c4b",
  "placement": 83,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "c9fee7a81b7845df8df290ecb6e03c4b",
  "placement": 25,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "c9fee7a81b7845df8df290ecb6e03c4b",
  "placement": 77,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 67,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 88,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 65,
  "time_alive": 1014,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 97,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 40,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "26314fb53d244468a10499d6e4476162",
  "placement": 75,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 74,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 51,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 72,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 47,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 64,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 67,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 50,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 85,
  "time_alive": 336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 87,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 82,
  "time_alive": 425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 69,
  "time_alive": 544,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 87,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "3b0e8ff9a5624d2abc81ff34a2534d12",
  "placement": 98,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "3b0e8ff9a5624d2abc81ff34a2534d12",
  "placement": 38,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "3b0e8ff9a5624d2abc81ff34a2534d12",
  "placement": 54,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "3b0e8ff9a5624d2abc81ff34a2534d12",
  "placement": 61,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "3b0e8ff9a5624d2abc81ff34a2534d12",
  "placement": 93,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "3b0e8ff9a5624d2abc81ff34a2534d12",
  "placement": 97,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 94,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 66,
  "time_alive": 893,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 67,
  "time_alive": 998,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 88,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 80,
  "time_alive": 350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 99,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 84,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 47,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 58,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 67,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 94,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 70,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 66,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 93,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 89,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 64,
  "time_alive": 1084,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 92,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 44,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 76,
  "time_alive": 477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 95,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 58,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 89,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "6812b9f18ddb4d139e06c15d4b53134c",
  "placement": 95,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925",
  "placement": 80,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925",
  "placement": 67,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925",
  "placement": 92,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925",
  "placement": 49,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925",
  "placement": 73,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 53,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 91,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 71,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 98,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 93,
  "time_alive": 255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 79,
  "time_alive": 420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 83,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 73,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 91,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 63,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 93,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 81,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 74,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 53,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c09581-2531-4479-bd2c-6b0a09c3fe2f",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 92,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 91,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03db5e57-1205-4765-8394-acdcd0a74a54",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 83,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 84,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 86,
  "time_alive": 471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "080a77eb-8f86-466b-ae9e-396148ce7bed",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 96,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ec4acf-8238-4be5-934c-6e770ebc0fc3",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 96,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d8a0f6-2d6c-46c5-9349-5f99f659f75a",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 92,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e76f359-870a-4ea5-8a1e-06a64ae86f94",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 97,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 52,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 2,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 38,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 6,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1505,
  "elims": 12,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 63,
  "time_alive": 973,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 7,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 9,
  "time_alive": 1464,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 13,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 32,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 29,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 10,
  "time_alive": 1464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 41,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 5,
  "time_alive": 1500,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 71,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 17,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 46,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 1,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 4,
  "time_alive": 1482,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 12,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 46,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 27,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 27,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 18,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 16,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 3,
  "time_alive": 1527,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 54,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 8,
  "time_alive": 1453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 5,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 7,
  "time_alive": 1489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 64,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 10,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 17,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 57,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 3,
  "time_alive": 1480,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 15,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 9,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 21,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 25,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 56,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 2,
  "time_alive": 1505,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 28,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 14,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 34,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 43,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 11,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 7,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 6,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 11,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 73,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 1,
  "time_alive": 1509,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 13,
  "time_alive": 1391,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 68,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
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
    