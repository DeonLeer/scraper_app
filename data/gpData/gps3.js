const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 37,
  "time_alive": 1272,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 22,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 32,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 47,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 51,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 30,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 13,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 23,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 25,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 43,
  "time_alive": 1259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 69,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 79,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 11,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 38,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 26,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 61,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 6,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 12,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 15,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 40,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 27,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 55,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 15,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 48,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 12,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 83,
  "time_alive": 462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 50,
  "time_alive": 1128,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 65,
  "time_alive": 975,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 40,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 19,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 52,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 44,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 52,
  "time_alive": 799,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 9,
  "time_alive": 1366,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 59,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 97,
  "time_alive": 77,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 26,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 74,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 91,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 71,
  "time_alive": 923,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 38,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 31,
  "time_alive": 1275,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 70,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 55,
  "time_alive": 766,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 49,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 57,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 9,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 85,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 64,
  "time_alive": 980,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 41,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 20,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 54,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 48,
  "time_alive": 1140,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 60,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 53,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 41,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 87,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 91,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 26,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 67,
  "time_alive": 933,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 61,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 82,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 86,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 69,
  "time_alive": 778,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 94,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 69,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 3,
  "time_alive": 1437,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 83,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 58,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 7,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 77,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 92,
  "time_alive": 248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 18,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 88,
  "time_alive": 290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 39,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 72,
  "time_alive": 638,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 91,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 81,
  "time_alive": 362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 41,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "aae1a871aea74ba191a4e16891d44fc0",
  "placement": 54,
  "time_alive": 777,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 65,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 98,
  "time_alive": 70,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 74,
  "time_alive": 705,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 81,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 26,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 71,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 40,
  "time_alive": 1283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 66,
  "time_alive": 998,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 54,
  "time_alive": 949,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 33,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 12,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 13,
  "time_alive": 1282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 60,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 56,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 2,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 36,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 52,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 18,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 50,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 49,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 83,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 57,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 46,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 33,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 42,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 10,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 82,
  "time_alive": 497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 24,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 39,
  "time_alive": 1243,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 62,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 95,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 86,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 32,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 48,
  "time_alive": 1147,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 75,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 40,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 29,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 38,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 64,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 84,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 58,
  "time_alive": 1056,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 56,
  "time_alive": 990,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 37,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 47,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 6,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 43,
  "time_alive": 1179,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 55,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 32,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 73,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 92,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 58,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 58,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 89,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 23,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 29,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 64,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 2,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 47,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 48,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "10cb14fe23384c74a93691721c7075fe",
  "placement": 77,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 17,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 30,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 72,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 74,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 63,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 79,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 56,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 41,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 3,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 20,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 18,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 88,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 97,
  "time_alive": 52,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 11,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 95,
  "time_alive": 126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 35,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 50,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 47,
  "time_alive": 1172,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 60,
  "time_alive": 1027,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 62,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 47,
  "time_alive": 1150,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 76,
  "time_alive": 461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 91,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 90,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 62,
  "time_alive": 1016,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 81,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 13,
  "time_alive": 1381,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 62,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 60,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 67,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 36,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 76,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 82,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 86,
  "time_alive": 327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 68,
  "time_alive": 810,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 43,
  "time_alive": 1070,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 32,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 24,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 68,
  "time_alive": 983,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 2,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 43,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 89,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 81,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 50,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 88,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 91,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 84,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "2414bc1bf81a44999ba137e3195afb27",
  "placement": 50,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 53,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 53,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 43,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 31,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 37,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 49,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 77,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 35,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 18,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 41,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 32,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 26,
  "time_alive": 1236,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 67,
  "time_alive": 881,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 76,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 19,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 23,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 44,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 46,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 44,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 44,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 36,
  "time_alive": 1252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 30,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 45,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 69,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 51,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 18,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 86,
  "time_alive": 340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 52,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 90,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 25,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 94,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 20,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 41,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 87,
  "time_alive": 323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 96,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "e57b548ddf794c689222b87b522d543d",
  "placement": 12,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 41,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 95,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 91,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 41,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 29,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 45,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 10,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 60,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 59,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 75,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 59,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "4c0a389e72e743b2821461184994f9a7",
  "placement": 93,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 90,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 94,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 90,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 98,
  "time_alive": 56,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 57,
  "time_alive": 1078,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 24,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 43,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 97,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 16,
  "time_alive": 1305,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 46,
  "time_alive": 1159,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 86,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "5fa88979bb864382809d8f67f4a03af1",
  "placement": 73,
  "time_alive": 535,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 50,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 49,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 30,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 19,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 78,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 64,
  "time_alive": 872,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 35,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 46,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 58,
  "time_alive": 911,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 66,
  "time_alive": 840,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "4a95e619bad44000ba7ee361f29495e5",
  "placement": 84,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 79,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 28,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 41,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 90,
  "time_alive": 285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 82,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 11,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 51,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 59,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 25,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 39,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 67,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 64,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 86,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 42,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 81,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 69,
  "time_alive": 872,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 13,
  "time_alive": 1334,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 30,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 97,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 33,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 60,
  "time_alive": 891,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 73,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 85,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "c58453b222ae49f98e2115c5d5769021",
  "placement": 81,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 72,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 97,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 60,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 77,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 7,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 58,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 26,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 79,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 24,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 56,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 24,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "52b877c93911417c8f3c9329c4e61a23",
  "placement": 95,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 27,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 25,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 50,
  "time_alive": 1159,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 51,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 72,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 80,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 45,
  "time_alive": 1267,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 53,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 56,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 35,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 92,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 89,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 12,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 68,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 49,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 15,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 40,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 31,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 68,
  "time_alive": 963,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 63,
  "time_alive": 1030,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 96,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 98,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 93,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 79,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 98,
  "time_alive": 51,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 80,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 52,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 63,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 46,
  "time_alive": 1180,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 10,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 87,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 45,
  "time_alive": 1177,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 90,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 80,
  "time_alive": 375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 51,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "cd6987f427634f0fac159a4b85bc62d7",
  "placement": 80,
  "time_alive": 365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 69,
  "time_alive": 835,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 84,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 37,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 53,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 45,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 85,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 53,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 88,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 51,
  "time_alive": 989,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 65,
  "time_alive": 874,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 60,
  "time_alive": 978,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 53,
  "time_alive": 778,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 96,
  "time_alive": 75,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 35,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 36,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 47,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 59,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 38,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 83,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 85,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 66,
  "time_alive": 842,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 9,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 30,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 72,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 47,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 83,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 44,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 83,
  "time_alive": 564,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 35,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 34,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 96,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 31,
  "time_alive": 1255,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 40,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 53,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 80,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "da71feb849c44ea685ed5bcede114827",
  "placement": 60,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 66,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 52,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 65,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 55,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 75,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 73,
  "time_alive": 784,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 19,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 29,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 78,
  "time_alive": 598,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 82,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 43,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 45,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 81,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 61,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 73,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 59,
  "time_alive": 1061,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 69,
  "time_alive": 904,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 33,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 66,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 78,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 86,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 22,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 79,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 39,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 74,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 72,
  "time_alive": 810,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 78,
  "time_alive": 650,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 85,
  "time_alive": 426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 77,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 54,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 48,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 63,
  "time_alive": 877,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 32,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 62,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "d3deafddacb6482e8a5104b330921f57",
  "placement": 67,
  "time_alive": 652,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 59,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 78,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 67,
  "time_alive": 994,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 95,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 51,
  "time_alive": 1113,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 72,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 30,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 26,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 69,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 54,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 73,
  "time_alive": 736,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "e72457de27474829beacec918212c40e",
  "placement": 82,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 56,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 60,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 31,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 34,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 92,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 28,
  "time_alive": 1293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 63,
  "time_alive": 987,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 80,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 74,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 62,
  "time_alive": 924,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 90,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 57,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 24,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 64,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 78,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 29,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 90,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 85,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 68,
  "time_alive": 802,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 55,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 72,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 83,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 95,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 39,
  "time_alive": 1250,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 85,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 94,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 86,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 60,
  "time_alive": 952,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 93,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 52,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 77,
  "time_alive": 449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 87,
  "time_alive": 372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "6ee932f35c244980a3b7fb9ef1bc37d9",
  "placement": 91,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 46,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 86,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 63,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 99,
  "time_alive": 43,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 91,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 17,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 69,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 90,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 50,
  "time_alive": 1073,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 85,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 88,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 46,
  "time_alive": 1020,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 54,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 21,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 55,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 48,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 30,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 55,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 33,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 58,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 76,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 23,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 26,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 62,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 85,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 87,
  "time_alive": 389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 53,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 40,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 42,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 65,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 34,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 67,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "cfaa84ffed7645939a05f512698e1828",
  "placement": 34,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 92,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 96,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 59,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 93,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 88,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 94,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 75,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 52,
  "time_alive": 1136,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 27,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 49,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 31,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 76,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 88,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 90,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 98,
  "time_alive": 66,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 82,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 67,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 62,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 23,
  "time_alive": 1285,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 93,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 97,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 95,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "3d3940bc4b50453983ea24de3c4d50ee",
  "placement": 92,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 77,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 77,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 71,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 88,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 87,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 42,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 37,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 84,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 88,
  "time_alive": 301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "ecd20b6c2f8744a8a0fc0e012618e2d5",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 76,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 73,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 93,
  "time_alive": 182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 79,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 68,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 96,
  "time_alive": 50,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 73,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 49,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 55,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 39,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "8f9c78a3d604494f9b486ee5a00ffe58",
  "placement": 85,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 57,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 70,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 94,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 33,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 94,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 43,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 83,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 87,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 93,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 78,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b",
  "placement": 86,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 88,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 20,
  "time_alive": 1359,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 18,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 3,
  "time_alive": 1462,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 5,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 46,
  "time_alive": 1209,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 40,
  "time_alive": 1262,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 12,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 65,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 36,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 29,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 60,
  "time_alive": 737,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 14,
  "time_alive": 1325,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 96,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 49,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 31,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 6,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 1,
  "time_alive": 1449,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 87,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 98,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 12,
  "time_alive": 1384,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 55,
  "time_alive": 1080,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 9,
  "time_alive": 1405,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 39,
  "time_alive": 1192,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "df3e45a1acb645748de9d735c1bb562d",
  "placement": 67,
  "time_alive": 445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 1,
  "time_alive": 1502,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 56,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 21,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 41,
  "time_alive": 1270,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 14,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 18,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 8,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 19,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 42,
  "time_alive": 1219,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 42,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 69,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 77,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 15,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 27,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 74,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 69,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 7,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 24,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 9,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 51,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 1,
  "time_alive": 1456,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 25,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 48,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 9,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 17,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 30,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 20,
  "time_alive": 1341,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 48,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 34,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 27,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 27,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 74,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 24,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 16,
  "time_alive": 1378,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 2,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 2,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 85,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 4,
  "time_alive": 1416,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 45,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 35,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 71,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 4,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 26,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 4,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 30,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 27,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 59,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 5,
  "time_alive": 1344,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 41,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 39,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 81,
  "time_alive": 414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 16,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 9,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 94,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 38,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 66,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 7,
  "time_alive": 1412,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 74,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 37,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 8,
  "time_alive": 1341,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 88,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 57,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 10,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 60,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 35,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 19,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 1,
  "time_alive": 1502,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 8,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 62,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 22,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 24,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 32,
  "time_alive": 1234,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 58,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 62,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 29,
  "time_alive": 1313,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 1,
  "time_alive": 1492,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 93,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 39,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 95,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 70,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 45,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 8,
  "time_alive": 1426,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 44,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 3,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 30,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 76,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 65,
  "time_alive": 794,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 74,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 27,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 85,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 20,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 9,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 21,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 31,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 62,
  "time_alive": 689,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 1,
  "time_alive": 1377,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 9,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 26,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 18,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 4,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 21,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 80,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 66,
  "time_alive": 1043,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 7,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 10,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 35,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 61,
  "time_alive": 723,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "9d76faac42d0481caa238018f59153a8",
  "placement": 18,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 34,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 6,
  "time_alive": 1399,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 61,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 3,
  "time_alive": 1452,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 60,
  "time_alive": 910,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 73,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 3,
  "time_alive": 1484,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 18,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 58,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 43,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 51,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 70,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 18,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 22,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 36,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 8,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 26,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 23,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 67,
  "time_alive": 992,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 56,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 12,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 6,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 66,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 4,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 4,
  "time_alive": 1482,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 3,
  "time_alive": 1426,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 57,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 85,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 89,
  "time_alive": 273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 12,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 88,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 75,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 71,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 20,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 84,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1",
  "placement": 12,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 3,
  "time_alive": 1492,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 9,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 64,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 7,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 4,
  "time_alive": 1424,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 37,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 51,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 67,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 82,
  "time_alive": 384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 85,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 55,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 93,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 39,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 5,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 51,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 37,
  "time_alive": 1285,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 49,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 33,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 48,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 72,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 13,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 28,
  "time_alive": 1307,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 5,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc",
  "placement": 37,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 51,
  "time_alive": 1136,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 1,
  "time_alive": 1461,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 35,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 91,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 62,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 46,
  "time_alive": 1185,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 39,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 15,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 67,
  "time_alive": 744,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 39,
  "time_alive": 1274,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 28,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 33,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 12,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 84,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 19,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 47,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 5,
  "time_alive": 1448,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 61,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 62,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 63,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 32,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 22,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 71,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 28,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 11,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 79,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 71,
  "time_alive": 541,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 77,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 89,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 19,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 10,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 70,
  "time_alive": 723,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 65,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 12,
  "time_alive": 1338,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 13,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 26,
  "time_alive": 1340,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 12,
  "time_alive": 1364,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 12,
  "time_alive": 1376,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 64,
  "time_alive": 697,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 65,
  "time_alive": 807,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 59,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 31,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 37,
  "time_alive": 1270,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 41,
  "time_alive": 1249,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 36,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 73,
  "time_alive": 448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 84,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 78,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 86,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 5,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 39,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 40,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 2,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 5,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 38,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 28,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 41,
  "time_alive": 1272,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 78,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 23,
  "time_alive": 1278,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 69,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 67,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 41,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 33,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 6,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 14,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 30,
  "time_alive": 1323,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 22,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 50,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 18,
  "time_alive": 1369,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 10,
  "time_alive": 1346,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "21bbf3355a694fa3b8136e20314e4d52",
  "placement": 26,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 86,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 20,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 50,
  "time_alive": 1080,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 65,
  "time_alive": 618,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 38,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 16,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 46,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 6,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 9,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 24,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 30,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 60,
  "time_alive": 558,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 98,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 21,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 43,
  "time_alive": 1190,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 95,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 48,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 7,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 15,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 5,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 20,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 34,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 19,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 16,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 2,
  "time_alive": 1502,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 15,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 22,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 12,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 30,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 10,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 57,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 26,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 37,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 60,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 11,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 36,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 8,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 32,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 21,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 68,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 67,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 14,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 33,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 26,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 68,
  "time_alive": 678,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 1,
  "time_alive": 1438,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "745587dfe0b94c518c2e95ffcacf2db8",
  "placement": 68,
  "time_alive": 443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 48,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 66,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 26,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 84,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 28,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 13,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 24,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 44,
  "time_alive": 1197,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 15,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 4,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 27,
  "time_alive": 1275,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 27,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 8,
  "time_alive": 1406,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 97,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 85,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 87,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 92,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 79,
  "time_alive": 539,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 77,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 1,
  "time_alive": 1477,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 92,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 5,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 93,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 21,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 79,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 23,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 7,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 57,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 96,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 8,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 13,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 42,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 25,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 10,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 49,
  "time_alive": 1132,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 65,
  "time_alive": 470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 14,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 63,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 88,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 92,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 84,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 97,
  "time_alive": 75,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 25,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 63,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 94,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 1,
  "time_alive": 1475,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 33,
  "time_alive": 1218,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 41,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 19,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 83,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 9,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 20,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 51,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 3,
  "time_alive": 1452,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 36,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 29,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 77,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 79,
  "time_alive": 310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 64,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 57,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 65,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 68,
  "time_alive": 712,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 67,
  "time_alive": 584,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 42,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 15,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 86,
  "time_alive": 449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 85,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 2,
  "time_alive": 1456,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 86,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 68,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 49,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 5,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 78,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 70,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 44,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 2,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 26,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 10,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 71,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 34,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 83,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 54,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 89,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 84,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 45,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 25,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 78,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 72,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 43,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 4,
  "time_alive": 1471,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 76,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 31,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 54,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 20,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "e774a1413a394f6793192ce172fb5e82",
  "placement": 36,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 65,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 59,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 92,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 66,
  "time_alive": 591,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 15,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 50,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 31,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 35,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 14,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 34,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 72,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 6,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 96,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 98,
  "time_alive": 71,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 79,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 87,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 25,
  "time_alive": 1336,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 53,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 32,
  "time_alive": 1293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 90,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 98,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 14,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 10,
  "time_alive": 1336,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 27,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 16,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 28,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 30,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 17,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 75,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 18,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 79,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 60,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 48,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 26,
  "time_alive": 1285,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 22,
  "time_alive": 1292,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 23,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 69,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 17,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 56,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 33,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 42,
  "time_alive": 1195,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 34,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 43,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 3,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 56,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 31,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 45,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 74,
  "time_alive": 814,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 17,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 33,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 62,
  "time_alive": 770,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 78,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 78,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 2,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 17,
  "time_alive": 1357,
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
    