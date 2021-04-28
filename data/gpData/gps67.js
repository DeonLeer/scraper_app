const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 18,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 30,
  "time_alive": 174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 30,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 26,
  "time_alive": 586,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 27,
  "time_alive": 336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 15,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 11,
  "time_alive": 1402,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 25,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 23,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 18,
  "time_alive": 1303,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 11,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 25,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 29,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 30,
  "time_alive": 314,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 28,
  "time_alive": 856,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 26,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 31,
  "time_alive": 568,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 31,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 24,
  "time_alive": 986,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 22,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 26,
  "time_alive": 1000,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 13,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 17,
  "time_alive": 1263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 16,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 21,
  "time_alive": 1126,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "2538d8062030498dab66e7642fa2f128:5e861141dbc14b628979f57f0cc5fb9f:e5783239cb6647839283f4d07658df1d",
  "placement": 26,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 30,
  "time_alive": 725,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 23,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 23,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 13,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 16,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 26,
  "time_alive": 617,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 31,
  "time_alive": 164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 16,
  "time_alive": 1351,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 28,
  "time_alive": 435,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 29,
  "time_alive": 123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 28,
  "time_alive": 85,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "910c7fc4742f42cbbc47e45dec2d13a7:d47bd13b7c7c4ca799fcd7979c3d6b2a:f5f7a1e022b1494a847a2a525fa38ad9",
  "placement": 20,
  "time_alive": 526,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 31,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 28,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 15,
  "time_alive": 1340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 25,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 33,
  "time_alive": 127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 19,
  "time_alive": 1235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 24,
  "time_alive": 1164,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 24,
  "time_alive": 905,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 22,
  "time_alive": 1102,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 18,
  "time_alive": 1187,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 17,
  "time_alive": 1224,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "833503550a624a78a31e97ecc29a54c4:c6297b90d0474b5c964b31fa9e7105a1:f42826504add4745a8d5eb14f59ecce7",
  "placement": 21,
  "time_alive": 454,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 19,
  "time_alive": 1241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 27,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 26,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 16,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 19,
  "time_alive": 1267,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 17,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "135f07975f4c410fba58718b5b7dce3a:68914188cac14f77ba0dd9c53b0abd24:b07495f4f8684baeb9494ede5ea26896",
  "placement": 29,
  "time_alive": 769,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "135f07975f4c410fba58718b5b7dce3a:68914188cac14f77ba0dd9c53b0abd24:b07495f4f8684baeb9494ede5ea26896",
  "placement": 25,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "135f07975f4c410fba58718b5b7dce3a:68914188cac14f77ba0dd9c53b0abd24:b07495f4f8684baeb9494ede5ea26896",
  "placement": 32,
  "time_alive": 294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "135f07975f4c410fba58718b5b7dce3a:68914188cac14f77ba0dd9c53b0abd24:b07495f4f8684baeb9494ede5ea26896",
  "placement": 20,
  "time_alive": 1161,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "135f07975f4c410fba58718b5b7dce3a:68914188cac14f77ba0dd9c53b0abd24:b07495f4f8684baeb9494ede5ea26896",
  "placement": 30,
  "time_alive": 290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "135f07975f4c410fba58718b5b7dce3a:68914188cac14f77ba0dd9c53b0abd24:b07495f4f8684baeb9494ede5ea26896",
  "placement": 27,
  "time_alive": 443,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "135f07975f4c410fba58718b5b7dce3a:68914188cac14f77ba0dd9c53b0abd24:b07495f4f8684baeb9494ede5ea26896",
  "placement": 28,
  "time_alive": 477,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 33,
  "time_alive": 118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 33,
  "time_alive": 183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 33,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 32,
  "time_alive": 166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 31,
  "time_alive": 266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 21,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 17,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 26,
  "time_alive": 541,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 27,
  "time_alive": 581,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 17,
  "time_alive": 1234,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 26,
  "time_alive": 405,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 25,
  "time_alive": 1095,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 18,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 24,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 26,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 32,
  "time_alive": 252,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 30,
  "time_alive": 188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 9,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 8,
  "time_alive": 1386,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1479,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 6,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 2,
  "time_alive": 1501,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1497,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 8,
  "time_alive": 1417,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 2,
  "time_alive": 1481,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1471,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 6,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 5,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 13,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 22,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 6,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 6,
  "time_alive": 1458,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 20,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 13,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 5,
  "time_alive": 1439,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1524,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 1,
  "time_alive": 1542,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 3,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 4,
  "time_alive": 1442,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 20,
  "time_alive": 1192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 3,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 2,
  "time_alive": 1497,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 4,
  "time_alive": 1453,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 5,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 5,
  "time_alive": 1445,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 25,
  "time_alive": 911,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 28,
  "time_alive": 890,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 1,
  "time_alive": 1520,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 3,
  "time_alive": 1469,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 18,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 7,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 25,
  "time_alive": 841,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 4,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 6,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 5,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 3,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 1,
  "time_alive": 1520,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 16,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 7,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 10,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 20,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 23,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 9,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 5,
  "time_alive": 1467,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 6,
  "time_alive": 1431,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 2,
  "time_alive": 1476,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 23,
  "time_alive": 1006,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 12,
  "time_alive": 1379,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 3,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 3,
  "time_alive": 1498,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 11,
  "time_alive": 1430,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 2,
  "time_alive": 1520,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 10,
  "time_alive": 1379,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 27,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 8,
  "time_alive": 1444,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 17,
  "time_alive": 1363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 3,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 27,
  "time_alive": 915,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 20,
  "time_alive": 1123,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 2,
  "time_alive": 1493,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 19,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 8,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 2,
  "time_alive": 1542,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 5,
  "time_alive": 1489,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 5,
  "time_alive": 1434,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 9,
  "time_alive": 1433,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 10,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 9,
  "time_alive": 1430,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 19,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 12,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 17,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 7,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 24,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 22,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 19,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 7,
  "time_alive": 1463,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1473,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 5,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 13,
  "time_alive": 1404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 23,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 21,
  "time_alive": 1156,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 10,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 3,
  "time_alive": 1458,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 23,
  "time_alive": 991,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 11,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 14,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 27,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 15,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 18,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 16,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 2,
  "time_alive": 1511,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 1,
  "time_alive": 1501,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 15,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 11,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 12,
  "time_alive": 1365,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 15,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 23,
  "time_alive": 1001,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 15,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 26,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 20,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 19,
  "time_alive": 1168,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 19,
  "time_alive": 1291,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 1,
  "time_alive": 1511,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 6,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 14,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 14,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 22,
  "time_alive": 1050,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 11,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 2,
  "time_alive": 1520,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 17,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 17,
  "time_alive": 1358,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 11,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 7,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 12,
  "time_alive": 1410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 5,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 7,
  "time_alive": 1454,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 9,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 5,
  "time_alive": 1455,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 21,
  "time_alive": 1096,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 6,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 16,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 20,
  "time_alive": 1218,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 25,
  "time_alive": 1022,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 24,
  "time_alive": 1086,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 14,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 10,
  "time_alive": 1431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 8,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 3,
  "time_alive": 1490,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 12,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 16,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 8,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 8,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 10,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 4,
  "time_alive": 1478,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 30,
  "time_alive": 790,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 6,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 9,
  "time_alive": 1381,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 24,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 28,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 7,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 4,
  "time_alive": 1457,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 10,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 18,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 4,
  "time_alive": 1449,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 23,
  "time_alive": 1051,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 12,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 2,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 3,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 4,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 21,
  "time_alive": 1092,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 25,
  "time_alive": 960,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 18,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 18,
  "time_alive": 1190,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 21,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 27,
  "time_alive": 702,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 21,
  "time_alive": 1124,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 4,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 16,
  "time_alive": 1332,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 23,
  "time_alive": 1093,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 13,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 23,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 32,
  "time_alive": 362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 28,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 19,
  "time_alive": 1202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 15,
  "time_alive": 1307,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 13,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 7,
  "time_alive": 1439,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 2,
  "time_alive": 1524,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 10,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 13,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 13,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 7,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 12,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 24,
  "time_alive": 990,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 10,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 13,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 11,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 27,
  "time_alive": 632,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 8,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 24,
  "time_alive": 921,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 5,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 8,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 28,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 2,
  "time_alive": 1516,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 22,
  "time_alive": 1194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 16,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 18,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 28,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 19,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 19,
  "time_alive": 1313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 9,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 13,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 8,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 6,
  "time_alive": 1469,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 32,
  "time_alive": 376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 32,
  "time_alive": 143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 22,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 29,
  "time_alive": 791,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 3,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 13,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 9,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 30,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 28,
  "time_alive": 737,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 27,
  "time_alive": 931,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 17,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 16,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 8,
  "time_alive": 1438,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 16,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 14,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 13,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 9,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 7,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 26,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 17,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 9,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 24,
  "time_alive": 1040,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 9,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 15,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 1,
  "time_alive": 1516,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 18,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 30,
  "time_alive": 463,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 24,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 29,
  "time_alive": 260,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 24,
  "time_alive": 993,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 10,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 31,
  "time_alive": 220,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 30,
  "time_alive": 456,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 16,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 21,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 25,
  "time_alive": 918,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 25,
  "time_alive": 1002,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 11,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 26,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 20,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 20,
  "time_alive": 1121,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 6,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 28,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 15,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 6,
  "time_alive": 1439,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 3,
  "time_alive": 1528,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 25,
  "time_alive": 1054,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 11,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 28,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 14,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 19,
  "time_alive": 1263,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 26,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 21,
  "time_alive": 1071,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 9,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 25,
  "time_alive": 870,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 25,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 27,
  "time_alive": 819,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 22,
  "time_alive": 1080,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 23,
  "time_alive": 1103,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 27,
  "time_alive": 844,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 11,
  "time_alive": 1411,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 28,
  "time_alive": 501,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 27,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 16,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 7,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 14,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 20,
  "time_alive": 1303,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 14,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 11,
  "time_alive": 1398,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 12,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 14,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 21,
  "time_alive": 1151,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 26,
  "time_alive": 587,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 15,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 33,
  "time_alive": 174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 23,
  "time_alive": 1022,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 16,
  "time_alive": 1215,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 24,
  "time_alive": 907,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 21,
  "time_alive": 1121,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 29,
  "time_alive": 487,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 29,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 20,
  "time_alive": 1190,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 12,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 17,
  "time_alive": 1323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 10,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 12,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 29,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 30,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 31,
  "time_alive": 266,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 16,
  "time_alive": 1344,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 18,
  "time_alive": 1229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 19,
  "time_alive": 1262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 32,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 14,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 30,
  "time_alive": 505,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 30,
  "time_alive": 477,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 30,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 4,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 17,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 23,
  "time_alive": 995,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 28,
  "time_alive": 520,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 31,
  "time_alive": 164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 20,
  "time_alive": 1125,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 18,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 31,
  "time_alive": 530,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 29,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 17,
  "time_alive": 1218,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 14,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 24,
  "time_alive": 975,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 20,
  "time_alive": 1230,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 8,
  "time_alive": 1405,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 22,
  "time_alive": 1065,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 30,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 17,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 26,
  "time_alive": 710,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 23,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 32,
  "time_alive": 439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 19,
  "time_alive": 1200,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 33,
  "time_alive": 200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 33,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 11,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 17,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 31,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 25,
  "time_alive": 972,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 25,
  "time_alive": 982,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 14,
  "time_alive": 1373,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 28,
  "time_alive": 558,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 31,
  "time_alive": 227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 28,
  "time_alive": 880,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 18,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 22,
  "time_alive": 1097,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 29,
  "time_alive": 763,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 19,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 18,
  "time_alive": 1335,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 32,
  "time_alive": 259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 26,
  "time_alive": 919,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 29,
  "time_alive": 518,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 22,
  "time_alive": 1080,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 22,
  "time_alive": 1095,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 10,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 30,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 18,
  "time_alive": 1259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 24,
  "time_alive": 1005,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 32,
  "time_alive": 339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 31,
  "time_alive": 231,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 31,
  "time_alive": 369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 30,
  "time_alive": 783,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 24,
  "time_alive": 982,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 26,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 30,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 13,
  "time_alive": 1385,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 7,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 26,
  "time_alive": 951,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 26,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 26,
  "time_alive": 984,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 27,
  "time_alive": 534,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 25,
  "time_alive": 918,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 22,
  "time_alive": 1030,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 17,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "824d7ac0-d24b-401c-aa9c-8fd48b02304f",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 27,
  "time_alive": 797,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "086b6abe-3832-4d2e-9536-ad944846ab5f",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 29,
  "time_alive": 211,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "340058d2-9f6f-473e-b040-e3f64aed84d1",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 29,
  "time_alive": 271,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2aa6c846-20ec-40c5-824f-3e38c9367c25",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 26,
  "time_alive": 873,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 21,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 15,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 29,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 21,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 21,
  "time_alive": 1213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 15,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0ad06341-c1b6-4594-bfd7-cab550ad380c",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 33,
  "time_alive": 285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33338bc0-e0cc-4603-979c-cbb3cc00bdbc",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 31,
  "time_alive": 437,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5821561d-e2fd-4cba-af7b-a5327eb558f4",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 31,
  "time_alive": 465,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5cdef378-6683-4518-a78f-e913b029b919",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 31,
  "time_alive": 424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9039513a-eeb6-4463-933c-b6b090fb2e20",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 29,
  "time_alive": 461,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "92a0b9fb-0668-48a5-a2fb-724c45a279b3",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 22,
  "time_alive": 1007,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a97de5f-f90b-4589-8828-643582e1d8d4",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 27,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 31,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:780c8202899642eeae42283b437f3d1a",
  "placement": 2,
  "time_alive": 1497,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:780c8202899642eeae42283b437f3d1a",
  "placement": 9,
  "time_alive": 1470,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:780c8202899642eeae42283b437f3d1a",
  "placement": 33,
  "time_alive": 1077,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:780c8202899642eeae42283b437f3d1a",
  "placement": 24,
  "time_alive": 1263,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:780c8202899642eeae42283b437f3d1a",
  "placement": 1,
  "time_alive": 1483,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:780c8202899642eeae42283b437f3d1a",
  "placement": 10,
  "time_alive": 1453,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 12,
  "time_alive": 1424,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 8,
  "time_alive": 1482,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 11,
  "time_alive": 1430,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 14,
  "time_alive": 1383,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 3,
  "time_alive": 1475,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 18,
  "time_alive": 1383,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 20,
  "time_alive": 1341,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 10,
  "time_alive": 1463,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 6,
  "time_alive": 1480,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 6,
  "time_alive": 1475,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 15,
  "time_alive": 1398,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67",
  "placement": 14,
  "time_alive": 1426,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 21,
  "time_alive": 1332,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 11,
  "time_alive": 1458,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 13,
  "time_alive": 1420,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 37,
  "time_alive": 425,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 5,
  "time_alive": 1455,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 3,
  "time_alive": 1506,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 7,
  "time_alive": 1462,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 2,
  "time_alive": 1524,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 17,
  "time_alive": 1393,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 19,
  "time_alive": 1353,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 20,
  "time_alive": 1326,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 8,
  "time_alive": 1454,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:fa81291771cf4b90ae1b444d727df46e",
  "placement": 5,
  "time_alive": 1474,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:fa81291771cf4b90ae1b444d727df46e",
  "placement": 33,
  "time_alive": 964,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:fa81291771cf4b90ae1b444d727df46e",
  "placement": 20,
  "time_alive": 1378,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:fa81291771cf4b90ae1b444d727df46e",
  "placement": 1,
  "time_alive": 1506,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:fa81291771cf4b90ae1b444d727df46e",
  "placement": 23,
  "time_alive": 1311,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:fa81291771cf4b90ae1b444d727df46e",
  "placement": 6,
  "time_alive": 1472,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 16,
  "time_alive": 1402,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 28,
  "time_alive": 1169,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 21,
  "time_alive": 1373,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 3,
  "time_alive": 1492,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 4,
  "time_alive": 1460,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 11,
  "time_alive": 1450,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 3,
  "time_alive": 1491,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 1,
  "time_alive": 1524,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 18,
  "time_alive": 1393,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 2,
  "time_alive": 1506,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 32,
  "time_alive": 1058,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 39,
  "time_alive": 219,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "35309f9d257248b0a5e938b61bc5a092:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 1,
  "time_alive": 1497,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "35309f9d257248b0a5e938b61bc5a092:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 14,
  "time_alive": 1437,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "35309f9d257248b0a5e938b61bc5a092:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 24,
  "time_alive": 1323,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "35309f9d257248b0a5e938b61bc5a092:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 7,
  "time_alive": 1457,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "35309f9d257248b0a5e938b61bc5a092:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 25,
  "time_alive": 1281,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "35309f9d257248b0a5e938b61bc5a092:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 22,
  "time_alive": 1368,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 24,
  "time_alive": 1284,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 45,
  "time_alive": 373,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 22,
  "time_alive": 1360,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 16,
  "time_alive": 1383,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 8,
  "time_alive": 1445,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 4,
  "time_alive": 1504,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:3b68fdab54b547b488e94b563540e314",
  "placement": 4,
  "time_alive": 1481,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:3b68fdab54b547b488e94b563540e314",
  "placement": 25,
  "time_alive": 1224,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:3b68fdab54b547b488e94b563540e314",
  "placement": 1,
  "time_alive": 1506,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:3b68fdab54b547b488e94b563540e314",
  "placement": 33,
  "time_alive": 969,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:3b68fdab54b547b488e94b563540e314",
  "placement": 18,
  "time_alive": 1343,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:3b68fdab54b547b488e94b563540e314",
  "placement": 26,
  "time_alive": 1188,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:6e1edaf701654a7bb31640aaae3be50e",
  "placement": 23,
  "time_alive": 1321,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:6e1edaf701654a7bb31640aaae3be50e",
  "placement": 22,
  "time_alive": 1332,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:6e1edaf701654a7bb31640aaae3be50e",
  "placement": 38,
  "time_alive": 863,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:6e1edaf701654a7bb31640aaae3be50e",
  "placement": 12,
  "time_alive": 1421,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:6e1edaf701654a7bb31640aaae3be50e",
  "placement": 17,
  "time_alive": 1351,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:6e1edaf701654a7bb31640aaae3be50e",
  "placement": 2,
  "time_alive": 1519,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 18,
  "time_alive": 1389,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 20,
  "time_alive": 1365,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 10,
  "time_alive": 1439,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 8,
  "time_alive": 1451,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 11,
  "time_alive": 1413,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 15,
  "time_alive": 1399,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1450,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 17,
  "time_alive": 1407,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 19,
  "time_alive": 1379,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 5,
  "time_alive": 1477,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 31,
  "time_alive": 1074,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1453,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 29,
  "time_alive": 1148,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 37,
  "time_alive": 781,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 3,
  "time_alive": 1496,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 13,
  "time_alive": 1387,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 13,
  "time_alive": 1409,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 23,
  "time_alive": 1252,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 39,
  "time_alive": 818,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 7,
  "time_alive": 1485,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 46,
  "time_alive": 260,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 23,
  "time_alive": 1289,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 9,
  "time_alive": 1444,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "8e66bee5c50b44869a16e3d59c270894:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 1,
  "time_alive": 1519,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 35,
  "time_alive": 986,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 6,
  "time_alive": 1488,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 4,
  "time_alive": 1492,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 25,
  "time_alive": 1213,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 44,
  "time_alive": 128,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 13,
  "time_alive": 1436,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "17ca8e2cfa9c4071a42188fa4d574db6:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 17,
  "time_alive": 1397,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "17ca8e2cfa9c4071a42188fa4d574db6:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 3,
  "time_alive": 1512,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "17ca8e2cfa9c4071a42188fa4d574db6:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 31,
  "time_alive": 1150,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "17ca8e2cfa9c4071a42188fa4d574db6:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 4,
  "time_alive": 1485,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "17ca8e2cfa9c4071a42188fa4d574db6:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 29,
  "time_alive": 1100,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "17ca8e2cfa9c4071a42188fa4d574db6:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 12,
  "time_alive": 1449,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 31,
  "time_alive": 1126,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 16,
  "time_alive": 1429,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 12,
  "time_alive": 1429,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 17,
  "time_alive": 1371,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1483,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:8f260e254f1243d384f8eb55003b3a43",
  "placement": 28,
  "time_alive": 1175,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 19,
  "time_alive": 1361,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 5,
  "time_alive": 1490,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 35,
  "time_alive": 1046,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 9,
  "time_alive": 1445,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 16,
  "time_alive": 1372,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 27,
  "time_alive": 1187,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 33,
  "time_alive": 1083,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 44,
  "time_alive": 399,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 15,
  "time_alive": 1414,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 27,
  "time_alive": 1147,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 39,
  "time_alive": 360,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 7,
  "time_alive": 1471,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 11,
  "time_alive": 1425,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 35,
  "time_alive": 943,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 5,
  "time_alive": 1487,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 45,
  "time_alive": 196,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 36,
  "time_alive": 800,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 33,
  "time_alive": 858,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 30,
  "time_alive": 1134,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 46,
  "time_alive": 312,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 49,
  "time_alive": 218,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 11,
  "time_alive": 1430,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 7,
  "time_alive": 1448,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 20,
  "time_alive": 1379,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 8,
  "time_alive": 1457,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 24,
  "time_alive": 1233,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 23,
  "time_alive": 1355,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 30,
  "time_alive": 1059,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 24,
  "time_alive": 1294,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 25,
  "time_alive": 1218,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1444,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 38,
  "time_alive": 762,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 40,
  "time_alive": 833,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 22,
  "time_alive": 1306,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1420,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 32,
  "time_alive": 1068,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 32,
  "time_alive": 1112,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 23,
  "time_alive": 1249,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 2,
  "time_alive": 1506,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 21,
  "time_alive": 1314,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 19,
  "time_alive": 1331,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 19,
  "time_alive": 1380,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 13,
  "time_alive": 1420,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 12,
  "time_alive": 1455,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 43,
  "time_alive": 351,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 39,
  "time_alive": 330,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 12,
  "time_alive": 1412,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 16,
  "time_alive": 1387,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:c6242764ab20411dae77829ee1ce39a4",
  "placement": 6,
  "time_alive": 1465,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:c6242764ab20411dae77829ee1ce39a4",
  "placement": 36,
  "time_alive": 891,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:c6242764ab20411dae77829ee1ce39a4",
  "placement": 28,
  "time_alive": 1288,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:c6242764ab20411dae77829ee1ce39a4",
  "placement": 32,
  "time_alive": 972,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:c6242764ab20411dae77829ee1ce39a4",
  "placement": 14,
  "time_alive": 1407,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:c6242764ab20411dae77829ee1ce39a4",
  "placement": 34,
  "time_alive": 671,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 36,
  "time_alive": 874,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 47,
  "time_alive": 308,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 39,
  "time_alive": 846,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 15,
  "time_alive": 1383,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 6,
  "time_alive": 1453,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 31,
  "time_alive": 1093,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 15,
  "time_alive": 1404,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 21,
  "time_alive": 1355,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 7,
  "time_alive": 1459,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 20,
  "time_alive": 1333,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 35,
  "time_alive": 837,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd",
  "placement": 43,
  "time_alive": 146,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 41,
  "time_alive": 346,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 32,
  "time_alive": 995,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 44,
  "time_alive": 331,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 28,
  "time_alive": 1109,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 27,
  "time_alive": 1206,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 5,
  "time_alive": 1478,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 25,
  "time_alive": 1284,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 4,
  "time_alive": 1508,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 27,
  "time_alive": 1293,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 26,
  "time_alive": 1201,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 21,
  "time_alive": 1322,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 21,
  "time_alive": 1372,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 26,
  "time_alive": 1192,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 13,
  "time_alive": 1445,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 36,
  "time_alive": 983,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 47,
  "time_alive": 183,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 26,
  "time_alive": 1243,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "08126bda4ec047faad395b794ed45fc9:f8eeece803924b9093db2812e6772743",
  "placement": 17,
  "time_alive": 1386,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 50,
  "time_alive": 112,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 29,
  "time_alive": 1156,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 8,
  "time_alive": 1450,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 29,
  "time_alive": 1081,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 22,
  "time_alive": 1320,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 38,
  "time_alive": 231,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9:e365d9b305e5437fadae1ae1582c134d",
  "placement": 48,
  "time_alive": 139,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9:e365d9b305e5437fadae1ae1582c134d",
  "placement": 41,
  "time_alive": 570,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9:e365d9b305e5437fadae1ae1582c134d",
  "placement": 41,
  "time_alive": 567,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9:e365d9b305e5437fadae1ae1582c134d",
  "placement": 10,
  "time_alive": 1434,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9:e365d9b305e5437fadae1ae1582c134d",
  "placement": 30,
  "time_alive": 1087,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9:e365d9b305e5437fadae1ae1582c134d",
  "placement": 29,
  "time_alive": 1147,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "00305d46885743f4b3bae606acb1af38:3aea55016b414fd29d7f879971f51e4c",
  "placement": 14,
  "time_alive": 1409,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "00305d46885743f4b3bae606acb1af38:3aea55016b414fd29d7f879971f51e4c",
  "placement": 31,
  "time_alive": 1003,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "00305d46885743f4b3bae606acb1af38:3aea55016b414fd29d7f879971f51e4c",
  "placement": 14,
  "time_alive": 1414,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "00305d46885743f4b3bae606acb1af38:3aea55016b414fd29d7f879971f51e4c",
  "placement": 40,
  "time_alive": 315,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "00305d46885743f4b3bae606acb1af38:3aea55016b414fd29d7f879971f51e4c",
  "placement": 46,
  "time_alive": 96,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "00305d46885743f4b3bae606acb1af38:3aea55016b414fd29d7f879971f51e4c",
  "placement": 42,
  "time_alive": 165,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "22051a9e54e2408e8bac48a0fd84b38f:c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 47,
  "time_alive": 140,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "22051a9e54e2408e8bac48a0fd84b38f:c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 30,
  "time_alive": 1125,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "22051a9e54e2408e8bac48a0fd84b38f:c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 9,
  "time_alive": 1446,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "22051a9e54e2408e8bac48a0fd84b38f:c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 31,
  "time_alive": 986,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "22051a9e54e2408e8bac48a0fd84b38f:c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 45,
  "time_alive": 118,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "22051a9e54e2408e8bac48a0fd84b38f:c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 24,
  "time_alive": 1251,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 45,
  "time_alive": 185,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 15,
  "time_alive": 1435,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 16,
  "time_alive": 1413,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 42,
  "time_alive": 209,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 22,
  "time_alive": 1328,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 26,
  "time_alive": 1215,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 45,
  "time_alive": 304,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 35,
  "time_alive": 900,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 40,
  "time_alive": 284,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 35,
  "time_alive": 564,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 27,
  "time_alive": 1187,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 42,
  "time_alive": 485,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 25,
  "time_alive": 1311,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 38,
  "time_alive": 412,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 38,
  "time_alive": 421,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 41,
  "time_alive": 173,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "ed8a01d2c43249e999a5da805a74fa4e:fd068dadbf584bc38d8650f15b3d2e90",
  "placement": 28,
  "time_alive": 1187,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "ed8a01d2c43249e999a5da805a74fa4e:fd068dadbf584bc38d8650f15b3d2e90",
  "placement": 19,
  "time_alive": 1374,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "ed8a01d2c43249e999a5da805a74fa4e:fd068dadbf584bc38d8650f15b3d2e90",
  "placement": 30,
  "time_alive": 1160,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "ed8a01d2c43249e999a5da805a74fa4e:fd068dadbf584bc38d8650f15b3d2e90",
  "placement": 46,
  "time_alive": 185,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "ed8a01d2c43249e999a5da805a74fa4e:fd068dadbf584bc38d8650f15b3d2e90",
  "placement": 34,
  "time_alive": 885,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "ed8a01d2c43249e999a5da805a74fa4e:fd068dadbf584bc38d8650f15b3d2e90",
  "placement": 36,
  "time_alive": 507,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 43,
  "time_alive": 234,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 18,
  "time_alive": 1390,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 29,
  "time_alive": 1165,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 48,
  "time_alive": 153,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "c715a4e542434529ae927e7d29943575:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 34,
  "time_alive": 1077,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "c715a4e542434529ae927e7d29943575:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 43,
  "time_alive": 452,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "c715a4e542434529ae927e7d29943575:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 34,
  "time_alive": 1058,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "c715a4e542434529ae927e7d29943575:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 18,
  "time_alive": 1368,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "c715a4e542434529ae927e7d29943575:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 43,
  "time_alive": 138,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "3df4923646054d5880f27c714dd19072:d77b5b24f7cc4eca83c4d00b4b35ca8d",
  "placement": 40,
  "time_alive": 358,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "3df4923646054d5880f27c714dd19072:d77b5b24f7cc4eca83c4d00b4b35ca8d",
  "placement": 40,
  "time_alive": 573,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "3df4923646054d5880f27c714dd19072:d77b5b24f7cc4eca83c4d00b4b35ca8d",
  "placement": 42,
  "time_alive": 510,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "3df4923646054d5880f27c714dd19072:d77b5b24f7cc4eca83c4d00b4b35ca8d",
  "placement": 41,
  "time_alive": 240,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "3df4923646054d5880f27c714dd19072:d77b5b24f7cc4eca83c4d00b4b35ca8d",
  "placement": 28,
  "time_alive": 1178,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "3df4923646054d5880f27c714dd19072:d77b5b24f7cc4eca83c4d00b4b35ca8d",
  "placement": 44,
  "time_alive": 105,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "0af30a2961f6480f94425426982b07f9:9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 37,
  "time_alive": 846,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "0af30a2961f6480f94425426982b07f9:9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 27,
  "time_alive": 1169,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "0af30a2961f6480f94425426982b07f9:9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 47,
  "time_alive": 251,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "0af30a2961f6480f94425426982b07f9:9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 49,
  "time_alive": 141,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "0af30a2961f6480f94425426982b07f9:9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 33,
  "time_alive": 923,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "0af30a2961f6480f94425426982b07f9:9dbf652ae4bd452da7029bc12884a3c9",
  "placement": 40,
  "time_alive": 194,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:d0156930d1f548939eff0831c95eec7c",
  "placement": 44,
  "time_alive": 205,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:d0156930d1f548939eff0831c95eec7c",
  "placement": 50,
  "time_alive": 131,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:d0156930d1f548939eff0831c95eec7c",
  "placement": 26,
  "time_alive": 1304,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:d0156930d1f548939eff0831c95eec7c",
  "placement": 36,
  "time_alive": 837,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:d0156930d1f548939eff0831c95eec7c",
  "placement": 42,
  "time_alive": 143,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:d0156930d1f548939eff0831c95eec7c",
  "placement": 37,
  "time_alive": 249,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 38,
  "time_alive": 820,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 34,
  "time_alive": 958,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 32,
  "time_alive": 1087,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 44,
  "time_alive": 197,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 37,
  "time_alive": 430,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4aadb68e-da9e-421a-a860-6557ce4ed369",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637",
  "placement": 30,
  "time_alive": 1106,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "03d163abeef549c2a41caf783c531a62:8fab7c8991824b51af4cdd8b17681ba9",
  "placement": 49,
  "time_alive": 131,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "03d163abeef549c2a41caf783c531a62:8fab7c8991824b51af4cdd8b17681ba9",
  "placement": 39,
  "time_alive": 634,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "03d163abeef549c2a41caf783c531a62:8fab7c8991824b51af4cdd8b17681ba9",
  "placement": 37,
  "time_alive": 871,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "03d163abeef549c2a41caf783c531a62:8fab7c8991824b51af4cdd8b17681ba9",
  "placement": 43,
  "time_alive": 198,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "375221f0-3b9f-4735-bd2f-25d837a7fe70",
  "team_id": "03d163abeef549c2a41caf783c531a62:8fab7c8991824b51af4cdd8b17681ba9",
  "placement": 41,
  "time_alive": 277,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:ded75fa3bfb64c35a960270863127015",
  "placement": 46,
  "time_alive": 153,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:ded75fa3bfb64c35a960270863127015",
  "placement": 48,
  "time_alive": 172,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "67f856bc-71b3-4927-98e4-f8187ae386ed",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:ded75fa3bfb64c35a960270863127015",
  "placement": 48,
  "time_alive": 247,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4ddf41b7-96dc-438b-829b-f3055991f14a",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:ded75fa3bfb64c35a960270863127015",
  "placement": 34,
  "time_alive": 935,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 42,
  "time_alive": 263,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "c2f9db3d-0333-4d98-97cd-a01a835850a8",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 49,
  "time_alive": 148,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 11,
  "time_alive": 1407,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 3,
  "time_alive": 1522,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 6,
  "time_alive": 1456,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 38,
  "time_alive": 840,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 8,
  "time_alive": 1487,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 21,
  "time_alive": 1382,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 4,
  "time_alive": 1487,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:3736de3c0eb043649fac15ec1025ff08",
  "placement": 2,
  "time_alive": 1518,
  "elims": 12,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 6,
  "time_alive": 1443,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 10,
  "time_alive": 1452,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 7,
  "time_alive": 1439,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 4,
  "time_alive": 1513,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 7,
  "time_alive": 1487,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 2,
  "time_alive": 1534,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 22,
  "time_alive": 1359,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 17,
  "time_alive": 1368,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 9,
  "time_alive": 1422,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1527,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 39,
  "time_alive": 794,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 8,
  "time_alive": 1481,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 27,
  "time_alive": 1212,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 24,
  "time_alive": 1356,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1520,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 21,
  "time_alive": 1352,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 25,
  "time_alive": 1284,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 26,
  "time_alive": 1223,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 14,
  "time_alive": 1394,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 42,
  "time_alive": 396,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 3,
  "time_alive": 1527,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 1,
  "time_alive": 1534,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 7,
  "time_alive": 1464,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 10,
  "time_alive": 1420,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 28,
  "time_alive": 1174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 4,
  "time_alive": 1498,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 32,
  "time_alive": 1067,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 7,
  "time_alive": 1491,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 4,
  "time_alive": 1515,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 7,
  "time_alive": 1458,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 10,
  "time_alive": 1426,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 40,
  "time_alive": 506,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 42,
  "time_alive": 808,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 6,
  "time_alive": 1469,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 12,
  "time_alive": 1397,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 1,
  "time_alive": 1534,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 48,
  "time_alive": 158,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 10,
  "time_alive": 1445,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 23,
  "time_alive": 1356,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 42,
  "time_alive": 281,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 20,
  "time_alive": 1353,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 17,
  "time_alive": 1404,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 2,
  "time_alive": 1510,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 43,
  "time_alive": 373,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 23,
  "time_alive": 1328,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 3,
  "time_alive": 1502,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 13,
  "time_alive": 1411,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 22,
  "time_alive": 1344,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 8,
  "time_alive": 1431,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 5,
  "time_alive": 1475,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 5,
  "time_alive": 1458,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 2,
  "time_alive": 1534,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 45,
  "time_alive": 265,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 26,
  "time_alive": 1224,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 31,
  "time_alive": 991,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 41,
  "time_alive": 431,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 37,
  "time_alive": 991,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 2,
  "time_alive": 1527,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 23,
  "time_alive": 1291,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 25,
  "time_alive": 1303,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 13,
  "time_alive": 1458,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 5,
  "time_alive": 1468,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 21,
  "time_alive": 1362,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "00305d46885743f4b3bae606acb1af38:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 31,
  "time_alive": 1161,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 16,
  "time_alive": 1368,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 19,
  "time_alive": 1399,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 4,
  "time_alive": 1483,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 10,
  "time_alive": 1467,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 26,
  "time_alive": 1254,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 14,
  "time_alive": 1415,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 24,
  "time_alive": 1343,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 32,
  "time_alive": 977,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 4,
  "time_alive": 1462,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 15,
  "time_alive": 1413,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 22,
  "time_alive": 1304,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 31,
  "time_alive": 1146,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 15,
  "time_alive": 1431,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 20,
  "time_alive": 1382,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 11,
  "time_alive": 1423,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 27,
  "time_alive": 1188,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 24,
  "time_alive": 1318,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 47,
  "time_alive": 250,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 25,
  "time_alive": 1262,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 5,
  "time_alive": 1509,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 1,
  "time_alive": 1531,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 15,
  "time_alive": 1415,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 25,
  "time_alive": 1282,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 29,
  "time_alive": 1170,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 7,
  "time_alive": 1431,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 8,
  "time_alive": 1454,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 26,
  "time_alive": 1223,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 21,
  "time_alive": 1347,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 21,
  "time_alive": 1355,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 13,
  "time_alive": 1425,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 14,
  "time_alive": 1406,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:d0b41961bcb6483e9af6f567931a135e",
  "placement": 25,
  "time_alive": 1259,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 43,
  "time_alive": 641,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 12,
  "time_alive": 1433,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 18,
  "time_alive": 1356,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 14,
  "time_alive": 1427,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 2,
  "time_alive": 1531,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 17,
  "time_alive": 1410,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 35,
  "time_alive": 931,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 18,
  "time_alive": 1365,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 5,
  "time_alive": 1455,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 11,
  "time_alive": 1438,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 9,
  "time_alive": 1425,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 45,
  "time_alive": 344,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 14,
  "time_alive": 1439,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 37,
  "time_alive": 653,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 8,
  "time_alive": 1457,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 38,
  "time_alive": 760,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 14,
  "time_alive": 1379,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 37,
  "time_alive": 850,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 43,
  "time_alive": 485,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 3,
  "time_alive": 1525,
  "elims": 14,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 40,
  "time_alive": 425,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 28,
  "time_alive": 1178,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 15,
  "time_alive": 1401,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 28,
  "time_alive": 1188,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 41,
  "time_alive": 852,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 18,
  "time_alive": 1399,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 38,
  "time_alive": 818,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 20,
  "time_alive": 1348,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 44,
  "time_alive": 292,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 18,
  "time_alive": 1388,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 5,
  "time_alive": 1467,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 20,
  "time_alive": 1358,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 19,
  "time_alive": 1364,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 16,
  "time_alive": 1410,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 3,
  "time_alive": 1491,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 36,
  "time_alive": 880,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 18,
  "time_alive": 1363,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 33,
  "time_alive": 941,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 16,
  "time_alive": 1397,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 5,
  "time_alive": 1476,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 3,
  "time_alive": 1480,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 29,
  "time_alive": 1154,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 31,
  "time_alive": 1083,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 12,
  "time_alive": 1462,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 28,
  "time_alive": 1211,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 19,
  "time_alive": 1388,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 34,
  "time_alive": 941,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 1,
  "time_alive": 1518,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 23,
  "time_alive": 1334,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 20,
  "time_alive": 1371,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 29,
  "time_alive": 1131,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 27,
  "time_alive": 1201,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 35,
  "time_alive": 863,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 8,
  "time_alive": 1458,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 2,
  "time_alive": 1520,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "19489f2d33e74d9982f69155225743d1:b4695df986e4426a90b08279d169675f",
  "placement": 46,
  "time_alive": 168,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 21,
  "time_alive": 1353,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 48,
  "time_alive": 250,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 13,
  "time_alive": 1396,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 9,
  "time_alive": 1475,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 25,
  "time_alive": 1317,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 9,
  "time_alive": 1453,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 42,
  "time_alive": 470,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "439e741737a54167821c99741b6a1369:5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 44,
  "time_alive": 252,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1491,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 27,
  "time_alive": 1182,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 21,
  "time_alive": 1325,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 37,
  "time_alive": 859,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 17,
  "time_alive": 1377,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 46,
  "time_alive": 241,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 46,
  "time_alive": 272,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 8,
  "time_alive": 1451,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 1,
  "time_alive": 1491,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 34,
  "time_alive": 1017,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 36,
  "time_alive": 829,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 40,
  "time_alive": 653,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 24,
  "time_alive": 1323,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 34,
  "time_alive": 897,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 47,
  "time_alive": 261,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "5c16a3d3a80940a3a5e25ccb7320f795:803ae2cf372b422498943ea8a215d75e",
  "placement": 19,
  "time_alive": 1358,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 31,
  "time_alive": 1148,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 42,
  "time_alive": 448,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 46,
  "time_alive": 315,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 15,
  "time_alive": 1414,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 39,
  "time_alive": 455,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 45,
  "time_alive": 246,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 36,
  "time_alive": 927,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 3,
  "time_alive": 1493,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 33,
  "time_alive": 1138,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 43,
  "time_alive": 409,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 37,
  "time_alive": 829,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 22,
  "time_alive": 1345,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 32,
  "time_alive": 1120,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 4,
  "time_alive": 1469,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 17,
  "time_alive": 1395,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 6,
  "time_alive": 1474,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 34,
  "time_alive": 1090,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 22,
  "time_alive": 1355,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 34,
  "time_alive": 914,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 33,
  "time_alive": 1131,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 9,
  "time_alive": 1478,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 12,
  "time_alive": 1433,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 40,
  "time_alive": 599,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "8e5fad1e4ffe4ea3b2ec1b14d979a619:8e9a79684aec42e990c3dca87521ad9b",
  "placement": 9,
  "time_alive": 1444,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 18,
  "time_alive": 1367,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 49,
  "time_alive": 129,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 16,
  "time_alive": 1366,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 30,
  "time_alive": 1175,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 20,
  "time_alive": 1356,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 35,
  "time_alive": 849,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 12,
  "time_alive": 1418,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:2b987b57eff147dd934b0e33e62035f8",
  "placement": 39,
  "time_alive": 600,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 39,
  "time_alive": 839,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 19,
  "time_alive": 1344,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 6,
  "time_alive": 1496,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 33,
  "time_alive": 892,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 22,
  "time_alive": 1361,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 6,
  "time_alive": 1465,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 14,
  "time_alive": 1394,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 22,
  "time_alive": 1342,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 32,
  "time_alive": 1110,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 40,
  "time_alive": 635,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 24,
  "time_alive": 1343,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 31,
  "time_alive": 1147,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 6,
  "time_alive": 1464,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 19,
  "time_alive": 1376,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 13,
  "time_alive": 1399,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 17,
  "time_alive": 1367,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 9,
  "time_alive": 1453,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 20,
  "time_alive": 1343,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 17,
  "time_alive": 1390,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 19,
  "time_alive": 1359,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 11,
  "time_alive": 1438,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 32,
  "time_alive": 976,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 34,
  "time_alive": 955,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 45,
  "time_alive": 380,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 30,
  "time_alive": 1127,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1510,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 32,
  "time_alive": 1141,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 12,
  "time_alive": 1460,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 41,
  "time_alive": 333,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 29,
  "time_alive": 1046,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 49,
  "time_alive": 161,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 10,
  "time_alive": 1415,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 7,
  "time_alive": 1456,
  "elims": 4,
  "mode": 2
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
    