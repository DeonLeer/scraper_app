const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 72,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 5,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 48,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 36,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 42,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 40,
  "time_alive": 1257,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 6,
  "time_alive": 1499,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 61,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 49,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 25,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 21,
  "time_alive": 1377,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 17,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 67,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 54,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 16,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 27,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "2e35b4986faf40d4ac9c6c2028c93749",
  "placement": 31,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "2e35b4986faf40d4ac9c6c2028c93749",
  "placement": 99,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "2e35b4986faf40d4ac9c6c2028c93749",
  "placement": 7,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "2e35b4986faf40d4ac9c6c2028c93749",
  "placement": 17,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "2e35b4986faf40d4ac9c6c2028c93749",
  "placement": 56,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "2e35b4986faf40d4ac9c6c2028c93749",
  "placement": 21,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 18,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 7,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 30,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 34,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 82,
  "time_alive": 562,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 80,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 58,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 12,
  "time_alive": 1378,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 77,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 3,
  "time_alive": 1478,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 66,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 67,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 9,
  "time_alive": 1440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 9,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 89,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 32,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 38,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 44,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 20,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 55,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 41,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 46,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 45,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 6,
  "time_alive": 1451,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 67,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 6,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 16,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 57,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 40,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 48,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 94,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 96,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 17,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 24,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 41,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 16,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 15,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 58,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 63,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 52,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 1,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "85a5032476cb49419f5806eba2e2012c",
  "placement": 10,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "85a5032476cb49419f5806eba2e2012c",
  "placement": 75,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "85a5032476cb49419f5806eba2e2012c",
  "placement": 60,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "85a5032476cb49419f5806eba2e2012c",
  "placement": 22,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "85a5032476cb49419f5806eba2e2012c",
  "placement": 18,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "85a5032476cb49419f5806eba2e2012c",
  "placement": 56,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 24,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 27,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 78,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 91,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 50,
  "time_alive": 1185,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 7,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 17,
  "time_alive": 1388,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 82,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 81,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 28,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 76,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 20,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 35,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 46,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 48,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 13,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 32,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 28,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 12,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 48,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 33,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 62,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 13,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 45,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 32,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 30,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 29,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 49,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 20,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 37,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 93,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 15,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 54,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 21,
  "time_alive": 1376,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 89,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 40,
  "time_alive": 1284,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 62,
  "time_alive": 1064,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 34,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 51,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 37,
  "time_alive": 1330,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 14,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 72,
  "time_alive": 579,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "c3abda5df33146afa899e622772a8004",
  "placement": 16,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "c3abda5df33146afa899e622772a8004",
  "placement": 25,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "c3abda5df33146afa899e622772a8004",
  "placement": 25,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "c3abda5df33146afa899e622772a8004",
  "placement": 68,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "c3abda5df33146afa899e622772a8004",
  "placement": 68,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "c3abda5df33146afa899e622772a8004",
  "placement": 81,
  "time_alive": 409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 29,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 47,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 87,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 75,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 55,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 8,
  "time_alive": 1437,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 36,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 33,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 93,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 40,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 47,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04",
  "placement": 23,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 14,
  "time_alive": 1400,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 23,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 97,
  "time_alive": 79,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 77,
  "time_alive": 756,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 86,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 89,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 26,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 21,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 57,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 43,
  "time_alive": 1290,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 72,
  "time_alive": 821,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 66,
  "time_alive": 723,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 78,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 53,
  "time_alive": 1138,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 24,
  "time_alive": 1370,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 50,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 15,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 42,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 63,
  "time_alive": 1055,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 39,
  "time_alive": 1282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 19,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 18,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 58,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 61,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 57,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 60,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 64,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 58,
  "time_alive": 1075,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 2,
  "time_alive": 1554,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 97,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 45,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 72,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 18,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 19,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 79,
  "time_alive": 706,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 53,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 44,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 20,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 58,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 85,
  "time_alive": 505,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 19,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 46,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 8,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 90,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 65,
  "time_alive": 1086,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 84,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 25,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 59,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 22,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 41,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 26,
  "time_alive": 1342,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 45,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 70,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 50,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 89,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 84,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 1,
  "time_alive": 1558,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 65,
  "time_alive": 993,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 59,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 52,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 69,
  "time_alive": 929,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 45,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 50,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 4,
  "time_alive": 1478,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 96,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 79,
  "time_alive": 477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 93,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 31,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 81,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 17,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 82,
  "time_alive": 399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 34,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 81,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 22,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 76,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 33,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 63,
  "time_alive": 992,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 87,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 36,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 28,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 36,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 30,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 57,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 70,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 59,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 8,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 83,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 42,
  "time_alive": 1315,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 73,
  "time_alive": 574,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f9a6da5269f74baf998c669d4fa394b9",
  "placement": 83,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f9a6da5269f74baf998c669d4fa394b9",
  "placement": 57,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f9a6da5269f74baf998c669d4fa394b9",
  "placement": 69,
  "time_alive": 944,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f9a6da5269f74baf998c669d4fa394b9",
  "placement": 78,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f9a6da5269f74baf998c669d4fa394b9",
  "placement": 23,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f9a6da5269f74baf998c669d4fa394b9",
  "placement": 19,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 71,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 64,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 82,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 31,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 11,
  "time_alive": 1447,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 77,
  "time_alive": 484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 19,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 94,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 37,
  "time_alive": 1307,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 60,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 83,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 38,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 49,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 5,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 36,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 41,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 65,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "630eaf75b35e4381a4f2c5bbd3f87fb4",
  "placement": 65,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 92,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 61,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 70,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 95,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 12,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 17,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "a637689867ad4e919d72d1de82a52afd",
  "placement": 65,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "a637689867ad4e919d72d1de82a52afd",
  "placement": 95,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "a637689867ad4e919d72d1de82a52afd",
  "placement": 91,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "a637689867ad4e919d72d1de82a52afd",
  "placement": 63,
  "time_alive": 1021,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "a637689867ad4e919d72d1de82a52afd",
  "placement": 9,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "a637689867ad4e919d72d1de82a52afd",
  "placement": 29,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "0881103bfe054831ae74b5060e5c4463",
  "placement": 4,
  "time_alive": 1487,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "0881103bfe054831ae74b5060e5c4463",
  "placement": 97,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "0881103bfe054831ae74b5060e5c4463",
  "placement": 73,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "0881103bfe054831ae74b5060e5c4463",
  "placement": 88,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "0881103bfe054831ae74b5060e5c4463",
  "placement": 93,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "0881103bfe054831ae74b5060e5c4463",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 38,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 29,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 26,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 53,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 69,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "56b86a42d0ef44068ed424d58e51b2c1",
  "placement": 59,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "56b86a42d0ef44068ed424d58e51b2c1",
  "placement": 98,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "56b86a42d0ef44068ed424d58e51b2c1",
  "placement": 92,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "56b86a42d0ef44068ed424d58e51b2c1",
  "placement": 48,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "56b86a42d0ef44068ed424d58e51b2c1",
  "placement": 21,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "56b86a42d0ef44068ed424d58e51b2c1",
  "placement": 30,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 76,
  "time_alive": 713,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 80,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 5,
  "time_alive": 1514,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 51,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 90,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 87,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "4581049a90d24d2983aa7a890e93329f",
  "placement": 41,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "4581049a90d24d2983aa7a890e93329f",
  "placement": 69,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "4581049a90d24d2983aa7a890e93329f",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "4581049a90d24d2983aa7a890e93329f",
  "placement": 47,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "4581049a90d24d2983aa7a890e93329f",
  "placement": 27,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "4581049a90d24d2983aa7a890e93329f",
  "placement": 31,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 50,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 89,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 21,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 33,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 80,
  "time_alive": 650,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 55,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 56,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 52,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 34,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 74,
  "time_alive": 850,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 36,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 35,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 55,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 4,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 84,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 86,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 98,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 76,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 73,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 50,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 46,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 30,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 87,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 26,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 90,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 31,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 14,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 97,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 71,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18",
  "placement": 94,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 85,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 77,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 61,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 92,
  "time_alive": 238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 10,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 70,
  "time_alive": 616,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 95,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 70,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 68,
  "time_alive": 980,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 56,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 88,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 9,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 28,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 51,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 40,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 53,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 97,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 43,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 80,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 54,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 27,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 72,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 63,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 34,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "75cb3b84e10842579173de75b761a514",
  "placement": 86,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "75cb3b84e10842579173de75b761a514",
  "placement": 63,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "75cb3b84e10842579173de75b761a514",
  "placement": 62,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "75cb3b84e10842579173de75b761a514",
  "placement": 20,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "75cb3b84e10842579173de75b761a514",
  "placement": 81,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "75cb3b84e10842579173de75b761a514",
  "placement": 47,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 99,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 56,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 94,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 69,
  "time_alive": 912,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 28,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 71,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 88,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 73,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 35,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 25,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 77,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 78,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "e158b1115f984113be430857f95e1a40",
  "placement": 68,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "e158b1115f984113be430857f95e1a40",
  "placement": 22,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "e158b1115f984113be430857f95e1a40",
  "placement": 79,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "e158b1115f984113be430857f95e1a40",
  "placement": 39,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "e158b1115f984113be430857f95e1a40",
  "placement": 51,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "e158b1115f984113be430857f95e1a40",
  "placement": 62,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "445da21540f749e588a3647c59908cdb",
  "placement": 72,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "445da21540f749e588a3647c59908cdb",
  "placement": 78,
  "time_alive": 814,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "445da21540f749e588a3647c59908cdb",
  "placement": 86,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "445da21540f749e588a3647c59908cdb",
  "placement": 66,
  "time_alive": 973,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "445da21540f749e588a3647c59908cdb",
  "placement": 29,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "445da21540f749e588a3647c59908cdb",
  "placement": 85,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 27,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 66,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 74,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 80,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 64,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 54,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 60,
  "time_alive": 1067,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 28,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 94,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 92,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 93,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "30c713e6d6cf4a85997572581b7ba3ac",
  "placement": 77,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "30c713e6d6cf4a85997572581b7ba3ac",
  "placement": 42,
  "time_alive": 1224,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "30c713e6d6cf4a85997572581b7ba3ac",
  "placement": 45,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "30c713e6d6cf4a85997572581b7ba3ac",
  "placement": 93,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "30c713e6d6cf4a85997572581b7ba3ac",
  "placement": 62,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "30c713e6d6cf4a85997572581b7ba3ac",
  "placement": 75,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "665973174ecc4ce1aecbf0141184222f",
  "placement": 37,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "665973174ecc4ce1aecbf0141184222f",
  "placement": 86,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "665973174ecc4ce1aecbf0141184222f",
  "placement": 85,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "665973174ecc4ce1aecbf0141184222f",
  "placement": 55,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "665973174ecc4ce1aecbf0141184222f",
  "placement": 69,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "665973174ecc4ce1aecbf0141184222f",
  "placement": 91,
  "time_alive": 204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 47,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 32,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 59,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 64,
  "time_alive": 1004,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 57,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "0f50a1603c0342e28773d901ccb57b89",
  "placement": 58,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "ed0fe57f9def44949b9484d878fa5d48",
  "placement": 98,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "ed0fe57f9def44949b9484d878fa5d48",
  "placement": 100,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "ed0fe57f9def44949b9484d878fa5d48",
  "placement": 38,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "ed0fe57f9def44949b9484d878fa5d48",
  "placement": 79,
  "time_alive": 688,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "ed0fe57f9def44949b9484d878fa5d48",
  "placement": 73,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "ed0fe57f9def44949b9484d878fa5d48",
  "placement": 51,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 52,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 43,
  "time_alive": 1223,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 47,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "47f8f4b78651470db8657546263f5982",
  "placement": 97,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "47f8f4b78651470db8657546263f5982",
  "placement": 87,
  "time_alive": 582,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "47f8f4b78651470db8657546263f5982",
  "placement": 88,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "47f8f4b78651470db8657546263f5982",
  "placement": 87,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "47f8f4b78651470db8657546263f5982",
  "placement": 75,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "47f8f4b78651470db8657546263f5982",
  "placement": 39,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "4e50c48f25564c659a6cf1f83d76cccc",
  "placement": 74,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "4e50c48f25564c659a6cf1f83d76cccc",
  "placement": 35,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "4e50c48f25564c659a6cf1f83d76cccc",
  "placement": 53,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "4e50c48f25564c659a6cf1f83d76cccc",
  "placement": 71,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "4e50c48f25564c659a6cf1f83d76cccc",
  "placement": 84,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "4e50c48f25564c659a6cf1f83d76cccc",
  "placement": 92,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 96,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 38,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 76,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 89,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 44,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 90,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 82,
  "time_alive": 446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 91,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 80,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 82,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 46,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 86,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 61,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 71,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 43,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 90,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 94,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 79,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 43,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 92,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 49,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 59,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 95,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 64,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "650e42c9924141978d9633759f6213c3",
  "placement": 64,
  "time_alive": 1042,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "650e42c9924141978d9633759f6213c3",
  "placement": 74,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "650e42c9924141978d9633759f6213c3",
  "placement": 52,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "650e42c9924141978d9633759f6213c3",
  "placement": 73,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "650e42c9924141978d9633759f6213c3",
  "placement": 52,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "650e42c9924141978d9633759f6213c3",
  "placement": 88,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "df5a7f45146a458e86af1c4f6d899558",
  "placement": 53,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "df5a7f45146a458e86af1c4f6d899558",
  "placement": 88,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "df5a7f45146a458e86af1c4f6d899558",
  "placement": 44,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "df5a7f45146a458e86af1c4f6d899558",
  "placement": 85,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "df5a7f45146a458e86af1c4f6d899558",
  "placement": 84,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 91,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 85,
  "time_alive": 594,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 84,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 67,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 90,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 70,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 91,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 68,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "b49bf866e21b497995977d1f87dd511b",
  "placement": 75,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "b49bf866e21b497995977d1f87dd511b",
  "placement": 76,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "b49bf866e21b497995977d1f87dd511b",
  "placement": 75,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "b49bf866e21b497995977d1f87dd511b",
  "placement": 96,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "b49bf866e21b497995977d1f87dd511b",
  "placement": 67,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "b49bf866e21b497995977d1f87dd511b",
  "placement": 96,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 65,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 14,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 22,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 21,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 12,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 3,
  "time_alive": 1486,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 13,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 17,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 38,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 20,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 9,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 11,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 97,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 39,
  "time_alive": 1295,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 2,
  "time_alive": 1531,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 1,
  "time_alive": 1496,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 66,
  "time_alive": 898,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 10,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 1,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 9,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 12,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 23,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 71,
  "time_alive": 797,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 50,
  "time_alive": 1232,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 19,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 82,
  "time_alive": 459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1531,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 64,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 28,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 7,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 8,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 38,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 7,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 18,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 19,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 18,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 25,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 89,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 32,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 38,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 1,
  "time_alive": 1473,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 12,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 4,
  "time_alive": 1506,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 5,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 92,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 43,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 2,
  "time_alive": 1488,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 90,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 1,
  "time_alive": 1478,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 84,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 93,
  "time_alive": 182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 85,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 1,
  "time_alive": 1488,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 93,
  "time_alive": 145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 2,
  "time_alive": 1478,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 13,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 6,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 45,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 46,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 11,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 30,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 20,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 32,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 17,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 40,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 6,
  "time_alive": 1499,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 68,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 25,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 24,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 32,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 25,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 27,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 19,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 27,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 16,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 29,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 70,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 3,
  "time_alive": 1511,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 43,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 67,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 86,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 10,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 17,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 23,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 50,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 5,
  "time_alive": 1448,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 54,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 27,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 36,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 28,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 25,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 42,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 17,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 62,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 4,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 47,
  "time_alive": 1207,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 27,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 6,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 41,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 11,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 44,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "928dad76b83d46069914f80b11225e09",
  "placement": 24,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "928dad76b83d46069914f80b11225e09",
  "placement": 13,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "928dad76b83d46069914f80b11225e09",
  "placement": 81,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "928dad76b83d46069914f80b11225e09",
  "placement": 70,
  "time_alive": 841,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "928dad76b83d46069914f80b11225e09",
  "placement": 5,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "928dad76b83d46069914f80b11225e09",
  "placement": 20,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 20,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 8,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 50,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 25,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 69,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 35,
  "time_alive": 1345,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 48,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 4,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 16,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 4,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 68,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 55,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 63,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 64,
  "time_alive": 968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 17,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 3,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 13,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 74,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 17,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 37,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 4,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 58,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 7,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 59,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 5,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 15,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 62,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 19,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 51,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 42,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 49,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 22,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 73,
  "time_alive": 687,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 90,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 15,
  "time_alive": 1403,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 21,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 22,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 31,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 41,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 14,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 81,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 28,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 26,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 63,
  "time_alive": 992,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 36,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 33,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 8,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 66,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 12,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 81,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 9,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 51,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 35,
  "time_alive": 1327,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 47,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 2,
  "time_alive": 1523,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 49,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 90,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 60,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 88,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 19,
  "time_alive": 1389,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 45,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 86,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 64,
  "time_alive": 1008,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 7,
  "time_alive": 1463,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 87,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 9,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 32,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 33,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 78,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 36,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 26,
  "time_alive": 1353,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 78,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 35,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 46,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 8,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 80,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 49,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 13,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 30,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 11,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 10,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 45,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 53,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 45,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 46,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 20,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 11,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 65,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 70,
  "time_alive": 808,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 53,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 74,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 92,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 52,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 77,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 16,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 6,
  "time_alive": 1437,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 98,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 52,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 19,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 28,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 21,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 41,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 7,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 23,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 43,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 71,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 84,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 76,
  "time_alive": 521,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 86,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 75,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 31,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 89,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 3,
  "time_alive": 1466,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 61,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 88,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 7,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 59,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 40,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 33,
  "time_alive": 1332,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 72,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 31,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 12,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 49,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 81,
  "time_alive": 442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 39,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 87,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "0c16e625fb0040d890f4492d9f10e161",
  "placement": 18,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "0c16e625fb0040d890f4492d9f10e161",
  "placement": 58,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "0c16e625fb0040d890f4492d9f10e161",
  "placement": 33,
  "time_alive": 1343,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "0c16e625fb0040d890f4492d9f10e161",
  "placement": 59,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "0c16e625fb0040d890f4492d9f10e161",
  "placement": 54,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "0c16e625fb0040d890f4492d9f10e161",
  "placement": 23,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 81,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 35,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 3,
  "time_alive": 1461,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 46,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 73,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 86,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 15,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 29,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 48,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 57,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 22,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 79,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 76,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 77,
  "time_alive": 685,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 45,
  "time_alive": 1227,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 31,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 82,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 8,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "05cfc7a52ce14a93abcafc345ab44c89",
  "placement": 41,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "05cfc7a52ce14a93abcafc345ab44c89",
  "placement": 72,
  "time_alive": 796,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "05cfc7a52ce14a93abcafc345ab44c89",
  "placement": 18,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "05cfc7a52ce14a93abcafc345ab44c89",
  "placement": 43,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "05cfc7a52ce14a93abcafc345ab44c89",
  "placement": 75,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "05cfc7a52ce14a93abcafc345ab44c89",
  "placement": 24,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 83,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 41,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 37,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 72,
  "time_alive": 722,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 6,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 73,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 37,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 53,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 68,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 44,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 2,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 58,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 3,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 21,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 66,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 94,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 81,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 62,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 83,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 57,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 13,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 5,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "d52682de72074d70b0c72d2d04d7b069",
  "placement": 73,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "d52682de72074d70b0c72d2d04d7b069",
  "placement": 47,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "d52682de72074d70b0c72d2d04d7b069",
  "placement": 26,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "d52682de72074d70b0c72d2d04d7b069",
  "placement": 52,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "d52682de72074d70b0c72d2d04d7b069",
  "placement": 18,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "d52682de72074d70b0c72d2d04d7b069",
  "placement": 30,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 91,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 84,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 46,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 9,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 63,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 15,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 10,
  "time_alive": 1483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 16,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 54,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 49,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 60,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "c2aa67225ca048e9b6a1e75cade3e0ec",
  "placement": 48,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 38,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 21,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 34,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 48,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 72,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 29,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 87,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 40,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 22,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 42,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 26,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 57,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 61,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 24,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 69,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 4,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f1d86387f4304eb396071611b61f17cb",
  "placement": 54,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 16,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 62,
  "time_alive": 1038,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 72,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 63,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 34,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 32,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 94,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 90,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 65,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 10,
  "time_alive": 1441,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 38,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 68,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "a5c699e9329342939d54a0edd21fb90c",
  "placement": 69,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "a5c699e9329342939d54a0edd21fb90c",
  "placement": 42,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "a5c699e9329342939d54a0edd21fb90c",
  "placement": 15,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "a5c699e9329342939d54a0edd21fb90c",
  "placement": 94,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "a5c699e9329342939d54a0edd21fb90c",
  "placement": 58,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "a5c699e9329342939d54a0edd21fb90c",
  "placement": 27,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 42,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 73,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 61,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 5,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 40,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 63,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "4ed9f7264a364adc951f0a8c2a8abe7b",
  "placement": 78,
  "time_alive": 685,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "4ed9f7264a364adc951f0a8c2a8abe7b",
  "placement": 18,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "4ed9f7264a364adc951f0a8c2a8abe7b",
  "placement": 53,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "4ed9f7264a364adc951f0a8c2a8abe7b",
  "placement": 75,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "4ed9f7264a364adc951f0a8c2a8abe7b",
  "placement": 41,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "4ed9f7264a364adc951f0a8c2a8abe7b",
  "placement": 37,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 29,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 94,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 82,
  "time_alive": 384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 30,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 67,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 38,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 54,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 32,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 86,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 37,
  "time_alive": 1341,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 24,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 64,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 61,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 65,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 28,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 11,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 44,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 75,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 52,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 78,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 30,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 8,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 78,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 91,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 51,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 44,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 47,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 26,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 31,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 33,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 95,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 24,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 29,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 85,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 80,
  "time_alive": 541,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "7d489367c2d1432393a56a62dae93a43",
  "placement": 90,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 85,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 10,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 55,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 79,
  "time_alive": 484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 23,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 51,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 36,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 26,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 23,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 83,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 91,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 84,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 60,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 76,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 51,
  "time_alive": 1181,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 56,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 83,
  "time_alive": 424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 14,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 66,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 51,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 83,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 12,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 65,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 43,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 9,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 74,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 74,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 50,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "314f0887173d4030a659573a6a020bc1",
  "placement": 34,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "49e1160975dc49eebeae55df42ef0817",
  "placement": 80,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "49e1160975dc49eebeae55df42ef0817",
  "placement": 34,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "49e1160975dc49eebeae55df42ef0817",
  "placement": 66,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "49e1160975dc49eebeae55df42ef0817",
  "placement": 15,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "49e1160975dc49eebeae55df42ef0817",
  "placement": 79,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 14,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 87,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 69,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 47,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 86,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 71,
  "time_alive": 823,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 50,
  "time_alive": 1205,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 6,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 70,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 91,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 92,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "76363aa6572749b59fd8222109dc9019",
  "placement": 85,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "74c98ecb14764d01875a8d8569064324",
  "placement": 82,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "74c98ecb14764d01875a8d8569064324",
  "placement": 54,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "74c98ecb14764d01875a8d8569064324",
  "placement": 58,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "74c98ecb14764d01875a8d8569064324",
  "placement": 2,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "74c98ecb14764d01875a8d8569064324",
  "placement": 74,
  "time_alive": 642,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "74c98ecb14764d01875a8d8569064324",
  "placement": 52,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 89,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 74,
  "time_alive": 772,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 14,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "9e07804eb67f4d10b0856603b36fbcd4",
  "placement": 55,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "c00843da122d4f299bbece47a83c8fb7",
  "placement": 79,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "c00843da122d4f299bbece47a83c8fb7",
  "placement": 48,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "c00843da122d4f299bbece47a83c8fb7",
  "placement": 79,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "c00843da122d4f299bbece47a83c8fb7",
  "placement": 82,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "c00843da122d4f299bbece47a83c8fb7",
  "placement": 14,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "c00843da122d4f299bbece47a83c8fb7",
  "placement": 57,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "bf3e668f0c664b4b99e0ef6b337423a0",
  "placement": 99,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "bf3e668f0c664b4b99e0ef6b337423a0",
  "placement": 60,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "bf3e668f0c664b4b99e0ef6b337423a0",
  "placement": 63,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "bf3e668f0c664b4b99e0ef6b337423a0",
  "placement": 53,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "bf3e668f0c664b4b99e0ef6b337423a0",
  "placement": 36,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "bf3e668f0c664b4b99e0ef6b337423a0",
  "placement": 16,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 53,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 88,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 87,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 27,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 25,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 80,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 92,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 56,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 44,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 42,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 52,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "02c5761b63fa4c93b9b136377b902eda",
  "placement": 31,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 33,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 80,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 35,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 34,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 64,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "0c7657d0a27f429aafb3201ed9191456",
  "placement": 71,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "0c7657d0a27f429aafb3201ed9191456",
  "placement": 28,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "0c7657d0a27f429aafb3201ed9191456",
  "placement": 60,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "0c7657d0a27f429aafb3201ed9191456",
  "placement": 87,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "0c7657d0a27f429aafb3201ed9191456",
  "placement": 37,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "0c7657d0a27f429aafb3201ed9191456",
  "placement": 82,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 39,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 95,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 88,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 29,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 55,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 39,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 21,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 45,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 89,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 67,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 57,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 88,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 59,
  "time_alive": 1100,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 36,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 77,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 76,
  "time_alive": 577,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 59,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 56,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 66,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 76,
  "time_alive": 667,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 68,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 90,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 22,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 75,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 79,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 85,
  "time_alive": 315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 84,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 20,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 67,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 40,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 70,
  "time_alive": 859,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 39,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 62,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 76,
  "time_alive": 612,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "01cb055502f740eb9fc53d1d5eab2417",
  "placement": 58,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "e582e6bb0ce64b099d74bc915b9cd607",
  "placement": 44,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "e582e6bb0ce64b099d74bc915b9cd607",
  "placement": 93,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "e582e6bb0ce64b099d74bc915b9cd607",
  "placement": 95,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "e582e6bb0ce64b099d74bc915b9cd607",
  "placement": 35,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "e582e6bb0ce64b099d74bc915b9cd607",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "e582e6bb0ce64b099d74bc915b9cd607",
  "placement": 69,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "5f2e3f9b25b64744b38422bcda35d1ee",
  "placement": 43,
  "time_alive": 1236,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "5f2e3f9b25b64744b38422bcda35d1ee",
  "placement": 59,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "5f2e3f9b25b64744b38422bcda35d1ee",
  "placement": 71,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "5f2e3f9b25b64744b38422bcda35d1ee",
  "placement": 78,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "5f2e3f9b25b64744b38422bcda35d1ee",
  "placement": 47,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "5f2e3f9b25b64744b38422bcda35d1ee",
  "placement": 83,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "43272d45-268d-4366-b4c5-fbb8f32f4bb5",
  "team_id": "4f7886feaecf47d38192e6b4dcb6f5cf",
  "placement": 34,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "47f5da81-885b-4ad3-817a-6fd5fcd0a066",
  "team_id": "4f7886feaecf47d38192e6b4dcb6f5cf",
  "placement": 55,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd",
  "team_id": "4f7886feaecf47d38192e6b4dcb6f5cf",
  "placement": 93,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2414a354-92b9-4023-9727-a5374ae41273",
  "team_id": "4f7886feaecf47d38192e6b4dcb6f5cf",
  "placement": 61,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d290640-341e-40e5-93ad-7148c6a910f8",
  "team_id": "4f7886feaecf47d38192e6b4dcb6f5cf",
  "placement": 93,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89",
  "team_id": "4f7886feaecf47d38192e6b4dcb6f5cf",
  "placement": 62,
  "time_alive": 1103,
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
    