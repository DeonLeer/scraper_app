const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 10,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 33,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 93,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 62,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 4,
  "time_alive": 1532,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 78,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 25,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 14,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 54,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 50,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 17,
  "time_alive": 1460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 40,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 53,
  "time_alive": 1164,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 54,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 34,
  "time_alive": 1362,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 46,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 91,
  "time_alive": 247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 19,
  "time_alive": 1443,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 77,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 24,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 11,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 52,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 62,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 20,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 43,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 61,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 33,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 68,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 26,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 6,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 17,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 19,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 24,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 72,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 40,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 36,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 25,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 56,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 37,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 14,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 52,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 86,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 37,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 3,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 68,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 34,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 98,
  "time_alive": 61,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 11,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 55,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 49,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 16,
  "time_alive": 1462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 24,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 55,
  "time_alive": 1149,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 52,
  "time_alive": 1169,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 19,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 85,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 48,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 25,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 38,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 73,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 66,
  "time_alive": 1020,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 9,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 74,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 70,
  "time_alive": 517,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 51,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 21,
  "time_alive": 1419,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 82,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 22,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 21,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 80,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 30,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 96,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 58,
  "time_alive": 1165,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 15,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 22,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 54,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 39,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 6,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 79,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 33,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 84,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 22,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 75,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 76,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 3,
  "time_alive": 1533,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 55,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 75,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 61,
  "time_alive": 763,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 81,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 50,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 5,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 51,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 43,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 50,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 15,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 93,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 45,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 83,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 13,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 83,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 26,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 56,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 53,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 86,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 33,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 8,
  "time_alive": 1499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 72,
  "time_alive": 737,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 41,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 73,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 25,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 45,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 16,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 62,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 68,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 27,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 5,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 49,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 57,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 50,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 23,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 17,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 76,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 58,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 58,
  "time_alive": 808,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 94,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 64,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 4,
  "time_alive": 1529,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 41,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 46,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 51,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 70,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 28,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 31,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 12,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 82,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 63,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 35,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 42,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 98,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 23,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 23,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 27,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 78,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 34,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 30,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 57,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 35,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 84,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 16,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 40,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 52,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 31,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 47,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 81,
  "time_alive": 370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 80,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 89,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 41,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 96,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 2,
  "time_alive": 1543,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 48,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 86,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 29,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 51,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 18,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 87,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 65,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 87,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 69,
  "time_alive": 905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 8,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 26,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 57,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 85,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 48,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 31,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 57,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 9,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 74,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 27,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 46,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 42,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 16,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 53,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 62,
  "time_alive": 727,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 89,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 91,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 26,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 4,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 86,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 82,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 41,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 25,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 92,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 35,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 30,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 46,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 76,
  "time_alive": 606,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 55,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 62,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 27,
  "time_alive": 1365,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 92,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 77,
  "time_alive": 422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 37,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 35,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 86,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 65,
  "time_alive": 1047,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 73,
  "time_alive": 695,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 68,
  "time_alive": 567,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 47,
  "time_alive": 1230,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 57,
  "time_alive": 1095,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 23,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 36,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 93,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 32,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 20,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 44,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 88,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 81,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 59,
  "time_alive": 794,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 58,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 26,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 28,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 54,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 65,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 45,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 54,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 36,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 63,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 29,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 69,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 73,
  "time_alive": 463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 60,
  "time_alive": 1093,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 12,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 96,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 81,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 80,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 31,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 49,
  "time_alive": 1217,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 74,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 90,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 40,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 25,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 94,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 74,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 94,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 18,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 44,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 50,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 53,
  "time_alive": 1125,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 31,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 75,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 80,
  "time_alive": 610,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 82,
  "time_alive": 479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 85,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 66,
  "time_alive": 617,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 95,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 95,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 70,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 77,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 7,
  "time_alive": 1520,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 67,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 23,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 78,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 76,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 87,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 34,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 36,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 20,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 60,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 87,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 73,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 56,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 47,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 67,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 67,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 32,
  "time_alive": 1366,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 47,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 55,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 69,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 88,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 72,
  "time_alive": 837,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 48,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 78,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 29,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 44,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1",
  "placement": 91,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1",
  "placement": 50,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1",
  "placement": 84,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1",
  "placement": 32,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1",
  "placement": 41,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 97,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 32,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 35,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 80,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 88,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 64,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 87,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 68,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 32,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 42,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 71,
  "time_alive": 478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 42,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 81,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 21,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 89,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 59,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 76,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 8,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 92,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 56,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 95,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 94,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "cc5498207b6e46f09ecc76bc3ace341d",
  "placement": 61,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "cc5498207b6e46f09ecc76bc3ace341d",
  "placement": 43,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "cc5498207b6e46f09ecc76bc3ace341d",
  "placement": 74,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "cc5498207b6e46f09ecc76bc3ace341d",
  "placement": 60,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "cc5498207b6e46f09ecc76bc3ace341d",
  "placement": 29,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "be1c0d3c0b074ff4818bc1e4421cb5e2",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "be1c0d3c0b074ff4818bc1e4421cb5e2",
  "placement": 84,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "be1c0d3c0b074ff4818bc1e4421cb5e2",
  "placement": 95,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "be1c0d3c0b074ff4818bc1e4421cb5e2",
  "placement": 63,
  "time_alive": 1081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "be1c0d3c0b074ff4818bc1e4421cb5e2",
  "placement": 61,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "be1c0d3c0b074ff4818bc1e4421cb5e2",
  "placement": 56,
  "time_alive": 972,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b0b8c28096c9451dad05b9d536caeec3",
  "placement": 44,
  "time_alive": 1242,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b0b8c28096c9451dad05b9d536caeec3",
  "placement": 59,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b0b8c28096c9451dad05b9d536caeec3",
  "placement": 58,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b0b8c28096c9451dad05b9d536caeec3",
  "placement": 54,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b0b8c28096c9451dad05b9d536caeec3",
  "placement": 96,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 65,
  "time_alive": 963,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 49,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 84,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 93,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 66,
  "time_alive": 961,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 72,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 34,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 80,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 94,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 66,
  "time_alive": 1024,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 42,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 46,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 51,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 60,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 64,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 72,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 92,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 68,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 38,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 47,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 94,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 52,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 79,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 69,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 37,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 53,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 78,
  "time_alive": 580,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 39,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 96,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 39,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 83,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 70,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 26,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "139a22299c2d4bcbb33e6269e31f7d47",
  "placement": 79,
  "time_alive": 665,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "139a22299c2d4bcbb33e6269e31f7d47",
  "placement": 69,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "139a22299c2d4bcbb33e6269e31f7d47",
  "placement": 45,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "139a22299c2d4bcbb33e6269e31f7d47",
  "placement": 93,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "139a22299c2d4bcbb33e6269e31f7d47",
  "placement": 91,
  "time_alive": 168,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 84,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 47,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 64,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 74,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 88,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 38,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 59,
  "time_alive": 1118,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 82,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 81,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 97,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 44,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 86,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 71,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 65,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 78,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 92,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 90,
  "time_alive": 248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 97,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "54e1ba98b4924957a691744eac41dc99",
  "placement": 83,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "54e1ba98b4924957a691744eac41dc99",
  "placement": 45,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "54e1ba98b4924957a691744eac41dc99",
  "placement": 75,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "54e1ba98b4924957a691744eac41dc99",
  "placement": 90,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "54e1ba98b4924957a691744eac41dc99",
  "placement": 51,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "54e1ba98b4924957a691744eac41dc99",
  "placement": 90,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 92,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 83,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 38,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 70,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 96,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 95,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 82,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 48,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 97,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 71,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 76,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 87,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b7370e5ee06a4f1ea595cdc184358858",
  "placement": 79,
  "time_alive": 539,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b7370e5ee06a4f1ea595cdc184358858",
  "placement": 90,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b7370e5ee06a4f1ea595cdc184358858",
  "placement": 88,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b7370e5ee06a4f1ea595cdc184358858",
  "placement": 91,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b7370e5ee06a4f1ea595cdc184358858",
  "placement": 89,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b7370e5ee06a4f1ea595cdc184358858",
  "placement": 89,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 28,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1538,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 18,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1499,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 26,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 74,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 3,
  "time_alive": 1535,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 3,
  "time_alive": 1520,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 11,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 1,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 5,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 12,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 4,
  "time_alive": 1515,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 22,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 69,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 2,
  "time_alive": 1495,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 30,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 60,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 61,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 2,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 12,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 40,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 6,
  "time_alive": 1502,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 21,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 63,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 26,
  "time_alive": 1384,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 6,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 8,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 7,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 81,
  "time_alive": 526,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 47,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 42,
  "time_alive": 1310,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 2,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 17,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 95,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 75,
  "time_alive": 561,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 1,
  "time_alive": 1492,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 13,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 4,
  "time_alive": 1516,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 68,
  "time_alive": 888,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 13,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 23,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 29,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 1,
  "time_alive": 1495,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 87,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 85,
  "time_alive": 392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 6,
  "time_alive": 1497,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 87,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 46,
  "time_alive": 1211,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 20,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 71,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 33,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 2,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 24,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 11,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 68,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 23,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 16,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 17,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 25,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 67,
  "time_alive": 969,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 9,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 6,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 4,
  "time_alive": 1513,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 61,
  "time_alive": 996,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 93,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 6,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 77,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 46,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 30,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 11,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 15,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 36,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 16,
  "time_alive": 1458,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 77,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 24,
  "time_alive": 1397,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 43,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 22,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 66,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 82,
  "time_alive": 738,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 11,
  "time_alive": 1456,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 42,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 9,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 21,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 41,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 61,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 8,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 14,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 74,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 3,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 34,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 29,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 16,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 31,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 49,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 16,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 29,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 40,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 88,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 53,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 4,
  "time_alive": 1492,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 13,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 86,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 19,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 89,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 8,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 6,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 27,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 10,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 64,
  "time_alive": 933,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 47,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 33,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 5,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 17,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 27,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 46,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 31,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 3,
  "time_alive": 1515,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 48,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 68,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 32,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 10,
  "time_alive": 1485,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 53,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 15,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 59,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 71,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 60,
  "time_alive": 1048,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 1,
  "time_alive": 1530,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 7,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 53,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 12,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 11,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 67,
  "time_alive": 928,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 9,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 64,
  "time_alive": 764,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 60,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 4,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 31,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 79,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 44,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 21,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 7,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 44,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 99,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 13,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 1,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 95,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 54,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 33,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 2,
  "time_alive": 1538,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 69,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 71,
  "time_alive": 689,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 69,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 10,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 14,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 79,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 35,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 46,
  "time_alive": 1256,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 16,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 50,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 9,
  "time_alive": 1436,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 35,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 9,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 92,
  "time_alive": 305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 34,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 79,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 88,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 98,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 27,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 20,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 13,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 64,
  "time_alive": 715,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 21,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 26,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 91,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 82,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 8,
  "time_alive": 1453,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 44,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 16,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 45,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 5,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 41,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 60,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 51,
  "time_alive": 1032,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 25,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 36,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 84,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 29,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 46,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 19,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 5,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 57,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 12,
  "time_alive": 1453,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 84,
  "time_alive": 522,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 33,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 76,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 31,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 48,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 76,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 25,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 10,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 61,
  "time_alive": 729,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 7,
  "time_alive": 1456,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 69,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 64,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 19,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 45,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 65,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 80,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 93,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 58,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 5,
  "time_alive": 1503,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 32,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 66,
  "time_alive": 683,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 38,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 44,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 22,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 56,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 40,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 48,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 47,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 18,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 89,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 76,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 9,
  "time_alive": 1433,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 91,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 14,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 17,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 28,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 31,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 51,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 75,
  "time_alive": 826,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 42,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 58,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 25,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 14,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 26,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 23,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 100,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 94,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 93,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 8,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 50,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 30,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 10,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 27,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 62,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 77,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 17,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 40,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 12,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 82,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 73,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 15,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 83,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 19,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 36,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 59,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 38,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 72,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 27,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 83,
  "time_alive": 443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 35,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 63,
  "time_alive": 818,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 75,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 22,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 90,
  "time_alive": 297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 66,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 79,
  "time_alive": 544,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 4,
  "time_alive": 1461,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 64,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 81,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 10,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 34,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 37,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 24,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 70,
  "time_alive": 860,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 37,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 29,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 21,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 84,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 47,
  "time_alive": 1158,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 18,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 49,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 37,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 55,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 35,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 39,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 35,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 42,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 24,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 38,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 33,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 98,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 96,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 70,
  "time_alive": 852,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 95,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 15,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 18,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 19,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 41,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 73,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 37,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 41,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 56,
  "time_alive": 904,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 65,
  "time_alive": 1033,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 43,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 26,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 40,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 72,
  "time_alive": 597,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 58,
  "time_alive": 807,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 52,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 5,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 78,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 54,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 78,
  "time_alive": 544,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 28,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 55,
  "time_alive": 1163,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 8,
  "time_alive": 1493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 94,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 52,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 22,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 87,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 54,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 14,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 15,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 81,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 81,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 71,
  "time_alive": 589,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 39,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 62,
  "time_alive": 1002,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 50,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 87,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 18,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 49,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 46,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 24,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 49,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 76,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 94,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 23,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 69,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 72,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 72,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 99,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 12,
  "time_alive": 1429,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 74,
  "time_alive": 545,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 92,
  "time_alive": 171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 21,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 80,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 72,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 44,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 30,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 73,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 92,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 7,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 65,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 40,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 41,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 87,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 66,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 20,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 83,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 19,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 43,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 83,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 63,
  "time_alive": 940,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 17,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 96,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 7,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 91,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 37,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 58,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 45,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 60,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 39,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 20,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 68,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 18,
  "time_alive": 1443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 51,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 64,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 30,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 37,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 43,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 13,
  "time_alive": 1472,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 57,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 62,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 65,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 88,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 78,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 74,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 56,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 27,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 58,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 32,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 23,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 34,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 38,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 88,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 67,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 55,
  "time_alive": 923,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 84,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 20,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 82,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 28,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 52,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 57,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "c03da2eea24a4a309d57fbb5def4cb66",
  "placement": 81,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "c03da2eea24a4a309d57fbb5def4cb66",
  "placement": 32,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "c03da2eea24a4a309d57fbb5def4cb66",
  "placement": 43,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "c03da2eea24a4a309d57fbb5def4cb66",
  "placement": 45,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "c03da2eea24a4a309d57fbb5def4cb66",
  "placement": 83,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "c03da2eea24a4a309d57fbb5def4cb66",
  "placement": 11,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 42,
  "time_alive": 1253,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 70,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 44,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 26,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 98,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 97,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 30,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 39,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 86,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 91,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 57,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 36,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 24,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 54,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 65,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 48,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 47,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 52,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 60,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 88,
  "time_alive": 505,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 39,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 93,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 20,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 45,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 45,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 56,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 25,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 86,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 80,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 47,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 28,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 71,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 77,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 80,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 42,
  "time_alive": 1246,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 22,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 33,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 99,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 73,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 99,
  "time_alive": 87,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 95,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 96,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 25,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 34,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 78,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 50,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 94,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 62,
  "time_alive": 1100,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 51,
  "time_alive": 1176,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 36,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 79,
  "time_alive": 568,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 90,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 78,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 59,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 95,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 92,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 23,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 29,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 90,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 93,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 65,
  "time_alive": 928,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 48,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 49,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 55,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 63,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "d626627ba62646e1b3ca374176e2c7c4",
  "placement": 61,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "d626627ba62646e1b3ca374176e2c7c4",
  "placement": 73,
  "time_alive": 840,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "d626627ba62646e1b3ca374176e2c7c4",
  "placement": 28,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "d626627ba62646e1b3ca374176e2c7c4",
  "placement": 70,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "d626627ba62646e1b3ca374176e2c7c4",
  "placement": 73,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "d626627ba62646e1b3ca374176e2c7c4",
  "placement": 84,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "bddad22c2e9e4eb8bead65edec161e88",
  "placement": 57,
  "time_alive": 1154,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "bddad22c2e9e4eb8bead65edec161e88",
  "placement": 53,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "bddad22c2e9e4eb8bead65edec161e88",
  "placement": 41,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "bddad22c2e9e4eb8bead65edec161e88",
  "placement": 80,
  "time_alive": 567,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "bddad22c2e9e4eb8bead65edec161e88",
  "placement": 88,
  "time_alive": 328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "bddad22c2e9e4eb8bead65edec161e88",
  "placement": 92,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "c24169150348401f80e5ff4311534667",
  "placement": 85,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "c24169150348401f80e5ff4311534667",
  "placement": 59,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "c24169150348401f80e5ff4311534667",
  "placement": 75,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "c24169150348401f80e5ff4311534667",
  "placement": 38,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "c24169150348401f80e5ff4311534667",
  "placement": 54,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "c24169150348401f80e5ff4311534667",
  "placement": 85,
  "time_alive": 345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 94,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 78,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 32,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 39,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 85,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 72,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 75,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 55,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 54,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 68,
  "time_alive": 827,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 70,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 98,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "a6238546b07046a4ab7c525a532b3a4a",
  "placement": 49,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "a6238546b07046a4ab7c525a532b3a4a",
  "placement": 86,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "a6238546b07046a4ab7c525a532b3a4a",
  "placement": 52,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "a6238546b07046a4ab7c525a532b3a4a",
  "placement": 57,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "a6238546b07046a4ab7c525a532b3a4a",
  "placement": 97,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "a6238546b07046a4ab7c525a532b3a4a",
  "placement": 48,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 91,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 94,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 59,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 50,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 66,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 34,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 50,
  "time_alive": 1209,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 90,
  "time_alive": 287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 98,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 86,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 91,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 83,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 90,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 84,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 97,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 43,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 53,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 77,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "7e624af6edbe41a8b5e40da6f3543412",
  "placement": 63,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "7e624af6edbe41a8b5e40da6f3543412",
  "placement": 85,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "7e624af6edbe41a8b5e40da6f3543412",
  "placement": 74,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "7e624af6edbe41a8b5e40da6f3543412",
  "placement": 85,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "7e624af6edbe41a8b5e40da6f3543412",
  "placement": 68,
  "time_alive": 667,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "7e624af6edbe41a8b5e40da6f3543412",
  "placement": 82,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 76,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 38,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 87,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 69,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 96,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 79,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 100,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 55,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 67,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 51,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 67,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 58,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 89,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 61,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 90,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 56,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 70,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 56,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 67,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 66,
  "time_alive": 936,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 51,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 89,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 96,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 82,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 76,
  "time_alive": 818,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 63,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 74,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 92,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 86,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 89,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 52,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 62,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 75,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 77,
  "time_alive": 549,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 99,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "bb624a8195dc4c469b1d7c61f93dcdc1",
  "placement": 80,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "bb624a8195dc4c469b1d7c61f93dcdc1",
  "placement": 93,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "bb624a8195dc4c469b1d7c61f93dcdc1",
  "placement": 59,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "bb624a8195dc4c469b1d7c61f93dcdc1",
  "placement": 62,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "bb624a8195dc4c469b1d7c61f93dcdc1",
  "placement": 81,
  "time_alive": 400,
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
    