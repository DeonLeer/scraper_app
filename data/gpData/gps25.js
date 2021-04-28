const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 41,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 21,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 32,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 54,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 91,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 57,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 27,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 18,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "126158086c944d55b296fa9148faa21d",
  "placement": 81,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16",
  "placement": 25,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16",
  "placement": 88,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16",
  "placement": 41,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16",
  "placement": 34,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16",
  "placement": 76,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16",
  "placement": 36,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 62,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 65,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 2,
  "time_alive": 1529,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 79,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 94,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 93,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 80,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 67,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 27,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 63,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 19,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "b89c8cb337864f3497264c6f9be07d38",
  "placement": 43,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 64,
  "time_alive": 1072,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 48,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 44,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 78,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 7,
  "time_alive": 1493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 73,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 41,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 92,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 19,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 21,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 45,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 56,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "716c24c120b34870be55d3bf90e722f6",
  "placement": 49,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "716c24c120b34870be55d3bf90e722f6",
  "placement": 15,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "716c24c120b34870be55d3bf90e722f6",
  "placement": 58,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "716c24c120b34870be55d3bf90e722f6",
  "placement": 81,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "716c24c120b34870be55d3bf90e722f6",
  "placement": 63,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "716c24c120b34870be55d3bf90e722f6",
  "placement": 63,
  "time_alive": 681,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "cbae7d5096dd4cee93e27ae24c5bfedd",
  "placement": 57,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "cbae7d5096dd4cee93e27ae24c5bfedd",
  "placement": 14,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "cbae7d5096dd4cee93e27ae24c5bfedd",
  "placement": 30,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "cbae7d5096dd4cee93e27ae24c5bfedd",
  "placement": 53,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "cbae7d5096dd4cee93e27ae24c5bfedd",
  "placement": 75,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "cbae7d5096dd4cee93e27ae24c5bfedd",
  "placement": 53,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "77742956832445d4a67f515ff4ed014e",
  "placement": 67,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "77742956832445d4a67f515ff4ed014e",
  "placement": 35,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "77742956832445d4a67f515ff4ed014e",
  "placement": 71,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "77742956832445d4a67f515ff4ed014e",
  "placement": 67,
  "time_alive": 967,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "77742956832445d4a67f515ff4ed014e",
  "placement": 87,
  "time_alive": 324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "77742956832445d4a67f515ff4ed014e",
  "placement": 29,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 46,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 52,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 40,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 33,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 33,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 58,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "d50cb8b4c8e24ebc8af128ad6bd9fc8c",
  "placement": 45,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "d50cb8b4c8e24ebc8af128ad6bd9fc8c",
  "placement": 60,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "d50cb8b4c8e24ebc8af128ad6bd9fc8c",
  "placement": 25,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "d50cb8b4c8e24ebc8af128ad6bd9fc8c",
  "placement": 93,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "d50cb8b4c8e24ebc8af128ad6bd9fc8c",
  "placement": 44,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "d50cb8b4c8e24ebc8af128ad6bd9fc8c",
  "placement": 51,
  "time_alive": 1215,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353",
  "placement": 36,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353",
  "placement": 50,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353",
  "placement": 77,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353",
  "placement": 46,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353",
  "placement": 37,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 56,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 39,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 32,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 44,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 43,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 8,
  "time_alive": 1492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 63,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 88,
  "time_alive": 435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 39,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 90,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "66204d471b684dee9c20521f85c18cf3",
  "placement": 65,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "a660d8b7a0cf44308db05ec4a392fbb8",
  "placement": 79,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "a660d8b7a0cf44308db05ec4a392fbb8",
  "placement": 86,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "a660d8b7a0cf44308db05ec4a392fbb8",
  "placement": 92,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "a660d8b7a0cf44308db05ec4a392fbb8",
  "placement": 18,
  "time_alive": 1407,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "a660d8b7a0cf44308db05ec4a392fbb8",
  "placement": 86,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "a660d8b7a0cf44308db05ec4a392fbb8",
  "placement": 75,
  "time_alive": 473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 7,
  "time_alive": 1502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 57,
  "time_alive": 1128,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 63,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 80,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 68,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 83,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "f5d49c8605404499b42639b557347f7a",
  "placement": 51,
  "time_alive": 1205,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "f5d49c8605404499b42639b557347f7a",
  "placement": 80,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "f5d49c8605404499b42639b557347f7a",
  "placement": 47,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "f5d49c8605404499b42639b557347f7a",
  "placement": 82,
  "time_alive": 510,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "f5d49c8605404499b42639b557347f7a",
  "placement": 65,
  "time_alive": 995,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "f5d49c8605404499b42639b557347f7a",
  "placement": 30,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 65,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 84,
  "time_alive": 684,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 39,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 23,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 64,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 74,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 93,
  "time_alive": 694,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 22,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 29,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 48,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 82,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 55,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 38,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 27,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 24,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 51,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 81,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 85,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 95,
  "time_alive": 598,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 85,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 17,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 65,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 77,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 78,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 93,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 37,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 17,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 78,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 91,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "4450ea7fd7d04350ac235ac42ae0f7f0",
  "placement": 89,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "4450ea7fd7d04350ac235ac42ae0f7f0",
  "placement": 69,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "4450ea7fd7d04350ac235ac42ae0f7f0",
  "placement": 80,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "4450ea7fd7d04350ac235ac42ae0f7f0",
  "placement": 24,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "4450ea7fd7d04350ac235ac42ae0f7f0",
  "placement": 67,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "4450ea7fd7d04350ac235ac42ae0f7f0",
  "placement": 39,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 21,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 55,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 61,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 91,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 73,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 35,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 97,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 42,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 45,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 42,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 74,
  "time_alive": 747,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554",
  "placement": 79,
  "time_alive": 377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "b1a270fede6b44eb9456af645217212a",
  "placement": 68,
  "time_alive": 995,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "b1a270fede6b44eb9456af645217212a",
  "placement": 51,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "b1a270fede6b44eb9456af645217212a",
  "placement": 95,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "b1a270fede6b44eb9456af645217212a",
  "placement": 29,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "b1a270fede6b44eb9456af645217212a",
  "placement": 58,
  "time_alive": 1158,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "b1a270fede6b44eb9456af645217212a",
  "placement": 89,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 50,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 21,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 84,
  "time_alive": 524,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 75,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 85,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 82,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 84,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 40,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 75,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 74,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 84,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 27,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 70,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 61,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 62,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 59,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 88,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "de6603838e0f4bbabbe6e2b6b13a0367",
  "placement": 16,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 58,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 68,
  "time_alive": 992,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 55,
  "time_alive": 1122,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 56,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 59,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 62,
  "time_alive": 696,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 74,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 96,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 93,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 77,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 51,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6",
  "placement": 25,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 88,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 83,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 11,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 86,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 91,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894",
  "placement": 88,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "6d6092f5504b4617a7534c20ad468e5c",
  "placement": 35,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "6d6092f5504b4617a7534c20ad468e5c",
  "placement": 72,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "6d6092f5504b4617a7534c20ad468e5c",
  "placement": 52,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "6d6092f5504b4617a7534c20ad468e5c",
  "placement": 69,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "6d6092f5504b4617a7534c20ad468e5c",
  "placement": 57,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "6d6092f5504b4617a7534c20ad468e5c",
  "placement": 76,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "91decf069dc74a93b62161c684ee07b5",
  "placement": 33,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "91decf069dc74a93b62161c684ee07b5",
  "placement": 25,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "91decf069dc74a93b62161c684ee07b5",
  "placement": 76,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "91decf069dc74a93b62161c684ee07b5",
  "placement": 89,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "a6c77260376e49fb9bb6cda77c4e01cc",
  "placement": 76,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "a6c77260376e49fb9bb6cda77c4e01cc",
  "placement": 17,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "a6c77260376e49fb9bb6cda77c4e01cc",
  "placement": 89,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "eaea208cd7194fec8e1f767c598f883d",
  "placement": 86,
  "time_alive": 786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "eaea208cd7194fec8e1f767c598f883d",
  "placement": 64,
  "time_alive": 1022,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "eaea208cd7194fec8e1f767c598f883d",
  "placement": 67,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "eaea208cd7194fec8e1f767c598f883d",
  "placement": 46,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "eaea208cd7194fec8e1f767c598f883d",
  "placement": 39,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "eaea208cd7194fec8e1f767c598f883d",
  "placement": 92,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "7652881af0e249aaa12c1ba3ab932a6d",
  "placement": 90,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "7652881af0e249aaa12c1ba3ab932a6d",
  "placement": 47,
  "time_alive": 1214,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "7652881af0e249aaa12c1ba3ab932a6d",
  "placement": 42,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "7652881af0e249aaa12c1ba3ab932a6d",
  "placement": 95,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "a2519a00e2a7433e8af5a543c70320ed",
  "placement": 77,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "a2519a00e2a7433e8af5a543c70320ed",
  "placement": 29,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "a2519a00e2a7433e8af5a543c70320ed",
  "placement": 51,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "a2519a00e2a7433e8af5a543c70320ed",
  "placement": 88,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "a2519a00e2a7433e8af5a543c70320ed",
  "placement": 92,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "a2519a00e2a7433e8af5a543c70320ed",
  "placement": 90,
  "time_alive": 145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 63,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 78,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 94,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 64,
  "time_alive": 1011,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 83,
  "time_alive": 523,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 71,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 71,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 53,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 40,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 59,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "e969ab96d50c48cfb7ab5a140141feaf",
  "placement": 96,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "e969ab96d50c48cfb7ab5a140141feaf",
  "placement": 79,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "e969ab96d50c48cfb7ab5a140141feaf",
  "placement": 91,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "e969ab96d50c48cfb7ab5a140141feaf",
  "placement": 94,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "e969ab96d50c48cfb7ab5a140141feaf",
  "placement": 93,
  "time_alive": 130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "e969ab96d50c48cfb7ab5a140141feaf",
  "placement": 94,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "6149fbe6e14d4eceac20d249c97b63d8",
  "placement": 98,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 20,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 6,
  "time_alive": 1514,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 2,
  "time_alive": 1509,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 3,
  "time_alive": 1504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 22,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 6,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 14,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 1,
  "time_alive": 1538,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 55,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 21,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 2,
  "time_alive": 1534,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 26,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 3,
  "time_alive": 1539,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 5,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 4,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 41,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 7,
  "time_alive": 1479,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 4,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 2,
  "time_alive": 1548,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 20,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 27,
  "time_alive": 1389,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 20,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 1,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 76,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 4,
  "time_alive": 1535,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 93,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 8,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 4,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 5,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 14,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 17,
  "time_alive": 1457,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 9,
  "time_alive": 1483,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 7,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 2,
  "time_alive": 1505,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 93,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 50,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 12,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 8,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 11,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 6,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 16,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 35,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 6,
  "time_alive": 1517,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 1,
  "time_alive": 1509,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 43,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 41,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 9,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 28,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 33,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 10,
  "time_alive": 1461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 1,
  "time_alive": 1505,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 28,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 16,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 1,
  "time_alive": 1548,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 59,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 49,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 36,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 30,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 3,
  "time_alive": 1516,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 8,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 54,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 77,
  "time_alive": 596,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 84,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 51,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1518,
  "elims": 14,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 58,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 12,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 31,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 11,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 14,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 40,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 23,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 4,
  "time_alive": 1532,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 3,
  "time_alive": 1500,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 39,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 62,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 83,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 30,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 3,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 59,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 13,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 29,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 62,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 35,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 29,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 64,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 10,
  "time_alive": 1450,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 48,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 18,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 13,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 79,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 13,
  "time_alive": 1451,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 70,
  "time_alive": 934,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 73,
  "time_alive": 577,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 10,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 91,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 91,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 19,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 73,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 3,
  "time_alive": 1532,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 15,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 69,
  "time_alive": 1019,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 10,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 26,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 28,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 39,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 45,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 22,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 27,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 34,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 27,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 24,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 24,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 76,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 34,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 24,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 30,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 12,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 54,
  "time_alive": 1046,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 95,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 30,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 54,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 9,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 9,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 31,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 75,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 7,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 30,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 31,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 69,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "0cc2a50c2c9a4059a79d92bf61b69a9a",
  "placement": 43,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 7,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 2,
  "time_alive": 1538,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 70,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 83,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 70,
  "time_alive": 691,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 5,
  "time_alive": 1524,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 75,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 12,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 78,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 45,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 25,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 46,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 63,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 17,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 17,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 75,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 21,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 16,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 36,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 61,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 29,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 55,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 30,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 32,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 23,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 97,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 25,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 21,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 68,
  "time_alive": 620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 56,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 15,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 5,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 80,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 37,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 77,
  "time_alive": 308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 43,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 71,
  "time_alive": 848,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 18,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 52,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 11,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 59,
  "time_alive": 965,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 29,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 80,
  "time_alive": 751,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 71,
  "time_alive": 729,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 19,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 15,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 33,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 89,
  "time_alive": 240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 90,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 15,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 18,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 6,
  "time_alive": 1499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 89,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 61,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 17,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 9,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 45,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 84,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 23,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 40,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 21,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 73,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 22,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 36,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 59,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 89,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 12,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 63,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 5,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 15,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 11,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 29,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 65,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 70,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 10,
  "time_alive": 1494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 100,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 69,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 81,
  "time_alive": 618,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 4,
  "time_alive": 1520,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 39,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 38,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 49,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 14,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 58,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 52,
  "time_alive": 1151,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 42,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 9,
  "time_alive": 1495,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 82,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 22,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 56,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 53,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 57,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 52,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 16,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 37,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 32,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 49,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 19,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 19,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 42,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 86,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 31,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 48,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 86,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 25,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 44,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 64,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 25,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 11,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 44,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 56,
  "time_alive": 1156,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 39,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 16,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 85,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 41,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 97,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 13,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 25,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 66,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 42,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 79,
  "time_alive": 259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 34,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 45,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 60,
  "time_alive": 1093,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 62,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 74,
  "time_alive": 563,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 7,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 26,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 40,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 91,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 46,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 26,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 27,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 62,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 46,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 32,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 35,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 12,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 73,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 38,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 94,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 58,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 2,
  "time_alive": 1518,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 87,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 37,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 86,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 8,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 44,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 29,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 66,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 14,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 40,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 38,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 90,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 88,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 18,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 33,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 53,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 43,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 37,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 51,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 55,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 55,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 23,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 20,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 31,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 97,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 23,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 19,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 36,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 81,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 57,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 44,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 17,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 65,
  "time_alive": 656,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 45,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 47,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 45,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 7,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 54,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 56,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 42,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 24,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 63,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 61,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 71,
  "time_alive": 655,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 17,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b22b53b2ed704cb79f6f71e2b4dbf0b8",
  "placement": 85,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b22b53b2ed704cb79f6f71e2b4dbf0b8",
  "placement": 64,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b22b53b2ed704cb79f6f71e2b4dbf0b8",
  "placement": 48,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b22b53b2ed704cb79f6f71e2b4dbf0b8",
  "placement": 37,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b22b53b2ed704cb79f6f71e2b4dbf0b8",
  "placement": 8,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b22b53b2ed704cb79f6f71e2b4dbf0b8",
  "placement": 47,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 27,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 53,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 78,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 90,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 50,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "400539efb85e4e258eb61abf63a0296c",
  "placement": 28,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 72,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 62,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 79,
  "time_alive": 544,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 59,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 66,
  "time_alive": 759,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "a3d5ce4049d44bcb9db049bca643e033",
  "placement": 8,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 21,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 41,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 66,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 77,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 78,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 22,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 53,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 72,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 47,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 15,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 60,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 67,
  "time_alive": 625,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 37,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 70,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 21,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 60,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 34,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 33,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 83,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 6,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 74,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 65,
  "time_alive": 762,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 24,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 81,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 82,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 54,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 56,
  "time_alive": 1062,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 19,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 11,
  "time_alive": 1493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 68,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 83,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 50,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 47,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 32,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 82,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 57,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 72,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 69,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 20,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 38,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "55e5bef0467d4d3eb6f7c0fb6399afcc",
  "placement": 77,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "55e5bef0467d4d3eb6f7c0fb6399afcc",
  "placement": 76,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "55e5bef0467d4d3eb6f7c0fb6399afcc",
  "placement": 85,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "55e5bef0467d4d3eb6f7c0fb6399afcc",
  "placement": 40,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "55e5bef0467d4d3eb6f7c0fb6399afcc",
  "placement": 10,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "55e5bef0467d4d3eb6f7c0fb6399afcc",
  "placement": 75,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 74,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 74,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 89,
  "time_alive": 364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 82,
  "time_alive": 617,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 35,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "651fcc1f3c2e46e6a02b26f6caa3bd44",
  "placement": 13,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 79,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 26,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 58,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 49,
  "time_alive": 1230,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 88,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 72,
  "time_alive": 444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 80,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 28,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 75,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 63,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 13,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 63,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 43,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 67,
  "time_alive": 956,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 23,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 81,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 91,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 70,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 84,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 88,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 14,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 89,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 61,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 60,
  "time_alive": 1136,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 16,
  "time_alive": 1440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 99,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 46,
  "time_alive": 1248,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 92,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 49,
  "time_alive": 1251,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 44,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 81,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 71,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 51,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 96,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 32,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 36,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 68,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 49,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 53,
  "time_alive": 1055,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 90,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 22,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 93,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 57,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 34,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 60,
  "time_alive": 883,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 41,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 77,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 46,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 34,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 33,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 58,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 71,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 50,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 40,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 44,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "9d26691bf0ec4082a811c4318cd62011",
  "placement": 84,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "9d26691bf0ec4082a811c4318cd62011",
  "placement": 78,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "9d26691bf0ec4082a811c4318cd62011",
  "placement": 80,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "9d26691bf0ec4082a811c4318cd62011",
  "placement": 5,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "9d26691bf0ec4082a811c4318cd62011",
  "placement": 86,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "9d26691bf0ec4082a811c4318cd62011",
  "placement": 52,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 67,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 60,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 28,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 91,
  "time_alive": 244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 64,
  "time_alive": 798,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 95,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 63,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 67,
  "time_alive": 1029,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 20,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 76,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 91,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 80,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 25,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 86,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 50,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 97,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 82,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 69,
  "time_alive": 501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "86018fe248314182ae916a7c1b9e6b34",
  "placement": 48,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "86018fe248314182ae916a7c1b9e6b34",
  "placement": 66,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "86018fe248314182ae916a7c1b9e6b34",
  "placement": 38,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "86018fe248314182ae916a7c1b9e6b34",
  "placement": 75,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "86018fe248314182ae916a7c1b9e6b34",
  "placement": 61,
  "time_alive": 971,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "86018fe248314182ae916a7c1b9e6b34",
  "placement": 71,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 18,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 61,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 65,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 92,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 59,
  "time_alive": 1026,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 81,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 93,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 92,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 98,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 33,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 18,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 64,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 98,
  "time_alive": 85,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 69,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 95,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 93,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 38,
  "time_alive": 1333,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 46,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 47,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 42,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 53,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 24,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 83,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 78,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 57,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 35,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 68,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 51,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 57,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 73,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 54,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 65,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 87,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 26,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 72,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 66,
  "time_alive": 627,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "758def93d36c422b9197c871041a4dd0",
  "placement": 64,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "758def93d36c422b9197c871041a4dd0",
  "placement": 87,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "758def93d36c422b9197c871041a4dd0",
  "placement": 35,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "758def93d36c422b9197c871041a4dd0",
  "placement": 48,
  "time_alive": 1238,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "758def93d36c422b9197c871041a4dd0",
  "placement": 86,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f01208b425b64597b034701b4daef10f",
  "placement": 55,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f01208b425b64597b034701b4daef10f",
  "placement": 48,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f01208b425b64597b034701b4daef10f",
  "placement": 74,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f01208b425b64597b034701b4daef10f",
  "placement": 47,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f01208b425b64597b034701b4daef10f",
  "placement": 77,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f01208b425b64597b034701b4daef10f",
  "placement": 82,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "af4a511e597f487299dbaf002248c827",
  "placement": 92,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "af4a511e597f487299dbaf002248c827",
  "placement": 73,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "af4a511e597f487299dbaf002248c827",
  "placement": 76,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "af4a511e597f487299dbaf002248c827",
  "placement": 67,
  "time_alive": 1052,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "af4a511e597f487299dbaf002248c827",
  "placement": 67,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "af4a511e597f487299dbaf002248c827",
  "placement": 74,
  "time_alive": 417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 36,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 94,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 62,
  "time_alive": 1090,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 98,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 68,
  "time_alive": 751,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 87,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 68,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 51,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 96,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 94,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 76,
  "time_alive": 534,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 90,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 39,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 88,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 52,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 85,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 92,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 85,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 50,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 95,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 83,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 58,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 56,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 87,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 94,
  "time_alive": 83,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 55,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 78,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 39,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 90,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 89,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "49b2bed2ab074bc1af63979bd9ebb5cf",
  "placement": 65,
  "time_alive": 1083,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "49b2bed2ab074bc1af63979bd9ebb5cf",
  "placement": 96,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "49b2bed2ab074bc1af63979bd9ebb5cf",
  "placement": 99,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "49b2bed2ab074bc1af63979bd9ebb5cf",
  "placement": 88,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "49b2bed2ab074bc1af63979bd9ebb5cf",
  "placement": 80,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "49b2bed2ab074bc1af63979bd9ebb5cf",
  "placement": 93,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 94,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 85,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 84,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 72,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 79,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "c37dc7fe30db4244ab0c11054604e1e9",
  "placement": 94,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07102a11-daaa-4789-8ca1-78efe09822c6",
  "team_id": "d9a22f3c495d46269ce634c25f6fca4b",
  "placement": 88,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f9586ab-2364-40ce-897a-496be0c18f97",
  "team_id": "d9a22f3c495d46269ce634c25f6fca4b",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d75be4-f52c-49ac-b1b4-1b817aed4206",
  "team_id": "d9a22f3c495d46269ce634c25f6fca4b",
  "placement": 92,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "088b1b59-750c-4713-b581-d836554a4178",
  "team_id": "d9a22f3c495d46269ce634c25f6fca4b",
  "placement": 79,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06b35bc9-efe2-4340-a3b3-edf194198c11",
  "team_id": "d9a22f3c495d46269ce634c25f6fca4b",
  "placement": 87,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e49bc1-8e05-46c5-bf20-4c052ecd261c",
  "team_id": "d9a22f3c495d46269ce634c25f6fca4b",
  "placement": 84,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 22,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 16,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 9,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 1,
  "time_alive": 1558,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 1,
  "time_alive": 1543,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 15,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 11,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 2,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 43,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 11,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 10,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 1,
  "time_alive": 1538,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 18,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 22,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 1,
  "time_alive": 1547,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 2,
  "time_alive": 1558,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 24,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 10,
  "time_alive": 1491,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 5,
  "time_alive": 1494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 7,
  "time_alive": 1496,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 10,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 14,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 79,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 4,
  "time_alive": 1514,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1535,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 15,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 46,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 48,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 71,
  "time_alive": 834,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 49,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 3,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 71,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 65,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 24,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 6,
  "time_alive": 1521,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 18,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 28,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 13,
  "time_alive": 1452,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 6,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 79,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 14,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 55,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 2,
  "time_alive": 1535,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 44,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 77,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 10,
  "time_alive": 1436,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 28,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 32,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 4,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 4,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 72,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 7,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 67,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 30,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 6,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 58,
  "time_alive": 1090,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 15,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 59,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 27,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 13,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 19,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 70,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 16,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 38,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 18,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 2,
  "time_alive": 1538,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 56,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 10,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 29,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 39,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 3,
  "time_alive": 1522,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 7,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 62,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 67,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 20,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 39,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 12,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 40,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1494,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 61,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 34,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 11,
  "time_alive": 1485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 11,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 85,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 1,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 71,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 67,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 12,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 17,
  "time_alive": 1450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 21,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 59,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 85,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 13,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 3,
  "time_alive": 1538,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 21,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 24,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 30,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 2,
  "time_alive": 1547,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 69,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 64,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 64,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 63,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 5,
  "time_alive": 1501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 22,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 28,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 36,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 9,
  "time_alive": 1493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 66,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 85,
  "time_alive": 537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 36,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 30,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 63,
  "time_alive": 1015,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 5,
  "time_alive": 1512,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 9,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 63,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 89,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 75,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 8,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 23,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 45,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 18,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 12,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 6,
  "time_alive": 1458,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 83,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 75,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 12,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 9,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 40,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 21,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 41,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 35,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 14,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 66,
  "time_alive": 990,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 13,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 17,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 77,
  "time_alive": 587,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 28,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 73,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 27,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 39,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 43,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 19,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 7,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 29,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 3,
  "time_alive": 1508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 7,
  "time_alive": 1507,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 60,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 43,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 90,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 17,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 14,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 37,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 20,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 37,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 57,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 77,
  "time_alive": 719,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 49,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 8,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 5,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 60,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 13,
  "time_alive": 1452,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 88,
  "time_alive": 314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 91,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 61,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 15,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 33,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 33,
  "time_alive": 1360,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "017bf395-efc4-44c9-900b-d60578f973bb",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 53,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046846f0-dd43-4305-b7c8-a5590499be1e",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 20,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 19,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023207e0-7b2a-481a-b055-318a1807fcbb",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 38,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0557b9f5-9b89-40b1-82df-4ccbd500b320",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 52,
  "time_alive": 1126,
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
    