const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 83,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 78,
  "time_alive": 809,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 90,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 86,
  "time_alive": 295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 82,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 33,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "d2b048852835476caff41b9bac98528b",
  "placement": 87,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 91,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 43,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 84,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 58,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 62,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "d1bdc30f62354562be15cd16907789f5",
  "placement": 71,
  "time_alive": 786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e798f3ccd6814693a8b518bfb86b91b7",
  "placement": 72,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e798f3ccd6814693a8b518bfb86b91b7",
  "placement": 59,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e798f3ccd6814693a8b518bfb86b91b7",
  "placement": 67,
  "time_alive": 833,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e798f3ccd6814693a8b518bfb86b91b7",
  "placement": 52,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e798f3ccd6814693a8b518bfb86b91b7",
  "placement": 91,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 80,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 32,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 69,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 76,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 84,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "803c263c083143e6b103c6e390696823",
  "placement": 91,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 95,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 89,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 79,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 77,
  "time_alive": 620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 72,
  "time_alive": 700,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 50,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 59,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 71,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 65,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 66,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3",
  "placement": 88,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 70,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 73,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 53,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 84,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 55,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "e10df84f211448c0aff521fc69a6be4c",
  "placement": 85,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 74,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 84,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 85,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 67,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 58,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00da90a8-f85f-463b-87d6-79db2a0e828c",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 58,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01241e91-1423-43e1-a6c7-25fe8b2dd817",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 94,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c647ee-8208-48ce-9ada-428c54dd8756",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 42,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "116322b7-fd6d-4846-b97f-2c24d03f3960",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 96,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03106060-f61e-444a-ad2c-159e2b4341a9",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 92,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "019500a8-c4ab-45b9-87c3-a170dc7ef0aa",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 93,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 29,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 1,
  "time_alive": 1501,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 3,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 12,
  "time_alive": 1425,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 82,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2",
  "placement": 51,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 1,
  "time_alive": 1488,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 81,
  "time_alive": 821,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 11,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 100,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 25,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "3392bd540032489da6c083c0a72d8b38",
  "placement": 8,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 25,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 70,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 6,
  "time_alive": 1482,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 7,
  "time_alive": 1455,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 12,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 43,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 99,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 9,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 31,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 1,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 14,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 96,
  "time_alive": 112,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 98,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 10,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 9,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 2,
  "time_alive": 1494,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 78,
  "time_alive": 821,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "4acefca3bb174edabf72988632827191",
  "placement": 86,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 13,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 17,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 70,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 9,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 8,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 41,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 35,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 62,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 4,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 22,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 9,
  "time_alive": 1467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 10,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 41,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 2,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 42,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 74,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 2,
  "time_alive": 1518,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 56,
  "time_alive": 951,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 44,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 13,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 50,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 14,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 11,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 12,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 2,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 22,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 68,
  "time_alive": 943,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 38,
  "time_alive": 1327,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 63,
  "time_alive": 729,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 12,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 83,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 15,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 13,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 46,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 3,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 14,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 82,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 25,
  "time_alive": 1384,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 48,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 16,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 95,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 85,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 1,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 10,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 20,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 80,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 32,
  "time_alive": 1370,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 40,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 2,
  "time_alive": 1508,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 75,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 23,
  "time_alive": 1388,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 84,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 52,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 19,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 54,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 5,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 10,
  "time_alive": 1456,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0673dbeffbce44a5a03872df61251b39",
  "placement": 65,
  "time_alive": 710,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 9,
  "time_alive": 1425,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 39,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 77,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 20,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 7,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 67,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 33,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 11,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 5,
  "time_alive": 1489,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 28,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 43,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "9e2fed9126da49538e074716b47a87b5",
  "placement": 42,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 37,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 5,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 26,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 71,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 40,
  "time_alive": 1320,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 9,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 12,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 15,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 15,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 68,
  "time_alive": 955,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 30,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 20,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 15,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 25,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 33,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 54,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 1,
  "time_alive": 1518,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 52,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 16,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 23,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 7,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 6,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 85,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 69,
  "time_alive": 642,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 7,
  "time_alive": 1442,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 18,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 33,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 80,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "24838f8bd1794d25a7d491c175cde134",
  "placement": 71,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 59,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 6,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 67,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 93,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 15,
  "time_alive": 1410,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 22,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 88,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 31,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 16,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 29,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 3,
  "time_alive": 1510,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "74b949b2d5d34752a6555ae891a4e886",
  "placement": 34,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 56,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 3,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 43,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 77,
  "time_alive": 847,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 17,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 11,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 39,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 53,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 34,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 90,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 53,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 1,
  "time_alive": 1510,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 22,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 57,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 59,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 40,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 5,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08",
  "placement": 21,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 97,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 27,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 27,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 31,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 4,
  "time_alive": 1499,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 26,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 31,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 21,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 20,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 8,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 46,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 30,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 36,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 38,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 95,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 44,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 67,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 5,
  "time_alive": 1490,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 91,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 66,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 91,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 61,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 22,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 2,
  "time_alive": 1510,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 21,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 28,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 52,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 62,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 27,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 14,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 76,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 14,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 43,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 49,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 3,
  "time_alive": 1507,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "822ea6bfb44649da877e97e82cb6a4fb",
  "placement": 46,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "822ea6bfb44649da877e97e82cb6a4fb",
  "placement": 32,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "822ea6bfb44649da877e97e82cb6a4fb",
  "placement": 86,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "822ea6bfb44649da877e97e82cb6a4fb",
  "placement": 35,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "822ea6bfb44649da877e97e82cb6a4fb",
  "placement": 26,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "822ea6bfb44649da877e97e82cb6a4fb",
  "placement": 7,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 93,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 7,
  "time_alive": 1468,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 17,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 47,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 81,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 29,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 58,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 42,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 24,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 57,
  "time_alive": 1164,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 18,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 19,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0e639ebbc2254d1194ea117f79704f6b",
  "placement": 8,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0e639ebbc2254d1194ea117f79704f6b",
  "placement": 34,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0e639ebbc2254d1194ea117f79704f6b",
  "placement": 23,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0e639ebbc2254d1194ea117f79704f6b",
  "placement": 69,
  "time_alive": 947,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0e639ebbc2254d1194ea117f79704f6b",
  "placement": 64,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0e639ebbc2254d1194ea117f79704f6b",
  "placement": 44,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 17,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 88,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 13,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 64,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 21,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "66cae10825ec46afaa453e086db56de3",
  "placement": 37,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 51,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 16,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 65,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 56,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 77,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 6,
  "time_alive": 1484,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 5,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 61,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 29,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 97,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 24,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33",
  "placement": 54,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 83,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 20,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 41,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 32,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "290986d01781406aa35ce9a69ed5580b",
  "placement": 4,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 53,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 68,
  "time_alive": 1038,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 76,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 3,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 51,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "d6f4ba5765c845baac306e52b474b9a6",
  "placement": 32,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 14,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 43,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 61,
  "time_alive": 1083,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 59,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 65,
  "time_alive": 1067,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 25,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "e0bf1cd94c35492d933d032d11e669ad",
  "placement": 20,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "e0bf1cd94c35492d933d032d11e669ad",
  "placement": 76,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "e0bf1cd94c35492d933d032d11e669ad",
  "placement": 94,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "e0bf1cd94c35492d933d032d11e669ad",
  "placement": 26,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "e0bf1cd94c35492d933d032d11e669ad",
  "placement": 34,
  "time_alive": 1341,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "e0bf1cd94c35492d933d032d11e669ad",
  "placement": 28,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 42,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 44,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 19,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 34,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 45,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 50,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 30,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 90,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 18,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 35,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 40,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 69,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 49,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 8,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 21,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 72,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 64,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 24,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 51,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 84,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 17,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 52,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "90b5c3a60223423cabc5de692585bd80",
  "placement": 15,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 77,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 36,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 10,
  "time_alive": 1459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 36,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 45,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 17,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 96,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 56,
  "time_alive": 1161,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 81,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 79,
  "time_alive": 827,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 16,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "d380d22aca98456983f2813bc4d6b4c5",
  "placement": 13,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 61,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 50,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 22,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 11,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 31,
  "time_alive": 1353,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 77,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 64,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 80,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 16,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 6,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 74,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 27,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 4,
  "time_alive": 1494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 75,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 51,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 37,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 81,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 45,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 41,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 25,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 60,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 71,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "cea8fe9978e84101a343c24c9d9a4db9",
  "placement": 36,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "2521536d70924ae98240e2e20c140ccc",
  "placement": 84,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "2521536d70924ae98240e2e20c140ccc",
  "placement": 64,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "2521536d70924ae98240e2e20c140ccc",
  "placement": 18,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "2521536d70924ae98240e2e20c140ccc",
  "placement": 63,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "2521536d70924ae98240e2e20c140ccc",
  "placement": 83,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "2521536d70924ae98240e2e20c140ccc",
  "placement": 39,
  "time_alive": 1314,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0d52718c4e164df9bb8f230663d538ec",
  "placement": 48,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0d52718c4e164df9bb8f230663d538ec",
  "placement": 73,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0d52718c4e164df9bb8f230663d538ec",
  "placement": 73,
  "time_alive": 896,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0d52718c4e164df9bb8f230663d538ec",
  "placement": 4,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0d52718c4e164df9bb8f230663d538ec",
  "placement": 68,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0d52718c4e164df9bb8f230663d538ec",
  "placement": 58,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 66,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 89,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 55,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 65,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 33,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "f819e7bce09a4acc8e65d9307f532a58",
  "placement": 18,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "7fa31ab3af41476aa636c4ca0ef14cc2",
  "placement": 72,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "7fa31ab3af41476aa636c4ca0ef14cc2",
  "placement": 82,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "7fa31ab3af41476aa636c4ca0ef14cc2",
  "placement": 63,
  "time_alive": 1061,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "7fa31ab3af41476aa636c4ca0ef14cc2",
  "placement": 23,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "7fa31ab3af41476aa636c4ca0ef14cc2",
  "placement": 29,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "7fa31ab3af41476aa636c4ca0ef14cc2",
  "placement": 60,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 11,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 97,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 98,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 99,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "fdd3ef4aa7414f1b906633c6fe724d93",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 73,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 8,
  "time_alive": 1466,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 93,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 89,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 95,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "96100f9b2871486aad7cc61d01236695",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "569634de011b426295acbd21f3c7632d",
  "placement": 81,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "569634de011b426295acbd21f3c7632d",
  "placement": 29,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "569634de011b426295acbd21f3c7632d",
  "placement": 30,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "569634de011b426295acbd21f3c7632d",
  "placement": 41,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "569634de011b426295acbd21f3c7632d",
  "placement": 87,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "569634de011b426295acbd21f3c7632d",
  "placement": 76,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 10,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 92,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 62,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 45,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 75,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "2552767a0a3b4d2d8429bd8e938daaee",
  "placement": 79,
  "time_alive": 375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 87,
  "time_alive": 797,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 47,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 89,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 13,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 48,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 40,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 69,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 58,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 27,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 88,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 70,
  "time_alive": 639,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 19,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 75,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 87,
  "time_alive": 690,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 37,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 58,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 61,
  "time_alive": 787,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "e251aaaebe5f442cb944b077c4c10a41",
  "placement": 38,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "e251aaaebe5f442cb944b077c4c10a41",
  "placement": 24,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "e251aaaebe5f442cb944b077c4c10a41",
  "placement": 36,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "e251aaaebe5f442cb944b077c4c10a41",
  "placement": 81,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "e251aaaebe5f442cb944b077c4c10a41",
  "placement": 60,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "e251aaaebe5f442cb944b077c4c10a41",
  "placement": 53,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 30,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 87,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 53,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 42,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 44,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 23,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 68,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 45,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 40,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 46,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 84,
  "time_alive": 618,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 93,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 23,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 84,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 46,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 85,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 55,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 66,
  "time_alive": 704,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 74,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 51,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 72,
  "time_alive": 900,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 57,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "8dc3d34ddf6940288d72dec86f7e7e72",
  "placement": 49,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 47,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 35,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 74,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 98,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 36,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "3219b209a5484862b40625df919df4db",
  "placement": 57,
  "time_alive": 919,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 78,
  "time_alive": 852,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 59,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 97,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 19,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 47,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 75,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 18,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 48,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 38,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 78,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 79,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 98,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "cd1772475c72424d9bd402149fffd9f6",
  "placement": 90,
  "time_alive": 734,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "cd1772475c72424d9bd402149fffd9f6",
  "placement": 91,
  "time_alive": 390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "cd1772475c72424d9bd402149fffd9f6",
  "placement": 32,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "cd1772475c72424d9bd402149fffd9f6",
  "placement": 88,
  "time_alive": 516,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "cd1772475c72424d9bd402149fffd9f6",
  "placement": 74,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "cd1772475c72424d9bd402149fffd9f6",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 62,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 67,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 48,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 30,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 76,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "a211adde9e914a0e9a4da08c5824b4ee",
  "placement": 68,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 74,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 65,
  "time_alive": 1077,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 39,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 50,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 66,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 72,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "17a4755644df4997a6d057f18a9b5d26",
  "placement": 6,
  "time_alive": 1446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "17a4755644df4997a6d057f18a9b5d26",
  "placement": 54,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "17a4755644df4997a6d057f18a9b5d26",
  "placement": 66,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "17a4755644df4997a6d057f18a9b5d26",
  "placement": 84,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "17a4755644df4997a6d057f18a9b5d26",
  "placement": 73,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "17a4755644df4997a6d057f18a9b5d26",
  "placement": 82,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 43,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 46,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 78,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 52,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 54,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 38,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "8cacb884fca74d0d9193267edd91da36",
  "placement": 70,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "8cacb884fca74d0d9193267edd91da36",
  "placement": 58,
  "time_alive": 1158,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "8cacb884fca74d0d9193267edd91da36",
  "placement": 64,
  "time_alive": 1023,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "8cacb884fca74d0d9193267edd91da36",
  "placement": 92,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "8cacb884fca74d0d9193267edd91da36",
  "placement": 41,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "8cacb884fca74d0d9193267edd91da36",
  "placement": 27,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 28,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 77,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 21,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 66,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 69,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0d982f45d2424896a1abf9d88fab7962",
  "placement": 90,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 34,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 33,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 80,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 39,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 94,
  "time_alive": 166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 78,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 75,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 78,
  "time_alive": 848,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 45,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 80,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 91,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "071d5877276749babefb5b673fc4fac5",
  "placement": 33,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 82,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 52,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 37,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 83,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 63,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "8744c25cf9ba420fb5b2725308823639",
  "placement": 47,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 79,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 26,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 72,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 67,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 59,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "e5b33eb5e1484ea280ca6b3c1d02b7f0",
  "placement": 62,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "3791757d17304ea5a163631b345ddf4c",
  "placement": 54,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "3791757d17304ea5a163631b345ddf4c",
  "placement": 88,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "3791757d17304ea5a163631b345ddf4c",
  "placement": 49,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "3791757d17304ea5a163631b345ddf4c",
  "placement": 62,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "3791757d17304ea5a163631b345ddf4c",
  "placement": 50,
  "time_alive": 1207,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 67,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 93,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 38,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 56,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 91,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "1977a9ca0e2446778f3af453494b858c",
  "placement": 80,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "1977a9ca0e2446778f3af453494b858c",
  "placement": 60,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "1977a9ca0e2446778f3af453494b858c",
  "placement": 35,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "1977a9ca0e2446778f3af453494b858c",
  "placement": 96,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "1977a9ca0e2446778f3af453494b858c",
  "placement": 50,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "1977a9ca0e2446778f3af453494b858c",
  "placement": 55,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "13d7ba253ff94861bd4381caef23ca24",
  "placement": 63,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "13d7ba253ff94861bd4381caef23ca24",
  "placement": 71,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "13d7ba253ff94861bd4381caef23ca24",
  "placement": 69,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "13d7ba253ff94861bd4381caef23ca24",
  "placement": 87,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "13d7ba253ff94861bd4381caef23ca24",
  "placement": 70,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "13d7ba253ff94861bd4381caef23ca24",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 55,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 96,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 96,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 91,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 19,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 59,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 71,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 92,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 55,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 89,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 73,
  "time_alive": 452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 65,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 37,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 79,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 58,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 89,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 100,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 95,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 99,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 53,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 28,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 83,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 57,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 86,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 47,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 86,
  "time_alive": 599,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6",
  "placement": 90,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 49,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 94,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 44,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 94,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 86,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 95,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 85,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 63,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 49,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 73,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 61,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 88,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "0280236c3e7342b59bac887da04ddc30",
  "placement": 94,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "0280236c3e7342b59bac887da04ddc30",
  "placement": 83,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "0280236c3e7342b59bac887da04ddc30",
  "placement": 28,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "0280236c3e7342b59bac887da04ddc30",
  "placement": 48,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "0280236c3e7342b59bac887da04ddc30",
  "placement": 85,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 60,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 55,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 85,
  "time_alive": 735,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 70,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 93,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "08126bda4ec047faad395b794ed45fc9",
  "placement": 92,
  "time_alive": 183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "997e0c68556a414d894110f8900a8423",
  "placement": 89,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "997e0c68556a414d894110f8900a8423",
  "placement": 79,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "997e0c68556a414d894110f8900a8423",
  "placement": 60,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "997e0c68556a414d894110f8900a8423",
  "placement": 95,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "997e0c68556a414d894110f8900a8423",
  "placement": 97,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "997e0c68556a414d894110f8900a8423",
  "placement": 94,
  "time_alive": 153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 86,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 90,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 57,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 82,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "024702d2-b820-47fc-baaa-50a3d22e8cdb",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 92,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f7e54-be4c-4360-9dd1-6aef89a8ed8f",
  "team_id": "acd9fbaaa22043ce8a28c56f557bb1d6",
  "placement": 87,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "064f45c3-565b-4d93-9bbe-75e4c2f3c49b",
  "team_id": "edcfa67c2df44db68b4e7b517bd0db3a",
  "placement": 92,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f2d4b1-0a8d-42d6-b342-478394e17a2f",
  "team_id": "edcfa67c2df44db68b4e7b517bd0db3a",
  "placement": 72,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b5fd5f-723f-45fc-a6e9-d124ea123cc3",
  "team_id": "edcfa67c2df44db68b4e7b517bd0db3a",
  "placement": 71,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03e06782-7812-40ca-98df-5124d2fc3d1f",
  "team_id": "edcfa67c2df44db68b4e7b517bd0db3a",
  "placement": 76,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 9,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 16,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 26,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 22,
  "time_alive": 1394,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 3,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 11,
  "time_alive": 1453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 31,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 1,
  "time_alive": 1522,
  "elims": 11,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 34,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 12,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 62,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 48,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 2,
  "time_alive": 1522,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 27,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 40,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 35,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "e474081cb012445cbfe8fec307d02853",
  "placement": 6,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 20,
  "time_alive": 1416,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 49,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 14,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 20,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 5,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 37,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 10,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 46,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 8,
  "time_alive": 1488,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 67,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 37,
  "time_alive": 1344,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 3,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 3,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 8,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 93,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 45,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 76,
  "time_alive": 559,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 2,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 48,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 38,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 9,
  "time_alive": 1479,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 15,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 14,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 4,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 19,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 19,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 48,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 14,
  "time_alive": 1425,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 81,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344",
  "placement": 32,
  "time_alive": 1352,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 7,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 7,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 11,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 39,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 47,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 40,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 50,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 75,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 69,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 72,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 2,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "a6a8084de8664d5abe681aacc14ff073",
  "placement": 1,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 2,
  "time_alive": 1499,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 72,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 32,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 4,
  "time_alive": 1491,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 75,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 33,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 37,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 3,
  "time_alive": 1509,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 46,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 21,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 46,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 13,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 25,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 43,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 15,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 6,
  "time_alive": 1484,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 74,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 28,
  "time_alive": 1365,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 22,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 42,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 55,
  "time_alive": 1165,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 7,
  "time_alive": 1472,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 27,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 10,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 28,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 37,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 51,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 3,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 12,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 29,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 6,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 31,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 45,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 66,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 10,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 16,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 59,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 62,
  "time_alive": 982,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 1,
  "time_alive": 1537,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 17,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 36,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 44,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 12,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 50,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 31,
  "time_alive": 1366,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 33,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 33,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 12,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 1,
  "time_alive": 1499,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 17,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 36,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 29,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 78,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 51,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 79,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 67,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 3,
  "time_alive": 1528,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 23,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 13,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 38,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 40,
  "time_alive": 1297,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 84,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 61,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 76,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 8,
  "time_alive": 1451,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 5,
  "time_alive": 1488,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 80,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 15,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 68,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 77,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 6,
  "time_alive": 1456,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "34316b82e61c4ab98e19bff8922c4592",
  "placement": 8,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 16,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 9,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 23,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 41,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 44,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 36,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 47,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 10,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 12,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 19,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 60,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 50,
  "time_alive": 1165,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 15,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 20,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 66,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 9,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 38,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "7b7ff18c9f604b2497468077bfd3f933",
  "placement": 62,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 92,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 95,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 20,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 2,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 54,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "91883749f2904103a0baf37646721f0a",
  "placement": 9,
  "time_alive": 1464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 13,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 71,
  "time_alive": 833,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 22,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 58,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 9,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 59,
  "time_alive": 877,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 53,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 5,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 52,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 5,
  "time_alive": 1484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 24,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 58,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 8,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 79,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 28,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 34,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 29,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "575baf1b144e42dd94f7b0c534781142",
  "placement": 84,
  "time_alive": 174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 4,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 25,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 37,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 89,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 65,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 21,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 42,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 12,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 50,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 25,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 80,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "cbc97c01924d47f0919edd1ff2321b54",
  "placement": 25,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 32,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 22,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 39,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 84,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 32,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 7,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 73,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 35,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 85,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 94,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 1,
  "time_alive": 1482,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "44e24373be324775b57aafe239dd0802",
  "placement": 39,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 61,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 21,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 60,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 61,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 25,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 17,
  "time_alive": 1430,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 21,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 65,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 6,
  "time_alive": 1502,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 81,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 23,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "970debfeb9c040a5a02b7b7bdec783f2",
  "placement": 26,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 56,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 18,
  "time_alive": 1427,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 73,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 31,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 55,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 35,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 76,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 28,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 5,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 18,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 42,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "8d597bc4185e421d8012337c651309c0",
  "placement": 61,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 24,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 58,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 17,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 8,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 67,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "14dfc42bbc994c7789d643d169bf2915",
  "placement": 34,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 45,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 6,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 30,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 35,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 88,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 64,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 62,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 27,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 71,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 62,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 4,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 46,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 63,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 13,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 58,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 10,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 48,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 45,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 96,
  "time_alive": 137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 30,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 10,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 46,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 50,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84",
  "placement": 24,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 65,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 11,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 2,
  "time_alive": 1537,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 43,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 58,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "14688f5689104535bda2d65b7218b038",
  "placement": 90,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 18,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 45,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 19,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 73,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 51,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 14,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 68,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 81,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 4,
  "time_alive": 1523,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 54,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 21,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 66,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 11,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 52,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 94,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 42,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 7,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "f7d7566162fc4e65af40d412746b9457",
  "placement": 54,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 23,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 38,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 75,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 84,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 22,
  "time_alive": 1393,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 26,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 34,
  "time_alive": 1360,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 74,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 59,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 71,
  "time_alive": 629,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "c307ea0e2ff949a2b547b79838c665a9",
  "placement": 20,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 35,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 78,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 42,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 11,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 26,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "406b05aac6ca4600890e2826ab62cfa1",
  "placement": 57,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 17,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 47,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 67,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 65,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 15,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 31,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 83,
  "time_alive": 415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 33,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 29,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 30,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 30,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9",
  "placement": 47,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 100,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 24,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 17,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 65,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 93,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 29,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 80,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 91,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 18,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 15,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "208fa4078817414bb5b92dbe24696140",
  "placement": 58,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "208fa4078817414bb5b92dbe24696140",
  "placement": 85,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "208fa4078817414bb5b92dbe24696140",
  "placement": 87,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "208fa4078817414bb5b92dbe24696140",
  "placement": 16,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "208fa4078817414bb5b92dbe24696140",
  "placement": 11,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "208fa4078817414bb5b92dbe24696140",
  "placement": 18,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 14,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 72,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 27,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 43,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 49,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 86,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 39,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 18,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 50,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 28,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "3373035aa01b453d8bcda016a5604062",
  "placement": 23,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 44,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 69,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 13,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 57,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540",
  "placement": 19,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 78,
  "time_alive": 578,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 60,
  "time_alive": 1009,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 75,
  "time_alive": 412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 93,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 70,
  "time_alive": 636,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 67,
  "time_alive": 486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 77,
  "time_alive": 598,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 64,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 21,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 52,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 39,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0043de7f-79e7-4b1f-8c0c-3382e8c013d4",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 41,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02b46e95-24b0-4150-bddb-ac28c533a3e6",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 39,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14d01cc8-df6a-4d3d-ab72-3eb450bffc62",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 48,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07501c57-667c-4478-92f1-1936a4a1abe8",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 24,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03d71f1a-ee4c-4051-a0a7-fa246cd8da19",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 53,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b6fb4f-2234-471d-8c62-dffd92d28cdf",
  "team_id": "d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 56,
  "time_alive": 1129,
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
    