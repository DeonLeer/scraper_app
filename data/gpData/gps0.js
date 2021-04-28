const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 19,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 53,
  "time_alive": 1106,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 9,
  "time_alive": 1351,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 66,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 54,
  "time_alive": 1053,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 29,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 60,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 31,
  "time_alive": 1280,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 2,
  "time_alive": 1471,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 8,
  "time_alive": 1321,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 2,
  "time_alive": 1379,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 31,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 71,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 3,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 64,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 31,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 22,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 7,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 55,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 3,
  "time_alive": 1369,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 28,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 4,
  "time_alive": 1338,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 52,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 3,
  "time_alive": 1395,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 52,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 17,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 12,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 43,
  "time_alive": 1282,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 6,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 20,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 39,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 38,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 45,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 2,
  "time_alive": 1361,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 29,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 5,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 39,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 9,
  "time_alive": 1370,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 15,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 11,
  "time_alive": 1352,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 17,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 20,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 66,
  "time_alive": 912,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 35,
  "time_alive": 1218,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 17,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 12,
  "time_alive": 1343,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 10,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 13,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 2,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 17,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 80,
  "time_alive": 478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 85,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 74,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 15,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 3,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 9,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 13,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3",
  "placement": 2,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 97,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 8,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 27,
  "time_alive": 1293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 93,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 38,
  "time_alive": 1261,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 80,
  "time_alive": 504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 66,
  "time_alive": 1052,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 22,
  "time_alive": 1304,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 83,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 5,
  "time_alive": 1336,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 72,
  "time_alive": 698,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 7,
  "time_alive": 1354,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 1,
  "time_alive": 1496,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 38,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 65,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 41,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 61,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 1,
  "time_alive": 1392,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 40,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 62,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 8,
  "time_alive": 1379,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 71,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 47,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "fc1134cb08b945e9a05708fc5414f63f",
  "placement": 37,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 22,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 6,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 51,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 39,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 59,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 14,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 54,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 23,
  "time_alive": 1300,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 4,
  "time_alive": 1449,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 74,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 6,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 5,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 86,
  "time_alive": 675,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 60,
  "time_alive": 1056,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 22,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 1,
  "time_alive": 1446,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 49,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 68,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 7,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 1,
  "time_alive": 1374,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 43,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 67,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 31,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 26,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 38,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 35,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 19,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 55,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 64,
  "time_alive": 950,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 18,
  "time_alive": 1324,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 4,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 44,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 1,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 33,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 49,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 20,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 64,
  "time_alive": 953,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 93,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 31,
  "time_alive": 1283,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 11,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 69,
  "time_alive": 843,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 73,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 63,
  "time_alive": 1088,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 13,
  "time_alive": 1343,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 72,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 57,
  "time_alive": 938,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 46,
  "time_alive": 1171,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 18,
  "time_alive": 1322,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 6,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 50,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 93,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 8,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 4,
  "time_alive": 1381,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 13,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 39,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 52,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 40,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 20,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 27,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 8,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 74,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 1,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 49,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 18,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 22,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 58,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 46,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 41,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 76,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 35,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 1,
  "time_alive": 1413,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 14,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 54,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 3,
  "time_alive": 1393,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 75,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 5,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 56,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 72,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 37,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 29,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 10,
  "time_alive": 1337,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 42,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 66,
  "time_alive": 879,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 14,
  "time_alive": 1381,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 71,
  "time_alive": 788,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 2,
  "time_alive": 1446,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 56,
  "time_alive": 1020,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 43,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 5,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 59,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 74,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 38,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 57,
  "time_alive": 969,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "394e40a2dd5e4a6f8015fe6e833dbba5",
  "placement": 81,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 74,
  "time_alive": 806,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 92,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 4,
  "time_alive": 1375,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 87,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 92,
  "time_alive": 224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 40,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 47,
  "time_alive": 1188,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 56,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 18,
  "time_alive": 1319,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 7,
  "time_alive": 1321,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 8,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 85,
  "time_alive": 182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 90,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 33,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 52,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 46,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 3,
  "time_alive": 1426,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 62,
  "time_alive": 949,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 3,
  "time_alive": 1429,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 10,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 40,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 54,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 15,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 56,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 76,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 32,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 88,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 71,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 20,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 2,
  "time_alive": 1392,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 1,
  "time_alive": 1440,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 37,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 53,
  "time_alive": 1112,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 25,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 69,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 52,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 4,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 79,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 32,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 52,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 25,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 77,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 26,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 12,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1361,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 86,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 21,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 18,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 44,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 74,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 4,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 55,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 11,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 21,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 67,
  "time_alive": 895,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 43,
  "time_alive": 1130,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 29,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 4,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 16,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 45,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 35,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 3,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 75,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 42,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 29,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 18,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 77,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 95,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 12,
  "time_alive": 1328,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 9,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 48,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 26,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 25,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 21,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 7,
  "time_alive": 1395,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 6,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 6,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 27,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 68,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 70,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 25,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 8,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 43,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 31,
  "time_alive": 1300,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 47,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 89,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 8,
  "time_alive": 1382,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 47,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 79,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 60,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 5,
  "time_alive": 1408,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 81,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 27,
  "time_alive": 1276,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 54,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 34,
  "time_alive": 1280,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 5,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 21,
  "time_alive": 1308,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 70,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 31,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 13,
  "time_alive": 1340,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 67,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 19,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 25,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 68,
  "time_alive": 766,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 36,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 33,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 55,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 61,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 8,
  "time_alive": 1354,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 32,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 41,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 83,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 15,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 41,
  "time_alive": 1247,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 34,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 17,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 39,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 39,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 49,
  "time_alive": 1177,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 19,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 55,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 51,
  "time_alive": 1208,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 14,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 17,
  "time_alive": 1325,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 20,
  "time_alive": 1342,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 12,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 49,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 27,
  "time_alive": 1256,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 75,
  "time_alive": 587,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 60,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 39,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 4,
  "time_alive": 1470,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 76,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 34,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 32,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 57,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 46,
  "time_alive": 1200,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 49,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 54,
  "time_alive": 1097,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 37,
  "time_alive": 1209,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 51,
  "time_alive": 1131,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 24,
  "time_alive": 1294,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 87,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 20,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 33,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 14,
  "time_alive": 1355,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 82,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 35,
  "time_alive": 1264,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 2,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 5,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 33,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 65,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 67,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 69,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 59,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 2,
  "time_alive": 1492,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 78,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 33,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 77,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 56,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 87,
  "time_alive": 349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 63,
  "time_alive": 945,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 28,
  "time_alive": 1256,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 45,
  "time_alive": 1171,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 17,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 47,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 89,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 17,
  "time_alive": 1320,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 30,
  "time_alive": 1320,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 68,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 31,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 8,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 6,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 17,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 50,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 34,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 57,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 11,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 76,
  "time_alive": 709,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 40,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 22,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 52,
  "time_alive": 1125,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 46,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 34,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 34,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 16,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 13,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 53,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "44dbb37558e74f0abdbbc8a8b31a78de",
  "placement": 15,
  "time_alive": 1331,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 3,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 10,
  "time_alive": 1403,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 72,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 48,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 53,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 87,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 61,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 83,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 6,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 46,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 83,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 66,
  "time_alive": 551,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 53,
  "time_alive": 1124,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 39,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 48,
  "time_alive": 1084,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 79,
  "time_alive": 503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 64,
  "time_alive": 936,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 92,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 11,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 20,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 14,
  "time_alive": 1298,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 71,
  "time_alive": 707,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 61,
  "time_alive": 694,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 15,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 49,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 44,
  "time_alive": 1173,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 84,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 91,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 8,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 38,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 2,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 94,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 41,
  "time_alive": 1132,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 87,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 80,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 13,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 47,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 83,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 24,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 4,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 5,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 52,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 71,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 15,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 55,
  "time_alive": 987,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 41,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 10,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 7,
  "time_alive": 1364,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 40,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 59,
  "time_alive": 968,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 19,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 71,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 26,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 12,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 52,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 31,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 64,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 58,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 13,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 54,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 91,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 77,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 78,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 39,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 34,
  "time_alive": 1269,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 23,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 35,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 7,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 3,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 19,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 68,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 35,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 1,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 63,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 50,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 13,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 86,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 86,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 95,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 58,
  "time_alive": 1047,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 42,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 21,
  "time_alive": 1293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 46,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 27,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 7,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 79,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 6,
  "time_alive": 1380,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 44,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 49,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 80,
  "time_alive": 547,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 55,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 29,
  "time_alive": 1274,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 69,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 61,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 28,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 73,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 90,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 28,
  "time_alive": 1291,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 56,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 16,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 66,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 9,
  "time_alive": 1393,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 7,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 27,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 39,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 14,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 64,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 26,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 25,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 85,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 1,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 45,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 44,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 74,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 10,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 52,
  "time_alive": 996,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 70,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 25,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 60,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 15,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 34,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 35,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 23,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 69,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 22,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 25,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 50,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 90,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 4,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "c4624cd17f5e41c684ed4d834025ea76",
  "placement": 76,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 62,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 62,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 69,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 72,
  "time_alive": 654,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 12,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 41,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 26,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 50,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 26,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 24,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 9,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 16,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 12,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 23,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 70,
  "time_alive": 806,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 53,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 36,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 70,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 30,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 36,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 83,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 3,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 67,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 2,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 85,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 43,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 94,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 19,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 91,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 31,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 24,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 21,
  "time_alive": 1299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 51,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 23,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 35,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 31,
  "time_alive": 1287,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 55,
  "time_alive": 1083,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 7,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 62,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 90,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 12,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 64,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 70,
  "time_alive": 826,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 22,
  "time_alive": 1298,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 86,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 44,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "b8107b50cafc46659d7dc281a3dcbc4f",
  "placement": 47,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 56,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 82,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 37,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 20,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 11,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 10,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 14,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 17,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 48,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 45,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 32,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "ac924f441cb94f27b7bbd23a0fdbb9a2",
  "placement": 11,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 67,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 46,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 92,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 10,
  "time_alive": 1367,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 74,
  "time_alive": 681,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 71,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 19,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 51,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 59,
  "time_alive": 1023,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 66,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 26,
  "time_alive": 1284,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 32,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 80,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 66,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 68,
  "time_alive": 885,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 74,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 89,
  "time_alive": 318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 72,
  "time_alive": 697,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 48,
  "time_alive": 1188,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 97,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 96,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 26,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 11,
  "time_alive": 1337,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 23,
  "time_alive": 1296,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 37,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 21,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 14,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 23,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 17,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 84,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 35,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 66,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 57,
  "time_alive": 1048,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 10,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 33,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "a0f01238d873491fbad699dba1d164d0",
  "placement": 36,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 85,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 12,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 13,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 73,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 29,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 75,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 28,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 43,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 13,
  "time_alive": 1344,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 47,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 82,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "2d278d9d695740ce9b57231f74ab338e",
  "placement": 34,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 82,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 48,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 30,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 65,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 48,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 65,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 81,
  "time_alive": 542,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 8,
  "time_alive": 1355,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 78,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 6,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 62,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "0da5c5ee8b674c3d8b0011143a9cc0c7",
  "placement": 59,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 77,
  "time_alive": 786,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 98,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 16,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 58,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 58,
  "time_alive": 1003,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 99,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 90,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 5,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 6,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 89,
  "time_alive": 552,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 52,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 20,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 61,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 83,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 28,
  "time_alive": 1295,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 87,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 80,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 80,
  "time_alive": 577,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 78,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 18,
  "time_alive": 1310,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "3789f9e9bb984be192ecf4a79cdda6b7",
  "placement": 93,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 72,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 56,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 38,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 59,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 88,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 61,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 25,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 57,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 9,
  "time_alive": 1378,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 22,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 54,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "f3234220ea8a404bb89f66afce721f76",
  "placement": 55,
  "time_alive": 913,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 20,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 69,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 10,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 42,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 34,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 44,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 16,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 28,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 46,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 34,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 24,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 89,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 9,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 30,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 73,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 40,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 51,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 23,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 68,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 32,
  "time_alive": 1279,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 32,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 62,
  "time_alive": 910,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 68,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "6e30afeec61c4aff8b565fc7545e1f88",
  "placement": 49,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 75,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 88,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 90,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 5,
  "time_alive": 1403,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 87,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 21,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 33,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 54,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 23,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 84,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 91,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "ce9af94565a14dc8a9c871eb69118368",
  "placement": 19,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 91,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 87,
  "time_alive": 419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 23,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 12,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 62,
  "time_alive": 977,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 16,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 53,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 42,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 19,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 79,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 64,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d",
  "placement": 75,
  "time_alive": 379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 78,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 43,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 5,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 15,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 33,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 54,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 59,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 65,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 30,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 80,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 65,
  "time_alive": 821,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 45,
  "time_alive": 1143,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 65,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 18,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 15,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 64,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 24,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 52,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 93,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 9,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 44,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 56,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 22,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "2d386ad29dd84db189f2755362071753",
  "placement": 78,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 94,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 34,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 57,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 63,
  "time_alive": 1070,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 98,
  "time_alive": 79,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 3,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 78,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 58,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 62,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 20,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 50,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "ff2dd05c0a954c4b9494b28f3a75750c",
  "placement": 41,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 21,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 81,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 16,
  "time_alive": 1353,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 94,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 77,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 91,
  "time_alive": 321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 89,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 81,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 19,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 43,
  "time_alive": 1175,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "04307c3fd95c45bfb02291b6ac1e5188",
  "placement": 58,
  "time_alive": 831,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 25,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 84,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 26,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 90,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 76,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 50,
  "time_alive": 1111,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 27,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 14,
  "time_alive": 1338,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 51,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 32,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 77,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "67a672b498e94a4a9162f643e659d0af",
  "placement": 43,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 83,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 65,
  "time_alive": 1017,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 97,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 76,
  "time_alive": 540,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 9,
  "time_alive": 1371,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 37,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 43,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 48,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 79,
  "time_alive": 592,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 23,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 89,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 72,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 69,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 77,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 6,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 36,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 37,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 96,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 89,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 92,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 82,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 63,
  "time_alive": 874,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 55,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "ede24f6ef25a41c5a9196e5c549766b5",
  "placement": 14,
  "time_alive": 1333,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 30,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 83,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 91,
  "time_alive": 315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 95,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 28,
  "time_alive": 1286,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 90,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 76,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 78,
  "time_alive": 587,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 70,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 18,
  "time_alive": 1293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 40,
  "time_alive": 1202,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 83,
  "time_alive": 225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 29,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 64,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 46,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 77,
  "time_alive": 509,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 40,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 38,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 24,
  "time_alive": 1337,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 40,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 61,
  "time_alive": 1006,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 16,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 76,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "02fe95548e424259bcab57506ff62568",
  "placement": 90,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 32,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 22,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 36,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 44,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 10,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 76,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 18,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 86,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 38,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 31,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 90,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "fcc822b5191e4779b147ee488656a384",
  "placement": 40,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 42,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 80,
  "time_alive": 627,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 50,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 57,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 47,
  "time_alive": 1193,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 19,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 37,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 77,
  "time_alive": 607,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 39,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 89,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 79,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 86,
  "time_alive": 174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 23,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 29,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 56,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 18,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 57,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 78,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 84,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 47,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 42,
  "time_alive": 1204,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 73,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 16,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 22,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 61,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 59,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 62,
  "time_alive": 941,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 91,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 35,
  "time_alive": 1267,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 51,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 61,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 35,
  "time_alive": 1253,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 49,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 63,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 70,
  "time_alive": 503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 95,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 73,
  "time_alive": 751,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 87,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 69,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 100,
  "time_alive": 52,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 32,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 45,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 68,
  "time_alive": 877,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 11,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 11,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 38,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "a83014f91e0c406da2c9840c015f3400",
  "placement": 44,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 41,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 37,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 67,
  "time_alive": 892,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 60,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 27,
  "time_alive": 1291,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 48,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 49,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 30,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 60,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 85,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 78,
  "time_alive": 517,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "a9461a9467f54f3487d9f66b8bc9df32",
  "placement": 87,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 28,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 28,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 18,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 26,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 78,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 27,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 10,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 53,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 90,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 92,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 73,
  "time_alive": 611,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 91,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 81,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 67,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 96,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 29,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 66,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 25,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 85,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 96,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 85,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 15,
  "time_alive": 1296,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 60,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "1d2cb0407ceb4e05941157c52b3e732f",
  "placement": 50,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 50,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 81,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 11,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 98,
  "time_alive": 80,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 63,
  "time_alive": 956,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 39,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 82,
  "time_alive": 539,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 64,
  "time_alive": 1024,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 93,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 12,
  "time_alive": 1303,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 81,
  "time_alive": 477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 74,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 84,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 68,
  "time_alive": 866,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 61,
  "time_alive": 956,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 27,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 72,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 60,
  "time_alive": 960,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 65,
  "time_alive": 1065,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 75,
  "time_alive": 625,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 86,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 82,
  "time_alive": 481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 59,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 73,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 100,
  "time_alive": 43,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 72,
  "time_alive": 805,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 24,
  "time_alive": 1303,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 88,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 84,
  "time_alive": 414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 15,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 42,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 45,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 71,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 77,
  "time_alive": 565,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 88,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "15e34abd4208430fba48d1d584d10c8a",
  "placement": 88,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 58,
  "time_alive": 1064,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 9,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 45,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 47,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 67,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 79,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 97,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 81,
  "time_alive": 500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 84,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 75,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 93,
  "time_alive": 190,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68",
  "placement": 71,
  "time_alive": 441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 40,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 58,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 49,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 7,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 70,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 53,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 73,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 69,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 75,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 21,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 66,
  "time_alive": 809,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 30,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 92,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 36,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 54,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 25,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 26,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 67,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 71,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 16,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 24,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 61,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 30,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 77,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 45,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 41,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 79,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 43,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 24,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 57,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 93,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 14,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 59,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 7,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 63,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 79,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 27,
  "time_alive": 1330,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 89,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 67,
  "time_alive": 919,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 60,
  "time_alive": 1001,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 97,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 83,
  "time_alive": 488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 73,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "6120f933beeb4b5eaee88e98803b1a3e",
  "placement": 89,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 44,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 75,
  "time_alive": 723,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 60,
  "time_alive": 959,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 54,
  "time_alive": 1171,
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
    