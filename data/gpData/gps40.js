const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 6,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 95,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 27,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 96,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 11,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 24,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 88,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 22,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 95,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 17,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 1,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 76,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 23,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 29,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 6,
  "time_alive": 1511,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 61,
  "time_alive": 990,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 41,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 20,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 44,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 49,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 37,
  "time_alive": 1351,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 39,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 37,
  "time_alive": 1340,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 55,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 31,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 13,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 69,
  "time_alive": 939,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 4,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 62,
  "time_alive": 909,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 22,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 30,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 25,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 78,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 22,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 31,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 28,
  "time_alive": 1391,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 37,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 58,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 53,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 20,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 39,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 15,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 42,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 19,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 29,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 71,
  "time_alive": 686,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 41,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 84,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 16,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 3,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 26,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 56,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 84,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 66,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 9,
  "time_alive": 1497,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 81,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 91,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 1,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 97,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 74,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 8,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 65,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 28,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 22,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 13,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 88,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 36,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 41,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 14,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 40,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 14,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 53,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 54,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 28,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 13,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 35,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 7,
  "time_alive": 1514,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 76,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 84,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 2,
  "time_alive": 1506,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 72,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 94,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 33,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 7,
  "time_alive": 1513,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 70,
  "time_alive": 881,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 18,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 36,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 72,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 89,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 27,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 19,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 32,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 55,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 36,
  "time_alive": 1340,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 71,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 32,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 82,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 11,
  "time_alive": 1445,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 43,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 73,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 18,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 83,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 40,
  "time_alive": 1311,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 61,
  "time_alive": 1018,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 31,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 47,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 37,
  "time_alive": 1336,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 38,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 71,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 84,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 41,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 18,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 32,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 64,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 24,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 20,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 85,
  "time_alive": 376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 46,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 24,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 11,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 67,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 89,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 40,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 45,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 3,
  "time_alive": 1534,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 18,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 96,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 62,
  "time_alive": 1013,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 86,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 93,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 11,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 38,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 46,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 10,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 85,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 67,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 18,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 74,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 6,
  "time_alive": 1499,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 29,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 98,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 68,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 44,
  "time_alive": 1226,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 33,
  "time_alive": 1366,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 95,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 6,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 53,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 8,
  "time_alive": 1509,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 93,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 60,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 47,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 23,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 21,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 91,
  "time_alive": 411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 14,
  "time_alive": 1459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 66,
  "time_alive": 974,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 58,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 21,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 46,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 73,
  "time_alive": 926,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 75,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 46,
  "time_alive": 1251,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 2,
  "time_alive": 1522,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 48,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 95,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 79,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 29,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 7,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 67,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 14,
  "time_alive": 1448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 25,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 47,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 58,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 48,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 17,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 51,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 19,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 16,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 86,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 55,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 73,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d96e61d68cf842b9a88626d3432693bb",
  "placement": 34,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6",
  "placement": 9,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6",
  "placement": 35,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6",
  "placement": 47,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6",
  "placement": 71,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6",
  "placement": 68,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6",
  "placement": 33,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 5,
  "time_alive": 1519,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 63,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 77,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 39,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 71,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 12,
  "time_alive": 1466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 59,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 19,
  "time_alive": 1443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 39,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 54,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 24,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 28,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 38,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 28,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 94,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 51,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 76,
  "time_alive": 698,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 39,
  "time_alive": 1326,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 11,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 80,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 72,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 44,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 60,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 38,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 16,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 43,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 62,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 21,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 83,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 52,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 94,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 60,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 53,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 29,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 8,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 58,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 12,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 70,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 89,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 12,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 64,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 77,
  "time_alive": 385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 73,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 45,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 5,
  "time_alive": 1529,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 50,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 52,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 43,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 62,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 20,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 50,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 91,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 51,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "6bdf2d6891c6441b83ac921d80918a9b",
  "placement": 15,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 42,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 10,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 46,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 59,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 35,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 66,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 77,
  "time_alive": 823,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 72,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 85,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 25,
  "time_alive": 1393,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 59,
  "time_alive": 1070,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 61,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 48,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 77,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 55,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 16,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 63,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 26,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 26,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 42,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 17,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 45,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 79,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 57,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 64,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 40,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 65,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 87,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 5,
  "time_alive": 1501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "37a3de10bb524c69bd3bd822af7ad8bf",
  "placement": 54,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 58,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 50,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 34,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 21,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 87,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 40,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 56,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 68,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 95,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 49,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "3346789772ce4ae9a401ff498d35fc3d",
  "placement": 7,
  "time_alive": 1485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 87,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 78,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 38,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 26,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 66,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 27,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 91,
  "time_alive": 511,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 52,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 56,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 15,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 62,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 50,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 99,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 96,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 87,
  "time_alive": 435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 90,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 74,
  "time_alive": 742,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 16,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 65,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 39,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 26,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 85,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 33,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 89,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 54,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 75,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 79,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 34,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 19,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 55,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 45,
  "time_alive": 1303,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 36,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 51,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 77,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 92,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 60,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 96,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 85,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 30,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 53,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 48,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 64,
  "time_alive": 889,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 80,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 86,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 31,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 70,
  "time_alive": 938,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 88,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 30,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 36,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 71,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 63,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 31,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 97,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 32,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 81,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 34,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 21,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 56,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 93,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 91,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 27,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 87,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 74,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 47,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 38,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 59,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "dc83263544ef43dba0b84912cbae975b",
  "placement": 78,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "dc83263544ef43dba0b84912cbae975b",
  "placement": 26,
  "time_alive": 1413,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "dc83263544ef43dba0b84912cbae975b",
  "placement": 92,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "dc83263544ef43dba0b84912cbae975b",
  "placement": 52,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "dc83263544ef43dba0b84912cbae975b",
  "placement": 81,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "dc83263544ef43dba0b84912cbae975b",
  "placement": 84,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 75,
  "time_alive": 865,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 55,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 41,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 82,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 80,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 44,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 86,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 61,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 32,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 63,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 50,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 68,
  "time_alive": 786,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 83,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 58,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 59,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 64,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 44,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 65,
  "time_alive": 874,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "a0c59adac06b41049813df16964ab2de",
  "placement": 79,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "a0c59adac06b41049813df16964ab2de",
  "placement": 59,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "a0c59adac06b41049813df16964ab2de",
  "placement": 78,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "a0c59adac06b41049813df16964ab2de",
  "placement": 72,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "a0c59adac06b41049813df16964ab2de",
  "placement": 23,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "a0c59adac06b41049813df16964ab2de",
  "placement": 92,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 70,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 51,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 61,
  "time_alive": 924,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 30,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 70,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 88,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 63,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 33,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 68,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 42,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 80,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 82,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 41,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 52,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 22,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 90,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 78,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 76,
  "time_alive": 826,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 49,
  "time_alive": 1245,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 99,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 34,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 94,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 73,
  "time_alive": 859,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 57,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 96,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 85,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 66,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 48,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 88,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 73,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 54,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "68dd6373b1ee440684e0575e720a5fda",
  "placement": 35,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "68dd6373b1ee440684e0575e720a5fda",
  "placement": 62,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "68dd6373b1ee440684e0575e720a5fda",
  "placement": 69,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "68dd6373b1ee440684e0575e720a5fda",
  "placement": 83,
  "time_alive": 551,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "68dd6373b1ee440684e0575e720a5fda",
  "placement": 81,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 57,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 57,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 57,
  "time_alive": 999,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 78,
  "time_alive": 648,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "d6cbc91371d74e3cb1c23f22b94ff6c5",
  "placement": 82,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 72,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 66,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 93,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 87,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 63,
  "time_alive": 894,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 50,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 82,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 81,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 80,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 32,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 79,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 92,
  "time_alive": 500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 54,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 80,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 76,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 82,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 42,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "44e8e370019d41e7b4b8da7b46c2e2a7",
  "placement": 68,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "44e8e370019d41e7b4b8da7b46c2e2a7",
  "placement": 81,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "44e8e370019d41e7b4b8da7b46c2e2a7",
  "placement": 98,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "44e8e370019d41e7b4b8da7b46c2e2a7",
  "placement": 94,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "44e8e370019d41e7b4b8da7b46c2e2a7",
  "placement": 65,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "44e8e370019d41e7b4b8da7b46c2e2a7",
  "placement": 75,
  "time_alive": 559,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 74,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 93,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 83,
  "time_alive": 624,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 79,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 75,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 31,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 92,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 76,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 86,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 86,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 67,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1088081c-4e64-4902-823d-dc9302e0faa6",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 89,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019f32af-1dfc-4b2c-a4bb-c14dad6059be",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 97,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1daa91ce-5cbc-4bb3-bc3e-7db753acb552",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 92,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 89,
  "time_alive": 306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03167252-be24-40fa-8363-99f8f92b26df",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 90,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 4,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 4,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 3,
  "time_alive": 1520,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 95,
  "time_alive": 222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 21,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 2,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 1,
  "time_alive": 1523,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 24,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 48,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 59,
  "time_alive": 903,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 26,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 48,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 16,
  "time_alive": 1419,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 1,
  "time_alive": 1510,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 47,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 3,
  "time_alive": 1503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 18,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 3,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 46,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 18,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 1,
  "time_alive": 1532,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 14,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 48,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 5,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 2,
  "time_alive": 1523,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 27,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 21,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 16,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 16,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 12,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 86,
  "time_alive": 599,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 66,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 25,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 22,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 1,
  "time_alive": 1541,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 58,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 12,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 16,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 11,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 1,
  "time_alive": 1508,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 39,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 22,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 34,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 6,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 28,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 13,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 12,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 15,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 30,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 7,
  "time_alive": 1454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 34,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 20,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 5,
  "time_alive": 1527,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 46,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 13,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 3,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 18,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 9,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 38,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 99,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 91,
  "time_alive": 566,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 2,
  "time_alive": 1510,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 8,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 6,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 34,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 29,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 9,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 5,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 60,
  "time_alive": 888,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 27,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 4,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 55,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 22,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 2,
  "time_alive": 1532,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 55,
  "time_alive": 983,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 52,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 7,
  "time_alive": 1444,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 9,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 33,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 15,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 65,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 45,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 78,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1513,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 42,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 8,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 53,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 14,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 71,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 26,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 63,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 2,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 10,
  "time_alive": 1484,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 87,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 6,
  "time_alive": 1484,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 8,
  "time_alive": 1440,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 78,
  "time_alive": 835,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 40,
  "time_alive": 1277,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 62,
  "time_alive": 1025,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 8,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 51,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 41,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 12,
  "time_alive": 1443,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 57,
  "time_alive": 964,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 24,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 6,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 11,
  "time_alive": 1457,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 38,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 53,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 43,
  "time_alive": 1233,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 41,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 34,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 25,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 89,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 40,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 4,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 13,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 26,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 48,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 80,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 29,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 15,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 23,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 53,
  "time_alive": 1190,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 64,
  "time_alive": 989,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 14,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 4,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 31,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 68,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 51,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 92,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 56,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 67,
  "time_alive": 1010,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 12,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 4,
  "time_alive": 1527,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 49,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 5,
  "time_alive": 1491,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 31,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 23,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 49,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 81,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 21,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 20,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 71,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 20,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 96,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 25,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 75,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 37,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 10,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 32,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 18,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 40,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 62,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 40,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 23,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 16,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 10,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 37,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 91,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 28,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 94,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 22,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 25,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 9,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 38,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 66,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 81,
  "time_alive": 676,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 62,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 5,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 20,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 30,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 43,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 21,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 76,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 98,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 3,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 94,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 39,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 90,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 30,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 7,
  "time_alive": 1475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "19b6eb65afc6407fa2210cdce8cd39f9",
  "placement": 8,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 20,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 75,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 17,
  "time_alive": 1403,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 34,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 65,
  "time_alive": 1000,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 19,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 96,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 12,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 27,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 38,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 85,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 17,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 44,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 85,
  "time_alive": 517,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 11,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 29,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 17,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 65,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 32,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 10,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 74,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 88,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 16,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 45,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 39,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 24,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 47,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 18,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 50,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 46,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 19,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 68,
  "time_alive": 710,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 28,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 71,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 14,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 61,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 55,
  "time_alive": 1141,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 26,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "cc840c6454b84b958b9454d8104491b7",
  "placement": 57,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 93,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 10,
  "time_alive": 1461,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 35,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 56,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 90,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 33,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 56,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 79,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 47,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 14,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 17,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 44,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 74,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 8,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 92,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 36,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 30,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 46,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 66,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 73,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 13,
  "time_alive": 1417,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 82,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 75,
  "time_alive": 549,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 17,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 50,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 58,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 15,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 91,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 32,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "de4c84fec30e44fd8d37a114431e9a25",
  "placement": 73,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 9,
  "time_alive": 1428,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 61,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 59,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 38,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 71,
  "time_alive": 632,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 86,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 96,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 68,
  "time_alive": 931,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 91,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 97,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 46,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "647a22d530cd47e3804944d82e347a1f",
  "placement": 2,
  "time_alive": 1541,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 54,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 27,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 11,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 52,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 69,
  "time_alive": 703,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 56,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 25,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 56,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 64,
  "time_alive": 996,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 70,
  "time_alive": 927,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 89,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 14,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 36,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 62,
  "time_alive": 1032,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 28,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 9,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 77,
  "time_alive": 505,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 54,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 89,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 74,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 82,
  "time_alive": 672,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 93,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 56,
  "time_alive": 977,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 7,
  "time_alive": 1501,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 38,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 50,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 49,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 19,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 70,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 72,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 22,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 84,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 41,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 80,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 6,
  "time_alive": 1511,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 29,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 36,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 36,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 58,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 76,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 76,
  "time_alive": 759,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 90,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 60,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 67,
  "time_alive": 965,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 6,
  "time_alive": 1492,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 51,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 89,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 76,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 23,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 49,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 60,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 33,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 75,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 13,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 94,
  "time_alive": 536,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 37,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 68,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 91,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 74,
  "time_alive": 816,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 67,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 15,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 48,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 87,
  "time_alive": 487,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 41,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 67,
  "time_alive": 972,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 45,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 69,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 70,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 31,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 50,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 22,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 11,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 77,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 43,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 65,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 39,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 32,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 31,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 63,
  "time_alive": 999,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 61,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 70,
  "time_alive": 692,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 51,
  "time_alive": 1207,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 27,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 54,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 29,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 81,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 21,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 97,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 65,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 63,
  "time_alive": 991,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 42,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 72,
  "time_alive": 908,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 36,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 72,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 84,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 44,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 75,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 96,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 67,
  "time_alive": 748,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "394908d5888c4e598687f7f4f43594ef",
  "placement": 11,
  "time_alive": 1483,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 55,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 67,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 83,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 7,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 44,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 71,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 80,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 26,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 53,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 35,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 29,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "990be36c05b7441db2407b43335e1993",
  "placement": 49,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 28,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 24,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 34,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 92,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 66,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 61,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 92,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 19,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 77,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 17,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 48,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 69,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 33,
  "time_alive": 1345,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 85,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 25,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 69,
  "time_alive": 938,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 86,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 91,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 69,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 81,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 65,
  "time_alive": 991,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 43,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 28,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 31,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 59,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 33,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 19,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 80,
  "time_alive": 821,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 72,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 83,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 81,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 70,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 55,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 26,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 45,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 30,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 79,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 47,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 74,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 39,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 27,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 43,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 77,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 18,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 69,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 74,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 82,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "c98c02d0cd6e4c009ae65eb8705d3d1e",
  "placement": 19,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 64,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 21,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 52,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 98,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 93,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 15,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 23,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 89,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 51,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 66,
  "time_alive": 1014,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 37,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 77,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 98,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 99,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 57,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 13,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 61,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 58,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 70,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 7,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 100,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 59,
  "time_alive": 1090,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 85,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 95,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 39,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 35,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 72,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 90,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 84,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 50,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 68,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 42,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 62,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 57,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 47,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 36,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 24,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 49,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 96,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 77,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 42,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 42,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 83,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 41,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 79,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 83,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 24,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 32,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 35,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 57,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 20,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 86,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 100,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 55,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 60,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 88,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 40,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 44,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 64,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 92,
  "time_alive": 147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 42,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 72,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 30,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 75,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 78,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 64,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 52,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 97,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 95,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 99,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 23,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 80,
  "time_alive": 489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 47,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 87,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 45,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 37,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 79,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "d9bb1522642d4de58999f17c244e909a",
  "placement": 66,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 86,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 90,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 54,
  "time_alive": 1173,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 71,
  "time_alive": 911,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 54,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 59,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 40,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 52,
  "time_alive": 1181,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 88,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 88,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 92,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 90,
  "time_alive": 202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 82,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 32,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 73,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 51,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 88,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 37,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 78,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 60,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 95,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 87,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 63,
  "time_alive": 1019,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 43,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 84,
  "time_alive": 612,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 58,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 89,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 99,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 44,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 93,
  "time_alive": 549,
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
    