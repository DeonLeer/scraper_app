const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "043b8e69-a00f-429f-ba55-b00346b27174",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 97,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00603d50-43c6-4183-b25c-2913e4691fd8",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 97,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02aa832d-20b8-457a-8352-f5c6c802d66a",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 96,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 97,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00130730-e1d6-478b-9bba-ad3012b20a7c",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 71,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06f27313-df27-4f29-806b-9a86460dbffb",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 89,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 8,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 2,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 5,
  "time_alive": 1445,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 1,
  "time_alive": 1502,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 34,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 40,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 9,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 3,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 1,
  "time_alive": 1473,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 38,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 18,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 18,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 2,
  "time_alive": 1491,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 12,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 9,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 40,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 9,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 17,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 1,
  "time_alive": 1491,
  "elims": 13,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 62,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 89,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 15,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 31,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 3,
  "time_alive": 1491,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 19,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 9,
  "time_alive": 1428,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 66,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 5,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 7,
  "time_alive": 1470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 7,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 24,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 8,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 11,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 20,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 17,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 8,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 96,
  "time_alive": 477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 68,
  "time_alive": 968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 26,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 12,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1523,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 40,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 6,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 24,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 25,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 43,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 60,
  "time_alive": 1095,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 3,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 8,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 20,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 14,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 4,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 20,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 80,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 41,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 13,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 5,
  "time_alive": 1476,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 33,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 85,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 76,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 2,
  "time_alive": 1502,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 70,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 1,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 5,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 38,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 79,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 36,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 36,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 20,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 93,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 59,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 68,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 18,
  "time_alive": 1411,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 10,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 4,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 50,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 88,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 18,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 21,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 4,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 9,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 67,
  "time_alive": 974,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 1,
  "time_alive": 1481,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 45,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 44,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 60,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 27,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 22,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 25,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 93,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 16,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 73,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 2,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 86,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 14,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 59,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 97,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 3,
  "time_alive": 1517,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 22,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 29,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 48,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 90,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 40,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 7,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 21,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 70,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 87,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 11,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 74,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 24,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 40,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 10,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 23,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 39,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 10,
  "time_alive": 1437,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 32,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 27,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 69,
  "time_alive": 1005,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 81,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 50,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 59,
  "time_alive": 1093,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 11,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 4,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 66,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 46,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 67,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 23,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 46,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 57,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 37,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 21,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 10,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 11,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 70,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 24,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 13,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 40,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 47,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 57,
  "time_alive": 1115,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 55,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 64,
  "time_alive": 1046,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 47,
  "time_alive": 1227,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 16,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 19,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 70,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 37,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 52,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 7,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 16,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 14,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 28,
  "time_alive": 1335,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 96,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 67,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 19,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 34,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 62,
  "time_alive": 1040,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 34,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 31,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 22,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 8,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 44,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 81,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 56,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 8,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 42,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 12,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 26,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 82,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 49,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 13,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 27,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 5,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 87,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 58,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 6,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 47,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 78,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 71,
  "time_alive": 848,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 30,
  "time_alive": 1374,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 21,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 74,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 55,
  "time_alive": 1122,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 17,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 41,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 75,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 98,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 2,
  "time_alive": 1473,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 31,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 56,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 71,
  "time_alive": 736,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 36,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 78,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 50,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 28,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 6,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 65,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 51,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 15,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 14,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 94,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 35,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 46,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 66,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 54,
  "time_alive": 1121,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 71,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 19,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 2,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 82,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 94,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 92,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 43,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 3,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 27,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 76,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 56,
  "time_alive": 1125,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 5,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 70,
  "time_alive": 928,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 96,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 68,
  "time_alive": 906,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 38,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 99,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 100,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 32,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 75,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 14,
  "time_alive": 1435,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 29,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 34,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 22,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 87,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 83,
  "time_alive": 549,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 67,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 12,
  "time_alive": 1438,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 6,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 80,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 16,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 86,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 33,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 74,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 3,
  "time_alive": 1469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 16,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 23,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 98,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 97,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 92,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 77,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 44,
  "time_alive": 1230,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 23,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 63,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 81,
  "time_alive": 423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 80,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 75,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 65,
  "time_alive": 1044,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 11,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 28,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 36,
  "time_alive": 1354,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 48,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 10,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 15,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 87,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 89,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 75,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 28,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 18,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 33,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 25,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 62,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 63,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 38,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 73,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 20,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 9,
  "time_alive": 1445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 48,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 59,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 92,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 94,
  "time_alive": 449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 67,
  "time_alive": 974,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 45,
  "time_alive": 1250,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 49,
  "time_alive": 1217,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 68,
  "time_alive": 795,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 35,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 69,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 34,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 92,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 22,
  "time_alive": 1407,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 73,
  "time_alive": 647,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 42,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 36,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 19,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 89,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 26,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 69,
  "time_alive": 792,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 73,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 43,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 17,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 30,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 29,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 66,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 91,
  "time_alive": 598,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 13,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 73,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 64,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 59,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 6,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 25,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 33,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 46,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 53,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 30,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 25,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 20,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 21,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 83,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 57,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 77,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 37,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 64,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 99,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 7,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 34,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 83,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 33,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 60,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 76,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 37,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 14,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 24,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 97,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 47,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 31,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 92,
  "time_alive": 511,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 35,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 11,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 43,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 7,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 90,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 90,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 49,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 47,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 51,
  "time_alive": 1209,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 32,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 71,
  "time_alive": 936,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 30,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 32,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 32,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 95,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 27,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 82,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 33,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 76,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 49,
  "time_alive": 1213,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 31,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 91,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 12,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 77,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 85,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 52,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 16,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 89,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 58,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 50,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 51,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 28,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 53,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 86,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 49,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 6,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 82,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 83,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 63,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 23,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 41,
  "time_alive": 1248,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 59,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 94,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 91,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 27,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 83,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 38,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 73,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 41,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 21,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 97,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 41,
  "time_alive": 1264,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 35,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 84,
  "time_alive": 499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 44,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 55,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 52,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 29,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 97,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 90,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 93,
  "time_alive": 328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 35,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 69,
  "time_alive": 963,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 42,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 61,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 54,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 79,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 23,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 37,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 58,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 95,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 76,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 50,
  "time_alive": 1217,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 24,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 39,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 17,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 91,
  "time_alive": 516,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 61,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 54,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 85,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 13,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 87,
  "time_alive": 767,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 94,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 46,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 42,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 95,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 72,
  "time_alive": 924,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 19,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 88,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 58,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 69,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 78,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 89,
  "time_alive": 672,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 47,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 42,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 62,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 39,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 45,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 44,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 44,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 99,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 26,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 72,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 70,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 76,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 39,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 74,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 29,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 37,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 53,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 17,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 72,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 69,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 48,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 58,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 72,
  "time_alive": 698,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 85,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 35,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 36,
  "time_alive": 1292,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 65,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 92,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 84,
  "time_alive": 826,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 26,
  "time_alive": 1368,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 63,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 56,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 84,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 94,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 18,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 66,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 72,
  "time_alive": 877,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 51,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 88,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 80,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 78,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 95,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 51,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 74,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 15,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 54,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 79,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 64,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 10,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 52,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 78,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 56,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 30,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 65,
  "time_alive": 1015,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 86,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 91,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 66,
  "time_alive": 967,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 93,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 26,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 61,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 25,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 80,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 98,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 90,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 61,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 30,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 53,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 39,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 57,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 60,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 54,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 79,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 29,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 63,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 64,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 45,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 48,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 84,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 55,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 55,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 62,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 100,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 67,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 28,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 43,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 61,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 77,
  "time_alive": 530,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 41,
  "time_alive": 1252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 53,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 60,
  "time_alive": 1091,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 60,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 86,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 86,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 77,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 63,
  "time_alive": 1047,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 22,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 88,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 99,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 96,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 55,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 93,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 77,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 85,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 75,
  "time_alive": 784,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 58,
  "time_alive": 1130,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 90,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 84,
  "time_alive": 833,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 75,
  "time_alive": 866,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 95,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 38,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 89,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 46,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 51,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 98,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 72,
  "time_alive": 882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 65,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 79,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 87,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 50,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 62,
  "time_alive": 1048,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 81,
  "time_alive": 599,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 96,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 48,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 71,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 45,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 56,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 71,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 74,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 64,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 68,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 57,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 85,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 32,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 91,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 84,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 98,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 81,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 39,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 68,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 95,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 42,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 83,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 52,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 54,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 93,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 45,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 88,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 49,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 82,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 81,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 79,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 43,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 61,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 65,
  "time_alive": 989,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 96,
  "time_alive": 390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013b40fd-2cde-4ae7-8761-6945b5b2169d",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 78,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c0e054-e2a9-4741-848f-421a57c0e13f",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 82,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cb3819c-3a75-4695-968e-ec3f51f6e405",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 80,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031e77c1-70c9-49d7-bd69-011b08753e78",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 57,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 88,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "060f2d60-7f63-40c7-a419-0dc15005597f",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 97,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 17,
  "time_alive": 1456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 9,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 22,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 1,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 3,
  "time_alive": 1537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 27,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 14,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 17,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 5,
  "time_alive": 1506,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 39,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 15,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 14,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 22,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 13,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 17,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 17,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 1,
  "time_alive": 1541,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 20,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 6,
  "time_alive": 1531,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 2,
  "time_alive": 1547,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 79,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 5,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 2,
  "time_alive": 1541,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 85,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 3,
  "time_alive": 1548,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 74,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 92,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 2,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 10,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 25,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 1,
  "time_alive": 1556,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 52,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 29,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 18,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 14,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 24,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 37,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 14,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 8,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 46,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 12,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 9,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 11,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 4,
  "time_alive": 1519,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 34,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 43,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 13,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 46,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 15,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 15,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 20,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 26,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 43,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 17,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 29,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 40,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 26,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 15,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 9,
  "time_alive": 1489,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 68,
  "time_alive": 619,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 33,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 16,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 2,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 48,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 53,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 21,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 35,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 11,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 4,
  "time_alive": 1536,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 18,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 98,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 6,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 78,
  "time_alive": 596,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 25,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 6,
  "time_alive": 1519,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 8,
  "time_alive": 1507,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 4,
  "time_alive": 1533,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 39,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 3,
  "time_alive": 1523,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 14,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 41,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 58,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 69,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 10,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 18,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 27,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 25,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 15,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 39,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 1,
  "time_alive": 1547,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 83,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 8,
  "time_alive": 1508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 36,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 16,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 42,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 27,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 9,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 16,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 41,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 36,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 36,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 49,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 24,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 1,
  "time_alive": 1547,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 46,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 49,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 4,
  "time_alive": 1507,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 10,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 75,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 54,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 32,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 30,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 45,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 6,
  "time_alive": 1491,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 21,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 65,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 76,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 31,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 1,
  "time_alive": 1531,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 42,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 36,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 33,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 7,
  "time_alive": 1518,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 25,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 32,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 75,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 38,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 22,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 34,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 12,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 52,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 19,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 5,
  "time_alive": 1523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 76,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 96,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 3,
  "time_alive": 1525,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 58,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 62,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 96,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 6,
  "time_alive": 1516,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 43,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 66,
  "time_alive": 1067,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 98,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 55,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 17,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 2,
  "time_alive": 1547,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 2,
  "time_alive": 1556,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 91,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 10,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 78,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 48,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 28,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 12,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 22,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 87,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 44,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 19,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 52,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 66,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 65,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 36,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 11,
  "time_alive": 1469,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 37,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 10,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 56,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 29,
  "time_alive": 1355,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 60,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 7,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 29,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 62,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 40,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 11,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 74,
  "time_alive": 779,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 56,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 11,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 70,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 87,
  "time_alive": 289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 28,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 85,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 3,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 18,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 71,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 18,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 27,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 49,
  "time_alive": 1230,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 41,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 62,
  "time_alive": 922,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 53,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 83,
  "time_alive": 420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 35,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 16,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 8,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 84,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 88,
  "time_alive": 223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 8,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 50,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 9,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 57,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 89,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 44,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 38,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 56,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 15,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 54,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 67,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 4,
  "time_alive": 1534,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 75,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 7,
  "time_alive": 1487,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 43,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 64,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 49,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 5,
  "time_alive": 1525,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "df4682ab35054d3ca2dadf7874e149a8",
  "placement": 63,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "df4682ab35054d3ca2dadf7874e149a8",
  "placement": 38,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "df4682ab35054d3ca2dadf7874e149a8",
  "placement": 25,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "df4682ab35054d3ca2dadf7874e149a8",
  "placement": 22,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "df4682ab35054d3ca2dadf7874e149a8",
  "placement": 74,
  "time_alive": 577,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "df4682ab35054d3ca2dadf7874e149a8",
  "placement": 12,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 47,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 24,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 68,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 90,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 46,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 3,
  "time_alive": 1544,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 28,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 53,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 57,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 70,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 20,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 16,
  "time_alive": 1470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 13,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 19,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 91,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 50,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 42,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 57,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "ee4bf5bf06d643e6b30d8dd807982a44",
  "placement": 89,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "ee4bf5bf06d643e6b30d8dd807982a44",
  "placement": 8,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "ee4bf5bf06d643e6b30d8dd807982a44",
  "placement": 41,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "ee4bf5bf06d643e6b30d8dd807982a44",
  "placement": 16,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "ee4bf5bf06d643e6b30d8dd807982a44",
  "placement": 68,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "ee4bf5bf06d643e6b30d8dd807982a44",
  "placement": 47,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 78,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 48,
  "time_alive": 1234,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 67,
  "time_alive": 927,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 79,
  "time_alive": 641,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 77,
  "time_alive": 450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 7,
  "time_alive": 1514,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 5,
  "time_alive": 1532,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 62,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 51,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 93,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 50,
  "time_alive": 1125,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 38,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 81,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 55,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 12,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 40,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 22,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 30,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "19de22edb93448e08b0b68ae592181a4",
  "placement": 44,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "19de22edb93448e08b0b68ae592181a4",
  "placement": 70,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "19de22edb93448e08b0b68ae592181a4",
  "placement": 70,
  "time_alive": 851,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "19de22edb93448e08b0b68ae592181a4",
  "placement": 91,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "19de22edb93448e08b0b68ae592181a4",
  "placement": 58,
  "time_alive": 1005,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "19de22edb93448e08b0b68ae592181a4",
  "placement": 13,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 97,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 93,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 30,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 30,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 73,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 19,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 71,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 20,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 33,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 34,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 45,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 49,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 62,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 57,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 14,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 31,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 87,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 29,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 49,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 33,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 39,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 81,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 44,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 11,
  "time_alive": 1481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "0ffd16745d464f8dafcc8022ec20c91a",
  "placement": 58,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "0ffd16745d464f8dafcc8022ec20c91a",
  "placement": 18,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "0ffd16745d464f8dafcc8022ec20c91a",
  "placement": 40,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "0ffd16745d464f8dafcc8022ec20c91a",
  "placement": 12,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "0ffd16745d464f8dafcc8022ec20c91a",
  "placement": 92,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "0ffd16745d464f8dafcc8022ec20c91a",
  "placement": 90,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 55,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 59,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 23,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 69,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 7,
  "time_alive": 1512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 35,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 95,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 32,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 71,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 52,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 23,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 32,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 41,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 47,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 6,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 72,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 57,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 60,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 20,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 21,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 38,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 67,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 83,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 74,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 10,
  "time_alive": 1488,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 78,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 64,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 51,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 30,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 90,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 68,
  "time_alive": 1014,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 7,
  "time_alive": 1482,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 66,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 88,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 96,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 61,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 87,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 46,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 21,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 69,
  "time_alive": 804,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 50,
  "time_alive": 1149,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 72,
  "time_alive": 862,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 83,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 73,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 29,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 26,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 66,
  "time_alive": 634,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 24,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 75,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 72,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 37,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 33,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 48,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 80,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 23,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 21,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 96,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 51,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 23,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "bb466c732abf452e9426be9c5f5a5248",
  "placement": 48,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "bb466c732abf452e9426be9c5f5a5248",
  "placement": 5,
  "time_alive": 1515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "bb466c732abf452e9426be9c5f5a5248",
  "placement": 69,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "bb466c732abf452e9426be9c5f5a5248",
  "placement": 97,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "bb466c732abf452e9426be9c5f5a5248",
  "placement": 40,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "bb466c732abf452e9426be9c5f5a5248",
  "placement": 75,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 85,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 69,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 48,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 61,
  "time_alive": 968,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 55,
  "time_alive": 1057,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 52,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 51,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 19,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 71,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 78,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 59,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 19,
  "time_alive": 1446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 60,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 53,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 47,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 81,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 69,
  "time_alive": 617,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 59,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 82,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 80,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 13,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 56,
  "time_alive": 1036,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 9,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 85,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 55,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 38,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 95,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 87,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "58b2cd03a9904197aecf6797326704e7",
  "placement": 88,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "58b2cd03a9904197aecf6797326704e7",
  "placement": 64,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "58b2cd03a9904197aecf6797326704e7",
  "placement": 86,
  "time_alive": 309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "58b2cd03a9904197aecf6797326704e7",
  "placement": 4,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "58b2cd03a9904197aecf6797326704e7",
  "placement": 63,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "58b2cd03a9904197aecf6797326704e7",
  "placement": 67,
  "time_alive": 623,
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
    