const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 4,
  "time_alive": 1479,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 5,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 34,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 88,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 44,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 18,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 1,
  "time_alive": 1513,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 6,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 24,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 48,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 38,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 76,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 84,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 1,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 12,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 46,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 72,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 24,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 3,
  "time_alive": 1488,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 43,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 7,
  "time_alive": 1499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 9,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 92,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 57,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 45,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 57,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 91,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 3,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 7,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 48,
  "time_alive": 1203,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 22,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 29,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 9,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 32,
  "time_alive": 1367,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 83,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 78,
  "time_alive": 408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 60,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 82,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 4,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 13,
  "time_alive": 1420,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 46,
  "time_alive": 1208,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 84,
  "time_alive": 321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 46,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 7,
  "time_alive": 1467,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 44,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 50,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 13,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 59,
  "time_alive": 886,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 23,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 22,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 13,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 97,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 75,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 11,
  "time_alive": 1458,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 78,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 8,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 68,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 22,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 26,
  "time_alive": 1370,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 52,
  "time_alive": 1143,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 8,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 21,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 87,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 6,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 37,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 68,
  "time_alive": 617,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 88,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 19,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 24,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 15,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 28,
  "time_alive": 1383,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 11,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 27,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 14,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 55,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 21,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 51,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 25,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 18,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 20,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 61,
  "time_alive": 1111,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 24,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 35,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 83,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 44,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 38,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 78,
  "time_alive": 748,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 6,
  "time_alive": 1491,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 16,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 56,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 2,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 45,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 29,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 29,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 67,
  "time_alive": 621,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 6,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 69,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 57,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 70,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 14,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 13,
  "time_alive": 1455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 19,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 11,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 42,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 73,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 86,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 4,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 40,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 47,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 49,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 7,
  "time_alive": 1477,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 77,
  "time_alive": 669,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 58,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 10,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 78,
  "time_alive": 787,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 70,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 20,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 54,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 34,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 47,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 14,
  "time_alive": 1438,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 51,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 17,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 52,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 25,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 21,
  "time_alive": 1408,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 38,
  "time_alive": 1342,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 38,
  "time_alive": 1341,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 82,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 47,
  "time_alive": 1220,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 30,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 87,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 72,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 15,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 81,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 10,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 64,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 49,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 5,
  "time_alive": 1520,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 69,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 84,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 8,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 38,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 68,
  "time_alive": 942,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 3,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 62,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 36,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 55,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 15,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 31,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 65,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 64,
  "time_alive": 999,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 33,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 19,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 53,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 83,
  "time_alive": 585,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 94,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 16,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 3,
  "time_alive": 1515,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 74,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 18,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 64,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 31,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 75,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 74,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 5,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 13,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 59,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 30,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 36,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 17,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 66,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 87,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 17,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 25,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 37,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 8,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 70,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 16,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 88,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 81,
  "time_alive": 709,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 10,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 46,
  "time_alive": 1238,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 80,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 16,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 54,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 33,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 63,
  "time_alive": 1004,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 17,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 96,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 91,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 21,
  "time_alive": 1412,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 21,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 19,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 72,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 12,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 15,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 90,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 51,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 64,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 39,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 48,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 19,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 28,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 35,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 61,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 26,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 54,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 50,
  "time_alive": 1213,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 73,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 23,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 16,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 23,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 9,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 60,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 60,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 77,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 27,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 14,
  "time_alive": 1454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 27,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 55,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 43,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 60,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 55,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 9,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 97,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 85,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 33,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 57,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 9,
  "time_alive": 1469,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 50,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 54,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 59,
  "time_alive": 1135,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 31,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 20,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 29,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "5f74cafeacf44efbb6a90577dff68cc1",
  "placement": 94,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "5f74cafeacf44efbb6a90577dff68cc1",
  "placement": 58,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "5f74cafeacf44efbb6a90577dff68cc1",
  "placement": 77,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "5f74cafeacf44efbb6a90577dff68cc1",
  "placement": 18,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "5f74cafeacf44efbb6a90577dff68cc1",
  "placement": 11,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "5f74cafeacf44efbb6a90577dff68cc1",
  "placement": 21,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 70,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 75,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 10,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 83,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 50,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 27,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 98,
  "time_alive": 78,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 23,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 93,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 74,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 5,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 73,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 33,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 28,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 58,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 28,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 18,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 81,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 51,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 80,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 6,
  "time_alive": 1518,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 67,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 57,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 60,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 41,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 9,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 47,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 52,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 42,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 54,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 63,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 64,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 25,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 15,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "94582db3215e46f0956a36ba245ab4e1",
  "placement": 86,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "94582db3215e46f0956a36ba245ab4e1",
  "placement": 62,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "94582db3215e46f0956a36ba245ab4e1",
  "placement": 16,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "94582db3215e46f0956a36ba245ab4e1",
  "placement": 49,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "94582db3215e46f0956a36ba245ab4e1",
  "placement": 49,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "94582db3215e46f0956a36ba245ab4e1",
  "placement": 49,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 24,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 67,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 50,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 39,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 39,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 43,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 26,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 63,
  "time_alive": 1023,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 23,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 72,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 45,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 56,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 43,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 92,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 39,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 11,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 65,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 41,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 71,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 26,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 48,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 58,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 73,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 30,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 62,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 25,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 79,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 26,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 76,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 22,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 29,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 74,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 80,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 42,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 31,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 33,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 89,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 56,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 11,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 40,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 41,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 77,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 49,
  "time_alive": 1208,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 30,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 46,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 30,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 90,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 87,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 44,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 33,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 61,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 76,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 30,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 44,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 66,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 51,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 41,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 54,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 48,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 62,
  "time_alive": 713,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 73,
  "time_alive": 876,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 36,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 32,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 47,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 62,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 91,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 93,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 93,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 75,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 14,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 88,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 42,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 32,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 53,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 78,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 25,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 87,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 31,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 36,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 84,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 26,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 43,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 34,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 53,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "94206ce3f2a44cb8831fa0bb367b017e",
  "placement": 59,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "94206ce3f2a44cb8831fa0bb367b017e",
  "placement": 39,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "94206ce3f2a44cb8831fa0bb367b017e",
  "placement": 74,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "94206ce3f2a44cb8831fa0bb367b017e",
  "placement": 80,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "94206ce3f2a44cb8831fa0bb367b017e",
  "placement": 32,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "94206ce3f2a44cb8831fa0bb367b017e",
  "placement": 71,
  "time_alive": 569,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 69,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 65,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 69,
  "time_alive": 977,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 91,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 23,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 50,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 20,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 61,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 52,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 44,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 70,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 92,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 65,
  "time_alive": 1033,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 41,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 27,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 53,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 64,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 28,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 70,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 76,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 34,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 85,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 45,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 81,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 86,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 18,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 56,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 78,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 38,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 31,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 66,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 55,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 89,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 51,
  "time_alive": 1116,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 85,
  "time_alive": 274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "849f9b49e63f45598122df9c8391ad49",
  "placement": 82,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "849f9b49e63f45598122df9c8391ad49",
  "placement": 73,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "849f9b49e63f45598122df9c8391ad49",
  "placement": 40,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "849f9b49e63f45598122df9c8391ad49",
  "placement": 45,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "849f9b49e63f45598122df9c8391ad49",
  "placement": 59,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "849f9b49e63f45598122df9c8391ad49",
  "placement": 83,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 55,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 52,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 36,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 41,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 66,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 89,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 61,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 82,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 65,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 60,
  "time_alive": 1014,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 40,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 57,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 37,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 93,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 47,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 88,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 77,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 35,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 29,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 86,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 93,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 80,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 79,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 24,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 84,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 63,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 96,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 90,
  "time_alive": 205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 76,
  "time_alive": 857,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 45,
  "time_alive": 1259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 89,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 71,
  "time_alive": 909,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 80,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 95,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 91,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 95,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 66,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 96,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 58,
  "time_alive": 1024,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 65,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "b3d020e314ad40c4902b1e97cc815784",
  "placement": 85,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "b3d020e314ad40c4902b1e97cc815784",
  "placement": 90,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "b3d020e314ad40c4902b1e97cc815784",
  "placement": 63,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "b3d020e314ad40c4902b1e97cc815784",
  "placement": 53,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "b3d020e314ad40c4902b1e97cc815784",
  "placement": 68,
  "time_alive": 930,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "b3d020e314ad40c4902b1e97cc815784",
  "placement": 69,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "7893124e40e243cda052f3af1fe78c6d",
  "placement": 75,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "7893124e40e243cda052f3af1fe78c6d",
  "placement": 79,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "7893124e40e243cda052f3af1fe78c6d",
  "placement": 27,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "7893124e40e243cda052f3af1fe78c6d",
  "placement": 84,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "7893124e40e243cda052f3af1fe78c6d",
  "placement": 89,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "7893124e40e243cda052f3af1fe78c6d",
  "placement": 82,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 67,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 71,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 95,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 82,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 40,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 86,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 72,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 77,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 86,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 87,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 95,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 36,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "d54bf8c45e87476eb6ea10f37924f962",
  "placement": 39,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "d54bf8c45e87476eb6ea10f37924f962",
  "placement": 96,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "d54bf8c45e87476eb6ea10f37924f962",
  "placement": 67,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "d54bf8c45e87476eb6ea10f37924f962",
  "placement": 95,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "d54bf8c45e87476eb6ea10f37924f962",
  "placement": 91,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "d54bf8c45e87476eb6ea10f37924f962",
  "placement": 63,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 52,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 81,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 62,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 92,
  "time_alive": 252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 67,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 79,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 95,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 42,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 96,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 81,
  "time_alive": 619,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 94,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 90,
  "time_alive": 385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 94,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 59,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 79,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 93,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 92,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 89,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 90,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 69,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 74,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 72,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 92,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 85,
  "time_alive": 619,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 83,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 94,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 18,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 2,
  "time_alive": 1517,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 12,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 5,
  "time_alive": 1465,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 10,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 3,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1498,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 7,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 10,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 3,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 12,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 26,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 1,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 76,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 54,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 11,
  "time_alive": 1397,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 2,
  "time_alive": 1522,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 84,
  "time_alive": 782,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 21,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 16,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 17,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 17,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 1,
  "time_alive": 1522,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 3,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 23,
  "time_alive": 1387,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 24,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 7,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 21,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 65,
  "time_alive": 997,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 5,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 5,
  "time_alive": 1506,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 27,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 6,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 78,
  "time_alive": 655,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 16,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 14,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 8,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 18,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 3,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 85,
  "time_alive": 462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 11,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 39,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 90,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 45,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 57,
  "time_alive": 1087,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 1,
  "time_alive": 1480,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 8,
  "time_alive": 1456,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 48,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 17,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 3,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 29,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 2,
  "time_alive": 1480,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 72,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 96,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 37,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 6,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 13,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 25,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 13,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 1,
  "time_alive": 1504,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 77,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 23,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 92,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 6,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 40,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 28,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 11,
  "time_alive": 1447,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 5,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 60,
  "time_alive": 1021,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 28,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 85,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 12,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 12,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 13,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 47,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 46,
  "time_alive": 1161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 22,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 31,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 24,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 38,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 4,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 13,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 29,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 16,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 89,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 66,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 1,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 34,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 10,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 2,
  "time_alive": 1504,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 26,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 61,
  "time_alive": 998,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 77,
  "time_alive": 822,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 41,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 36,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 7,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 91,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 82,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 19,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 39,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 81,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 40,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 11,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 8,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 43,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 4,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 15,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 64,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 25,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 12,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 8,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 38,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 90,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 4,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 70,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 2,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 45,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 50,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 41,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 42,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 71,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 24,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 4,
  "time_alive": 1464,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 15,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 40,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 20,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 33,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 9,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 89,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 17,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 35,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 4,
  "time_alive": 1478,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 72,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 47,
  "time_alive": 1160,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 7,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 47,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 10,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 51,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 21,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 14,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 43,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 56,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 19,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 20,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 66,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 9,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 32,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 51,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 41,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 22,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 16,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 7,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 58,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 8,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 6,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 48,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 87,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 27,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 70,
  "time_alive": 944,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 24,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 85,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 29,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 19,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 39,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 49,
  "time_alive": 1195,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 30,
  "time_alive": 1333,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 22,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 7,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 50,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 83,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 74,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 63,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 27,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 8,
  "time_alive": 1440,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 37,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 66,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 34,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 13,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 71,
  "time_alive": 896,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 69,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 38,
  "time_alive": 1301,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 15,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 63,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 35,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 46,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 43,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 27,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 84,
  "time_alive": 502,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 14,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 58,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 36,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 21,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 31,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 60,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 18,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 45,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 3,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 49,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 97,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 24,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 48,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 70,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 62,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 14,
  "time_alive": 1403,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 34,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 26,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 88,
  "time_alive": 415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 94,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 15,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 97,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 18,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 71,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 37,
  "time_alive": 1318,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 99,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 18,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 10,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 35,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 69,
  "time_alive": 860,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 71,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 22,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 38,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 96,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 90,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 12,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 19,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 21,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 49,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 59,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 15,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 38,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 23,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 52,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 13,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 82,
  "time_alive": 720,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 23,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 32,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 31,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 82,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 9,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 28,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 89,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 40,
  "time_alive": 1239,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 90,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 79,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 25,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 30,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 74,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 67,
  "time_alive": 893,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 9,
  "time_alive": 1451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 83,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 56,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 15,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 98,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 23,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 20,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 66,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 33,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 26,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 42,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 74,
  "time_alive": 799,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 5,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 36,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 61,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 34,
  "time_alive": 1312,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 83,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 82,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 6,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 29,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 57,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 80,
  "time_alive": 795,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 20,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 48,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 33,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 34,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 14,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 54,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 44,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 65,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 81,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 44,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 88,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 19,
  "time_alive": 1377,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 32,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 49,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 53,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 6,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 58,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 42,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 64,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 94,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 41,
  "time_alive": 1295,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 38,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 54,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 41,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 33,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 55,
  "time_alive": 1114,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 78,
  "time_alive": 629,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 17,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 60,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 62,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 100,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 59,
  "time_alive": 1015,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 24,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 72,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 44,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 9,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 80,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 36,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 97,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 64,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 69,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 37,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 11,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 37,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 45,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 9,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 84,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 73,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 58,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 42,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 23,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 16,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 57,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 94,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 97,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 98,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 62,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 52,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 92,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 22,
  "time_alive": 1368,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 35,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 76,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 49,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 29,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 60,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 62,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 33,
  "time_alive": 1308,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 87,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 98,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 96,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 99,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 63,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 16,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 25,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 11,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 74,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 58,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 55,
  "time_alive": 1093,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 44,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 60,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 10,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 68,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 78,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 39,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 57,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 89,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 33,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 47,
  "time_alive": 1240,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 95,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 26,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 73,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 54,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 46,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 65,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 68,
  "time_alive": 941,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 65,
  "time_alive": 938,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 100,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 28,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 73,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 84,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 55,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 91,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 5,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 75,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 92,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 92,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 17,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 68,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 20,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 51,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 32,
  "time_alive": 1332,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 45,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 52,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 71,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 91,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 77,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 65,
  "time_alive": 1060,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 70,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 46,
  "time_alive": 1211,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 95,
  "time_alive": 331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 80,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 82,
  "time_alive": 549,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 57,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 79,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 89,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 61,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 54,
  "time_alive": 1119,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 35,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 50,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 34,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 91,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 69,
  "time_alive": 909,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 77,
  "time_alive": 710,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 68,
  "time_alive": 967,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 42,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 55,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 40,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 51,
  "time_alive": 1180,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 52,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 79,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 59,
  "time_alive": 1098,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 50,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 56,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 96,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 98,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 30,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 85,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 73,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 94,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 28,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 31,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 91,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 20,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 97,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 86,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 52,
  "time_alive": 1121,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 63,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 99,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 95,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 32,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 36,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 30,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 92,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 83,
  "time_alive": 517,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 91,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 86,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 47,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 25,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 75,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 27,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 27,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 78,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 67,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 46,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 87,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 80,
  "time_alive": 604,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 37,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 39,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 87,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 84,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 95,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 44,
  "time_alive": 1242,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 67,
  "time_alive": 1002,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 98,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 64,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 70,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 30,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 62,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 86,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 87,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 50,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 75,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 22,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 95,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 74,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 28,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 74,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 45,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 79,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 66,
  "time_alive": 978,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 54,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 59,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 63,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 79,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 18,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 93,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 69,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 30,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 81,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 86,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 88,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 26,
  "time_alive": 1366,
  "elims": 2,
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
    