const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 22,
  "time_alive": 1143,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1464,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 13,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 22,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 2,
  "time_alive": 1511,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 17,
  "time_alive": 1311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 12,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 6,
  "time_alive": 1361,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 17,
  "time_alive": 1231,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 13,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 20,
  "time_alive": 1201,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 9,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 20,
  "time_alive": 1176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 11,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 7,
  "time_alive": 1463,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 17,
  "time_alive": 1271,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 25,
  "time_alive": 934,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 2,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 14,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 17,
  "time_alive": 1135,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 20,
  "time_alive": 1017,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 12,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 14,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 6,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 8,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 12,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 15,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 25,
  "time_alive": 1044,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 11,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 20,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 6,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 24,
  "time_alive": 945,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 19,
  "time_alive": 1113,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 26,
  "time_alive": 455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 7,
  "time_alive": 1375,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 8,
  "time_alive": 1345,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 16,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 9,
  "time_alive": 1433,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 13,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 20,
  "time_alive": 1161,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 14,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 8,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 16,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 14,
  "time_alive": 1280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 8,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 2,
  "time_alive": 1466,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 8,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 19,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 24,
  "time_alive": 1111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 8,
  "time_alive": 1452,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 14,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 23,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 2,
  "time_alive": 1518,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 9,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 27,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 19,
  "time_alive": 1082,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 7,
  "time_alive": 1417,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 8,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 19,
  "time_alive": 1202,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 25,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 14,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 16,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 10,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 10,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 9,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 11,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 13,
  "time_alive": 1418,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 20,
  "time_alive": 1070,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 16,
  "time_alive": 1247,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 10,
  "time_alive": 1389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 26,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 21,
  "time_alive": 1007,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 19,
  "time_alive": 1225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 13,
  "time_alive": 1424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 29,
  "time_alive": 871,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 18,
  "time_alive": 1244,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 28,
  "time_alive": 790,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 13,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 30,
  "time_alive": 421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 3,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 5,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 15,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 1,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 20,
  "time_alive": 1097,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 29,
  "time_alive": 911,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 31,
  "time_alive": 439,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 32,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 6,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 22,
  "time_alive": 1035,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 21,
  "time_alive": 1122,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 10,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 2,
  "time_alive": 1436,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 12,
  "time_alive": 1349,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 16,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 25,
  "time_alive": 963,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 15,
  "time_alive": 1275,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 26,
  "time_alive": 966,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 6,
  "time_alive": 1469,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 18,
  "time_alive": 1300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 13,
  "time_alive": 1357,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 3,
  "time_alive": 1516,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 7,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 20,
  "time_alive": 1276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 22,
  "time_alive": 985,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 18,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 11,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 28,
  "time_alive": 507,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 16,
  "time_alive": 1263,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 21,
  "time_alive": 1173,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 7,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 5,
  "time_alive": 1477,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 9,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 23,
  "time_alive": 1002,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 18,
  "time_alive": 1290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 9,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 26,
  "time_alive": 925,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 15,
  "time_alive": 1285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 25,
  "time_alive": 644,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 22,
  "time_alive": 1185,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 13,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 15,
  "time_alive": 1382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 23,
  "time_alive": 1103,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 11,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 24,
  "time_alive": 1047,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 19,
  "time_alive": 1248,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 17,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 11,
  "time_alive": 1439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 28,
  "time_alive": 892,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 21,
  "time_alive": 1011,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 28,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 5,
  "time_alive": 1398,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 14,
  "time_alive": 1276,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 22,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 30,
  "time_alive": 765,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 22,
  "time_alive": 1073,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 5,
  "time_alive": 1457,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 13,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 24,
  "time_alive": 1086,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 15,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 15,
  "time_alive": 1235,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 30,
  "time_alive": 474,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 20,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 16,
  "time_alive": 1229,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 23,
  "time_alive": 560,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 30,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 14,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 9,
  "time_alive": 1434,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 26,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 26,
  "time_alive": 929,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 26,
  "time_alive": 438,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 24,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 29,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 26,
  "time_alive": 929,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 6,
  "time_alive": 1450,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 31,
  "time_alive": 354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 26,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 11,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 20,
  "time_alive": 1215,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 25,
  "time_alive": 925,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 29,
  "time_alive": 696,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 21,
  "time_alive": 1197,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 25,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 21,
  "time_alive": 1255,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 31,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 24,
  "time_alive": 968,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 18,
  "time_alive": 1300,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 12,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 7,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 6,
  "time_alive": 1494,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 25,
  "time_alive": 1001,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 26,
  "time_alive": 913,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 22,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 16,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 16,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 8,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 23,
  "time_alive": 960,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 14,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 24,
  "time_alive": 910,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 30,
  "time_alive": 399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 31,
  "time_alive": 162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 7,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 18,
  "time_alive": 1255,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 28,
  "time_alive": 879,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 31,
  "time_alive": 221,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 30,
  "time_alive": 192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 29,
  "time_alive": 466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 27,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 32,
  "time_alive": 163,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 29,
  "time_alive": 257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 29,
  "time_alive": 213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 18,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 32,
  "time_alive": 322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 32,
  "time_alive": 234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 10,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 29,
  "time_alive": 206,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 31,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 32,
  "time_alive": 525,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 29,
  "time_alive": 721,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 31,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 32,
  "time_alive": 226,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 24,
  "time_alive": 343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 28,
  "time_alive": 915,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 29,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 30,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 31,
  "time_alive": 265,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 30,
  "time_alive": 320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 28,
  "time_alive": 362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 28,
  "time_alive": 531,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 30,
  "time_alive": 839,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 13,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 14,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 24,
  "time_alive": 992,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 18,
  "time_alive": 1180,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 12,
  "time_alive": 1431,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 28,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 23,
  "time_alive": 1021,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 27,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 32,
  "time_alive": 179,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 27,
  "time_alive": 419,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 19,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 18,
  "time_alive": 1128,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 23,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 17,
  "time_alive": 1306,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 29,
  "time_alive": 441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 30,
  "time_alive": 195,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 31,
  "time_alive": 131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 27,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 17,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 16,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 15,
  "time_alive": 1338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 31,
  "time_alive": 184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 23,
  "time_alive": 1217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 25,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 31,
  "time_alive": 197,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 23,
  "time_alive": 1099,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 21,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 27,
  "time_alive": 299,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 32,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 11,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 27,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 27,
  "time_alive": 287,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 27,
  "time_alive": 508,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 28,
  "time_alive": 288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 10,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 33,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 12,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1515,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 15,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1462,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1530,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 3,
  "time_alive": 1498,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 6,
  "time_alive": 1453,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 11,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 9,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1465,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1532,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:d7947383d34b4a1c8dab936994c1865a",
  "placement": 6,
  "time_alive": 1446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:d7947383d34b4a1c8dab936994c1865a",
  "placement": 18,
  "time_alive": 1259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:d7947383d34b4a1c8dab936994c1865a",
  "placement": 13,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:d7947383d34b4a1c8dab936994c1865a",
  "placement": 2,
  "time_alive": 1528,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:d7947383d34b4a1c8dab936994c1865a",
  "placement": 6,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:d7947383d34b4a1c8dab936994c1865a",
  "placement": 5,
  "time_alive": 1524,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 13,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 15,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 10,
  "time_alive": 1424,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 3,
  "time_alive": 1526,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 15,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 21,
  "time_alive": 1234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 2,
  "time_alive": 1501,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 2,
  "time_alive": 1493,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 12,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 5,
  "time_alive": 1510,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 13,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 18,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 7,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 6,
  "time_alive": 1482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 2,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 9,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 5,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 5,
  "time_alive": 1476,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1523,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 22,
  "time_alive": 719,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 11,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 20,
  "time_alive": 1245,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 19,
  "time_alive": 1260,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 8,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 6,
  "time_alive": 1495,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 28,
  "time_alive": 355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 4,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 8,
  "time_alive": 1475,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 7,
  "time_alive": 1436,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 19,
  "time_alive": 1200,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 4,
  "time_alive": 1502,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 7,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 27,
  "time_alive": 360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 11,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 1,
  "time_alive": 1501,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 7,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 19,
  "time_alive": 1262,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 16,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 5,
  "time_alive": 1453,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 22,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 11,
  "time_alive": 1416,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 21,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 27,
  "time_alive": 462,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 8,
  "time_alive": 1463,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 7,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 27,
  "time_alive": 283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 33,
  "time_alive": 104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 4,
  "time_alive": 1488,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 33,
  "time_alive": 101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 23,
  "time_alive": 620,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 30,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 2,
  "time_alive": 1532,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 32,
  "time_alive": 178,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 16,
  "time_alive": 1308,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 1,
  "time_alive": 1523,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 26,
  "time_alive": 444,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 29,
  "time_alive": 286,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 7,
  "time_alive": 1511,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 15,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 24,
  "time_alive": 476,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 31,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 13,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 14,
  "time_alive": 1376,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 16,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 23,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 3,
  "time_alive": 1491,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 24,
  "time_alive": 1112,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 4,
  "time_alive": 1511,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 8,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 4,
  "time_alive": 1526,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 4,
  "time_alive": 1473,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 30,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 18,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 1,
  "time_alive": 1528,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 9,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 32,
  "time_alive": 114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 24,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 17,
  "time_alive": 1263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 9,
  "time_alive": 1437,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 25,
  "time_alive": 455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 12,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 10,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 29,
  "time_alive": 290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 26,
  "time_alive": 337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 30,
  "time_alive": 192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 11,
  "time_alive": 1433,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 16,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b",
  "placement": 25,
  "time_alive": 454,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 26,
  "time_alive": 720,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 11,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 5,
  "time_alive": 1502,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 12,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 10,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 6,
  "time_alive": 1521,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:5307fa29487c44cda5249c683015cf44:fb376e2a135d484c980637764020ec3a",
  "placement": 9,
  "time_alive": 1422,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:5307fa29487c44cda5249c683015cf44:fb376e2a135d484c980637764020ec3a",
  "placement": 25,
  "time_alive": 441,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:5307fa29487c44cda5249c683015cf44:fb376e2a135d484c980637764020ec3a",
  "placement": 28,
  "time_alive": 231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:5307fa29487c44cda5249c683015cf44:fb376e2a135d484c980637764020ec3a",
  "placement": 14,
  "time_alive": 1380,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:5307fa29487c44cda5249c683015cf44:fb376e2a135d484c980637764020ec3a",
  "placement": 20,
  "time_alive": 953,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:5307fa29487c44cda5249c683015cf44:fb376e2a135d484c980637764020ec3a",
  "placement": 26,
  "time_alive": 437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 14,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 14,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 16,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 17,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 25,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 12,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 31,
  "time_alive": 227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 12,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 8,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 24,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 18,
  "time_alive": 1281,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 19,
  "time_alive": 1326,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "31477684b9524d49974d004c268e7ad9:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 16,
  "time_alive": 1342,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "31477684b9524d49974d004c268e7ad9:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 9,
  "time_alive": 1417,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "31477684b9524d49974d004c268e7ad9:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 22,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "31477684b9524d49974d004c268e7ad9:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 33,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "31477684b9524d49974d004c268e7ad9:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 19,
  "time_alive": 1181,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "31477684b9524d49974d004c268e7ad9:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 23,
  "time_alive": 876,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 25,
  "time_alive": 972,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 13,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 32,
  "time_alive": 116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 27,
  "time_alive": 395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 24,
  "time_alive": 432,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 14,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f3a9ccb-d7e8-4492-b13f-eb64a62e5ff4",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 14,
  "time_alive": 1376,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 21,
  "time_alive": 1220,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 23,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 18,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 21,
  "time_alive": 740,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 13,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:96d1408569264aa88919da6fe85474f7:f92f388865a24f8c8a7c7980258a353e",
  "placement": 17,
  "time_alive": 1300,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:96d1408569264aa88919da6fe85474f7:f92f388865a24f8c8a7c7980258a353e",
  "placement": 27,
  "time_alive": 227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:96d1408569264aa88919da6fe85474f7:f92f388865a24f8c8a7c7980258a353e",
  "placement": 29,
  "time_alive": 218,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:96d1408569264aa88919da6fe85474f7:f92f388865a24f8c8a7c7980258a353e",
  "placement": 20,
  "time_alive": 1047,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:96d1408569264aa88919da6fe85474f7:f92f388865a24f8c8a7c7980258a353e",
  "placement": 32,
  "time_alive": 220,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:96d1408569264aa88919da6fe85474f7:f92f388865a24f8c8a7c7980258a353e",
  "placement": 31,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f3a9ccb-d7e8-4492-b13f-eb64a62e5ff4",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 8,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 30,
  "time_alive": 280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 21,
  "time_alive": 1235,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 29,
  "time_alive": 348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 33,
  "time_alive": 143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 28,
  "time_alive": 279,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611:a0fd502656e449a9a8ea647391da834e:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 8,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611:a0fd502656e449a9a8ea647391da834e:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 20,
  "time_alive": 1189,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611:a0fd502656e449a9a8ea647391da834e:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 26,
  "time_alive": 499,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611:a0fd502656e449a9a8ea647391da834e:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 31,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611:a0fd502656e449a9a8ea647391da834e:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 28,
  "time_alive": 328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "96bc09f8dbb44ed4acdd1857e6ee8611:a0fd502656e449a9a8ea647391da834e:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 15,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 18,
  "time_alive": 1276,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 28,
  "time_alive": 190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 25,
  "time_alive": 983,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 21,
  "time_alive": 882,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 23,
  "time_alive": 565,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 29,
  "time_alive": 262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 27,
  "time_alive": 483,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 23,
  "time_alive": 707,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 20,
  "time_alive": 1254,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 30,
  "time_alive": 346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 26,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 17,
  "time_alive": 1341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f3a9ccb-d7e8-4492-b13f-eb64a62e5ff4",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 20,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 28,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 17,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 10,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 17,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 24,
  "time_alive": 464,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088:17642e267b0e4b689e9adbcf9ccdecbf:2ba1da9554614189adc6615e7c229071",
  "placement": 20,
  "time_alive": 1247,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088:17642e267b0e4b689e9adbcf9ccdecbf:2ba1da9554614189adc6615e7c229071",
  "placement": 29,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088:17642e267b0e4b689e9adbcf9ccdecbf:2ba1da9554614189adc6615e7c229071",
  "placement": 15,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088:17642e267b0e4b689e9adbcf9ccdecbf:2ba1da9554614189adc6615e7c229071",
  "placement": 19,
  "time_alive": 1128,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088:17642e267b0e4b689e9adbcf9ccdecbf:2ba1da9554614189adc6615e7c229071",
  "placement": 22,
  "time_alive": 597,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "405594f2-74ae-442e-bbcd-d8e43aea219e",
  "team_id": "0fe0034e3ccc43e9a96dd9869267b088:17642e267b0e4b689e9adbcf9ccdecbf:2ba1da9554614189adc6615e7c229071",
  "placement": 30,
  "time_alive": 240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f3a9ccb-d7e8-4492-b13f-eb64a62e5ff4",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 26,
  "time_alive": 446,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "904342e2-128f-405f-a9b7-992020a04328",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 22,
  "time_alive": 1217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f4802fd3-ba0c-4591-9bd5-09339cc45740",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 22,
  "time_alive": 1067,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8ec2317d-9886-478a-8712-568719df890a",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 14,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19cc0093-9215-4b25-9452-d57a41593faa",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 32,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 31,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1524,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 16,
  "time_alive": 1366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 11,
  "time_alive": 1379,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1518,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1456,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1513,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1511,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1498,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1507,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 12,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 4,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 3,
  "time_alive": 1494,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 2,
  "time_alive": 1497,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 18,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 4,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 27,
  "time_alive": 520,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 7,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 22,
  "time_alive": 1217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 7,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 1,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:f8fecd8352104527b1978d32390633e2",
  "placement": 3,
  "time_alive": 1480,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1513,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 27,
  "time_alive": 642,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 10,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 29,
  "time_alive": 211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 16,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 10,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 1,
  "time_alive": 1530,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 1,
  "time_alive": 1532,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 5,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 14,
  "time_alive": 1389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 10,
  "time_alive": 1442,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 17,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 7,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1518,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 2,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1506,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 18,
  "time_alive": 1251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 12,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 24,
  "time_alive": 852,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 2,
  "time_alive": 1507,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 2,
  "time_alive": 1530,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 16,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 4,
  "time_alive": 1486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 15,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 22,
  "time_alive": 899,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 10,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 2,
  "time_alive": 1506,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 4,
  "time_alive": 1503,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 6,
  "time_alive": 1485,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 26,
  "time_alive": 731,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 24,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 5,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 6,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 17,
  "time_alive": 1293,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 8,
  "time_alive": 1456,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 3,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 26,
  "time_alive": 541,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 6,
  "time_alive": 1462,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 16,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 5,
  "time_alive": 1482,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 11,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 9,
  "time_alive": 1396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 7,
  "time_alive": 1496,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 18,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 11,
  "time_alive": 1459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 14,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 11,
  "time_alive": 1428,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 12,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 11,
  "time_alive": 1422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1529,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 11,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1532,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 15,
  "time_alive": 1342,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 20,
  "time_alive": 1134,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 27,
  "time_alive": 837,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 9,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 9,
  "time_alive": 1466,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 28,
  "time_alive": 566,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 10,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 18,
  "time_alive": 1330,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 8,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 1,
  "time_alive": 1529,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 20,
  "time_alive": 1230,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 10,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 19,
  "time_alive": 1068,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 7,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 9,
  "time_alive": 1487,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 1,
  "time_alive": 1502,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 14,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 16,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 20,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 16,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 17,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 23,
  "time_alive": 1074,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 4,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 4,
  "time_alive": 1495,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 12,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 10,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 20,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 8,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 18,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 6,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 12,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 7,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 10,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 8,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 10,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 9,
  "time_alive": 1430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 7,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 21,
  "time_alive": 1076,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 18,
  "time_alive": 1241,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 12,
  "time_alive": 1438,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 2,
  "time_alive": 1512,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 5,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 30,
  "time_alive": 271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 17,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 7,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 9,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 21,
  "time_alive": 1229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 18,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 9,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 18,
  "time_alive": 1344,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 13,
  "time_alive": 1396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 11,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 1,
  "time_alive": 1512,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 23,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 13,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 3,
  "time_alive": 1499,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 27,
  "time_alive": 484,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 2,
  "time_alive": 1530,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 15,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 8,
  "time_alive": 1437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 13,
  "time_alive": 1383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 15,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 14,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 7,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 12,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 16,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 6,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 29,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 19,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 30,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 6,
  "time_alive": 1482,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 13,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 4,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 28,
  "time_alive": 700,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 27,
  "time_alive": 462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 5,
  "time_alive": 1477,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1497,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 6,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 15,
  "time_alive": 1363,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 4,
  "time_alive": 1499,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 14,
  "time_alive": 1341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 24,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 11,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 20,
  "time_alive": 1051,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 22,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 1,
  "time_alive": 1530,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 3,
  "time_alive": 1500,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 10,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 32,
  "time_alive": 109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 33,
  "time_alive": 128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 28,
  "time_alive": 222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 6,
  "time_alive": 1491,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 30,
  "time_alive": 229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 32,
  "time_alive": 188,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 33,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 32,
  "time_alive": 111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 29,
  "time_alive": 177,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 10,
  "time_alive": 1468,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 15,
  "time_alive": 1380,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 15,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 8,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 19,
  "time_alive": 1195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 27,
  "time_alive": 348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 25,
  "time_alive": 746,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 11,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 7,
  "time_alive": 1482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 8,
  "time_alive": 1442,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 4,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 11,
  "time_alive": 1389,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 5,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 6,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 19,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 20,
  "time_alive": 1252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 13,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 5,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 23,
  "time_alive": 957,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 5,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 15,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 24,
  "time_alive": 797,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 17,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 12,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 19,
  "time_alive": 1206,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 21,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 12,
  "time_alive": 1453,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 13,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 7,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 8,
  "time_alive": 1399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 9,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 21,
  "time_alive": 1183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 9,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 13,
  "time_alive": 1397,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 6,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 16,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 6,
  "time_alive": 1499,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 13,
  "time_alive": 1427,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 27,
  "time_alive": 685,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 15,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 14,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 14,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 13,
  "time_alive": 1352,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 19,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 21,
  "time_alive": 1019,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 2,
  "time_alive": 1472,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 19,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 8,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 20,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 8,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 24,
  "time_alive": 970,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 31,
  "time_alive": 223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 20,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 31,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 15,
  "time_alive": 1336,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 26,
  "time_alive": 911,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 12,
  "time_alive": 1404,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 10,
  "time_alive": 1405,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 30,
  "time_alive": 156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 25,
  "time_alive": 1046,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 22,
  "time_alive": 1138,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 28,
  "time_alive": 425,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 3,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 3,
  "time_alive": 1483,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 22,
  "time_alive": 707,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 18,
  "time_alive": 1248,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 26,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 17,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 32,
  "time_alive": 267,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 25,
  "time_alive": 744,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 17,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 21,
  "time_alive": 1195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 26,
  "time_alive": 528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 25,
  "time_alive": 740,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 26,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 27,
  "time_alive": 287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 9,
  "time_alive": 1392,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 15,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 16,
  "time_alive": 1286,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 8,
  "time_alive": 1419,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 29,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 28,
  "time_alive": 347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "5c62918b3d0c41fca96ba84258286021:c9bc2396c5e84aaca7d14c628081ffde:dec8522a04c24954af5b450bcf10fedf",
  "placement": 6,
  "time_alive": 1407,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 11,
  "time_alive": 1466,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 17,
  "time_alive": 1273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 22,
  "time_alive": 1023,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 18,
  "time_alive": 1263,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 9,
  "time_alive": 1435,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 11,
  "time_alive": 1380,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 21,
  "time_alive": 1093,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 29,
  "time_alive": 293,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 25,
  "time_alive": 927,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 28,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 27,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217:28d7f88eb0f84fbd8d8f2d2a5a141a48:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 25,
  "time_alive": 643,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 30,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 31,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 26,
  "time_alive": 701,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 25,
  "time_alive": 862,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 32,
  "time_alive": 188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 21,
  "time_alive": 1101,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 13,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 33,
  "time_alive": 110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 5,
  "time_alive": 1486,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 17,
  "time_alive": 1331,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 3,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "2710f646cfbf41048672df6131ad7662:4b06f770475842899a84a33b6189dd11:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 27,
  "time_alive": 392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 26,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 25,
  "time_alive": 665,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 29,
  "time_alive": 410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 4,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 5,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 19,
  "time_alive": 1162,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 24,
  "time_alive": 839,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 17,
  "time_alive": 1277,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 23,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 25,
  "time_alive": 683,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 16,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 28,
  "time_alive": 288,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 33,
  "time_alive": 129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 33,
  "time_alive": 136,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 33,
  "time_alive": 105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 9,
  "time_alive": 1394,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 21,
  "time_alive": 1031,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 30,
  "time_alive": 168,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 32,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 28,
  "time_alive": 340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 33,
  "time_alive": 160,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 14,
  "time_alive": 1367,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 23,
  "time_alive": 936,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 31,
  "time_alive": 148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 22,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 19,
  "time_alive": 1200,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 31,
  "time_alive": 222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 23,
  "time_alive": 1058,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 14,
  "time_alive": 1371,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 25,
  "time_alive": 424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 30,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 25,
  "time_alive": 939,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 18,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 22,
  "time_alive": 1011,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 21,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 23,
  "time_alive": 756,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 32,
  "time_alive": 260,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 30,
  "time_alive": 360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 23,
  "time_alive": 967,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 29,
  "time_alive": 395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 28,
  "time_alive": 280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 31,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 19,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 12,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 14,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 20,
  "time_alive": 1288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 18,
  "time_alive": 1136,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 14,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 16,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 23,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 24,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 19,
  "time_alive": 1256,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 24,
  "time_alive": 790,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 24,
  "time_alive": 455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 12,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 22,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 31,
  "time_alive": 443,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 30,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 14,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 26,
  "time_alive": 418,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 29,
  "time_alive": 526,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 24,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 20,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 17,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 26,
  "time_alive": 388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 28,
  "time_alive": 414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 24,
  "time_alive": 984,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 13,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 26,
  "time_alive": 416,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 29,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 24,
  "time_alive": 683,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 23,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 28,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 30,
  "time_alive": 356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 22,
  "time_alive": 1154,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 26,
  "time_alive": 328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 23,
  "time_alive": 499,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 20,
  "time_alive": 1138,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 20,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 27,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 23,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 22,
  "time_alive": 983,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "67a797909b094027a078ead3a7e579d9:6ee7f6aaabab41adb8d6469ae9222555:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 15,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 17,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 29,
  "time_alive": 410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 13,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 31,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 29,
  "time_alive": 275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 33,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "924e0c1f-bcb0-4818-8ec3-3f85697724e3",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 22,
  "time_alive": 957,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 32,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 28,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 27,
  "time_alive": 351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "638d5fd6e6e840deae7b8288428dbe3e:9e61829f2fe345f68150dfb967fe5709:a11a4118a5ca447283b977833d3699f1",
  "placement": 30,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3427962-8009-4a57-bb7c-bdea8fe588e6",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 31,
  "time_alive": 385,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f53451f-8d2b-43d5-bbd0-b558c5e518ae",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 32,
  "time_alive": 184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91a472f3-4ad4-4928-9078-a56d70d44303",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 32,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c7de276-b36e-4531-ba97-12962ea91b9f",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 30,
  "time_alive": 290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "894a48ce-b0f5-4203-8ff0-70ed6ad15389",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 25,
  "time_alive": 599,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "18d51820-a7f4-40d9-a0f4-3502aded282a",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 32,
  "time_alive": 143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4f2605b-e168-4c0c-9332-fc1c6063aab9",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 31,
  "time_alive": 197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd9cc5d-758f-42bb-b11c-4ea61c826a54",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 29,
  "time_alive": 825,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1fe2eef1-840c-4873-8621-5bf6b893bbb3",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 31,
  "time_alive": 286,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3b3460bb-7c78-43d3-ab76-f56d49b4c542",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 31,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "510644a9-c5c6-4b34-bb34-7046c2b5d300",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 32,
  "time_alive": 115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 13,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 15,
  "time_alive": 1393,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1536,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1511,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 25,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1543,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 6,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 16,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1545,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1514,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 6,
  "time_alive": 1474,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 11,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1515,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1524,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1478,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 1,
  "time_alive": 1544,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 14,
  "time_alive": 1426,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 10,
  "time_alive": 1415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 21,
  "time_alive": 1194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1507,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1547,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 17,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 10,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 9,
  "time_alive": 1478,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 21,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 14,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 13,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1522,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 20,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 2,
  "time_alive": 1545,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 10,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1547,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 7,
  "time_alive": 1483,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 12,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 9,
  "time_alive": 1457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 2,
  "time_alive": 1536,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 7,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 4,
  "time_alive": 1519,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 3,
  "time_alive": 1539,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 3,
  "time_alive": 1510,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 7,
  "time_alive": 1472,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 10,
  "time_alive": 1444,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 5,
  "time_alive": 1502,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 10,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 12,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 5,
  "time_alive": 1463,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 5,
  "time_alive": 1497,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 12,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 8,
  "time_alive": 1422,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 10,
  "time_alive": 1483,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 2,
  "time_alive": 1543,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 7,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 8,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 15,
  "time_alive": 1408,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 12,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 3,
  "time_alive": 1530,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "2710f646cfbf41048672df6131ad7662:9c0aebee92fc4471ab8101bbe12a1b0d:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 20,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1483,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 29,
  "time_alive": 270,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 3,
  "time_alive": 1530,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 5,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 9,
  "time_alive": 1485,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 25,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 12,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 6,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 32,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1514,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 23,
  "time_alive": 1020,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 28,
  "time_alive": 354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 15,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 11,
  "time_alive": 1455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 19,
  "time_alive": 1278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 2,
  "time_alive": 1511,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 3,
  "time_alive": 1538,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 8,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 23,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 10,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 5,
  "time_alive": 1490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 6,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 12,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 3,
  "time_alive": 1512,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 3,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 13,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 8,
  "time_alive": 1484,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 14,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 5,
  "time_alive": 1519,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 7,
  "time_alive": 1503,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 5,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 25,
  "time_alive": 909,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 8,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 20,
  "time_alive": 1200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 21,
  "time_alive": 1149,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 1,
  "time_alive": 1515,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1483,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 26,
  "time_alive": 696,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 6,
  "time_alive": 1488,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 22,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 6,
  "time_alive": 1512,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 16,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1522,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1505,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 12,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 9,
  "time_alive": 1452,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 13,
  "time_alive": 1394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 13,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 21,
  "time_alive": 1187,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 1,
  "time_alive": 1515,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 18,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 19,
  "time_alive": 1244,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 30,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 17,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 25,
  "time_alive": 842,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 1,
  "time_alive": 1510,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 9,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 8,
  "time_alive": 1483,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 6,
  "time_alive": 1488,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 7,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 6,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 13,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 17,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 11,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 6,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 4,
  "time_alive": 1505,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 11,
  "time_alive": 1413,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 13,
  "time_alive": 1430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 7,
  "time_alive": 1485,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 33,
  "time_alive": 102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 29,
  "time_alive": 347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 25,
  "time_alive": 796,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 4,
  "time_alive": 1503,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 25,
  "time_alive": 940,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 18,
  "time_alive": 1328,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 15,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 15,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 9,
  "time_alive": 1423,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 33,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 6,
  "time_alive": 1476,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 30,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 14,
  "time_alive": 1379,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:4b06f770475842899a84a33b6189dd11:fb376e2a135d484c980637764020ec3a",
  "placement": 2,
  "time_alive": 1515,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 27,
  "time_alive": 543,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 7,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 5,
  "time_alive": 1511,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 6,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 7,
  "time_alive": 1510,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 9,
  "time_alive": 1477,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 14,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 13,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 19,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 28,
  "time_alive": 482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 8,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:5027366496ce4254931a2e2f02b1af32:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 14,
  "time_alive": 1388,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 11,
  "time_alive": 1420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 14,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 29,
  "time_alive": 467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 3,
  "time_alive": 1498,
  "elims": 9,
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
    