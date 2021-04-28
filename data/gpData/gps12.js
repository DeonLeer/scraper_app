const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 21,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 80,
  "time_alive": 746,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 1,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 40,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 90,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 41,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 4,
  "time_alive": 1488,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 19,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 34,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 59,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 82,
  "time_alive": 476,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 16,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 45,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 22,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 14,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 35,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 25,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 28,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 83,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 49,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 4,
  "time_alive": 1470,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 45,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 22,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 36,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 28,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 23,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 17,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 41,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 23,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 47,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 25,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 6,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 21,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 51,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 24,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 32,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 82,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 50,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 35,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 19,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 2,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 73,
  "time_alive": 882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 20,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 24,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 26,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 11,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 40,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 12,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 11,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 70,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 12,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 20,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 79,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 19,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 7,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 60,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 86,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 15,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 46,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 71,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 17,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 33,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 6,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 42,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 42,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 78,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 14,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 54,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 79,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 2,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 65,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 59,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 54,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 7,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 49,
  "time_alive": 1224,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 74,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 7,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 55,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 92,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 37,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 77,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 4,
  "time_alive": 1493,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 34,
  "time_alive": 1335,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 20,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 46,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 42,
  "time_alive": 1307,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 24,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 26,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 75,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 53,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 43,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 46,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 16,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 28,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 27,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e5556b3269cf4e3499198774adc4cac2",
  "placement": 18,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e5556b3269cf4e3499198774adc4cac2",
  "placement": 40,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e5556b3269cf4e3499198774adc4cac2",
  "placement": 11,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e5556b3269cf4e3499198774adc4cac2",
  "placement": 76,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e5556b3269cf4e3499198774adc4cac2",
  "placement": 63,
  "time_alive": 1077,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e5556b3269cf4e3499198774adc4cac2",
  "placement": 43,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 9,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 76,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 47,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 37,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 77,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "6dc4abc2f4a94af48b076a2aa7e40a1d",
  "placement": 9,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 31,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 5,
  "time_alive": 1486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 68,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 30,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 65,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 14,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 79,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 48,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 3,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 54,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 86,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 16,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 93,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 81,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 14,
  "time_alive": 1452,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 80,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 56,
  "time_alive": 1127,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 17,
  "time_alive": 1385,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 50,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 68,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 18,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 73,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 10,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "b9cb204096c741158f3bf5c7be127242",
  "placement": 23,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "b9cb204096c741158f3bf5c7be127242",
  "placement": 47,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "b9cb204096c741158f3bf5c7be127242",
  "placement": 40,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "b9cb204096c741158f3bf5c7be127242",
  "placement": 78,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "b9cb204096c741158f3bf5c7be127242",
  "placement": 7,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "b9cb204096c741158f3bf5c7be127242",
  "placement": 57,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 64,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 63,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 71,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 33,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 22,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 36,
  "time_alive": 1330,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 2,
  "time_alive": 1506,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 84,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 45,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 72,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 94,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 45,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "4651cbe1e28243109bf089c06a930847",
  "placement": 5,
  "time_alive": 1479,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "4651cbe1e28243109bf089c06a930847",
  "placement": 78,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "4651cbe1e28243109bf089c06a930847",
  "placement": 93,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "4651cbe1e28243109bf089c06a930847",
  "placement": 57,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "4651cbe1e28243109bf089c06a930847",
  "placement": 17,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "4651cbe1e28243109bf089c06a930847",
  "placement": 59,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 15,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 31,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 95,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 96,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 12,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 68,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 29,
  "time_alive": 1346,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 66,
  "time_alive": 1089,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 20,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 48,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 54,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 92,
  "time_alive": 529,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 64,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 69,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 32,
  "time_alive": 1348,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 13,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 41,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 42,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 50,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 5,
  "time_alive": 1483,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 61,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 31,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 89,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 26,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 99,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 52,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 63,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 49,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 5,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 98,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 19,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 82,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 45,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 24,
  "time_alive": 1404,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 60,
  "time_alive": 1048,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 48,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 2,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 81,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 59,
  "time_alive": 1115,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 62,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 63,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7f0121822b434cf3aff88296032e60f7",
  "placement": 52,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7f0121822b434cf3aff88296032e60f7",
  "placement": 49,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7f0121822b434cf3aff88296032e60f7",
  "placement": 73,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "7f0121822b434cf3aff88296032e60f7",
  "placement": 39,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7f0121822b434cf3aff88296032e60f7",
  "placement": 39,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7f0121822b434cf3aff88296032e60f7",
  "placement": 12,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 35,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 30,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 97,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 3,
  "time_alive": 1498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 99,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 22,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 91,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 51,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 15,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 54,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 48,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 46,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 15,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 59,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 60,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 93,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "98b57803073c45d3a6203d046c038d00",
  "placement": 21,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7e437d164c12461095709142df62a6f2",
  "placement": 57,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7e437d164c12461095709142df62a6f2",
  "placement": 74,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7e437d164c12461095709142df62a6f2",
  "placement": 88,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "7e437d164c12461095709142df62a6f2",
  "placement": 29,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7e437d164c12461095709142df62a6f2",
  "placement": 64,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7e437d164c12461095709142df62a6f2",
  "placement": 4,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 65,
  "time_alive": 1013,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 37,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 95,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 99,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 19,
  "time_alive": 1376,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 88,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 87,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 21,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 82,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 23,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 58,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "8ed368ddea2244bdac0be809299943af",
  "placement": 56,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "8ed368ddea2244bdac0be809299943af",
  "placement": 51,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "8ed368ddea2244bdac0be809299943af",
  "placement": 25,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "8ed368ddea2244bdac0be809299943af",
  "placement": 36,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "8ed368ddea2244bdac0be809299943af",
  "placement": 70,
  "time_alive": 893,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "8ed368ddea2244bdac0be809299943af",
  "placement": 56,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 66,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 52,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 57,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 9,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 37,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 55,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 84,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 89,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 8,
  "time_alive": 1471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 89,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 52,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 20,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 69,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 26,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 29,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 13,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 82,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 97,
  "time_alive": 153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 72,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 42,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 12,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 22,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 68,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 52,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 68,
  "time_alive": 1000,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 12,
  "time_alive": 1447,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 63,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 69,
  "time_alive": 940,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 95,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 83,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 13,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 32,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 77,
  "time_alive": 833,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 70,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 72,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 91,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 96,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 98,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 9,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 93,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 75,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 30,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 70,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 29,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 67,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 25,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 50,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 72,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 54,
  "time_alive": 1131,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 73,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 55,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 19,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 55,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 51,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 43,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 79,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 27,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 43,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 85,
  "time_alive": 732,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 39,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 61,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 8,
  "time_alive": 1462,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 87,
  "time_alive": 404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 90,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 89,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 81,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 30,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 71,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 44,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 56,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 61,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 62,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 74,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 53,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 13,
  "time_alive": 1456,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 83,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 91,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 69,
  "time_alive": 770,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "4fa2bb7641dc491fb214f3fa3256955c",
  "placement": 67,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "4fa2bb7641dc491fb214f3fa3256955c",
  "placement": 23,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "4fa2bb7641dc491fb214f3fa3256955c",
  "placement": 39,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "4fa2bb7641dc491fb214f3fa3256955c",
  "placement": 52,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "4fa2bb7641dc491fb214f3fa3256955c",
  "placement": 58,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "4fa2bb7641dc491fb214f3fa3256955c",
  "placement": 74,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 44,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 27,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 34,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 51,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 36,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 76,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 51,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 34,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 89,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 55,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 38,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 73,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 85,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 62,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 79,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 47,
  "time_alive": 1262,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 13,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 37,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 86,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 61,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 53,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 32,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 47,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "88d3f20d73f94ac7a50a3efae446a346",
  "placement": 83,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "88d3f20d73f94ac7a50a3efae446a346",
  "placement": 96,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "88d3f20d73f94ac7a50a3efae446a346",
  "placement": 76,
  "time_alive": 855,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "88d3f20d73f94ac7a50a3efae446a346",
  "placement": 23,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "88d3f20d73f94ac7a50a3efae446a346",
  "placement": 44,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "88d3f20d73f94ac7a50a3efae446a346",
  "placement": 37,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 91,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 77,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 10,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 88,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 46,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 84,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 75,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 60,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 10,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 98,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 77,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "7861bffdc6734c4fb4154959401fbd3d",
  "placement": 33,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "7861bffdc6734c4fb4154959401fbd3d",
  "placement": 33,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "7861bffdc6734c4fb4154959401fbd3d",
  "placement": 84,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "7861bffdc6734c4fb4154959401fbd3d",
  "placement": 64,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "7861bffdc6734c4fb4154959401fbd3d",
  "placement": 69,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "7861bffdc6734c4fb4154959401fbd3d",
  "placement": 35,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "9399af79b3864aeb88b2c5e87ce2af36",
  "placement": 58,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "9399af79b3864aeb88b2c5e87ce2af36",
  "placement": 58,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "9399af79b3864aeb88b2c5e87ce2af36",
  "placement": 91,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "9399af79b3864aeb88b2c5e87ce2af36",
  "placement": 48,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "9399af79b3864aeb88b2c5e87ce2af36",
  "placement": 21,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "9399af79b3864aeb88b2c5e87ce2af36",
  "placement": 88,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 62,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 90,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 64,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 75,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 43,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 64,
  "time_alive": 971,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 94,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 41,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 74,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 84,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 80,
  "time_alive": 830,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 38,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 14,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 85,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 74,
  "time_alive": 844,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 92,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 80,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 86,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 56,
  "time_alive": 1181,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 65,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 46,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 57,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "0051173d5a9340b5bc70b0a27151a282",
  "placement": 94,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 40,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 59,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 78,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 71,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 78,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 70,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "00450a5a239545278d5950f98e26dab5",
  "placement": 89,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "00450a5a239545278d5950f98e26dab5",
  "placement": 44,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "00450a5a239545278d5950f98e26dab5",
  "placement": 42,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "00450a5a239545278d5950f98e26dab5",
  "placement": 90,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "00450a5a239545278d5950f98e26dab5",
  "placement": 53,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "55409a1f01fc454e9d694a25923e6eab",
  "placement": 77,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "55409a1f01fc454e9d694a25923e6eab",
  "placement": 75,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "55409a1f01fc454e9d694a25923e6eab",
  "placement": 41,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "55409a1f01fc454e9d694a25923e6eab",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "55409a1f01fc454e9d694a25923e6eab",
  "placement": 87,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "55409a1f01fc454e9d694a25923e6eab",
  "placement": 85,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 76,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 35,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 85,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 85,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 71,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 71,
  "time_alive": 703,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 39,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 69,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 43,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 81,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 81,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 92,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 87,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 55,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 83,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 41,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 83,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 49,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 90,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 65,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 75,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 44,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 84,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "a6e890488b694635908cac0673f3e3af",
  "placement": 98,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 63,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 70,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 32,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 94,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 97,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 93,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 95,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 97,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 90,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 27,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 66,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "d76943a316194dfd8b3812bdc5ebc0c7",
  "placement": 87,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3a46bfa7b3174f7eacb9faf3413b10a0",
  "placement": 80,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3a46bfa7b3174f7eacb9faf3413b10a0",
  "placement": 67,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3a46bfa7b3174f7eacb9faf3413b10a0",
  "placement": 62,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3a46bfa7b3174f7eacb9faf3413b10a0",
  "placement": 91,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3a46bfa7b3174f7eacb9faf3413b10a0",
  "placement": 60,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3a46bfa7b3174f7eacb9faf3413b10a0",
  "placement": 95,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "913cc86daa8847fca423588439d816a1",
  "placement": 97,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "913cc86daa8847fca423588439d816a1",
  "placement": 93,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "913cc86daa8847fca423588439d816a1",
  "placement": 92,
  "time_alive": 199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "913cc86daa8847fca423588439d816a1",
  "placement": 65,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "913cc86daa8847fca423588439d816a1",
  "placement": 67,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "913cc86daa8847fca423588439d816a1",
  "placement": 96,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 82,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 88,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 38,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 87,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 88,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 78,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 100,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 95,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 58,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 92,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 96,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 50,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 99,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 21,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 1,
  "time_alive": 1532,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 57,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 53,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 7,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 16,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 5,
  "time_alive": 1516,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 36,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 78,
  "time_alive": 436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 27,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 69,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 1,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 1,
  "time_alive": 1536,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 22,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 55,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 7,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 59,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 9,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 4,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 63,
  "time_alive": 1070,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 31,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 3,
  "time_alive": 1517,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 14,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 22,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 35,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 4,
  "time_alive": 1517,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 4,
  "time_alive": 1532,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 11,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 29,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 18,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 6,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 57,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 8,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 18,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 54,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 6,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 39,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 34,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 6,
  "time_alive": 1494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 12,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 11,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 23,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 14,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 9,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 3,
  "time_alive": 1533,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 33,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 39,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 56,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 64,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 45,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 2,
  "time_alive": 1528,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 2,
  "time_alive": 1540,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "8e1ae38258e540f1828958f988182665",
  "placement": 48,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 28,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 24,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 7,
  "time_alive": 1494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 26,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 13,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 32,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 30,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 2,
  "time_alive": 1532,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 72,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 38,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 24,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "f75b5b38bd944c7cb2880116633ef447",
  "placement": 14,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 13,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 23,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 76,
  "time_alive": 526,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 35,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 3,
  "time_alive": 1524,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 36,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 33,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 18,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 11,
  "time_alive": 1480,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 10,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 6,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 19,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 5,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 56,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 31,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 15,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "de5c1a117dd64f71a7ba45d6c0ceb954",
  "placement": 45,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 42,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 7,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 90,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 29,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 8,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 11,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 27,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 92,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 23,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 1,
  "time_alive": 1528,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 75,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 34,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 8,
  "time_alive": 1494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 33,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 12,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 20,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 76,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 29,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 20,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 11,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 75,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 22,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 17,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 35,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 51,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 14,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 14,
  "time_alive": 1472,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 42,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 26,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 19,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 62,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 68,
  "time_alive": 993,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 28,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 13,
  "time_alive": 1442,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 68,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 8,
  "time_alive": 1460,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 18,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 52,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 9,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 59,
  "time_alive": 1111,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 18,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 51,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 12,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 22,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 5,
  "time_alive": 1490,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 77,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 24,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 25,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 44,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 37,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 25,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 4,
  "time_alive": 1521,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 43,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 16,
  "time_alive": 1435,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 27,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 41,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 23,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 22,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "5efc352d2cac4099bd6067467ac023bc",
  "placement": 38,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 46,
  "time_alive": 1252,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 40,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 70,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 70,
  "time_alive": 797,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 74,
  "time_alive": 672,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 3,
  "time_alive": 1497,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 22,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 45,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 66,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 6,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 73,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 27,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 40,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 85,
  "time_alive": 347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 40,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 40,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 12,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 20,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 7,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 69,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 39,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 19,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 48,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 33,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 68,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 10,
  "time_alive": 1471,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 19,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 50,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 41,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "fc2e48e58c23479c9c678976f87c33a0",
  "placement": 59,
  "time_alive": 1042,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 47,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 80,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 2,
  "time_alive": 1546,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 90,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 28,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 40,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 37,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 21,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 10,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 91,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 21,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "842fc135b4d64cada5c14f83aef3139e",
  "placement": 52,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 85,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 37,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 15,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 48,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 37,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "e8ee6b04f7c546bb9276741fd5de41ce",
  "placement": 12,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 10,
  "time_alive": 1477,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 61,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 89,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 45,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 87,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf",
  "placement": 17,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 57,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 35,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 58,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 16,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 16,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 37,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 55,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 60,
  "time_alive": 1097,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1546,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 94,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 66,
  "time_alive": 850,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 11,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 48,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 35,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 39,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 35,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 47,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 84,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 47,
  "time_alive": 1299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 73,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 8,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 43,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 13,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 17,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 95,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 18,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 93,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 80,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 10,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 92,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 91,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 74,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 72,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 1,
  "time_alive": 1540,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 69,
  "time_alive": 801,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 71,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 29,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 79,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 57,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 4,
  "time_alive": 1491,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 58,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 3,
  "time_alive": 1519,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 30,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 34,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 64,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 73,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 24,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 30,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 34,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 62,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 23,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "7ea98fba947845b7bdf43aefaad285c0",
  "placement": 25,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 2,
  "time_alive": 1536,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 94,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 80,
  "time_alive": 370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 71,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 82,
  "time_alive": 395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 21,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 15,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 88,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 33,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 49,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 78,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 15,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 76,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 67,
  "time_alive": 997,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 92,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 55,
  "time_alive": 1163,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 56,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 2,
  "time_alive": 1498,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 23,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 15,
  "time_alive": 1457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 52,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 24,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 47,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "769b86414a9c4eb894275fd958905deb",
  "placement": 70,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 65,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 53,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 46,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 14,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 38,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 46,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 38,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 51,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 48,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 9,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 70,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 61,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 43,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 58,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 5,
  "time_alive": 1501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 60,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 25,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 93,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 79,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 19,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 62,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 36,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 9,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 80,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 52,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 66,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 20,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 30,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 19,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 74,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 6,
  "time_alive": 1501,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 61,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 64,
  "time_alive": 1061,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 60,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 62,
  "time_alive": 886,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 82,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 81,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 51,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 4,
  "time_alive": 1493,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 36,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 55,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 45,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 25,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 42,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 78,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 34,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 39,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 83,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 54,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 17,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 57,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 31,
  "time_alive": 1354,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 30,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 97,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 87,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 60,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 51,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 27,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 5,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 72,
  "time_alive": 872,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 43,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 15,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 50,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 29,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 13,
  "time_alive": 1462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 81,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 21,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 81,
  "time_alive": 397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 84,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 32,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 78,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 71,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 68,
  "time_alive": 963,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 52,
  "time_alive": 1218,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "92074c2207244530acd285ed7f4b34a6",
  "placement": 26,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 67,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 56,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 16,
  "time_alive": 1450,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 44,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 65,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 53,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 69,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 16,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 24,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 63,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 63,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "ff57ce6cd35e4941b245bf918982e9a9",
  "placement": 64,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "24779f10f3d042099339874b887498f2",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "24779f10f3d042099339874b887498f2",
  "placement": 20,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "24779f10f3d042099339874b887498f2",
  "placement": 50,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "24779f10f3d042099339874b887498f2",
  "placement": 61,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "24779f10f3d042099339874b887498f2",
  "placement": 46,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "24779f10f3d042099339874b887498f2",
  "placement": 41,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 3,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 75,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 63,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 73,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 92,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 63,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 60,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 12,
  "time_alive": 1466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 93,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 28,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 40,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "e528a97fdf4548ee83e8c1441a6c72df",
  "placement": 77,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 73,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 70,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 32,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 47,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 49,
  "time_alive": 1227,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "7467ede6693e44f3a184c9046beb6763",
  "placement": 65,
  "time_alive": 863,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 41,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 55,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 13,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 54,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 85,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 78,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 63,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 79,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 38,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 80,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 20,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 49,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 44,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 83,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 47,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 81,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 5,
  "time_alive": 1503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "a5aacd58a1bd4a9ab4bc55fccba5df5e",
  "placement": 54,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 77,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 62,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 64,
  "time_alive": 936,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 17,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 45,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 92,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 34,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 28,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 59,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 32,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 51,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 57,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 53,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 65,
  "time_alive": 1020,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 25,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 43,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 66,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 31,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 49,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 41,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 74,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 61,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 75,
  "time_alive": 703,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 56,
  "time_alive": 1165,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 26,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 88,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 69,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 42,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 81,
  "time_alive": 259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "c3df22d0b54f4853be3d692ce2bab831",
  "placement": 75,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "c3df22d0b54f4853be3d692ce2bab831",
  "placement": 86,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "c3df22d0b54f4853be3d692ce2bab831",
  "placement": 87,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "c3df22d0b54f4853be3d692ce2bab831",
  "placement": 83,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "c3df22d0b54f4853be3d692ce2bab831",
  "placement": 67,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "c3df22d0b54f4853be3d692ce2bab831",
  "placement": 7,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 9,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 64,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 49,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 87,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 86,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 83,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "475a16c1efa54e0cb606e3400c73c40c",
  "placement": 81,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "475a16c1efa54e0cb606e3400c73c40c",
  "placement": 46,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "475a16c1efa54e0cb606e3400c73c40c",
  "placement": 44,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "475a16c1efa54e0cb606e3400c73c40c",
  "placement": 85,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "475a16c1efa54e0cb606e3400c73c40c",
  "placement": 10,
  "time_alive": 1465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "475a16c1efa54e0cb606e3400c73c40c",
  "placement": 60,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 88,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 76,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 21,
  "time_alive": 1422,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 88,
  "time_alive": 238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 90,
  "time_alive": 193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 86,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 90,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 31,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 68,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 56,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 32,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 76,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 98,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 8,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 94,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 65,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 95,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 67,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "87be2876e8cb4b67a1cd9bf2c8032eae",
  "placement": 31,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "87be2876e8cb4b67a1cd9bf2c8032eae",
  "placement": 38,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "87be2876e8cb4b67a1cd9bf2c8032eae",
  "placement": 29,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "87be2876e8cb4b67a1cd9bf2c8032eae",
  "placement": 79,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "87be2876e8cb4b67a1cd9bf2c8032eae",
  "placement": 68,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 36,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 82,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 36,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 41,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 44,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "63146c20ddbc4a288c6b05d2c4ae2f12",
  "placement": 72,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 26,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 77,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 54,
  "time_alive": 1202,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 96,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 88,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 82,
  "time_alive": 255,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 89,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 49,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 82,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 75,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 89,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "df4066d43d414a1b94b76ded562d2945",
  "placement": 28,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 95,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 30,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 90,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 87,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 50,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 77,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 37,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 89,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "aeeb016ee348486da6a293a6747c4c75",
  "placement": 48,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "aeeb016ee348486da6a293a6747c4c75",
  "placement": 93,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "aeeb016ee348486da6a293a6747c4c75",
  "placement": 83,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "aeeb016ee348486da6a293a6747c4c75",
  "placement": 89,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "aeeb016ee348486da6a293a6747c4c75",
  "placement": 53,
  "time_alive": 1214,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "aeeb016ee348486da6a293a6747c4c75",
  "placement": 44,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 61,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 74,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 95,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 46,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 71,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54",
  "placement": 79,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 96,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 17,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 91,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 86,
  "time_alive": 281,
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
    