const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 54,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 61,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 18,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "1becb33c0df9424dbb664244230acea5",
  "placement": 68,
  "time_alive": 695,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "1becb33c0df9424dbb664244230acea5",
  "placement": 51,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "1becb33c0df9424dbb664244230acea5",
  "placement": 46,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "1becb33c0df9424dbb664244230acea5",
  "placement": 22,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "1becb33c0df9424dbb664244230acea5",
  "placement": 48,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "1becb33c0df9424dbb664244230acea5",
  "placement": 55,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 54,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 73,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 19,
  "time_alive": 1406,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 47,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 70,
  "time_alive": 516,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 74,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 63,
  "time_alive": 1020,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 52,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 72,
  "time_alive": 758,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 41,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 18,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 43,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 12,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 77,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 51,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 34,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 38,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 96,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 21,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 56,
  "time_alive": 1110,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 13,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 65,
  "time_alive": 887,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 87,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "530ff013a17d45309895558d7830a3f7",
  "placement": 89,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "530ff013a17d45309895558d7830a3f7",
  "placement": 80,
  "time_alive": 420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "530ff013a17d45309895558d7830a3f7",
  "placement": 13,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "530ff013a17d45309895558d7830a3f7",
  "placement": 26,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "530ff013a17d45309895558d7830a3f7",
  "placement": 45,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "530ff013a17d45309895558d7830a3f7",
  "placement": 50,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "edabfffac967495a8c8a0d01b2aa9b31",
  "placement": 98,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "edabfffac967495a8c8a0d01b2aa9b31",
  "placement": 62,
  "time_alive": 997,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "edabfffac967495a8c8a0d01b2aa9b31",
  "placement": 93,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "edabfffac967495a8c8a0d01b2aa9b31",
  "placement": 88,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "edabfffac967495a8c8a0d01b2aa9b31",
  "placement": 12,
  "time_alive": 1442,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "edabfffac967495a8c8a0d01b2aa9b31",
  "placement": 86,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "97b433b3ae4a43abbe45d25051b0ff92",
  "placement": 81,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "97b433b3ae4a43abbe45d25051b0ff92",
  "placement": 72,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "97b433b3ae4a43abbe45d25051b0ff92",
  "placement": 23,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "97b433b3ae4a43abbe45d25051b0ff92",
  "placement": 72,
  "time_alive": 469,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "97b433b3ae4a43abbe45d25051b0ff92",
  "placement": 19,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "97b433b3ae4a43abbe45d25051b0ff92",
  "placement": 59,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 45,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 69,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 21,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 35,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 84,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 78,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 40,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 44,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 68,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 37,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 73,
  "time_alive": 490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 42,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 44,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 82,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 29,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 40,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 53,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "3a71f40185e0441f8dbfdc110e29e820",
  "placement": 43,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "3a71f40185e0441f8dbfdc110e29e820",
  "placement": 47,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "3a71f40185e0441f8dbfdc110e29e820",
  "placement": 69,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "3a71f40185e0441f8dbfdc110e29e820",
  "placement": 71,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "3a71f40185e0441f8dbfdc110e29e820",
  "placement": 17,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "3a71f40185e0441f8dbfdc110e29e820",
  "placement": 54,
  "time_alive": 1062,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 37,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 88,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 91,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 66,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 50,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 32,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 28,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 30,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 56,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 49,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 60,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "e8f30fc629964852bbb9e93cafb3223d",
  "placement": 38,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "e8f30fc629964852bbb9e93cafb3223d",
  "placement": 92,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "e8f30fc629964852bbb9e93cafb3223d",
  "placement": 39,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "e8f30fc629964852bbb9e93cafb3223d",
  "placement": 77,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "e8f30fc629964852bbb9e93cafb3223d",
  "placement": 27,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "e8f30fc629964852bbb9e93cafb3223d",
  "placement": 48,
  "time_alive": 1233,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 86,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 63,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 62,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 84,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 20,
  "time_alive": 1415,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 81,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 77,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 57,
  "time_alive": 1140,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 54,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 38,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 55,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 40,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 25,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 54,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 44,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 59,
  "time_alive": 857,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 71,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 2,
  "time_alive": 1542,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 99,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 94,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 88,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 66,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 61,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 42,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 45,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 56,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 16,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 53,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 33,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 11,
  "time_alive": 1457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 18,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 71,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 60,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 32,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 77,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 42,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 27,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 80,
  "time_alive": 385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 93,
  "time_alive": 131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 80,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 58,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 87,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 52,
  "time_alive": 1166,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 60,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 64,
  "time_alive": 988,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 90,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 90,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 16,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 62,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 57,
  "time_alive": 878,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 88,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 49,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 47,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 96,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 39,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 64,
  "time_alive": 565,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 47,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 59,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 33,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 50,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 80,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 70,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "c0f2810a8a24488c922bca00490c8e84",
  "placement": 36,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "c0f2810a8a24488c922bca00490c8e84",
  "placement": 68,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "c0f2810a8a24488c922bca00490c8e84",
  "placement": 87,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "c0f2810a8a24488c922bca00490c8e84",
  "placement": 91,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "c0f2810a8a24488c922bca00490c8e84",
  "placement": 34,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "c0f2810a8a24488c922bca00490c8e84",
  "placement": 41,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 60,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 83,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 12,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 82,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 86,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 58,
  "time_alive": 861,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 59,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 31,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 65,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 83,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 72,
  "time_alive": 500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 62,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "34c148cc7f444209bec7fea91b4a2494",
  "placement": 69,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "34c148cc7f444209bec7fea91b4a2494",
  "placement": 24,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "34c148cc7f444209bec7fea91b4a2494",
  "placement": 64,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "34c148cc7f444209bec7fea91b4a2494",
  "placement": 70,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "34c148cc7f444209bec7fea91b4a2494",
  "placement": 90,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "51a0e7baf78641debc107c1bfd4f2d37",
  "placement": 49,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "51a0e7baf78641debc107c1bfd4f2d37",
  "placement": 41,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "51a0e7baf78641debc107c1bfd4f2d37",
  "placement": 26,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "51a0e7baf78641debc107c1bfd4f2d37",
  "placement": 87,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "51a0e7baf78641debc107c1bfd4f2d37",
  "placement": 52,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "51a0e7baf78641debc107c1bfd4f2d37",
  "placement": 79,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "706b02457de347f28d003a0b96fe694b",
  "placement": 56,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "706b02457de347f28d003a0b96fe694b",
  "placement": 91,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "706b02457de347f28d003a0b96fe694b",
  "placement": 98,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "706b02457de347f28d003a0b96fe694b",
  "placement": 78,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "706b02457de347f28d003a0b96fe694b",
  "placement": 75,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "706b02457de347f28d003a0b96fe694b",
  "placement": 13,
  "time_alive": 1445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 53,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 86,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 27,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 94,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 71,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "12686a73a31c4b68970ad11f6295da35",
  "placement": 93,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "12686a73a31c4b68970ad11f6295da35",
  "placement": 56,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "12686a73a31c4b68970ad11f6295da35",
  "placement": 29,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "12686a73a31c4b68970ad11f6295da35",
  "placement": 90,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "12686a73a31c4b68970ad11f6295da35",
  "placement": 60,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "12686a73a31c4b68970ad11f6295da35",
  "placement": 90,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "0c6c2a1ebc3f438cb024d3b275a40965",
  "placement": 38,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "0c6c2a1ebc3f438cb024d3b275a40965",
  "placement": 59,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "0c6c2a1ebc3f438cb024d3b275a40965",
  "placement": 40,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "0c6c2a1ebc3f438cb024d3b275a40965",
  "placement": 91,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 23,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 81,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 67,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 57,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "93d58854ff8748eeb3390e2d8915e431",
  "placement": 48,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "93d58854ff8748eeb3390e2d8915e431",
  "placement": 84,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "93d58854ff8748eeb3390e2d8915e431",
  "placement": 46,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "93d58854ff8748eeb3390e2d8915e431",
  "placement": 76,
  "time_alive": 428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "93d58854ff8748eeb3390e2d8915e431",
  "placement": 89,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 92,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 48,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 79,
  "time_alive": 398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 68,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 89,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 65,
  "time_alive": 520,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "14eccced13da4bedb914ecfd1f97eaac",
  "placement": 85,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "14eccced13da4bedb914ecfd1f97eaac",
  "placement": 61,
  "time_alive": 944,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "14eccced13da4bedb914ecfd1f97eaac",
  "placement": 79,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "14eccced13da4bedb914ecfd1f97eaac",
  "placement": 67,
  "time_alive": 678,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "14eccced13da4bedb914ecfd1f97eaac",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "179362f2459f4001b04f82bcff70ce0d",
  "placement": 75,
  "time_alive": 547,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "179362f2459f4001b04f82bcff70ce0d",
  "placement": 36,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "179362f2459f4001b04f82bcff70ce0d",
  "placement": 94,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "179362f2459f4001b04f82bcff70ce0d",
  "placement": 75,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "179362f2459f4001b04f82bcff70ce0d",
  "placement": 83,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "2747504674494ebd8339773497d51b61",
  "placement": 87,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "2747504674494ebd8339773497d51b61",
  "placement": 43,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "2747504674494ebd8339773497d51b61",
  "placement": 58,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "2747504674494ebd8339773497d51b61",
  "placement": 42,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "2747504674494ebd8339773497d51b61",
  "placement": 87,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "2747504674494ebd8339773497d51b61",
  "placement": 68,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 76,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 20,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 97,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 92,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 95,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 84,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 84,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 85,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 66,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 30,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 68,
  "time_alive": 563,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 69,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 67,
  "time_alive": 734,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 95,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 71,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 69,
  "time_alive": 525,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 78,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 75,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 55,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 78,
  "time_alive": 499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 78,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 44,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 53,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 67,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 57,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 42,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 77,
  "time_alive": 470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 85,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 81,
  "time_alive": 339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 88,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 72,
  "time_alive": 607,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 53,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 85,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 49,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "4e9dba44c4dd4945ac2e003eee938b69",
  "placement": 94,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "4e9dba44c4dd4945ac2e003eee938b69",
  "placement": 75,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "4e9dba44c4dd4945ac2e003eee938b69",
  "placement": 70,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "4e9dba44c4dd4945ac2e003eee938b69",
  "placement": 76,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "4e9dba44c4dd4945ac2e003eee938b69",
  "placement": 66,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "1fc3977923a2459f8b880a3aeab4f390",
  "placement": 97,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "1fc3977923a2459f8b880a3aeab4f390",
  "placement": 76,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "1fc3977923a2459f8b880a3aeab4f390",
  "placement": 81,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "1fc3977923a2459f8b880a3aeab4f390",
  "placement": 86,
  "time_alive": 215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "230a1758a698428cbc43b53b4fd0f9c0",
  "placement": 91,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "230a1758a698428cbc43b53b4fd0f9c0",
  "placement": 89,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "230a1758a698428cbc43b53b4fd0f9c0",
  "placement": 96,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "230a1758a698428cbc43b53b4fd0f9c0",
  "placement": 80,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "230a1758a698428cbc43b53b4fd0f9c0",
  "placement": 82,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "230a1758a698428cbc43b53b4fd0f9c0",
  "placement": 82,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 2,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 2,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 3,
  "time_alive": 1507,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 36,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 79,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 8,
  "time_alive": 1475,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 5,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 9,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 8,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 5,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 13,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 15,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 1,
  "time_alive": 1521,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 92,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 73,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 37,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 9,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 1,
  "time_alive": 1529,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 54,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 42,
  "time_alive": 1297,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 81,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1525,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 10,
  "time_alive": 1467,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 7,
  "time_alive": 1486,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 9,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 36,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 9,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 20,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 29,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 45,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 65,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 52,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 18,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 4,
  "time_alive": 1501,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 50,
  "time_alive": 1232,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 5,
  "time_alive": 1502,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 46,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 3,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 37,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 30,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 33,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 28,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 17,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 8,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 54,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 65,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 6,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 39,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 95,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 30,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 87,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 22,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 1,
  "time_alive": 1530,
  "elims": 11,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 98,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 76,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 18,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 13,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 93,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 89,
  "time_alive": 157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 11,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 24,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 56,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 1,
  "time_alive": 1525,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 65,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 66,
  "time_alive": 968,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 11,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 78,
  "time_alive": 842,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 35,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 19,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 3,
  "time_alive": 1528,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 81,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 32,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 27,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 8,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 2,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 77,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 14,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 15,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 26,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 63,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 20,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 50,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 78,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 13,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 50,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 44,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 3,
  "time_alive": 1514,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 24,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 3,
  "time_alive": 1512,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 28,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 11,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 58,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 48,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 82,
  "time_alive": 361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 26,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 44,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 69,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 16,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 14,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 21,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 36,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 4,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 44,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 98,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 37,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 6,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 77,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 6,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 29,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 17,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 12,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 18,
  "time_alive": 1397,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 49,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 53,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 41,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 42,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 25,
  "time_alive": 1378,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 13,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 48,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 35,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 9,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 43,
  "time_alive": 1337,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 70,
  "time_alive": 908,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 7,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 25,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 60,
  "time_alive": 1161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 14,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 63,
  "time_alive": 1108,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 73,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 56,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 86,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 25,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 33,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 5,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 17,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 37,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 7,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 52,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 24,
  "time_alive": 1401,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 61,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 57,
  "time_alive": 1101,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 4,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 78,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 43,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 10,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 47,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 53,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 33,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 39,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 23,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 51,
  "time_alive": 1225,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 24,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 75,
  "time_alive": 813,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 90,
  "time_alive": 726,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 74,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 12,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 79,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 62,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 2,
  "time_alive": 1529,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 63,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 83,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 13,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 34,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 40,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 14,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 62,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 20,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 15,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 90,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 18,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 61,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 42,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 1,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 91,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 59,
  "time_alive": 1135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 76,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 33,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 27,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 76,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 4,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 70,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 8,
  "time_alive": 1469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 79,
  "time_alive": 522,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 82,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 17,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 28,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 19,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 15,
  "time_alive": 1443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 51,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 8,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 35,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 79,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 42,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 30,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 44,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 85,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 40,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 33,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 17,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 51,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 11,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 84,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 26,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 21,
  "time_alive": 1393,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 72,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 11,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 38,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 28,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 12,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 16,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 57,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 41,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 52,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 43,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 67,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 14,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 11,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 39,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 64,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 20,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 68,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 7,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 25,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 54,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 46,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 61,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 62,
  "time_alive": 1129,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 80,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 7,
  "time_alive": 1477,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 19,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 31,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 65,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 38,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 39,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 58,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 10,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 25,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 19,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 96,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 48,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 21,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 63,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 58,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 57,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 17,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 21,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 25,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 40,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 15,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 5,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 63,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 92,
  "time_alive": 420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 75,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 34,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 57,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 22,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 41,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 18,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 26,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 29,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 98,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 46,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 5,
  "time_alive": 1451,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 23,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 95,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 94,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 89,
  "time_alive": 769,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 37,
  "time_alive": 1348,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 20,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 69,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 53,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 16,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 10,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 69,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 62,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 52,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 31,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 27,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 73,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 14,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 34,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 93,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 12,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 58,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 99,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 16,
  "time_alive": 1409,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 36,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 88,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 23,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 36,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 44,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 51,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 10,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 27,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 44,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 37,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 32,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 90,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 92,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 28,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 28,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 22,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 16,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 41,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 82,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 87,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 27,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 18,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 52,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 23,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 76,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 6,
  "time_alive": 1499,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 45,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 76,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6",
  "placement": 29,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6",
  "placement": 75,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6",
  "placement": 55,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6",
  "placement": 99,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6",
  "placement": 70,
  "time_alive": 1066,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6",
  "placement": 4,
  "time_alive": 1519,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 71,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 60,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 70,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 12,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 68,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 20,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "5820d012a9a04ace925f48dc7cc76091",
  "placement": 38,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "5820d012a9a04ace925f48dc7cc76091",
  "placement": 98,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "5820d012a9a04ace925f48dc7cc76091",
  "placement": 19,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "5820d012a9a04ace925f48dc7cc76091",
  "placement": 89,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "5820d012a9a04ace925f48dc7cc76091",
  "placement": 7,
  "time_alive": 1474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "5820d012a9a04ace925f48dc7cc76091",
  "placement": 67,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 79,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 33,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 68,
  "time_alive": 932,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 15,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 80,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 62,
  "time_alive": 1027,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 24,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 82,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 29,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 60,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 72,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 30,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 80,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 27,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 94,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 76,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 16,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 23,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 83,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 47,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 2,
  "time_alive": 1512,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 45,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 78,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 78,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 21,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 45,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 30,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 49,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 36,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 71,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000",
  "placement": 23,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000",
  "placement": 55,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000",
  "placement": 71,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000",
  "placement": 74,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000",
  "placement": 4,
  "time_alive": 1505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000",
  "placement": 55,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 91,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 85,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 61,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 3,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 32,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 41,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 39,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 73,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 22,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 46,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 57,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 54,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 53,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 72,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 49,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 38,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 22,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 72,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 96,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 79,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 42,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 26,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 85,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 13,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 19,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 70,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 58,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 67,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 34,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 49,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 74,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 6,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 51,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 75,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 83,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 47,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 72,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 97,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 24,
  "time_alive": 1383,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 31,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 98,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 68,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 10,
  "time_alive": 1450,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 77,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 68,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 86,
  "time_alive": 505,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 48,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 50,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 99,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 99,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 97,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 56,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 9,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 6,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 58,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 47,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 71,
  "time_alive": 934,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 90,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 95,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 67,
  "time_alive": 1069,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 91,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 74,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 32,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 49,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 35,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 35,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 21,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 31,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 94,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 67,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 59,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 45,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 66,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 46,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 47,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 82,
  "time_alive": 786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 65,
  "time_alive": 997,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 69,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 64,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 39,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 55,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 38,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 60,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 22,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 87,
  "time_alive": 614,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 98,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 78,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 64,
  "time_alive": 1103,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 68,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 55,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 61,
  "time_alive": 1132,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 40,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 84,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 59,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 42,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 51,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 34,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 65,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 83,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 77,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 32,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 70,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 38,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 75,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 66,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 92,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 26,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 34,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 80,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 100,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 62,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 35,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 12,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 54,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 85,
  "time_alive": 786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 53,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 84,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 96,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 47,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 71,
  "time_alive": 979,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 67,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 95,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 55,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 83,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 30,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 84,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 66,
  "time_alive": 1084,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 73,
  "time_alive": 891,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 89,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 81,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 40,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 63,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 83,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 56,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 60,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 69,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1",
  "placement": 88,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1",
  "placement": 31,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1",
  "placement": 89,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1",
  "placement": 40,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1",
  "placement": 73,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1",
  "placement": 56,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 60,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 95,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 95,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 43,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 52,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 88,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 64,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 81,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 32,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 80,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 74,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 90,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 49,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 59,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 64,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 85,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 91,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 74,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "9d213c60c03b4e8c9b73e1917cf16008",
  "placement": 92,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "9d213c60c03b4e8c9b73e1917cf16008",
  "placement": 50,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "9d213c60c03b4e8c9b73e1917cf16008",
  "placement": 48,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "9d213c60c03b4e8c9b73e1917cf16008",
  "placement": 91,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "9d213c60c03b4e8c9b73e1917cf16008",
  "placement": 66,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "9d213c60c03b4e8c9b73e1917cf16008",
  "placement": 92,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 48,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 53,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 88,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 86,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 87,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 91,
  "time_alive": 151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 94,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 93,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 59,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 50,
  "time_alive": 1230,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 71,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 80,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 59,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 43,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 93,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 64,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 97,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 93,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 75,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 94,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 45,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 96,
  "time_alive": 295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 46,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 85,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 93,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 29,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 72,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 77,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 81,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "072f09d90d374ffda31055ed1e88c42a",
  "placement": 87,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "072f09d90d374ffda31055ed1e88c42a",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "072f09d90d374ffda31055ed1e88c42a",
  "placement": 97,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "072f09d90d374ffda31055ed1e88c42a",
  "placement": 61,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "072f09d90d374ffda31055ed1e88c42a",
  "placement": 96,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "072f09d90d374ffda31055ed1e88c42a",
  "placement": 84,
  "time_alive": 304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 66,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 88,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 90,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 81,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 94,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 43,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 97,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 89,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 57,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 82,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 69,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 86,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 86,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 100,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 86,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08650206-f8ff-4343-aeb8-0f6111953931",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 54,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c85134-3df0-4fc1-8428-00383aca4c68",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 88,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 87,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c62748-0aed-467a-8cbe-9c50bb6e445d",
  "team_id": "d1a1ccf754b64d09a3b183630ce23ebb",
  "placement": 77,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06750b3b-ed2b-490a-bd7a-a63585446c05",
  "team_id": "d1a1ccf754b64d09a3b183630ce23ebb",
  "placement": 96,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24",
  "team_id": "d1a1ccf754b64d09a3b183630ce23ebb",
  "placement": 84,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 43,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 3,
  "time_alive": 1547,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 37,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 5,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 9,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 13,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 8,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 2,
  "time_alive": 1554,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 4,
  "time_alive": 1530,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 13,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 10,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 53,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 2,
  "time_alive": 1547,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 4,
  "time_alive": 1526,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 64,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 6,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 84,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 4,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 30,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 25,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 23,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 1,
  "time_alive": 1506,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 77,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 9,
  "time_alive": 1476,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 4,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 21,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 3,
  "time_alive": 1539,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 27,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 25,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 95,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 61,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 5,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 23,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 15,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 5,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 15,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 24,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 12,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 8,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 30,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 25,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 29,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 33,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 48,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 35,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 18,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 2,
  "time_alive": 1513,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 44,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 9,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 7,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 10,
  "time_alive": 1448,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 45,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 74,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 10,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 23,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 20,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 24,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 34,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 69,
  "time_alive": 784,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 17,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 17,
  "time_alive": 1448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 2,
  "time_alive": 1550,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 75,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 56,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 11,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 60,
  "time_alive": 1146,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 46,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 1,
  "time_alive": 1550,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 49,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 12,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 67,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 90,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 90,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 45,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 8,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 56,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 14,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 22,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 9,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 37,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 70,
  "time_alive": 774,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 52,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 12,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 90,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 42,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 3,
  "time_alive": 1520,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 3,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 69,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 1,
  "time_alive": 1554,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 91,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 40,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 16,
  "time_alive": 1426,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 83,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 51,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 6,
  "time_alive": 1520,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 28,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 36,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 69,
  "time_alive": 850,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 49,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 47,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 13,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 43,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 14,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 27,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 19,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 1,
  "time_alive": 1547,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 69,
  "time_alive": 1043,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 60,
  "time_alive": 925,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 88,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 94,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 93,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 49,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 65,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 15,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 67,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 20,
  "time_alive": 1408,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 17,
  "time_alive": 1423,
  "elims": 2,
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
    