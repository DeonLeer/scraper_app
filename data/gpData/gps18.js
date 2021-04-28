const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 3,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 11,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 2,
  "time_alive": 1546,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 71,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 13,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 3,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 44,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 12,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 27,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 60,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 91,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 10,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 2,
  "time_alive": 1540,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 12,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 79,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 22,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 24,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 15,
  "time_alive": 1446,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 53,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 29,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 5,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 23,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 29,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 17,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 44,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 1,
  "time_alive": 1546,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 81,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 14,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 77,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 43,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 8,
  "time_alive": 1484,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 43,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 4,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 6,
  "time_alive": 1524,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 16,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 98,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 5,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 17,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 80,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 44,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 43,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 4,
  "time_alive": 1504,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 65,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 21,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 69,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 1,
  "time_alive": 1495,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 16,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 34,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 49,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 94,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 70,
  "time_alive": 855,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 30,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 34,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 4,
  "time_alive": 1526,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 97,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 13,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 21,
  "time_alive": 1432,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 83,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 74,
  "time_alive": 651,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 59,
  "time_alive": 1048,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 79,
  "time_alive": 636,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 20,
  "time_alive": 1404,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 96,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 9,
  "time_alive": 1451,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 71,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 6,
  "time_alive": 1501,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 34,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 51,
  "time_alive": 1109,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 4,
  "time_alive": 1532,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 97,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 97,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 16,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 46,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 22,
  "time_alive": 1395,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1498,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 7,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 28,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 26,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 94,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 77,
  "time_alive": 582,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 52,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 13,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 23,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 17,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 16,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 34,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 48,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 4,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 85,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 88,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 82,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 1,
  "time_alive": 1539,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 16,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 36,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 18,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 70,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 25,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 36,
  "time_alive": 1304,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 24,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 53,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 33,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 14,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 10,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 64,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 5,
  "time_alive": 1530,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 52,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 40,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 29,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 81,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 26,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 10,
  "time_alive": 1503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 58,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 5,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 71,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 62,
  "time_alive": 1026,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 58,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 46,
  "time_alive": 1272,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 40,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 7,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 49,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 75,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 19,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 3,
  "time_alive": 1536,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 42,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 54,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 60,
  "time_alive": 1019,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 19,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 31,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 26,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 32,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 14,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 84,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 23,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 15,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 7,
  "time_alive": 1514,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 12,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 42,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 56,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 36,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 66,
  "time_alive": 913,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 42,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 22,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 13,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 20,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 53,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d55d6a8899b644b1990c8ace61f811f8",
  "placement": 38,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 56,
  "time_alive": 1145,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 33,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 2,
  "time_alive": 1544,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 66,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 78,
  "time_alive": 641,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 47,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 30,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 31,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 9,
  "time_alive": 1476,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 86,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 33,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 44,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 45,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 17,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 12,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 50,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 13,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 62,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 40,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 10,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 26,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 62,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 35,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 41,
  "time_alive": 1237,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 28,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 100,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 11,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 21,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 65,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 29,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 88,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 11,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 19,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 37,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 64,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 24,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 65,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 57,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 1,
  "time_alive": 1544,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 69,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 42,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 83,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 27,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 54,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 70,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 25,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 90,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 25,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 74,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 2,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 55,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 76,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 24,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 45,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 99,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 68,
  "time_alive": 1021,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 48,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 10,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 9,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 70,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 1,
  "time_alive": 1542,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 96,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 69,
  "time_alive": 814,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 92,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 40,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 98,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 12,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 20,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 24,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 57,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 57,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 52,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 89,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 37,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 21,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 45,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 50,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 17,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 20,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 19,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 63,
  "time_alive": 1074,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 90,
  "time_alive": 245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 86,
  "time_alive": 407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 82,
  "time_alive": 419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 31,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 98,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 79,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 75,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 3,
  "time_alive": 1513,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 56,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 77,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 38,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 46,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 78,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 28,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 7,
  "time_alive": 1454,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 59,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 81,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 96,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 33,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 7,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 12,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 53,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 86,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 6,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 15,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 56,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 32,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 85,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 6,
  "time_alive": 1453,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 90,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 87,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 20,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 18,
  "time_alive": 1451,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 74,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 80,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 81,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 11,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 76,
  "time_alive": 612,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 86,
  "time_alive": 343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 89,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 41,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 36,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 8,
  "time_alive": 1476,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 48,
  "time_alive": 1139,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 35,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 49,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 73,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 72,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 38,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 14,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 80,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 51,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 77,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 73,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 96,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 2,
  "time_alive": 1539,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 47,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 21,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 76,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 51,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 89,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 11,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 87,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 41,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 64,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 39,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 5,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 84,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 73,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 26,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 29,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 22,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 76,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 46,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 19,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 75,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 31,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 35,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 84,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 35,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 79,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 70,
  "time_alive": 939,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 25,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 54,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 70,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 9,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 15,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 90,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 37,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 96,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 44,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 23,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 25,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 88,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 93,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 7,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 92,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 57,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 100,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 14,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 85,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 30,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 37,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 54,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 15,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 38,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 18,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 54,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "9273a2e77ffe42258292fb6df0c0fb3a",
  "placement": 68,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 37,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 47,
  "time_alive": 1307,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 22,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 98,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 95,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 85,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 17,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 95,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 39,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 82,
  "time_alive": 476,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 72,
  "time_alive": 827,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 50,
  "time_alive": 1120,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 33,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 66,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 87,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 23,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 47,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 40,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 60,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 72,
  "time_alive": 854,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 30,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 52,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 15,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 74,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 76,
  "time_alive": 726,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 46,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 82,
  "time_alive": 420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 83,
  "time_alive": 470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 18,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 59,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 32,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 25,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 49,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 91,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 69,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 28,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 29,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 48,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 92,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 94,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 31,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 16,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 68,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 18,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 95,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 61,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 45,
  "time_alive": 1260,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 55,
  "time_alive": 1054,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 78,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 64,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 20,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 42,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 68,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 39,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 39,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 8,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 83,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 64,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 80,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 72,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 66,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 8,
  "time_alive": 1484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 48,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 77,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 69,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 81,
  "time_alive": 502,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 28,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 50,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 40,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 71,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 54,
  "time_alive": 1058,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 90,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 99,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 67,
  "time_alive": 863,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 13,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 73,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 33,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 83,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 23,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 89,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 63,
  "time_alive": 967,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 93,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 27,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 50,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 59,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 35,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 28,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 48,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 88,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 84,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 35,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 65,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 74,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 51,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 18,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 9,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 87,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 75,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 43,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 85,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "9bf2776eb37a4e289fdb4b232812e55f",
  "placement": 73,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 97,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 73,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 91,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 9,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 91,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 93,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 72,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 62,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 81,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 31,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 39,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 42,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 51,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 61,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 27,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 30,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 52,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "615fc0ff930f4c78ab9c7d8e2e8d4e6c",
  "placement": 63,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d01cf7fa5b064134baba8d12e469966b",
  "placement": 34,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d01cf7fa5b064134baba8d12e469966b",
  "placement": 79,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d01cf7fa5b064134baba8d12e469966b",
  "placement": 88,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d01cf7fa5b064134baba8d12e469966b",
  "placement": 27,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d01cf7fa5b064134baba8d12e469966b",
  "placement": 58,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d01cf7fa5b064134baba8d12e469966b",
  "placement": 65,
  "time_alive": 924,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 36,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 65,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 84,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 38,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 60,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 75,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 92,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 71,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 66,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 100,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 37,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 30,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 41,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 60,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 86,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 24,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 74,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 53,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "5c9ce2a8ab8a4e5991145b46c6a7a4ed",
  "placement": 61,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "5c9ce2a8ab8a4e5991145b46c6a7a4ed",
  "placement": 84,
  "time_alive": 597,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "5c9ce2a8ab8a4e5991145b46c6a7a4ed",
  "placement": 78,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "5c9ce2a8ab8a4e5991145b46c6a7a4ed",
  "placement": 89,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "5c9ce2a8ab8a4e5991145b46c6a7a4ed",
  "placement": 26,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "5c9ce2a8ab8a4e5991145b46c6a7a4ed",
  "placement": 61,
  "time_alive": 1016,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 38,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 50,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 56,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 77,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 66,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 43,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483",
  "placement": 75,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483",
  "placement": 44,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483",
  "placement": 68,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483",
  "placement": 55,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483",
  "placement": 67,
  "time_alive": 910,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483",
  "placement": 89,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 98,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 67,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 36,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 32,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 83,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 99,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 58,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 45,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 47,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 99,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 41,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 67,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 67,
  "time_alive": 898,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 85,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 62,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 46,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 63,
  "time_alive": 952,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 96,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 64,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 92,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 60,
  "time_alive": 1119,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 80,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 98,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 87,
  "time_alive": 283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 55,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 82,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 67,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 32,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 90,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 94,
  "time_alive": 171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 94,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 59,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 41,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 100,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 78,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 71,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 78,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 72,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 95,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 88,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 49,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "06523f0f02ba4f4d9f05d07c24922877",
  "placement": 62,
  "time_alive": 1001,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "06523f0f02ba4f4d9f05d07c24922877",
  "placement": 55,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "06523f0f02ba4f4d9f05d07c24922877",
  "placement": 99,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "06523f0f02ba4f4d9f05d07c24922877",
  "placement": 97,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "06523f0f02ba4f4d9f05d07c24922877",
  "placement": 59,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "06523f0f02ba4f4d9f05d07c24922877",
  "placement": 95,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d5419a89555c435593446d0b59acb210",
  "placement": 95,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d5419a89555c435593446d0b59acb210",
  "placement": 69,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d5419a89555c435593446d0b59acb210",
  "placement": 61,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d5419a89555c435593446d0b59acb210",
  "placement": 93,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d5419a89555c435593446d0b59acb210",
  "placement": 61,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d5419a89555c435593446d0b59acb210",
  "placement": 97,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 63,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 93,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 52,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 68,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 55,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 91,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "232a19a38f7442cd9fd25908b1a00016",
  "placement": 93,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "232a19a38f7442cd9fd25908b1a00016",
  "placement": 91,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "232a19a38f7442cd9fd25908b1a00016",
  "placement": 94,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "232a19a38f7442cd9fd25908b1a00016",
  "placement": 79,
  "time_alive": 610,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "232a19a38f7442cd9fd25908b1a00016",
  "placement": 99,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "232a19a38f7442cd9fd25908b1a00016",
  "placement": 86,
  "time_alive": 334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d3c8ab48b30140f9b8cdc17af38a509b",
  "placement": 82,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d3c8ab48b30140f9b8cdc17af38a509b",
  "placement": 80,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "d3c8ab48b30140f9b8cdc17af38a509b",
  "placement": 51,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "d3c8ab48b30140f9b8cdc17af38a509b",
  "placement": 58,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "d3c8ab48b30140f9b8cdc17af38a509b",
  "placement": 87,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "d3c8ab48b30140f9b8cdc17af38a509b",
  "placement": 92,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 11,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 14,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 24,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 3,
  "time_alive": 1505,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1521,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 82,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 80,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 2,
  "time_alive": 1558,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 7,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 13,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 29,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 4,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 30,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 41,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 3,
  "time_alive": 1511,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 38,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 17,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 6,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 19,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 29,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 10,
  "time_alive": 1450,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 56,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 10,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 26,
  "time_alive": 1371,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 3,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 11,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 22,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 17,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 66,
  "time_alive": 852,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 35,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 43,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 7,
  "time_alive": 1514,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 5,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 65,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 9,
  "time_alive": 1462,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 58,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 36,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 64,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 2,
  "time_alive": 1538,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 1,
  "time_alive": 1507,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 79,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 60,
  "time_alive": 867,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 10,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 21,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 70,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 25,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 22,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 7,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 4,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 95,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 21,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 19,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 45,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 14,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 8,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 25,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 9,
  "time_alive": 1452,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 47,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 76,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 34,
  "time_alive": 1355,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 61,
  "time_alive": 1077,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 17,
  "time_alive": 1419,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 11,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 7,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 12,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 71,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 15,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 35,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 47,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 20,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 7,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 23,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 42,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 16,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 19,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 22,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 48,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 15,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 12,
  "time_alive": 1428,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 60,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 45,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 5,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 41,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 58,
  "time_alive": 1089,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 3,
  "time_alive": 1551,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 13,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 50,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 63,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "13eb1ce46e5e4ce39219797e5db4ca72",
  "placement": 17,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 54,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 65,
  "time_alive": 1033,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 1,
  "time_alive": 1538,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 52,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 32,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 20,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 79,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 1,
  "time_alive": 1558,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 57,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 35,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 3,
  "time_alive": 1498,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 86,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 91,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 5,
  "time_alive": 1530,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 25,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 60,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 19,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 47,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 52,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 23,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 8,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 61,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 40,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 8,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 6,
  "time_alive": 1480,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 37,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 75,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 9,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 26,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 42,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 71,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 27,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 8,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 36,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 10,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 81,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 59,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 20,
  "time_alive": 1394,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 46,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 20,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 13,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 9,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 46,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 59,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 63,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 21,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 19,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 84,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 9,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 4,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 43,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 41,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 16,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 32,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 69,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 6,
  "time_alive": 1483,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 93,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 16,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 75,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 20,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 68,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 18,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 68,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 51,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 9,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 5,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 80,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 54,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 59,
  "time_alive": 1150,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 42,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "6d97728c643b4aecb882021a88cf7c8d",
  "placement": 3,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 83,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 39,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 63,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 44,
  "time_alive": 1267,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 73,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 1,
  "time_alive": 1521,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 68,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 89,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 98,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 79,
  "time_alive": 446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 2,
  "time_alive": 1521,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 24,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 92,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 52,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 46,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 48,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 11,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 2,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 93,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 6,
  "time_alive": 1519,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 30,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 15,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 68,
  "time_alive": 827,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "446481535d6a4419b0c801dc0a5b8208",
  "placement": 91,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 40,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 26,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 23,
  "time_alive": 1385,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 72,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 25,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 27,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 62,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 43,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 39,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 6,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 46,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "ca42e5e1694c464598f1a0caaab8a2eb",
  "placement": 18,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "40fe925f5f784e0ca929ae54012f8657",
  "placement": 2,
  "time_alive": 1536,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "40fe925f5f784e0ca929ae54012f8657",
  "placement": 87,
  "time_alive": 834,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "40fe925f5f784e0ca929ae54012f8657",
  "placement": 65,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "40fe925f5f784e0ca929ae54012f8657",
  "placement": 71,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "40fe925f5f784e0ca929ae54012f8657",
  "placement": 43,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "40fe925f5f784e0ca929ae54012f8657",
  "placement": 12,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 24,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 18,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 67,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 54,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 8,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "bd5a3044248742fd895cba3353ae1be9",
  "placement": 36,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 66,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 4,
  "time_alive": 1538,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 31,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 45,
  "time_alive": 1265,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 24,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 76,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 7,
  "time_alive": 1474,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 96,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 99,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 16,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 65,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "ca4a36c7314243fea344fba4f6013320",
  "placement": 21,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 23,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 22,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 78,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 21,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 13,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "c3a0a404e844415284757e6f48906dca",
  "placement": 51,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 16,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 12,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 89,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 37,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 83,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 50,
  "time_alive": 1181,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 69,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 72,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 35,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 12,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 96,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 5,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 72,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 75,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 15,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 2,
  "time_alive": 1507,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 70,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "57e2f597d5994e059a94117f6cdcfd41",
  "placement": 83,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 14,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 34,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 44,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 23,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 53,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 48,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 25,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 94,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 80,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 14,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 18,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 90,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 22,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 42,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 43,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 27,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 15,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "7bc519a8204543f9bacf49e03db2196e",
  "placement": 89,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 63,
  "time_alive": 1065,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 98,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 14,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 69,
  "time_alive": 894,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 33,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 40,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 35,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 47,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 49,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 10,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 50,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "d54c789f3a6e455182e2dbb3b404ef03",
  "placement": 56,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 38,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 85,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 50,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 4,
  "time_alive": 1495,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 57,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 32,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 1,
  "time_alive": 1536,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 40,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 56,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 87,
  "time_alive": 271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 87,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 79,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 56,
  "time_alive": 1116,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 92,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 16,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 11,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 59,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 65,
  "time_alive": 636,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 64,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 30,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 34,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 42,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 14,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 54,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 59,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 49,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 40,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 76,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 6,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "d0c3e4d3fc854138ad74e51e9f3503c8",
  "placement": 28,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "9bcf1155b3014d499816f2213eacf8db",
  "placement": 75,
  "time_alive": 869,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "9bcf1155b3014d499816f2213eacf8db",
  "placement": 31,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "9bcf1155b3014d499816f2213eacf8db",
  "placement": 64,
  "time_alive": 1021,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "9bcf1155b3014d499816f2213eacf8db",
  "placement": 32,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "9bcf1155b3014d499816f2213eacf8db",
  "placement": 72,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "9bcf1155b3014d499816f2213eacf8db",
  "placement": 11,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 17,
  "time_alive": 1409,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 27,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 92,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 55,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 49,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 85,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 46,
  "time_alive": 1250,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 83,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 38,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 5,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 74,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 55,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "a4b7329083af4cb3aae5d5054de682ce",
  "placement": 50,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "a4b7329083af4cb3aae5d5054de682ce",
  "placement": 76,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "a4b7329083af4cb3aae5d5054de682ce",
  "placement": 12,
  "time_alive": 1440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "a4b7329083af4cb3aae5d5054de682ce",
  "placement": 24,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "a4b7329083af4cb3aae5d5054de682ce",
  "placement": 28,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "a4b7329083af4cb3aae5d5054de682ce",
  "placement": 46,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 78,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 24,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 33,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 92,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 34,
  "time_alive": 1367,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 95,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 34,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 10,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 37,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 39,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 92,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 78,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 96,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 20,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 28,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 90,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 55,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 52,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 27,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 44,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 69,
  "time_alive": 943,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 23,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 45,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 60,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 79,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 17,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 34,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 52,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 39,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "394dbe7a81f64c518bca4452799b7efb",
  "placement": 76,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "394dbe7a81f64c518bca4452799b7efb",
  "placement": 58,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "394dbe7a81f64c518bca4452799b7efb",
  "placement": 71,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "394dbe7a81f64c518bca4452799b7efb",
  "placement": 36,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "394dbe7a81f64c518bca4452799b7efb",
  "placement": 4,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "394dbe7a81f64c518bca4452799b7efb",
  "placement": 68,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 90,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 15,
  "time_alive": 1427,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 94,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 70,
  "time_alive": 879,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 69,
  "time_alive": 803,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 57,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 65,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 91,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 36,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 94,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 30,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 29,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 18,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 51,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 84,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 49,
  "time_alive": 1235,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 60,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "faa824afa5704af2b711f00343a8fcd9",
  "placement": 39,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "faa824afa5704af2b711f00343a8fcd9",
  "placement": 66,
  "time_alive": 1015,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "faa824afa5704af2b711f00343a8fcd9",
  "placement": 29,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "faa824afa5704af2b711f00343a8fcd9",
  "placement": 96,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "faa824afa5704af2b711f00343a8fcd9",
  "placement": 64,
  "time_alive": 999,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "faa824afa5704af2b711f00343a8fcd9",
  "placement": 38,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 63,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 73,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 18,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 91,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 62,
  "time_alive": 801,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 41,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 19,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 53,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 53,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 35,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 67,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 26,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 48,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 41,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 78,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 78,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "bf4adce9ecb94afc92f39c1e54398d06",
  "placement": 49,
  "time_alive": 1217,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 48,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 78,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 82,
  "time_alive": 653,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 30,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 44,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 31,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 33,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 54,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 62,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 33,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 54,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "4eb76b6db3d44f08965a4d6ec371a93c",
  "placement": 53,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 13,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 36,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 97,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 81,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "3acf39dac2fb46e8baf1038945148efb",
  "placement": 71,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 95,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 57,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 48,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 29,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 37,
  "time_alive": 1349,
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
    