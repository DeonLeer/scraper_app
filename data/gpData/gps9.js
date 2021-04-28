const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 7,
  "time_alive": 1478,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 44,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 23,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 16,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 82,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 11,
  "time_alive": 1476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 36,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 20,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 16,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 13,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 42,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 80,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 89,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 2,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 9,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 41,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 16,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 15,
  "time_alive": 1456,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 59,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 18,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 19,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 63,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 26,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "547e91945c404dbba299395c7ab5a9d5",
  "placement": 31,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "547e91945c404dbba299395c7ab5a9d5",
  "placement": 21,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "547e91945c404dbba299395c7ab5a9d5",
  "placement": 89,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "547e91945c404dbba299395c7ab5a9d5",
  "placement": 63,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "547e91945c404dbba299395c7ab5a9d5",
  "placement": 19,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "547e91945c404dbba299395c7ab5a9d5",
  "placement": 3,
  "time_alive": 1509,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 36,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 38,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 48,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 3,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 4,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 64,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 32,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 58,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 6,
  "time_alive": 1483,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 37,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 29,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 9,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 50,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 64,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 4,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 8,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 28,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 35,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 35,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 9,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 34,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 66,
  "time_alive": 1001,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 15,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 27,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 16,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 34,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 22,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 76,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 51,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 5,
  "time_alive": 1490,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 12,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 8,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 65,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 45,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 78,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 89,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 62,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 11,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 24,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 58,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 2,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 1,
  "time_alive": 1532,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 30,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 39,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 36,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 53,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 68,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "f2883d2175b441d59e9af9ff95924b22",
  "placement": 19,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "f2883d2175b441d59e9af9ff95924b22",
  "placement": 18,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "f2883d2175b441d59e9af9ff95924b22",
  "placement": 98,
  "time_alive": 83,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "f2883d2175b441d59e9af9ff95924b22",
  "placement": 27,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "f2883d2175b441d59e9af9ff95924b22",
  "placement": 8,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "f2883d2175b441d59e9af9ff95924b22",
  "placement": 75,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 52,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 22,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 9,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 52,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 69,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 6,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 33,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 35,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 10,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 55,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 20,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 47,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 48,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 41,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 77,
  "time_alive": 698,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 1,
  "time_alive": 1516,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 36,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 57,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 45,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 66,
  "time_alive": 917,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 71,
  "time_alive": 767,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 84,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 13,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 40,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 10,
  "time_alive": 1466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 50,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 31,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 22,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 23,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 55,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 98,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 83,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 12,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 11,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 17,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 60,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 65,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 33,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 18,
  "time_alive": 1440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 7,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 8,
  "time_alive": 1466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 10,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 84,
  "time_alive": 700,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 37,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 10,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 47,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 55,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 57,
  "time_alive": 1166,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 96,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 5,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 28,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 30,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 44,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 45,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 3,
  "time_alive": 1535,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 29,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 85,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 59,
  "time_alive": 1130,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 21,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 58,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 13,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 42,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 6,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 42,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 51,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 5,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 49,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 15,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 51,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 74,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 29,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 98,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 42,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 70,
  "time_alive": 828,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 81,
  "time_alive": 462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 10,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 7,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 44,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 52,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 7,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 73,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 18,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 22,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "3f04edb254f34b6f9f555e35efa33bba",
  "placement": 23,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "3f04edb254f34b6f9f555e35efa33bba",
  "placement": 48,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "3f04edb254f34b6f9f555e35efa33bba",
  "placement": 41,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "3f04edb254f34b6f9f555e35efa33bba",
  "placement": 5,
  "time_alive": 1501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "3f04edb254f34b6f9f555e35efa33bba",
  "placement": 31,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "3f04edb254f34b6f9f555e35efa33bba",
  "placement": 43,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 68,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 72,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 31,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 48,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 1,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 25,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 86,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 33,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 36,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 7,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 67,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 19,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 20,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 11,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 38,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 90,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 38,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 50,
  "time_alive": 1221,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 84,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 19,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 80,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 60,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 24,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 14,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 61,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 47,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 8,
  "time_alive": 1480,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 49,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 25,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 59,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 14,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 53,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 35,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 35,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 37,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 72,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 47,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 79,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 56,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 2,
  "time_alive": 1516,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 62,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 20,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 21,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 88,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 25,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 33,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 43,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 41,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 17,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 94,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 94,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 30,
  "time_alive": 1382,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 72,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 78,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 13,
  "time_alive": 1448,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 68,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 17,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 56,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 97,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 12,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 30,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 34,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 65,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 67,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "a34aba7c45f34966852e3b5768298539",
  "placement": 4,
  "time_alive": 1498,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "a34aba7c45f34966852e3b5768298539",
  "placement": 87,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "a34aba7c45f34966852e3b5768298539",
  "placement": 55,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "a34aba7c45f34966852e3b5768298539",
  "placement": 87,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "a34aba7c45f34966852e3b5768298539",
  "placement": 48,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "a34aba7c45f34966852e3b5768298539",
  "placement": 34,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 73,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 27,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 17,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 47,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 50,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 33,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 78,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 95,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 19,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 21,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 66,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 60,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 25,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 55,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 45,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 53,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 32,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 38,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 91,
  "time_alive": 361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 17,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 69,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 39,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 35,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 69,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 64,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 66,
  "time_alive": 994,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 26,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 54,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 33,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 74,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 70,
  "time_alive": 864,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 86,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 71,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 20,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 40,
  "time_alive": 1322,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 77,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 37,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 44,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 88,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 38,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 75,
  "time_alive": 603,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 28,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "7b6629618f4e44cca3249fea3311c6b3",
  "placement": 94,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "7b6629618f4e44cca3249fea3311c6b3",
  "placement": 50,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "7b6629618f4e44cca3249fea3311c6b3",
  "placement": 59,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "7b6629618f4e44cca3249fea3311c6b3",
  "placement": 69,
  "time_alive": 928,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "7b6629618f4e44cca3249fea3311c6b3",
  "placement": 80,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "7b6629618f4e44cca3249fea3311c6b3",
  "placement": 12,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "3f305d08f04a4ab98b248d3f1f14fa44",
  "placement": 49,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "3f305d08f04a4ab98b248d3f1f14fa44",
  "placement": 90,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "3f305d08f04a4ab98b248d3f1f14fa44",
  "placement": 51,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "3f305d08f04a4ab98b248d3f1f14fa44",
  "placement": 58,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "3f305d08f04a4ab98b248d3f1f14fa44",
  "placement": 12,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "3f305d08f04a4ab98b248d3f1f14fa44",
  "placement": 37,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 28,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 63,
  "time_alive": 1104,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 21,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 74,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 49,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 76,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "f61166ce24c5401faa5f02c052421947",
  "placement": 27,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "f61166ce24c5401faa5f02c052421947",
  "placement": 68,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "f61166ce24c5401faa5f02c052421947",
  "placement": 49,
  "time_alive": 1229,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "f61166ce24c5401faa5f02c052421947",
  "placement": 41,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "f61166ce24c5401faa5f02c052421947",
  "placement": 85,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "f61166ce24c5401faa5f02c052421947",
  "placement": 85,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 88,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 6,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 81,
  "time_alive": 594,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 83,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 57,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 89,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 24,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 67,
  "time_alive": 989,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 62,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 67,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 34,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 62,
  "time_alive": 1020,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 29,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 71,
  "time_alive": 910,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 68,
  "time_alive": 879,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 82,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 78,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 24,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 26,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 77,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 93,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 22,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 71,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 83,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "519beacd75194a22a6c4c5135aa24b36",
  "placement": 95,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "519beacd75194a22a6c4c5135aa24b36",
  "placement": 94,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "519beacd75194a22a6c4c5135aa24b36",
  "placement": 97,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "519beacd75194a22a6c4c5135aa24b36",
  "placement": 61,
  "time_alive": 1081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "519beacd75194a22a6c4c5135aa24b36",
  "placement": 14,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "519beacd75194a22a6c4c5135aa24b36",
  "placement": 65,
  "time_alive": 917,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 34,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 73,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 61,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 72,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 46,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 32,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 100,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 28,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 47,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 32,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 56,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 91,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 65,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 24,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 44,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 70,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 61,
  "time_alive": 1029,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "571255d104ef4292be0ac79c036e9940",
  "placement": 18,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "571255d104ef4292be0ac79c036e9940",
  "placement": 92,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "571255d104ef4292be0ac79c036e9940",
  "placement": 67,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "571255d104ef4292be0ac79c036e9940",
  "placement": 46,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "571255d104ef4292be0ac79c036e9940",
  "placement": 44,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "571255d104ef4292be0ac79c036e9940",
  "placement": 71,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 62,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 80,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 23,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 96,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 95,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 40,
  "time_alive": 1322,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "121db46c3e75478aa405131e5923eff1",
  "placement": 43,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "121db46c3e75478aa405131e5923eff1",
  "placement": 23,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "121db46c3e75478aa405131e5923eff1",
  "placement": 94,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "121db46c3e75478aa405131e5923eff1",
  "placement": 62,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "121db46c3e75478aa405131e5923eff1",
  "placement": 88,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "121db46c3e75478aa405131e5923eff1",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 54,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 32,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 32,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 50,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 55,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 48,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "34009ee20b024cfb843d984e5b9b30aa",
  "placement": 77,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "34009ee20b024cfb843d984e5b9b30aa",
  "placement": 16,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "34009ee20b024cfb843d984e5b9b30aa",
  "placement": 52,
  "time_alive": 1196,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "34009ee20b024cfb843d984e5b9b30aa",
  "placement": 59,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "34009ee20b024cfb843d984e5b9b30aa",
  "placement": 89,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "34009ee20b024cfb843d984e5b9b30aa",
  "placement": 87,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 96,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 75,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 27,
  "time_alive": 1388,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 86,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 61,
  "time_alive": 1119,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "55027c5b7a484a84a1dc6b12b8d8f150",
  "placement": 38,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "55027c5b7a484a84a1dc6b12b8d8f150",
  "placement": 69,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "55027c5b7a484a84a1dc6b12b8d8f150",
  "placement": 72,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "55027c5b7a484a84a1dc6b12b8d8f150",
  "placement": 45,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "55027c5b7a484a84a1dc6b12b8d8f150",
  "placement": 27,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "55027c5b7a484a84a1dc6b12b8d8f150",
  "placement": 54,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 93,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 20,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 53,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 56,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 73,
  "time_alive": 758,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 66,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 30,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 43,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 78,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 88,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 92,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 90,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 90,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 97,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 73,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 29,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 81,
  "time_alive": 366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 45,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 67,
  "time_alive": 981,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 83,
  "time_alive": 795,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 91,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 43,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 39,
  "time_alive": 1323,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 63,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db",
  "placement": 82,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db",
  "placement": 74,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db",
  "placement": 58,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db",
  "placement": 17,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db",
  "placement": 76,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db",
  "placement": 58,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 87,
  "time_alive": 492,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 51,
  "time_alive": 1194,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 57,
  "time_alive": 1137,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 79,
  "time_alive": 523,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 96,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 84,
  "time_alive": 261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 39,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 82,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 46,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 30,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 86,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "41e13bcf1b364176b4e9eb617a6188cb",
  "placement": 76,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "41e13bcf1b364176b4e9eb617a6188cb",
  "placement": 93,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "41e13bcf1b364176b4e9eb617a6188cb",
  "placement": 85,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "41e13bcf1b364176b4e9eb617a6188cb",
  "placement": 23,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "41e13bcf1b364176b4e9eb617a6188cb",
  "placement": 46,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "5be623500f434f209eaed579ea1cf018",
  "placement": 56,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "5be623500f434f209eaed579ea1cf018",
  "placement": 39,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "5be623500f434f209eaed579ea1cf018",
  "placement": 64,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "5be623500f434f209eaed579ea1cf018",
  "placement": 64,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "5be623500f434f209eaed579ea1cf018",
  "placement": 64,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "5be623500f434f209eaed579ea1cf018",
  "placement": 36,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "c49d0806577444ff92723ff4c03e80b0",
  "placement": 74,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "c49d0806577444ff92723ff4c03e80b0",
  "placement": 100,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "c49d0806577444ff92723ff4c03e80b0",
  "placement": 28,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "c49d0806577444ff92723ff4c03e80b0",
  "placement": 57,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "c49d0806577444ff92723ff4c03e80b0",
  "placement": 79,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 71,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 29,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 82,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 78,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "df110a82aab842b9881d15efce8a5f01",
  "placement": 90,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "3ee6af0087c843cd9d7022804559bcdf",
  "placement": 66,
  "time_alive": 1003,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "3ee6af0087c843cd9d7022804559bcdf",
  "placement": 31,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "3ee6af0087c843cd9d7022804559bcdf",
  "placement": 90,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "3ee6af0087c843cd9d7022804559bcdf",
  "placement": 93,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "3ee6af0087c843cd9d7022804559bcdf",
  "placement": 87,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 42,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 99,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 84,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 42,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 68,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 92,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 61,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 86,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 40,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 93,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 81,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 75,
  "time_alive": 807,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 85,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 92,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 65,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 77,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 80,
  "time_alive": 392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 46,
  "time_alive": 1293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 91,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 96,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 84,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 83,
  "time_alive": 318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "f269c9185ae64866857247eb14abfc80",
  "placement": 79,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 69,
  "time_alive": 912,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 46,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 75,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 91,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 82,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 51,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 60,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 60,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 83,
  "time_alive": 583,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 70,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 79,
  "time_alive": 676,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "9a02890e6c524f24989a58b8ea1303d0",
  "placement": 63,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "9a02890e6c524f24989a58b8ea1303d0",
  "placement": 54,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "9a02890e6c524f24989a58b8ea1303d0",
  "placement": 63,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "9a02890e6c524f24989a58b8ea1303d0",
  "placement": 89,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "9a02890e6c524f24989a58b8ea1303d0",
  "placement": 72,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "9a02890e6c524f24989a58b8ea1303d0",
  "placement": 73,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 81,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 57,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "2aef873885f1461ca0d58b0ca1159750",
  "placement": 99,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "2aef873885f1461ca0d58b0ca1159750",
  "placement": 76,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "2aef873885f1461ca0d58b0ca1159750",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "2aef873885f1461ca0d58b0ca1159750",
  "placement": 70,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "2aef873885f1461ca0d58b0ca1159750",
  "placement": 60,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "2aef873885f1461ca0d58b0ca1159750",
  "placement": 86,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "e3796a7a0b5e4b9c9c0028ea1da2da0f",
  "placement": 85,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "e3796a7a0b5e4b9c9c0028ea1da2da0f",
  "placement": 81,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "e3796a7a0b5e4b9c9c0028ea1da2da0f",
  "placement": 74,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "e3796a7a0b5e4b9c9c0028ea1da2da0f",
  "placement": 92,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "e3796a7a0b5e4b9c9c0028ea1da2da0f",
  "placement": 91,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "e3796a7a0b5e4b9c9c0028ea1da2da0f",
  "placement": 70,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "12333686d63e4edf8b5f024088e8e7e1",
  "placement": 79,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "12333686d63e4edf8b5f024088e8e7e1",
  "placement": 56,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "12333686d63e4edf8b5f024088e8e7e1",
  "placement": 87,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "12333686d63e4edf8b5f024088e8e7e1",
  "placement": 95,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "12333686d63e4edf8b5f024088e8e7e1",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "12333686d63e4edf8b5f024088e8e7e1",
  "placement": 88,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 46,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 86,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 39,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 1,
  "time_alive": 1523,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 2,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 5,
  "time_alive": 1478,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 51,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 8,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 7,
  "time_alive": 1449,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 63,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 16,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 2,
  "time_alive": 1513,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 38,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 27,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 13,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 6,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 7,
  "time_alive": 1474,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 7,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 16,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 4,
  "time_alive": 1526,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 5,
  "time_alive": 1479,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 36,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 69,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 12,
  "time_alive": 1436,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 29,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 9,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 14,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 9,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 21,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 21,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 8,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 3,
  "time_alive": 1531,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 50,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 85,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 3,
  "time_alive": 1511,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 49,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 1,
  "time_alive": 1537,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 46,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 29,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 20,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 48,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 42,
  "time_alive": 1318,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 12,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 36,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 22,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 41,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 47,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 10,
  "time_alive": 1440,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 9,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 12,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 27,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 61,
  "time_alive": 1061,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 65,
  "time_alive": 996,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "4709394767d041bcaaaef58d79a29d94",
  "placement": 17,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 18,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 2,
  "time_alive": 1548,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 74,
  "time_alive": 839,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 68,
  "time_alive": 906,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 18,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 85,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 6,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 57,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 8,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 93,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 26,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 9,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 5,
  "time_alive": 1502,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 97,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 1,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 10,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 82,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 98,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 25,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 19,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 16,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 62,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 11,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 20,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 70,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 14,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 10,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 39,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 8,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 37,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 4,
  "time_alive": 1517,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 83,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 77,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 17,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 4,
  "time_alive": 1510,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 13,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 47,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 15,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 45,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 13,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 6,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 34,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 37,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 63,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 66,
  "time_alive": 950,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 77,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 1,
  "time_alive": 1523,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 40,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 27,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 69,
  "time_alive": 1007,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 51,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 54,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 25,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 1,
  "time_alive": 1513,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 13,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 26,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 54,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 30,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 50,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 23,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 5,
  "time_alive": 1510,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 55,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 35,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 63,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 14,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 2,
  "time_alive": 1537,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 32,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 68,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 15,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 38,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 59,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 83,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 51,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 3,
  "time_alive": 1512,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 5,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 24,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 31,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 60,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 71,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 18,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 11,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 12,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 8,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 59,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 1,
  "time_alive": 1548,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 46,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 3,
  "time_alive": 1509,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 80,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 30,
  "time_alive": 1353,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 77,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 94,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 82,
  "time_alive": 740,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 5,
  "time_alive": 1491,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 26,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 40,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 6,
  "time_alive": 1507,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 76,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 26,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 57,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 87,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 37,
  "time_alive": 1346,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 26,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 8,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 30,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 75,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 62,
  "time_alive": 1135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 6,
  "time_alive": 1455,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 74,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 19,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 32,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 43,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 98,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 11,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 4,
  "time_alive": 1484,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 35,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "1cea31aae8e840798764ae1812fc09c9",
  "placement": 57,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 3,
  "time_alive": 1527,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 47,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 9,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 33,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 89,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 77,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 42,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 59,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 17,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 2,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 84,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 29,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 31,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 18,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 56,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 19,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 27,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "3af002bad33c41ec9c14a24cedf1aa8e",
  "placement": 47,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 24,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 21,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 21,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 45,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 54,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 18,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 49,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 65,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 41,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 70,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 29,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 14,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 80,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 36,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 46,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 13,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 74,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 23,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 34,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 44,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 46,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 61,
  "time_alive": 1001,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 56,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 11,
  "time_alive": 1487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 25,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 16,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 67,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 41,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 28,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 48,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 92,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 28,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 9,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "27492772ffce4586b68833131ca6deea",
  "placement": 25,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "12c802fcd0de407f8b13877f4632b10a",
  "placement": 77,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "12c802fcd0de407f8b13877f4632b10a",
  "placement": 10,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "12c802fcd0de407f8b13877f4632b10a",
  "placement": 15,
  "time_alive": 1391,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "12c802fcd0de407f8b13877f4632b10a",
  "placement": 52,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "12c802fcd0de407f8b13877f4632b10a",
  "placement": 52,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "12c802fcd0de407f8b13877f4632b10a",
  "placement": 75,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 90,
  "time_alive": 569,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 28,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 57,
  "time_alive": 1073,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 67,
  "time_alive": 918,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 20,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 19,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a",
  "placement": 63,
  "time_alive": 1081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a",
  "placement": 31,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a",
  "placement": 19,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a",
  "placement": 27,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a",
  "placement": 66,
  "time_alive": 994,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a",
  "placement": 22,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "c62ff5f58a094519a52f2a80988613cb",
  "placement": 17,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "c62ff5f58a094519a52f2a80988613cb",
  "placement": 40,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "c62ff5f58a094519a52f2a80988613cb",
  "placement": 24,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "c62ff5f58a094519a52f2a80988613cb",
  "placement": 50,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "c62ff5f58a094519a52f2a80988613cb",
  "placement": 73,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "c62ff5f58a094519a52f2a80988613cb",
  "placement": 35,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 86,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 44,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 69,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 14,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 10,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 50,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 64,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 2,
  "time_alive": 1527,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 55,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 28,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 94,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "94fa99b737c6452ebce597a35306decd",
  "placement": 35,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "94fa99b737c6452ebce597a35306decd",
  "placement": 25,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "94fa99b737c6452ebce597a35306decd",
  "placement": 42,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "94fa99b737c6452ebce597a35306decd",
  "placement": 38,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "94fa99b737c6452ebce597a35306decd",
  "placement": 17,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "94fa99b737c6452ebce597a35306decd",
  "placement": 56,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "9c8cb45c3e2d4f808b6f3c618574f6ea",
  "placement": 19,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "9c8cb45c3e2d4f808b6f3c618574f6ea",
  "placement": 17,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "9c8cb45c3e2d4f808b6f3c618574f6ea",
  "placement": 44,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "9c8cb45c3e2d4f808b6f3c618574f6ea",
  "placement": 49,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "9c8cb45c3e2d4f808b6f3c618574f6ea",
  "placement": 31,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "9c8cb45c3e2d4f808b6f3c618574f6ea",
  "placement": 58,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "8d1bd93da8af419c915f4ddb89fac6f1",
  "placement": 11,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "8d1bd93da8af419c915f4ddb89fac6f1",
  "placement": 35,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "8d1bd93da8af419c915f4ddb89fac6f1",
  "placement": 38,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "8d1bd93da8af419c915f4ddb89fac6f1",
  "placement": 37,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "8d1bd93da8af419c915f4ddb89fac6f1",
  "placement": 79,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "8d1bd93da8af419c915f4ddb89fac6f1",
  "placement": 68,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 32,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 7,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 71,
  "time_alive": 870,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 53,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 23,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 55,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 64,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 76,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 86,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 12,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 71,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 6,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "35309f9d257248b0a5e938b61bc5a092",
  "placement": 65,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "35309f9d257248b0a5e938b61bc5a092",
  "placement": 87,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "35309f9d257248b0a5e938b61bc5a092",
  "placement": 23,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "35309f9d257248b0a5e938b61bc5a092",
  "placement": 25,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "35309f9d257248b0a5e938b61bc5a092",
  "placement": 97,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "35309f9d257248b0a5e938b61bc5a092",
  "placement": 15,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 22,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 45,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 33,
  "time_alive": 1333,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 57,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 59,
  "time_alive": 1070,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 89,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 10,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 85,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 72,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 80,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 87,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 27,
  "time_alive": 1383,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 20,
  "time_alive": 1421,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 84,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 35,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 75,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 22,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 76,
  "time_alive": 726,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 80,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 22,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 65,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 34,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 40,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "82fba9345b2c400b9c30d2c443038dd7",
  "placement": 11,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 85,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 79,
  "time_alive": 820,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 4,
  "time_alive": 1486,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 97,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 44,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 52,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 36,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 89,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 21,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 43,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 36,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e5f75addf52e437fafb87ea92123f74b",
  "placement": 55,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e5f75addf52e437fafb87ea92123f74b",
  "placement": 50,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e5f75addf52e437fafb87ea92123f74b",
  "placement": 31,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e5f75addf52e437fafb87ea92123f74b",
  "placement": 81,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e5f75addf52e437fafb87ea92123f74b",
  "placement": 14,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e5f75addf52e437fafb87ea92123f74b",
  "placement": 53,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 34,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 20,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 59,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 32,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 58,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 43,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 99,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 90,
  "time_alive": 443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 58,
  "time_alive": 1069,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 98,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 81,
  "time_alive": 728,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 4,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e798e0ab89f1420092c906c7137df927",
  "placement": 68,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e798e0ab89f1420092c906c7137df927",
  "placement": 72,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e798e0ab89f1420092c906c7137df927",
  "placement": 12,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e798e0ab89f1420092c906c7137df927",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e798e0ab89f1420092c906c7137df927",
  "placement": 77,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e798e0ab89f1420092c906c7137df927",
  "placement": 44,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 84,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 92,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 52,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 40,
  "time_alive": 1318,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 32,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 60,
  "time_alive": 1021,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 52,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 24,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 78,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 23,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 83,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 38,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 67,
  "time_alive": 942,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 56,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 85,
  "time_alive": 541,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 24,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 64,
  "time_alive": 997,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 48,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 7,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 100,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 91,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 51,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 91,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 95,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 15,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 73,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 89,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 56,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 86,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 64,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 93,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 38,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 28,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 90,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 36,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "71505451c7e64154bf47dca9661d0ebb",
  "placement": 54,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 23,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 68,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 30,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 65,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 98,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 91,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 78,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 13,
  "time_alive": 1468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 43,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 72,
  "time_alive": 870,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 42,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 83,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "a771a185d27f4c789ecc2acfbb4516ce",
  "placement": 45,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "a771a185d27f4c789ecc2acfbb4516ce",
  "placement": 49,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "a771a185d27f4c789ecc2acfbb4516ce",
  "placement": 97,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "a771a185d27f4c789ecc2acfbb4516ce",
  "placement": 22,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "a771a185d27f4c789ecc2acfbb4516ce",
  "placement": 37,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "a771a185d27f4c789ecc2acfbb4516ce",
  "placement": 67,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 41,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 34,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 81,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 79,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 49,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 62,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 62,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 93,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 70,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 64,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 15,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 88,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "0f21d4ab815949dba6778e4880bef95a",
  "placement": 72,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "0f21d4ab815949dba6778e4880bef95a",
  "placement": 61,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "0f21d4ab815949dba6778e4880bef95a",
  "placement": 79,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "0f21d4ab815949dba6778e4880bef95a",
  "placement": 7,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "0f21d4ab815949dba6778e4880bef95a",
  "placement": 92,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "0f21d4ab815949dba6778e4880bef95a",
  "placement": 70,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 44,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 43,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 49,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 59,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 55,
  "time_alive": 1098,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 90,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "dd24b11a1ab34fe2b076457fa615bde9",
  "placement": 73,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "dd24b11a1ab34fe2b076457fa615bde9",
  "placement": 29,
  "time_alive": 1385,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "dd24b11a1ab34fe2b076457fa615bde9",
  "placement": 80,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "dd24b11a1ab34fe2b076457fa615bde9",
  "placement": 66,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "dd24b11a1ab34fe2b076457fa615bde9",
  "placement": 61,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "dd24b11a1ab34fe2b076457fa615bde9",
  "placement": 69,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "3d3a5a15d588450d9f4cc4855836925e",
  "placement": 53,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "3d3a5a15d588450d9f4cc4855836925e",
  "placement": 30,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "3d3a5a15d588450d9f4cc4855836925e",
  "placement": 60,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "3d3a5a15d588450d9f4cc4855836925e",
  "placement": 91,
  "time_alive": 442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "3d3a5a15d588450d9f4cc4855836925e",
  "placement": 78,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "3d3a5a15d588450d9f4cc4855836925e",
  "placement": 33,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 21,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 52,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 62,
  "time_alive": 997,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 73,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 45,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 94,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 16,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 47,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 86,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 39,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 82,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "63695c4c9c1746a9add9dbcd8103c803",
  "placement": 91,
  "time_alive": 544,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "63695c4c9c1746a9add9dbcd8103c803",
  "placement": 53,
  "time_alive": 1207,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "63695c4c9c1746a9add9dbcd8103c803",
  "placement": 40,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "63695c4c9c1746a9add9dbcd8103c803",
  "placement": 60,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "63695c4c9c1746a9add9dbcd8103c803",
  "placement": 96,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "63695c4c9c1746a9add9dbcd8103c803",
  "placement": 84,
  "time_alive": 395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "7767bf985680476faf1598006b2825ea",
  "placement": 95,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "7767bf985680476faf1598006b2825ea",
  "placement": 75,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b305dad-4a04-471d-9d69-62de232e7334",
  "team_id": "7767bf985680476faf1598006b2825ea",
  "placement": 88,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f",
  "team_id": "7767bf985680476faf1598006b2825ea",
  "placement": 42,
  "time_alive": 1304,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17d6ef46-0214-4349-8bec-462753d07df9",
  "team_id": "7767bf985680476faf1598006b2825ea",
  "placement": 34,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "101d724d-67c9-4ca8-8c02-03951bc2e0c4",
  "team_id": "7767bf985680476faf1598006b2825ea",
  "placement": 66,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 88,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "078d0966-a682-4de9-a38a-84a76b1f0947",
  "team_id": "d5dfd680052c4bcca6cc45fc0c1fd29a",
  "placement": 39,
  "time_alive": 1336,
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
    