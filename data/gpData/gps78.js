const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:bf3946cf59ef4c7091e277b7030af7b5",
  "placement": 32,
  "time_alive": 125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:bf3946cf59ef4c7091e277b7030af7b5",
  "placement": 26,
  "time_alive": 778,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:bf3946cf59ef4c7091e277b7030af7b5",
  "placement": 19,
  "time_alive": 1277,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:bf3946cf59ef4c7091e277b7030af7b5",
  "placement": 11,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "1d9debb327ab44d8ac337731fc48b64c:aa38fb2ebef84c678848651a7fec8567:c3af6081629641e6af8b3706e82570cc",
  "placement": 24,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "1d9debb327ab44d8ac337731fc48b64c:aa38fb2ebef84c678848651a7fec8567:c3af6081629641e6af8b3706e82570cc",
  "placement": 27,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "1d9debb327ab44d8ac337731fc48b64c:aa38fb2ebef84c678848651a7fec8567:c3af6081629641e6af8b3706e82570cc",
  "placement": 23,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "1d9debb327ab44d8ac337731fc48b64c:aa38fb2ebef84c678848651a7fec8567:c3af6081629641e6af8b3706e82570cc",
  "placement": 14,
  "time_alive": 1328,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "1d9debb327ab44d8ac337731fc48b64c:aa38fb2ebef84c678848651a7fec8567:c3af6081629641e6af8b3706e82570cc",
  "placement": 25,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:512ec912e55a4f1f8c47af9878e4ad05:c790033e250a4049b89bb44fef84b9c4",
  "placement": 16,
  "time_alive": 1307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:512ec912e55a4f1f8c47af9878e4ad05:c790033e250a4049b89bb44fef84b9c4",
  "placement": 23,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:512ec912e55a4f1f8c47af9878e4ad05:c790033e250a4049b89bb44fef84b9c4",
  "placement": 17,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:512ec912e55a4f1f8c47af9878e4ad05:c790033e250a4049b89bb44fef84b9c4",
  "placement": 29,
  "time_alive": 347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:512ec912e55a4f1f8c47af9878e4ad05:c790033e250a4049b89bb44fef84b9c4",
  "placement": 8,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:512ec912e55a4f1f8c47af9878e4ad05:c790033e250a4049b89bb44fef84b9c4",
  "placement": 24,
  "time_alive": 1080,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "55463806f6524cf6a4021ebed0a8b633:abce8a85e44f4558aaf3a4cdbac40cb3:e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 27,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "55463806f6524cf6a4021ebed0a8b633:abce8a85e44f4558aaf3a4cdbac40cb3:e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 24,
  "time_alive": 995,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "55463806f6524cf6a4021ebed0a8b633:abce8a85e44f4558aaf3a4cdbac40cb3:e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 28,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "55463806f6524cf6a4021ebed0a8b633:abce8a85e44f4558aaf3a4cdbac40cb3:e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 21,
  "time_alive": 1128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "55463806f6524cf6a4021ebed0a8b633:abce8a85e44f4558aaf3a4cdbac40cb3:e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 20,
  "time_alive": 1198,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "55463806f6524cf6a4021ebed0a8b633:abce8a85e44f4558aaf3a4cdbac40cb3:e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 22,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 18,
  "time_alive": 1287,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1436,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1417,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 25,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1412,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 21,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1410,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1450,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 24,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 1,
  "time_alive": 1423,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1436,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 6,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1411,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 1,
  "time_alive": 1397,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 15,
  "time_alive": 1270,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 7,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1510,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 22,
  "time_alive": 1109,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 27,
  "time_alive": 446,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 5,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 19,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 10,
  "time_alive": 1340,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 5,
  "time_alive": 1387,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 2,
  "time_alive": 1397,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 4,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 24,
  "time_alive": 1053,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 12,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 12,
  "time_alive": 1342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 5,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 16,
  "time_alive": 1190,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 5,
  "time_alive": 1423,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 9,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 22,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 14,
  "time_alive": 1284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 25,
  "time_alive": 808,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 7,
  "time_alive": 1352,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 10,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 2,
  "time_alive": 1432,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 15,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 1,
  "time_alive": 1397,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 12,
  "time_alive": 1339,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 7,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 14,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 7,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 3,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 12,
  "time_alive": 1300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 10,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 17,
  "time_alive": 1268,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1429,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 26,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 16,
  "time_alive": 1301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 29,
  "time_alive": 552,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 5,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 12,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 23,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 17,
  "time_alive": 1190,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 15,
  "time_alive": 1276,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 17,
  "time_alive": 1271,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 27,
  "time_alive": 666,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 7,
  "time_alive": 1331,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 30,
  "time_alive": 569,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 8,
  "time_alive": 1407,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 6,
  "time_alive": 1370,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 8,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 3,
  "time_alive": 1431,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 18,
  "time_alive": 1261,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 25,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 9,
  "time_alive": 1342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 11,
  "time_alive": 1340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 8,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 4,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 27,
  "time_alive": 765,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 13,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 10,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 20,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 16,
  "time_alive": 1250,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 2,
  "time_alive": 1450,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 1,
  "time_alive": 1472,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 27,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 6,
  "time_alive": 1396,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 3,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 26,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 10,
  "time_alive": 1313,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 6,
  "time_alive": 1339,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 5,
  "time_alive": 1377,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 21,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 25,
  "time_alive": 1058,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 9,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 15,
  "time_alive": 1253,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 7,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 11,
  "time_alive": 1331,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 32,
  "time_alive": 106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 31,
  "time_alive": 380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 22,
  "time_alive": 954,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 15,
  "time_alive": 1275,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 1,
  "time_alive": 1429,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 31,
  "time_alive": 245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 3,
  "time_alive": 1475,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 33,
  "time_alive": 221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 10,
  "time_alive": 1347,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 18,
  "time_alive": 1170,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 28,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 28,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 12,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 16,
  "time_alive": 1257,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 18,
  "time_alive": 1262,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 14,
  "time_alive": 1271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 1,
  "time_alive": 1432,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 4,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 7,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 11,
  "time_alive": 1341,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 11,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 2,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 3,
  "time_alive": 1413,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 24,
  "time_alive": 1044,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 8,
  "time_alive": 1342,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 27,
  "time_alive": 804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 6,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 20,
  "time_alive": 1164,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 8,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 23,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 16,
  "time_alive": 1277,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 7,
  "time_alive": 1359,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 6,
  "time_alive": 1374,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 8,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 2,
  "time_alive": 1423,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 14,
  "time_alive": 1262,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 27,
  "time_alive": 673,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 4,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 33,
  "time_alive": 82,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 28,
  "time_alive": 454,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 32,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 10,
  "time_alive": 1345,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 24,
  "time_alive": 916,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 19,
  "time_alive": 1159,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 3,
  "time_alive": 1442,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 6,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 11,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 1,
  "time_alive": 1447,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 24,
  "time_alive": 879,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 8,
  "time_alive": 1339,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 17,
  "time_alive": 1234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 10,
  "time_alive": 1352,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 20,
  "time_alive": 1110,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 14,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 19,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 23,
  "time_alive": 1079,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 4,
  "time_alive": 1425,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 29,
  "time_alive": 594,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 13,
  "time_alive": 1274,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 2,
  "time_alive": 1447,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 32,
  "time_alive": 235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 14,
  "time_alive": 1290,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 11,
  "time_alive": 1294,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 19,
  "time_alive": 1185,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 6,
  "time_alive": 1413,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 31,
  "time_alive": 349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 20,
  "time_alive": 1135,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 32,
  "time_alive": 116,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 33,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 20,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 10,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 24,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 5,
  "time_alive": 1354,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 24,
  "time_alive": 982,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 11,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1412,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 3,
  "time_alive": 1377,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 15,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 20,
  "time_alive": 1116,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 11,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 17,
  "time_alive": 1293,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 5,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 4,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 6,
  "time_alive": 1351,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 16,
  "time_alive": 1274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 19,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 15,
  "time_alive": 1266,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 9,
  "time_alive": 1407,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 8,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 13,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 14,
  "time_alive": 1271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 13,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 4,
  "time_alive": 1409,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 29,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 33,
  "time_alive": 125,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 15,
  "time_alive": 1298,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 13,
  "time_alive": 1291,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 8,
  "time_alive": 1321,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 12,
  "time_alive": 1300,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 11,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 5,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 27,
  "time_alive": 676,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 12,
  "time_alive": 1290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 20,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 12,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 15,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 23,
  "time_alive": 955,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 13,
  "time_alive": 1301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 3,
  "time_alive": 1396,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 16,
  "time_alive": 1240,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 14,
  "time_alive": 1284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 5,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 19,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 4,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 25,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 15,
  "time_alive": 1321,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 8,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 30,
  "time_alive": 228,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 25,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 30,
  "time_alive": 419,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 23,
  "time_alive": 980,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 5,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 9,
  "time_alive": 1359,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 26,
  "time_alive": 870,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 32,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 3,
  "time_alive": 1405,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 26,
  "time_alive": 425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 10,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 13,
  "time_alive": 1312,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 21,
  "time_alive": 1135,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 21,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 11,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 11,
  "time_alive": 1302,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 25,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 6,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 13,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 18,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 14,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 13,
  "time_alive": 1284,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 19,
  "time_alive": 1204,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 21,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 7,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 17,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 12,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 28,
  "time_alive": 389,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 12,
  "time_alive": 1285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 23,
  "time_alive": 1075,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 27,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 13,
  "time_alive": 1333,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 33,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 8,
  "time_alive": 1339,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 30,
  "time_alive": 264,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 19,
  "time_alive": 1211,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 33,
  "time_alive": 89,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 9,
  "time_alive": 1342,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 31,
  "time_alive": 273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 29,
  "time_alive": 377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 29,
  "time_alive": 312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 21,
  "time_alive": 1134,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 14,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 23,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 6,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 29,
  "time_alive": 340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 26,
  "time_alive": 478,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 22,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 20,
  "time_alive": 1150,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 19,
  "time_alive": 1066,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 16,
  "time_alive": 1279,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 9,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 22,
  "time_alive": 1041,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 20,
  "time_alive": 1139,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 17,
  "time_alive": 1265,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 4,
  "time_alive": 1377,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 17,
  "time_alive": 1221,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 17,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 25,
  "time_alive": 728,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 33,
  "time_alive": 41,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 8,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 26,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 2,
  "time_alive": 1417,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 30,
  "time_alive": 237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 32,
  "time_alive": 100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 18,
  "time_alive": 1191,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 28,
  "time_alive": 709,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 30,
  "time_alive": 461,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 31,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 31,
  "time_alive": 177,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 32,
  "time_alive": 197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 16,
  "time_alive": 1298,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 23,
  "time_alive": 1052,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 30,
  "time_alive": 452,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 21,
  "time_alive": 973,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 20,
  "time_alive": 1081,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 13,
  "time_alive": 1284,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 29,
  "time_alive": 747,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 19,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 9,
  "time_alive": 1348,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 28,
  "time_alive": 557,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 27,
  "time_alive": 385,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 6,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 10,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 16,
  "time_alive": 1191,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 22,
  "time_alive": 960,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 29,
  "time_alive": 683,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 12,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 26,
  "time_alive": 776,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 27,
  "time_alive": 812,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 33,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 24,
  "time_alive": 1101,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 32,
  "time_alive": 211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 9,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 9,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 32,
  "time_alive": 76,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 18,
  "time_alive": 1187,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 7,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 18,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 31,
  "time_alive": 204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 30,
  "time_alive": 231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 17,
  "time_alive": 1240,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 30,
  "time_alive": 513,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 28,
  "time_alive": 576,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 30,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 33,
  "time_alive": 106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 16,
  "time_alive": 1297,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 26,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 26,
  "time_alive": 658,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 13,
  "time_alive": 1285,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 19,
  "time_alive": 1115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 26,
  "time_alive": 789,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 9,
  "time_alive": 1316,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 22,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 25,
  "time_alive": 954,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 11,
  "time_alive": 1342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 22,
  "time_alive": 988,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 10,
  "time_alive": 1323,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 21,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 31,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 25,
  "time_alive": 768,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 20,
  "time_alive": 1059,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 23,
  "time_alive": 944,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 32,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 33,
  "time_alive": 52,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 4,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 29,
  "time_alive": 657,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 27,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 26,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 30,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 17,
  "time_alive": 1274,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 15,
  "time_alive": 1303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 4,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 18,
  "time_alive": 1170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 14,
  "time_alive": 1298,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 19,
  "time_alive": 1137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 31,
  "time_alive": 162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 28,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 18,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 26,
  "time_alive": 974,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 25,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 21,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 23,
  "time_alive": 1102,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 14,
  "time_alive": 1311,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 27,
  "time_alive": 591,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 29,
  "time_alive": 466,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 9,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 22,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 18,
  "time_alive": 1232,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 16,
  "time_alive": 1252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 24,
  "time_alive": 1000,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 29,
  "time_alive": 573,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 18,
  "time_alive": 1173,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 22,
  "time_alive": 1089,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 22,
  "time_alive": 1103,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 24,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 31,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 32,
  "time_alive": 310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 28,
  "time_alive": 779,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 21,
  "time_alive": 1052,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 21,
  "time_alive": 1122,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 25,
  "time_alive": 924,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 22,
  "time_alive": 1103,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 17,
  "time_alive": 1215,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 23,
  "time_alive": 954,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 28,
  "time_alive": 364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 31,
  "time_alive": 226,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ce035ef2-4baa-4564-a58d-ce5e183ad33a",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 30,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01a163f3-864c-4eb1-8583-1f2878beeb2a",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 28,
  "time_alive": 266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 28,
  "time_alive": 475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2681a768-d964-4824-8993-babbd361b9b8",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 20,
  "time_alive": 1076,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 24,
  "time_alive": 926,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3760d55-a398-44eb-a7b5-8a137c2fafb8",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 23,
  "time_alive": 991,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dcc77d0a-4835-4273-b1fc-26fedb19dde5",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 32,
  "time_alive": 169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2d123d2-31ba-4347-bb4b-36bc0377a142",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 31,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "263694f0-961b-4fa0-9947-354655706b70",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 15,
  "time_alive": 1279,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a5dfcb1-344d-45d7-92da-083d867f49f5",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 21,
  "time_alive": 1081,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "258bc97c-6e19-4ac5-a693-c863f906043b",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 24,
  "time_alive": 893,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12deaedf-b238-4d9d-84f5-a2a7ce7f0684",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 29,
  "time_alive": 323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 1,
  "time_alive": 1504,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:3dd96bb7b3424ff9961ee7ecc5096839:7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 9,
  "time_alive": 1389,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 7,
  "time_alive": 1418,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 6,
  "time_alive": 1422,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 3,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 4,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 8,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "5120f652137742fc99af021cb17d5563:69a1c5cb05ba4f528b23d573d81c62d8:fd9baeb252064a039467964d1338ab0e",
  "placement": 10,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 12,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "6c14afe1bebe4df8a58ed49670695bb4:a0aa16e36bca41e7a8ae68e5d04951f5:fdadc216e3784d29be326389ff2bc634",
  "placement": 13,
  "time_alive": 1317,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 15,
  "time_alive": 1257,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 21,
  "time_alive": 1135,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 22,
  "time_alive": 1134,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 5,
  "time_alive": 1437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "0410098a887c4372986f8b65537e3068:1f0d012ea06e4dd9823daaed7c590331:c371e935468641d69332e5919b0e6f8b",
  "placement": 14,
  "time_alive": 1303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2:c0f99eb3f168409597a5a6ad0eacc28b:cc57a88db28b4370adae26a209c35639",
  "placement": 17,
  "time_alive": 1183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 30,
  "time_alive": 143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6:c792bfa0d7414b839eea0a87bbfeb8cb",
  "placement": 11,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "2a4fcc07ed794f59974d3067ac09d167:31381e5d45154316b607ffbac9d9dd3a:c3509ec5f975405684c111215f18d41f",
  "placement": 16,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "a509f50735a346cca41de41370ae98bd:be4dd5c02714461d8201001ea99a6685:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 18,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 19,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 20,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "1f37489e2e214c91a93ad6911c5ece9b:6a554a98804d42c086a0b1655706a7c0:faeadb29bb7541a281b8e405dc7346f4",
  "placement": 23,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 24,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 25,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "5bcdb8217bb04eca93367d79211c92c6:69f1c37a45d84486ba2db0cfa9e0e281:a8a2225691b340cb8f0c534261a529f0",
  "placement": 26,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "2f15b07f207645f681bb6e275c2d4ac5:54375d5c8a8f4332988db45c50d12731:f92ec13c3ba04ffdb63210d8f866e45b",
  "placement": 27,
  "time_alive": 775,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "21538e95652b48bbbc65f298a2861699:3072ad917ca7407cb2ec2fbe6b8e74d3:3b033321f05145d092b2942cd16b7bc2",
  "placement": 28,
  "time_alive": 765,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bab6986-50af-4ded-805e-720958d18257",
  "team_id": "45a94535d7174e65a5aeafdac3586ccb:bc26230ea468465d976e88950071fe53:c6f05a57a4ea44beaa6363508f97af3b",
  "placement": 29,
  "time_alive": 719,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 2,
  "time_alive": 1513,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 6,
  "time_alive": 1449,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 2,
  "time_alive": 1499,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 4,
  "time_alive": 1486,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 10,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 6,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 1,
  "time_alive": 1513,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 7,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 11,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 11,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 1,
  "time_alive": 1499,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 2,
  "time_alive": 1467,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 4,
  "time_alive": 1491,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 15,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 3,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 5,
  "time_alive": 1483,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 19,
  "time_alive": 1287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 1,
  "time_alive": 1467,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 9,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 10,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 8,
  "time_alive": 1427,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 8,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 27,
  "time_alive": 728,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 10,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 8,
  "time_alive": 1475,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 27,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 4,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 13,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 6,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 16,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 13,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 18,
  "time_alive": 1339,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1515,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 21,
  "time_alive": 1142,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 18,
  "time_alive": 1243,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 7,
  "time_alive": 1483,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 19,
  "time_alive": 1215,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 26,
  "time_alive": 931,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 3,
  "time_alive": 1489,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 5,
  "time_alive": 1458,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 4,
  "time_alive": 1410,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 26,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 2,
  "time_alive": 1510,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 22,
  "time_alive": 1148,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 25,
  "time_alive": 772,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 9,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 5,
  "time_alive": 1488,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 9,
  "time_alive": 1420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 6,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 14,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 15,
  "time_alive": 1315,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 23,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 12,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 17,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 15,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 12,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 2,
  "time_alive": 1499,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:df13c1a64151456c8dec92058736b8b0:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 17,
  "time_alive": 1274,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:df13c1a64151456c8dec92058736b8b0:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 10,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:df13c1a64151456c8dec92058736b8b0:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 4,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:df13c1a64151456c8dec92058736b8b0:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 5,
  "time_alive": 1467,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:df13c1a64151456c8dec92058736b8b0:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 26,
  "time_alive": 621,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:df13c1a64151456c8dec92058736b8b0:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 25,
  "time_alive": 799,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 14,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 10,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 17,
  "time_alive": 1316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 16,
  "time_alive": 1312,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 3,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 27,
  "time_alive": 839,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 24,
  "time_alive": 912,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 7,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 27,
  "time_alive": 596,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 28,
  "time_alive": 679,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 12,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 22,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 23,
  "time_alive": 992,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 23,
  "time_alive": 1113,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 2,
  "time_alive": 1515,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 12,
  "time_alive": 1339,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 5,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 25,
  "time_alive": 920,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 11,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 13,
  "time_alive": 1389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 9,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 18,
  "time_alive": 1295,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 9,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 3,
  "time_alive": 1501,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 20,
  "time_alive": 1205,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 27,
  "time_alive": 684,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 21,
  "time_alive": 1149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 13,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 16,
  "time_alive": 1294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 13,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 32,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1499,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 24,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 14,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 3,
  "time_alive": 1495,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 32,
  "time_alive": 425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 18,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 3,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 18,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 28,
  "time_alive": 753,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 17,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 7,
  "time_alive": 1442,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 26,
  "time_alive": 744,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 13,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 6,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 16,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 20,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 10,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 7,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 11,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 32,
  "time_alive": 165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 5,
  "time_alive": 1466,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 31,
  "time_alive": 427,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 29,
  "time_alive": 404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 20,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 11,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 12,
  "time_alive": 1400,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 28,
  "time_alive": 421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 29,
  "time_alive": 640,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 7,
  "time_alive": 1385,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 30,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 21,
  "time_alive": 1192,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 16,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 6,
  "time_alive": 1479,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 23,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 23,
  "time_alive": 1115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 12,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 25,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 23,
  "time_alive": 987,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:d2fe75ba95fa4295a0c53a015824c0a9",
  "placement": 8,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 14,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 15,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 14,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 24,
  "time_alive": 1033,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 20,
  "time_alive": 1184,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 30,
  "time_alive": 494,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 8,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 21,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 8,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 30,
  "time_alive": 430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 33,
  "time_alive": 122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 31,
  "time_alive": 253,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 24,
  "time_alive": 995,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 29,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 29,
  "time_alive": 455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 16,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 17,
  "time_alive": 1306,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 21,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 17,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 22,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 14,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 22,
  "time_alive": 989,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 11,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 19,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 19,
  "time_alive": 1313,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 18,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 19,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 30,
  "time_alive": 352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 4,
  "time_alive": 1459,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 22,
  "time_alive": 1091,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 28,
  "time_alive": 754,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 26,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 9,
  "time_alive": 1423,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 15,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 22,
  "time_alive": 922,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 20,
  "time_alive": 1220,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 25,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 28,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 19,
  "time_alive": 1185,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 24,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 15,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 29,
  "time_alive": 305,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 31,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 33,
  "time_alive": 192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 32,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 33,
  "time_alive": 156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "15eca6c7-daa1-44bd-930f-bec2285c1142",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 20,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f273db-35d6-4d7e-822f-b9bb6033997b",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 31,
  "time_alive": 212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07db276c-16ec-4f5d-b83b-57b85a28a67e",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 30,
  "time_alive": 347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "017abcc7-039d-4ad1-a475-0e944522d5a9",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 21,
  "time_alive": 1159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00ebd938-2597-4aab-a51c-259d3a87e664",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 31,
  "time_alive": 160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01b6c101-6f8d-4841-8301-6ae5eae37672",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 32,
  "time_alive": 211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 23,
  "time_alive": 1018,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 22,
  "time_alive": 1031,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1462,
  "elims": 30,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 22,
  "time_alive": 1110,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 16,
  "time_alive": 1299,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1434,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 1,
  "time_alive": 1485,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 7,
  "time_alive": 1440,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 24,
  "time_alive": 946,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 13,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 1,
  "time_alive": 1494,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 4,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 4,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 11,
  "time_alive": 1382,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1373,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 18,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 3,
  "time_alive": 1454,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 6,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 10,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1502,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 12,
  "time_alive": 1346,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 11,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 21,
  "time_alive": 688,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:a07c3c173a884e099f2898e600496d42:d865131855c741699ca16f4664327507",
  "placement": 5,
  "time_alive": 1391,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 11,
  "time_alive": 1357,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 6,
  "time_alive": 1458,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 23,
  "time_alive": 979,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 5,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 4,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 9,
  "time_alive": 1347,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 7,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 20,
  "time_alive": 1110,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 4,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 2,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 13,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 8,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 12,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 21,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 1,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 4,
  "time_alive": 1460,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 9,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 11,
  "time_alive": 1320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 20,
  "time_alive": 1159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 26,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 22,
  "time_alive": 1049,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 7,
  "time_alive": 1430,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 2,
  "time_alive": 1494,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 10,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 6,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 12,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 3,
  "time_alive": 1452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 26,
  "time_alive": 362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 6,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 7,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 8,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 5,
  "time_alive": 1470,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 1,
  "time_alive": 1491,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 10,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 13,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 33,
  "time_alive": 86,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 32,
  "time_alive": 148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 6,
  "time_alive": 1422,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 3,
  "time_alive": 1478,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 12,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 16,
  "time_alive": 1285,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 2,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 4,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 25,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 9,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 19,
  "time_alive": 1234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 12,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 22,
  "time_alive": 1091,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 31,
  "time_alive": 207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 5,
  "time_alive": 1435,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 14,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 25,
  "time_alive": 366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 3,
  "time_alive": 1420,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 3,
  "time_alive": 1424,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 16,
  "time_alive": 1283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 19,
  "time_alive": 1210,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 8,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 15,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 22,
  "time_alive": 941,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 17,
  "time_alive": 1294,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 2,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 27,
  "time_alive": 348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 20,
  "time_alive": 1154,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 17,
  "time_alive": 1285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 9,
  "time_alive": 1359,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 30,
  "time_alive": 313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 27,
  "time_alive": 452,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 10,
  "time_alive": 1372,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 17,
  "time_alive": 1278,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 23,
  "time_alive": 791,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 26,
  "time_alive": 684,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 9,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 9,
  "time_alive": 1373,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 19,
  "time_alive": 1254,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 5,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 24,
  "time_alive": 734,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 28,
  "time_alive": 335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 3,
  "time_alive": 1489,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 31,
  "time_alive": 62,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 31,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 22,
  "time_alive": 654,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 31,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 14,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 17,
  "time_alive": 1244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 26,
  "time_alive": 648,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 6,
  "time_alive": 1432,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 14,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 15,
  "time_alive": 1285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 13,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 17,
  "time_alive": 1256,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 25,
  "time_alive": 364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 26,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 2,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 29,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 14,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 11,
  "time_alive": 1350,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 28,
  "time_alive": 280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 24,
  "time_alive": 402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 18,
  "time_alive": 1256,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 19,
  "time_alive": 1187,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 23,
  "time_alive": 970,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 15,
  "time_alive": 1302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 16,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 8,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 14,
  "time_alive": 1287,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 24,
  "time_alive": 958,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 10,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 7,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 23,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 29,
  "time_alive": 222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 27,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 32,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 29,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 13,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 20,
  "time_alive": 1171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 7,
  "time_alive": 1406,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 19,
  "time_alive": 1236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 15,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 13,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 14,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 12,
  "time_alive": 1358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 32,
  "time_alive": 174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 21,
  "time_alive": 983,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 5,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 25,
  "time_alive": 877,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 27,
  "time_alive": 450,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 27,
  "time_alive": 374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 29,
  "time_alive": 241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 17,
  "time_alive": 1334,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 28,
  "time_alive": 246,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 20,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 16,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 24,
  "time_alive": 928,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 16,
  "time_alive": 1265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 15,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 18,
  "time_alive": 1254,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 25,
  "time_alive": 668,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 21,
  "time_alive": 1091,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 15,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 10,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 30,
  "time_alive": 238,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 27,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 32,
  "time_alive": 104,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 18,
  "time_alive": 1258,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 18,
  "time_alive": 1210,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 30,
  "time_alive": 237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 32,
  "time_alive": 108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 31,
  "time_alive": 177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 30,
  "time_alive": 200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 31,
  "time_alive": 197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 19,
  "time_alive": 1192,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 28,
  "time_alive": 350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 24,
  "time_alive": 529,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 11,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 29,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 25,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 8,
  "time_alive": 1426,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 21,
  "time_alive": 1093,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 21,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 23,
  "time_alive": 592,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 26,
  "time_alive": 537,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01110746-6767-43b5-8f6b-37fda1c18eab",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 30,
  "time_alive": 216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00968ee7-11d9-4b65-b113-260e6dc9d7f3",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 28,
  "time_alive": 330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007239f1-f6fc-49a4-a64f-73eec6fe347c",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 18,
  "time_alive": 1246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "030f0d09-b259-4dc5-990f-1f8b7fbd4272",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 29,
  "time_alive": 261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a80c965-3ca4-4b91-a71a-c9b03162a5d2",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 30,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f99553-4380-49c2-ad53-34e3fb953a2d",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 28,
  "time_alive": 349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 2,
  "time_alive": 1769,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 4,
  "time_alive": 1819,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 21,
  "time_alive": 1606,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 2,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 6,
  "time_alive": 2166,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 1,
  "time_alive": 2224,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 7,
  "time_alive": 1665,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 10,
  "time_alive": 1629,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1904,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1394,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 15,
  "time_alive": 1990,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 15,
  "time_alive": 1899,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 3,
  "time_alive": 1754,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 2,
  "time_alive": 1898,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 10,
  "time_alive": 1747,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 13,
  "time_alive": 1269,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 1,
  "time_alive": 2261,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 7,
  "time_alive": 2146,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 1,
  "time_alive": 1769,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 1,
  "time_alive": 1898,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 27,
  "time_alive": 359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 26,
  "time_alive": 458,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 32,
  "time_alive": 155,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 16,
  "time_alive": 1741,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 9,
  "time_alive": 1706,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 23,
  "time_alive": 1503,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 5,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 14,
  "time_alive": 1991,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 2,
  "time_alive": 2224,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 12,
  "time_alive": 1583,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 21,
  "time_alive": 1253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 4,
  "time_alive": 1893,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 6,
  "time_alive": 1345,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 2,
  "time_alive": 2261,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 6,
  "time_alive": 2149,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 13,
  "time_alive": 1544,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 8,
  "time_alive": 1707,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 5,
  "time_alive": 1889,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 3,
  "time_alive": 1377,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 5,
  "time_alive": 2172,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 12,
  "time_alive": 1964,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 3,
  "time_alive": 1876,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 11,
  "time_alive": 1733,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 9,
  "time_alive": 1295,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 10,
  "time_alive": 2054,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 5,
  "time_alive": 2150,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 18,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 20,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 20,
  "time_alive": 1610,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 16,
  "time_alive": 1235,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 4,
  "time_alive": 2180,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 3,
  "time_alive": 2175,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 14,
  "time_alive": 1496,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 6,
  "time_alive": 1754,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 3,
  "time_alive": 1900,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 24,
  "time_alive": 571,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 7,
  "time_alive": 2081,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 18,
  "time_alive": 1695,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 31,
  "time_alive": 181,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 5,
  "time_alive": 1769,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 18,
  "time_alive": 1694,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 15,
  "time_alive": 1244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 3,
  "time_alive": 2222,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 29,
  "time_alive": 319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 29,
  "time_alive": 572,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 13,
  "time_alive": 1598,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 30,
  "time_alive": 265,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 8,
  "time_alive": 1323,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 11,
  "time_alive": 2022,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 10,
  "time_alive": 2071,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 27,
  "time_alive": 958,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 14,
  "time_alive": 1598,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 16,
  "time_alive": 1700,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 12,
  "time_alive": 1274,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 9,
  "time_alive": 2054,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 8,
  "time_alive": 2145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 22,
  "time_alive": 1258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 31,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 2,
  "time_alive": 1904,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 28,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 12,
  "time_alive": 2012,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 19,
  "time_alive": 1560,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "87fc74414a3542b9bb68dfeb38f1835e:a2d547c84c0449358949ebb51b3c671b:c42de805dc3d4172ac2f5592c62b9b55",
  "placement": 15,
  "time_alive": 1487,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "87fc74414a3542b9bb68dfeb38f1835e:a2d547c84c0449358949ebb51b3c671b:c42de805dc3d4172ac2f5592c62b9b55",
  "placement": 16,
  "time_alive": 1588,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "87fc74414a3542b9bb68dfeb38f1835e:a2d547c84c0449358949ebb51b3c671b:c42de805dc3d4172ac2f5592c62b9b55",
  "placement": 13,
  "time_alive": 1722,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "87fc74414a3542b9bb68dfeb38f1835e:a2d547c84c0449358949ebb51b3c671b:c42de805dc3d4172ac2f5592c62b9b55",
  "placement": 23,
  "time_alive": 727,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "87fc74414a3542b9bb68dfeb38f1835e:a2d547c84c0449358949ebb51b3c671b:c42de805dc3d4172ac2f5592c62b9b55",
  "placement": 26,
  "time_alive": 425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "87fc74414a3542b9bb68dfeb38f1835e:a2d547c84c0449358949ebb51b3c671b:c42de805dc3d4172ac2f5592c62b9b55",
  "placement": 4,
  "time_alive": 2159,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 6,
  "time_alive": 1680,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 15,
  "time_alive": 1590,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 9,
  "time_alive": 1771,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 19,
  "time_alive": 904,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 8,
  "time_alive": 2071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 20,
  "time_alive": 1510,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 10,
  "time_alive": 1616,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 25,
  "time_alive": 613,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 24,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 10,
  "time_alive": 1292,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 28,
  "time_alive": 399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 13,
  "time_alive": 1922,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 9,
  "time_alive": 1639,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 26,
  "time_alive": 504,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 8,
  "time_alive": 1781,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 30,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 21,
  "time_alive": 618,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 25,
  "time_alive": 649,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 25,
  "time_alive": 1079,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 7,
  "time_alive": 1709,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 6,
  "time_alive": 1884,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 14,
  "time_alive": 1263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 22,
  "time_alive": 597,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 24,
  "time_alive": 653,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 8,
  "time_alive": 1663,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 29,
  "time_alive": 333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 31,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 7,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 24,
  "time_alive": 525,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 17,
  "time_alive": 1734,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 17,
  "time_alive": 1390,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 28,
  "time_alive": 413,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 28,
  "time_alive": 315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 4,
  "time_alive": 1366,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 29,
  "time_alive": 271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 23,
  "time_alive": 939,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 4,
  "time_alive": 1688,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 11,
  "time_alive": 1621,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 29,
  "time_alive": 315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 18,
  "time_alive": 1020,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 25,
  "time_alive": 447,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 26,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 24,
  "time_alive": 1131,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 12,
  "time_alive": 1610,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 14,
  "time_alive": 1721,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 20,
  "time_alive": 853,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 19,
  "time_alive": 1242,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 22,
  "time_alive": 991,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 30,
  "time_alive": 318,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 33,
  "time_alive": 147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 12,
  "time_alive": 1731,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 22,
  "time_alive": 778,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 17,
  "time_alive": 1400,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 28,
  "time_alive": 328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "07eec0357c464f91acf1c92f531fc580:0fd148b77d4c4101b24a67d24677e1d1:e9e48ea1bfac40d5a40921dc64f2de9e",
  "placement": 11,
  "time_alive": 1590,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "07eec0357c464f91acf1c92f531fc580:0fd148b77d4c4101b24a67d24677e1d1:e9e48ea1bfac40d5a40921dc64f2de9e",
  "placement": 32,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "07eec0357c464f91acf1c92f531fc580:0fd148b77d4c4101b24a67d24677e1d1:e9e48ea1bfac40d5a40921dc64f2de9e",
  "placement": 15,
  "time_alive": 1717,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "07eec0357c464f91acf1c92f531fc580:0fd148b77d4c4101b24a67d24677e1d1:e9e48ea1bfac40d5a40921dc64f2de9e",
  "placement": 32,
  "time_alive": 92,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "07eec0357c464f91acf1c92f531fc580:0fd148b77d4c4101b24a67d24677e1d1:e9e48ea1bfac40d5a40921dc64f2de9e",
  "placement": 31,
  "time_alive": 184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "07eec0357c464f91acf1c92f531fc580:0fd148b77d4c4101b24a67d24677e1d1:e9e48ea1bfac40d5a40921dc64f2de9e",
  "placement": 14,
  "time_alive": 1921,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 26,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 24,
  "time_alive": 654,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 7,
  "time_alive": 1788,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 11,
  "time_alive": 1284,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 23,
  "time_alive": 525,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 30,
  "time_alive": 252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 23,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 22,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 25,
  "time_alive": 409,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 27,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 13,
  "time_alive": 2008,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 11,
  "time_alive": 2047,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 5,
  "time_alive": 1686,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 18,
  "time_alive": 1560,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 17,
  "time_alive": 1694,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 31,
  "time_alive": 125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 30,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 21,
  "time_alive": 996,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 21,
  "time_alive": 1285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 27,
  "time_alive": 448,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 19,
  "time_alive": 1682,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 29,
  "time_alive": 146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 18,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 27,
  "time_alive": 382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "526bbd74a0af4294a0067ce1dc225a9a:85bb830169b94cd1872d4eb1d968cd4c:ef99d827619a44ddb2ac27b86f93c7f5",
  "placement": 28,
  "time_alive": 653,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "526bbd74a0af4294a0067ce1dc225a9a:85bb830169b94cd1872d4eb1d968cd4c:ef99d827619a44ddb2ac27b86f93c7f5",
  "placement": 30,
  "time_alive": 275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "526bbd74a0af4294a0067ce1dc225a9a:85bb830169b94cd1872d4eb1d968cd4c:ef99d827619a44ddb2ac27b86f93c7f5",
  "placement": 26,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "526bbd74a0af4294a0067ce1dc225a9a:85bb830169b94cd1872d4eb1d968cd4c:ef99d827619a44ddb2ac27b86f93c7f5",
  "placement": 17,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "526bbd74a0af4294a0067ce1dc225a9a:85bb830169b94cd1872d4eb1d968cd4c:ef99d827619a44ddb2ac27b86f93c7f5",
  "placement": 27,
  "time_alive": 405,
  "elims": 0,
  "mode": 3
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
    