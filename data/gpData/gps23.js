const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 58,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 22,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 1,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 47,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 14,
  "time_alive": 1415,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 88,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 48,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 81,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 74,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 17,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 8,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 24,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 64,
  "time_alive": 1016,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 21,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 2,
  "time_alive": 1524,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 37,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 24,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 20,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 39,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 52,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 16,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 6,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 67,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 8,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 17,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 65,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 59,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 39,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 74,
  "time_alive": 876,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 9,
  "time_alive": 1458,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 3,
  "time_alive": 1535,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 42,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 14,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 41,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 25,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 3,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 66,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 45,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 6,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 24,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 20,
  "time_alive": 1408,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 83,
  "time_alive": 674,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 81,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "4c5dc16e9dc94a8f8a065bd75fde4a80",
  "placement": 62,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 7,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 32,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 41,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 15,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 28,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9",
  "placement": 48,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 9,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 7,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 97,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 7,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 92,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "100b265143144d9c90eedf380f2b8a00",
  "placement": 43,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 95,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 68,
  "time_alive": 979,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 98,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 37,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 15,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee",
  "placement": 1,
  "time_alive": 1538,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 23,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 30,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 18,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 55,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 42,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5",
  "placement": 13,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "4eb2e28fd9ad4dc3ac2013eb2b816fc6",
  "placement": 27,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "4eb2e28fd9ad4dc3ac2013eb2b816fc6",
  "placement": 66,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "4eb2e28fd9ad4dc3ac2013eb2b816fc6",
  "placement": 31,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "4eb2e28fd9ad4dc3ac2013eb2b816fc6",
  "placement": 32,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "4eb2e28fd9ad4dc3ac2013eb2b816fc6",
  "placement": 2,
  "time_alive": 1545,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "4eb2e28fd9ad4dc3ac2013eb2b816fc6",
  "placement": 56,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 45,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 13,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 17,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 36,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 50,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "a64bb19d285349e8ba6cb6c1dbad008b",
  "placement": 24,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 34,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 74,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 57,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 48,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 5,
  "time_alive": 1510,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "f0541261c64c443882ab8109dd8b55de",
  "placement": 15,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 65,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 8,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 29,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 45,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 88,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 10,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "916b578b078f479899969be16b181113",
  "placement": 66,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "916b578b078f479899969be16b181113",
  "placement": 2,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "916b578b078f479899969be16b181113",
  "placement": 35,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "916b578b078f479899969be16b181113",
  "placement": 26,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "916b578b078f479899969be16b181113",
  "placement": 45,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "916b578b078f479899969be16b181113",
  "placement": 26,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "be9ea16a00bf4c10b70652baa41af395",
  "placement": 71,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "be9ea16a00bf4c10b70652baa41af395",
  "placement": 52,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "be9ea16a00bf4c10b70652baa41af395",
  "placement": 22,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "be9ea16a00bf4c10b70652baa41af395",
  "placement": 10,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "be9ea16a00bf4c10b70652baa41af395",
  "placement": 27,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "be9ea16a00bf4c10b70652baa41af395",
  "placement": 36,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 12,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 84,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 6,
  "time_alive": 1472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 46,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 90,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 9,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 84,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 16,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 75,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 63,
  "time_alive": 994,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 23,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 5,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "ddb9faee505347fe918a3de1bcede5f4",
  "placement": 38,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "ddb9faee505347fe918a3de1bcede5f4",
  "placement": 82,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "ddb9faee505347fe918a3de1bcede5f4",
  "placement": 70,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "ddb9faee505347fe918a3de1bcede5f4",
  "placement": 12,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "ddb9faee505347fe918a3de1bcede5f4",
  "placement": 24,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "ddb9faee505347fe918a3de1bcede5f4",
  "placement": 11,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 64,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 42,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 30,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 29,
  "time_alive": 1359,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 70,
  "time_alive": 890,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 76,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 36,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 40,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 50,
  "time_alive": 1239,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 56,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 26,
  "time_alive": 1384,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 41,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "3bde7dc87a8344df9c048081834ec367",
  "placement": 24,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "3bde7dc87a8344df9c048081834ec367",
  "placement": 64,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "3bde7dc87a8344df9c048081834ec367",
  "placement": 4,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "3bde7dc87a8344df9c048081834ec367",
  "placement": 78,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "3bde7dc87a8344df9c048081834ec367",
  "placement": 19,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 89,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 21,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 56,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 34,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 7,
  "time_alive": 1486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 16,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "f00c94db995642ffa467a727e01d4c4d",
  "placement": 20,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "f00c94db995642ffa467a727e01d4c4d",
  "placement": 63,
  "time_alive": 1071,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "f00c94db995642ffa467a727e01d4c4d",
  "placement": 90,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "f00c94db995642ffa467a727e01d4c4d",
  "placement": 13,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "f00c94db995642ffa467a727e01d4c4d",
  "placement": 29,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "f00c94db995642ffa467a727e01d4c4d",
  "placement": 25,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 29,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 26,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 71,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 59,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 40,
  "time_alive": 1326,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 55,
  "time_alive": 1202,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 46,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 86,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 10,
  "time_alive": 1438,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 68,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 30,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 33,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "ea1eead380a14859885c25cafb387413",
  "placement": 54,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "ea1eead380a14859885c25cafb387413",
  "placement": 18,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "ea1eead380a14859885c25cafb387413",
  "placement": 54,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "ea1eead380a14859885c25cafb387413",
  "placement": 65,
  "time_alive": 950,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "ea1eead380a14859885c25cafb387413",
  "placement": 13,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "ea1eead380a14859885c25cafb387413",
  "placement": 40,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 25,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 35,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 36,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 67,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 35,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 14,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 57,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 43,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 11,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 14,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 89,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "f204cecef43f48a9a234d5ba39613c3d",
  "placement": 90,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f",
  "placement": 60,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f",
  "placement": 22,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f",
  "placement": 13,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f",
  "placement": 70,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f",
  "placement": 67,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f",
  "placement": 27,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 4,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 92,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 49,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 92,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 9,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "5c3035f1ada0454c9d351cddbae6c75e",
  "placement": 85,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 39,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 20,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 40,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 17,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 61,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6fbe6a71b2b74e6e99bdba9affaacaf6",
  "placement": 53,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 44,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 45,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 37,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 27,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 6,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 71,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 22,
  "time_alive": 1417,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 78,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 65,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 21,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 69,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6e7b5a6b2201403db3148f41883a8648",
  "placement": 58,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "1df12d0728aa4412980cd5028865f432",
  "placement": 50,
  "time_alive": 1245,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "1df12d0728aa4412980cd5028865f432",
  "placement": 27,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "1df12d0728aa4412980cd5028865f432",
  "placement": 78,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "1df12d0728aa4412980cd5028865f432",
  "placement": 89,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "1df12d0728aa4412980cd5028865f432",
  "placement": 36,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "1df12d0728aa4412980cd5028865f432",
  "placement": 20,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 49,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 58,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 85,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 75,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 19,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "3c9d073958704a22b249026be0ed17d5",
  "placement": 17,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "e110bedc25cd4e489c07860d820487ab",
  "placement": 72,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "e110bedc25cd4e489c07860d820487ab",
  "placement": 76,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "e110bedc25cd4e489c07860d820487ab",
  "placement": 64,
  "time_alive": 1086,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "e110bedc25cd4e489c07860d820487ab",
  "placement": 22,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "e110bedc25cd4e489c07860d820487ab",
  "placement": 4,
  "time_alive": 1522,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "e110bedc25cd4e489c07860d820487ab",
  "placement": 74,
  "time_alive": 452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 99,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 49,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 3,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 90,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 52,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "26fb616705734b39ab890d3256988b33",
  "placement": 51,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 15,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 59,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 80,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 49,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 32,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "ac729e1cb8d84040a527eae003d8a932",
  "placement": 98,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "ac729e1cb8d84040a527eae003d8a932",
  "placement": 94,
  "time_alive": 293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "ac729e1cb8d84040a527eae003d8a932",
  "placement": 52,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "ac729e1cb8d84040a527eae003d8a932",
  "placement": 5,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "ac729e1cb8d84040a527eae003d8a932",
  "placement": 38,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "ac729e1cb8d84040a527eae003d8a932",
  "placement": 30,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 31,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 48,
  "time_alive": 1231,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 34,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 57,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "a087272d68f54e00bfc403f246741012",
  "placement": 59,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 70,
  "time_alive": 964,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 10,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 39,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 60,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 83,
  "time_alive": 485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "120cd97fd807476a85cd0ef30da49275",
  "placement": 59,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 56,
  "time_alive": 1160,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 83,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 28,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 61,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 63,
  "time_alive": 1026,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "923a664f23b14acab8d3c131dadcbd39",
  "placement": 23,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "80aa767371c040dc95a2d16ea6d7b1e9",
  "placement": 43,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "80aa767371c040dc95a2d16ea6d7b1e9",
  "placement": 38,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "80aa767371c040dc95a2d16ea6d7b1e9",
  "placement": 77,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "80aa767371c040dc95a2d16ea6d7b1e9",
  "placement": 69,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "80aa767371c040dc95a2d16ea6d7b1e9",
  "placement": 21,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "80aa767371c040dc95a2d16ea6d7b1e9",
  "placement": 44,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 10,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 90,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 58,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 58,
  "time_alive": 1068,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 49,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 68,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 13,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 88,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 26,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 97,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 72,
  "time_alive": 740,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "2e145bc4ae5d41109c2d12e2609f89d7",
  "placement": 57,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "986d718c088d4dcc8220784432d359a5",
  "placement": 33,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "986d718c088d4dcc8220784432d359a5",
  "placement": 61,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "986d718c088d4dcc8220784432d359a5",
  "placement": 32,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "986d718c088d4dcc8220784432d359a5",
  "placement": 38,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "986d718c088d4dcc8220784432d359a5",
  "placement": 65,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "986d718c088d4dcc8220784432d359a5",
  "placement": 34,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 30,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 46,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 79,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 80,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 12,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "8ddc2fe29a594a3c85c1539ea085d328",
  "placement": 69,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 48,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 93,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 33,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 78,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 57,
  "time_alive": 1146,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 64,
  "time_alive": 856,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 3,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 97,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 82,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 62,
  "time_alive": 999,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 96,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 86,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 40,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 28,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 63,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 73,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 53,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "9b279a6794c94644864b591931b1e6a0",
  "placement": 31,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3",
  "placement": 26,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3",
  "placement": 50,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3",
  "placement": 16,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3",
  "placement": 87,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3",
  "placement": 56,
  "time_alive": 1165,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3",
  "placement": 91,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 88,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 67,
  "time_alive": 993,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 43,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 94,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 34,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "110cb732f23b4986a16f92049a0cab6c",
  "placement": 49,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 86,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 36,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 21,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 85,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 51,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "4302bb4c50bd447b9947d477dece34cd",
  "placement": 61,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "dead30b2efc344a3a4b864cc38964e36",
  "placement": 53,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "dead30b2efc344a3a4b864cc38964e36",
  "placement": 23,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "dead30b2efc344a3a4b864cc38964e36",
  "placement": 72,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "dead30b2efc344a3a4b864cc38964e36",
  "placement": 41,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "dead30b2efc344a3a4b864cc38964e36",
  "placement": 37,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 41,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 19,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 87,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 95,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 60,
  "time_alive": 1112,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "588a78495ffb40ca924f1ebdd09622d1",
  "placement": 95,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6b97529dfb974607b7206f5b27d66b7f",
  "placement": 81,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6b97529dfb974607b7206f5b27d66b7f",
  "placement": 71,
  "time_alive": 940,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6b97529dfb974607b7206f5b27d66b7f",
  "placement": 5,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6b97529dfb974607b7206f5b27d66b7f",
  "placement": 76,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6b97529dfb974607b7206f5b27d66b7f",
  "placement": 86,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6b97529dfb974607b7206f5b27d66b7f",
  "placement": 83,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "236a519ffb2c4a35a76656682176f3fb",
  "placement": 97,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "236a519ffb2c4a35a76656682176f3fb",
  "placement": 55,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "236a519ffb2c4a35a76656682176f3fb",
  "placement": 59,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "236a519ffb2c4a35a76656682176f3fb",
  "placement": 19,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "236a519ffb2c4a35a76656682176f3fb",
  "placement": 80,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "236a519ffb2c4a35a76656682176f3fb",
  "placement": 28,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "05ef3dd589964ecca2191b3306e9ad3f",
  "placement": 63,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "05ef3dd589964ecca2191b3306e9ad3f",
  "placement": 79,
  "time_alive": 859,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "05ef3dd589964ecca2191b3306e9ad3f",
  "placement": 88,
  "time_alive": 409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "05ef3dd589964ecca2191b3306e9ad3f",
  "placement": 53,
  "time_alive": 1103,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "05ef3dd589964ecca2191b3306e9ad3f",
  "placement": 25,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "05ef3dd589964ecca2191b3306e9ad3f",
  "placement": 87,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 51,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 34,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 47,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 71,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 47,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "ea770393e6474a96bb5b3130088ea9a6",
  "placement": 47,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6154b15cf0e24fb2aec34b7af8b56696",
  "placement": 73,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6154b15cf0e24fb2aec34b7af8b56696",
  "placement": 77,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6154b15cf0e24fb2aec34b7af8b56696",
  "placement": 66,
  "time_alive": 1038,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6154b15cf0e24fb2aec34b7af8b56696",
  "placement": 54,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6154b15cf0e24fb2aec34b7af8b56696",
  "placement": 44,
  "time_alive": 1307,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6154b15cf0e24fb2aec34b7af8b56696",
  "placement": 66,
  "time_alive": 634,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "dfce28e9078e41f4a757e215e1553a26",
  "placement": 78,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "dfce28e9078e41f4a757e215e1553a26",
  "placement": 29,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "dfce28e9078e41f4a757e215e1553a26",
  "placement": 62,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "dfce28e9078e41f4a757e215e1553a26",
  "placement": 74,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "dfce28e9078e41f4a757e215e1553a26",
  "placement": 71,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "dfce28e9078e41f4a757e215e1553a26",
  "placement": 77,
  "time_alive": 414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 28,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 72,
  "time_alive": 927,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 76,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 47,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 73,
  "time_alive": 705,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "641871feb3f44d87971e304ea5b8d013",
  "placement": 92,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 67,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 56,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 72,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 28,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 74,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "f23c26c32ef941e69fa69570f2e07424",
  "placement": 60,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 85,
  "time_alive": 652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 44,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 69,
  "time_alive": 966,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 81,
  "time_alive": 746,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 43,
  "time_alive": 1312,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "9540b8d9a8244133a2158786c8bff3f6",
  "placement": 94,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 76,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 69,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 45,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 42,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 85,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "467cc56ea0e048bba8188dc0bb907fd1",
  "placement": 46,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 61,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 53,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 89,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 30,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 94,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "16ee5eebf2514b9baf26e56370021766",
  "placement": 63,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 37,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 87,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 68,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 41,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 84,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6062013490b24991a861fec1a63efb49",
  "placement": 50,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 79,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 73,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 27,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 64,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 93,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "178af59bd05943d8a844f01436af6c95",
  "placement": 39,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 32,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 85,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 81,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 44,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 76,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "7595259de5c74114b72280bd7f56d29a",
  "placement": 89,
  "time_alive": 213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 62,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 33,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 42,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 35,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 77,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "750ccaa7a2f64f28b052fed8b360aa81",
  "placement": 80,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f",
  "placement": 47,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f",
  "placement": 60,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f",
  "placement": 44,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f",
  "placement": 31,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f",
  "placement": 82,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f",
  "placement": 70,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "8e07108bd40c4b9e9f0064f83335157d",
  "placement": 55,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "8e07108bd40c4b9e9f0064f83335157d",
  "placement": 62,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "8e07108bd40c4b9e9f0064f83335157d",
  "placement": 93,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "8e07108bd40c4b9e9f0064f83335157d",
  "placement": 40,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "8e07108bd40c4b9e9f0064f83335157d",
  "placement": 33,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "8e07108bd40c4b9e9f0064f83335157d",
  "placement": 78,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "54877d2abbbd482d8cbb448df7b21120",
  "placement": 83,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "54877d2abbbd482d8cbb448df7b21120",
  "placement": 96,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "54877d2abbbd482d8cbb448df7b21120",
  "placement": 60,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "54877d2abbbd482d8cbb448df7b21120",
  "placement": 18,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "54877d2abbbd482d8cbb448df7b21120",
  "placement": 62,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "54877d2abbbd482d8cbb448df7b21120",
  "placement": 88,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 77,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 54,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 48,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 33,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 75,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "6760c29c639a45d795f44a43972c7acd",
  "placement": 79,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 68,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 75,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 92,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 95,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "a42ecd27c0c94f2eb0553cdb5a083491",
  "placement": 38,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 94,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 95,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 51,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 51,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 68,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "358f41a38d2149b9be2887572abb52d8",
  "placement": 73,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 69,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 65,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 73,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 52,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 79,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 96,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 93,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 91,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 55,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 91,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 37,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "66010e38a2894b648fe66772aaf502b4",
  "placement": 54,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "85878dd4dfc14e35846546ca8ebf0e34",
  "placement": 52,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "85878dd4dfc14e35846546ca8ebf0e34",
  "placement": 81,
  "time_alive": 848,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "85878dd4dfc14e35846546ca8ebf0e34",
  "placement": 83,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "85878dd4dfc14e35846546ca8ebf0e34",
  "placement": 86,
  "time_alive": 583,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 75,
  "time_alive": 860,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 89,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "89543e835f194f7282d02252c53d3c20",
  "placement": 95,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "66414b5f9b6d4f1dbd7317abb386cada",
  "placement": 96,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "66414b5f9b6d4f1dbd7317abb386cada",
  "placement": 80,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "66414b5f9b6d4f1dbd7317abb386cada",
  "placement": 96,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "66414b5f9b6d4f1dbd7317abb386cada",
  "placement": 79,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "66414b5f9b6d4f1dbd7317abb386cada",
  "placement": 87,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "66414b5f9b6d4f1dbd7317abb386cada",
  "placement": 67,
  "time_alive": 601,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 92,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 98,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 61,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "99896e20af4c40e4a8b379fbed094cbd",
  "placement": 96,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "782bf80cda284ce1b8ccedc64687b01c",
  "placement": 91,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "782bf80cda284ce1b8ccedc64687b01c",
  "placement": 70,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "782bf80cda284ce1b8ccedc64687b01c",
  "placement": 94,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "782bf80cda284ce1b8ccedc64687b01c",
  "placement": 93,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "782bf80cda284ce1b8ccedc64687b01c",
  "placement": 91,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "782bf80cda284ce1b8ccedc64687b01c",
  "placement": 82,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "a6238546b07046a4ab7c525a532b3a4a",
  "placement": 84,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1518,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 72,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 4,
  "time_alive": 1482,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 37,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 43,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 9,
  "time_alive": 1490,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 63,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 3,
  "time_alive": 1495,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 12,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 20,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 20,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 12,
  "time_alive": 1484,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 13,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 5,
  "time_alive": 1483,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 71,
  "time_alive": 709,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 14,
  "time_alive": 1409,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 3,
  "time_alive": 1503,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 25,
  "time_alive": 1395,
  "elims": 11,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 97,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 85,
  "time_alive": 511,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 85,
  "time_alive": 265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 22,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 25,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 1,
  "time_alive": 1526,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 91,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 4,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 44,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 11,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 1,
  "time_alive": 1509,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 2,
  "time_alive": 1526,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 72,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 34,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "b80dff9d35104ce393c388c3be299964",
  "placement": 75,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 2,
  "time_alive": 1518,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 2,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 76,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 93,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 78,
  "time_alive": 595,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 3,
  "time_alive": 1503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 47,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 14,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 41,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 47,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "9eb55168ce5741e4a71d43930e27fe73",
  "placement": 7,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 30,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 52,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 11,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 89,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 17,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 9,
  "time_alive": 1439,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 41,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 4,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 29,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 21,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 38,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9",
  "placement": 8,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 23,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 17,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 61,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 37,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 14,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 17,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 8,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 32,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 75,
  "time_alive": 617,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 19,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 6,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 34,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 5,
  "time_alive": 1456,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 71,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 49,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 8,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 23,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 27,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 72,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 12,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 5,
  "time_alive": 1501,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 3,
  "time_alive": 1502,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 66,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "3849b5b067d04edb8bc6764614c4d870",
  "placement": 61,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 10,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 27,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 6,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 59,
  "time_alive": 1066,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 22,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 63,
  "time_alive": 952,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 44,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 46,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 23,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 23,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 18,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "603505b8d62c46fd96847de855dbf2e4",
  "placement": 6,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 93,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 10,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 67,
  "time_alive": 906,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 1,
  "time_alive": 1507,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 48,
  "time_alive": 1232,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "f9543eabd4bc42b0acf763889726be7b",
  "placement": 79,
  "time_alive": 448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 88,
  "time_alive": 804,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 21,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 33,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 18,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 32,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "83e5bb6e476e40f897934e066e938413",
  "placement": 5,
  "time_alive": 1469,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 91,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 39,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 47,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 22,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 54,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "cbdaa26286a94c4ab492ecab5de7954d",
  "placement": 1,
  "time_alive": 1515,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 58,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 13,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 81,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 77,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 8,
  "time_alive": 1477,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 18,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 15,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 7,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 14,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 70,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 39,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "f598da59d08d44aeb98d8359bba57190",
  "placement": 68,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 89,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 6,
  "time_alive": 1487,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 4,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 27,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 57,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "a0e61b36c65044f98bd7069d954d023c",
  "placement": 56,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 6,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 89,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 11,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 16,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 66,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 9,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 74,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 99,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 67,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 29,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d",
  "placement": 2,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 67,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 45,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 46,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 2,
  "time_alive": 1507,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 36,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "ffbf237a506a41cf88c4eaca34bae236",
  "placement": 43,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 38,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 65,
  "time_alive": 1064,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 50,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 12,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 45,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 11,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "304140906647428895f14f11fbd81bf5",
  "placement": 94,
  "time_alive": 551,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "304140906647428895f14f11fbd81bf5",
  "placement": 35,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "304140906647428895f14f11fbd81bf5",
  "placement": 15,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "304140906647428895f14f11fbd81bf5",
  "placement": 32,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "304140906647428895f14f11fbd81bf5",
  "placement": 21,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "304140906647428895f14f11fbd81bf5",
  "placement": 15,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 99,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 57,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 68,
  "time_alive": 872,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 46,
  "time_alive": 1252,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 2,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 47,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 37,
  "time_alive": 1310,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 98,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 38,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 64,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 7,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "0e69335177cf44c2bba8fad583e3e540",
  "placement": 14,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 3,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 85,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 96,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 87,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 9,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42",
  "placement": 23,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "4f958a0b82d54500b86db5482420db26",
  "placement": 28,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "4f958a0b82d54500b86db5482420db26",
  "placement": 29,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "4f958a0b82d54500b86db5482420db26",
  "placement": 71,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "4f958a0b82d54500b86db5482420db26",
  "placement": 14,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "4f958a0b82d54500b86db5482420db26",
  "placement": 26,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "4f958a0b82d54500b86db5482420db26",
  "placement": 48,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 79,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 19,
  "time_alive": 1431,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 56,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 26,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 13,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 60,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 13,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 58,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 54,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 31,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 35,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27",
  "placement": 13,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "3cd7719c512b48279f41fd7779bb5a0f",
  "placement": 27,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "3cd7719c512b48279f41fd7779bb5a0f",
  "placement": 94,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "3cd7719c512b48279f41fd7779bb5a0f",
  "placement": 7,
  "time_alive": 1495,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "3cd7719c512b48279f41fd7779bb5a0f",
  "placement": 86,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "3cd7719c512b48279f41fd7779bb5a0f",
  "placement": 40,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "3cd7719c512b48279f41fd7779bb5a0f",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "cd1027578fe74432b9df32e534263993",
  "placement": 46,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "cd1027578fe74432b9df32e534263993",
  "placement": 51,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "cd1027578fe74432b9df32e534263993",
  "placement": 3,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "cd1027578fe74432b9df32e534263993",
  "placement": 44,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "cd1027578fe74432b9df32e534263993",
  "placement": 86,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "cd1027578fe74432b9df32e534263993",
  "placement": 16,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 54,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 31,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 17,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 42,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 15,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 29,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 29,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 40,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 36,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 24,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 43,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "eeecc28550234f38b8c89d29ae756173",
  "placement": 31,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 24,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 81,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 42,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 80,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 11,
  "time_alive": 1453,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "04803795ae414a6da3efbe0b19ce1313",
  "placement": 59,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 16,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 23,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 95,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 98,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 75,
  "time_alive": 724,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5",
  "placement": 21,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 18,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 18,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 97,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 55,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 52,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 26,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "9417760048124849be98a20360a2d423",
  "placement": 82,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "9417760048124849be98a20360a2d423",
  "placement": 37,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "9417760048124849be98a20360a2d423",
  "placement": 72,
  "time_alive": 774,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "9417760048124849be98a20360a2d423",
  "placement": 9,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "9417760048124849be98a20360a2d423",
  "placement": 20,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "9417760048124849be98a20360a2d423",
  "placement": 57,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 76,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 16,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 52,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 20,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 72,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "0aaf7b755cd14e20ad162d52e53f283e",
  "placement": 38,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 25,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 88,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 83,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 40,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 12,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 40,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 70,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 5,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 88,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 6,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 83,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 91,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "5c48743d05bc4202933592f435c2d6dd",
  "placement": 52,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "5c48743d05bc4202933592f435c2d6dd",
  "placement": 36,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "5c48743d05bc4202933592f435c2d6dd",
  "placement": 58,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "5c48743d05bc4202933592f435c2d6dd",
  "placement": 15,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "5c48743d05bc4202933592f435c2d6dd",
  "placement": 37,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "5c48743d05bc4202933592f435c2d6dd",
  "placement": 33,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "4dae134b257e4968a63cecbadbc79cda",
  "placement": 77,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "4dae134b257e4968a63cecbadbc79cda",
  "placement": 75,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "4dae134b257e4968a63cecbadbc79cda",
  "placement": 24,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "4dae134b257e4968a63cecbadbc79cda",
  "placement": 52,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "4dae134b257e4968a63cecbadbc79cda",
  "placement": 46,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "4dae134b257e4968a63cecbadbc79cda",
  "placement": 4,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 73,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 26,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 92,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 61,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 27,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 10,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "4ece8ae39abd483691469e03d789d2a2",
  "placement": 36,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "4ece8ae39abd483691469e03d789d2a2",
  "placement": 86,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "4ece8ae39abd483691469e03d789d2a2",
  "placement": 74,
  "time_alive": 684,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "4ece8ae39abd483691469e03d789d2a2",
  "placement": 10,
  "time_alive": 1441,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "4ece8ae39abd483691469e03d789d2a2",
  "placement": 50,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "4ece8ae39abd483691469e03d789d2a2",
  "placement": 88,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 50,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 55,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 45,
  "time_alive": 1242,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 7,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 62,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 53,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 19,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 69,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 78,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 16,
  "time_alive": 1399,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 63,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "f4a834013204451bb2dc3708981d0e50",
  "placement": 65,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "fb68cd1239bf4d0fbd4eef9a14ba1ec2",
  "placement": 7,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "fb68cd1239bf4d0fbd4eef9a14ba1ec2",
  "placement": 47,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "fb68cd1239bf4d0fbd4eef9a14ba1ec2",
  "placement": 39,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "fb68cd1239bf4d0fbd4eef9a14ba1ec2",
  "placement": 75,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "fb68cd1239bf4d0fbd4eef9a14ba1ec2",
  "placement": 95,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "fb68cd1239bf4d0fbd4eef9a14ba1ec2",
  "placement": 54,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 71,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 48,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 34,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 29,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 74,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e",
  "placement": 20,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 66,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 24,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 28,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 47,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 59,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "9a41d01f2442468387feb000951157be",
  "placement": 67,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 96,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 9,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 16,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 65,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 97,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 52,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 68,
  "time_alive": 977,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 8,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 62,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 57,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 51,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "6be77ed069844132a412323137bc290b",
  "placement": 41,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 34,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 99,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 69,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 36,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 24,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "0fd375eddadc4436a542b2bf83aba445",
  "placement": 92,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "07b51253cbe048fd95fe89e268b50485",
  "placement": 12,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "07b51253cbe048fd95fe89e268b50485",
  "placement": 87,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "07b51253cbe048fd95fe89e268b50485",
  "placement": 90,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "07b51253cbe048fd95fe89e268b50485",
  "placement": 88,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "07b51253cbe048fd95fe89e268b50485",
  "placement": 80,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "07b51253cbe048fd95fe89e268b50485",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "86dce499042442e78a2b131cba105d16",
  "placement": 65,
  "time_alive": 1067,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "86dce499042442e78a2b131cba105d16",
  "placement": 96,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "86dce499042442e78a2b131cba105d16",
  "placement": 13,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "86dce499042442e78a2b131cba105d16",
  "placement": 43,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "86dce499042442e78a2b131cba105d16",
  "placement": 42,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "86dce499042442e78a2b131cba105d16",
  "placement": 55,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 85,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 11,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 65,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 28,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 41,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "aba500b1048845e087d60a093a525fd5",
  "placement": 73,
  "time_alive": 627,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "67a20dab018d422f978f6bc785542264",
  "placement": 32,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "67a20dab018d422f978f6bc785542264",
  "placement": 61,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "67a20dab018d422f978f6bc785542264",
  "placement": 19,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "67a20dab018d422f978f6bc785542264",
  "placement": 54,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "67a20dab018d422f978f6bc785542264",
  "placement": 94,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "67a20dab018d422f978f6bc785542264",
  "placement": 84,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 63,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 59,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 59,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 33,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 67,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "e340a88262d04d1d90be90973280de2d",
  "placement": 19,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 64,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 83,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 51,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 35,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 10,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "69657aabaaea4149846f82d8a4bd38c9",
  "placement": 82,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 100,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 38,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 44,
  "time_alive": 1251,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 17,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 58,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 69,
  "time_alive": 780,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "cbb3b2115eb2444796888e9533944680",
  "placement": 56,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "cbb3b2115eb2444796888e9533944680",
  "placement": 92,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "cbb3b2115eb2444796888e9533944680",
  "placement": 93,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "cbb3b2115eb2444796888e9533944680",
  "placement": 30,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "cbb3b2115eb2444796888e9533944680",
  "placement": 19,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "cbb3b2115eb2444796888e9533944680",
  "placement": 35,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 75,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 63,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 77,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 38,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 53,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "7b80c262f2994dc2af3815858d2d3bc3",
  "placement": 22,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "0944474f40374f46b05d3bbfe16682e0",
  "placement": 17,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "0944474f40374f46b05d3bbfe16682e0",
  "placement": 56,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "0944474f40374f46b05d3bbfe16682e0",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "0944474f40374f46b05d3bbfe16682e0",
  "placement": 90,
  "time_alive": 360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "0944474f40374f46b05d3bbfe16682e0",
  "placement": 71,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "0944474f40374f46b05d3bbfe16682e0",
  "placement": 86,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618",
  "placement": 92,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618",
  "placement": 82,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618",
  "placement": 80,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618",
  "placement": 50,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618",
  "placement": 25,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618",
  "placement": 25,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "afddd2289f584e20bb681927bab4f07c",
  "placement": 95,
  "time_alive": 263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "afddd2289f584e20bb681927bab4f07c",
  "placement": 15,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "afddd2289f584e20bb681927bab4f07c",
  "placement": 89,
  "time_alive": 332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "afddd2289f584e20bb681927bab4f07c",
  "placement": 51,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "a694642fe54e4c6fb37c1b7531ba5aaa",
  "placement": 87,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "a694642fe54e4c6fb37c1b7531ba5aaa",
  "placement": 90,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "a694642fe54e4c6fb37c1b7531ba5aaa",
  "placement": 32,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "a694642fe54e4c6fb37c1b7531ba5aaa",
  "placement": 25,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "a694642fe54e4c6fb37c1b7531ba5aaa",
  "placement": 31,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "a694642fe54e4c6fb37c1b7531ba5aaa",
  "placement": 42,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 59,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 42,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 64,
  "time_alive": 1016,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 69,
  "time_alive": 873,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 49,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 81,
  "time_alive": 394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 69,
  "time_alive": 960,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 30,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 87,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 79,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 33,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "c51fa3ee94a0407eb3e015851bc18804",
  "placement": 78,
  "time_alive": 450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 80,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 33,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 53,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 71,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 28,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 74,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "a34f66b737764abaa6f5d2a3e142b8bb",
  "placement": 61,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "a34f66b737764abaa6f5d2a3e142b8bb",
  "placement": 49,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "a34f66b737764abaa6f5d2a3e142b8bb",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "a34f66b737764abaa6f5d2a3e142b8bb",
  "placement": 58,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "a34f66b737764abaa6f5d2a3e142b8bb",
  "placement": 64,
  "time_alive": 1033,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "a34f66b737764abaa6f5d2a3e142b8bb",
  "placement": 45,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 21,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 77,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 48,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 74,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 68,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "b5025b2648274c8c851ff098a758bc50",
  "placement": 49,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "35b2139d66eb48708888025ff537140b",
  "placement": 45,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "35b2139d66eb48708888025ff537140b",
  "placement": 100,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "35b2139d66eb48708888025ff537140b",
  "placement": 70,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "35b2139d66eb48708888025ff537140b",
  "placement": 45,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "35b2139d66eb48708888025ff537140b",
  "placement": 81,
  "time_alive": 556,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "35b2139d66eb48708888025ff537140b",
  "placement": 46,
  "time_alive": 1238,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 33,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 34,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 84,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 62,
  "time_alive": 1035,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 61,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "b8320a4fb7b8469fb81c0df31527636d",
  "placement": 89,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb",
  "placement": 49,
  "time_alive": 1208,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb",
  "placement": 68,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb",
  "placement": 86,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb",
  "placement": 96,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb",
  "placement": 60,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb",
  "placement": 30,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 31,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 62,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 27,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 83,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 89,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 51,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "7dfdf4daeff24d77b5505d834d2e7ab4",
  "placement": 57,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "7dfdf4daeff24d77b5505d834d2e7ab4",
  "placement": 50,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "7dfdf4daeff24d77b5505d834d2e7ab4",
  "placement": 40,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "7dfdf4daeff24d77b5505d834d2e7ab4",
  "placement": 85,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "7dfdf4daeff24d77b5505d834d2e7ab4",
  "placement": 93,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "7dfdf4daeff24d77b5505d834d2e7ab4",
  "placement": 36,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 43,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 22,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 57,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 48,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 56,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "1f847fa03e5a4393ac55ea01db7b8d89",
  "placement": 80,
  "time_alive": 401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "e20705595354455a81ec522ce19d90f8",
  "placement": 35,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "e20705595354455a81ec522ce19d90f8",
  "placement": 91,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "e20705595354455a81ec522ce19d90f8",
  "placement": 21,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "e20705595354455a81ec522ce19d90f8",
  "placement": 49,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "e20705595354455a81ec522ce19d90f8",
  "placement": 87,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "e20705595354455a81ec522ce19d90f8",
  "placement": 64,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 26,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 93,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 18,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 66,
  "time_alive": 925,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 91,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "a2386fc83bd6448ea421d8eaa652756d",
  "placement": 77,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 97,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 28,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 73,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 94,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 90,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "393e8e75566c406090f0d391969c98f7",
  "placement": 70,
  "time_alive": 752,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 98,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 76,
  "time_alive": 880,
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
    