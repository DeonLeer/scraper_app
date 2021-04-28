const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 79,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 49,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 38,
  "time_alive": 1344,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 3,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 40,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 55,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 91,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 12,
  "time_alive": 1471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 19,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 32,
  "time_alive": 1373,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 46,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 74,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 69,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 34,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 14,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 8,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 69,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 38,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 82,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 59,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 10,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 36,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 14,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 1,
  "time_alive": 1536,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 89,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 97,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 98,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 50,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 72,
  "time_alive": 608,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 15,
  "time_alive": 1418,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 11,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 42,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 74,
  "time_alive": 784,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 68,
  "time_alive": 850,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 14,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 18,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 54,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 74,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 21,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 33,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 28,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 25,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 79,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 80,
  "time_alive": 499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 29,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 62,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 34,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 10,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 38,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 23,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 26,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 20,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 85,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 65,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 28,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 22,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 46,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 27,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 71,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 50,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 13,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 84,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 64,
  "time_alive": 894,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 20,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 68,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 41,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 88,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 5,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 83,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 80,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 34,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 23,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 29,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 69,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 13,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 45,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 48,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 46,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 81,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 18,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 67,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 77,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 54,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 22,
  "time_alive": 1365,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 12,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 56,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 94,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 81,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 66,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 18,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 57,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 57,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 22,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 40,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 80,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 20,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 65,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 8,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 34,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 93,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 22,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 73,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 30,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 32,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 17,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 58,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 62,
  "time_alive": 1020,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 67,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 58,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 47,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 41,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 69,
  "time_alive": 684,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 7,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 47,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 52,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 71,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 3,
  "time_alive": 1525,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 37,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 51,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 68,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 54,
  "time_alive": 1203,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 68,
  "time_alive": 930,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 42,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 82,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 42,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 31,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 27,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 78,
  "time_alive": 606,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 60,
  "time_alive": 1032,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 65,
  "time_alive": 896,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 29,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 26,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 70,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 67,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 87,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 21,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 39,
  "time_alive": 1338,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 89,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "8ac3663c051944f292a7d64ed28a064c",
  "placement": 93,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "8ac3663c051944f292a7d64ed28a064c",
  "placement": 52,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "8ac3663c051944f292a7d64ed28a064c",
  "placement": 51,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "8ac3663c051944f292a7d64ed28a064c",
  "placement": 86,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "8ac3663c051944f292a7d64ed28a064c",
  "placement": 31,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "8ac3663c051944f292a7d64ed28a064c",
  "placement": 15,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 2,
  "time_alive": 1536,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 72,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 63,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 84,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 61,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 59,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 28,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 36,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 54,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 59,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 29,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 86,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 51,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 45,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 43,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 8,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 52,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 26,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 93,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 55,
  "time_alive": 1124,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 78,
  "time_alive": 338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 67,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 37,
  "time_alive": 1258,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 24,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 60,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 35,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 68,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 72,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 35,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 9,
  "time_alive": 1483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 81,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 25,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 95,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 64,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 39,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 94,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 29,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 44,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 75,
  "time_alive": 704,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 78,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 32,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 6,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 57,
  "time_alive": 1069,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 94,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 86,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 37,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 27,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 71,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 71,
  "time_alive": 652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 53,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 40,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 43,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 73,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 72,
  "time_alive": 634,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 19,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 47,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 48,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 47,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 75,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 73,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 46,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 20,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 77,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 67,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 36,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 82,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 39,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 16,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 64,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 77,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 21,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 90,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 64,
  "time_alive": 990,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 57,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 40,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 10,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 80,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 91,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 90,
  "time_alive": 132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 94,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 80,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 28,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 61,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 32,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 33,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 51,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 64,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 79,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 83,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 41,
  "time_alive": 1322,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 44,
  "time_alive": 1207,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 96,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 20,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 99,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 31,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 84,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 49,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 85,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 24,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 47,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 76,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 45,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 71,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 30,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 69,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 36,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 83,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 70,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 68,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 53,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 40,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 48,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 86,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 62,
  "time_alive": 742,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "c0ef82b2450b4e08a13d8dc32ea8c075",
  "placement": 36,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "c0ef82b2450b4e08a13d8dc32ea8c075",
  "placement": 87,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "c0ef82b2450b4e08a13d8dc32ea8c075",
  "placement": 88,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "c0ef82b2450b4e08a13d8dc32ea8c075",
  "placement": 49,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "c0ef82b2450b4e08a13d8dc32ea8c075",
  "placement": 38,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "c0ef82b2450b4e08a13d8dc32ea8c075",
  "placement": 88,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 49,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 31,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 65,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 50,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 69,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 84,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 45,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 18,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 56,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 72,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 53,
  "time_alive": 1205,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 91,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 42,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 96,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 85,
  "time_alive": 273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 61,
  "time_alive": 1175,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 44,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 76,
  "time_alive": 420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 73,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "6857edf75a3149b68bb891b612b23236",
  "placement": 72,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "6857edf75a3149b68bb891b612b23236",
  "placement": 40,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "6857edf75a3149b68bb891b612b23236",
  "placement": 43,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "6857edf75a3149b68bb891b612b23236",
  "placement": 57,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "6857edf75a3149b68bb891b612b23236",
  "placement": 82,
  "time_alive": 287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "6857edf75a3149b68bb891b612b23236",
  "placement": 92,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 62,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 54,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 26,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 63,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 52,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 61,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 92,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 99,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 90,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 16,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 77,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 87,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "8778d4526eec43c381fda6030086d57c",
  "placement": 75,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "8778d4526eec43c381fda6030086d57c",
  "placement": 58,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "8778d4526eec43c381fda6030086d57c",
  "placement": 89,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "8778d4526eec43c381fda6030086d57c",
  "placement": 91,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "8778d4526eec43c381fda6030086d57c",
  "placement": 23,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "8778d4526eec43c381fda6030086d57c",
  "placement": 83,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 77,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 50,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 31,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 73,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 89,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 76,
  "time_alive": 419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 18,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 59,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 84,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 87,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 88,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 93,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "ac7a97bbb8f54925b03bf73e89cd3724",
  "placement": 99,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "ac7a97bbb8f54925b03bf73e89cd3724",
  "placement": 90,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "ac7a97bbb8f54925b03bf73e89cd3724",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "ac7a97bbb8f54925b03bf73e89cd3724",
  "placement": 92,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "ac7a97bbb8f54925b03bf73e89cd3724",
  "placement": 50,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "ac7a97bbb8f54925b03bf73e89cd3724",
  "placement": 19,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 78,
  "time_alive": 516,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 38,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 66,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 89,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 78,
  "time_alive": 523,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 51,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 60,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 86,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 81,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 75,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 87,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 25,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 66,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 83,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 78,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 55,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 63,
  "time_alive": 1010,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 71,
  "time_alive": 550,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "2cda97cef1fe4560878744c59ebe74ac",
  "placement": 82,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "2cda97cef1fe4560878744c59ebe74ac",
  "placement": 76,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "2cda97cef1fe4560878744c59ebe74ac",
  "placement": 48,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "2cda97cef1fe4560878744c59ebe74ac",
  "placement": 56,
  "time_alive": 992,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "2cda97cef1fe4560878744c59ebe74ac",
  "placement": 55,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "2cda97cef1fe4560878744c59ebe74ac",
  "placement": 43,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 44,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 61,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 86,
  "time_alive": 238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 88,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 85,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 81,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d",
  "placement": 76,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d",
  "placement": 97,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d",
  "placement": 58,
  "time_alive": 1069,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d",
  "placement": 62,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d",
  "placement": 93,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d",
  "placement": 66,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 63,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 88,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 70,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 83,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 96,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 44,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "0441248396364acd93146119beddc0d0",
  "placement": 45,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "0441248396364acd93146119beddc0d0",
  "placement": 63,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "0441248396364acd93146119beddc0d0",
  "placement": 92,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "0441248396364acd93146119beddc0d0",
  "placement": 79,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "0441248396364acd93146119beddc0d0",
  "placement": 81,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "59f68289ede544ca9822d7f72db49fb0",
  "placement": 98,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "59f68289ede544ca9822d7f72db49fb0",
  "placement": 70,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "59f68289ede544ca9822d7f72db49fb0",
  "placement": 96,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "59f68289ede544ca9822d7f72db49fb0",
  "placement": 74,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "59f68289ede544ca9822d7f72db49fb0",
  "placement": 92,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "59f68289ede544ca9822d7f72db49fb0",
  "placement": 82,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1485,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 68,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 20,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 29,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 82,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 7,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 79,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1535,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 31,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1521,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 42,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 21,
  "time_alive": 1384,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 8,
  "time_alive": 1445,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 92,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 40,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 15,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 2,
  "time_alive": 1528,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 5,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 28,
  "time_alive": 1343,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 2,
  "time_alive": 1535,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 82,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 2,
  "time_alive": 1521,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 46,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 3,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 16,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 49,
  "time_alive": 1227,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 64,
  "time_alive": 1083,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 19,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 3,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 26,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 69,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 13,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 1,
  "time_alive": 1543,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 31,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 11,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 66,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 84,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 6,
  "time_alive": 1460,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 10,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 10,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 17,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 19,
  "time_alive": 1391,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 18,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 14,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 80,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 35,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 9,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 95,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 3,
  "time_alive": 1474,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 16,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 95,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 17,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 4,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 31,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 6,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 8,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 34,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 12,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 38,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 2,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 34,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 18,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 13,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 16,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 33,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 24,
  "time_alive": 1370,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 2,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 27,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 14,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 42,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 51,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 69,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 7,
  "time_alive": 1447,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 65,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 9,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 56,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 18,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 83,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 27,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 10,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 51,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 11,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 16,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 4,
  "time_alive": 1472,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 52,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 21,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 11,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 23,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 60,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 65,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 5,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 7,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 88,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 28,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 13,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 14,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 9,
  "time_alive": 1444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 19,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 68,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 36,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 26,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 60,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 15,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 69,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 6,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 21,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 32,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 22,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 81,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 30,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 12,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 7,
  "time_alive": 1453,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 55,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 20,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 67,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 24,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 5,
  "time_alive": 1509,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 49,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 86,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 94,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 10,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 31,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 8,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 80,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 14,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 42,
  "time_alive": 1254,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 31,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 25,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 91,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 14,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 28,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 78,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 32,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 41,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 67,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 3,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 10,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 9,
  "time_alive": 1435,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 87,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 66,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 36,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 18,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 75,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 34,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 100,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 34,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 39,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 25,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 19,
  "time_alive": 1428,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 82,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 95,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 44,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 42,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 4,
  "time_alive": 1484,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 8,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 13,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 96,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 32,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 16,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 54,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 15,
  "time_alive": 1443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 62,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 71,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 23,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 4,
  "time_alive": 1512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 64,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 7,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 36,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1472,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 26,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 89,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 63,
  "time_alive": 977,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 16,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 25,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 40,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 74,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 27,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 31,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 25,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 89,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 29,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 3,
  "time_alive": 1515,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 50,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 66,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 28,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 61,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 17,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 62,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 27,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 64,
  "time_alive": 1053,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 66,
  "time_alive": 990,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 20,
  "time_alive": 1413,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 50,
  "time_alive": 1235,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 60,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 35,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 37,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 22,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 70,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 43,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 5,
  "time_alive": 1478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 23,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 8,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 63,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 48,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 90,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 33,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 22,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 56,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 30,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 5,
  "time_alive": 1461,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 85,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 61,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 30,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 15,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 40,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 39,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 21,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 63,
  "time_alive": 1018,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 61,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 10,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 46,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 4,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 98,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 94,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 48,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 51,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 26,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 73,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 18,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 8,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 25,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 68,
  "time_alive": 970,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 35,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 37,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 27,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 44,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 47,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 54,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 33,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 64,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 93,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 13,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 12,
  "time_alive": 1454,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 90,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 98,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 88,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 15,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 72,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 6,
  "time_alive": 1491,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 85,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 62,
  "time_alive": 1047,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 3,
  "time_alive": 1499,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 81,
  "time_alive": 739,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 74,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 65,
  "time_alive": 897,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 96,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 43,
  "time_alive": 1234,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 95,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 35,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 22,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 20,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 43,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 65,
  "time_alive": 1015,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 9,
  "time_alive": 1450,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 69,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 58,
  "time_alive": 1060,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 87,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 76,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 78,
  "time_alive": 829,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 35,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 29,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 9,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 54,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 17,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 11,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 58,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 72,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 53,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 78,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 87,
  "time_alive": 786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 51,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 51,
  "time_alive": 1210,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 76,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 82,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 1,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 6,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 70,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 93,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 48,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 37,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 62,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 33,
  "time_alive": 1330,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 14,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 53,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 83,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 41,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 76,
  "time_alive": 500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 52,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 72,
  "time_alive": 868,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 15,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 45,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 75,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 73,
  "time_alive": 622,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 81,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 73,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 63,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 2,
  "time_alive": 1543,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 81,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 64,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 18,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 29,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 85,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 23,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 70,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 80,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 49,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 48,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 94,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 7,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 30,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 85,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 73,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 41,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 50,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 25,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 38,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 29,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 47,
  "time_alive": 1213,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 88,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 86,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 96,
  "time_alive": 210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 87,
  "time_alive": 474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 5,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 30,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 49,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 60,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 22,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 79,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 41,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 23,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 59,
  "time_alive": 1073,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 33,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 55,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 32,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 50,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 92,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 13,
  "time_alive": 1413,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 72,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 37,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 77,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 81,
  "time_alive": 391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 27,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 55,
  "time_alive": 1110,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 38,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 59,
  "time_alive": 1148,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 45,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 12,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 39,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 89,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 47,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 86,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 94,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 38,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 60,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 36,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 73,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 34,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 21,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 91,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 45,
  "time_alive": 1223,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 28,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 60,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 47,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 53,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 39,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 57,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 47,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 61,
  "time_alive": 1135,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 98,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 36,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 100,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 99,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 11,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 79,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 68,
  "time_alive": 909,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 44,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 55,
  "time_alive": 1140,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 68,
  "time_alive": 944,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 75,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 20,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 83,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 88,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 75,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 12,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 46,
  "time_alive": 1292,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 83,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 49,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 59,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 53,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 67,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 26,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 55,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 24,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 46,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 37,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 17,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 90,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 39,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 57,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 24,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 56,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 28,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 71,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 57,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 84,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 58,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 43,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 24,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 51,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 37,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 50,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 23,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 54,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 89,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 40,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 68,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 53,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 47,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 77,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 70,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 24,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 71,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 58,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 38,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 52,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 38,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 67,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 43,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 40,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 64,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 22,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 75,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 96,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 59,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 80,
  "time_alive": 838,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 54,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 42,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 49,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 78,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 91,
  "time_alive": 196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 11,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 82,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 71,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 57,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 84,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 72,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 48,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 85,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 100,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 77,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 59,
  "time_alive": 1054,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 40,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 61,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 93,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 57,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 94,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 48,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 34,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 67,
  "time_alive": 977,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 86,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 78,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 33,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 69,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 67,
  "time_alive": 770,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 44,
  "time_alive": 1228,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 44,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 55,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 66,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 52,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 99,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 63,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 92,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 81,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 19,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 95,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 52,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 75,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 19,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 91,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 63,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 65,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 96,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 93,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 76,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 99,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 58,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 6,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 93,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 79,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 50,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 87,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 62,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 39,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 95,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 77,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 20,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 82,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 86,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 88,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 92,
  "time_alive": 184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 89,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 17,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 76,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 84,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 99,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 70,
  "time_alive": 646,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 71,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 42,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 59,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 87,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 26,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 100,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 72,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 21,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 98,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 99,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 43,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 90,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 41,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 56,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 83,
  "time_alive": 801,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 32,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 73,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 79,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 45,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 91,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 46,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 65,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 66,
  "time_alive": 947,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 74,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 35,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 77,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 45,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 71,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 45,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 77,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 70,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 36,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 90,
  "time_alive": 580,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 53,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 46,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 56,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 86,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 61,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 97,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 41,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 93,
  "time_alive": 289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 58,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 99,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 97,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 96,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 30,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 100,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 97,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 29,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 74,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 84,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 92,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 97,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 88,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 97,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 83,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 62,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 52,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 92,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 69,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 32,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 80,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 79,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 97,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 91,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 89,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 98,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 94,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 80,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 54,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 76,
  "time_alive": 832,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 98,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "133d8c79-dee5-45ee-a6f0-7f41bd6ff610",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 74,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f022073-9fd8-4f65-bf37-c36e9cef3897",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 90,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18c76420-902b-4278-a4da-3a828f84c3c6",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 74,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2314f2-060d-4f2b-bede-db3d049e7a1c",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 78,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f8b15d-53a9-4d0a-801d-79a8c70a8fce",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 85,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09d6b370-c272-4cd0-828a-6d6add1a2eb3",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 84,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 20,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 30,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 40,
  "time_alive": 1312,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 1,
  "time_alive": 1520,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 74,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 3,
  "time_alive": 1560,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 25,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 22,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 2,
  "time_alive": 1561,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 38,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 5,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 13,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1556,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 47,
  "time_alive": 1232,
  "elims": 1,
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
    