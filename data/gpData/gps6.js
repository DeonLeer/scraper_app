const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 7,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 43,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 14,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 16,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 67,
  "time_alive": 563,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 37,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 93,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 13,
  "time_alive": 1355,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 17,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 7,
  "time_alive": 1355,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 5,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 5,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 62,
  "time_alive": 968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 15,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 33,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 8,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 53,
  "time_alive": 1024,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 10,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 36,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 22,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 7,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 14,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "ec18095be9b140cf86cc94dce830eeb0",
  "placement": 11,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 48,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 17,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 24,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 60,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 2,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 44,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 51,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 30,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 47,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 64,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 11,
  "time_alive": 1331,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 4,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 65,
  "time_alive": 994,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 65,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 29,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1445,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 93,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 84,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 33,
  "time_alive": 1325,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 77,
  "time_alive": 590,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 52,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 10,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 65,
  "time_alive": 485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 60,
  "time_alive": 446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 23,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 48,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 6,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 43,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 6,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 13,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 25,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 26,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 9,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 13,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 91,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 18,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 15,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 79,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 45,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 45,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 30,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 64,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 15,
  "time_alive": 1386,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 28,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 8,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 64,
  "time_alive": 511,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 8,
  "time_alive": 1339,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 35,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 1,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 9,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 46,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 3,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 45,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 54,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 27,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 32,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 57,
  "time_alive": 787,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 36,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d",
  "placement": 78,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 43,
  "time_alive": 1210,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 69,
  "time_alive": 657,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 69,
  "time_alive": 787,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 82,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 20,
  "time_alive": 1373,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 72,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 14,
  "time_alive": 1354,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 43,
  "time_alive": 1114,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 68,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 17,
  "time_alive": 1293,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 8,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 74,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 73,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 44,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 9,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 95,
  "time_alive": 51,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 30,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 53,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 39,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 4,
  "time_alive": 1399,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 9,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 46,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 28,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 87,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 87,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 89,
  "time_alive": 230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 57,
  "time_alive": 950,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 1,
  "time_alive": 1453,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 83,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 91,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 93,
  "time_alive": 123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 5,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 24,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 10,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 36,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 23,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 2,
  "time_alive": 1484,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 59,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 73,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 14,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 13,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 56,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 51,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 72,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 23,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 33,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 6,
  "time_alive": 1385,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 18,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 42,
  "time_alive": 1218,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 40,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 72,
  "time_alive": 517,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 32,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 72,
  "time_alive": 624,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 9,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 31,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 51,
  "time_alive": 928,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 70,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 23,
  "time_alive": 1270,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 80,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 75,
  "time_alive": 500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 8,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 97,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 71,
  "time_alive": 527,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 25,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 52,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 7,
  "time_alive": 1421,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 41,
  "time_alive": 1242,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 65,
  "time_alive": 554,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 13,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 22,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 55,
  "time_alive": 1056,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 11,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 3,
  "time_alive": 1481,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 76,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 49,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 30,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 31,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 59,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 69,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 74,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 19,
  "time_alive": 1292,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 28,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 40,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 80,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 54,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 41,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 22,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 7,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 42,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 40,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 1,
  "time_alive": 1428,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 58,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 30,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "22a8c0efd9be482893fd6569f4af87bb",
  "placement": 73,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 85,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 46,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 30,
  "time_alive": 1310,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 72,
  "time_alive": 582,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 29,
  "time_alive": 1282,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 42,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 36,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 3,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 63,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 28,
  "time_alive": 1266,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 51,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 66,
  "time_alive": 388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 66,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 12,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 67,
  "time_alive": 821,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 83,
  "time_alive": 420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 19,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 20,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 16,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 22,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 2,
  "time_alive": 1428,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 21,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 34,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 1,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 34,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 53,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 54,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 65,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 73,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 58,
  "time_alive": 1071,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 46,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 50,
  "time_alive": 937,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 45,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 76,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 49,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 13,
  "time_alive": 1357,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 76,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 48,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 35,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 21,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 28,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 20,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 34,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 82,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 2,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 49,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 30,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 14,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 35,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 22,
  "time_alive": 1310,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 26,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 18,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 60,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 87,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 30,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 67,
  "time_alive": 455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 15,
  "time_alive": 1300,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 63,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 24,
  "time_alive": 1320,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 93,
  "time_alive": 63,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 13,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 88,
  "time_alive": 252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 39,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 2,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 67,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 8,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 69,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 87,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 45,
  "time_alive": 802,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 41,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 51,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 84,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 11,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 37,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 54,
  "time_alive": 1012,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 70,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 14,
  "time_alive": 1387,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 4,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 20,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 26,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "bb425d8158204c68a0d5ced50b1da0b2",
  "placement": 35,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 29,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 5,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 11,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 29,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 60,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 38,
  "time_alive": 1266,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 12,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 65,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 48,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 12,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 22,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 44,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 54,
  "time_alive": 1068,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 78,
  "time_alive": 439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 10,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 49,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 43,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 93,
  "time_alive": 62,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 57,
  "time_alive": 992,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 10,
  "time_alive": 1397,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 10,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 32,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 60,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 21,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 91,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 88,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 32,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 64,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 15,
  "time_alive": 1357,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 69,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 29,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 89,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 75,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 6,
  "time_alive": 1349,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 74,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 47,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 5,
  "time_alive": 1458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 95,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 1,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 46,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 93,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 18,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 54,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 89,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 66,
  "time_alive": 466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 92,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 57,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 6,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 51,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 66,
  "time_alive": 779,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 59,
  "time_alive": 854,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 56,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 26,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 76,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 29,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 38,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 12,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 29,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 75,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 92,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 33,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 38,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 82,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 90,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 59,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 50,
  "time_alive": 1188,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 45,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 11,
  "time_alive": 1342,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 28,
  "time_alive": 1257,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 30,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 16,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 8,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 55,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 47,
  "time_alive": 1168,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 34,
  "time_alive": 1271,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 35,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 18,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 86,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 24,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 52,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 40,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 21,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 94,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 95,
  "time_alive": 51,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 63,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 34,
  "time_alive": 1272,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 94,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 77,
  "time_alive": 413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 19,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 82,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 12,
  "time_alive": 1365,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 37,
  "time_alive": 1188,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 17,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "48159c43fd5745979719ede26f05e3a9",
  "placement": 84,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 78,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 37,
  "time_alive": 1269,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 74,
  "time_alive": 537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 23,
  "time_alive": 1335,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 57,
  "time_alive": 899,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 61,
  "time_alive": 891,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 57,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 72,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 54,
  "time_alive": 856,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 78,
  "time_alive": 269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 38,
  "time_alive": 903,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 26,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 45,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 12,
  "time_alive": 1356,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 40,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 88,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 56,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 52,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 91,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 76,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 83,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "9f5340a9fe76409aad5ebe1f6961cfed",
  "placement": 13,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 31,
  "time_alive": 1275,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 93,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 49,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 8,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 98,
  "time_alive": 67,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 9,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 87,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 6,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 21,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 36,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 85,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f4124fe326fa45b196fc144a73859bab",
  "placement": 65,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 9,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 31,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 56,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 6,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 44,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 6,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 71,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 78,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 67,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 16,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 21,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 27,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 14,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 70,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 68,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 3,
  "time_alive": 1438,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 45,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 28,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 53,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 31,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 59,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 46,
  "time_alive": 1065,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 71,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac",
  "placement": 59,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 4,
  "time_alive": 1399,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 44,
  "time_alive": 1200,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 56,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 81,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 49,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 9,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 51,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 61,
  "time_alive": 665,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 76,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 82,
  "time_alive": 244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 38,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 64,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 80,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 68,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 58,
  "time_alive": 923,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 58,
  "time_alive": 837,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 22,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 94,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 15,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 56,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 38,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 2,
  "time_alive": 1380,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 33,
  "time_alive": 1264,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 57,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 82,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 36,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 84,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 31,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 97,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 32,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 7,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 22,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 10,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 26,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 44,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 22,
  "time_alive": 1326,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 59,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 2,
  "time_alive": 1445,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 89,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 43,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 96,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 79,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 57,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 78,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 69,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8569b5586af14c49987b1b37f137daf3",
  "placement": 56,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 39,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 41,
  "time_alive": 1259,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 18,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 21,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 36,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 52,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 17,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 12,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 26,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 49,
  "time_alive": 960,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 27,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "613c6bb926094bf79fac51db7d06da3e",
  "placement": 67,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 11,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 42,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 12,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 53,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 53,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 66,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 79,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 8,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 43,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 33,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 52,
  "time_alive": 785,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 48,
  "time_alive": 674,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 93,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 72,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 92,
  "time_alive": 67,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 96,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 68,
  "time_alive": 561,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 5,
  "time_alive": 1410,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 44,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 35,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 64,
  "time_alive": 708,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 45,
  "time_alive": 1075,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 49,
  "time_alive": 876,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 62,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 77,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 10,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 26,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 35,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 48,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 61,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 84,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 4,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 86,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 73,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 31,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 7,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 90,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 49,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 32,
  "time_alive": 1304,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 77,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 87,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 60,
  "time_alive": 756,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 68,
  "time_alive": 829,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 38,
  "time_alive": 1261,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 73,
  "time_alive": 559,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 59,
  "time_alive": 720,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 50,
  "time_alive": 833,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 42,
  "time_alive": 831,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 92,
  "time_alive": 167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 40,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 18,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 10,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 64,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 88,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 39,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 20,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 66,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 32,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 40,
  "time_alive": 866,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 67,
  "time_alive": 872,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 61,
  "time_alive": 976,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 22,
  "time_alive": 1330,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 55,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 94,
  "time_alive": 58,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 86,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 46,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 38,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 18,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 5,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 54,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 68,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 36,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 51,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 21,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 41,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 76,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 28,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 35,
  "time_alive": 1278,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 70,
  "time_alive": 417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 33,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 25,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 27,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 25,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 31,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 52,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 41,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 85,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 46,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 44,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 66,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 6,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 15,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 16,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 72,
  "time_alive": 777,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 21,
  "time_alive": 1327,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 65,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 100,
  "time_alive": 65,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 7,
  "time_alive": 1418,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 81,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 29,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 62,
  "time_alive": 997,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 95,
  "time_alive": 76,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 94,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 88,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "d3e44df2bd6942978df68fbeb0e6a65e",
  "placement": 81,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 22,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 76,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 86,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 10,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 14,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 26,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 49,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 61,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 11,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 41,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 43,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a",
  "placement": 75,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 89,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 84,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 28,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 5,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 25,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 65,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 43,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 88,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 16,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 47,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 53,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 31,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 10,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 38,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 62,
  "time_alive": 917,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 16,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 62,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 50,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 45,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 23,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 71,
  "time_alive": 417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 39,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 55,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 83,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 86,
  "time_alive": 296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 86,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 89,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 90,
  "time_alive": 238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 37,
  "time_alive": 1265,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 6,
  "time_alive": 1412,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 81,
  "time_alive": 311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 47,
  "time_alive": 942,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 83,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 64,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 30,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 16,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 20,
  "time_alive": 1316,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 70,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 11,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 55,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 60,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 79,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 86,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8a6fee924d4e44f083085289237d8b61",
  "placement": 57,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 45,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 21,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 73,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 55,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 12,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 41,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 54,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 82,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 60,
  "time_alive": 692,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 4,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 19,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 43,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 44,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 31,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 56,
  "time_alive": 973,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 24,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 63,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 17,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 70,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 23,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 74,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 12,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 95,
  "time_alive": 73,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 89,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 46,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 19,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 27,
  "time_alive": 1321,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 63,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 14,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 75,
  "time_alive": 335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8cc7e667fd0a40bf86eb84d9b45bc23a",
  "placement": 43,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 52,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 33,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 78,
  "time_alive": 489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 42,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 90,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 10,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 99,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 48,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 94,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 92,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 90,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 19,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 60,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 85,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 66,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 94,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 74,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 33,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 65,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 83,
  "time_alive": 442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 49,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 19,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 72,
  "time_alive": 398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "816a8580365849f184f3a23392d763c9",
  "placement": 24,
  "time_alive": 1265,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 82,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 71,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 75,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 26,
  "time_alive": 1298,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 50,
  "time_alive": 1109,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 85,
  "time_alive": 384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 43,
  "time_alive": 1226,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 80,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 48,
  "time_alive": 1013,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 73,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 36,
  "time_alive": 936,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 25,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 77,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 23,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 93,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 12,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 91,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 38,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 80,
  "time_alive": 524,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 61,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 62,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 62,
  "time_alive": 531,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "b952068bc7b447e9a97980395208739d",
  "placement": 79,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 51,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 39,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 34,
  "time_alive": 1291,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 15,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 75,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 51,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 58,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 33,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 78,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 40,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 55,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "63a522d71c124c3e9cf50f1920ebcf49",
  "placement": 52,
  "time_alive": 568,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 71,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 94,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 13,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 88,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 67,
  "time_alive": 572,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 16,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 11,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 34,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 60,
  "time_alive": 819,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 53,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "8ce1ac8fe7304a67922ddb71143c7a1d",
  "placement": 61,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 87,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 55,
  "time_alive": 1087,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 64,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 69,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 20,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 79,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 47,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 19,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 65,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 63,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 63,
  "time_alive": 515,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 41,
  "time_alive": 840,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 69,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 88,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 50,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 61,
  "time_alive": 1021,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 46,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 86,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 23,
  "time_alive": 1357,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 64,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 33,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 24,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 35,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 39,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 34,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 15,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 61,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 98,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 80,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 68,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 66,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 49,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 42,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 44,
  "time_alive": 1086,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 18,
  "time_alive": 1293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "16246c7d107843068d09b8505e01e1a2",
  "placement": 68,
  "time_alive": 359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 79,
  "time_alive": 615,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 54,
  "time_alive": 1100,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 62,
  "time_alive": 1019,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 51,
  "time_alive": 1056,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 29,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 32,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 71,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 76,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 85,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 80,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 84,
  "time_alive": 529,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 68,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 90,
  "time_alive": 78,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 91,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 85,
  "time_alive": 288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 82,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 40,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 45,
  "time_alive": 1214,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 55,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 96,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 29,
  "time_alive": 1256,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "28afbc31390f458ebaa094a774e5e5d7",
  "placement": 85,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 32,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 59,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 14,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 24,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 17,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 76,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 34,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 25,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 53,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 39,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 42,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 70,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 50,
  "time_alive": 1163,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 67,
  "time_alive": 778,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 32,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 55,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 80,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 81,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 18,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 68,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 46,
  "time_alive": 985,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 47,
  "time_alive": 738,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 24,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 26,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 85,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 87,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 69,
  "time_alive": 550,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 62,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 94,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 74,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 37,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 87,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 58,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 51,
  "time_alive": 602,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 76,
  "time_alive": 710,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 90,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 17,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 81,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 24,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 34,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 27,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 74,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 25,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 89,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 77,
  "time_alive": 276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 81,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 82,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 79,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 39,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 13,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 72,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 73,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 63,
  "time_alive": 952,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 27,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 31,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 61,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "f07fc0ecbf134d53820e16de15a2323b",
  "placement": 50,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 62,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 52,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 20,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 25,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 39,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 40,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 35,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 92,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 90,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 29,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 81,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "d7947383d34b4a1c8dab936994c1865a",
  "placement": 64,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 17,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 50,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 77,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 92,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 91,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 48,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 21,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 69,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 56,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 15,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 25,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a",
  "placement": 63,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 58,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 28,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 57,
  "time_alive": 1015,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 50,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 63,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 71,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 14,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 55,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 87,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 26,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 59,
  "time_alive": 583,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 91,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 19,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 74,
  "time_alive": 618,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 90,
  "time_alive": 205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 92,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 59,
  "time_alive": 789,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 74,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 84,
  "time_alive": 264,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 91,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 84,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 94,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 70,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 75,
  "time_alive": 526,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 33,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 19,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 24,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 41,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 71,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 67,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 48,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "fba543ddcd5647a8ad544c46fa534694",
  "placement": 58,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 96,
  "time_alive": 72,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 60,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 48,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 78,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 54,
  "time_alive": 1019,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 47,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 89,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 21,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 83,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 84,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 20,
  "time_alive": 1290,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 53,
  "time_alive": 556,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 73,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 83,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 83,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 79,
  "time_alive": 484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 79,
  "time_alive": 377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 80,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 77,
  "time_alive": 531,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 73,
  "time_alive": 780,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 77,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 79,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 41,
  "time_alive": 1154,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 93,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 81,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 41,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 71,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 96,
  "time_alive": 77,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 74,
  "time_alive": 424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 92,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 70,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 88,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 80,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 44,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "209aeb4bff884df59abc29adac862913",
  "placement": 72,
  "time_alive": 331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 59,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 67,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 36,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 70,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 61,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 70,
  "time_alive": 485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 75,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 84,
  "time_alive": 408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 44,
  "time_alive": 1205,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 77,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 57,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 90,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 20,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 29,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 71,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 84,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 18,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 87,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 67,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 68,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 58,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 95,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "eb224e0254af437bb0c96ecca313d684",
  "placement": 91,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 58,
  "time_alive": 1026,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 52,
  "time_alive": 1164,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 63,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 77,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 82,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 90,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 25,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 69,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 86,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 20,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 58,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 30,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 97,
  "time_alive": 68,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 75,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 78,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 85,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "c6e023964c90491f83af2ab18809c099",
  "placement": 83,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 46,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 66,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 89,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 85,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 66,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 78,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 91,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 75,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 50,
  "time_alive": 1167,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 35,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 93,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "e3771c7eae3a423aa66edaeff888de76",
  "placement": 88,
  "time_alive": 177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 97,
  "time_alive": 59,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 73,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 60,
  "time_alive": 999,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 80,
  "time_alive": 434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 42,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 92,
  "time_alive": 70,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 95,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 95,
  "time_alive": 85,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 81,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 88,
  "time_alive": 233,
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
    