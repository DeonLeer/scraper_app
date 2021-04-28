const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 55,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 40,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 56,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 88,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 89,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 77,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "13d53d22098a4d07880b71cf0980601b",
  "placement": 77,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "13d53d22098a4d07880b71cf0980601b",
  "placement": 57,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "13d53d22098a4d07880b71cf0980601b",
  "placement": 80,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "13d53d22098a4d07880b71cf0980601b",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "13d53d22098a4d07880b71cf0980601b",
  "placement": 30,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "13d53d22098a4d07880b71cf0980601b",
  "placement": 89,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "2afe583ed94e446a8886160ace2391a8",
  "placement": 70,
  "time_alive": 878,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "2afe583ed94e446a8886160ace2391a8",
  "placement": 96,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "2afe583ed94e446a8886160ace2391a8",
  "placement": 75,
  "time_alive": 680,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "2afe583ed94e446a8886160ace2391a8",
  "placement": 73,
  "time_alive": 591,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "2afe583ed94e446a8886160ace2391a8",
  "placement": 46,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "2afe583ed94e446a8886160ace2391a8",
  "placement": 65,
  "time_alive": 979,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 71,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 91,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 39,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 61,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 96,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 69,
  "time_alive": 860,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 64,
  "time_alive": 1066,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 91,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 94,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "5bf5346d313a4c72bdd6abded7de1608",
  "placement": 72,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "5bf5346d313a4c72bdd6abded7de1608",
  "placement": 97,
  "time_alive": 76,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "5bf5346d313a4c72bdd6abded7de1608",
  "placement": 92,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "5bf5346d313a4c72bdd6abded7de1608",
  "placement": 50,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "5bf5346d313a4c72bdd6abded7de1608",
  "placement": 77,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "5bf5346d313a4c72bdd6abded7de1608",
  "placement": 49,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 67,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 85,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 96,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 95,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 48,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 60,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 68,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 67,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "3c76d83557bb468fbd48eb765d26a7fa",
  "placement": 84,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1507,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1470,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1509,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 19,
  "time_alive": 1356,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 11,
  "time_alive": 1402,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1535,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 13,
  "time_alive": 1396,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 1,
  "time_alive": 1470,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 1,
  "time_alive": 1524,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 4,
  "time_alive": 1501,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 6,
  "time_alive": 1447,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 19,
  "time_alive": 1363,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 9,
  "time_alive": 1432,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 22,
  "time_alive": 1330,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 16,
  "time_alive": 1398,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 18,
  "time_alive": 1365,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 5,
  "time_alive": 1458,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 3,
  "time_alive": 1528,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1507,
  "elims": 11,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 7,
  "time_alive": 1402,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 40,
  "time_alive": 842,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 10,
  "time_alive": 1438,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1393,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 36,
  "time_alive": 820,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:c3abda5df33146afa899e622772a8004",
  "placement": 16,
  "time_alive": 1380,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:c3abda5df33146afa899e622772a8004",
  "placement": 4,
  "time_alive": 1426,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:c3abda5df33146afa899e622772a8004",
  "placement": 9,
  "time_alive": 1444,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:c3abda5df33146afa899e622772a8004",
  "placement": 7,
  "time_alive": 1442,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:c3abda5df33146afa899e622772a8004",
  "placement": 10,
  "time_alive": 1435,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 7,
  "time_alive": 1448,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 6,
  "time_alive": 1405,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 18,
  "time_alive": 1380,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 15,
  "time_alive": 1385,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 47,
  "time_alive": 357,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 13,
  "time_alive": 1409,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "245cd346263c435cbc7d230afa466fe5:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 23,
  "time_alive": 1309,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "245cd346263c435cbc7d230afa466fe5:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 13,
  "time_alive": 1376,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "245cd346263c435cbc7d230afa466fe5:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 38,
  "time_alive": 845,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "245cd346263c435cbc7d230afa466fe5:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 2,
  "time_alive": 1534,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "245cd346263c435cbc7d230afa466fe5:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1536,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "245cd346263c435cbc7d230afa466fe5:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 27,
  "time_alive": 1244,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 17,
  "time_alive": 1378,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 3,
  "time_alive": 1452,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 34,
  "time_alive": 930,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 12,
  "time_alive": 1402,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 36,
  "time_alive": 1025,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 1,
  "time_alive": 1535,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 11,
  "time_alive": 1409,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 29,
  "time_alive": 1180,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 24,
  "time_alive": 1261,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 8,
  "time_alive": 1446,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 4,
  "time_alive": 1484,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 5,
  "time_alive": 1504,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 48,
  "time_alive": 177,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 25,
  "time_alive": 1235,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 13,
  "time_alive": 1411,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 14,
  "time_alive": 1388,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 2,
  "time_alive": 1536,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 17,
  "time_alive": 1383,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 8,
  "time_alive": 1433,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 50,
  "time_alive": 142,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 7,
  "time_alive": 1448,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 40,
  "time_alive": 434,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 8,
  "time_alive": 1427,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 11,
  "time_alive": 1425,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "12367c497be945b593933af780d76551:f6d565f6647242ac8735227af015e4d8",
  "placement": 3,
  "time_alive": 1492,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "12367c497be945b593933af780d76551:f6d565f6647242ac8735227af015e4d8",
  "placement": 10,
  "time_alive": 1393,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "12367c497be945b593933af780d76551:f6d565f6647242ac8735227af015e4d8",
  "placement": 37,
  "time_alive": 859,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "12367c497be945b593933af780d76551:f6d565f6647242ac8735227af015e4d8",
  "placement": 13,
  "time_alive": 1399,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "12367c497be945b593933af780d76551:f6d565f6647242ac8735227af015e4d8",
  "placement": 24,
  "time_alive": 1338,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "12367c497be945b593933af780d76551:f6d565f6647242ac8735227af015e4d8",
  "placement": 30,
  "time_alive": 1173,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 40,
  "time_alive": 813,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 26,
  "time_alive": 1212,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 12,
  "time_alive": 1413,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 6,
  "time_alive": 1482,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 42,
  "time_alive": 611,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1447,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 14,
  "time_alive": 1384,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 14,
  "time_alive": 1376,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 2,
  "time_alive": 1524,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 28,
  "time_alive": 1225,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 13,
  "time_alive": 1399,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 43,
  "time_alive": 321,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 30,
  "time_alive": 1093,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 9,
  "time_alive": 1395,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 4,
  "time_alive": 1478,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 43,
  "time_alive": 322,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 26,
  "time_alive": 1253,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 14,
  "time_alive": 1404,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "100b265143144d9c90eedf380f2b8a00:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 5,
  "time_alive": 1458,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "100b265143144d9c90eedf380f2b8a00:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 43,
  "time_alive": 754,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "100b265143144d9c90eedf380f2b8a00:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 28,
  "time_alive": 1185,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "100b265143144d9c90eedf380f2b8a00:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 7,
  "time_alive": 1457,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "100b265143144d9c90eedf380f2b8a00:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 19,
  "time_alive": 1373,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "100b265143144d9c90eedf380f2b8a00:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 18,
  "time_alive": 1380,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 19,
  "time_alive": 1371,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 37,
  "time_alive": 902,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 6,
  "time_alive": 1453,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 36,
  "time_alive": 1101,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 41,
  "time_alive": 643,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 7,
  "time_alive": 1459,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 15,
  "time_alive": 1382,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 12,
  "time_alive": 1383,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 32,
  "time_alive": 1007,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 5,
  "time_alive": 1489,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 25,
  "time_alive": 1322,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 23,
  "time_alive": 1309,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 20,
  "time_alive": 1361,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 44,
  "time_alive": 472,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 8,
  "time_alive": 1444,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 27,
  "time_alive": 1250,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 16,
  "time_alive": 1390,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 20,
  "time_alive": 1350,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 37,
  "time_alive": 900,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 27,
  "time_alive": 1187,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1461,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 34,
  "time_alive": 1145,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 12,
  "time_alive": 1399,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 15,
  "time_alive": 1404,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 21,
  "time_alive": 1353,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 34,
  "time_alive": 999,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 47,
  "time_alive": 249,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 1,
  "time_alive": 1534,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 34,
  "time_alive": 1083,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 28,
  "time_alive": 1227,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:befb0c173cd242d982d355078cf82202",
  "placement": 25,
  "time_alive": 1206,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:befb0c173cd242d982d355078cf82202",
  "placement": 30,
  "time_alive": 1092,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:befb0c173cd242d982d355078cf82202",
  "placement": 27,
  "time_alive": 1208,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:befb0c173cd242d982d355078cf82202",
  "placement": 31,
  "time_alive": 1189,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:befb0c173cd242d982d355078cf82202",
  "placement": 18,
  "time_alive": 1376,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:befb0c173cd242d982d355078cf82202",
  "placement": 6,
  "time_alive": 1463,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "0610088d19ef47d68de8b7505a059d07:f9543eabd4bc42b0acf763889726be7b",
  "placement": 18,
  "time_alive": 1372,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "0610088d19ef47d68de8b7505a059d07:f9543eabd4bc42b0acf763889726be7b",
  "placement": 46,
  "time_alive": 364,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "0610088d19ef47d68de8b7505a059d07:f9543eabd4bc42b0acf763889726be7b",
  "placement": 14,
  "time_alive": 1409,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "0610088d19ef47d68de8b7505a059d07:f9543eabd4bc42b0acf763889726be7b",
  "placement": 16,
  "time_alive": 1382,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "0610088d19ef47d68de8b7505a059d07:f9543eabd4bc42b0acf763889726be7b",
  "placement": 38,
  "time_alive": 813,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "0610088d19ef47d68de8b7505a059d07:f9543eabd4bc42b0acf763889726be7b",
  "placement": 46,
  "time_alive": 219,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "420df92347464bd0add659245e0a3529:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 34,
  "time_alive": 939,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "420df92347464bd0add659245e0a3529:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 8,
  "time_alive": 1397,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "420df92347464bd0add659245e0a3529:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 23,
  "time_alive": 1268,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "420df92347464bd0add659245e0a3529:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 26,
  "time_alive": 1323,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "420df92347464bd0add659245e0a3529:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 10,
  "time_alive": 1414,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "420df92347464bd0add659245e0a3529:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 35,
  "time_alive": 1068,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 4,
  "time_alive": 1458,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 16,
  "time_alive": 1362,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 43,
  "time_alive": 613,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 23,
  "time_alive": 1342,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 31,
  "time_alive": 1174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 29,
  "time_alive": 1186,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 27,
  "time_alive": 1133,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 35,
  "time_alive": 986,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 15,
  "time_alive": 1406,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 29,
  "time_alive": 1223,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 3,
  "time_alive": 1485,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 26,
  "time_alive": 1254,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 44,
  "time_alive": 408,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 15,
  "time_alive": 1374,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 9,
  "time_alive": 1428,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 20,
  "time_alive": 1355,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 32,
  "time_alive": 1144,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 25,
  "time_alive": 1289,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 46,
  "time_alive": 225,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 24,
  "time_alive": 1239,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 49,
  "time_alive": 118,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 49,
  "time_alive": 125,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 30,
  "time_alive": 1203,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 4,
  "time_alive": 1513,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 43,
  "time_alive": 789,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 28,
  "time_alive": 1182,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 33,
  "time_alive": 947,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 3,
  "time_alive": 1519,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 20,
  "time_alive": 1367,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 22,
  "time_alive": 1314,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 5,
  "time_alive": 1417,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 25,
  "time_alive": 1234,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 33,
  "time_alive": 1169,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 9,
  "time_alive": 1414,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 33,
  "time_alive": 1111,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 10,
  "time_alive": 1411,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 48,
  "time_alive": 280,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 35,
  "time_alive": 909,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 38,
  "time_alive": 629,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 23,
  "time_alive": 1349,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 40,
  "time_alive": 527,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:da589d3557224582b9094375290bf0ed",
  "placement": 47,
  "time_alive": 204,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:da589d3557224582b9094375290bf0ed",
  "placement": 36,
  "time_alive": 914,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:da589d3557224582b9094375290bf0ed",
  "placement": 41,
  "time_alive": 830,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:da589d3557224582b9094375290bf0ed",
  "placement": 11,
  "time_alive": 1407,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:da589d3557224582b9094375290bf0ed",
  "placement": 15,
  "time_alive": 1390,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:da589d3557224582b9094375290bf0ed",
  "placement": 12,
  "time_alive": 1413,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 42,
  "time_alive": 806,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 21,
  "time_alive": 1348,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 22,
  "time_alive": 1274,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 47,
  "time_alive": 147,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 27,
  "time_alive": 1248,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 9,
  "time_alive": 1439,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4",
  "placement": 6,
  "time_alive": 1452,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4",
  "placement": 32,
  "time_alive": 1083,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4",
  "placement": 31,
  "time_alive": 1011,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4",
  "placement": 32,
  "time_alive": 1173,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4",
  "placement": 33,
  "time_alive": 1124,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4",
  "placement": 32,
  "time_alive": 1134,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "2d6902991a294e4b8d19762436815191:64b9b28ccdc0482abfaac6266306248c",
  "placement": 33,
  "time_alive": 1002,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "2d6902991a294e4b8d19762436815191:64b9b28ccdc0482abfaac6266306248c",
  "placement": 11,
  "time_alive": 1383,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "2d6902991a294e4b8d19762436815191:64b9b28ccdc0482abfaac6266306248c",
  "placement": 29,
  "time_alive": 1115,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "2d6902991a294e4b8d19762436815191:64b9b28ccdc0482abfaac6266306248c",
  "placement": 17,
  "time_alive": 1374,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "2d6902991a294e4b8d19762436815191:64b9b28ccdc0482abfaac6266306248c",
  "placement": 37,
  "time_alive": 870,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "2d6902991a294e4b8d19762436815191:64b9b28ccdc0482abfaac6266306248c",
  "placement": 31,
  "time_alive": 1171,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "4d52f60ffed24a31be23f32439eb285b:a64ece3f836c49e6a8c212844b6272f7",
  "placement": 32,
  "time_alive": 1030,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "4d52f60ffed24a31be23f32439eb285b:a64ece3f836c49e6a8c212844b6272f7",
  "placement": 40,
  "time_alive": 861,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "4d52f60ffed24a31be23f32439eb285b:a64ece3f836c49e6a8c212844b6272f7",
  "placement": 10,
  "time_alive": 1423,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "4d52f60ffed24a31be23f32439eb285b:a64ece3f836c49e6a8c212844b6272f7",
  "placement": 25,
  "time_alive": 1328,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "4d52f60ffed24a31be23f32439eb285b:a64ece3f836c49e6a8c212844b6272f7",
  "placement": 49,
  "time_alive": 275,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "4d52f60ffed24a31be23f32439eb285b:a64ece3f836c49e6a8c212844b6272f7",
  "placement": 42,
  "time_alive": 391,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 36,
  "time_alive": 905,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 17,
  "time_alive": 1361,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 46,
  "time_alive": 289,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 22,
  "time_alive": 1343,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 21,
  "time_alive": 1364,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 21,
  "time_alive": 1348,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "829b509f26964205acf10f463a743a14:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 26,
  "time_alive": 1146,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "829b509f26964205acf10f463a743a14:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 18,
  "time_alive": 1359,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "829b509f26964205acf10f463a743a14:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 17,
  "time_alive": 1396,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "829b509f26964205acf10f463a743a14:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 46,
  "time_alive": 236,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "829b509f26964205acf10f463a743a14:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 48,
  "time_alive": 285,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "829b509f26964205acf10f463a743a14:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 41,
  "time_alive": 440,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 41,
  "time_alive": 810,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 41,
  "time_alive": 861,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 42,
  "time_alive": 659,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 42,
  "time_alive": 363,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 44,
  "time_alive": 507,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 16,
  "time_alive": 1396,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 49,
  "time_alive": 160,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 19,
  "time_alive": 1352,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 20,
  "time_alive": 1363,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 41,
  "time_alive": 420,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 17,
  "time_alive": 1390,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 24,
  "time_alive": 1308,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:780c8202899642eeae42283b437f3d1a",
  "placement": 22,
  "time_alive": 1349,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:780c8202899642eeae42283b437f3d1a",
  "placement": 31,
  "time_alive": 1090,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:780c8202899642eeae42283b437f3d1a",
  "placement": 30,
  "time_alive": 1085,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:780c8202899642eeae42283b437f3d1a",
  "placement": 24,
  "time_alive": 1335,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:780c8202899642eeae42283b437f3d1a",
  "placement": 39,
  "time_alive": 811,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072:c31c186ab48142b796d8cf87158b110c",
  "placement": 35,
  "time_alive": 933,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072:c31c186ab48142b796d8cf87158b110c",
  "placement": 33,
  "time_alive": 1029,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072:c31c186ab48142b796d8cf87158b110c",
  "placement": 19,
  "time_alive": 1376,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072:c31c186ab48142b796d8cf87158b110c",
  "placement": 35,
  "time_alive": 1134,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072:c31c186ab48142b796d8cf87158b110c",
  "placement": 28,
  "time_alive": 1225,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072:c31c186ab48142b796d8cf87158b110c",
  "placement": 38,
  "time_alive": 542,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 12,
  "time_alive": 1401,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 23,
  "time_alive": 1323,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 44,
  "time_alive": 369,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 37,
  "time_alive": 1077,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 29,
  "time_alive": 1221,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 34,
  "time_alive": 1110,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 24,
  "time_alive": 1209,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 47,
  "time_alive": 303,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 11,
  "time_alive": 1415,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 48,
  "time_alive": 126,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 45,
  "time_alive": 475,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 39,
  "time_alive": 537,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 29,
  "time_alive": 1117,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 20,
  "time_alive": 1350,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 48,
  "time_alive": 207,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 38,
  "time_alive": 865,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 45,
  "time_alive": 448,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 21,
  "time_alive": 1355,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 21,
  "time_alive": 1349,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 35,
  "time_alive": 1033,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 47,
  "time_alive": 156,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:4c2823ee44f04153894573603591d1be",
  "placement": 39,
  "time_alive": 859,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:4c2823ee44f04153894573603591d1be",
  "placement": 42,
  "time_alive": 787,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:4c2823ee44f04153894573603591d1be",
  "placement": 36,
  "time_alive": 888,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:4c2823ee44f04153894573603591d1be",
  "placement": 44,
  "time_alive": 314,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:4c2823ee44f04153894573603591d1be",
  "placement": 43,
  "time_alive": 611,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:4c2823ee44f04153894573603591d1be",
  "placement": 44,
  "time_alive": 302,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a:f7d7566162fc4e65af40d412746b9457",
  "placement": 31,
  "time_alive": 1092,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a:f7d7566162fc4e65af40d412746b9457",
  "placement": 39,
  "time_alive": 874,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a:f7d7566162fc4e65af40d412746b9457",
  "placement": 26,
  "time_alive": 1230,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a:f7d7566162fc4e65af40d412746b9457",
  "placement": 30,
  "time_alive": 1196,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a:f7d7566162fc4e65af40d412746b9457",
  "placement": 40,
  "time_alive": 748,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 45,
  "time_alive": 231,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 49,
  "time_alive": 177,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 45,
  "time_alive": 331,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 39,
  "time_alive": 624,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 22,
  "time_alive": 1355,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 45,
  "time_alive": 236,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "d0c0c88e-806f-4301-a7f8-3a680ea0848e",
  "team_id": "53f04903aade47fd95b3e92b0529f4f3:a48f656128234f10ad175605ddd314ab",
  "placement": 28,
  "time_alive": 1118,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "7485169c-d7b0-4cb1-9c43-6d416eb1fae6",
  "team_id": "53f04903aade47fd95b3e92b0529f4f3:a48f656128234f10ad175605ddd314ab",
  "placement": 38,
  "time_alive": 881,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "76c096e5-6e08-4b07-b841-479d0bb5ed2f",
  "team_id": "53f04903aade47fd95b3e92b0529f4f3:a48f656128234f10ad175605ddd314ab",
  "placement": 39,
  "time_alive": 845,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c",
  "team_id": "53f04903aade47fd95b3e92b0529f4f3:a48f656128234f10ad175605ddd314ab",
  "placement": 45,
  "time_alive": 300,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e724bbd7-9a2a-4fee-9942-9b4437e566c6",
  "team_id": "53f04903aade47fd95b3e92b0529f4f3:a48f656128234f10ad175605ddd314ab",
  "placement": 46,
  "time_alive": 396,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51",
  "team_id": "53f04903aade47fd95b3e92b0529f4f3:a48f656128234f10ad175605ddd314ab",
  "placement": 37,
  "time_alive": 601,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1520,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1502,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1497,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1497,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 9,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 22,
  "time_alive": 934,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:c31c186ab48142b796d8cf87158b110c:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1499,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:c31c186ab48142b796d8cf87158b110c:efd4b17204c346aaa1672add49529a6c",
  "placement": 10,
  "time_alive": 1387,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:c31c186ab48142b796d8cf87158b110c:efd4b17204c346aaa1672add49529a6c",
  "placement": 4,
  "time_alive": 1479,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:c31c186ab48142b796d8cf87158b110c:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1485,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:c31c186ab48142b796d8cf87158b110c:efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1494,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:c31c186ab48142b796d8cf87158b110c:efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1345,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 19,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 2,
  "time_alive": 1502,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1513,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1520,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 10,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 23,
  "time_alive": 930,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 13,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 4,
  "time_alive": 1483,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 12,
  "time_alive": 1400,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 8,
  "time_alive": 1409,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 18,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 4,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 4,
  "time_alive": 1499,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 6,
  "time_alive": 1450,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 5,
  "time_alive": 1464,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 7,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1516,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 6,
  "time_alive": 1451,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 24,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 22,
  "time_alive": 1139,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 25,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 13,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 24,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 1,
  "time_alive": 1472,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 1,
  "time_alive": 1520,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 25,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 19,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 6,
  "time_alive": 1449,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 5,
  "time_alive": 1476,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 19,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 8,
  "time_alive": 1442,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 5,
  "time_alive": 1483,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 20,
  "time_alive": 1212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 2,
  "time_alive": 1520,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 6,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 8,
  "time_alive": 1411,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 9,
  "time_alive": 1440,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 30,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 11,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 15,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 15,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 7,
  "time_alive": 1413,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13d11528-7475-414e-854b-2f21533938f3",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 26,
  "time_alive": 509,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 11,
  "time_alive": 1382,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 17,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 22,
  "time_alive": 1175,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 1,
  "time_alive": 1516,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 2,
  "time_alive": 1472,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 11,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 18,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 15,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 4,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 14,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 12,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 3,
  "time_alive": 1517,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 29,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 2,
  "time_alive": 1513,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 14,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 4,
  "time_alive": 1482,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 21,
  "time_alive": 1100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 25,
  "time_alive": 989,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 15,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 24,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 19,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 7,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 5,
  "time_alive": 1457,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 6,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 21,
  "time_alive": 1158,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 8,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 18,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 11,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 9,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 17,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 23,
  "time_alive": 1118,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 13,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 21,
  "time_alive": 1194,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 8,
  "time_alive": 1438,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 20,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:bae21bcc52734522bd773f5d9b712734:f977c39693084756bcc3a14f99658ebc",
  "placement": 14,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:bae21bcc52734522bd773f5d9b712734:f977c39693084756bcc3a14f99658ebc",
  "placement": 8,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:bae21bcc52734522bd773f5d9b712734:f977c39693084756bcc3a14f99658ebc",
  "placement": 7,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:bae21bcc52734522bd773f5d9b712734:f977c39693084756bcc3a14f99658ebc",
  "placement": 26,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:bae21bcc52734522bd773f5d9b712734:f977c39693084756bcc3a14f99658ebc",
  "placement": 21,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "2987a7edce3d4e77b3755422a86528e8:bae21bcc52734522bd773f5d9b712734:f977c39693084756bcc3a14f99658ebc",
  "placement": 3,
  "time_alive": 1463,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 26,
  "time_alive": 949,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 7,
  "time_alive": 1445,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 30,
  "time_alive": 524,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 25,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 12,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 25,
  "time_alive": 732,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 20,
  "time_alive": 1196,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 3,
  "time_alive": 1493,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 6,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 23,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 13,
  "time_alive": 1390,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 11,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 22,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 14,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 9,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 10,
  "time_alive": 1397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 22,
  "time_alive": 1151,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 33,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 21,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 31,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 31,
  "time_alive": 453,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 11,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 33,
  "time_alive": 234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 24,
  "time_alive": 752,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 10,
  "time_alive": 1437,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 12,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 16,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 16,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 16,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 16,
  "time_alive": 1304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08:b47ad8c4d637496eba7cafb8f081107d:e78be14b45ca4c78806554acfb04c118",
  "placement": 7,
  "time_alive": 1448,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08:b47ad8c4d637496eba7cafb8f081107d:e78be14b45ca4c78806554acfb04c118",
  "placement": 27,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08:b47ad8c4d637496eba7cafb8f081107d:e78be14b45ca4c78806554acfb04c118",
  "placement": 23,
  "time_alive": 1010,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08:b47ad8c4d637496eba7cafb8f081107d:e78be14b45ca4c78806554acfb04c118",
  "placement": 29,
  "time_alive": 477,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08:b47ad8c4d637496eba7cafb8f081107d:e78be14b45ca4c78806554acfb04c118",
  "placement": 32,
  "time_alive": 292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08:b47ad8c4d637496eba7cafb8f081107d:e78be14b45ca4c78806554acfb04c118",
  "placement": 15,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 16,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 13,
  "time_alive": 1351,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 18,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 33,
  "time_alive": 232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 17,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 17,
  "time_alive": 1285,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 23,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 20,
  "time_alive": 1184,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 33,
  "time_alive": 110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 17,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 23,
  "time_alive": 1093,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 27,
  "time_alive": 606,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 30,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 17,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 10,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 9,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 20,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 14,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 18,
  "time_alive": 1262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 24,
  "time_alive": 1041,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 22,
  "time_alive": 1170,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 28,
  "time_alive": 526,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 29,
  "time_alive": 353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 31,
  "time_alive": 238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "187689fd767f4ae3a11fa00ab91e0a95:74ddaf45d38641d58c8804dbd9b89a03:d35bb2f456654fffbb1cfd469cf81ee0",
  "placement": 31,
  "time_alive": 721,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "187689fd767f4ae3a11fa00ab91e0a95:74ddaf45d38641d58c8804dbd9b89a03:d35bb2f456654fffbb1cfd469cf81ee0",
  "placement": 33,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "187689fd767f4ae3a11fa00ab91e0a95:74ddaf45d38641d58c8804dbd9b89a03:d35bb2f456654fffbb1cfd469cf81ee0",
  "placement": 28,
  "time_alive": 753,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "187689fd767f4ae3a11fa00ab91e0a95:74ddaf45d38641d58c8804dbd9b89a03:d35bb2f456654fffbb1cfd469cf81ee0",
  "placement": 32,
  "time_alive": 273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "187689fd767f4ae3a11fa00ab91e0a95:74ddaf45d38641d58c8804dbd9b89a03:d35bb2f456654fffbb1cfd469cf81ee0",
  "placement": 25,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "187689fd767f4ae3a11fa00ab91e0a95:74ddaf45d38641d58c8804dbd9b89a03:d35bb2f456654fffbb1cfd469cf81ee0",
  "placement": 10,
  "time_alive": 1374,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 29,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 26,
  "time_alive": 965,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 29,
  "time_alive": 564,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 12,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 28,
  "time_alive": 478,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 18,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 28,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 9,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 27,
  "time_alive": 792,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 24,
  "time_alive": 926,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 30,
  "time_alive": 337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 26,
  "time_alive": 646,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3c6f6e4a95a2486da0a4fdbd3c20db62:5ee7b032c74c4796a108d48e8e7eee9a:7b495e91ae634918a8caf7adff9d4289",
  "placement": 15,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3c6f6e4a95a2486da0a4fdbd3c20db62:5ee7b032c74c4796a108d48e8e7eee9a:7b495e91ae634918a8caf7adff9d4289",
  "placement": 16,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3c6f6e4a95a2486da0a4fdbd3c20db62:5ee7b032c74c4796a108d48e8e7eee9a:7b495e91ae634918a8caf7adff9d4289",
  "placement": 26,
  "time_alive": 799,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3c6f6e4a95a2486da0a4fdbd3c20db62:5ee7b032c74c4796a108d48e8e7eee9a:7b495e91ae634918a8caf7adff9d4289",
  "placement": 31,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3c6f6e4a95a2486da0a4fdbd3c20db62:5ee7b032c74c4796a108d48e8e7eee9a:7b495e91ae634918a8caf7adff9d4289",
  "placement": 26,
  "time_alive": 594,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3c6f6e4a95a2486da0a4fdbd3c20db62:5ee7b032c74c4796a108d48e8e7eee9a:7b495e91ae634918a8caf7adff9d4289",
  "placement": 32,
  "time_alive": 208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 12,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 32,
  "time_alive": 787,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 14,
  "time_alive": 1388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 20,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 19,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 28,
  "time_alive": 387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 32,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 28,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 32,
  "time_alive": 234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 30,
  "time_alive": 467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 31,
  "time_alive": 313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 30,
  "time_alive": 285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "052d5bfb-39a9-4380-87b3-6117f63ab449",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 27,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f02a046-929c-450c-b4ad-3a842a241b11",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 19,
  "time_alive": 1231,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ee00dae4-1d6f-4918-9b6c-cae8af26cb64",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 21,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5de74ac2-a37c-4822-bdc0-cd40db91c011",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16fe1d92-f336-4c54-8678-7b33708e5738",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 27,
  "time_alive": 512,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437cb6b8-0e01-49d0-beba-987416206738",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 29,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1492,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1501,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1506,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1542,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 14,
  "time_alive": 1400,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1505,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 10,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 16,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1554,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 11,
  "time_alive": 1432,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 23,
  "time_alive": 1062,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 12,
  "time_alive": 1456,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 18,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1501,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1506,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 24,
  "time_alive": 1078,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 11,
  "time_alive": 1486,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1557,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1491,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 18,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 12,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 9,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 15,
  "time_alive": 1445,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 29,
  "time_alive": 851,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 9,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 8,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 5,
  "time_alive": 1484,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 26,
  "time_alive": 917,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 9,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 3,
  "time_alive": 1535,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 11,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 15,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 2,
  "time_alive": 1506,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 3,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 7,
  "time_alive": 1539,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 20,
  "time_alive": 1195,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 24,
  "time_alive": 966,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 9,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 4,
  "time_alive": 1505,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 1,
  "time_alive": 1581,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 13,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 7,
  "time_alive": 1485,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 14,
  "time_alive": 1390,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 7,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 7,
  "time_alive": 1451,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 9,
  "time_alive": 1380,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 6,
  "time_alive": 1545,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 5,
  "time_alive": 1466,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 14,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1478,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 6,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 2,
  "time_alive": 1581,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 28,
  "time_alive": 478,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 1,
  "time_alive": 1536,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 17,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 2,
  "time_alive": 1554,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 28,
  "time_alive": 507,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 27,
  "time_alive": 498,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 17,
  "time_alive": 1438,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 12,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 13,
  "time_alive": 1382,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 12,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 28,
  "time_alive": 570,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 10,
  "time_alive": 1487,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 2,
  "time_alive": 1557,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 25,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 4,
  "time_alive": 1490,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 5,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 16,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 12,
  "time_alive": 1373,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 3,
  "time_alive": 1567,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 7,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 11,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 7,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 22,
  "time_alive": 1119,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 30,
  "time_alive": 328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 6,
  "time_alive": 1513,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 2,
  "time_alive": 1536,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 32,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 11,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 26,
  "time_alive": 652,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 14,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 1,
  "time_alive": 1579,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 3,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 18,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 3,
  "time_alive": 1488,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 16,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 5,
  "time_alive": 1540,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 4,
  "time_alive": 1529,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 12,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 19,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 19,
  "time_alive": 1249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 13,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 1,
  "time_alive": 1470,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 13,
  "time_alive": 1449,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 2,
  "time_alive": 1492,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 7,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 30,
  "time_alive": 532,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1542,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 25,
  "time_alive": 936,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 5,
  "time_alive": 1528,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 13,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 30,
  "time_alive": 803,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 16,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 3,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 31,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 24,
  "time_alive": 647,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 22,
  "time_alive": 1182,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 10,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 26,
  "time_alive": 801,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 9,
  "time_alive": 1440,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 3,
  "time_alive": 1562,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 11,
  "time_alive": 1476,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 19,
  "time_alive": 1294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 5,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 27,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 6,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 6,
  "time_alive": 1406,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 14,
  "time_alive": 1446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 9,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 17,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 10,
  "time_alive": 1430,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 7,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 17,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 7,
  "time_alive": 1507,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 22,
  "time_alive": 1254,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 8,
  "time_alive": 1446,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 8,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 19,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 5,
  "time_alive": 1416,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b:c31c186ab48142b796d8cf87158b110c:e82015b2753a4b288d13562eecf882be",
  "placement": 8,
  "time_alive": 1510,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 15,
  "time_alive": 1348,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 6,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 18,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 3,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 19,
  "time_alive": 1247,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 3,
  "time_alive": 1546,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 16,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 7,
  "time_alive": 1471,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 14,
  "time_alive": 1363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 30,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 15,
  "time_alive": 1328,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 2,
  "time_alive": 1579,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 15,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 6,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 20,
  "time_alive": 1167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 27,
  "time_alive": 671,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 18,
  "time_alive": 1286,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 6,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 6,
  "time_alive": 1472,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 24,
  "time_alive": 1014,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 1,
  "time_alive": 1506,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 7,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 19,
  "time_alive": 1239,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 27,
  "time_alive": 1000,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 5,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 14,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 8,
  "time_alive": 1458,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 13,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 23,
  "time_alive": 855,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 24,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 2,
  "time_alive": 1507,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 3,
  "time_alive": 1522,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 32,
  "time_alive": 128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 10,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 23,
  "time_alive": 798,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 11,
  "time_alive": 1387,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 8,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 19,
  "time_alive": 1240,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 26,
  "time_alive": 985,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 16,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 20,
  "time_alive": 1073,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 32,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 21,
  "time_alive": 1062,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 9,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 4,
  "time_alive": 1469,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 4,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 5,
  "time_alive": 1553,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 13,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 3,
  "time_alive": 1477,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 17,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 13,
  "time_alive": 1372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 22,
  "time_alive": 1009,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 14,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 21,
  "time_alive": 1259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 12,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 29,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 15,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 2,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 4,
  "time_alive": 1564,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 4,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 4,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 16,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 14,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 8,
  "time_alive": 1517,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 12,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 17,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 20,
  "time_alive": 1109,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 23,
  "time_alive": 1026,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 22,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 24,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 25,
  "time_alive": 616,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 24,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 21,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 28,
  "time_alive": 646,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 21,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 4,
  "time_alive": 1553,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 16,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 18,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 1,
  "time_alive": 1507,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 32,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 14,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 11,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 18,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 10,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 12,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 21,
  "time_alive": 1187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 10,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 12,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 17,
  "time_alive": 1287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 15,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 13,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 30,
  "time_alive": 781,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 27,
  "time_alive": 556,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 25,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 10,
  "time_alive": 1496,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 25,
  "time_alive": 1114,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 26,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 23,
  "time_alive": 917,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 12,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 7,
  "time_alive": 1522,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 10,
  "time_alive": 1480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 4,
  "time_alive": 1508,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 25,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 25,
  "time_alive": 949,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 10,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 20,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 26,
  "time_alive": 599,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 23,
  "time_alive": 1169,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 15,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 31,
  "time_alive": 220,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 9,
  "time_alive": 1502,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 19,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 23,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 3,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 6,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 24,
  "time_alive": 874,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 19,
  "time_alive": 1235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 9,
  "time_alive": 1499,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 6,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 19,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 20,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 11,
  "time_alive": 1400,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 28,
  "time_alive": 409,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 32,
  "time_alive": 257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 28,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 10,
  "time_alive": 1437,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 4,
  "time_alive": 1484,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 23,
  "time_alive": 1043,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 26,
  "time_alive": 567,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "03f7f7c063154d5f885e2cc4ca2761d1:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 30,
  "time_alive": 213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 14,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 22,
  "time_alive": 983,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 11,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 32,
  "time_alive": 135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 33,
  "time_alive": 141,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 22,
  "time_alive": 914,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 27,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 24,
  "time_alive": 964,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 20,
  "time_alive": 1248,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 5,
  "time_alive": 1465,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 29,
  "time_alive": 273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 27,
  "time_alive": 568,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 21,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 31,
  "time_alive": 172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 32,
  "time_alive": 242,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 25,
  "time_alive": 1006,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 23,
  "time_alive": 971,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 21,
  "time_alive": 1039,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 14,
  "time_alive": 1436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 9,
  "time_alive": 1446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 26,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 12,
  "time_alive": 1431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 8,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 20,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 30,
  "time_alive": 260,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 13,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 19,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 6,
  "time_alive": 1531,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 24,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 33,
  "time_alive": 114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 15,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 21,
  "time_alive": 1198,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 20,
  "time_alive": 1133,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 28,
  "time_alive": 360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 21,
  "time_alive": 1160,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 19,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 29,
  "time_alive": 287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 5,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 29,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 15,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 29,
  "time_alive": 478,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 26,
  "time_alive": 966,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 29,
  "time_alive": 836,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 10,
  "time_alive": 1428,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 25,
  "time_alive": 705,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 22,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 28,
  "time_alive": 492,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 17,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 20,
  "time_alive": 1244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 22,
  "time_alive": 965,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 17,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 20,
  "time_alive": 1245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 15,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 11,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 23,
  "time_alive": 991,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 18,
  "time_alive": 1266,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 8,
  "time_alive": 1439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 21,
  "time_alive": 1207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 16,
  "time_alive": 1443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 16,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 16,
  "time_alive": 1351,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 25,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 18,
  "time_alive": 1278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 21,
  "time_alive": 1086,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 33,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 20,
  "time_alive": 1271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 31,
  "time_alive": 654,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 13,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 21,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 16,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 11,
  "time_alive": 1492,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 30,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 23,
  "time_alive": 972,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 31,
  "time_alive": 356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 15,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 32,
  "time_alive": 199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 25,
  "time_alive": 634,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 9,
  "time_alive": 1471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 28,
  "time_alive": 836,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 17,
  "time_alive": 1284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 17,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 18,
  "time_alive": 1235,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 29,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 8,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 28,
  "time_alive": 334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 27,
  "time_alive": 686,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 30,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 29,
  "time_alive": 361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 30,
  "time_alive": 447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 29,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 22,
  "time_alive": 1040,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 22,
  "time_alive": 1108,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 29,
  "time_alive": 332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "53c8f499985644a183bc562bf3861b4a:923a664f23b14acab8d3c131dadcbd39:af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 30,
  "time_alive": 250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 31,
  "time_alive": 534,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 32,
  "time_alive": 132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 24,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 27,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 18,
  "time_alive": 1264,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 26,
  "time_alive": 626,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 8,
  "time_alive": 1483,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 26,
  "time_alive": 867,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 31,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 18,
  "time_alive": 1232,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b6cb84c-a93f-42c6-859a-f376a585c1a4",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 17,
  "time_alive": 1259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0f08e8f-858b-4b7d-915a-f7f124eae6fe",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a:b6dcb26df5054b41a52501fdbd3f7711:db26fcb0aa7e4e86b158871a12c278c0",
  "placement": 22,
  "time_alive": 943,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 28,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 25,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 33,
  "time_alive": 138,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 23,
  "time_alive": 1084,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 24,
  "time_alive": 953,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 31,
  "time_alive": 340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 30,
  "time_alive": 598,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "256188cc-180c-4c1a-8382-01a9c13c1762",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 26,
  "time_alive": 1095,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13bc0e4b-170b-44c4-8eb3-0d259b75a78f",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 27,
  "time_alive": 342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d6fd240-5e1f-412c-9366-2a3b78d5b02b",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 29,
  "time_alive": 573,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bbc96bda-3e26-49c3-8b20-18f36eacb390",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 33,
  "time_alive": 127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c85a760-2e00-4b01-a125-7ba04f3aa69f",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 31,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 27,
  "time_alive": 614,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8e9f871c-c3f5-4c05-8312-0f23a11da681",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 31,
  "time_alive": 463,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010c07b0-fb63-4880-9c3d-384783fcb1a6",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 27,
  "time_alive": 867,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2e057fd5-66d5-4506-8189-f96f012df7d4",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 28,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "179c2a67-f55d-4c31-aa61-348411661eba",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 31,
  "time_alive": 215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 8,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 17,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 28,
  "time_alive": 499,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 3,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 1,
  "time_alive": 1535,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 1,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 9,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 7,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 3,
  "time_alive": 1485,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 3,
  "time_alive": 1481,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 9,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 9,
  "time_alive": 1448,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 11,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 13,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 12,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 5,
  "time_alive": 1457,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 5,
  "time_alive": 1502,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 3,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 1,
  "time_alive": 1489,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 12,
  "time_alive": 1404,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 4,
  "time_alive": 1464,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 13,
  "time_alive": 1370,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 1,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 5,
  "time_alive": 1491,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 19,
  "time_alive": 1241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1529,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 7,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1535,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 12,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 17,
  "time_alive": 1233,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1512,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 5,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 10,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 21,
  "time_alive": 1221,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 26,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1491,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 2,
  "time_alive": 1516,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 4,
  "time_alive": 1500,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 2,
  "time_alive": 1466,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 33,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1435,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 33,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 30,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 33,
  "time_alive": 120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 23,
  "time_alive": 900,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 15,
  "time_alive": 1351,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 4,
  "time_alive": 1482,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 16,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 15,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 10,
  "time_alive": 1432,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 9,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 4,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 19,
  "time_alive": 1116,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 9,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 2,
  "time_alive": 1487,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 11,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 5,
  "time_alive": 1433,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 11,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 17,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 24,
  "time_alive": 967,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 16,
  "time_alive": 1410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 19,
  "time_alive": 1210,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 26,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 7,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 7,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 6,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 1,
  "time_alive": 1487,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 7,
  "time_alive": 1437,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 3,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 2,
  "time_alive": 1503,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 12,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 11,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 11,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 1,
  "time_alive": 1466,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 4,
  "time_alive": 1509,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 13,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 14,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 25,
  "time_alive": 868,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 17,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 1,
  "time_alive": 1524,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 17,
  "time_alive": 1301,
  "elims": 0,
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
    