const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 66,
  "time_alive": 927,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 33,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 26,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 76,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 56,
  "time_alive": 488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 52,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 37,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 47,
  "time_alive": 1178,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 29,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 86,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 87,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 83,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 23,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 67,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 7,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 68,
  "time_alive": 327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 62,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 82,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 59,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 90,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 89,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 49,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 48,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 21,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 36,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 57,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 90,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 17,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 59,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 74,
  "time_alive": 632,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 61,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 82,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 80,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 12,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 25,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 75,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 40,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 75,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "be0e7e3192e34ddebed28417b3235c03",
  "placement": 81,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 65,
  "time_alive": 1013,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 42,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 50,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 79,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 74,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 73,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 79,
  "time_alive": 808,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 74,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 83,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 66,
  "time_alive": 604,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 83,
  "time_alive": 206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 80,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 63,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 61,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 66,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 34,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 84,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 45,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 13,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 66,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 85,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 36,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "00bd4e5bc7b441659e68b8aebb5621c6",
  "placement": 63,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 56,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 89,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 90,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 37,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 93,
  "time_alive": 71,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 61,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 82,
  "time_alive": 655,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 60,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 34,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 21,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 59,
  "time_alive": 658,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 60,
  "time_alive": 428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 79,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 98,
  "time_alive": 67,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 20,
  "time_alive": 1323,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 68,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 86,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 38,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "9b2abff4b6b4445d8bb2e7500fa6501f",
  "placement": 82,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 64,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 58,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 88,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 59,
  "time_alive": 967,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 87,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 29,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 51,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 79,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 77,
  "time_alive": 404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "e2009aee075b4f7b93aaa42577c9d320",
  "placement": 42,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 83,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 31,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 51,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 84,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 79,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 60,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 26,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 57,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 44,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 74,
  "time_alive": 432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 86,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "52dcad452bb041b38b5c4aa077c03da0",
  "placement": 78,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 95,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 74,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 93,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 70,
  "time_alive": 811,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 81,
  "time_alive": 695,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 92,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 91,
  "time_alive": 177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 62,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 27,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe432b8-1a39-4ad5-9dc4-686dc3d48375",
  "team_id": "82981beeb7e948168cd6027fe073184c",
  "placement": 71,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "8c723906589f4d6a9d495aae704f8931",
  "placement": 40,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "8c723906589f4d6a9d495aae704f8931",
  "placement": 71,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "8c723906589f4d6a9d495aae704f8931",
  "placement": 33,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "8c723906589f4d6a9d495aae704f8931",
  "placement": 13,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "8c723906589f4d6a9d495aae704f8931",
  "placement": 23,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "8c723906589f4d6a9d495aae704f8931",
  "placement": 84,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 93,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 88,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 65,
  "time_alive": 984,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 80,
  "time_alive": 492,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 80,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 65,
  "time_alive": 576,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 83,
  "time_alive": 315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "e326739a04b042f3901be5d464a3ba77",
  "placement": 77,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "edbc24148e284c0e82c01070319f8866",
  "placement": 72,
  "time_alive": 833,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "edbc24148e284c0e82c01070319f8866",
  "placement": 83,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "edbc24148e284c0e82c01070319f8866",
  "placement": 89,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "edbc24148e284c0e82c01070319f8866",
  "placement": 75,
  "time_alive": 588,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "edbc24148e284c0e82c01070319f8866",
  "placement": 90,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "62980a04-025f-4206-bc1b-f416062167d4",
  "team_id": "edbc24148e284c0e82c01070319f8866",
  "placement": 88,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 81,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 87,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 77,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 88,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 81,
  "time_alive": 317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1adcf4f3-1404-4381-bff7-6678ea67c927",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 71,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 34,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 72,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 93,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b18557a-2679-44af-8291-10f7368df06d",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 89,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 90,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 45,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 91,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d77308-5057-47ce-9f91-1c634d53d693",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 91,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021fbc40-686f-4697-a71e-f26311eeb190",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 88,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "065c2c0a-eed3-4a5c-89e1-d97df23afeb2",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 86,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c91d9afe-a514-480e-8a54-aa51469c4fe3",
  "team_id": "896404322cc145d5aa0e7fbe3b70c2d1",
  "placement": 67,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2296e636-a4f5-49b3-a936-cbd9e4bb90bd",
  "team_id": "24281343c58049b1a42142ee2b352aaf",
  "placement": 63,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "45baa68b-e1ec-4382-a150-5dbf4d6ef106",
  "team_id": "24281343c58049b1a42142ee2b352aaf",
  "placement": 99,
  "time_alive": 49,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6ce3fa68-f0bb-41ca-b199-a0c047797e78",
  "team_id": "24281343c58049b1a42142ee2b352aaf",
  "placement": 97,
  "time_alive": 71,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 7,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 21,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 5,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 4,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 4,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 8,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 6,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 3,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 68,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 1,
  "time_alive": 1530,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 4,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 89,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 3,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 6,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 2,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 13,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 54,
  "time_alive": 1135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 85,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 8,
  "time_alive": 1466,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 20,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 13,
  "time_alive": 1401,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 5,
  "time_alive": 1465,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 14,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 31,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 65,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 12,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 9,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 1,
  "time_alive": 1516,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 27,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 97,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 9,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 82,
  "time_alive": 383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 9,
  "time_alive": 1469,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 44,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 48,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 5,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 20,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 13,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 17,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 10,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 15,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 65,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 80,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 8,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 12,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 52,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 10,
  "time_alive": 1452,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 9,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 91,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 19,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 18,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 35,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 33,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 2,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 13,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 36,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 33,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 26,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 31,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 3,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 49,
  "time_alive": 1200,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 19,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 31,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 7,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 25,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 6,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 7,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 22,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 28,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 26,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 37,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 32,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 20,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 16,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 10,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 70,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 31,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 32,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 4,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 22,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 60,
  "time_alive": 1075,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 42,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 20,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 21,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 48,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 27,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 5,
  "time_alive": 1469,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "7d95ff5b6eb2448cb50f7ad42fed9848",
  "placement": 33,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 46,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 43,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 30,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 18,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 18,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 37,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 1,
  "time_alive": 1493,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 21,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 81,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 8,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 16,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 27,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 24,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 20,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 28,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 23,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 26,
  "time_alive": 1389,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 61,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 40,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 63,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 53,
  "time_alive": 1128,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 7,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 12,
  "time_alive": 1417,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 17,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 77,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 10,
  "time_alive": 1430,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 64,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 6,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 76,
  "time_alive": 517,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 69,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 22,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 8,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 3,
  "time_alive": 1495,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 33,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 79,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 2,
  "time_alive": 1516,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 39,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 61,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 49,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 25,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 62,
  "time_alive": 1054,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 75,
  "time_alive": 866,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 1,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 67,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 2,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 44,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 18,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 85,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 16,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 20,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 15,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 33,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 19,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 46,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 23,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 71,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 48,
  "time_alive": 1215,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 6,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 13,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 44,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 31,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 70,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 69,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 63,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 72,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 19,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 75,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 7,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 11,
  "time_alive": 1416,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 8,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 59,
  "time_alive": 883,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 29,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 7,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 93,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 72,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 63,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 16,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 11,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 35,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 42,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 11,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 26,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 9,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 40,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 30,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 38,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 96,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 1,
  "time_alive": 1516,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 46,
  "time_alive": 1287,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 35,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 37,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 23,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 36,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 35,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 64,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 8,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 48,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 50,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 43,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 60,
  "time_alive": 1000,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 15,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 54,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 5,
  "time_alive": 1479,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 13,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 28,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 14,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 82,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 75,
  "time_alive": 580,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 42,
  "time_alive": 1316,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 59,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 12,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 38,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 98,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 43,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 68,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 21,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 55,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 3,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 1,
  "time_alive": 1509,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 99,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 80,
  "time_alive": 801,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 11,
  "time_alive": 1447,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 37,
  "time_alive": 1337,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 23,
  "time_alive": 1396,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 97,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 62,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 34,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 4,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 55,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 66,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 30,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 3,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 63,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 50,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 6,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 67,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 42,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 54,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 79,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 9,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 29,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 53,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 94,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 2,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 62,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 1,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 48,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 42,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 54,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 14,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 29,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 63,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 32,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 58,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 41,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 68,
  "time_alive": 878,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "bf9afc7c1076484abd794b36e0517eae",
  "placement": 19,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 41,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 51,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 62,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 11,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 35,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 47,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 21,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 18,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 12,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 76,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 75,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 91,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 56,
  "time_alive": 1090,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 10,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 71,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "a129c5e9430a4df5b15112551ed643f8",
  "placement": 4,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 55,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 3,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 22,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 19,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 50,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 21,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 53,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 81,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 10,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 87,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 17,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 69,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 25,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 38,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 55,
  "time_alive": 1110,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 14,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 23,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 35,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 39,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 34,
  "time_alive": 1334,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 95,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 90,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 40,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 6,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 43,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 45,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 95,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 26,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 10,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 28,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 84,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 24,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 50,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 92,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 3,
  "time_alive": 1503,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 74,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 69,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 76,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 15,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 40,
  "time_alive": 1306,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 2,
  "time_alive": 1516,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 86,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 27,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 95,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 55,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 81,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 16,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "47357f2065884a469537f478728c22d8",
  "placement": 55,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 30,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 24,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 33,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 29,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 77,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 22,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 82,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 28,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 28,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 60,
  "time_alive": 1085,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 32,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 97,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 9,
  "time_alive": 1421,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 56,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 66,
  "time_alive": 920,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 53,
  "time_alive": 960,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 58,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 13,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 67,
  "time_alive": 899,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 76,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 5,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 17,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 87,
  "time_alive": 215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 67,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 22,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 89,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 29,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 48,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 8,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 24,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 51,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 38,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 5,
  "time_alive": 1490,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 84,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 12,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 84,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 88,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 82,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 91,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 15,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 72,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 18,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 68,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 14,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 26,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 25,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 36,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 73,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 4,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 17,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 82,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 30,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 36,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 94,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 47,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "e6c4db107f054a4d87843bf653e1a840",
  "placement": 88,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 74,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 97,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 38,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 12,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 6,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 50,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 32,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "08fd24fbb27f412782d85a6203f2828c",
  "placement": 46,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 80,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 79,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 85,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 44,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 22,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 1,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 83,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 48,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 56,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 68,
  "time_alive": 982,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 70,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 7,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 46,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 12,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 45,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 57,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 19,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 22,
  "time_alive": 1392,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 77,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 80,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 57,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 74,
  "time_alive": 563,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 39,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 30,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 45,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 56,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 76,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 47,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 62,
  "time_alive": 981,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 4,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 19,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 42,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 18,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 63,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 21,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 93,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 87,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 68,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 26,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f",
  "placement": 43,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 75,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 32,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 25,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 49,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 16,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 59,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 60,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 45,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 51,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 25,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 41,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 41,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 81,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 14,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 27,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 61,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 88,
  "time_alive": 399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 83,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 94,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 85,
  "time_alive": 416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 68,
  "time_alive": 856,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 75,
  "time_alive": 556,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 79,
  "time_alive": 471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 2,
  "time_alive": 1509,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 31,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 78,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 24,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 92,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 11,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 84,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 74,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 21,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 9,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 51,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 38,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 73,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 79,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 52,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 95,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 40,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 2,
  "time_alive": 1530,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 69,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 77,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 82,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 64,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 76,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "5f030a94b0e04803a2cc957f469d7c23",
  "placement": 20,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 73,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 31,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 61,
  "time_alive": 1077,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 36,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 17,
  "time_alive": 1394,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 86,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 65,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 72,
  "time_alive": 567,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 11,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 34,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 81,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 46,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 64,
  "time_alive": 905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 39,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 81,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "0af30a2961f6480f94425426982b07f9",
  "placement": 79,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 84,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 73,
  "time_alive": 875,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 99,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 45,
  "time_alive": 1241,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 29,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 62,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 75,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035",
  "placement": 16,
  "time_alive": 1401,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 94,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 15,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 98,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 23,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 92,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 89,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 27,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 47,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 41,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 89,
  "time_alive": 275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 90,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 15,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 49,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 43,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 52,
  "time_alive": 992,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 32,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 88,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 45,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 16,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 38,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 66,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 67,
  "time_alive": 896,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 44,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 79,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 81,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 84,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 31,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 43,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 33,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 30,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 49,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 71,
  "time_alive": 872,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 55,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 28,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 65,
  "time_alive": 1093,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 34,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 29,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 69,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 76,
  "time_alive": 556,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 95,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 70,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 83,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 17,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 70,
  "time_alive": 704,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 24,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "99340f8d264f40f8965caebceeccba1f",
  "placement": 68,
  "time_alive": 637,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 96,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 53,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 57,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 24,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 59,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 18,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 77,
  "time_alive": 579,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 74,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 36,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 37,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 37,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 25,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 74,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 95,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 56,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 39,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 59,
  "time_alive": 1084,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 30,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 54,
  "time_alive": 1135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 10,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 52,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 83,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 35,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 77,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 44,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 87,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 14,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 65,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 41,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 56,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 37,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 23,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 52,
  "time_alive": 1138,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 51,
  "time_alive": 1205,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 66,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 73,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 62,
  "time_alive": 959,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 51,
  "time_alive": 1075,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 64,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 74,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 13,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 39,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 78,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 77,
  "time_alive": 536,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 46,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "510d9d03d7dc406db492bcafb536b6bd",
  "placement": 41,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 44,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 47,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 56,
  "time_alive": 1127,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 42,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 84,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 45,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 73,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 26,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 86,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 14,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 49,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 73,
  "time_alive": 811,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 93,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 60,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 48,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 60,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 17,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 69,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 90,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 40,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 41,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 53,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 57,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 58,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 78,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 82,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 71,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 52,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 42,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 57,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 61,
  "time_alive": 979,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "1725bcbb5d9541a3822c2f8e1fa018df",
  "placement": 11,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 90,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 49,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 36,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 71,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 91,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 25,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 83,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 76,
  "time_alive": 799,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 57,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 58,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 15,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 51,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 70,
  "time_alive": 709,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 85,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "11e683b1758d457a8fb6078f51c2dda2",
  "placement": 91,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 82,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 91,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 60,
  "time_alive": 1097,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 64,
  "time_alive": 1094,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 80,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 78,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 33,
  "time_alive": 1312,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "886f8ad1dc314dc2918baf0e639fc9c3",
  "placement": 70,
  "time_alive": 620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 87,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 93,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 34,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 100,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 58,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 34,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 37,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 69,
  "time_alive": 928,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 50,
  "time_alive": 1223,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 86,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 60,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 71,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 87,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 20,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 78,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 66,
  "time_alive": 994,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 72,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 61,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 89,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 51,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 50,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "ce6a547eadf54e7bb3cc2a878192ec21",
  "placement": 63,
  "time_alive": 750,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 67,
  "time_alive": 939,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 40,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 53,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 28,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 61,
  "time_alive": 991,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 89,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 86,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 89,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 70,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 58,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 23,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 58,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 85,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 40,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 88,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 47,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 24,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 36,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 74,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 98,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 98,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 67,
  "time_alive": 846,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 80,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 90,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 89,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 95,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 96,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 57,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 96,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 43,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 7,
  "time_alive": 1461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 87,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 39,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 100,
  "time_alive": 78,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 100,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 81,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 99,
  "time_alive": 83,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 93,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 78,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 34,
  "time_alive": 1352,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 49,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 59,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 87,
  "time_alive": 398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 79,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 90,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 35,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 98,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 75,
  "time_alive": 557,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 57,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 96,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 46,
  "time_alive": 1224,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 99,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 65,
  "time_alive": 884,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 80,
  "time_alive": 373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 64,
  "time_alive": 947,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 86,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 93,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 27,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 92,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 96,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 94,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 99,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 95,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e",
  "placement": 66,
  "time_alive": 657,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 61,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 39,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 65,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 86,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 83,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 63,
  "time_alive": 970,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 96,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "bf042e83c8554e3a95d782bf28de7212",
  "placement": 93,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 97,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 54,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 66,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 78,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 67,
  "time_alive": 865,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 34,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 58,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 77,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 66,
  "time_alive": 1004,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 71,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 47,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 53,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 47,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 54,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 72,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "e8f129da77c04c55a7630d1c49640a82",
  "placement": 80,
  "time_alive": 394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 52,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 38,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 78,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 55,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 72,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 71,
  "time_alive": 697,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 90,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "3d0535a63b9449f186b8157c69f8b564",
  "placement": 65,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 83,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 90,
  "time_alive": 323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 97,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 83,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 86,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 85,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 44,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 94,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 92,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 62,
  "time_alive": 1080,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 59,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 88,
  "time_alive": 346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 91,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 92,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 93,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 84,
  "time_alive": 279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 98,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 99,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 88,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 50,
  "time_alive": 1210,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 54,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 72,
  "time_alive": 690,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 92,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 85,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 64,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 73,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 59,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0971a668-dbda-4011-a73e-1161466f00a7",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 45,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0360744e-e5f3-4991-be8b-92360b380efd",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 88,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0879066e-cb23-4d78-b523-1dfb7346ec72",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 94,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "115fc721-dfd9-468e-9c53-e7463598a46b",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 92,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "048796f6-4d87-4e89-9d78-a613c1b54883",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 52,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a561808-c3a6-4d01-af2f-d613407a8963",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 91,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f97b2e-c9de-4328-a2b4-9d6cea8b103f",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 94,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 22,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 2,
  "time_alive": 1543,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 16,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 14,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 3,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 49,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 6,
  "time_alive": 1490,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 24,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 40,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 77,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 6,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 1,
  "time_alive": 1523,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 53,
  "time_alive": 1202,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 5,
  "time_alive": 1494,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 14,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 26,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 5,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 10,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 8,
  "time_alive": 1483,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 25,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 1,
  "time_alive": 1513,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 75,
  "time_alive": 706,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 52,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 11,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 2,
  "time_alive": 1532,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 14,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 76,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 4,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 2,
  "time_alive": 1508,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 53,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 59,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 4,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 3,
  "time_alive": 1507,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 25,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 54,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 4,
  "time_alive": 1490,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 41,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 15,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 12,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 11,
  "time_alive": 1479,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 21,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 18,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 3,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 37,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 43,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 13,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 15,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 9,
  "time_alive": 1479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032c481b-2c0b-4b5b-8106-7e1a1c854f6c",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 1,
  "time_alive": 1543,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04809d3f-ebab-4444-b536-ab8a1c1f1c92",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 54,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 80,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "051a9e1e-9f8d-43dd-8166-4e1b8a248122",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 9,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0683f2ae-719f-442a-9a5c-a17ee00b9d51",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 31,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 13,
  "time_alive": 1466,
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
    