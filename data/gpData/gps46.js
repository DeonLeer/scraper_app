const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 64,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 23,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 37,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 79,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 15,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 71,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 79,
  "time_alive": 789,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 61,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 18,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 38,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 31,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "b85027b02a7b46edb5086c3eb12cbf1a",
  "placement": 43,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "b85027b02a7b46edb5086c3eb12cbf1a",
  "placement": 76,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "b85027b02a7b46edb5086c3eb12cbf1a",
  "placement": 7,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "b85027b02a7b46edb5086c3eb12cbf1a",
  "placement": 81,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "b85027b02a7b46edb5086c3eb12cbf1a",
  "placement": 30,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "b85027b02a7b46edb5086c3eb12cbf1a",
  "placement": 48,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 93,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 58,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 62,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 30,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 20,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df",
  "placement": 30,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 40,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 25,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 22,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 94,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 61,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 14,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 87,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 17,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 80,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 57,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 51,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 64,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 35,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 12,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "8b5fec933cd7444fb90295f36419bd33",
  "placement": 81,
  "time_alive": 206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 72,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 41,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 92,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 28,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 57,
  "time_alive": 1161,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 33,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 79,
  "time_alive": 715,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 21,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 72,
  "time_alive": 642,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 79,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 58,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 32,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf",
  "placement": 13,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf",
  "placement": 97,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf",
  "placement": 83,
  "time_alive": 414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf",
  "placement": 76,
  "time_alive": 720,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf",
  "placement": 46,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf",
  "placement": 86,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "6eec10ed0e0e46aabc666b420378ebab",
  "placement": 76,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "6eec10ed0e0e46aabc666b420378ebab",
  "placement": 29,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "6eec10ed0e0e46aabc666b420378ebab",
  "placement": 21,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "6eec10ed0e0e46aabc666b420378ebab",
  "placement": 47,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "6eec10ed0e0e46aabc666b420378ebab",
  "placement": 91,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "6eec10ed0e0e46aabc666b420378ebab",
  "placement": 76,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "0ab5a1bb674144d68ca4df8e44328146",
  "placement": 90,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "0ab5a1bb674144d68ca4df8e44328146",
  "placement": 88,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "0ab5a1bb674144d68ca4df8e44328146",
  "placement": 16,
  "time_alive": 1377,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "0ab5a1bb674144d68ca4df8e44328146",
  "placement": 51,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "0ab5a1bb674144d68ca4df8e44328146",
  "placement": 49,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "0ab5a1bb674144d68ca4df8e44328146",
  "placement": 49,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 92,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 60,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 63,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 45,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 15,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 84,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 9,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 62,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 81,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 77,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 62,
  "time_alive": 972,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 73,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 84,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 24,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 54,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 93,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 59,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 29,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "30ebd43f88554bce9b5808d2bf013256",
  "placement": 81,
  "time_alive": 711,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "30ebd43f88554bce9b5808d2bf013256",
  "placement": 92,
  "time_alive": 228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "30ebd43f88554bce9b5808d2bf013256",
  "placement": 25,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "30ebd43f88554bce9b5808d2bf013256",
  "placement": 63,
  "time_alive": 967,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "30ebd43f88554bce9b5808d2bf013256",
  "placement": 83,
  "time_alive": 357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "30ebd43f88554bce9b5808d2bf013256",
  "placement": 53,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 89,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 85,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 26,
  "time_alive": 1357,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 58,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 68,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 88,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 81,
  "time_alive": 757,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 74,
  "time_alive": 593,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 42,
  "time_alive": 1303,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 63,
  "time_alive": 970,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 89,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 85,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 53,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 29,
  "time_alive": 1342,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 80,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 71,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 91,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "1c70e335da0c4c0d8e875f8eda9d0335",
  "placement": 37,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "1c70e335da0c4c0d8e875f8eda9d0335",
  "placement": 33,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "1c70e335da0c4c0d8e875f8eda9d0335",
  "placement": 51,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "1c70e335da0c4c0d8e875f8eda9d0335",
  "placement": 66,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "1c70e335da0c4c0d8e875f8eda9d0335",
  "placement": 81,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 50,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 96,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 20,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 73,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 51,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 65,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 67,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 87,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 90,
  "time_alive": 318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 70,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 24,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 90,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 53,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 82,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 29,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 88,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "b7cc38d8f28f4600a085629349e78830",
  "placement": 41,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "5f5eb409ed864fda859716259f18af71",
  "placement": 80,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "5f5eb409ed864fda859716259f18af71",
  "placement": 99,
  "time_alive": 80,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "5f5eb409ed864fda859716259f18af71",
  "placement": 86,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "5f5eb409ed864fda859716259f18af71",
  "placement": 41,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "5f5eb409ed864fda859716259f18af71",
  "placement": 50,
  "time_alive": 1205,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "5f5eb409ed864fda859716259f18af71",
  "placement": 55,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 55,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 36,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 40,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 83,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 64,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 51,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 27,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 88,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 50,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 76,
  "time_alive": 598,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 56,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 57,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 75,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 44,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 44,
  "time_alive": 1292,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 59,
  "time_alive": 1001,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "0cb2547c1e674f2a98f7adbbfa265f64",
  "placement": 69,
  "time_alive": 919,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "0cb2547c1e674f2a98f7adbbfa265f64",
  "placement": 40,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "0cb2547c1e674f2a98f7adbbfa265f64",
  "placement": 87,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "0cb2547c1e674f2a98f7adbbfa265f64",
  "placement": 68,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "0cb2547c1e674f2a98f7adbbfa265f64",
  "placement": 48,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "0cb2547c1e674f2a98f7adbbfa265f64",
  "placement": 64,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 33,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 67,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 80,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 96,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 93,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 92,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 91,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 66,
  "time_alive": 947,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 60,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 64,
  "time_alive": 934,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 87,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 66,
  "time_alive": 693,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 44,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 73,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 77,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 38,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 52,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "f6b9302087224fb1861e336019e9223b",
  "placement": 88,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 48,
  "time_alive": 1151,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 74,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 46,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 60,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 69,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 58,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "33d5fc61389e4d0aa2c5634865492790",
  "placement": 51,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "33d5fc61389e4d0aa2c5634865492790",
  "placement": 93,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "33d5fc61389e4d0aa2c5634865492790",
  "placement": 44,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "33d5fc61389e4d0aa2c5634865492790",
  "placement": 61,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "33d5fc61389e4d0aa2c5634865492790",
  "placement": 67,
  "time_alive": 868,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "33d5fc61389e4d0aa2c5634865492790",
  "placement": 70,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 39,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 52,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 57,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 57,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 86,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "cd6deffb0c334c40b40e33b36648e287",
  "placement": 74,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 42,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 68,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 66,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 84,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 66,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 38,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 87,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 55,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 36,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 53,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 82,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 72,
  "time_alive": 278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 63,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 95,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 52,
  "time_alive": 1177,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 65,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 80,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 43,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 77,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 44,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 65,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 82,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 66,
  "time_alive": 1022,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 64,
  "time_alive": 1043,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 95,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 69,
  "time_alive": 849,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "719b583bc5c74f8da02a28803256346c",
  "placement": 95,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "719b583bc5c74f8da02a28803256346c",
  "placement": 71,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "719b583bc5c74f8da02a28803256346c",
  "placement": 71,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "719b583bc5c74f8da02a28803256346c",
  "placement": 74,
  "time_alive": 732,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "719b583bc5c74f8da02a28803256346c",
  "placement": 72,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "719b583bc5c74f8da02a28803256346c",
  "placement": 61,
  "time_alive": 966,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 60,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 63,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 48,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 49,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 56,
  "time_alive": 1165,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 46,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 73,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 94,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 89,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 90,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 61,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 63,
  "time_alive": 848,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 96,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 65,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 73,
  "time_alive": 614,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 92,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 94,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 85,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 82,
  "time_alive": 630,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 83,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 94,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 89,
  "time_alive": 268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 85,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 79,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 68,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 50,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 79,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 78,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 84,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 69,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 61,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 70,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 91,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 88,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 54,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 82,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "750440283a2240ac8f85c86c795f9763",
  "placement": 58,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "750440283a2240ac8f85c86c795f9763",
  "placement": 89,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "750440283a2240ac8f85c86c795f9763",
  "placement": 96,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "750440283a2240ac8f85c86c795f9763",
  "placement": 95,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "750440283a2240ac8f85c86c795f9763",
  "placement": 92,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "750440283a2240ac8f85c86c795f9763",
  "placement": 56,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 91,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 70,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9",
  "placement": 7,
  "time_alive": 1771,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9",
  "placement": 10,
  "time_alive": 1740,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9",
  "placement": 11,
  "time_alive": 1732,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9",
  "placement": 14,
  "time_alive": 1636,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9",
  "placement": 1,
  "time_alive": 1968,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9",
  "placement": 3,
  "time_alive": 1885,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1751,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 6,
  "time_alive": 1797,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 5,
  "time_alive": 1825,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 2,
  "time_alive": 1844,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 15,
  "time_alive": 1706,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 19,
  "time_alive": 1675,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1817,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 9,
  "time_alive": 1744,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 7,
  "time_alive": 1777,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 28,
  "time_alive": 1473,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 9,
  "time_alive": 1815,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 7,
  "time_alive": 1788,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 41,
  "time_alive": 1044,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 2,
  "time_alive": 1840,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 1,
  "time_alive": 1883,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 11,
  "time_alive": 1672,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 13,
  "time_alive": 1754,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 11,
  "time_alive": 1748,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 11,
  "time_alive": 1677,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 11,
  "time_alive": 1734,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 2,
  "time_alive": 1883,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 31,
  "time_alive": 1364,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 7,
  "time_alive": 1822,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 18,
  "time_alive": 1681,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 18,
  "time_alive": 1549,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 1,
  "time_alive": 1840,
  "elims": 11,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 9,
  "time_alive": 1763,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 5,
  "time_alive": 1770,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 32,
  "time_alive": 1413,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 30,
  "time_alive": 1492,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "a83014f91e0c406da2c9840c015f3400:e365d9b305e5437fadae1ae1582c134d",
  "placement": 13,
  "time_alive": 1583,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "a83014f91e0c406da2c9840c015f3400:e365d9b305e5437fadae1ae1582c134d",
  "placement": 14,
  "time_alive": 1665,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "a83014f91e0c406da2c9840c015f3400:e365d9b305e5437fadae1ae1582c134d",
  "placement": 13,
  "time_alive": 1720,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "a83014f91e0c406da2c9840c015f3400:e365d9b305e5437fadae1ae1582c134d",
  "placement": 1,
  "time_alive": 1844,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "a83014f91e0c406da2c9840c015f3400:e365d9b305e5437fadae1ae1582c134d",
  "placement": 12,
  "time_alive": 1785,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "a83014f91e0c406da2c9840c015f3400:e365d9b305e5437fadae1ae1582c134d",
  "placement": 31,
  "time_alive": 1477,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 3,
  "time_alive": 1821,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 5,
  "time_alive": 1803,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 38,
  "time_alive": 692,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 19,
  "time_alive": 1609,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 22,
  "time_alive": 1652,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 5,
  "time_alive": 1872,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 10,
  "time_alive": 1687,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 3,
  "time_alive": 1834,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 8,
  "time_alive": 1777,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 18,
  "time_alive": 1612,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 24,
  "time_alive": 1565,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 12,
  "time_alive": 1718,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 24,
  "time_alive": 1485,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 18,
  "time_alive": 1627,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 4,
  "time_alive": 1834,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 10,
  "time_alive": 1685,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 4,
  "time_alive": 1917,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 9,
  "time_alive": 1772,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 12,
  "time_alive": 1661,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 20,
  "time_alive": 1615,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 3,
  "time_alive": 1840,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 17,
  "time_alive": 1615,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 5,
  "time_alive": 1892,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 21,
  "time_alive": 1665,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 21,
  "time_alive": 1530,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 19,
  "time_alive": 1623,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 6,
  "time_alive": 1806,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 12,
  "time_alive": 1666,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 11,
  "time_alive": 1794,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 29,
  "time_alive": 1496,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 1,
  "time_alive": 1835,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 50,
  "time_alive": 158,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 12,
  "time_alive": 1726,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 4,
  "time_alive": 1778,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 38,
  "time_alive": 867,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 32,
  "time_alive": 1474,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "00305d46885743f4b3bae606acb1af38:780c8202899642eeae42283b437f3d1a",
  "placement": 20,
  "time_alive": 1540,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "00305d46885743f4b3bae606acb1af38:780c8202899642eeae42283b437f3d1a",
  "placement": 24,
  "time_alive": 1593,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "00305d46885743f4b3bae606acb1af38:780c8202899642eeae42283b437f3d1a",
  "placement": 42,
  "time_alive": 557,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "00305d46885743f4b3bae606acb1af38:780c8202899642eeae42283b437f3d1a",
  "placement": 6,
  "time_alive": 1760,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "00305d46885743f4b3bae606acb1af38:780c8202899642eeae42283b437f3d1a",
  "placement": 2,
  "time_alive": 1968,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "00305d46885743f4b3bae606acb1af38:780c8202899642eeae42283b437f3d1a",
  "placement": 20,
  "time_alive": 1667,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 14,
  "time_alive": 1565,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 36,
  "time_alive": 1359,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 15,
  "time_alive": 1709,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 3,
  "time_alive": 1821,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 27,
  "time_alive": 1491,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 10,
  "time_alive": 1750,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:b366f4abfdd0400ea18374104d36b960",
  "placement": 19,
  "time_alive": 1543,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:b366f4abfdd0400ea18374104d36b960",
  "placement": 29,
  "time_alive": 1405,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:b366f4abfdd0400ea18374104d36b960",
  "placement": 41,
  "time_alive": 565,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:b366f4abfdd0400ea18374104d36b960",
  "placement": 8,
  "time_alive": 1748,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:b366f4abfdd0400ea18374104d36b960",
  "placement": 47,
  "time_alive": 222,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:b366f4abfdd0400ea18374104d36b960",
  "placement": 2,
  "time_alive": 1971,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 43,
  "time_alive": 965,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 13,
  "time_alive": 1684,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 19,
  "time_alive": 1693,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 9,
  "time_alive": 1702,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 10,
  "time_alive": 1799,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 4,
  "time_alive": 1877,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 6,
  "time_alive": 1774,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 23,
  "time_alive": 1594,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 47,
  "time_alive": 305,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 32,
  "time_alive": 1345,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 42,
  "time_alive": 420,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 6,
  "time_alive": 1857,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31",
  "placement": 15,
  "time_alive": 1562,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31",
  "placement": 12,
  "time_alive": 1694,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31",
  "placement": 20,
  "time_alive": 1687,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31",
  "placement": 16,
  "time_alive": 1619,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31",
  "placement": 19,
  "time_alive": 1673,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31",
  "placement": 17,
  "time_alive": 1687,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "205afc681a324533907d65f72933f116:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 45,
  "time_alive": 446,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "205afc681a324533907d65f72933f116:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 30,
  "time_alive": 1401,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "205afc681a324533907d65f72933f116:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 46,
  "time_alive": 340,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "205afc681a324533907d65f72933f116:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 20,
  "time_alive": 1608,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "205afc681a324533907d65f72933f116:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 23,
  "time_alive": 1641,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "205afc681a324533907d65f72933f116:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 1,
  "time_alive": 1971,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 32,
  "time_alive": 1331,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 34,
  "time_alive": 1376,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 10,
  "time_alive": 1738,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 7,
  "time_alive": 1750,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 40,
  "time_alive": 610,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 8,
  "time_alive": 1779,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 38,
  "time_alive": 1124,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 26,
  "time_alive": 1483,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 25,
  "time_alive": 1660,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 41,
  "time_alive": 703,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 3,
  "time_alive": 1945,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 13,
  "time_alive": 1712,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 29,
  "time_alive": 1346,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 4,
  "time_alive": 1813,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 21,
  "time_alive": 1678,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 24,
  "time_alive": 1589,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 14,
  "time_alive": 1735,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 47,
  "time_alive": 198,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 2,
  "time_alive": 1835,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 16,
  "time_alive": 1654,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 45,
  "time_alive": 401,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 44,
  "time_alive": 271,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 43,
  "time_alive": 486,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 5,
  "time_alive": 1792,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 46,
  "time_alive": 368,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 48,
  "time_alive": 298,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 39,
  "time_alive": 834,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 17,
  "time_alive": 1687,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 24,
  "time_alive": 1555,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 33,
  "time_alive": 1327,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 39,
  "time_alive": 907,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 28,
  "time_alive": 1629,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 13,
  "time_alive": 1645,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 16,
  "time_alive": 1688,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 27,
  "time_alive": 1504,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 28,
  "time_alive": 1354,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 7,
  "time_alive": 1763,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 24,
  "time_alive": 1670,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 15,
  "time_alive": 1627,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 39,
  "time_alive": 834,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 28,
  "time_alive": 1499,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 9,
  "time_alive": 1716,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 41,
  "time_alive": 727,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 33,
  "time_alive": 1486,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 46,
  "time_alive": 378,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 30,
  "time_alive": 1440,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 34,
  "time_alive": 1318,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 48,
  "time_alive": 219,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 44,
  "time_alive": 539,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 23,
  "time_alive": 1671,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 48,
  "time_alive": 275,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 8,
  "time_alive": 1817,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 36,
  "time_alive": 954,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:efd4b17204c346aaa1672add49529a6c",
  "placement": 35,
  "time_alive": 1291,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:efd4b17204c346aaa1672add49529a6c",
  "placement": 31,
  "time_alive": 1400,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1719,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:efd4b17204c346aaa1672add49529a6c",
  "placement": 29,
  "time_alive": 1457,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:efd4b17204c346aaa1672add49529a6c",
  "placement": 34,
  "time_alive": 1253,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:efd4b17204c346aaa1672add49529a6c",
  "placement": 46,
  "time_alive": 217,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 25,
  "time_alive": 1422,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 42,
  "time_alive": 688,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 37,
  "time_alive": 719,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 30,
  "time_alive": 1406,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 6,
  "time_alive": 1852,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 26,
  "time_alive": 1512,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 31,
  "time_alive": 1341,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 37,
  "time_alive": 1337,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 18,
  "time_alive": 1700,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 42,
  "time_alive": 690,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 21,
  "time_alive": 1655,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 23,
  "time_alive": 1620,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "21737c3345d64e388860f1a17a4701b0:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 49,
  "time_alive": 204,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "21737c3345d64e388860f1a17a4701b0:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 33,
  "time_alive": 1388,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "21737c3345d64e388860f1a17a4701b0:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 16,
  "time_alive": 1708,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "21737c3345d64e388860f1a17a4701b0:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 23,
  "time_alive": 1590,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "21737c3345d64e388860f1a17a4701b0:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 25,
  "time_alive": 1550,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "21737c3345d64e388860f1a17a4701b0:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 14,
  "time_alive": 1711,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 39,
  "time_alive": 1115,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 25,
  "time_alive": 1560,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 40,
  "time_alive": 643,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 25,
  "time_alive": 1588,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 15,
  "time_alive": 1710,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 27,
  "time_alive": 1360,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 8,
  "time_alive": 1750,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 34,
  "time_alive": 1460,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 33,
  "time_alive": 1327,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 46,
  "time_alive": 230,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 40,
  "time_alive": 606,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "4acefca3bb174edabf72988632827191:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 26,
  "time_alive": 1386,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "4acefca3bb174edabf72988632827191:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 28,
  "time_alive": 1480,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "4acefca3bb174edabf72988632827191:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 39,
  "time_alive": 682,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "4acefca3bb174edabf72988632827191:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 43,
  "time_alive": 649,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "4acefca3bb174edabf72988632827191:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 29,
  "time_alive": 1473,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "4acefca3bb174edabf72988632827191:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 38,
  "time_alive": 641,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 17,
  "time_alive": 1557,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 35,
  "time_alive": 1359,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 27,
  "time_alive": 1640,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 21,
  "time_alive": 1594,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 31,
  "time_alive": 1428,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 35,
  "time_alive": 1238,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 47,
  "time_alive": 266,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 17,
  "time_alive": 1632,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 17,
  "time_alive": 1707,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 36,
  "time_alive": 1065,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 41,
  "time_alive": 500,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 42,
  "time_alive": 496,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 23,
  "time_alive": 1507,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 22,
  "time_alive": 1611,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 35,
  "time_alive": 1250,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 35,
  "time_alive": 1232,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 26,
  "time_alive": 1511,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 42,
  "time_alive": 993,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 15,
  "time_alive": 1658,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 22,
  "time_alive": 1677,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 27,
  "time_alive": 1503,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 33,
  "time_alive": 1376,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 39,
  "time_alive": 626,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:dbb44919ad0d47bc90af6f971adce20b",
  "placement": 16,
  "time_alive": 1560,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:dbb44919ad0d47bc90af6f971adce20b",
  "placement": 48,
  "time_alive": 328,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:dbb44919ad0d47bc90af6f971adce20b",
  "placement": 43,
  "time_alive": 515,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:dbb44919ad0d47bc90af6f971adce20b",
  "placement": 47,
  "time_alive": 353,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:dbb44919ad0d47bc90af6f971adce20b",
  "placement": 43,
  "time_alive": 385,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:dbb44919ad0d47bc90af6f971adce20b",
  "placement": 37,
  "time_alive": 668,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 22,
  "time_alive": 1524,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 21,
  "time_alive": 1613,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 31,
  "time_alive": 1545,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 38,
  "time_alive": 942,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 35,
  "time_alive": 1223,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 16,
  "time_alive": 1691,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 50,
  "time_alive": 181,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 49,
  "time_alive": 315,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 44,
  "time_alive": 414,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 44,
  "time_alive": 535,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 28,
  "time_alive": 1486,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 22,
  "time_alive": 1638,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 36,
  "time_alive": 1212,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 32,
  "time_alive": 1389,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 29,
  "time_alive": 1563,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 26,
  "time_alive": 1587,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 36,
  "time_alive": 1071,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 41,
  "time_alive": 515,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 30,
  "time_alive": 1344,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 27,
  "time_alive": 1481,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 26,
  "time_alive": 1643,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 22,
  "time_alive": 1591,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 20,
  "time_alive": 1668,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 45,
  "time_alive": 359,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 37,
  "time_alive": 1150,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 40,
  "time_alive": 792,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 30,
  "time_alive": 1554,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 34,
  "time_alive": 1302,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 45,
  "time_alive": 263,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 44,
  "time_alive": 459,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8:d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 34,
  "time_alive": 1325,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8:d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 38,
  "time_alive": 966,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8:d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 45,
  "time_alive": 350,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8:d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 37,
  "time_alive": 1052,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8:d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 18,
  "time_alive": 1677,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8:d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 33,
  "time_alive": 1428,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:e6c4db107f054a4d87843bf653e1a840",
  "placement": 44,
  "time_alive": 837,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:e6c4db107f054a4d87843bf653e1a840",
  "placement": 45,
  "time_alive": 517,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:e6c4db107f054a4d87843bf653e1a840",
  "placement": 32,
  "time_alive": 1493,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d30048b-8769-49a6-a5fe-22a2324a7a27",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:e6c4db107f054a4d87843bf653e1a840",
  "placement": 40,
  "time_alive": 796,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "31d2ae91-4269-4318-b52f-87fdc4a66546",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:e6c4db107f054a4d87843bf653e1a840",
  "placement": 37,
  "time_alive": 909,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:e6c4db107f054a4d87843bf653e1a840",
  "placement": 25,
  "time_alive": 1522,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "5b5fafc71bec4afa970b94863a9340e8:a9851f52e4bf452a8864414e05f06306",
  "placement": 40,
  "time_alive": 1054,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "5b5fafc71bec4afa970b94863a9340e8:a9851f52e4bf452a8864414e05f06306",
  "placement": 47,
  "time_alive": 350,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "5b5fafc71bec4afa970b94863a9340e8:a9851f52e4bf452a8864414e05f06306",
  "placement": 36,
  "time_alive": 1196,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5aeaea3a-3457-48c2-9849-d1c8f3045b43",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 46,
  "time_alive": 297,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "30fd6502-bdd6-4856-84e9-df7058de7096",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 43,
  "time_alive": 541,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07c37d15-2710-4325-8a8c-ce2f4d9dce10",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 49,
  "time_alive": 294,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 6,
  "time_alive": 1436,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 6,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 9,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 2,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 4,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 10,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 3,
  "time_alive": 1496,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 10,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1488,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 9,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 7,
  "time_alive": 1450,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 28,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 2,
  "time_alive": 1506,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 13,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 25,
  "time_alive": 877,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 28,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1463,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 5,
  "time_alive": 1444,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1506,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 11,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 11,
  "time_alive": 1408,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 16,
  "time_alive": 1217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 10,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 1,
  "time_alive": 1491,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 9,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 22,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 4,
  "time_alive": 1473,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 24,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 9,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 2,
  "time_alive": 1491,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 21,
  "time_alive": 1078,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 16,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 15,
  "time_alive": 1386,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 1,
  "time_alive": 1467,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 31,
  "time_alive": 357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 23,
  "time_alive": 1133,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 5,
  "time_alive": 1479,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 2,
  "time_alive": 1475,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 6,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 2,
  "time_alive": 1467,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 22,
  "time_alive": 1101,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 16,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 26,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 17,
  "time_alive": 1257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 21,
  "time_alive": 1057,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 11,
  "time_alive": 1392,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 2,
  "time_alive": 1468,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 20,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 11,
  "time_alive": 1378,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 3,
  "time_alive": 1470,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 7,
  "time_alive": 1452,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 13,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 15,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 9,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 10,
  "time_alive": 1428,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 15,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 18,
  "time_alive": 1271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 6,
  "time_alive": 1429,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 13,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 18,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 19,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 1,
  "time_alive": 1475,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 17,
  "time_alive": 1375,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 10,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 24,
  "time_alive": 1038,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 17,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 4,
  "time_alive": 1495,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 7,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 3,
  "time_alive": 1487,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 19,
  "time_alive": 1139,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 3,
  "time_alive": 1464,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 12,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 8,
  "time_alive": 1445,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 8,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 30,
  "time_alive": 398,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 7,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 6,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2fd440f8-12f8-41a9-988d-adb54b606544",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:6120f933beeb4b5eaee88e98803b1a3e:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 9,
  "time_alive": 1447,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:6120f933beeb4b5eaee88e98803b1a3e:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 11,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:6120f933beeb4b5eaee88e98803b1a3e:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 21,
  "time_alive": 1111,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:6120f933beeb4b5eaee88e98803b1a3e:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 16,
  "time_alive": 1378,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:6120f933beeb4b5eaee88e98803b1a3e:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 3,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:6120f933beeb4b5eaee88e98803b1a3e:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 23,
  "time_alive": 1073,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 13,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 25,
  "time_alive": 989,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 6,
  "time_alive": 1421,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 19,
  "time_alive": 1259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 12,
  "time_alive": 1379,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 12,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 26,
  "time_alive": 1006,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 14,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 4,
  "time_alive": 1458,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 13,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 8,
  "time_alive": 1423,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 14,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 14,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 7,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 12,
  "time_alive": 1393,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 5,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 27,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 16,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 8,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 12,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 24,
  "time_alive": 1076,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 33,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 22,
  "time_alive": 974,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 5,
  "time_alive": 1456,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 7,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 29,
  "time_alive": 238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 5,
  "time_alive": 1443,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 22,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 20,
  "time_alive": 1096,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 21,
  "time_alive": 1153,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 19,
  "time_alive": 1299,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 13,
  "time_alive": 1364,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 14,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 9,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 15,
  "time_alive": 1323,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 26,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 3,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 17,
  "time_alive": 1247,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 20,
  "time_alive": 1123,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 31,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 32,
  "time_alive": 127,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 11,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 22,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 15,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 23,
  "time_alive": 1106,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 12,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 5,
  "time_alive": 1436,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 25,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 27,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 22,
  "time_alive": 1054,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 19,
  "time_alive": 1160,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 10,
  "time_alive": 1426,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 18,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 17,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 30,
  "time_alive": 425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 16,
  "time_alive": 1326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 29,
  "time_alive": 565,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 27,
  "time_alive": 721,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 29,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 27,
  "time_alive": 818,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 24,
  "time_alive": 1086,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 23,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 27,
  "time_alive": 888,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 8,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 25,
  "time_alive": 921,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 8,
  "time_alive": 1432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 15,
  "time_alive": 1354,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 28,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 26,
  "time_alive": 991,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 14,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 23,
  "time_alive": 963,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 19,
  "time_alive": 1176,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 25,
  "time_alive": 1010,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 31,
  "time_alive": 207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 31,
  "time_alive": 310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 20,
  "time_alive": 1161,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 17,
  "time_alive": 1204,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 20,
  "time_alive": 1158,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 4,
  "time_alive": 1450,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 24,
  "time_alive": 995,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 25,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 28,
  "time_alive": 621,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 14,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 18,
  "time_alive": 1307,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2fd440f8-12f8-41a9-988d-adb54b606544",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 15,
  "time_alive": 1384,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 33,
  "time_alive": 307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 30,
  "time_alive": 229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 18,
  "time_alive": 1244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 24,
  "time_alive": 886,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 28,
  "time_alive": 639,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 29,
  "time_alive": 577,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 32,
  "time_alive": 127,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 28,
  "time_alive": 786,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 23,
  "time_alive": 914,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 21,
  "time_alive": 1048,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 33,
  "time_alive": 91,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 31,
  "time_alive": 404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 18,
  "time_alive": 1206,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 33,
  "time_alive": 137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 26,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 31,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 29,
  "time_alive": 473,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 21,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 27,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 32,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 29,
  "time_alive": 585,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 26,
  "time_alive": 844,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 32,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fcd6323-4410-4f84-8e57-1d333ae3e03f",
  "team_id": "069875c9f7024671968b7ddf59c22264:2b9bc917c1ac4cff9f96a17eba0a97bf:acbf311d3eab4e978bfc77377b122425",
  "placement": 32,
  "time_alive": 312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1695c575-edfc-4060-bda2-b1411ed1619b",
  "team_id": "069875c9f7024671968b7ddf59c22264:2b9bc917c1ac4cff9f96a17eba0a97bf:acbf311d3eab4e978bfc77377b122425",
  "placement": 20,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00618211-d1a9-4c93-b964-1ccc03b16356",
  "team_id": "069875c9f7024671968b7ddf59c22264:2b9bc917c1ac4cff9f96a17eba0a97bf:acbf311d3eab4e978bfc77377b122425",
  "placement": 30,
  "time_alive": 398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c40871d9-fd38-4eef-bf53-d096768d5288",
  "team_id": "069875c9f7024671968b7ddf59c22264:2b9bc917c1ac4cff9f96a17eba0a97bf:acbf311d3eab4e978bfc77377b122425",
  "placement": 32,
  "time_alive": 306,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37ea84ac-14d9-4bd7-ada4-0748736a4882",
  "team_id": "069875c9f7024671968b7ddf59c22264:2b9bc917c1ac4cff9f96a17eba0a97bf:acbf311d3eab4e978bfc77377b122425",
  "placement": 30,
  "time_alive": 360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "22a83543-7602-4123-824a-5b13b3d01110",
  "team_id": "069875c9f7024671968b7ddf59c22264:2b9bc917c1ac4cff9f96a17eba0a97bf:acbf311d3eab4e978bfc77377b122425",
  "placement": 30,
  "time_alive": 453,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1499,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1530,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 2,
  "time_alive": 1540,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 6,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 8,
  "time_alive": 1444,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 14,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 6,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 23,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1498,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 3,
  "time_alive": 1530,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 7,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 9,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 10,
  "time_alive": 1445,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 10,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 9,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1542,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1505,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 6,
  "time_alive": 1478,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 19,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 11,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 10,
  "time_alive": 1420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 17,
  "time_alive": 1394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1520,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1529,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 2,
  "time_alive": 1499,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 18,
  "time_alive": 1306,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 21,
  "time_alive": 770,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 10,
  "time_alive": 1396,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 12,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 1,
  "time_alive": 1493,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 1,
  "time_alive": 1514,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 18,
  "time_alive": 1228,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 9,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 5,
  "time_alive": 1499,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 17,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 28,
  "time_alive": 436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 4,
  "time_alive": 1510,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 4,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 1,
  "time_alive": 1508,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 3,
  "time_alive": 1490,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 23,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 16,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 24,
  "time_alive": 1141,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 21,
  "time_alive": 1258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 16,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 12,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 12,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 18,
  "time_alive": 1343,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 8,
  "time_alive": 1424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 11,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 13,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1514,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1499,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 7,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 9,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 22,
  "time_alive": 1050,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 17,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 17,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1526,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 1,
  "time_alive": 1540,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 18,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1508,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 26,
  "time_alive": 513,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 28,
  "time_alive": 648,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 24,
  "time_alive": 1008,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 11,
  "time_alive": 1418,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 2,
  "time_alive": 1542,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 23,
  "time_alive": 881,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 24,
  "time_alive": 943,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 7,
  "time_alive": 1486,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 5,
  "time_alive": 1509,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 11,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1349,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 20,
  "time_alive": 1134,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 6,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 6,
  "time_alive": 1465,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 18,
  "time_alive": 1390,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1520,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 11,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1456,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 13,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 15,
  "time_alive": 1358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 2,
  "time_alive": 1542,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 6,
  "time_alive": 1477,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 8,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 22,
  "time_alive": 1230,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 15,
  "time_alive": 1385,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 14,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 19,
  "time_alive": 1309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 15,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 3,
  "time_alive": 1449,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 13,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 5,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 31,
  "time_alive": 195,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 10,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 5,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 4,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 12,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 18,
  "time_alive": 1327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 6,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 4,
  "time_alive": 1493,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 29,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 5,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 9,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 2,
  "time_alive": 1508,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 4,
  "time_alive": 1487,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 14,
  "time_alive": 1387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 4,
  "time_alive": 1466,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 18,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 15,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 10,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 27,
  "time_alive": 669,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 3,
  "time_alive": 1494,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 22,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 12,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 4,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 23,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 30,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 3,
  "time_alive": 1476,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 2,
  "time_alive": 1499,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 20,
  "time_alive": 1231,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 11,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 12,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 22,
  "time_alive": 1006,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 8,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 16,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 6,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 3,
  "time_alive": 1503,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 21,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 11,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 12,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 13,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 16,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 26,
  "time_alive": 698,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 11,
  "time_alive": 1410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 4,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 27,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 17,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 23,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 7,
  "time_alive": 1430,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 25,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 8,
  "time_alive": 1445,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 21,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 14,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 13,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1542,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 3,
  "time_alive": 1478,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 26,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 11,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 19,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 16,
  "time_alive": 1346,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 7,
  "time_alive": 1454,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 33,
  "time_alive": 86,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 27,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 3,
  "time_alive": 1491,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 19,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 23,
  "time_alive": 1089,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 14,
  "time_alive": 1390,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 3,
  "time_alive": 1503,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 18,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 8,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 13,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 20,
  "time_alive": 1204,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 22,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 25,
  "time_alive": 526,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 17,
  "time_alive": 1351,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 17,
  "time_alive": 1256,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 27,
  "time_alive": 710,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 6,
  "time_alive": 1493,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 4,
  "time_alive": 1466,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 7,
  "time_alive": 1444,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 31,
  "time_alive": 338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 6,
  "time_alive": 1499,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 10,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 11,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 17,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 19,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 8,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 30,
  "time_alive": 582,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 25,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 19,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 8,
  "time_alive": 1429,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 5,
  "time_alive": 1479,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 11,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 9,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 7,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 25,
  "time_alive": 1017,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 29,
  "time_alive": 419,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 12,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 30,
  "time_alive": 502,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 10,
  "time_alive": 1393,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 14,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 8,
  "time_alive": 1475,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 9,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 23,
  "time_alive": 959,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 28,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 20,
  "time_alive": 1150,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 14,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 22,
  "time_alive": 1187,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 18,
  "time_alive": 1313,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 9,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 13,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 8,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 2,
  "time_alive": 1498,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 29,
  "time_alive": 356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 20,
  "time_alive": 1233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 32,
  "time_alive": 217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 25,
  "time_alive": 993,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 2,
  "time_alive": 1530,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 22,
  "time_alive": 616,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 17,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 14,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 2,
  "time_alive": 1493,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 16,
  "time_alive": 1363,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 26,
  "time_alive": 964,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 31,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 27,
  "time_alive": 583,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 29,
  "time_alive": 304,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 8,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 6,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 31,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 16,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 27,
  "time_alive": 664,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 31,
  "time_alive": 308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 21,
  "time_alive": 1121,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 11,
  "time_alive": 1414,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 27,
  "time_alive": 919,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 3,
  "time_alive": 1471,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 10,
  "time_alive": 1471,
  "elims": 3,
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
    