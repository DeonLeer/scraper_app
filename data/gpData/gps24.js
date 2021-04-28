const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 30,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 81,
  "time_alive": 656,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 30,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 90,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 90,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 79,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 10,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 77,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 50,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 39,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 95,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 85,
  "time_alive": 452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 95,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 69,
  "time_alive": 927,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "7d449fd680914acfbae3b4befe1ea642",
  "placement": 72,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "e0bd9c35dff744c39a6e3193beb3c8bc",
  "placement": 86,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "e0bd9c35dff744c39a6e3193beb3c8bc",
  "placement": 44,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "e0bd9c35dff744c39a6e3193beb3c8bc",
  "placement": 55,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "e0bd9c35dff744c39a6e3193beb3c8bc",
  "placement": 39,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "e0bd9c35dff744c39a6e3193beb3c8bc",
  "placement": 73,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "e0bd9c35dff744c39a6e3193beb3c8bc",
  "placement": 87,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea",
  "placement": 60,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea",
  "placement": 67,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea",
  "placement": 60,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea",
  "placement": 78,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea",
  "placement": 44,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea",
  "placement": 39,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "5634c67260ae463782d55e13d5571c01",
  "placement": 78,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "5634c67260ae463782d55e13d5571c01",
  "placement": 66,
  "time_alive": 1040,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "5634c67260ae463782d55e13d5571c01",
  "placement": 94,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "5634c67260ae463782d55e13d5571c01",
  "placement": 34,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "5634c67260ae463782d55e13d5571c01",
  "placement": 88,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "5634c67260ae463782d55e13d5571c01",
  "placement": 58,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1",
  "placement": 74,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1",
  "placement": 41,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1",
  "placement": 82,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1",
  "placement": 76,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1",
  "placement": 55,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1",
  "placement": 28,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 83,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 84,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 20,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 56,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "61005bfec16043fa90f9b2420eadd98b",
  "placement": 79,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "65bab1452ad34a4481716b464ddd3800",
  "placement": 48,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "65bab1452ad34a4481716b464ddd3800",
  "placement": 78,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "65bab1452ad34a4481716b464ddd3800",
  "placement": 37,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "65bab1452ad34a4481716b464ddd3800",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "65bab1452ad34a4481716b464ddd3800",
  "placement": 82,
  "time_alive": 543,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "b9ecb2d3c26a4c46948bb8b3d33595b2",
  "placement": 42,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "b9ecb2d3c26a4c46948bb8b3d33595b2",
  "placement": 80,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "b9ecb2d3c26a4c46948bb8b3d33595b2",
  "placement": 43,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "b9ecb2d3c26a4c46948bb8b3d33595b2",
  "placement": 73,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "b9ecb2d3c26a4c46948bb8b3d33595b2",
  "placement": 70,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 84,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 97,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 22,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 84,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "353f3044fa944409834cf911744a1497",
  "placement": 96,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 55,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 53,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 91,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 41,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 76,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "8ff1da5b3cdb4d4e9610943ab612066d",
  "placement": 62,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "3fc78232d73d422799c91eb6acdbe8d8",
  "placement": 53,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "3fc78232d73d422799c91eb6acdbe8d8",
  "placement": 60,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "3fc78232d73d422799c91eb6acdbe8d8",
  "placement": 63,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "3fc78232d73d422799c91eb6acdbe8d8",
  "placement": 60,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "3fc78232d73d422799c91eb6acdbe8d8",
  "placement": 92,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "3fc78232d73d422799c91eb6acdbe8d8",
  "placement": 83,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "5768204867d642b0a5e72846cdff9d2a",
  "placement": 62,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "5768204867d642b0a5e72846cdff9d2a",
  "placement": 73,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "5768204867d642b0a5e72846cdff9d2a",
  "placement": 68,
  "time_alive": 887,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "5768204867d642b0a5e72846cdff9d2a",
  "placement": 84,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "3c56a0fbc0964f37b4b51a431886ff10",
  "placement": 81,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "3c56a0fbc0964f37b4b51a431886ff10",
  "placement": 70,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "3c56a0fbc0964f37b4b51a431886ff10",
  "placement": 66,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "3c56a0fbc0964f37b4b51a431886ff10",
  "placement": 82,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050e23a2-af16-46fb-b5e7-4fe84e08805b",
  "team_id": "3c56a0fbc0964f37b4b51a431886ff10",
  "placement": 65,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "3c56a0fbc0964f37b4b51a431886ff10",
  "placement": 76,
  "time_alive": 485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 40,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 54,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 79,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 99,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "f0f7a8538b7e4e37bd35f9d201262078",
  "placement": 93,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 51,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 64,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06bc9eac-25eb-489b-9d56-fe4ac85ba996",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 98,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 92,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b803dd-c593-451f-bd47-f6e084789de8",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 94,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 8,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 7,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 80,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 4,
  "time_alive": 1501,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 2,
  "time_alive": 1530,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 4,
  "time_alive": 1505,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 9,
  "time_alive": 1467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 1,
  "time_alive": 1509,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 3,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 12,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "e89063a11df7478c90772749c7005252",
  "placement": 16,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 41,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 2,
  "time_alive": 1504,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 19,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 8,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 30,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "9b0c50977b5441b4a155e10b0d710036",
  "placement": 20,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 23,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 5,
  "time_alive": 1493,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 31,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 14,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 8,
  "time_alive": 1437,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "17d1ea692a3a413693ec6355186f7c52",
  "placement": 19,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 30,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 3,
  "time_alive": 1498,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 6,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 6,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 60,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "f301f6da9f93441b8551420349d172d8",
  "placement": 14,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 85,
  "time_alive": 552,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 20,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 41,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 96,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 35,
  "time_alive": 1357,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "2b987b57eff147dd934b0e33e62035f8",
  "placement": 2,
  "time_alive": 1537,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 5,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 45,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 36,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 10,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 50,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a1877cd640de42c984155a1a29985499",
  "placement": 26,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 9,
  "time_alive": 1472,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 24,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 59,
  "time_alive": 1134,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 87,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 5,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 82,
  "time_alive": 300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 63,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 17,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 2,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 68,
  "time_alive": 1026,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 68,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a64ece3f836c49e6a8c212844b6272f7",
  "placement": 5,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 37,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 6,
  "time_alive": 1490,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 8,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 46,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 15,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 41,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 19,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 53,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 38,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 55,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 4,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "b3c5e13103eb4c849ebfe2ba0151489f",
  "placement": 10,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 39,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 22,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 10,
  "time_alive": 1459,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 19,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 14,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 76,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 1,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 90,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 17,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 18,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 31,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "e1dca98d9b074564a3bc51207fed9893",
  "placement": 55,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 57,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 21,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 14,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 15,
  "time_alive": 1419,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 88,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "dab647b7bcfd466888449fb52dc62381",
  "placement": 13,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 29,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 57,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 12,
  "time_alive": 1424,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 7,
  "time_alive": 1469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 23,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "517b9b4a76bf41ae9027acd4648d08f8",
  "placement": 22,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 90,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 84,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 5,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 88,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 20,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9",
  "placement": 1,
  "time_alive": 1537,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 33,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 83,
  "time_alive": 557,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 64,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 2,
  "time_alive": 1516,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 62,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "5a2fc7594aaa49458c71454b2c591712",
  "placement": 12,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 26,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 15,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 91,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 17,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 6,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "e066b6ebe4f44f29a0fd638cecf74d7f",
  "placement": 62,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 88,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 8,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 22,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 37,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 3,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 83,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 20,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 77,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 65,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 1,
  "time_alive": 1516,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 46,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 24,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 83,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 1,
  "time_alive": 1504,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 11,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 76,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 70,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 44,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 3,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 12,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 86,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 61,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 81,
  "time_alive": 490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "4d89d57c11a14daa9fe03d11dde07945",
  "placement": 36,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 71,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 4,
  "time_alive": 1495,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 89,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 90,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 61,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "cbf435c90da64e9eb090b573e7b7a88f",
  "placement": 3,
  "time_alive": 1520,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 14,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 50,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 18,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 36,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 26,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 88,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 73,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 27,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 23,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 24,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 9,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 29,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "2c59844362c94f0e86116f6afd663cc7",
  "placement": 54,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "2c59844362c94f0e86116f6afd663cc7",
  "placement": 39,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "2c59844362c94f0e86116f6afd663cc7",
  "placement": 88,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "2c59844362c94f0e86116f6afd663cc7",
  "placement": 1,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "2c59844362c94f0e86116f6afd663cc7",
  "placement": 15,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "7743eeec5709406dadfb626ada668ec2",
  "placement": 22,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "7743eeec5709406dadfb626ada668ec2",
  "placement": 92,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "7743eeec5709406dadfb626ada668ec2",
  "placement": 27,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "7743eeec5709406dadfb626ada668ec2",
  "placement": 11,
  "time_alive": 1442,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "7743eeec5709406dadfb626ada668ec2",
  "placement": 69,
  "time_alive": 755,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "7743eeec5709406dadfb626ada668ec2",
  "placement": 35,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "408ce23985544233954473b4f1f100b4",
  "placement": 16,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "408ce23985544233954473b4f1f100b4",
  "placement": 47,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "408ce23985544233954473b4f1f100b4",
  "placement": 33,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "408ce23985544233954473b4f1f100b4",
  "placement": 49,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "408ce23985544233954473b4f1f100b4",
  "placement": 11,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "408ce23985544233954473b4f1f100b4",
  "placement": 51,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "4479da23cb514bfb96ea8f41d6da1542",
  "placement": 50,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "4479da23cb514bfb96ea8f41d6da1542",
  "placement": 44,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "4479da23cb514bfb96ea8f41d6da1542",
  "placement": 72,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "4479da23cb514bfb96ea8f41d6da1542",
  "placement": 13,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "4479da23cb514bfb96ea8f41d6da1542",
  "placement": 29,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "4479da23cb514bfb96ea8f41d6da1542",
  "placement": 23,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 45,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 82,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 66,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 5,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 36,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 17,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 31,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 16,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 73,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 10,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 47,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 53,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 29,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 30,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 9,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 90,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "f69650bff70045028cab45a29bde619c",
  "placement": 8,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 7,
  "time_alive": 1483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 87,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 24,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 82,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 17,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "fd6e15a59d4443939e426df36251cb62",
  "placement": 6,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 40,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 32,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 29,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 50,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 41,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "15fddbc1282642c5ad55adf36a92844b",
  "placement": 21,
  "time_alive": 1377,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "bfef93495ebd4a2da692012e20d285fc",
  "placement": 48,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "bfef93495ebd4a2da692012e20d285fc",
  "placement": 10,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "bfef93495ebd4a2da692012e20d285fc",
  "placement": 7,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "bfef93495ebd4a2da692012e20d285fc",
  "placement": 39,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "bfef93495ebd4a2da692012e20d285fc",
  "placement": 74,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "bfef93495ebd4a2da692012e20d285fc",
  "placement": 78,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 12,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 94,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 13,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 77,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 55,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "63c93b4f187244b8b8d3f0f6ca8cc6dd",
  "placement": 7,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a68c877808594282b5f1191337bd1e00",
  "placement": 21,
  "time_alive": 1404,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a68c877808594282b5f1191337bd1e00",
  "placement": 18,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a68c877808594282b5f1191337bd1e00",
  "placement": 58,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a68c877808594282b5f1191337bd1e00",
  "placement": 95,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a68c877808594282b5f1191337bd1e00",
  "placement": 25,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a68c877808594282b5f1191337bd1e00",
  "placement": 74,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 4,
  "time_alive": 1493,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 13,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 96,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 89,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 67,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28",
  "placement": 60,
  "time_alive": 883,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 17,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 65,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 9,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 43,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 37,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "95f2894b1ab74af4b17003f7c8183789",
  "placement": 58,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 62,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 36,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 43,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 66,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 13,
  "time_alive": 1408,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "d8819e67905e434a9bf2794556e71a4b",
  "placement": 28,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 58,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 11,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 48,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 67,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 28,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "30cbf67e615449379898faac08a0e4a9",
  "placement": 27,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 10,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 71,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 45,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 34,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 16,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 73,
  "time_alive": 505,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 34,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 43,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 54,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 47,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 18,
  "time_alive": 1387,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "4eec40931c284bc1acb914f4a9c20983",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 13,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 85,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 51,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 71,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 7,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 77,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 96,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 37,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 3,
  "time_alive": 1496,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 78,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 56,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 40,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "2b60fe24d16041a39c327c60f7695a86",
  "placement": 15,
  "time_alive": 1432,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "2b60fe24d16041a39c327c60f7695a86",
  "placement": 34,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "2b60fe24d16041a39c327c60f7695a86",
  "placement": 61,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "2b60fe24d16041a39c327c60f7695a86",
  "placement": 56,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "2b60fe24d16041a39c327c60f7695a86",
  "placement": 51,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "2b60fe24d16041a39c327c60f7695a86",
  "placement": 33,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 43,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 38,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 32,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 20,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 52,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "359979f50bc84344b87ce2e0054ecf61",
  "placement": 34,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 18,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 14,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 63,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 64,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 54,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e",
  "placement": 25,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 6,
  "time_alive": 1487,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 49,
  "time_alive": 1233,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 78,
  "time_alive": 694,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 85,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 22,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "df70fadb103b414897f620a64b516383",
  "placement": 92,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 36,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 54,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 57,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 23,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 40,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "43971d9b20124d64ac361ac30b151ae7",
  "placement": 32,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36",
  "placement": 24,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36",
  "placement": 40,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36",
  "placement": 44,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36",
  "placement": 38,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36",
  "placement": 47,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36",
  "placement": 31,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 11,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 73,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 15,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 83,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 39,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "02945a61f23b452197bdc236f906befa",
  "placement": 52,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "12b19972388d4f44a7190e5b21615f95",
  "placement": 52,
  "time_alive": 1202,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "12b19972388d4f44a7190e5b21615f95",
  "placement": 26,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "12b19972388d4f44a7190e5b21615f95",
  "placement": 37,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "12b19972388d4f44a7190e5b21615f95",
  "placement": 51,
  "time_alive": 1220,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "12b19972388d4f44a7190e5b21615f95",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "12b19972388d4f44a7190e5b21615f95",
  "placement": 45,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 89,
  "time_alive": 484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 64,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 16,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 79,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 24,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff",
  "placement": 38,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 69,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 48,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 20,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 52,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 94,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "e711f07e8220423484e77b0d580ac702",
  "placement": 37,
  "time_alive": 1315,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 35,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 58,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 4,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 81,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "81eec67550b6425db58871ffd8e540e0",
  "placement": 42,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 2,
  "time_alive": 1508,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 86,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 75,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 41,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 89,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 56,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "a30d63245c544101b89d0483d02990f5",
  "placement": 76,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "a30d63245c544101b89d0483d02990f5",
  "placement": 62,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "a30d63245c544101b89d0483d02990f5",
  "placement": 76,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "a30d63245c544101b89d0483d02990f5",
  "placement": 12,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "a30d63245c544101b89d0483d02990f5",
  "placement": 21,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "a30d63245c544101b89d0483d02990f5",
  "placement": 46,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 46,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 61,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 81,
  "time_alive": 602,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 49,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "401da08468794b50b0d956eaea8116fd",
  "placement": 43,
  "time_alive": 1261,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "95b724ad0c83427cbd2c686ffa3d923a",
  "placement": 25,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "95b724ad0c83427cbd2c686ffa3d923a",
  "placement": 56,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "95b724ad0c83427cbd2c686ffa3d923a",
  "placement": 69,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "95b724ad0c83427cbd2c686ffa3d923a",
  "placement": 72,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "95b724ad0c83427cbd2c686ffa3d923a",
  "placement": 45,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "95b724ad0c83427cbd2c686ffa3d923a",
  "placement": 18,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 75,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 31,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 75,
  "time_alive": 817,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 75,
  "time_alive": 613,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "67b3814db2114185a61e3189f6e64ba7",
  "placement": 54,
  "time_alive": 1155,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "e377eef6cc634a5791658cecd8944398",
  "placement": 32,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "e377eef6cc634a5791658cecd8944398",
  "placement": 51,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "e377eef6cc634a5791658cecd8944398",
  "placement": 83,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "e377eef6cc634a5791658cecd8944398",
  "placement": 94,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "e377eef6cc634a5791658cecd8944398",
  "placement": 58,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "e377eef6cc634a5791658cecd8944398",
  "placement": 11,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 27,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 33,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 35,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 48,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 57,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f",
  "placement": 71,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "37bac976e19841fdb679af8e4c068cba",
  "placement": 66,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "37bac976e19841fdb679af8e4c068cba",
  "placement": 52,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "37bac976e19841fdb679af8e4c068cba",
  "placement": 67,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "37bac976e19841fdb679af8e4c068cba",
  "placement": 54,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "37bac976e19841fdb679af8e4c068cba",
  "placement": 33,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "37bac976e19841fdb679af8e4c068cba",
  "placement": 30,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 44,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 42,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 62,
  "time_alive": 1087,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 16,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 87,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "66a99836638f4d09b8990bd7457fc273",
  "placement": 87,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "83b1d498a91c4b309dbab535ac8712ca",
  "placement": 28,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "83b1d498a91c4b309dbab535ac8712ca",
  "placement": 35,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "83b1d498a91c4b309dbab535ac8712ca",
  "placement": 60,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "83b1d498a91c4b309dbab535ac8712ca",
  "placement": 84,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "83b1d498a91c4b309dbab535ac8712ca",
  "placement": 34,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "83b1d498a91c4b309dbab535ac8712ca",
  "placement": 61,
  "time_alive": 879,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 61,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 97,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 70,
  "time_alive": 929,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 22,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 27,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44",
  "placement": 59,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "f002c8f27a49490cb0dbe2d633d0becb",
  "placement": 42,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "f002c8f27a49490cb0dbe2d633d0becb",
  "placement": 76,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "f002c8f27a49490cb0dbe2d633d0becb",
  "placement": 40,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "f002c8f27a49490cb0dbe2d633d0becb",
  "placement": 27,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "f002c8f27a49490cb0dbe2d633d0becb",
  "placement": 44,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "f002c8f27a49490cb0dbe2d633d0becb",
  "placement": 49,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "e5159509009848d2bb11f35be25cfcca",
  "placement": 70,
  "time_alive": 884,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "e5159509009848d2bb11f35be25cfcca",
  "placement": 55,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "e5159509009848d2bb11f35be25cfcca",
  "placement": 26,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "e5159509009848d2bb11f35be25cfcca",
  "placement": 40,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "e5159509009848d2bb11f35be25cfcca",
  "placement": 78,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "e5159509009848d2bb11f35be25cfcca",
  "placement": 85,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "416a8e608dd5465fa67e21666984de97",
  "placement": 67,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "416a8e608dd5465fa67e21666984de97",
  "placement": 75,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "416a8e608dd5465fa67e21666984de97",
  "placement": 55,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "416a8e608dd5465fa67e21666984de97",
  "placement": 21,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "416a8e608dd5465fa67e21666984de97",
  "placement": 66,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "416a8e608dd5465fa67e21666984de97",
  "placement": 79,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 47,
  "time_alive": 1255,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 60,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 93,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 62,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 19,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "d12a80ad52584b4091fa25c0e4c2c620",
  "placement": 66,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 93,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 95,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 85,
  "time_alive": 567,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 59,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 43,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "5e4ed9c65cf44e11a9f551e28bab0fd1",
  "placement": 9,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 68,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 25,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 28,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 65,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "19161806b2a245d495712903483371b4",
  "placement": 42,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "c59478fa3ce944228fe9ad288f102d00",
  "placement": 77,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "c59478fa3ce944228fe9ad288f102d00",
  "placement": 19,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "c59478fa3ce944228fe9ad288f102d00",
  "placement": 68,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "c59478fa3ce944228fe9ad288f102d00",
  "placement": 31,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "c59478fa3ce944228fe9ad288f102d00",
  "placement": 64,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "c59478fa3ce944228fe9ad288f102d00",
  "placement": 48,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 60,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 30,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 53,
  "time_alive": 1177,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 73,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 91,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "f977c39693084756bcc3a14f99658ebc",
  "placement": 67,
  "time_alive": 581,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 84,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 70,
  "time_alive": 923,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 46,
  "time_alive": 1266,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 69,
  "time_alive": 1013,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 85,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150",
  "placement": 63,
  "time_alive": 772,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "1ea91a92e8d549af80134c7999225263",
  "placement": 49,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "1ea91a92e8d549af80134c7999225263",
  "placement": 72,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "1ea91a92e8d549af80134c7999225263",
  "placement": 84,
  "time_alive": 572,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "1ea91a92e8d549af80134c7999225263",
  "placement": 25,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "1ea91a92e8d549af80134c7999225263",
  "placement": 84,
  "time_alive": 428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "1ea91a92e8d549af80134c7999225263",
  "placement": 89,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 87,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 67,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 34,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 30,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 93,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "cf3899610d094bebaa52842e744783e7",
  "placement": 50,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 72,
  "time_alive": 872,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 69,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 74,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 28,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 83,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "55f4e8a2ac754d179574f982e190b94c",
  "placement": 94,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 51,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 78,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 21,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 42,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 86,
  "time_alive": 407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 86,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 65,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 23,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 50,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 53,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 77,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "39b1a4e26b364feb9a10aab75b3afc50",
  "placement": 80,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 92,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 93,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 39,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 57,
  "time_alive": 1153,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 63,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "3e53b59217904799b9f3646d2a869971",
  "placement": 57,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 82,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 79,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 52,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 45,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 38,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "b424ec35419649f788a45e45d70369d8",
  "placement": 75,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 55,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 63,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 79,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 26,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 92,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "0c68bb8b825c4fe891dde870affbdc9a",
  "placement": 70,
  "time_alive": 536,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "802707d5af7f40d2a979e8cd9574ccb2",
  "placement": 59,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "802707d5af7f40d2a979e8cd9574ccb2",
  "placement": 28,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "802707d5af7f40d2a979e8cd9574ccb2",
  "placement": 95,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "802707d5af7f40d2a979e8cd9574ccb2",
  "placement": 63,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "802707d5af7f40d2a979e8cd9574ccb2",
  "placement": 73,
  "time_alive": 640,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "802707d5af7f40d2a979e8cd9574ccb2",
  "placement": 90,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 91,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 81,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 49,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 29,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 48,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 65,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "28d8d6db84bf4b82a076659dfb24c43c",
  "placement": 81,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "28d8d6db84bf4b82a076659dfb24c43c",
  "placement": 66,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "28d8d6db84bf4b82a076659dfb24c43c",
  "placement": 71,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "28d8d6db84bf4b82a076659dfb24c43c",
  "placement": 33,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "28d8d6db84bf4b82a076659dfb24c43c",
  "placement": 53,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "28d8d6db84bf4b82a076659dfb24c43c",
  "placement": 69,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 86,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 41,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 25,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 86,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 79,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 91,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 56,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 46,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 87,
  "time_alive": 526,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 70,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 71,
  "time_alive": 694,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "be4a8f1181d142fea9438e33cb941817",
  "placement": 68,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 94,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 96,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 94,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 35,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 72,
  "time_alive": 673,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "0a098ee7c1a9443d85d4911d5cac4d51",
  "placement": 93,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 89,
  "time_alive": 341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 91,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 59,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "8f293590133a4f5a86dff190188a9107",
  "placement": 64,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 74,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 59,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 47,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 93,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 76,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "5936a8313eb64d92ab5980aa8e197e0a",
  "placement": 81,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "523f3574e57c4484bc82fd55ac173150",
  "placement": 80,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "523f3574e57c4484bc82fd55ac173150",
  "placement": 80,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "523f3574e57c4484bc82fd55ac173150",
  "placement": 82,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "523f3574e57c4484bc82fd55ac173150",
  "placement": 74,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "523f3574e57c4484bc82fd55ac173150",
  "placement": 65,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "523f3574e57c4484bc82fd55ac173150",
  "placement": 39,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 38,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 91,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 90,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 80,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "3fe23075b5af4fbbb9079d5951956b7a",
  "placement": 79,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "3fe23075b5af4fbbb9079d5951956b7a",
  "placement": 88,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "3fe23075b5af4fbbb9079d5951956b7a",
  "placement": 56,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "3fe23075b5af4fbbb9079d5951956b7a",
  "placement": 58,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "3fe23075b5af4fbbb9079d5951956b7a",
  "placement": 80,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "3fe23075b5af4fbbb9079d5951956b7a",
  "placement": 72,
  "time_alive": 514,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 64,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 68,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 77,
  "time_alive": 711,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 92,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef",
  "team_id": "b49c345c033d403b92eb78a715b37395",
  "placement": 78,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0806fdbb-5358-4862-bb74-1772ddf39dc7",
  "team_id": "b49c345c033d403b92eb78a715b37395",
  "placement": 74,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11492e89-b27f-47f7-8d1d-b07571b6875a",
  "team_id": "b49c345c033d403b92eb78a715b37395",
  "placement": 92,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14c75057-8e0e-4465-b212-4ad3a11e9bbd",
  "team_id": "b49c345c033d403b92eb78a715b37395",
  "placement": 60,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "027c343c-aa6c-4c6f-87d6-f6a134337b1e",
  "team_id": "b49c345c033d403b92eb78a715b37395",
  "placement": 82,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aebc065-a743-43e1-a55e-ef95e2b7921e",
  "team_id": "b49c345c033d403b92eb78a715b37395",
  "placement": 84,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 1,
  "time_alive": 1532,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 62,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 9,
  "time_alive": 1473,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 61,
  "time_alive": 1056,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 16,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "b76f848935ee4db88fd18847e5824ff2",
  "placement": 20,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 14,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 9,
  "time_alive": 1445,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 8,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 52,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "a8c1697410534dd89c7f3b1f287d98ab",
  "placement": 3,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 6,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 66,
  "time_alive": 1004,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 6,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 4,
  "time_alive": 1511,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 47,
  "time_alive": 1215,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 64,
  "time_alive": 680,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 47,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 32,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 28,
  "time_alive": 1387,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 57,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 28,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 1,
  "time_alive": 1494,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 16,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 7,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 53,
  "time_alive": 1154,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 70,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 25,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "52da52e134ea4128bbe0d219a13d7227",
  "placement": 5,
  "time_alive": 1486,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 20,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 3,
  "time_alive": 1477,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 74,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 49,
  "time_alive": 1226,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 9,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 70,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 46,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 22,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 1,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 2,
  "time_alive": 1528,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 87,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 85,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 31,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 6,
  "time_alive": 1503,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 55,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "e683820643814a5a8bbd788f83ec15e9",
  "placement": 4,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 40,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 24,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 7,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 71,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 24,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "47a5a52372fd42ac8d3d334801a1682b",
  "placement": 7,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 53,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 6,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 15,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 90,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 5,
  "time_alive": 1501,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 28,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 4,
  "time_alive": 1516,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 12,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 81,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 19,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 11,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "cf2b04aac51146f185296cd81302e806",
  "placement": 78,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 91,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 49,
  "time_alive": 1201,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 83,
  "time_alive": 556,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 13,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 4,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 15,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 32,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 2,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 12,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 62,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 40,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 9,
  "time_alive": 1448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 94,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 11,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 14,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 36,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 20,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 22,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 48,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 1,
  "time_alive": 1505,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 79,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 89,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 49,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 18,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 18,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 43,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 73,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 85,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 1,
  "time_alive": 1528,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 80,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 52,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 81,
  "time_alive": 746,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 31,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 2,
  "time_alive": 1530,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 29,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469",
  "placement": 17,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 10,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 86,
  "time_alive": 504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 26,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 12,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "766c07c7c62c4fe4b426a01246a5400e",
  "placement": 19,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 31,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 45,
  "time_alive": 1221,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 20,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 87,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 15,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4",
  "placement": 31,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 39,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 18,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 11,
  "time_alive": 1441,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 52,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "be78ce2606074a3198503194649f8d94",
  "placement": 11,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 15,
  "time_alive": 1447,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 13,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 23,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 76,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 37,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47",
  "placement": 61,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 83,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 23,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 3,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 68,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 8,
  "time_alive": 1489,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "78b86dacef144a209f1986aafc7f360c",
  "placement": 57,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 24,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 82,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 65,
  "time_alive": 1003,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 58,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 13,
  "time_alive": 1463,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 6,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 82,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 16,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 69,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 9,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 41,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 10,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 29,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 77,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 16,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 35,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 10,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "f6d565f6647242ac8735227af015e4d8",
  "placement": 24,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 28,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 4,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 21,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 66,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 71,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "59f5d0813bbe4314876512caa8d8f89b",
  "placement": 14,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 72,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 20,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 1,
  "time_alive": 1529,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 60,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 32,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 84,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "d3daceacddd34913ac526652ee5f8a90",
  "placement": 3,
  "time_alive": 1520,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "d3daceacddd34913ac526652ee5f8a90",
  "placement": 56,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "d3daceacddd34913ac526652ee5f8a90",
  "placement": 82,
  "time_alive": 572,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "d3daceacddd34913ac526652ee5f8a90",
  "placement": 12,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "d3daceacddd34913ac526652ee5f8a90",
  "placement": 80,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "d3daceacddd34913ac526652ee5f8a90",
  "placement": 26,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 34,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 36,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 5,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 16,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 95,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 34,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 99,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 5,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 97,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 96,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 30,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 12,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "b58a836baa0a4ed6ad9d20ff811e5f61",
  "placement": 11,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "b58a836baa0a4ed6ad9d20ff811e5f61",
  "placement": 94,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "b58a836baa0a4ed6ad9d20ff811e5f61",
  "placement": 87,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "b58a836baa0a4ed6ad9d20ff811e5f61",
  "placement": 14,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "b58a836baa0a4ed6ad9d20ff811e5f61",
  "placement": 14,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "b58a836baa0a4ed6ad9d20ff811e5f61",
  "placement": 47,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 13,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 87,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 34,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 15,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 56,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 23,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 9,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 10,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 56,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 72,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 22,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 86,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 66,
  "time_alive": 1033,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 73,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 38,
  "time_alive": 1318,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 38,
  "time_alive": 1356,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "e94b3144a90a4660b2411c31445d5765",
  "placement": 6,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 92,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 75,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 36,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 73,
  "time_alive": 819,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 3,
  "time_alive": 1516,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e",
  "placement": 41,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "462cb570051f44a79ad02a7e84617e7e",
  "placement": 17,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "462cb570051f44a79ad02a7e84617e7e",
  "placement": 70,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "462cb570051f44a79ad02a7e84617e7e",
  "placement": 64,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "462cb570051f44a79ad02a7e84617e7e",
  "placement": 25,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "462cb570051f44a79ad02a7e84617e7e",
  "placement": 26,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "462cb570051f44a79ad02a7e84617e7e",
  "placement": 49,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 2,
  "time_alive": 1532,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 71,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 96,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 30,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 48,
  "time_alive": 1209,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 54,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "0c7b4796e8d7457695a933194fc95823",
  "placement": 22,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "0c7b4796e8d7457695a933194fc95823",
  "placement": 37,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "0c7b4796e8d7457695a933194fc95823",
  "placement": 49,
  "time_alive": 1221,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "0c7b4796e8d7457695a933194fc95823",
  "placement": 10,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "0c7b4796e8d7457695a933194fc95823",
  "placement": 60,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "0c7b4796e8d7457695a933194fc95823",
  "placement": 52,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 59,
  "time_alive": 1122,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 95,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 13,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 5,
  "time_alive": 1510,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 72,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 40,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "14a68b493d0648c3a2e4c907747b6c77",
  "placement": 87,
  "time_alive": 784,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "14a68b493d0648c3a2e4c907747b6c77",
  "placement": 18,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "14a68b493d0648c3a2e4c907747b6c77",
  "placement": 60,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "14a68b493d0648c3a2e4c907747b6c77",
  "placement": 43,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "14a68b493d0648c3a2e4c907747b6c77",
  "placement": 17,
  "time_alive": 1455,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "14a68b493d0648c3a2e4c907747b6c77",
  "placement": 60,
  "time_alive": 905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 5,
  "time_alive": 1511,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 33,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 78,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 45,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 70,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 60,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 89,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 33,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 55,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 69,
  "time_alive": 928,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "18936749a0834613ae6de126ae0a7570",
  "placement": 2,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 23,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 38,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 48,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 31,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 27,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "fdb156537ba5465ab4b31ee04123f3eb",
  "placement": 67,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 26,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 58,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 43,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 20,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 23,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 72,
  "time_alive": 537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "57583e2ef6bd4bc7bf00d79acb08588f",
  "placement": 81,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "57583e2ef6bd4bc7bf00d79acb08588f",
  "placement": 26,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "57583e2ef6bd4bc7bf00d79acb08588f",
  "placement": 66,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "57583e2ef6bd4bc7bf00d79acb08588f",
  "placement": 28,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "57583e2ef6bd4bc7bf00d79acb08588f",
  "placement": 50,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "57583e2ef6bd4bc7bf00d79acb08588f",
  "placement": 8,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 43,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 28,
  "time_alive": 1356,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 50,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 92,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 54,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "07596e788a63431abd57a06955c723cf",
  "placement": 21,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "ac59df406dea46b184672193102f4c6e",
  "placement": 30,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "ac59df406dea46b184672193102f4c6e",
  "placement": 76,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "ac59df406dea46b184672193102f4c6e",
  "placement": 68,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "ac59df406dea46b184672193102f4c6e",
  "placement": 3,
  "time_alive": 1522,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "ac59df406dea46b184672193102f4c6e",
  "placement": 62,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "ac59df406dea46b184672193102f4c6e",
  "placement": 33,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 27,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 41,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 72,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 83,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 79,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "d26316ae99e14fce917372902d441098",
  "placement": 13,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "be11025011d445c68bc912b1aa828035",
  "placement": 37,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "be11025011d445c68bc912b1aa828035",
  "placement": 59,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "be11025011d445c68bc912b1aa828035",
  "placement": 35,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "be11025011d445c68bc912b1aa828035",
  "placement": 22,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "be11025011d445c68bc912b1aa828035",
  "placement": 61,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "be11025011d445c68bc912b1aa828035",
  "placement": 42,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5",
  "placement": 75,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5",
  "placement": 54,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5",
  "placement": 4,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5",
  "placement": 37,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5",
  "placement": 53,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5",
  "placement": 68,
  "time_alive": 611,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 19,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 90,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 59,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 7,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 77,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "790f305a14f5400b9df9412ce43870c7",
  "placement": 66,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "194e3dfa1cfb44e5a322375302cbb6f4",
  "placement": 73,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "194e3dfa1cfb44e5a322375302cbb6f4",
  "placement": 44,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "194e3dfa1cfb44e5a322375302cbb6f4",
  "placement": 10,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "194e3dfa1cfb44e5a322375302cbb6f4",
  "placement": 47,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "194e3dfa1cfb44e5a322375302cbb6f4",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "194e3dfa1cfb44e5a322375302cbb6f4",
  "placement": 44,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 55,
  "time_alive": 1152,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 19,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 70,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 84,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 31,
  "time_alive": 1380,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 46,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 61,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 30,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 85,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 8,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 66,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 45,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "53246cf2251e4329922d6f5efb721b9b",
  "placement": 44,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "53246cf2251e4329922d6f5efb721b9b",
  "placement": 8,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "53246cf2251e4329922d6f5efb721b9b",
  "placement": 90,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "53246cf2251e4329922d6f5efb721b9b",
  "placement": 32,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "53246cf2251e4329922d6f5efb721b9b",
  "placement": 35,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "53246cf2251e4329922d6f5efb721b9b",
  "placement": 69,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "026d2dccac2b47b9a39bb078bb610e87",
  "placement": 12,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "026d2dccac2b47b9a39bb078bb610e87",
  "placement": 74,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "026d2dccac2b47b9a39bb078bb610e87",
  "placement": 54,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0428896e-4291-42cc-873f-c9c747aa78c0",
  "team_id": "026d2dccac2b47b9a39bb078bb610e87",
  "placement": 54,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e",
  "team_id": "026d2dccac2b47b9a39bb078bb610e87",
  "placement": 34,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512",
  "team_id": "026d2dccac2b47b9a39bb078bb610e87",
  "placement": 48,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a936625-0dc0-4385-b89b-5225e304e0ef",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 69,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e732c0-4378-4d3a-81aa-aa05da6709f1",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 34,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e2044e-5887-444d-b47a-120a2f9e6365",
  "team_id": "7630cbbba8f4451e94043517803fa49e",
  "placement": 46,
  "time_alive": 1230,
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
    