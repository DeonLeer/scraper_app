const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 91,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1529,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 78,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 15,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 29,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 12,
  "time_alive": 1497,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 10,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 62,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 1,
  "time_alive": 1564,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 10,
  "time_alive": 1493,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 32,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 67,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 28,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 4,
  "time_alive": 1509,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 14,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 3,
  "time_alive": 1525,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 24,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 32,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 8,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 25,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 11,
  "time_alive": 1499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 9,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 17,
  "time_alive": 1455,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 26,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 3,
  "time_alive": 1505,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 53,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "aed693dbe097478cbdb38b317025eb06",
  "placement": 34,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 4,
  "time_alive": 1512,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 8,
  "time_alive": 1529,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 35,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 23,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 19,
  "time_alive": 1452,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 43,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 20,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 77,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 4,
  "time_alive": 1492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 3,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 7,
  "time_alive": 1535,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 2,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 6,
  "time_alive": 1519,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 30,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 29,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 32,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 28,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 6,
  "time_alive": 1505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 89,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 11,
  "time_alive": 1507,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 46,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 7,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "9d603ecc657d439a82c794e733604379",
  "placement": 4,
  "time_alive": 1556,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 27,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 31,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 36,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 25,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 8,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 10,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 41,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 54,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 1,
  "time_alive": 1561,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 23,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 26,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 30,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 50,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 33,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 29,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 5,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 15,
  "time_alive": 1467,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 50,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 5,
  "time_alive": 1512,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 4,
  "time_alive": 1542,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 83,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 53,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 34,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 25,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 13,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 15,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 6,
  "time_alive": 1534,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 37,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 79,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 38,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 79,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 18,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 13,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 56,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1529,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 40,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 17,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 3,
  "time_alive": 1552,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 27,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 36,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "3750138919cb423db8deeffebe52c4ed",
  "placement": 41,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 74,
  "time_alive": 601,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 21,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 71,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 7,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 21,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "a396550c25134720b4530089ee26fe35",
  "placement": 6,
  "time_alive": 1547,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 11,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 57,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 61,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 21,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 14,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 9,
  "time_alive": 1514,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 38,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 71,
  "time_alive": 874,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 39,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 49,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 24,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 5,
  "time_alive": 1550,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 26,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 73,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 7,
  "time_alive": 1530,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 34,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 9,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 21,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 12,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 9,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 14,
  "time_alive": 1475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 76,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 22,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "22e8a84b8c24463f9c820f7a0f2aa031",
  "placement": 37,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 48,
  "time_alive": 1242,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 91,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 3,
  "time_alive": 1558,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 43,
  "time_alive": 1268,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 63,
  "time_alive": 811,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "38cb321847844c1faacf68da221378c8",
  "placement": 74,
  "time_alive": 296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 30,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 25,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 17,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 22,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 69,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 23,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 21,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 16,
  "time_alive": 1458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 21,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 24,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 72,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "02a3f70000cf4cb1b019bb3b248e9204",
  "placement": 17,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 7,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 44,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 52,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 12,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 57,
  "time_alive": 1054,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 29,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 8,
  "time_alive": 1498,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 60,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 10,
  "time_alive": 1511,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 54,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 28,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "5df1dd01d2b94ba882a9ce65371b536f",
  "placement": 71,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 52,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 2,
  "time_alive": 1556,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 19,
  "time_alive": 1448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 51,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 71,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 8,
  "time_alive": 1515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 88,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 58,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 42,
  "time_alive": 1267,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 6,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 86,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 2,
  "time_alive": 1564,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 32,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 63,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 22,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 19,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 61,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 20,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 35,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 13,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 15,
  "time_alive": 1437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 51,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 27,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 34,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 39,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 38,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 2,
  "time_alive": 1520,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 46,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 67,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 19,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 72,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 48,
  "time_alive": 1169,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 14,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 13,
  "time_alive": 1474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 72,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 28,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 93,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 50,
  "time_alive": 1164,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 11,
  "time_alive": 1470,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 66,
  "time_alive": 748,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 52,
  "time_alive": 938,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 33,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 36,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 15,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 82,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 12,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 62,
  "time_alive": 586,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 55,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 68,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 18,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 40,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 6,
  "time_alive": 1501,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 26,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 59,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1495,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 41,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 96,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 17,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 35,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 46,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 70,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 9,
  "time_alive": 1518,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 74,
  "time_alive": 376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 81,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 18,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 36,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 5,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 86,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 67,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 27,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 46,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 96,
  "time_alive": 104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 8,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 37,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 17,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 49,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 88,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 93,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 7,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 23,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 73,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 29,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "d80c1f1477a04b03b30c27f2b639f3fe",
  "placement": 22,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 67,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 49,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 24,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 50,
  "time_alive": 1169,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 19,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 92,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 14,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 62,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 53,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 52,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 16,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "08fcd0b5ac454fd5a01fb8dd414d9266",
  "placement": 66,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 47,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 14,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 75,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 27,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 48,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832",
  "placement": 63,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 58,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 12,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 84,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 41,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 43,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 16,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 69,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 52,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 5,
  "time_alive": 1535,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 58,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 42,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 48,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 22,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 40,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 43,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 93,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 18,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 89,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 72,
  "time_alive": 715,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 88,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 4,
  "time_alive": 1543,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 66,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 65,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "be03142be77848bbbf7f43c8517f01a9",
  "placement": 47,
  "time_alive": 1087,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 77,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 11,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 33,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 39,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 44,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "3d44e063346c4ac2aa642cace132b98d",
  "placement": 56,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "2198f724f8014b328b58a5aa6bdfc7e7",
  "placement": 45,
  "time_alive": 1280,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "2198f724f8014b328b58a5aa6bdfc7e7",
  "placement": 45,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "2198f724f8014b328b58a5aa6bdfc7e7",
  "placement": 69,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "2198f724f8014b328b58a5aa6bdfc7e7",
  "placement": 44,
  "time_alive": 1238,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "2198f724f8014b328b58a5aa6bdfc7e7",
  "placement": 67,
  "time_alive": 706,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "2198f724f8014b328b58a5aa6bdfc7e7",
  "placement": 45,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 64,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 26,
  "time_alive": 1408,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 78,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 42,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 36,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 51,
  "time_alive": 952,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 66,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 50,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 65,
  "time_alive": 833,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 78,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 10,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 31,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "156fffa4c68b48c8836352fb825457fc",
  "placement": 39,
  "time_alive": 1313,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "156fffa4c68b48c8836352fb825457fc",
  "placement": 61,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "156fffa4c68b48c8836352fb825457fc",
  "placement": 45,
  "time_alive": 1239,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "156fffa4c68b48c8836352fb825457fc",
  "placement": 45,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "156fffa4c68b48c8836352fb825457fc",
  "placement": 84,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "156fffa4c68b48c8836352fb825457fc",
  "placement": 61,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 23,
  "time_alive": 1415,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 47,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 81,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 75,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 68,
  "time_alive": 699,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 91,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 16,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 42,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 70,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 33,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 70,
  "time_alive": 676,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 80,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 82,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 75,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 35,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 65,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 45,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 12,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 54,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 53,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 60,
  "time_alive": 996,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 81,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 41,
  "time_alive": 1325,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 24,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 37,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 82,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 85,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 84,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 20,
  "time_alive": 1442,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 53,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "e569287851954e8eb6a29a7d1c85c33f",
  "placement": 40,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "e569287851954e8eb6a29a7d1c85c33f",
  "placement": 48,
  "time_alive": 1250,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "e569287851954e8eb6a29a7d1c85c33f",
  "placement": 82,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "e569287851954e8eb6a29a7d1c85c33f",
  "placement": 62,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "e569287851954e8eb6a29a7d1c85c33f",
  "placement": 35,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "e569287851954e8eb6a29a7d1c85c33f",
  "placement": 49,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "1777879d3761493fb0684bdceadc0f25",
  "placement": 57,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "1777879d3761493fb0684bdceadc0f25",
  "placement": 41,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "1777879d3761493fb0684bdceadc0f25",
  "placement": 59,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "1777879d3761493fb0684bdceadc0f25",
  "placement": 88,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "1777879d3761493fb0684bdceadc0f25",
  "placement": 11,
  "time_alive": 1488,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "1777879d3761493fb0684bdceadc0f25",
  "placement": 83,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 87,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 67,
  "time_alive": 1061,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 92,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 20,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 40,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 58,
  "time_alive": 754,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 69,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 94,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 9,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 90,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 42,
  "time_alive": 1220,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "893b94e5e10d45d4ad414ade33cbdc22",
  "placement": 49,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "893b94e5e10d45d4ad414ade33cbdc22",
  "placement": 76,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "893b94e5e10d45d4ad414ade33cbdc22",
  "placement": 79,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "893b94e5e10d45d4ad414ade33cbdc22",
  "placement": 13,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "893b94e5e10d45d4ad414ade33cbdc22",
  "placement": 50,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "893b94e5e10d45d4ad414ade33cbdc22",
  "placement": 75,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 18,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 79,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 16,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 55,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 65,
  "time_alive": 505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "d8b8165cebf348f7a2aef4e5cf621da9",
  "placement": 71,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "d8b8165cebf348f7a2aef4e5cf621da9",
  "placement": 35,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "d8b8165cebf348f7a2aef4e5cf621da9",
  "placement": 80,
  "time_alive": 403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "d8b8165cebf348f7a2aef4e5cf621da9",
  "placement": 57,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "d8b8165cebf348f7a2aef4e5cf621da9",
  "placement": 39,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "d8b8165cebf348f7a2aef4e5cf621da9",
  "placement": 43,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 24,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 38,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 89,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 48,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 38,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 85,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 44,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 80,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 66,
  "time_alive": 786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 77,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 30,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "d06f83ea140a40bd91cd13112d24d816",
  "placement": 36,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 62,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 64,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 28,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 69,
  "time_alive": 493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 85,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 33,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 83,
  "time_alive": 451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 97,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 76,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 63,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 47,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 15,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 92,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 96,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 20,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 31,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 91,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 59,
  "time_alive": 701,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 29,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 46,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 54,
  "time_alive": 1117,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 47,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 75,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "038f53798d634710a14c1c4be4b73700",
  "placement": 70,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 94,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 19,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 58,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 60,
  "time_alive": 1057,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 76,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 86,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 86,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 81,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 25,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 71,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 31,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 79,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 80,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 99,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 44,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 18,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 60,
  "time_alive": 889,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "24b33ade27704fde92f2ba934280cbda",
  "placement": 60,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 31,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 28,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 90,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 80,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 52,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 39,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 91,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 77,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 34,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 26,
  "time_alive": 1385,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 88,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 77,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2",
  "placement": 42,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2",
  "placement": 34,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2",
  "placement": 55,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2",
  "placement": 68,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2",
  "placement": 89,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2",
  "placement": 69,
  "time_alive": 350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "fd73d43bcaa74671b424bfba177e563f",
  "placement": 85,
  "time_alive": 245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "fd73d43bcaa74671b424bfba177e563f",
  "placement": 23,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "fd73d43bcaa74671b424bfba177e563f",
  "placement": 62,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "fd73d43bcaa74671b424bfba177e563f",
  "placement": 55,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "fd73d43bcaa74671b424bfba177e563f",
  "placement": 64,
  "time_alive": 797,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "fd73d43bcaa74671b424bfba177e563f",
  "placement": 87,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "8f2a1599474a464785c3bcdda6110f04",
  "placement": 73,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "8f2a1599474a464785c3bcdda6110f04",
  "placement": 55,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "8f2a1599474a464785c3bcdda6110f04",
  "placement": 72,
  "time_alive": 580,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "8f2a1599474a464785c3bcdda6110f04",
  "placement": 30,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "8f2a1599474a464785c3bcdda6110f04",
  "placement": 56,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "8f2a1599474a464785c3bcdda6110f04",
  "placement": 32,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5277fa137aec4aa89277da0fd1632776",
  "placement": 53,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5277fa137aec4aa89277da0fd1632776",
  "placement": 37,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5277fa137aec4aa89277da0fd1632776",
  "placement": 49,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "5277fa137aec4aa89277da0fd1632776",
  "placement": 89,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5277fa137aec4aa89277da0fd1632776",
  "placement": 54,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "5277fa137aec4aa89277da0fd1632776",
  "placement": 68,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 56,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 27,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 57,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 32,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "b345733da041497bb09e945d4861e121",
  "placement": 78,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "0eae3d457e594c1594bc1127e28312ac",
  "placement": 78,
  "time_alive": 529,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "0eae3d457e594c1594bc1127e28312ac",
  "placement": 59,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "0eae3d457e594c1594bc1127e28312ac",
  "placement": 46,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "0eae3d457e594c1594bc1127e28312ac",
  "placement": 72,
  "time_alive": 385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "0eae3d457e594c1594bc1127e28312ac",
  "placement": 33,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "0eae3d457e594c1594bc1127e28312ac",
  "placement": 90,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "4f4002197c8b46f5a940861ceb96ffed",
  "placement": 98,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "4f4002197c8b46f5a940861ceb96ffed",
  "placement": 95,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "4f4002197c8b46f5a940861ceb96ffed",
  "placement": 16,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "4f4002197c8b46f5a940861ceb96ffed",
  "placement": 95,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "4f4002197c8b46f5a940861ceb96ffed",
  "placement": 95,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "4f4002197c8b46f5a940861ceb96ffed",
  "placement": 57,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "38f0303c44834ec48d1e37505d49a98e",
  "placement": 89,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "38f0303c44834ec48d1e37505d49a98e",
  "placement": 56,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "38f0303c44834ec48d1e37505d49a98e",
  "placement": 51,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "38f0303c44834ec48d1e37505d49a98e",
  "placement": 59,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "38f0303c44834ec48d1e37505d49a98e",
  "placement": 77,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "38f0303c44834ec48d1e37505d49a98e",
  "placement": 54,
  "time_alive": 883,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 63,
  "time_alive": 1051,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 87,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 88,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 64,
  "time_alive": 897,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 58,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "d96664aec40e4bb4af7c154c7c9b4789",
  "placement": 73,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "38023bdd54ba4220895f0dd79770a282",
  "placement": 68,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "38023bdd54ba4220895f0dd79770a282",
  "placement": 90,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "38023bdd54ba4220895f0dd79770a282",
  "placement": 63,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "38023bdd54ba4220895f0dd79770a282",
  "placement": 70,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "38023bdd54ba4220895f0dd79770a282",
  "placement": 80,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "38023bdd54ba4220895f0dd79770a282",
  "placement": 44,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 95,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 98,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 74,
  "time_alive": 568,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 90,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 37,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "31477684b9524d49974d004c268e7ad9",
  "placement": 81,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0",
  "placement": 76,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0",
  "placement": 51,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0",
  "placement": 73,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0",
  "placement": 61,
  "time_alive": 1047,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0",
  "placement": 92,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 61,
  "time_alive": 1076,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 94,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 75,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 92,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 64,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 59,
  "time_alive": 899,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646",
  "placement": 51,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646",
  "placement": 66,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646",
  "placement": 87,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646",
  "placement": 85,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646",
  "placement": 87,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646",
  "placement": 55,
  "time_alive": 878,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 84,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 85,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 56,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 83,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 73,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "e0411f07656c48769d20899f624db3a3",
  "placement": 60,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "e0411f07656c48769d20899f624db3a3",
  "placement": 84,
  "time_alive": 481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "e0411f07656c48769d20899f624db3a3",
  "placement": 93,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "e0411f07656c48769d20899f624db3a3",
  "placement": 79,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "e0411f07656c48769d20899f624db3a3",
  "placement": 94,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "e0411f07656c48769d20899f624db3a3",
  "placement": 76,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 70,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 86,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 95,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 87,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 82,
  "time_alive": 338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "b0f4ccb62115498dba493260111e7845",
  "placement": 84,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 65,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 65,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 96,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "7f20d3c92b944099a68df237f90073ce",
  "placement": 81,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "7f20d3c92b944099a68df237f90073ce",
  "placement": 74,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "7f20d3c92b944099a68df237f90073ce",
  "placement": 68,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "7f20d3c92b944099a68df237f90073ce",
  "placement": 94,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0af11282-6266-4694-b915-175c8327e783",
  "team_id": "e0f759d15d9241cfafa3c509994b3114",
  "placement": 90,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "e0f759d15d9241cfafa3c509994b3114",
  "placement": 78,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "e0f759d15d9241cfafa3c509994b3114",
  "placement": 91,
  "time_alive": 192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "e0f759d15d9241cfafa3c509994b3114",
  "placement": 92,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "e0f759d15d9241cfafa3c509994b3114",
  "placement": 83,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "e0f759d15d9241cfafa3c509994b3114",
  "placement": 82,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 83,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b3f6180-d710-4358-bb43-3d739a3d4cd2",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 97,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0849081d-13aa-4755-84e1-91da549c2f56",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 86,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a0d6076-cf1b-49e0-9c61-08c149d66f5c",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 93,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0625c854-3d9a-46a3-baa4-aea10f6858cd",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 64,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 1,
  "time_alive": 1536,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 3,
  "time_alive": 1535,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 2,
  "time_alive": 1526,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 14,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 5,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 2,
  "time_alive": 1523,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 14,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 6,
  "time_alive": 1505,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 5,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 20,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 4,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 8,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 9,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 13,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 9,
  "time_alive": 1483,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 6,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 10,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 83,
  "time_alive": 657,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 38,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 1,
  "time_alive": 1526,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 1,
  "time_alive": 1543,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 16,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 23,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 3,
  "time_alive": 1525,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1537,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 13,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 9,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 33,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 87,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 7,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 30,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 11,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 23,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 41,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 9,
  "time_alive": 1479,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 42,
  "time_alive": 1296,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 31,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 17,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 39,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 14,
  "time_alive": 1433,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 13,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 23,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 75,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 3,
  "time_alive": 1529,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 30,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "44570244b1a3466d8038e1cbb2497baa",
  "placement": 26,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 12,
  "time_alive": 1442,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 24,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 17,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 12,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 43,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a",
  "placement": 40,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 62,
  "time_alive": 1027,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 2,
  "time_alive": 1537,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 25,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 26,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 11,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "214e163a847741008b115bb2d70f3a11",
  "placement": 34,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 40,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 68,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 19,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 24,
  "time_alive": 1392,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 17,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 13,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 86,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 47,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 68,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 11,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 7,
  "time_alive": 1490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 1,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 17,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 97,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 57,
  "time_alive": 1194,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 18,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 40,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 6,
  "time_alive": 1498,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 26,
  "time_alive": 1395,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 82,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 35,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 59,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1524,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 24,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 36,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 11,
  "time_alive": 1492,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 93,
  "time_alive": 245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 28,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 24,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "cf6aaf7e77de4d3886227550505d35c9",
  "placement": 3,
  "time_alive": 1520,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 16,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 21,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 96,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 7,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 54,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 5,
  "time_alive": 1503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 41,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 59,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 46,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 66,
  "time_alive": 1027,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 2,
  "time_alive": 1524,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f",
  "placement": 57,
  "time_alive": 673,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 10,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 58,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 47,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 4,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 38,
  "time_alive": 1259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 22,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 9,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 71,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 15,
  "time_alive": 1420,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 53,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 49,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 28,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 70,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 7,
  "time_alive": 1494,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 40,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 92,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 41,
  "time_alive": 1222,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 27,
  "time_alive": 1393,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 27,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 79,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 70,
  "time_alive": 866,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 27,
  "time_alive": 1367,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b",
  "placement": 64,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 95,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 7,
  "time_alive": 1505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 16,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 10,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 62,
  "time_alive": 798,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 74,
  "time_alive": 280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 44,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 8,
  "time_alive": 1504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 10,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 21,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 56,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 46,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 6,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 17,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 29,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 63,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 42,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 11,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 75,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 16,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 3,
  "time_alive": 1524,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 74,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 50,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 49,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 62,
  "time_alive": 1080,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 94,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 2,
  "time_alive": 1543,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 12,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 51,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 4,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 84,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 12,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 53,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 15,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 52,
  "time_alive": 968,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 25,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 14,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 20,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 64,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 32,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 20,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 43,
  "time_alive": 1293,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 26,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 42,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 62,
  "time_alive": 1062,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 9,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 31,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 5,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 18,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 78,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 36,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 21,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 43,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 30,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 29,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 51,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 5,
  "time_alive": 1484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 76,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1",
  "placement": 7,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 8,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 64,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 65,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 69,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 67,
  "time_alive": 646,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "b9783bde21354df2815a6a00cbea4ffa",
  "placement": 12,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 24,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 37,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 18,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 73,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 64,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 21,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 29,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 53,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 44,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 31,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 13,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 19,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 54,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 5,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 34,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 30,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 68,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 62,
  "time_alive": 549,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 45,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 25,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 36,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 8,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 82,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "67a797909b094027a078ead3a7e579d9",
  "placement": 22,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 72,
  "time_alive": 862,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 57,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 67,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 75,
  "time_alive": 690,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 19,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "819339212a764a70a4c9b39dd497437f",
  "placement": 15,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 21,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 10,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 58,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 60,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 28,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "7845af4f047747cf820d9df436382237",
  "placement": 33,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 20,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 22,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 38,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 99,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 20,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 45,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 82,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 4,
  "time_alive": 1517,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 14,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 91,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 77,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "4266aab245ce409f9be70f5c390f55cc",
  "placement": 50,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 99,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 28,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 8,
  "time_alive": 1486,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 29,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 74,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "a5d24766bf784ed6b8745ad195881284",
  "placement": 67,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 66,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 67,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 33,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 65,
  "time_alive": 1036,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 8,
  "time_alive": 1483,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "f540d4d752174b598f4b9f85b99e4384",
  "placement": 17,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 19,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 56,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 22,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 39,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 25,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "f4b37164f55640e981c3c1b83d936505",
  "placement": 71,
  "time_alive": 325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 32,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 12,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 70,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 85,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 14,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "8cbc97957a9c4a27b9abfa8f218457e9",
  "placement": 35,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 47,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 79,
  "time_alive": 602,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 32,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 16,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 37,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 48,
  "time_alive": 1037,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088",
  "placement": 93,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088",
  "placement": 92,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088",
  "placement": 26,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088",
  "placement": 48,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088",
  "placement": 34,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088",
  "placement": 18,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 77,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 42,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 52,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 45,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 6,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 28,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 2,
  "time_alive": 1536,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 66,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 55,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 71,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 78,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "5307fa29487c44cda5249c683015cf44",
  "placement": 77,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 71,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 32,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 28,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 32,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 45,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "2a4f408b0ecb455fa5cfdea9b148b5ad",
  "placement": 36,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 76,
  "time_alive": 787,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 62,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 22,
  "time_alive": 1393,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 44,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 29,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 51,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 41,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 43,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 35,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 35,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 25,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 84,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 61,
  "time_alive": 1131,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 40,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 25,
  "time_alive": 1389,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 49,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "c2678d22779149458d2774dae35bf90a",
  "placement": 63,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 18,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 20,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 49,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 76,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 65,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8",
  "placement": 47,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 11,
  "time_alive": 1451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 49,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 6,
  "time_alive": 1495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 79,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 97,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "e11ab928f4504b9297f53ef6e7e1900a",
  "placement": 55,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 15,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 74,
  "time_alive": 691,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 60,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 47,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 73,
  "time_alive": 543,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "301aeb8aeb1c40c0aab1a6766eb439c3",
  "placement": 69,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "a3ab9694cdd946c588231e7c9733c480",
  "placement": 92,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "a3ab9694cdd946c588231e7c9733c480",
  "placement": 91,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "a3ab9694cdd946c588231e7c9733c480",
  "placement": 48,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "a3ab9694cdd946c588231e7c9733c480",
  "placement": 77,
  "time_alive": 591,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "a3ab9694cdd946c588231e7c9733c480",
  "placement": 23,
  "time_alive": 1389,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "a3ab9694cdd946c588231e7c9733c480",
  "placement": 56,
  "time_alive": 769,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "5b6a6c56402b433e8bb2bba011dbf781",
  "placement": 80,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "5b6a6c56402b433e8bb2bba011dbf781",
  "placement": 95,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "5b6a6c56402b433e8bb2bba011dbf781",
  "placement": 83,
  "time_alive": 361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "5b6a6c56402b433e8bb2bba011dbf781",
  "placement": 54,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "5b6a6c56402b433e8bb2bba011dbf781",
  "placement": 3,
  "time_alive": 1514,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "5b6a6c56402b433e8bb2bba011dbf781",
  "placement": 82,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "cefad902fde94ce099e70e26514e09bc",
  "placement": 61,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "cefad902fde94ce099e70e26514e09bc",
  "placement": 80,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "cefad902fde94ce099e70e26514e09bc",
  "placement": 23,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "cefad902fde94ce099e70e26514e09bc",
  "placement": 49,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "cefad902fde94ce099e70e26514e09bc",
  "placement": 59,
  "time_alive": 952,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "cefad902fde94ce099e70e26514e09bc",
  "placement": 30,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 48,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 60,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 24,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 70,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "82252986d0134f42bd892df759804457",
  "placement": 79,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "5b492eb93b524954a777b4c029446a6d",
  "placement": 60,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "5b492eb93b524954a777b4c029446a6d",
  "placement": 96,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "5b492eb93b524954a777b4c029446a6d",
  "placement": 84,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "5b492eb93b524954a777b4c029446a6d",
  "placement": 38,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "5b492eb93b524954a777b4c029446a6d",
  "placement": 26,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "5b492eb93b524954a777b4c029446a6d",
  "placement": 10,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 98,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 15,
  "time_alive": 1467,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 56,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 95,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "e7eed927860f4fbb874cefd09eabeb97",
  "placement": 90,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 46,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 31,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 66,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 57,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 47,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 32,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "19aa835bee1946f3a6027bfc71761256",
  "placement": 78,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "19aa835bee1946f3a6027bfc71761256",
  "placement": 33,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "19aa835bee1946f3a6027bfc71761256",
  "placement": 88,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "19aa835bee1946f3a6027bfc71761256",
  "placement": 13,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "19aa835bee1946f3a6027bfc71761256",
  "placement": 29,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "19aa835bee1946f3a6027bfc71761256",
  "placement": 86,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 37,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 89,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 27,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 41,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 69,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 85,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 53,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 75,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 45,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 44,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 51,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "9c240576e8ef40538a24fa2c9c020677",
  "placement": 27,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 38,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 43,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 41,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 42,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 71,
  "time_alive": 545,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 75,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "05d940298beb43f6b1eae3a146a39133",
  "placement": 94,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "05d940298beb43f6b1eae3a146a39133",
  "placement": 90,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "05d940298beb43f6b1eae3a146a39133",
  "placement": 4,
  "time_alive": 1506,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "05d940298beb43f6b1eae3a146a39133",
  "placement": 61,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "05d940298beb43f6b1eae3a146a39133",
  "placement": 75,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "05d940298beb43f6b1eae3a146a39133",
  "placement": 65,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 68,
  "time_alive": 929,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 45,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 39,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 83,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 63,
  "time_alive": 685,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "47f4824c186b4970b41aa96c47090c4a",
  "placement": 61,
  "time_alive": 603,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 56,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 81,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 15,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 72,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 60,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 66,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 69,
  "time_alive": 889,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 71,
  "time_alive": 827,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 95,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 93,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "2cfa61d18a24403a956405b13dd0c000",
  "placement": 18,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 81,
  "time_alive": 660,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 77,
  "time_alive": 646,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 21,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 68,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 48,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 90,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 23,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 65,
  "time_alive": 1021,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 90,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 43,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 57,
  "time_alive": 1026,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 83,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 74,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 85,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 53,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 46,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 38,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 37,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 59,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 69,
  "time_alive": 925,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 100,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 89,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 72,
  "time_alive": 544,
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
    