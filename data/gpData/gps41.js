const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 87,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 79,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 62,
  "time_alive": 846,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "5d9e60f66bdf4f1db8acb95ea9d637f5",
  "placement": 82,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 95,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 98,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 78,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 46,
  "time_alive": 1213,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 52,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "df13c1a64151456c8dec92058736b8b0",
  "placement": 78,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 63,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 53,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 97,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 94,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 73,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 60,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 31,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 95,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 93,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 45,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 58,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "6e31343b2e46499c84aebc077f92fede",
  "placement": 87,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 57,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 59,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 86,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 50,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 97,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 85,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 100,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 76,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 99,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 84,
  "time_alive": 620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 53,
  "time_alive": 1075,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "683c8817f0d047e3ba1c177a79ffcd6f",
  "placement": 96,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 61,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 100,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 98,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 73,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 63,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 84,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 73,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 83,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 76,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 54,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 81,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 93,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 97,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 80,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 68,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 64,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 83,
  "time_alive": 431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b",
  "placement": 79,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21743ff5-f637-4ac1-9fff-5bc9cb1ba833",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 88,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 82,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 85,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08412f9d-ed33-4044-9984-811261aea059",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 33,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 94,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1bd3bffc-4bc5-44b9-89a6-1050e3268be5",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 94,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 18,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 13,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 3,
  "time_alive": 1510,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1538,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 1,
  "time_alive": 1528,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 3,
  "time_alive": 1519,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 16,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 3,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1519,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 3,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 37,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 12,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 25,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 11,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 5,
  "time_alive": 1495,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 14,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 13,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 1,
  "time_alive": 1540,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 5,
  "time_alive": 1471,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 32,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 17,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 18,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 9,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 9,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 7,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 5,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 19,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 28,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 5,
  "time_alive": 1479,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "8e60e750c4fd4eaca11ebb49686a590a",
  "placement": 5,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 17,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 10,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 11,
  "time_alive": 1462,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 8,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 42,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 8,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 36,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 2,
  "time_alive": 1508,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 42,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 6,
  "time_alive": 1485,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 28,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 23,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 57,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 25,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 6,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 5,
  "time_alive": 1493,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 11,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 13,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 10,
  "time_alive": 1435,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 85,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 16,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 13,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 8,
  "time_alive": 1440,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 67,
  "time_alive": 549,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 13,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 19,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 4,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 25,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 72,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 7,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 3,
  "time_alive": 1484,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 62,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 44,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 11,
  "time_alive": 1463,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 10,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 43,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 46,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 18,
  "time_alive": 1402,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 48,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 21,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 6,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 24,
  "time_alive": 1395,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 11,
  "time_alive": 1435,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 60,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 13,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 23,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 50,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 2,
  "time_alive": 1540,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 44,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 14,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 29,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 2,
  "time_alive": 1528,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 74,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 15,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 40,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 58,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 16,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 4,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 17,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 20,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 1,
  "time_alive": 1508,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 27,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 35,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 87,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 39,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 7,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 31,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 15,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 7,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 34,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 4,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 12,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 46,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 20,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 64,
  "time_alive": 746,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 25,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 48,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 22,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 2,
  "time_alive": 1519,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 34,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 19,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 41,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 12,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 42,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 10,
  "time_alive": 1464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 22,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 57,
  "time_alive": 1025,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 21,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 1,
  "time_alive": 1493,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 56,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 60,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 80,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 59,
  "time_alive": 904,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 16,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 83,
  "time_alive": 363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 97,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 97,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 1,
  "time_alive": 1538,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 79,
  "time_alive": 328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 4,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 22,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 23,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 45,
  "time_alive": 1283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 81,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 26,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 35,
  "time_alive": 1330,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 41,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 20,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 90,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 96,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 15,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 20,
  "time_alive": 1405,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 33,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 35,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 20,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 95,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 35,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 6,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 21,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 6,
  "time_alive": 1484,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 21,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 69,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 55,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 26,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 30,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 49,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 7,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 4,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 76,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 47,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 2,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 73,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 34,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 29,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 23,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 59,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 27,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 64,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 70,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 9,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 32,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 29,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 65,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 15,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 23,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 44,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 16,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 52,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 69,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 4,
  "time_alive": 1493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 9,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 68,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 69,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 48,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 53,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 29,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 28,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 10,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 40,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 39,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 6,
  "time_alive": 1462,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 52,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 54,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 19,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 87,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 40,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 29,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 95,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 33,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 30,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 19,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 26,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 17,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 69,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 74,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 62,
  "time_alive": 773,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 14,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 8,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 75,
  "time_alive": 675,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 8,
  "time_alive": 1477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 42,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 41,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 33,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 31,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 39,
  "time_alive": 1338,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 25,
  "time_alive": 1387,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 66,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 29,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 49,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 45,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 9,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 98,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 56,
  "time_alive": 1083,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 36,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 15,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 23,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 8,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 37,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 94,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 88,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 44,
  "time_alive": 1253,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 62,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 37,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 41,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 12,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 27,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "69b685247ea04bb69eb638eb19f8ad49",
  "placement": 37,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 9,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 67,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 49,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 73,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 47,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 11,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 38,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 41,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 51,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 62,
  "time_alive": 924,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 18,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 32,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 40,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 34,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 73,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 30,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 14,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 73,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 84,
  "time_alive": 336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 27,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 15,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 31,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 68,
  "time_alive": 588,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 65,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 24,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 65,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 18,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 67,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 45,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 42,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 32,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 78,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 39,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 39,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 31,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 30,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 63,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 28,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 86,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 45,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 21,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 27,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 47,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 45,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 35,
  "time_alive": 1345,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 26,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 48,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 62,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 68,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 68,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 57,
  "time_alive": 1044,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 93,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 3,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 50,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 71,
  "time_alive": 880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 21,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 22,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 83,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 61,
  "time_alive": 814,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 28,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "560538af4d20401b9695784100eebaa5",
  "placement": 14,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "560538af4d20401b9695784100eebaa5",
  "placement": 69,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "560538af4d20401b9695784100eebaa5",
  "placement": 53,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "560538af4d20401b9695784100eebaa5",
  "placement": 58,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "560538af4d20401b9695784100eebaa5",
  "placement": 38,
  "time_alive": 1323,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "560538af4d20401b9695784100eebaa5",
  "placement": 78,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 58,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 62,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 40,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 75,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 10,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 61,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 53,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 26,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 49,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 85,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 36,
  "time_alive": 1326,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 81,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 44,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 65,
  "time_alive": 894,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 53,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 17,
  "time_alive": 1397,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 68,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 49,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 84,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 76,
  "time_alive": 657,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 27,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 39,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 45,
  "time_alive": 1243,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 64,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 48,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 12,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 46,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 60,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 61,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 80,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 87,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 14,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 37,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 53,
  "time_alive": 1071,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 58,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 60,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 33,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 74,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 76,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 20,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 46,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 87,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 24,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 66,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 71,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 52,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 22,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "74a348cfcfb2448db6b4d0387252b107",
  "placement": 88,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "74a348cfcfb2448db6b4d0387252b107",
  "placement": 16,
  "time_alive": 1419,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "74a348cfcfb2448db6b4d0387252b107",
  "placement": 32,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "74a348cfcfb2448db6b4d0387252b107",
  "placement": 61,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "74a348cfcfb2448db6b4d0387252b107",
  "placement": 86,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "74a348cfcfb2448db6b4d0387252b107",
  "placement": 88,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 73,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 79,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 30,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 17,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 54,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 70,
  "time_alive": 517,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 42,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 99,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 67,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 24,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 51,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 18,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 51,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 71,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 40,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 75,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 24,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 53,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "02fa239acb1f4a0ebbf8e42616440899",
  "placement": 37,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "02fa239acb1f4a0ebbf8e42616440899",
  "placement": 26,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "02fa239acb1f4a0ebbf8e42616440899",
  "placement": 38,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "02fa239acb1f4a0ebbf8e42616440899",
  "placement": 91,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "02fa239acb1f4a0ebbf8e42616440899",
  "placement": 70,
  "time_alive": 575,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "02fa239acb1f4a0ebbf8e42616440899",
  "placement": 60,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 93,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 30,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 72,
  "time_alive": 807,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 48,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 56,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 56,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 55,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 59,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 24,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 72,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 34,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "4d3e24413bb1475fad5a1e41b8aa54da",
  "placement": 63,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "a0a972a1153640eb94682ec3b5011062",
  "placement": 70,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "a0a972a1153640eb94682ec3b5011062",
  "placement": 38,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "a0a972a1153640eb94682ec3b5011062",
  "placement": 71,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "a0a972a1153640eb94682ec3b5011062",
  "placement": 82,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "a0a972a1153640eb94682ec3b5011062",
  "placement": 12,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "a0a972a1153640eb94682ec3b5011062",
  "placement": 71,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 28,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 80,
  "time_alive": 517,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 36,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 55,
  "time_alive": 1086,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 81,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 66,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 98,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 50,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 47,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 22,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 54,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "2f953c18ba5c4b569431f1ea96bf390e",
  "placement": 19,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "2f953c18ba5c4b569431f1ea96bf390e",
  "placement": 66,
  "time_alive": 997,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "2f953c18ba5c4b569431f1ea96bf390e",
  "placement": 55,
  "time_alive": 1075,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "2f953c18ba5c4b569431f1ea96bf390e",
  "placement": 85,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 50,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 90,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 47,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 54,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 33,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 64,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "93298f7723af4c4cb463e8414096232e",
  "placement": 43,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "93298f7723af4c4cb463e8414096232e",
  "placement": 54,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "93298f7723af4c4cb463e8414096232e",
  "placement": 56,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "93298f7723af4c4cb463e8414096232e",
  "placement": 36,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "93298f7723af4c4cb463e8414096232e",
  "placement": 78,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "93298f7723af4c4cb463e8414096232e",
  "placement": 76,
  "time_alive": 323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 76,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 80,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 7,
  "time_alive": 1483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 83,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 69,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 86,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 55,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 84,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 77,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 65,
  "time_alive": 742,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 51,
  "time_alive": 1100,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 59,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 63,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 52,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 82,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "0d85d8f691d34d91926442bfe3e23bda",
  "placement": 31,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "7925b259a398489f8b73f0de7228825c",
  "placement": 35,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "7925b259a398489f8b73f0de7228825c",
  "placement": 50,
  "time_alive": 1251,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "7925b259a398489f8b73f0de7228825c",
  "placement": 88,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "7925b259a398489f8b73f0de7228825c",
  "placement": 41,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "7925b259a398489f8b73f0de7228825c",
  "placement": 77,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 81,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 99,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 43,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 25,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "bb1fa522e6234289ab6990b6983f7154",
  "placement": 57,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 94,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 43,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 75,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 90,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 43,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 84,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "3bdf165ee7ef4278bb1c184d5ca7ce72",
  "placement": 56,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "3bdf165ee7ef4278bb1c184d5ca7ce72",
  "placement": 46,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "3bdf165ee7ef4278bb1c184d5ca7ce72",
  "placement": 63,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "3bdf165ee7ef4278bb1c184d5ca7ce72",
  "placement": 65,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "3bdf165ee7ef4278bb1c184d5ca7ce72",
  "placement": 73,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 79,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 72,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 43,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 84,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 44,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 55,
  "time_alive": 936,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "ae0ce899d476468e87781e59dfb9af8f",
  "placement": 96,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "ae0ce899d476468e87781e59dfb9af8f",
  "placement": 59,
  "time_alive": 1033,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "ae0ce899d476468e87781e59dfb9af8f",
  "placement": 63,
  "time_alive": 896,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "ae0ce899d476468e87781e59dfb9af8f",
  "placement": 71,
  "time_alive": 568,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "ae0ce899d476468e87781e59dfb9af8f",
  "placement": 85,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 77,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 94,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 82,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 51,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 66,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 38,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 90,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 36,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 96,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 89,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 75,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "c94b86f615df41eeaeb3221610deeda3",
  "placement": 78,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "c94b86f615df41eeaeb3221610deeda3",
  "placement": 31,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "c94b86f615df41eeaeb3221610deeda3",
  "placement": 68,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "c94b86f615df41eeaeb3221610deeda3",
  "placement": 64,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "c94b86f615df41eeaeb3221610deeda3",
  "placement": 63,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "c94b86f615df41eeaeb3221610deeda3",
  "placement": 81,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 82,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 47,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 87,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 52,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 46,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 72,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "2837c8c062ca4157a49387d063ec47f0",
  "placement": 34,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "2837c8c062ca4157a49387d063ec47f0",
  "placement": 92,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "2837c8c062ca4157a49387d063ec47f0",
  "placement": 95,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "0eb84c686ac5484f92cd0af2fa3f28dd",
  "placement": 92,
  "time_alive": 219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "0eb84c686ac5484f92cd0af2fa3f28dd",
  "placement": 91,
  "time_alive": 249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "0eb84c686ac5484f92cd0af2fa3f28dd",
  "placement": 91,
  "time_alive": 267,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "0eb84c686ac5484f92cd0af2fa3f28dd",
  "placement": 88,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "0eb84c686ac5484f92cd0af2fa3f28dd",
  "placement": 74,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "0eb84c686ac5484f92cd0af2fa3f28dd",
  "placement": 80,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 76,
  "time_alive": 763,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 83,
  "time_alive": 384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 83,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 60,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 67,
  "time_alive": 637,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 66,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "c5db53cd0d464be2aa6256814d789b81",
  "placement": 74,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "c5db53cd0d464be2aa6256814d789b81",
  "placement": 70,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "c5db53cd0d464be2aa6256814d789b81",
  "placement": 61,
  "time_alive": 925,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "c5db53cd0d464be2aa6256814d789b81",
  "placement": 57,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "c5db53cd0d464be2aa6256814d789b81",
  "placement": 80,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "c5db53cd0d464be2aa6256814d789b81",
  "placement": 79,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 91,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 57,
  "time_alive": 1162,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 94,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "645f6ea499ae4550a46b111ae8d64115",
  "placement": 79,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 85,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 93,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 85,
  "time_alive": 459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 59,
  "time_alive": 1010,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 77,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 67,
  "time_alive": 906,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 74,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 79,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 78,
  "time_alive": 559,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 84,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 86,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 75,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 58,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 78,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 96,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 89,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 89,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 50,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 91,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7",
  "placement": 54,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7",
  "placement": 77,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7",
  "placement": 81,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7",
  "placement": 86,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "1566f1bad2bb48c6ba4ed0dea2fa4ba7",
  "placement": 49,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "2ddc673887734aa391e0e6b3478e896b",
  "placement": 52,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "2ddc673887734aa391e0e6b3478e896b",
  "placement": 88,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "2ddc673887734aa391e0e6b3478e896b",
  "placement": 64,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "2ddc673887734aa391e0e6b3478e896b",
  "placement": 89,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "2ddc673887734aa391e0e6b3478e896b",
  "placement": 58,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "2ddc673887734aa391e0e6b3478e896b",
  "placement": 83,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 95,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 86,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 92,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 70,
  "time_alive": 745,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 92,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 89,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 61,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 93,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 87,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1730f245-b049-4df9-9b73-8a3621d3c05a",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 90,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1912b026-92f7-443b-893e-b5bdb33fbb7e",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 82,
  "time_alive": 215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11a165e3-7a2a-4333-a5cb-8b22a1f0d138",
  "team_id": "d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 72,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0014a06c-0546-4981-9c00-1da33e053b32",
  "team_id": "d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 82,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "013082d7-c870-4125-83a0-92e0c0ee2645",
  "team_id": "d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 77,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da5ed60-38bf-47c9-a10d-3a67113e2035",
  "team_id": "d9a5fc366b634d8885e4a17b911c96ce",
  "placement": 92,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 13,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 11,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 10,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 2,
  "time_alive": 1547,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 28,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 27,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 45,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 19,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 1,
  "time_alive": 1549,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 17,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 49,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 20,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 2,
  "time_alive": 1538,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 54,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 2,
  "time_alive": 1549,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 72,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 34,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 2,
  "time_alive": 1518,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 19,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 38,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 13,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 25,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 9,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 5,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 27,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 35,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 17,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 44,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 5,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "0ad70f78e34f4930b7785228e4731f46",
  "placement": 1,
  "time_alive": 1518,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 24,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 2,
  "time_alive": 1547,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 24,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 68,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 7,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 19,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 35,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 1,
  "time_alive": 1547,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 30,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 1,
  "time_alive": 1549,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 61,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 10,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 14,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 94,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 3,
  "time_alive": 1539,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 21,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 17,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 36,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 16,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 34,
  "time_alive": 1343,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 5,
  "time_alive": 1506,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 27,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 22,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 9,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 55,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 16,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 14,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 41,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 9,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 40,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 18,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 7,
  "time_alive": 1487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 1,
  "time_alive": 1547,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 56,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 40,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 50,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 40,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 8,
  "time_alive": 1479,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 66,
  "time_alive": 1047,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 3,
  "time_alive": 1525,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 4,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 41,
  "time_alive": 1302,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 53,
  "time_alive": 1155,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 41,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 10,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 12,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 18,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 18,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 28,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 21,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 35,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 2,
  "time_alive": 1549,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 28,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 25,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 6,
  "time_alive": 1514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 42,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 12,
  "time_alive": 1446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 14,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7",
  "placement": 6,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 3,
  "time_alive": 1522,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 13,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 40,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 13,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 37,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 38,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 5,
  "time_alive": 1507,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 17,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 50,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 53,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 69,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 8,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 46,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 5,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 20,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 45,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 15,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 32,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 12,
  "time_alive": 1457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 77,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 22,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 7,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 39,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 15,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 57,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 4,
  "time_alive": 1536,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 4,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 41,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 29,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "fb591bc241b14a829e126d17b4db8130",
  "placement": 52,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 94,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 10,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 37,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 8,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 58,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 13,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 79,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 45,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 11,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 26,
  "time_alive": 1388,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 6,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 47,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 22,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 3,
  "time_alive": 1543,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 35,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 59,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 48,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 14,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 21,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 88,
  "time_alive": 360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 12,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 36,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 25,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 23,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 14,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 51,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 3,
  "time_alive": 1532,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 55,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 16,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8",
  "placement": 45,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 37,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 26,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 36,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 47,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 11,
  "time_alive": 1448,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 78,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 69,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 21,
  "time_alive": 1421,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 47,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 9,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 26,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 29,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 1,
  "time_alive": 1538,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 46,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 92,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 30,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 39,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 11,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 83,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 6,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 87,
  "time_alive": 325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 40,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 53,
  "time_alive": 855,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 7,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 30,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 27,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 28,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 42,
  "time_alive": 1113,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 66,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 7,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 15,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 83,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 95,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 35,
  "time_alive": 1219,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 29,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 79,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 61,
  "time_alive": 940,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 22,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 85,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 3,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 4,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 59,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 19,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 84,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 24,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 89,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 20,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 14,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 61,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 31,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 11,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 84,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 63,
  "time_alive": 893,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 18,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 17,
  "time_alive": 1424,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 46,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 28,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 85,
  "time_alive": 529,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 19,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 73,
  "time_alive": 629,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "998136143df74a9883d006e032f548b3",
  "placement": 25,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 90,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 57,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 33,
  "time_alive": 1351,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 24,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 76,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 16,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 8,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 52,
  "time_alive": 1162,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 49,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 43,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 50,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 63,
  "time_alive": 627,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 62,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 76,
  "time_alive": 855,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 77,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 4,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 64,
  "time_alive": 960,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 41,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "1188c8b1bccb4943ba5d4fe2421e99ba",
  "placement": 17,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "1188c8b1bccb4943ba5d4fe2421e99ba",
  "placement": 37,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "1188c8b1bccb4943ba5d4fe2421e99ba",
  "placement": 64,
  "time_alive": 885,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "1188c8b1bccb4943ba5d4fe2421e99ba",
  "placement": 31,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "1188c8b1bccb4943ba5d4fe2421e99ba",
  "placement": 54,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "1188c8b1bccb4943ba5d4fe2421e99ba",
  "placement": 69,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 82,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 30,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 42,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 46,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 10,
  "time_alive": 1465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200",
  "placement": 98,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200",
  "placement": 29,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200",
  "placement": 63,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200",
  "placement": 4,
  "time_alive": 1519,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "0aca073ae30b474380d3f7e6ef23f200",
  "placement": 67,
  "time_alive": 550,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 54,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 34,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 5,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 51,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 18,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "a1461707ba7446298ac73988af8a11ae",
  "placement": 89,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 15,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 27,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 72,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 92,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 13,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 56,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 48,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 25,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 76,
  "time_alive": 577,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 11,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 36,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 44,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 71,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 61,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 44,
  "time_alive": 1291,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 89,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 20,
  "time_alive": 1416,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 74,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "cec898778fdb481999acc982fd359cf3",
  "placement": 44,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "cec898778fdb481999acc982fd359cf3",
  "placement": 60,
  "time_alive": 1129,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "cec898778fdb481999acc982fd359cf3",
  "placement": 39,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "cec898778fdb481999acc982fd359cf3",
  "placement": 75,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "cec898778fdb481999acc982fd359cf3",
  "placement": 22,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "cec898778fdb481999acc982fd359cf3",
  "placement": 33,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 32,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 87,
  "time_alive": 451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 26,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 15,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 61,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 73,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 97,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 12,
  "time_alive": 1454,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 90,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 70,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 10,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "20dd9d47b87f4cadbea2f4a879e2090c",
  "placement": 87,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 70,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 74,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 48,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 38,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 21,
  "time_alive": 1393,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 75,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 28,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 6,
  "time_alive": 1505,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 66,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 68,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 20,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 69,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 58,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 40,
  "time_alive": 1323,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 89,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 77,
  "time_alive": 366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 95,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 47,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 25,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 50,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 70,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 36,
  "time_alive": 1213,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 80,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 32,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 82,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 38,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 62,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 12,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 51,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 15,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 67,
  "time_alive": 786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 46,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 32,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 58,
  "time_alive": 680,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 33,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 24,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 32,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 49,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 57,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 57,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 42,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 64,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 38,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 21,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 68,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 60,
  "time_alive": 643,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 68,
  "time_alive": 937,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 98,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 60,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 8,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 34,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 55,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 65,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 88,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 29,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 44,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "b360e8f7ac834ecca42093709d2ac07b",
  "placement": 54,
  "time_alive": 849,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 74,
  "time_alive": 832,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 96,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 83,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 34,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 24,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 92,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 86,
  "time_alive": 529,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 63,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 85,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 67,
  "time_alive": 986,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 52,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 7,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 58,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 70,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 66,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 33,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 43,
  "time_alive": 1073,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "d33ed82d1a8c48ca8a37c5370a647488",
  "placement": 39,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "d33ed82d1a8c48ca8a37c5370a647488",
  "placement": 36,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "d33ed82d1a8c48ca8a37c5370a647488",
  "placement": 52,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "d33ed82d1a8c48ca8a37c5370a647488",
  "placement": 56,
  "time_alive": 1174,
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
    