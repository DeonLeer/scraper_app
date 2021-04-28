const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 71,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 33,
  "time_alive": 1265,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 80,
  "time_alive": 539,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 28,
  "time_alive": 1294,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 2,
  "time_alive": 1432,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 80,
  "time_alive": 529,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 50,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 33,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 72,
  "time_alive": 414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 70,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 60,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 1,
  "time_alive": 1495,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 22,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 59,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 35,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 17,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 19,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 22,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 51,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 34,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 49,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 63,
  "time_alive": 1016,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 72,
  "time_alive": 694,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 50,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 15,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 20,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 26,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 23,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 46,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 94,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 91,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 4,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 64,
  "time_alive": 597,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 76,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 85,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 56,
  "time_alive": 1065,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 56,
  "time_alive": 1057,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 38,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 91,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 4,
  "time_alive": 1457,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 6,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 9,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 57,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 25,
  "time_alive": 1273,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 89,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 94,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 88,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 9,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 88,
  "time_alive": 333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 48,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 97,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 38,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 25,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 54,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 2,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 38,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 20,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 15,
  "time_alive": 1345,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 23,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 60,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 52,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 12,
  "time_alive": 1361,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 76,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 37,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 31,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 45,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 28,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 19,
  "time_alive": 1282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 79,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 7,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 42,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 89,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 55,
  "time_alive": 1064,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 63,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 53,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 61,
  "time_alive": 1095,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 24,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 4,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 20,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 49,
  "time_alive": 1144,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 43,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 84,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 10,
  "time_alive": 1396,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 14,
  "time_alive": 1348,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 79,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 73,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 21,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 67,
  "time_alive": 1029,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 9,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 67,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 75,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 6,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 90,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 54,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 44,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 30,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 12,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 28,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 7,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 27,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 33,
  "time_alive": 1282,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 7,
  "time_alive": 1400,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 31,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 77,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 77,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 44,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 64,
  "time_alive": 978,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 46,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 38,
  "time_alive": 1259,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 61,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 46,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 19,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 72,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 29,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 10,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 18,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 34,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 11,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 21,
  "time_alive": 1291,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 40,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 93,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 86,
  "time_alive": 232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 34,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 14,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 26,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 52,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 26,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 51,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 45,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 13,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 44,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 89,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 15,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 81,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 49,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 87,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 16,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 3,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 17,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 35,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 8,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 9,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 10,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 31,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 53,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 12,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 80,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 42,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 71,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 66,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 52,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 29,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 91,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 65,
  "time_alive": 974,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 23,
  "time_alive": 1308,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 49,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 65,
  "time_alive": 913,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 75,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 82,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 3,
  "time_alive": 1385,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 99,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 63,
  "time_alive": 944,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 90,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 96,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 39,
  "time_alive": 1180,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 43,
  "time_alive": 1184,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 58,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 5,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 6,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 30,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 29,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 47,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 95,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 42,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 51,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 17,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 35,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 41,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 45,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 19,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 56,
  "time_alive": 1120,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 38,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 55,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 40,
  "time_alive": 1233,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 75,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 15,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 53,
  "time_alive": 1084,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "bdb53a8313b547b5828683a1a007f311",
  "placement": 39,
  "time_alive": 1133,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 16,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 16,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 55,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 53,
  "time_alive": 1098,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 78,
  "time_alive": 564,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 45,
  "time_alive": 1153,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 8,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 56,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 69,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 73,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 24,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 50,
  "time_alive": 856,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 58,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 4,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 62,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 67,
  "time_alive": 841,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 19,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 54,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 32,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 63,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 20,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 37,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 74,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 71,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 81,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 57,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 22,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 35,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 33,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 39,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 15,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 18,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 36,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 13,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 46,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 26,
  "time_alive": 1227,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 36,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 54,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 86,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 32,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 5,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 17,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 48,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 23,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 81,
  "time_alive": 526,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 77,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 61,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 4,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 17,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 12,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 28,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 11,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 36,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 27,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 13,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 94,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 74,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 93,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 23,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 44,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 29,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 29,
  "time_alive": 1271,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 66,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 60,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 70,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 25,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 24,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 52,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 31,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 69,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 14,
  "time_alive": 1309,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 70,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 65,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 3,
  "time_alive": 1450,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 80,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 41,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 10,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 31,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 74,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 13,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 93,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 65,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 45,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "3b696b9745f44370942096aae08f66bc",
  "placement": 53,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 61,
  "time_alive": 1033,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 33,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 39,
  "time_alive": 1273,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 29,
  "time_alive": 1275,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 47,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 8,
  "time_alive": 1359,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 39,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 43,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 77,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 96,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 57,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 46,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 48,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 68,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 24,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 21,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 39,
  "time_alive": 1277,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 66,
  "time_alive": 598,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 5,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 22,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 62,
  "time_alive": 1052,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 79,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 73,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "39a94098c6e14637ac721a1ce3d45eca",
  "placement": 33,
  "time_alive": 1204,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 2,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 63,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 21,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 74,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 46,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 51,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 7,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 58,
  "time_alive": 1062,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 39,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 74,
  "time_alive": 563,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 32,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "7066db0932354298814d0b4b80fc37dd",
  "placement": 59,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 32,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 46,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 6,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 48,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 13,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 99,
  "time_alive": 62,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 22,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 48,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 70,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 87,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 11,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 41,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 41,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 39,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 53,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 77,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 17,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 61,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 42,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 15,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 48,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 12,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 43,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 82,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 24,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 49,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 57,
  "time_alive": 1057,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 39,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 83,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 77,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 40,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 21,
  "time_alive": 1325,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 97,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 48,
  "time_alive": 1156,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 86,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 71,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 27,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 68,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 34,
  "time_alive": 1265,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 62,
  "time_alive": 933,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 68,
  "time_alive": 547,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 18,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 57,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 15,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 32,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 83,
  "time_alive": 387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "ef910e9c926b4a188261f38f3db45b51",
  "placement": 86,
  "time_alive": 257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 40,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 52,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 40,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 96,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 25,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 48,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 68,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 49,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 10,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 9,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 28,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 14,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 60,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 66,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 38,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 42,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 49,
  "time_alive": 1181,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 58,
  "time_alive": 950,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 66,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 77,
  "time_alive": 779,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 84,
  "time_alive": 418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 33,
  "time_alive": 1267,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 27,
  "time_alive": 1266,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 84,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 62,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 2,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 27,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 51,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 44,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 11,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 25,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 51,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 55,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 81,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 87,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 92,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 26,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 62,
  "time_alive": 1048,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 83,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 44,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 42,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 40,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 54,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 90,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 61,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 29,
  "time_alive": 1291,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 2,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 11,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 90,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 50,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 4,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 65,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 31,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 13,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 84,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 75,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 87,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 44,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 36,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 25,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 18,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 35,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 64,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 62,
  "time_alive": 915,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 98,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 65,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 65,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 20,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 37,
  "time_alive": 1270,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 45,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 72,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 54,
  "time_alive": 654,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 9,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 28,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 81,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 59,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 60,
  "time_alive": 1054,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 6,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 62,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 86,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 35,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 55,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 68,
  "time_alive": 626,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 45,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 19,
  "time_alive": 1313,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 90,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 75,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 24,
  "time_alive": 1285,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 88,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 37,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 90,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 93,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 13,
  "time_alive": 1357,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 49,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 70,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 75,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 59,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 78,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 12,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 30,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 24,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 74,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 14,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 11,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 59,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 85,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 76,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 60,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 49,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 75,
  "time_alive": 642,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 26,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 23,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 71,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 3,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 79,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 37,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 83,
  "time_alive": 453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 92,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 71,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 57,
  "time_alive": 622,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 55,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 51,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 84,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 16,
  "time_alive": 1318,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 86,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 82,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 51,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 10,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 17,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 68,
  "time_alive": 750,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 60,
  "time_alive": 872,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 83,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 96,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 92,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 94,
  "time_alive": 109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 36,
  "time_alive": 1263,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 57,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 33,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 71,
  "time_alive": 827,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 81,
  "time_alive": 624,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 32,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 54,
  "time_alive": 1094,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 59,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 27,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 86,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 82,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 70,
  "time_alive": 894,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 78,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 41,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 85,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 21,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 50,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 58,
  "time_alive": 1100,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 24,
  "time_alive": 1297,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 78,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "e1d210eec0da40589175eec204eea679",
  "placement": 38,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 38,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 25,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 31,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 27,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 75,
  "time_alive": 703,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 79,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 26,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 68,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 44,
  "time_alive": 1247,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 41,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 82,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 37,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 80,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 67,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 7,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 58,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 14,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 34,
  "time_alive": 1262,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 78,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 78,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 90,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 95,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 91,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 23,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 52,
  "time_alive": 1087,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 94,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 33,
  "time_alive": 1284,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 20,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 22,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 24,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 58,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 12,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 82,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 86,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 56,
  "time_alive": 1043,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "642adc038963431bb9c005aa57436e2a",
  "placement": 66,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 87,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 26,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 11,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 14,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 45,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 23,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 73,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 83,
  "time_alive": 529,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 19,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 26,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 55,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 69,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 4,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 99,
  "time_alive": 74,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 42,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 83,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 9,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 88,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 85,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 76,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 91,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 70,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 94,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 32,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 64,
  "time_alive": 978,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 71,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 88,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 64,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 84,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 72,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 9,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 41,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 52,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 76,
  "time_alive": 442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 31,
  "time_alive": 1252,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 28,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 20,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 86,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 18,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 91,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 58,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 56,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 89,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 32,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 18,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 38,
  "time_alive": 1261,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 75,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 48,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 95,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 5,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 37,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 89,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 55,
  "time_alive": 1022,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 43,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 98,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 6,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 59,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 79,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 87,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 85,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 79,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 13,
  "time_alive": 1349,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 17,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 34,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 43,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 30,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 67,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 56,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 18,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 84,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 24,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 12,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 84,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 69,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 90,
  "time_alive": 303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 67,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 89,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 91,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 65,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 63,
  "time_alive": 1049,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 6,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 64,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 91,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 56,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 18,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 74,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 86,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 77,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 59,
  "time_alive": 893,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 31,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 85,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 65,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 64,
  "time_alive": 943,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 85,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "6bb7d767c2234676b71b20adde95c119",
  "placement": 9,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 68,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 69,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 43,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 80,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 64,
  "time_alive": 914,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 50,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 81,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 69,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 27,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 36,
  "time_alive": 1262,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 39,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 63,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 88,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 59,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 54,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 54,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 11,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 78,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 12,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 34,
  "time_alive": 1279,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 49,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 82,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 62,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 33,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 7,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 76,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 73,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 79,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 60,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 11,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 91,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 96,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 89,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 50,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 80,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 98,
  "time_alive": 56,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 37,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 15,
  "time_alive": 1338,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 85,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 96,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 44,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 92,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 97,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 88,
  "time_alive": 342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 46,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 41,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 76,
  "time_alive": 364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 47,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 91,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 92,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 26,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 81,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 73,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 94,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 66,
  "time_alive": 963,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 40,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 16,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 96,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 18,
  "time_alive": 1285,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 92,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 96,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 91,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 28,
  "time_alive": 1277,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 90,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 83,
  "time_alive": 280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 96,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 64,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 46,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 39,
  "time_alive": 1258,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 29,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "c572b27c7e1a4c7b9299d0c2905bd6cc",
  "placement": 61,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 77,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 95,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 52,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 71,
  "time_alive": 746,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 72,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 47,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 69,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 35,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 42,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 62,
  "time_alive": 964,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 63,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 10,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 82,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 36,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 99,
  "time_alive": 41,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 94,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 54,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 71,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 88,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 73,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 68,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 23,
  "time_alive": 1304,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 37,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 22,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 79,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 98,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 36,
  "time_alive": 1280,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 98,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 94,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 98,
  "time_alive": 74,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 16,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 38,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 85,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 61,
  "time_alive": 971,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 65,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "55ac5504315e47439c3e5734f9397a05",
  "placement": 95,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 100,
  "time_alive": 55,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 100,
  "time_alive": 47,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 20,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 37,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 26,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 15,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 56,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 62,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 73,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 88,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 92,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 88,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 69,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 34,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 32,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 66,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 92,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 95,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 86,
  "time_alive": 441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 44,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 60,
  "time_alive": 1061,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 30,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 48,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "5f2805cfc2e74475ac5b0ed0ca47f930",
  "placement": 40,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 66,
  "time_alive": 967,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 38,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 93,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 70,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 27,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 63,
  "time_alive": 768,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 31,
  "time_alive": 1219,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 45,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 78,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 57,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 95,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 69,
  "time_alive": 534,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 76,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 88,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 34,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 83,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 80,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 56,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 57,
  "time_alive": 1064,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 93,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 73,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 72,
  "time_alive": 738,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 69,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 90,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 36,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 80,
  "time_alive": 746,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 21,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 80,
  "time_alive": 357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 81,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 74,
  "time_alive": 389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 73,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 81,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 77,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 75,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 87,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 63,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 61,
  "time_alive": 1055,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 66,
  "time_alive": 967,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 43,
  "time_alive": 1234,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 67,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "e80ec7000a524749bed7096defb3b83f",
  "placement": 93,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 61,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 65,
  "time_alive": 966,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 10,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 55,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 62,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 97,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 96,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 98,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 93,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 87,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 95,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 43,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 97,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 80,
  "time_alive": 338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 64,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 26,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 89,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 19,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 93,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 73,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 34,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 77,
  "time_alive": 549,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 19,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 30,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 84,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 52,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 74,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 64,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 53,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 46,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 83,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 82,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 92,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 85,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 93,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 95,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 79,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 92,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 8,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 42,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 94,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 99,
  "time_alive": 55,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 34,
  "time_alive": 1283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 95,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 51,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 96,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 59,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 95,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 79,
  "time_alive": 536,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 78,
  "time_alive": 386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 89,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 85,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 51,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 56,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 85,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 68,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 91,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 64,
  "time_alive": 668,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 70,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 53,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 72,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 98,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 88,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 65,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 13,
  "time_alive": 1343,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 19,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 9,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 5,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 37,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 5,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 24,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 40,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 1,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 3,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 32,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 47,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 56,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 70,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 28,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 4,
  "time_alive": 1433,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 4,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 1,
  "time_alive": 1455,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 13,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 75,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 34,
  "time_alive": 1223,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 1,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 9,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 7,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 32,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 38,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 7,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 28,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 23,
  "time_alive": 1326,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 6,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 1,
  "time_alive": 1497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 19,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 2,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 16,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 20,
  "time_alive": 1282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 56,
  "time_alive": 1056,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 27,
  "time_alive": 1311,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 27,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 65,
  "time_alive": 802,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 11,
  "time_alive": 1384,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 17,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 8,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 16,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 5,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 55,
  "time_alive": 829,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 82,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 1,
  "time_alive": 1380,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 53,
  "time_alive": 1089,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 9,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 47,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 4,
  "time_alive": 1424,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 38,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 8,
  "time_alive": 1389,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 4,
  "time_alive": 1438,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 11,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 68,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 6,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 14,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 12,
  "time_alive": 1344,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 86,
  "time_alive": 245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 81,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 37,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 47,
  "time_alive": 1159,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 2,
  "time_alive": 1453,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 81,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 42,
  "time_alive": 1229,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 3,
  "time_alive": 1424,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 9,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 92,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 3,
  "time_alive": 1370,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 2,
  "time_alive": 1476,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 3,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 39,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 23,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 15,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 36,
  "time_alive": 1275,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 48,
  "time_alive": 1199,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 2,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 17,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 86,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 34,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 86,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 3,
  "time_alive": 1417,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 35,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 1,
  "time_alive": 1484,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 64,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 52,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 22,
  "time_alive": 1327,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 39,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 23,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 62,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 27,
  "time_alive": 1284,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 54,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 71,
  "time_alive": 336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 18,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 16,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 25,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 17,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 76,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 3,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 3,
  "time_alive": 1451,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 5,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 36,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 42,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 37,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 87,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d34a398a-38d2-4590-bcea-7cfa6e95fe88",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 2,
  "time_alive": 1437,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "3d60b740-dd90-4f2e-9aef-a2a714514ff8",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 7,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c82d66e0-6e7d-4228-b92e-ed9b5c0bacbb",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 58,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1dd3f9ea-bed8-4150-aba7-01316455aec8",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 31,
  "time_alive": 1276,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "494e2b20-51a9-49c6-aae0-ede0ba30f374",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 27,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1348d765-595f-41a6-9ecc-a95bea2024a8",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 15,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d59684f-3f4b-4856-b77e-45673853f412",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 47,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17414d31-883a-46b6-b0e9-2d32dd421789",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 30,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18357be0-d225-4501-a570-bd0818e06218",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 3,
  "time_alive": 1401,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05c8a763-3cce-43b7-bdb0-9c96f47aef8b",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 8,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021213ec-0d6a-4d98-a07d-665f1f016640",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 37,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bbcbc5fe-8b57-4204-8852-360c1dab4822",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 37,
  "time_alive": 1254,
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
    