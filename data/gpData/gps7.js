const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 80,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "82203a3d8040462297a8e282a100d2d2",
  "placement": 89,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 42,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 63,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 37,
  "time_alive": 1267,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 57,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 95,
  "time_alive": 77,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 83,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 62,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 66,
  "time_alive": 882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 85,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 90,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 79,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 74,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 61,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 40,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 72,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 99,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 78,
  "time_alive": 406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 98,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 89,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 96,
  "time_alive": 74,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "2e6c926432fa4b5f9ed0d0523afee6d0",
  "placement": 77,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "38e1686622b641a399838abb0cba9493",
  "placement": 92,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "38e1686622b641a399838abb0cba9493",
  "placement": 56,
  "time_alive": 648,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 42,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 5,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 6,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 28,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 29,
  "time_alive": 1283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 7,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 36,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 16,
  "time_alive": 1353,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 9,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 13,
  "time_alive": 1330,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 11,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 7,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 41,
  "time_alive": 1185,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 44,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 29,
  "time_alive": 1285,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 9,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 10,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 21,
  "time_alive": 1315,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 25,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 35,
  "time_alive": 1268,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 25,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 52,
  "time_alive": 997,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 2,
  "time_alive": 1386,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 9,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 47,
  "time_alive": 1158,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 69,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 15,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 56,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 56,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 1,
  "time_alive": 1439,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 8,
  "time_alive": 1424,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 84,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 13,
  "time_alive": 1332,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 15,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 3,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 59,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 15,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 25,
  "time_alive": 1332,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 39,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 48,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 15,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 57,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 20,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 54,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1390,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 22,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 9,
  "time_alive": 1332,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 10,
  "time_alive": 1355,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 75,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 66,
  "time_alive": 920,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 40,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 7,
  "time_alive": 1413,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 37,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 72,
  "time_alive": 876,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 49,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 1,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 14,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 10,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 5,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 18,
  "time_alive": 1327,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 8,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 64,
  "time_alive": 1010,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 24,
  "time_alive": 1337,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 39,
  "time_alive": 1181,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 50,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 6,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 11,
  "time_alive": 1370,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 29,
  "time_alive": 1253,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 43,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 58,
  "time_alive": 715,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 18,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 2,
  "time_alive": 1428,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 57,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 14,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 45,
  "time_alive": 1258,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 27,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 3,
  "time_alive": 1430,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 19,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 73,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 60,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 32,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 15,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 88,
  "time_alive": 83,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 60,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 85,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 55,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 93,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 94,
  "time_alive": 70,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 51,
  "time_alive": 855,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 52,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 1,
  "time_alive": 1457,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 40,
  "time_alive": 1183,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 2,
  "time_alive": 1425,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 43,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "68e436419482411997ee6376389622ab",
  "placement": 55,
  "time_alive": 493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 30,
  "time_alive": 1273,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 39,
  "time_alive": 1274,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 38,
  "time_alive": 1265,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 8,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 55,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 35,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 7,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 10,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 57,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 26,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 6,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 62,
  "time_alive": 386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 39,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 55,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 52,
  "time_alive": 1108,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 30,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 18,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 2,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 11,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 42,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 70,
  "time_alive": 503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 6,
  "time_alive": 1354,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 5,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 47,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 61,
  "time_alive": 1020,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 45,
  "time_alive": 1178,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 21,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 26,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 67,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 20,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 5,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 9,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 6,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 28,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 8,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 16,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 45,
  "time_alive": 1170,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 50,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 25,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 16,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 58,
  "time_alive": 1014,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 10,
  "time_alive": 1356,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 46,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 2,
  "time_alive": 1457,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 17,
  "time_alive": 1319,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 53,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 76,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 44,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 34,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 17,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 84,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 58,
  "time_alive": 979,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 3,
  "time_alive": 1386,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 22,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 24,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 13,
  "time_alive": 1359,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 45,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 48,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 84,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 4,
  "time_alive": 1377,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 19,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 92,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 1,
  "time_alive": 1416,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 62,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 21,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 13,
  "time_alive": 1334,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 64,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 29,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 58,
  "time_alive": 999,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 29,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 50,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 61,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 86,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 11,
  "time_alive": 1365,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 19,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 60,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 73,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 16,
  "time_alive": 1324,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 14,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 68,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 14,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 7,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 23,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 3,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 7,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 36,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 32,
  "time_alive": 1277,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 43,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 61,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 32,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 31,
  "time_alive": 1348,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 50,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 71,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 1,
  "time_alive": 1425,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 64,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 27,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 68,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 91,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 5,
  "time_alive": 1407,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 6,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 88,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 5,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 34,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 72,
  "time_alive": 525,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 12,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 81,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 4,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 85,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 1,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 62,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 42,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 3,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 54,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 19,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 28,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 47,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 39,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 56,
  "time_alive": 934,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 40,
  "time_alive": 1232,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 23,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 21,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 98,
  "time_alive": 45,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 7,
  "time_alive": 1385,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 14,
  "time_alive": 1377,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 12,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 24,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 10,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 78,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 10,
  "time_alive": 1338,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 34,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 61,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 67,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 31,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 40,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 68,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 4,
  "time_alive": 1435,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 13,
  "time_alive": 1341,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 59,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 22,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 32,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 22,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 9,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 37,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 70,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 59,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 35,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 37,
  "time_alive": 1267,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 31,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 5,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 67,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 1,
  "time_alive": 1482,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 61,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 24,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 23,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 19,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 63,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 28,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 7,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 70,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 52,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 2,
  "time_alive": 1418,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 12,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 33,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 67,
  "time_alive": 799,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 8,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 35,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 49,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 76,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 32,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 13,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 8,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 53,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 65,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 23,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 8,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 21,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 3,
  "time_alive": 1390,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 70,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 83,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 5,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 3,
  "time_alive": 1450,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 75,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 77,
  "time_alive": 541,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 46,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 65,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 16,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 27,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 84,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 8,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 20,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 46,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 14,
  "time_alive": 1337,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 54,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 20,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 86,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 63,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 6,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 60,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 20,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 5,
  "time_alive": 1380,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 25,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 48,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 49,
  "time_alive": 622,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 20,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 10,
  "time_alive": 1367,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 63,
  "time_alive": 1020,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 72,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 11,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 27,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 29,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 69,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 2,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 51,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 34,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 58,
  "time_alive": 459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 87,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 1,
  "time_alive": 1468,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 97,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 74,
  "time_alive": 597,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 34,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 58,
  "time_alive": 649,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 3,
  "time_alive": 1479,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 87,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 59,
  "time_alive": 975,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 89,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 88,
  "time_alive": 147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "dbc6ed2c021848febbad0ef8f7b99e1c",
  "placement": 48,
  "time_alive": 691,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 6,
  "time_alive": 1384,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 33,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 54,
  "time_alive": 1101,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 32,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 1,
  "time_alive": 1418,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 64,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 74,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 19,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 30,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 33,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 47,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 31,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 17,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 22,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 43,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 19,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 60,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 4,
  "time_alive": 1395,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 57,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 94,
  "time_alive": 73,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 16,
  "time_alive": 1325,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 16,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 31,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 51,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 38,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 14,
  "time_alive": 1356,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 41,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 40,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 8,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 28,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 92,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 37,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 48,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 10,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 18,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "a54a89f4976a480e823438eeac37df58",
  "placement": 26,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 46,
  "time_alive": 1161,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 34,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 10,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 46,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 69,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 36,
  "time_alive": 1186,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 54,
  "time_alive": 1107,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 39,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 28,
  "time_alive": 1280,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 65,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 33,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "f1142da7a93c4ec48bba5bbf2b150b9e",
  "placement": 14,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 37,
  "time_alive": 1247,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 26,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 27,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 42,
  "time_alive": 1259,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 16,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 30,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 35,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 86,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 42,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 71,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 54,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "9024041768ef42f39ccb2e65a28a7733",
  "placement": 2,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 23,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 78,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 31,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 89,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 4,
  "time_alive": 1386,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 8,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 89,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 65,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 15,
  "time_alive": 1327,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 12,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 39,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 13,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 36,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 18,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 34,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 39,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 9,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 86,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 2,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 30,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 51,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 31,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 45,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 21,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 33,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 77,
  "time_alive": 552,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 80,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 10,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 92,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 63,
  "time_alive": 562,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 37,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 4,
  "time_alive": 1421,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 94,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 87,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 30,
  "time_alive": 1278,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 20,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 27,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 28,
  "time_alive": 1331,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 61,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 2,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 40,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 4,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 58,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 61,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 39,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 71,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c",
  "placement": 19,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 82,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 12,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 28,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 15,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 7,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 40,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 27,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 56,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 62,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 47,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 22,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 6,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 22,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 20,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 11,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 36,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 71,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 15,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 68,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 3,
  "time_alive": 1442,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 54,
  "time_alive": 1041,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 69,
  "time_alive": 494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 25,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 24,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 4,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 95,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 62,
  "time_alive": 1052,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 95,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 6,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 34,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 42,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 64,
  "time_alive": 905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 38,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 19,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 13,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 33,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 58,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 67,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 2,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 35,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 24,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 33,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 76,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 26,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 55,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 4,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 44,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 8,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 16,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 48,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 58,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 65,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 43,
  "time_alive": 1171,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 25,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 14,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 56,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 60,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 1,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 53,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 3,
  "time_alive": 1426,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 30,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 91,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 87,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 47,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 31,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 15,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 81,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 78,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 49,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 14,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 36,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 26,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 9,
  "time_alive": 1370,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 22,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 38,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 52,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 79,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 40,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 28,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 67,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 30,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 38,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 75,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 49,
  "time_alive": 1135,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 73,
  "time_alive": 691,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 4,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 94,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 76,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 55,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 78,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 63,
  "time_alive": 922,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 3,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 78,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 41,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 35,
  "time_alive": 1139,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 10,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 94,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 73,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 21,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 38,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 14,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 67,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 43,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 52,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 5,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 32,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 72,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 84,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 52,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 13,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 50,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 32,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 52,
  "time_alive": 783,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 65,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 41,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 7,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 50,
  "time_alive": 1066,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 21,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "6901d8d6299a40e48088de710a094cab",
  "placement": 30,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 88,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 68,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 82,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 1,
  "time_alive": 1451,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 75,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 47,
  "time_alive": 957,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 75,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 59,
  "time_alive": 1034,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 89,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 59,
  "time_alive": 820,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 85,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 52,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 11,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 27,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 57,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 47,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 50,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 71,
  "time_alive": 372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 90,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 88,
  "time_alive": 254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 19,
  "time_alive": 1314,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 27,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 69,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 34,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 96,
  "time_alive": 83,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 93,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 24,
  "time_alive": 1323,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 25,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 72,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 82,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 85,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 46,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 90,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 68,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 91,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 11,
  "time_alive": 1353,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 13,
  "time_alive": 1341,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 32,
  "time_alive": 1311,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 83,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 76,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 33,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 87,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 43,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 12,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 43,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 70,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 80,
  "time_alive": 275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 45,
  "time_alive": 804,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 48,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 19,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 16,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 64,
  "time_alive": 883,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 41,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 23,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 59,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 36,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 18,
  "time_alive": 1317,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 11,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 46,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 25,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 55,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 81,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 76,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 17,
  "time_alive": 1366,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 14,
  "time_alive": 1339,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 56,
  "time_alive": 686,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 62,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 48,
  "time_alive": 1173,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 37,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 82,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 66,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 73,
  "time_alive": 286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 24,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 86,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 18,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 55,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 17,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 11,
  "time_alive": 1346,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 63,
  "time_alive": 992,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 93,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 73,
  "time_alive": 458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 72,
  "time_alive": 482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 68,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 37,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 85,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 47,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 44,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 12,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 22,
  "time_alive": 1317,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 42,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 58,
  "time_alive": 1080,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 71,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 35,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 20,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 24,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 39,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 76,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 23,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 71,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 18,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 49,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 43,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 41,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 40,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 50,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 64,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 16,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "2ecd78d620d34e848bad2888c7527f5b",
  "placement": 42,
  "time_alive": 979,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 78,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 65,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 3,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 54,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 80,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 38,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 38,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 62,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 92,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 63,
  "time_alive": 674,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 36,
  "time_alive": 1245,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "7329b73ad28746c589ad4de9f880d63d",
  "placement": 40,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 53,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 6,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 26,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 41,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 48,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 9,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 17,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 53,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 69,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 24,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 42,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 38,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 29,
  "time_alive": 1277,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 53,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 23,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 71,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 37,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 48,
  "time_alive": 957,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 21,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 23,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 66,
  "time_alive": 551,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 38,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 55,
  "time_alive": 850,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 15,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 54,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 21,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 95,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 11,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 35,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 44,
  "time_alive": 1016,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 91,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 52,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 63,
  "time_alive": 707,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 46,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 26,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "21b64b49178c4656b3f52a4ae77c9ae2",
  "placement": 50,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 91,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 84,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 46,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 82,
  "time_alive": 444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 83,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 54,
  "time_alive": 711,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 69,
  "time_alive": 911,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 5,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 64,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 37,
  "time_alive": 1292,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 29,
  "time_alive": 1279,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 54,
  "time_alive": 504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 67,
  "time_alive": 959,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 60,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 86,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 85,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 88,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 51,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 53,
  "time_alive": 1042,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 87,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "2c65d7807b564af18310518af2f4ab44",
  "placement": 1,
  "time_alive": 1393,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 8,
  "time_alive": 1371,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 76,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 98,
  "time_alive": 75,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 67,
  "time_alive": 881,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 68,
  "time_alive": 727,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 66,
  "time_alive": 493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 77,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 82,
  "time_alive": 346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 93,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 61,
  "time_alive": 758,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 89,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "95b500de22744225ba8664ac6da413fd",
  "placement": 82,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 44,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 75,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 69,
  "time_alive": 782,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 5,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 57,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 76,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 9,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 24,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 68,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 41,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 51,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "692106cb53304a7291697315edd3e615",
  "placement": 41,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 70,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 56,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 30,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 63,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 25,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 18,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 45,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 22,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 47,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 92,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 60,
  "time_alive": 641,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 43,
  "time_alive": 883,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 71,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 70,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 56,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 33,
  "time_alive": 1292,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 53,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 26,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 39,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 6,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 20,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 77,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 73,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 28,
  "time_alive": 1236,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 43,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 72,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 53,
  "time_alive": 1104,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 22,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 36,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 72,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 55,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 44,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 95,
  "time_alive": 83,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 54,
  "time_alive": 971,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 72,
  "time_alive": 381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 29,
  "time_alive": 1229,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 35,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 46,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 35,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 92,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 59,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 78,
  "time_alive": 314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 47,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 17,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 46,
  "time_alive": 1161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 18,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 82,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 77,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 73,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 43,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 96,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 23,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 44,
  "time_alive": 1165,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 69,
  "time_alive": 407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 84,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 15,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 33,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 17,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 53,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 84,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 9,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 96,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 87,
  "time_alive": 213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 20,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 77,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 77,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 50,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 85,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 49,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 75,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 74,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 12,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 66,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 16,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 36,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 51,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 62,
  "time_alive": 973,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 62,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 18,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 70,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 74,
  "time_alive": 450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 73,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 52,
  "time_alive": 952,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 66,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 50,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 64,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 17,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 73,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 28,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 75,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 44,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 75,
  "time_alive": 453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 31,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 80,
  "time_alive": 342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 28,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "b681f129a70e4bc3976c1b576966fca9",
  "placement": 87,
  "time_alive": 86,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 77,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 41,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 12,
  "time_alive": 1355,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 69,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 31,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 46,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 61,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 45,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 87,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 79,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 62,
  "time_alive": 581,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "a7af172c1a6e4454bf738ecdf8e2d569",
  "placement": 86,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 25,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 24,
  "time_alive": 1334,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 72,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 49,
  "time_alive": 1161,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 51,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 53,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 56,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 90,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 27,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 58,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 35,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "d5f1ab2faee14b39a803e874cb447f01",
  "placement": 79,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 79,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 4,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 78,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 66,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 78,
  "time_alive": 399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 39,
  "time_alive": 1147,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 80,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 77,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 32,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 84,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 79,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 65,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 69,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 15,
  "time_alive": 1354,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 67,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 78,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 66,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 41,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 49,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 18,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 11,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 90,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 78,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 69,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 80,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 38,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 92,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 83,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 64,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 81,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 53,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 55,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 81,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 44,
  "time_alive": 1210,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 56,
  "time_alive": 734,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 32,
  "time_alive": 1198,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 12,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 51,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 48,
  "time_alive": 1178,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 68,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 42,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 74,
  "time_alive": 358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 30,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 76,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 79,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 88,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 57,
  "time_alive": 722,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 89,
  "time_alive": 77,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 92,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 80,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 9,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 81,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 26,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 17,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 73,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 31,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 80,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 45,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 65,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 74,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 57,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 79,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 81,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 27,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 45,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 89,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 70,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 7,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 86,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 91,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 17,
  "time_alive": 1303,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 64,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 90,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 49,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 60,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 57,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 19,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 83,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 32,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 89,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 76,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 85,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 81,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "e5783239cb6647839283f4d07658df1d",
  "placement": 22,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "7caef7db44184809bdb3b450b5fa6620",
  "placement": 51,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "7caef7db44184809bdb3b450b5fa6620",
  "placement": 2,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "7caef7db44184809bdb3b450b5fa6620",
  "placement": 49,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "7caef7db44184809bdb3b450b5fa6620",
  "placement": 96,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "7caef7db44184809bdb3b450b5fa6620",
  "placement": 70,
  "time_alive": 607,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 74,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 97,
  "time_alive": 81,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 44,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 30,
  "time_alive": 1280,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 85,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 83,
  "time_alive": 620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 91,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 41,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 55,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 12,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "df3f7b92763148fbb842f56e1ef67709",
  "placement": 57,
  "time_alive": 461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 97,
  "time_alive": 81,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 29,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 85,
  "time_alive": 261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 85,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 70,
  "time_alive": 381,
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
    