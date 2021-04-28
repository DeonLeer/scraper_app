const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 52,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 13,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 1,
  "time_alive": 1534,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 62,
  "time_alive": 1014,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 31,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 69,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 40,
  "time_alive": 1345,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 43,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 41,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 8,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 30,
  "time_alive": 1335,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 17,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 17,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 3,
  "time_alive": 1483,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 58,
  "time_alive": 1150,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 7,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 4,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 95,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 50,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 45,
  "time_alive": 1234,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 86,
  "time_alive": 733,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 6,
  "time_alive": 1431,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 3,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 35,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 98,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 40,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 52,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 31,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 37,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 12,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 3,
  "time_alive": 1518,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 2,
  "time_alive": 1504,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 67,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 18,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 36,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 39,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 37,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 23,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 23,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 14,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 79,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 9,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 33,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 28,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 24,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 4,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 18,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 70,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 14,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 30,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 27,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 3,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 23,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 96,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 73,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 66,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 14,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 2,
  "time_alive": 1509,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 38,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 74,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "c5ecd40641b6459097e363e810769448",
  "placement": 74,
  "time_alive": 642,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 59,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 20,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 29,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 45,
  "time_alive": 1209,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 8,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 25,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 1,
  "time_alive": 1504,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 57,
  "time_alive": 1153,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 20,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 91,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 73,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 70,
  "time_alive": 735,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 39,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 4,
  "time_alive": 1522,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 61,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 86,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 13,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 35,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 22,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 68,
  "time_alive": 977,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 44,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 15,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 16,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "9787496d9fe64f46a5107753919068d4",
  "placement": 27,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 56,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 37,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 47,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 1,
  "time_alive": 1510,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 30,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 83,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 60,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 65,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 49,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 26,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 47,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 2,
  "time_alive": 1518,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 8,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 62,
  "time_alive": 1095,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 75,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 74,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 26,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 13,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 21,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 29,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 11,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 20,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 86,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 80,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 16,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 95,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 62,
  "time_alive": 986,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 4,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 8,
  "time_alive": 1484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 63,
  "time_alive": 1047,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 39,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 23,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 47,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 25,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 24,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 6,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 94,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 68,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 5,
  "time_alive": 1458,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 42,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "f4162fca83b54f598bd62524518df701",
  "placement": 65,
  "time_alive": 928,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 44,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 84,
  "time_alive": 766,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 15,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 21,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 21,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 32,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 83,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 25,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 51,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 19,
  "time_alive": 1380,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 67,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 5,
  "time_alive": 1509,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 5,
  "time_alive": 1465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 17,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 30,
  "time_alive": 1345,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 95,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 40,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 97,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 42,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 11,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 10,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 25,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 56,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 53,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 65,
  "time_alive": 987,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 26,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 33,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 33,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 28,
  "time_alive": 1373,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 43,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 38,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 89,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 26,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 51,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 6,
  "time_alive": 1470,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 51,
  "time_alive": 1211,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 47,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 19,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 34,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 49,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 15,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 47,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 53,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 18,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 24,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 63,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 10,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 49,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 87,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 28,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 55,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 2,
  "time_alive": 1510,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 66,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 34,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 17,
  "time_alive": 1418,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 45,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 73,
  "time_alive": 857,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 69,
  "time_alive": 883,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 31,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 77,
  "time_alive": 576,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 31,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 42,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 41,
  "time_alive": 1290,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 60,
  "time_alive": 999,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 11,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 75,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 15,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 7,
  "time_alive": 1495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 50,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 94,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 89,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 48,
  "time_alive": 1256,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 67,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 55,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 9,
  "time_alive": 1405,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 29,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 59,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 54,
  "time_alive": 1119,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 12,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 56,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 88,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 9,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 86,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 30,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 88,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 82,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 21,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 76,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 37,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 4,
  "time_alive": 1513,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 19,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 87,
  "time_alive": 697,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 93,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 93,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 14,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 9,
  "time_alive": 1468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 75,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 77,
  "time_alive": 860,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 99,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 59,
  "time_alive": 1004,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 60,
  "time_alive": 1016,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 23,
  "time_alive": 1402,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 96,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 22,
  "time_alive": 1394,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 89,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 66,
  "time_alive": 911,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 57,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 19,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 51,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 71,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 28,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 16,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 53,
  "time_alive": 1180,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 36,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 58,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 13,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 82,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 70,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 18,
  "time_alive": 1428,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 62,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 34,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 32,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 77,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 7,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 49,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 66,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 94,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 8,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 16,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 48,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 43,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 69,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 50,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 6,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 57,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 35,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 61,
  "time_alive": 1013,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 91,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 49,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 31,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 70,
  "time_alive": 928,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 28,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 22,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 58,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 18,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 46,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 36,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 88,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 19,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 60,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 79,
  "time_alive": 816,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 49,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 78,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 82,
  "time_alive": 621,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 36,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 12,
  "time_alive": 1462,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 46,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 98,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 12,
  "time_alive": 1401,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 90,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 45,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 56,
  "time_alive": 1095,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 61,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 36,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 22,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 34,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 84,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 29,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 47,
  "time_alive": 1254,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 58,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 92,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 72,
  "time_alive": 636,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 39,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 91,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 59,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 92,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 14,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 54,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 21,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 99,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 37,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 12,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 33,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 89,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 70,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 59,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 10,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 63,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 42,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 74,
  "time_alive": 885,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 50,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 80,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 65,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 23,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 22,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 55,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 63,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 39,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 50,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 71,
  "time_alive": 676,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 11,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 81,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 38,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 35,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 46,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 87,
  "time_alive": 293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 57,
  "time_alive": 1094,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 35,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 51,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 42,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 64,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 50,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 29,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 10,
  "time_alive": 1450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 91,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 66,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 24,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 48,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 79,
  "time_alive": 549,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 32,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 40,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 91,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 97,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 44,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 59,
  "time_alive": 1084,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 25,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 54,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 69,
  "time_alive": 970,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 75,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 64,
  "time_alive": 930,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 100,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 85,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 93,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 48,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 40,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 92,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 20,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 95,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 83,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 5,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 41,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 58,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 87,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 24,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 53,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 79,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 44,
  "time_alive": 1216,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 75,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 67,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 90,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 80,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 98,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 98,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 20,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 16,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 33,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 97,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 63,
  "time_alive": 1014,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 84,
  "time_alive": 571,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 85,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 26,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 72,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 88,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 94,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 71,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 24,
  "time_alive": 1384,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 41,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 64,
  "time_alive": 1072,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 32,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 42,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 32,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 88,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 73,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 15,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 64,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 67,
  "time_alive": 909,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 84,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 92,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 36,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 92,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 27,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 55,
  "time_alive": 1061,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 90,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 61,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 20,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 48,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 56,
  "time_alive": 1128,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 73,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 52,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 85,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 99,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 33,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 45,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 53,
  "time_alive": 1084,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 83,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 68,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 48,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 76,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 19,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 77,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 94,
  "time_alive": 181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 94,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 37,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 81,
  "time_alive": 792,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 100,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 54,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 79,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 38,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 54,
  "time_alive": 1163,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 43,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 52,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 83,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 65,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 31,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 71,
  "time_alive": 904,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 60,
  "time_alive": 1069,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 43,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 77,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 90,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 76,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 44,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 86,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 22,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 82,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 96,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 97,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 30,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 40,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 58,
  "time_alive": 1013,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 80,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 93,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 92,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 90,
  "time_alive": 527,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 74,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 85,
  "time_alive": 566,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 55,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 81,
  "time_alive": 471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 27,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 66,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 85,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 89,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 91,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 76,
  "time_alive": 577,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 98,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 78,
  "time_alive": 853,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 83,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 39,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 97,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 45,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 62,
  "time_alive": 1095,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 35,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 72,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 80,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 88,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 71,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 26,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 72,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 53,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 61,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 93,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 72,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 78,
  "time_alive": 830,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 79,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 67,
  "time_alive": 990,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 52,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 78,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 95,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 84,
  "time_alive": 662,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 95,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 96,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 100,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 98,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 46,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 77,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 61,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 84,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 78,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 62,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 55,
  "time_alive": 1108,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 86,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 69,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 87,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 72,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 34,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "524600c46245451e87064d7a25ee3ed7",
  "placement": 78,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 69,
  "time_alive": 913,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 96,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 81,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 87,
  "time_alive": 453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 76,
  "time_alive": 513,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 99,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 68,
  "time_alive": 921,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 60,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 76,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 99,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 89,
  "time_alive": 309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 70,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 74,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 65,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 68,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 81,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 80,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 82,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 75,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 90,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 81,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 100,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 64,
  "time_alive": 931,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c8ef88-b70b-4634-a8e2-70baeb289eb7",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 93,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c20baf-7548-42bf-9d5c-a786168e4c54",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 85,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04883c25-da1b-4fa2-848f-d0bfdd8a6fad",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 97,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 96,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b33697-4f67-4163-8a45-69cb7b94fbd0",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 41,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e374c9-2fee-4090-b11c-5b0d2b5cbbee",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 82,
  "time_alive": 440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 1,
  "time_alive": 1508,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 5,
  "time_alive": 1462,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 4,
  "time_alive": 1490,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 7,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 5,
  "time_alive": 1480,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 27,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 2,
  "time_alive": 1514,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 3,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 35,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 4,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 2,
  "time_alive": 1507,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 11,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 28,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 9,
  "time_alive": 1463,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 29,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 44,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 6,
  "time_alive": 1469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 10,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 10,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 13,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 10,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 64,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 6,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 4,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 34,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1479,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 15,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 10,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 7,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 31,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 89,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 14,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 75,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 31,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 46,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 3,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 20,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 5,
  "time_alive": 1486,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 85,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 2,
  "time_alive": 1519,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 43,
  "time_alive": 1234,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 20,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 9,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 56,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 3,
  "time_alive": 1514,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 80,
  "time_alive": 679,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 1,
  "time_alive": 1514,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 11,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 20,
  "time_alive": 1389,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 13,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 11,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 9,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 29,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 65,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 3,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 85,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 23,
  "time_alive": 1377,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 17,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 64,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 28,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 18,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 13,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 35,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 22,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 11,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 38,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 21,
  "time_alive": 1402,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 78,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 15,
  "time_alive": 1409,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 26,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 9,
  "time_alive": 1408,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 77,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 33,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 24,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 42,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 4,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 38,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 24,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 7,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 15,
  "time_alive": 1412,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 43,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 33,
  "time_alive": 1354,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 53,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 26,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 1,
  "time_alive": 1539,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 42,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 45,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 39,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 44,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 13,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 2,
  "time_alive": 1506,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 24,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 4,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 49,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 48,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 68,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 36,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 85,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 5,
  "time_alive": 1448,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 84,
  "time_alive": 623,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 87,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 10,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 1,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 89,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 9,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 5,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 1,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 79,
  "time_alive": 829,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 59,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 58,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 32,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 3,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 18,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 43,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 49,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 2,
  "time_alive": 1524,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 41,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 50,
  "time_alive": 1216,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 47,
  "time_alive": 1246,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 72,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 2,
  "time_alive": 1479,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 95,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 23,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 16,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 28,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 22,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 30,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 99,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 8,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 74,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 21,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 11,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 42,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 5,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 20,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 27,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 12,
  "time_alive": 1425,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 70,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 65,
  "time_alive": 995,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 27,
  "time_alive": 1368,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 35,
  "time_alive": 1336,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 88,
  "time_alive": 424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 61,
  "time_alive": 991,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 4,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 58,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 7,
  "time_alive": 1452,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 92,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 1,
  "time_alive": 1524,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 63,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 67,
  "time_alive": 984,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 56,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 53,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 30,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 35,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 63,
  "time_alive": 1053,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 9,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 11,
  "time_alive": 1445,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 17,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 65,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 29,
  "time_alive": 1340,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 25,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 48,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 25,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 6,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 46,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 43,
  "time_alive": 1294,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 41,
  "time_alive": 1310,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 40,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 32,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 65,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 34,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 13,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 21,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 92,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 9,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 10,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 22,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 66,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 29,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 66,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 16,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 51,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 5,
  "time_alive": 1480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 16,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 67,
  "time_alive": 992,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 1,
  "time_alive": 1507,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 17,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 62,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 66,
  "time_alive": 975,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 39,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 46,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 7,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 34,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 28,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 47,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 71,
  "time_alive": 883,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 55,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 4,
  "time_alive": 1463,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 87,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 61,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 37,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 17,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 71,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 8,
  "time_alive": 1442,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 3,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 73,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 35,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 36,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 96,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 22,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 89,
  "time_alive": 689,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 42,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 23,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 21,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 6,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 83,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 16,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 50,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 68,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 14,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 2,
  "time_alive": 1539,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 18,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 68,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 13,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 76,
  "time_alive": 801,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 100,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 99,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 4,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 10,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 95,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 25,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 46,
  "time_alive": 1225,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 95,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 91,
  "time_alive": 330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 22,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 17,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 36,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 45,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 23,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 42,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 27,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 8,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 18,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 40,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 92,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 93,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 97,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 76,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 70,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 82,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 27,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 39,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 74,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 8,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 16,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 2,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 54,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 38,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 72,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 45,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 47,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 15,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 79,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 55,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 75,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 26,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 50,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 48,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 19,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 34,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 8,
  "time_alive": 1443,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 58,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 91,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 45,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 51,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 90,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 8,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 13,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 18,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 41,
  "time_alive": 1299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 64,
  "time_alive": 1051,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 12,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 69,
  "time_alive": 928,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 63,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 37,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 31,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 24,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 26,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 92,
  "time_alive": 443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 24,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 38,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 67,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 12,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 70,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 39,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 14,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 42,
  "time_alive": 1306,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 49,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 81,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 55,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 67,
  "time_alive": 970,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 11,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 49,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 25,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 14,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 44,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 44,
  "time_alive": 1320,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 30,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 78,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 46,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 40,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 18,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 11,
  "time_alive": 1426,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 78,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 84,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 76,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 24,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 68,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 66,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 79,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 68,
  "time_alive": 990,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 6,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 62,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 74,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 6,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 36,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 63,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 8,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 21,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 14,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 94,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 98,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 75,
  "time_alive": 752,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 98,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 69,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 19,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 31,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 39,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 32,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 69,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 28,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 69,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 64,
  "time_alive": 1047,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 29,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 56,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 91,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 87,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 30,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 12,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 38,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 57,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 94,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 76,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 98,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 22,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 68,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 20,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 21,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 52,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 87,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 98,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 41,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 56,
  "time_alive": 1124,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 15,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 98,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 33,
  "time_alive": 1357,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 94,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 15,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 40,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 45,
  "time_alive": 1320,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 52,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 50,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 96,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 28,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 12,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 73,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 87,
  "time_alive": 483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 32,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 43,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 20,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 59,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 74,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 85,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 56,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 53,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 96,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 96,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 57,
  "time_alive": 1101,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 27,
  "time_alive": 1349,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 15,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 60,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 41,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 23,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 15,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 25,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 72,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 97,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 67,
  "time_alive": 722,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 93,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 33,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 37,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 59,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 49,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 39,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 48,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "516323d244394670836c3fbb76cf5148",
  "placement": 17,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 77,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 7,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 60,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 60,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 21,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 33,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 64,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 53,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 47,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 6,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 39,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 79,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 82,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 83,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 38,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 42,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 88,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 28,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 3,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 90,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 83,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 90,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 81,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 80,
  "time_alive": 440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 59,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 88,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 99,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 66,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 33,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 56,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 26,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 12,
  "time_alive": 1435,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 50,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 83,
  "time_alive": 657,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 32,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 83,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 60,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 22,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 79,
  "time_alive": 567,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 19,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 63,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 47,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 36,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 42,
  "time_alive": 1321,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 92,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 17,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 74,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 27,
  "time_alive": 1367,
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
    