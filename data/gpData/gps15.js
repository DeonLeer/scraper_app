const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 17,
  "time_alive": 1400,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 87,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 7,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 23,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 28,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 44,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 54,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 86,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 16,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 16,
  "time_alive": 1398,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 41,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 91,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 88,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 30,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 25,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 37,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 69,
  "time_alive": 779,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 47,
  "time_alive": 1227,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 36,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 27,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 32,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 11,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 23,
  "time_alive": 1380,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 51,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 42,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 25,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 38,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 54,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 17,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 29,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 28,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 38,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 14,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 86,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 6,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 66,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 29,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 86,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 22,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "587e08bbdb5145739d1fd689370c04d9",
  "placement": 89,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 25,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 19,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 10,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 80,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 49,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 40,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 94,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 58,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 20,
  "time_alive": 1389,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 55,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 47,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 20,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 75,
  "time_alive": 559,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 12,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 46,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 28,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 83,
  "time_alive": 418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 54,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 14,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 23,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 38,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 45,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 20,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 33,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 73,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 53,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 3,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 87,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 88,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 18,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 14,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 52,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 46,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 59,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 81,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 25,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 18,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 26,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "881b9a7a07e1413091cf1867cd8fdcd2",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 11,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 63,
  "time_alive": 978,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 80,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 24,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 34,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 13,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 59,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 70,
  "time_alive": 568,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 64,
  "time_alive": 1084,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 43,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 79,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 86,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 99,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 26,
  "time_alive": 1367,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 4,
  "time_alive": 1485,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 31,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 26,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 31,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 65,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 70,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 52,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 20,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 42,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 8,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 31,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 28,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 20,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 32,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 58,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 74,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 8,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 54,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 47,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 72,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 5,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 51,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 63,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 17,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 78,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 25,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 71,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 88,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 72,
  "time_alive": 549,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 19,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 10,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 10,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 74,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 84,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 79,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 30,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 70,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 72,
  "time_alive": 816,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 1,
  "time_alive": 1537,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 64,
  "time_alive": 912,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 34,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 63,
  "time_alive": 764,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 54,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 23,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 3,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 43,
  "time_alive": 1322,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 60,
  "time_alive": 982,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 92,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 67,
  "time_alive": 977,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 43,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 78,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 45,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 66,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 4,
  "time_alive": 1504,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 53,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 22,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 16,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 71,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 27,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 81,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 84,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 49,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 74,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 23,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 11,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "8648eed1eda44728a4928117ebd2616d",
  "placement": 13,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 88,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 22,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 67,
  "time_alive": 768,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 12,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 57,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 49,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 27,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "e0e767b332fa47959d39368a71000ff4",
  "placement": 29,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 22,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 76,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 89,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 62,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 80,
  "time_alive": 425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 55,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 5,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 17,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 59,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 17,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 18,
  "time_alive": 1389,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 65,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 86,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 97,
  "time_alive": 144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 48,
  "time_alive": 1266,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 23,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 91,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 26,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 69,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 33,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 65,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 35,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 9,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 44,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 3,
  "time_alive": 1480,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 85,
  "time_alive": 334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 42,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 48,
  "time_alive": 1272,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 35,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 72,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 62,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 79,
  "time_alive": 366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 68,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 44,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 35,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 83,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 81,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 10,
  "time_alive": 1429,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 18,
  "time_alive": 1398,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 13,
  "time_alive": 1411,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 28,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 84,
  "time_alive": 409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 68,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 43,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 92,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 24,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 40,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 65,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 19,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 37,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 42,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 39,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 17,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 41,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 43,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 8,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 74,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 76,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 18,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 31,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 72,
  "time_alive": 525,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 49,
  "time_alive": 1204,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 20,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 40,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 91,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 58,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 39,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 47,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 39,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "4660766ac0e64cac9591ea412faa6151",
  "placement": 11,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 62,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 90,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 13,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 93,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 19,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 21,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 61,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "55cc1ff314c6462dbf6c79934f6441d1",
  "placement": 36,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 41,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 29,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 90,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 45,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 48,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 67,
  "time_alive": 734,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 31,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 7,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 19,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 58,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 33,
  "time_alive": 1332,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 68,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 44,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 90,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 69,
  "time_alive": 588,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 48,
  "time_alive": 1213,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 53,
  "time_alive": 1192,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 79,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 24,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 59,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 30,
  "time_alive": 1350,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 94,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 66,
  "time_alive": 990,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 39,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 7,
  "time_alive": 1456,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 53,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 21,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 90,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 92,
  "time_alive": 233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 87,
  "time_alive": 309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 73,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 40,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 68,
  "time_alive": 805,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 59,
  "time_alive": 1043,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 78,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 40,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 2,
  "time_alive": 1537,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 77,
  "time_alive": 462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 90,
  "time_alive": 192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 68,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 39,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 78,
  "time_alive": 551,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 31,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 57,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 93,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 12,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 53,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 30,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 44,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 77,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 30,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 61,
  "time_alive": 1076,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 76,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 5,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 56,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 55,
  "time_alive": 1013,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 55,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 4,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 63,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 31,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 24,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 73,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 63,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 62,
  "time_alive": 790,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 70,
  "time_alive": 711,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 42,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 75,
  "time_alive": 499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 11,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 15,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 53,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 84,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 82,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 72,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 49,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 73,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 26,
  "time_alive": 1399,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 71,
  "time_alive": 688,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 33,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 24,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 75,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 63,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 91,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 88,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 83,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 4,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 24,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 86,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 57,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 48,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 41,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 25,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 74,
  "time_alive": 680,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 72,
  "time_alive": 642,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 71,
  "time_alive": 600,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 29,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 88,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 80,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 96,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 46,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 53,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 59,
  "time_alive": 994,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 59,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 96,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 1,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 32,
  "time_alive": 1366,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 32,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 37,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 28,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 96,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 100,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 85,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 99,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 35,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 50,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 31,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 14,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 36,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 90,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 37,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 39,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 58,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 77,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 27,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 34,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 82,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 83,
  "time_alive": 335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 12,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 48,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 49,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 42,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 91,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 63,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 65,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 65,
  "time_alive": 690,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 85,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 50,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 51,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 55,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 26,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 66,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 64,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 19,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 65,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 36,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 32,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 89,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 51,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 84,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 46,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "e82327ab49144257993bdd3062ca2dac",
  "placement": 27,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 84,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 62,
  "time_alive": 1004,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 16,
  "time_alive": 1397,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 99,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 79,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 45,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 88,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 51,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 37,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 45,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 78,
  "time_alive": 585,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 21,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 57,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 81,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "26f9dcda4b0946f69bcf400a21c120fb",
  "placement": 61,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 87,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 97,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 61,
  "time_alive": 970,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 67,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 82,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 4,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 85,
  "time_alive": 295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 87,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 67,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 47,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 34,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 41,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 89,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 21,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 81,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 76,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 57,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 95,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 13,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 55,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 69,
  "time_alive": 662,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 75,
  "time_alive": 466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 66,
  "time_alive": 653,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 45,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 18,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 87,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 75,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 69,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 42,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 50,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 77,
  "time_alive": 387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 21,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 27,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 56,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 60,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 90,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 82,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 87,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "7604f44c22a24acc9bb28b813a602253",
  "placement": 53,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 83,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 84,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 40,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 64,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 56,
  "time_alive": 1081,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 60,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 19,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 67,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 75,
  "time_alive": 442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 71,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 62,
  "time_alive": 939,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 10,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 75,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 70,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 70,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 72,
  "time_alive": 495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 49,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 56,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 57,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 87,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 50,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 32,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 79,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 22,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 35,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 61,
  "time_alive": 1010,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 68,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 41,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 54,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 61,
  "time_alive": 1033,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 80,
  "time_alive": 363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 80,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 50,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 54,
  "time_alive": 1180,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 76,
  "time_alive": 467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 46,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 98,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 40,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 69,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 57,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 33,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 100,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 95,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 73,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 27,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 47,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 91,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 73,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 82,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 82,
  "time_alive": 345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 15,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 85,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 56,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 93,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 89,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 74,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 29,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 79,
  "time_alive": 534,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 61,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 37,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "fd81038d0dad4e5585a03da4cd005d43",
  "placement": 93,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 92,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 89,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 64,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 98,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 40,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 79,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 97,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 34,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 81,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 100,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 94,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 25,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 95,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 54,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 56,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 23,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 52,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 71,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 62,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 48,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 60,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "57c18f77ea954dd7a32b244ff2e4cd88",
  "placement": 45,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 90,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 34,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 26,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 96,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 89,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 58,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 98,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 59,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 60,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 55,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 50,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 73,
  "time_alive": 697,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 46,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 76,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 52,
  "time_alive": 1206,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 52,
  "time_alive": 1178,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 38,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 51,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 43,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 97,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 97,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 78,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 91,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "cfbb75bac8804833a39b5346924f0958",
  "placement": 98,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 94,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 98,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 96,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 56,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 70,
  "time_alive": 704,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 91,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 77,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "3f9888c6f1e949e48235886602fc403b",
  "placement": 33,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 95,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 92,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 77,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 88,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 33,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 98,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 89,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 58,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 66,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 69,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 92,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 82,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 67,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 93,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 58,
  "time_alive": 1163,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "25bf617b6f644dcdb1a75f7a4741536c",
  "placement": 76,
  "time_alive": 389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 56,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 64,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 71,
  "time_alive": 615,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 94,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 81,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 46,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 68,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 96,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 77,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 75,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 86,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 92,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 47,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 80,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 76,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 74,
  "time_alive": 418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c53f9d9-76f0-4225-87ec-1ace437d41d7",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 82,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032a95ca-2771-4555-acff-3424df9b8ceb",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 66,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0303850e-3dcc-46c6-b7c6-c1f8e016ad53",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 97,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07736870-5990-48ec-9607-3ae3886a96a9",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 85,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048b60dc-7878-4493-8924-ebf2ad07eeaf",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 96,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06575a44-f70b-4293-86ad-c77774e6f517",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 52,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d88526a-cdf8-416d-90c2-e4a66c1246aa",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 99,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10071aeb-a5c2-4e54-9de2-16f42aa8ec37",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 97,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 4,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 15,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 17,
  "time_alive": 1462,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 13,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 41,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 2,
  "time_alive": 1509,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "48632da8c3bd478199f341acfa38c722",
  "placement": 50,
  "time_alive": 1160,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "48632da8c3bd478199f341acfa38c722",
  "placement": 1,
  "time_alive": 1489,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "48632da8c3bd478199f341acfa38c722",
  "placement": 2,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "48632da8c3bd478199f341acfa38c722",
  "placement": 65,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "48632da8c3bd478199f341acfa38c722",
  "placement": 4,
  "time_alive": 1485,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "48632da8c3bd478199f341acfa38c722",
  "placement": 26,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 17,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 11,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 8,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 26,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 14,
  "time_alive": 1441,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 45,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "d84b415adc684941b0edb6825bd607f1",
  "placement": 10,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "d84b415adc684941b0edb6825bd607f1",
  "placement": 24,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "d84b415adc684941b0edb6825bd607f1",
  "placement": 3,
  "time_alive": 1526,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "d84b415adc684941b0edb6825bd607f1",
  "placement": 69,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "d84b415adc684941b0edb6825bd607f1",
  "placement": 31,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "d84b415adc684941b0edb6825bd607f1",
  "placement": 12,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 14,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 26,
  "time_alive": 1366,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 34,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 38,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 3,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 3,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 7,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 31,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1524,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 40,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 43,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 13,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 82,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 6,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 47,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 24,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 1,
  "time_alive": 1514,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 17,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 5,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 43,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 40,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 23,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 37,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 9,
  "time_alive": 1466,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 28,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 21,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 7,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 6,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 90,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 14,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 9,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 66,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 11,
  "time_alive": 1487,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 3,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 20,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "f51fb8a294fa4656b062179a3ac48016",
  "placement": 78,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 71,
  "time_alive": 777,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 5,
  "time_alive": 1446,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 83,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 1,
  "time_alive": 1487,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 22,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 73,
  "time_alive": 580,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 37,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 17,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 25,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 36,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 40,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 5,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "e01b12ffeb5a4f2ea615e79aaf42246b",
  "placement": 32,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "e01b12ffeb5a4f2ea615e79aaf42246b",
  "placement": 48,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "e01b12ffeb5a4f2ea615e79aaf42246b",
  "placement": 15,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "e01b12ffeb5a4f2ea615e79aaf42246b",
  "placement": 14,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "e01b12ffeb5a4f2ea615e79aaf42246b",
  "placement": 5,
  "time_alive": 1475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "e01b12ffeb5a4f2ea615e79aaf42246b",
  "placement": 31,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 24,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 34,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 30,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 64,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 8,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "2a01c1d278984e77b66c030c93745b82",
  "placement": 6,
  "time_alive": 1483,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 22,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 4,
  "time_alive": 1450,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 18,
  "time_alive": 1460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 32,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 23,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 47,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 1,
  "time_alive": 1522,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 80,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 22,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 31,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 81,
  "time_alive": 497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 41,
  "time_alive": 1321,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955",
  "placement": 8,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955",
  "placement": 29,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955",
  "placement": 50,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955",
  "placement": 20,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955",
  "placement": 32,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955",
  "placement": 16,
  "time_alive": 1419,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 19,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 74,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 9,
  "time_alive": 1495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 59,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 13,
  "time_alive": 1442,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff",
  "placement": 23,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 46,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 33,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 19,
  "time_alive": 1453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 25,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 16,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 4,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "10bccc182cca49388ff1c72b475999bc",
  "placement": 3,
  "time_alive": 1508,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "10bccc182cca49388ff1c72b475999bc",
  "placement": 13,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "10bccc182cca49388ff1c72b475999bc",
  "placement": 33,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "10bccc182cca49388ff1c72b475999bc",
  "placement": 29,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "10bccc182cca49388ff1c72b475999bc",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "10bccc182cca49388ff1c72b475999bc",
  "placement": 54,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 16,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 28,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 16,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 8,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 60,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 68,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 66,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 2,
  "time_alive": 1489,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 52,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 49,
  "time_alive": 1214,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 18,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 61,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 48,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 12,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 12,
  "time_alive": 1483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 15,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 17,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 92,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 38,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 10,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 42,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 48,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 79,
  "time_alive": 582,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 7,
  "time_alive": 1481,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 39,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 44,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 10,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 43,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 10,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 42,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 80,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 36,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 32,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 39,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 2,
  "time_alive": 1514,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 50,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "343eabe6526d4248a05dad8955b29add",
  "placement": 23,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "343eabe6526d4248a05dad8955b29add",
  "placement": 71,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "343eabe6526d4248a05dad8955b29add",
  "placement": 14,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "343eabe6526d4248a05dad8955b29add",
  "placement": 22,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "343eabe6526d4248a05dad8955b29add",
  "placement": 30,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "343eabe6526d4248a05dad8955b29add",
  "placement": 52,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 58,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 9,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 70,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 11,
  "time_alive": 1426,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 77,
  "time_alive": 655,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 21,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 34,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 37,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 38,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 17,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 59,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 24,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 2,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 18,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 74,
  "time_alive": 677,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 33,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 82,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 62,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 91,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 86,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 95,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 9,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 52,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 1,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 57,
  "time_alive": 1065,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 82,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 66,
  "time_alive": 965,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 7,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 27,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 27,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 25,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 64,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 36,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 25,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 74,
  "time_alive": 571,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7",
  "placement": 81,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7",
  "placement": 90,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7",
  "placement": 98,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7",
  "placement": 2,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7",
  "placement": 19,
  "time_alive": 1419,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "83ae4804f3414bc2be024264bacdfbd7",
  "placement": 91,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "421ee330e08d4e70b55b9a021c45d52b",
  "placement": 31,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "421ee330e08d4e70b55b9a021c45d52b",
  "placement": 68,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "421ee330e08d4e70b55b9a021c45d52b",
  "placement": 27,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "421ee330e08d4e70b55b9a021c45d52b",
  "placement": 21,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "421ee330e08d4e70b55b9a021c45d52b",
  "placement": 47,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "421ee330e08d4e70b55b9a021c45d52b",
  "placement": 32,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 47,
  "time_alive": 1222,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 65,
  "time_alive": 1010,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 68,
  "time_alive": 956,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 80,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 7,
  "time_alive": 1463,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 39,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 60,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 3,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 41,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 18,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 67,
  "time_alive": 955,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 71,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 75,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 8,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 76,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 85,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 9,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 65,
  "time_alive": 691,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 6,
  "time_alive": 1499,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 27,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 73,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 60,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 45,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 82,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 93,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 47,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 24,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 42,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 12,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 56,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 21,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 41,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 79,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 79,
  "time_alive": 711,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 15,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 43,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 86,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 87,
  "time_alive": 363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 87,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 5,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 36,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 34,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 79,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 16,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 13,
  "time_alive": 1480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 74,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 39,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 40,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 65,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 97,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 1,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 44,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 38,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "273309d1c8a94d61913839e1d66eec5e",
  "placement": 66,
  "time_alive": 672,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 13,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 61,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 4,
  "time_alive": 1525,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 66,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 83,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 75,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 77,
  "time_alive": 642,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 23,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 39,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 96,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 62,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "7d1f980cdd974e2cb291477e8d9ecab6",
  "placement": 22,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717",
  "placement": 20,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717",
  "placement": 19,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717",
  "placement": 89,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717",
  "placement": 87,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717",
  "placement": 21,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717",
  "placement": 53,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 67,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 32,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 26,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 72,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 69,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 15,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 55,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 40,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 23,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 68,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 42,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 25,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "18dcab778d7044cd87a7341e7f7cf000",
  "placement": 97,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "18dcab778d7044cd87a7341e7f7cf000",
  "placement": 22,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "18dcab778d7044cd87a7341e7f7cf000",
  "placement": 21,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "18dcab778d7044cd87a7341e7f7cf000",
  "placement": 41,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "18dcab778d7044cd87a7341e7f7cf000",
  "placement": 75,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "18dcab778d7044cd87a7341e7f7cf000",
  "placement": 36,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 15,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 62,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 86,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 53,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 11,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 46,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "889e440e185442fd896662d39635d23a",
  "placement": 64,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "889e440e185442fd896662d39635d23a",
  "placement": 35,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "889e440e185442fd896662d39635d23a",
  "placement": 28,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "889e440e185442fd896662d39635d23a",
  "placement": 37,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "889e440e185442fd896662d39635d23a",
  "placement": 65,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "889e440e185442fd896662d39635d23a",
  "placement": 20,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 62,
  "time_alive": 987,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 75,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 99,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 4,
  "time_alive": 1471,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 57,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 72,
  "time_alive": 598,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 33,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 70,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 48,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 76,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 68,
  "time_alive": 900,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 18,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 42,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 14,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 49,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 30,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 51,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 83,
  "time_alive": 315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 45,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 20,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 43,
  "time_alive": 1346,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 82,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 97,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 44,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "f99b2cc5676f4452b4f8c59094d65511",
  "placement": 69,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "f99b2cc5676f4452b4f8c59094d65511",
  "placement": 45,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "f99b2cc5676f4452b4f8c59094d65511",
  "placement": 77,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "f99b2cc5676f4452b4f8c59094d65511",
  "placement": 45,
  "time_alive": 1254,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "f99b2cc5676f4452b4f8c59094d65511",
  "placement": 72,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "f99b2cc5676f4452b4f8c59094d65511",
  "placement": 8,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 44,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 38,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 45,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 16,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 89,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 37,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 98,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 55,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 6,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 84,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 44,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 28,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 26,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 79,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 20,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 34,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 85,
  "time_alive": 351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 81,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 27,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 67,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 80,
  "time_alive": 425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 81,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 78,
  "time_alive": 637,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 19,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 84,
  "time_alive": 443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 94,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 37,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 10,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 71,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 35,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 18,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 49,
  "time_alive": 1231,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 31,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 97,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 86,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 95,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 88,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 57,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 56,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 46,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 6,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "3dd157401bdc4ae39cf3a467f4535e14",
  "placement": 67,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 36,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 51,
  "time_alive": 1202,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 53,
  "time_alive": 1156,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 73,
  "time_alive": 847,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 50,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 69,
  "time_alive": 635,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 68,
  "time_alive": 834,
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
    