const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 15,
  "time_alive": 1290,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 5,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 12,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 19,
  "time_alive": 1221,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 14,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 11,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 9,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 21,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:c3fed2a8f12f4d39ada7a8aeb784285a:fa81291771cf4b90ae1b444d727df46e",
  "placement": 9,
  "time_alive": 1394,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:c3fed2a8f12f4d39ada7a8aeb784285a:fa81291771cf4b90ae1b444d727df46e",
  "placement": 31,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:c3fed2a8f12f4d39ada7a8aeb784285a:fa81291771cf4b90ae1b444d727df46e",
  "placement": 6,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:c3fed2a8f12f4d39ada7a8aeb784285a:fa81291771cf4b90ae1b444d727df46e",
  "placement": 18,
  "time_alive": 1157,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:c3fed2a8f12f4d39ada7a8aeb784285a:fa81291771cf4b90ae1b444d727df46e",
  "placement": 14,
  "time_alive": 1291,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:c3fed2a8f12f4d39ada7a8aeb784285a:fa81291771cf4b90ae1b444d727df46e",
  "placement": 19,
  "time_alive": 1201,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "08c4aed0404e4099b6a432f2f723ea83:1977a9ca0e2446778f3af453494b858c:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 24,
  "time_alive": 1017,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "08c4aed0404e4099b6a432f2f723ea83:1977a9ca0e2446778f3af453494b858c:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 27,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "08c4aed0404e4099b6a432f2f723ea83:1977a9ca0e2446778f3af453494b858c:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 18,
  "time_alive": 1213,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "08c4aed0404e4099b6a432f2f723ea83:1977a9ca0e2446778f3af453494b858c:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 15,
  "time_alive": 1330,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "08c4aed0404e4099b6a432f2f723ea83:1977a9ca0e2446778f3af453494b858c:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 12,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "08c4aed0404e4099b6a432f2f723ea83:1977a9ca0e2446778f3af453494b858c:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 4,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0184b792e642413bb7a976e9ccf7f062:55e75bc484ae48aca604b2d3d9e203fb:c62ff5f58a094519a52f2a80988613cb",
  "placement": 25,
  "time_alive": 957,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0184b792e642413bb7a976e9ccf7f062:55e75bc484ae48aca604b2d3d9e203fb:c62ff5f58a094519a52f2a80988613cb",
  "placement": 26,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0184b792e642413bb7a976e9ccf7f062:55e75bc484ae48aca604b2d3d9e203fb:c62ff5f58a094519a52f2a80988613cb",
  "placement": 29,
  "time_alive": 437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0184b792e642413bb7a976e9ccf7f062:55e75bc484ae48aca604b2d3d9e203fb:c62ff5f58a094519a52f2a80988613cb",
  "placement": 27,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0184b792e642413bb7a976e9ccf7f062:55e75bc484ae48aca604b2d3d9e203fb:c62ff5f58a094519a52f2a80988613cb",
  "placement": 2,
  "time_alive": 1454,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0184b792e642413bb7a976e9ccf7f062:55e75bc484ae48aca604b2d3d9e203fb:c62ff5f58a094519a52f2a80988613cb",
  "placement": 18,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 13,
  "time_alive": 1348,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 32,
  "time_alive": 443,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 9,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 23,
  "time_alive": 982,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 32,
  "time_alive": 254,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 32,
  "time_alive": 261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "e41916b94916409da7773e2e24468ccc:e8344c2a07b34305bc6cb8649a2d63a8:fe5fb3fd6c99402d98b9a2319f61ea07",
  "placement": 4,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "e41916b94916409da7773e2e24468ccc:e8344c2a07b34305bc6cb8649a2d63a8:fe5fb3fd6c99402d98b9a2319f61ea07",
  "placement": 11,
  "time_alive": 1340,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "e41916b94916409da7773e2e24468ccc:e8344c2a07b34305bc6cb8649a2d63a8:fe5fb3fd6c99402d98b9a2319f61ea07",
  "placement": 24,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "e41916b94916409da7773e2e24468ccc:e8344c2a07b34305bc6cb8649a2d63a8:fe5fb3fd6c99402d98b9a2319f61ea07",
  "placement": 25,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "e41916b94916409da7773e2e24468ccc:e8344c2a07b34305bc6cb8649a2d63a8:fe5fb3fd6c99402d98b9a2319f61ea07",
  "placement": 17,
  "time_alive": 1276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "e41916b94916409da7773e2e24468ccc:e8344c2a07b34305bc6cb8649a2d63a8:fe5fb3fd6c99402d98b9a2319f61ea07",
  "placement": 23,
  "time_alive": 1062,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 28,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 15,
  "time_alive": 1297,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 17,
  "time_alive": 1254,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 19,
  "time_alive": 1153,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 21,
  "time_alive": 1130,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 8,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 14,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 18,
  "time_alive": 1230,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 19,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 29,
  "time_alive": 786,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 27,
  "time_alive": 610,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 11,
  "time_alive": 1333,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 10,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 20,
  "time_alive": 1179,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 16,
  "time_alive": 1270,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 33,
  "time_alive": 61,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 23,
  "time_alive": 1064,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:33d5fc61389e4d0aa2c5634865492790:5bf2e3ba99fc432f9f932b03495433b0",
  "placement": 27,
  "time_alive": 486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "8b5fec933cd7444fb90295f36419bd33:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 22,
  "time_alive": 1125,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "8b5fec933cd7444fb90295f36419bd33:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 12,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "8b5fec933cd7444fb90295f36419bd33:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 15,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "8b5fec933cd7444fb90295f36419bd33:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 31,
  "time_alive": 250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "8b5fec933cd7444fb90295f36419bd33:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 29,
  "time_alive": 387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "8b5fec933cd7444fb90295f36419bd33:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 20,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "4b91612d102b441b99c2c9e7c311e81f:c6aa9266b21348629c6a52f0ca3527cd:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 16,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "4b91612d102b441b99c2c9e7c311e81f:c6aa9266b21348629c6a52f0ca3527cd:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 22,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "4b91612d102b441b99c2c9e7c311e81f:c6aa9266b21348629c6a52f0ca3527cd:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 22,
  "time_alive": 1008,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "4b91612d102b441b99c2c9e7c311e81f:c6aa9266b21348629c6a52f0ca3527cd:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 20,
  "time_alive": 1110,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "4b91612d102b441b99c2c9e7c311e81f:c6aa9266b21348629c6a52f0ca3527cd:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 26,
  "time_alive": 697,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "4b91612d102b441b99c2c9e7c311e81f:c6aa9266b21348629c6a52f0ca3527cd:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 16,
  "time_alive": 1319,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 29,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 17,
  "time_alive": 1263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 8,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 24,
  "time_alive": 981,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 16,
  "time_alive": 1280,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 26,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 18,
  "time_alive": 1269,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 28,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 21,
  "time_alive": 1091,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 12,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 19,
  "time_alive": 1197,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 30,
  "time_alive": 332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 17,
  "time_alive": 1293,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 3,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 28,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 26,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 22,
  "time_alive": 1079,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 29,
  "time_alive": 402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 30,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 14,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 20,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 22,
  "time_alive": 1080,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 7,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 24,
  "time_alive": 1062,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "293c0d8bb4bf467f86da9a18748b4b12:7f0c83bd3a534e008629497fde354d74:8cdb8caaa6b641d8869d989724b4a217",
  "placement": 21,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "293c0d8bb4bf467f86da9a18748b4b12:7f0c83bd3a534e008629497fde354d74:8cdb8caaa6b641d8869d989724b4a217",
  "placement": 29,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "293c0d8bb4bf467f86da9a18748b4b12:7f0c83bd3a534e008629497fde354d74:8cdb8caaa6b641d8869d989724b4a217",
  "placement": 30,
  "time_alive": 359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "293c0d8bb4bf467f86da9a18748b4b12:7f0c83bd3a534e008629497fde354d74:8cdb8caaa6b641d8869d989724b4a217",
  "placement": 30,
  "time_alive": 382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "293c0d8bb4bf467f86da9a18748b4b12:7f0c83bd3a534e008629497fde354d74:8cdb8caaa6b641d8869d989724b4a217",
  "placement": 33,
  "time_alive": 195,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "293c0d8bb4bf467f86da9a18748b4b12:7f0c83bd3a534e008629497fde354d74:8cdb8caaa6b641d8869d989724b4a217",
  "placement": 13,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "1bc6a75cfb6345d48d46ef8adddef249:8fdbf53a060f4b39814e55ac23352c9d:eb0eddde07594be989c7a196ce5cad06",
  "placement": 27,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "1bc6a75cfb6345d48d46ef8adddef249:8fdbf53a060f4b39814e55ac23352c9d:eb0eddde07594be989c7a196ce5cad06",
  "placement": 33,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "1bc6a75cfb6345d48d46ef8adddef249:8fdbf53a060f4b39814e55ac23352c9d:eb0eddde07594be989c7a196ce5cad06",
  "placement": 32,
  "time_alive": 174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "1bc6a75cfb6345d48d46ef8adddef249:8fdbf53a060f4b39814e55ac23352c9d:eb0eddde07594be989c7a196ce5cad06",
  "placement": 32,
  "time_alive": 145,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "1bc6a75cfb6345d48d46ef8adddef249:8fdbf53a060f4b39814e55ac23352c9d:eb0eddde07594be989c7a196ce5cad06",
  "placement": 25,
  "time_alive": 821,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "1bc6a75cfb6345d48d46ef8adddef249:8fdbf53a060f4b39814e55ac23352c9d:eb0eddde07594be989c7a196ce5cad06",
  "placement": 15,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:c6242764ab20411dae77829ee1ce39a4:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 26,
  "time_alive": 905,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:c6242764ab20411dae77829ee1ce39a4:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 13,
  "time_alive": 1317,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:c6242764ab20411dae77829ee1ce39a4:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 25,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:c6242764ab20411dae77829ee1ce39a4:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 21,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:c6242764ab20411dae77829ee1ce39a4:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 28,
  "time_alive": 553,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "7837f574990c4f1e991e5783f02d83d3:c6242764ab20411dae77829ee1ce39a4:fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 28,
  "time_alive": 421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 33,
  "time_alive": 127,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 30,
  "time_alive": 798,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 33,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 28,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 30,
  "time_alive": 331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 33,
  "time_alive": 224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 9,
  "time_alive": 1400,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1481,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1420,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1448,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1472,
  "elims": 20,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1410,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 5,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 3,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1425,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 3,
  "time_alive": 1439,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 5,
  "time_alive": 1354,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 15,
  "time_alive": 1302,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 14,
  "time_alive": 1318,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 1,
  "time_alive": 1425,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 9,
  "time_alive": 1355,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 4,
  "time_alive": 1461,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 8,
  "time_alive": 1342,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 1,
  "time_alive": 1472,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 6,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 23,
  "time_alive": 1044,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 25,
  "time_alive": 981,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 13,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 3,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 3,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 8,
  "time_alive": 1435,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 9,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 13,
  "time_alive": 1289,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 12,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 9,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 10,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 5,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 5,
  "time_alive": 1383,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 6,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 14,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 12,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 12,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 12,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 17,
  "time_alive": 1276,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 29,
  "time_alive": 401,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 3,
  "time_alive": 1467,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 7,
  "time_alive": 1342,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 2,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 23,
  "time_alive": 1021,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 10,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 5,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 7,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 15,
  "time_alive": 1280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "27492772ffce4586b68833131ca6deea:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 24,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "27492772ffce4586b68833131ca6deea:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 1,
  "time_alive": 1488,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "27492772ffce4586b68833131ca6deea:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 20,
  "time_alive": 1161,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "27492772ffce4586b68833131ca6deea:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 20,
  "time_alive": 1107,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "27492772ffce4586b68833131ca6deea:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 32,
  "time_alive": 207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "27492772ffce4586b68833131ca6deea:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 6,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 16,
  "time_alive": 1294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 7,
  "time_alive": 1436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 7,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 4,
  "time_alive": 1429,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 25,
  "time_alive": 372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 13,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 26,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 2,
  "time_alive": 1488,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 29,
  "time_alive": 620,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 21,
  "time_alive": 1102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 10,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 14,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:34316b82e61c4ab98e19bff8922c4592:5baf908041114bccaff845a6194144ce",
  "placement": 14,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:34316b82e61c4ab98e19bff8922c4592:5baf908041114bccaff845a6194144ce",
  "placement": 18,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:34316b82e61c4ab98e19bff8922c4592:5baf908041114bccaff845a6194144ce",
  "placement": 30,
  "time_alive": 582,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:34316b82e61c4ab98e19bff8922c4592:5baf908041114bccaff845a6194144ce",
  "placement": 33,
  "time_alive": 130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:34316b82e61c4ab98e19bff8922c4592:5baf908041114bccaff845a6194144ce",
  "placement": 8,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:34316b82e61c4ab98e19bff8922c4592:5baf908041114bccaff845a6194144ce",
  "placement": 2,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 11,
  "time_alive": 1373,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 19,
  "time_alive": 1168,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 33,
  "time_alive": 177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 7,
  "time_alive": 1379,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 5,
  "time_alive": 1450,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 17,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:6fa024b0e13d44be9b6d299d1e38ac0c:ec755cf0df0244e59dc4840688c900a1",
  "placement": 8,
  "time_alive": 1406,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:6fa024b0e13d44be9b6d299d1e38ac0c:ec755cf0df0244e59dc4840688c900a1",
  "placement": 29,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:6fa024b0e13d44be9b6d299d1e38ac0c:ec755cf0df0244e59dc4840688c900a1",
  "placement": 22,
  "time_alive": 1079,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:6fa024b0e13d44be9b6d299d1e38ac0c:ec755cf0df0244e59dc4840688c900a1",
  "placement": 22,
  "time_alive": 1097,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:6fa024b0e13d44be9b6d299d1e38ac0c:ec755cf0df0244e59dc4840688c900a1",
  "placement": 24,
  "time_alive": 434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:6fa024b0e13d44be9b6d299d1e38ac0c:ec755cf0df0244e59dc4840688c900a1",
  "placement": 4,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "76edd46c839945c8baecf7608b322668:8e9ea98a6f1a4af784c04e5ee4b1d4fb:e0d1d4acdce0430abd329eed358062cd",
  "placement": 22,
  "time_alive": 1128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "76edd46c839945c8baecf7608b322668:8e9ea98a6f1a4af784c04e5ee4b1d4fb:e0d1d4acdce0430abd329eed358062cd",
  "placement": 32,
  "time_alive": 329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "76edd46c839945c8baecf7608b322668:8e9ea98a6f1a4af784c04e5ee4b1d4fb:e0d1d4acdce0430abd329eed358062cd",
  "placement": 11,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "76edd46c839945c8baecf7608b322668:8e9ea98a6f1a4af784c04e5ee4b1d4fb:e0d1d4acdce0430abd329eed358062cd",
  "placement": 2,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "76edd46c839945c8baecf7608b322668:8e9ea98a6f1a4af784c04e5ee4b1d4fb:e0d1d4acdce0430abd329eed358062cd",
  "placement": 31,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "76edd46c839945c8baecf7608b322668:8e9ea98a6f1a4af784c04e5ee4b1d4fb:e0d1d4acdce0430abd329eed358062cd",
  "placement": 22,
  "time_alive": 975,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 4,
  "time_alive": 1449,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 24,
  "time_alive": 947,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 8,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 17,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 21,
  "time_alive": 644,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 26,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "21737c3345d64e388860f1a17a4701b0:3f5282ef105f4da5970667a6e07988f0:e365d9b305e5437fadae1ae1582c134d",
  "placement": 19,
  "time_alive": 1191,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "21737c3345d64e388860f1a17a4701b0:3f5282ef105f4da5970667a6e07988f0:e365d9b305e5437fadae1ae1582c134d",
  "placement": 9,
  "time_alive": 1416,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "21737c3345d64e388860f1a17a4701b0:3f5282ef105f4da5970667a6e07988f0:e365d9b305e5437fadae1ae1582c134d",
  "placement": 6,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "21737c3345d64e388860f1a17a4701b0:3f5282ef105f4da5970667a6e07988f0:e365d9b305e5437fadae1ae1582c134d",
  "placement": 10,
  "time_alive": 1338,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "21737c3345d64e388860f1a17a4701b0:3f5282ef105f4da5970667a6e07988f0:e365d9b305e5437fadae1ae1582c134d",
  "placement": 20,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "21737c3345d64e388860f1a17a4701b0:3f5282ef105f4da5970667a6e07988f0:e365d9b305e5437fadae1ae1582c134d",
  "placement": 27,
  "time_alive": 634,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "514e71c4ed4d4aed8f9619f458623558:7b7ff18c9f604b2497468077bfd3f933:9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 20,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "514e71c4ed4d4aed8f9619f458623558:7b7ff18c9f604b2497468077bfd3f933:9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 10,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "514e71c4ed4d4aed8f9619f458623558:7b7ff18c9f604b2497468077bfd3f933:9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 13,
  "time_alive": 1309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "514e71c4ed4d4aed8f9619f458623558:7b7ff18c9f604b2497468077bfd3f933:9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 28,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "514e71c4ed4d4aed8f9619f458623558:7b7ff18c9f604b2497468077bfd3f933:9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 17,
  "time_alive": 1228,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "514e71c4ed4d4aed8f9619f458623558:7b7ff18c9f604b2497468077bfd3f933:9d753f5abe9b43fa9915ff04a54ca3f0",
  "placement": 21,
  "time_alive": 1017,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 23,
  "time_alive": 1096,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 17,
  "time_alive": 1280,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 12,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 11,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 23,
  "time_alive": 491,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 16,
  "time_alive": 1208,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 18,
  "time_alive": 1212,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 25,
  "time_alive": 943,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 18,
  "time_alive": 1223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 30,
  "time_alive": 373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 19,
  "time_alive": 884,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 10,
  "time_alive": 1327,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 21,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 22,
  "time_alive": 1021,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 15,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 19,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 6,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 11,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 6,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 28,
  "time_alive": 852,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 19,
  "time_alive": 1197,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 23,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 9,
  "time_alive": 1407,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 20,
  "time_alive": 1053,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "10bd07e63eb142feb942c471220eb9ce:3d390a247f21438b9fa8331515f181f7:d2bfe8d7b81a4c73bcd98094f6dab16d",
  "placement": 29,
  "time_alive": 805,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "10bd07e63eb142feb942c471220eb9ce:3d390a247f21438b9fa8331515f181f7:d2bfe8d7b81a4c73bcd98094f6dab16d",
  "placement": 31,
  "time_alive": 793,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "10bd07e63eb142feb942c471220eb9ce:3d390a247f21438b9fa8331515f181f7:d2bfe8d7b81a4c73bcd98094f6dab16d",
  "placement": 4,
  "time_alive": 1385,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "10bd07e63eb142feb942c471220eb9ce:3d390a247f21438b9fa8331515f181f7:d2bfe8d7b81a4c73bcd98094f6dab16d",
  "placement": 27,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "10bd07e63eb142feb942c471220eb9ce:3d390a247f21438b9fa8331515f181f7:d2bfe8d7b81a4c73bcd98094f6dab16d",
  "placement": 16,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 17,
  "time_alive": 1234,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 11,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 28,
  "time_alive": 698,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 15,
  "time_alive": 1228,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 18,
  "time_alive": 1020,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 24,
  "time_alive": 936,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "28f2d4207f9142838351f610815012e1:6af91a8a0ff44ad786d233c759f9f51b:7d24989de6264de09b332b204e1319ec",
  "placement": 7,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "28f2d4207f9142838351f610815012e1:6af91a8a0ff44ad786d233c759f9f51b:7d24989de6264de09b332b204e1319ec",
  "placement": 20,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "28f2d4207f9142838351f610815012e1:6af91a8a0ff44ad786d233c759f9f51b:7d24989de6264de09b332b204e1319ec",
  "placement": 14,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "28f2d4207f9142838351f610815012e1:6af91a8a0ff44ad786d233c759f9f51b:7d24989de6264de09b332b204e1319ec",
  "placement": 24,
  "time_alive": 1085,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "28f2d4207f9142838351f610815012e1:6af91a8a0ff44ad786d233c759f9f51b:7d24989de6264de09b332b204e1319ec",
  "placement": 29,
  "time_alive": 303,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "28f2d4207f9142838351f610815012e1:6af91a8a0ff44ad786d233c759f9f51b:7d24989de6264de09b332b204e1319ec",
  "placement": 23,
  "time_alive": 956,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "0178530d48cd44fe92a550867203cc28:1ee17d101de04f9bbde91c240e2f4a0f:cdb3e0b901924d40989b5e1e3faa1bfd",
  "placement": 30,
  "time_alive": 744,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "0178530d48cd44fe92a550867203cc28:1ee17d101de04f9bbde91c240e2f4a0f:cdb3e0b901924d40989b5e1e3faa1bfd",
  "placement": 21,
  "time_alive": 1086,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "0178530d48cd44fe92a550867203cc28:1ee17d101de04f9bbde91c240e2f4a0f:cdb3e0b901924d40989b5e1e3faa1bfd",
  "placement": 16,
  "time_alive": 1296,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "0178530d48cd44fe92a550867203cc28:1ee17d101de04f9bbde91c240e2f4a0f:cdb3e0b901924d40989b5e1e3faa1bfd",
  "placement": 12,
  "time_alive": 1303,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 27,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 33,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 26,
  "time_alive": 797,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 16,
  "time_alive": 1191,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 11,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 30,
  "time_alive": 204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "9159090ef2e742a9b32e52b998a163a2:be940fe623694f4aa743f86be8e62c5c:da2cb843ed814875902667174c174181",
  "placement": 31,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "9159090ef2e742a9b32e52b998a163a2:be940fe623694f4aa743f86be8e62c5c:da2cb843ed814875902667174c174181",
  "placement": 16,
  "time_alive": 1282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "9159090ef2e742a9b32e52b998a163a2:be940fe623694f4aa743f86be8e62c5c:da2cb843ed814875902667174c174181",
  "placement": 25,
  "time_alive": 835,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "9159090ef2e742a9b32e52b998a163a2:be940fe623694f4aa743f86be8e62c5c:da2cb843ed814875902667174c174181",
  "placement": 8,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "9159090ef2e742a9b32e52b998a163a2:be940fe623694f4aa743f86be8e62c5c:da2cb843ed814875902667174c174181",
  "placement": 28,
  "time_alive": 310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "9159090ef2e742a9b32e52b998a163a2:be940fe623694f4aa743f86be8e62c5c:da2cb843ed814875902667174c174181",
  "placement": 28,
  "time_alive": 533,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:7d95ff5b6eb2448cb50f7ad42fed9848:b59b19aa274c458db95255b0d9553094",
  "placement": 33,
  "time_alive": 89,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:7d95ff5b6eb2448cb50f7ad42fed9848:b59b19aa274c458db95255b0d9553094",
  "placement": 27,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:7d95ff5b6eb2448cb50f7ad42fed9848:b59b19aa274c458db95255b0d9553094",
  "placement": 27,
  "time_alive": 758,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:7d95ff5b6eb2448cb50f7ad42fed9848:b59b19aa274c458db95255b0d9553094",
  "placement": 18,
  "time_alive": 1143,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:7d95ff5b6eb2448cb50f7ad42fed9848:b59b19aa274c458db95255b0d9553094",
  "placement": 22,
  "time_alive": 595,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:7d95ff5b6eb2448cb50f7ad42fed9848:b59b19aa274c458db95255b0d9553094",
  "placement": 29,
  "time_alive": 252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "0d19c6560727474aa88559af4786d088:e77c4d99f3244cafad36abde03d9b3ec:f34c0e1283284d2ea8bb54ef9fe9a79e",
  "placement": 13,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "0d19c6560727474aa88559af4786d088:e77c4d99f3244cafad36abde03d9b3ec:f34c0e1283284d2ea8bb54ef9fe9a79e",
  "placement": 26,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "0d19c6560727474aa88559af4786d088:e77c4d99f3244cafad36abde03d9b3ec:f34c0e1283284d2ea8bb54ef9fe9a79e",
  "placement": 32,
  "time_alive": 440,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "0d19c6560727474aa88559af4786d088:e77c4d99f3244cafad36abde03d9b3ec:f34c0e1283284d2ea8bb54ef9fe9a79e",
  "placement": 32,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "0d19c6560727474aa88559af4786d088:e77c4d99f3244cafad36abde03d9b3ec:f34c0e1283284d2ea8bb54ef9fe9a79e",
  "placement": 15,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "0d19c6560727474aa88559af4786d088:e77c4d99f3244cafad36abde03d9b3ec:f34c0e1283284d2ea8bb54ef9fe9a79e",
  "placement": 19,
  "time_alive": 1056,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "5b8d51ac685d46708fb2c27a5a197dfd:8cacb884fca74d0d9193267edd91da36:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 32,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "5b8d51ac685d46708fb2c27a5a197dfd:8cacb884fca74d0d9193267edd91da36:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 15,
  "time_alive": 1295,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "5b8d51ac685d46708fb2c27a5a197dfd:8cacb884fca74d0d9193267edd91da36:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 24,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "5b8d51ac685d46708fb2c27a5a197dfd:8cacb884fca74d0d9193267edd91da36:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 31,
  "time_alive": 362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "5b8d51ac685d46708fb2c27a5a197dfd:8cacb884fca74d0d9193267edd91da36:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 30,
  "time_alive": 285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "5b8d51ac685d46708fb2c27a5a197dfd:8cacb884fca74d0d9193267edd91da36:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 18,
  "time_alive": 1073,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 28,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 30,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 31,
  "time_alive": 531,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 14,
  "time_alive": 1256,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 26,
  "time_alive": 326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 31,
  "time_alive": 145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:4b6aa5bc54054db6a8e1a05a945b64d4:b83353b35d494d1a94b573fd09007d9c",
  "placement": 25,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2066abb-652c-40e0-adcb-dce113885129",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:4b6aa5bc54054db6a8e1a05a945b64d4:b83353b35d494d1a94b573fd09007d9c",
  "placement": 13,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4f9d1e32-0344-44d9-ad05-4f33640ac869",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:4b6aa5bc54054db6a8e1a05a945b64d4:b83353b35d494d1a94b573fd09007d9c",
  "placement": 21,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebb3e0f1-38b0-4d79-ae82-a59f40793884",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:4b6aa5bc54054db6a8e1a05a945b64d4:b83353b35d494d1a94b573fd09007d9c",
  "placement": 26,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46c1fdb6-636d-4791-8b7e-f614de3cbd9a",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:4b6aa5bc54054db6a8e1a05a945b64d4:b83353b35d494d1a94b573fd09007d9c",
  "placement": 27,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "054a223d-1b21-4015-8bb9-ab0791a7d1aa",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:4b6aa5bc54054db6a8e1a05a945b64d4:b83353b35d494d1a94b573fd09007d9c",
  "placement": 25,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 5,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1490,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1442,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 10,
  "time_alive": 1382,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 17,
  "time_alive": 1283,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 5,
  "time_alive": 1390,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 19,
  "time_alive": 1105,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 21,
  "time_alive": 1105,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 1,
  "time_alive": 1442,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 4,
  "time_alive": 1456,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 1,
  "time_alive": 1506,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 11,
  "time_alive": 1310,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 22,
  "time_alive": 984,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 2,
  "time_alive": 1490,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 4,
  "time_alive": 1403,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 7,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 7,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 1,
  "time_alive": 1444,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 2,
  "time_alive": 1426,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 10,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 1,
  "time_alive": 1478,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 26,
  "time_alive": 903,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 23,
  "time_alive": 988,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 4,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 20,
  "time_alive": 1114,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 14,
  "time_alive": 1283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 2,
  "time_alive": 1478,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 3,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 21,
  "time_alive": 1121,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 6,
  "time_alive": 1354,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 29,
  "time_alive": 667,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 7,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1431,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1428,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 25,
  "time_alive": 909,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 13,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 3,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 9,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 3,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 9,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 6,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 8,
  "time_alive": 1348,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 12,
  "time_alive": 1370,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 3,
  "time_alive": 1432,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 13,
  "time_alive": 1283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 8,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 18,
  "time_alive": 1259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 10,
  "time_alive": 1340,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 14,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 31,
  "time_alive": 454,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 24,
  "time_alive": 1086,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 6,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 3,
  "time_alive": 1442,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "3f429aacd44f4a1c83dca963097bd010:44e24373be324775b57aafe239dd0802:ac93a141290349afa522f0ba8ddc3715",
  "placement": 30,
  "time_alive": 788,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "3f429aacd44f4a1c83dca963097bd010:44e24373be324775b57aafe239dd0802:ac93a141290349afa522f0ba8ddc3715",
  "placement": 22,
  "time_alive": 1103,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "3f429aacd44f4a1c83dca963097bd010:44e24373be324775b57aafe239dd0802:ac93a141290349afa522f0ba8ddc3715",
  "placement": 20,
  "time_alive": 1117,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "3f429aacd44f4a1c83dca963097bd010:44e24373be324775b57aafe239dd0802:ac93a141290349afa522f0ba8ddc3715",
  "placement": 8,
  "time_alive": 1404,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "3f429aacd44f4a1c83dca963097bd010:44e24373be324775b57aafe239dd0802:ac93a141290349afa522f0ba8ddc3715",
  "placement": 2,
  "time_alive": 1506,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "3f429aacd44f4a1c83dca963097bd010:44e24373be324775b57aafe239dd0802:ac93a141290349afa522f0ba8ddc3715",
  "placement": 8,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1426,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 11,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 12,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 11,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 13,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 13,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 3,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 19,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 13,
  "time_alive": 1315,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 16,
  "time_alive": 1230,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 19,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 14,
  "time_alive": 1308,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 17,
  "time_alive": 1160,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 17,
  "time_alive": 1256,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 5,
  "time_alive": 1402,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 15,
  "time_alive": 1277,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 4,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 17,
  "time_alive": 1297,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "94fa99b737c6452ebce597a35306decd:da5494905e1547b89045269240ff2b50:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 26,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "94fa99b737c6452ebce597a35306decd:da5494905e1547b89045269240ff2b50:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 4,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "94fa99b737c6452ebce597a35306decd:da5494905e1547b89045269240ff2b50:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 6,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "94fa99b737c6452ebce597a35306decd:da5494905e1547b89045269240ff2b50:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 28,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "94fa99b737c6452ebce597a35306decd:da5494905e1547b89045269240ff2b50:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 12,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "94fa99b737c6452ebce597a35306decd:da5494905e1547b89045269240ff2b50:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 7,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 9,
  "time_alive": 1340,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 24,
  "time_alive": 1039,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 8,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 9,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 15,
  "time_alive": 1294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 28,
  "time_alive": 549,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 14,
  "time_alive": 1304,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 27,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 6,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 18,
  "time_alive": 1279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 27,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 20,
  "time_alive": 1062,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 23,
  "time_alive": 1100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 11,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 30,
  "time_alive": 755,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 23,
  "time_alive": 1025,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 2,
  "time_alive": 1444,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 18,
  "time_alive": 1118,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 8,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 22,
  "time_alive": 1076,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 22,
  "time_alive": 1102,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 32,
  "time_alive": 210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 4,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "56ee43c1731048f1af359135562c901f:67ff1c4121ec43c4ac13e23609694ed1:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 23,
  "time_alive": 966,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "56ee43c1731048f1af359135562c901f:67ff1c4121ec43c4ac13e23609694ed1:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 31,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "56ee43c1731048f1af359135562c901f:67ff1c4121ec43c4ac13e23609694ed1:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 30,
  "time_alive": 782,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "56ee43c1731048f1af359135562c901f:67ff1c4121ec43c4ac13e23609694ed1:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 14,
  "time_alive": 1279,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "56ee43c1731048f1af359135562c901f:67ff1c4121ec43c4ac13e23609694ed1:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 20,
  "time_alive": 1178,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "56ee43c1731048f1af359135562c901f:67ff1c4121ec43c4ac13e23609694ed1:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 12,
  "time_alive": 1310,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 16,
  "time_alive": 1212,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 30,
  "time_alive": 503,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 25,
  "time_alive": 931,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 25,
  "time_alive": 1074,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 33,
  "time_alive": 94,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 9,
  "time_alive": 1330,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:32018a827e85492ba143f5755b998c36:aa799c6214d5419f9c43b8372cf15284",
  "placement": 15,
  "time_alive": 1271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:32018a827e85492ba143f5755b998c36:aa799c6214d5419f9c43b8372cf15284",
  "placement": 5,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:32018a827e85492ba143f5755b998c36:aa799c6214d5419f9c43b8372cf15284",
  "placement": 28,
  "time_alive": 804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:32018a827e85492ba143f5755b998c36:aa799c6214d5419f9c43b8372cf15284",
  "placement": 27,
  "time_alive": 875,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:32018a827e85492ba143f5755b998c36:aa799c6214d5419f9c43b8372cf15284",
  "placement": 21,
  "time_alive": 1128,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:32018a827e85492ba143f5755b998c36:aa799c6214d5419f9c43b8372cf15284",
  "placement": 19,
  "time_alive": 1202,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 29,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 6,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 18,
  "time_alive": 1134,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 29,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 22,
  "time_alive": 1082,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 15,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 31,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 9,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 19,
  "time_alive": 1121,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 21,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 10,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 29,
  "time_alive": 516,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "04799fbb72364817a07823692f2f6325:34009ee20b024cfb843d984e5b9b30aa:abe1d615c8c24a47a915717c969bf571",
  "placement": 11,
  "time_alive": 1339,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "04799fbb72364817a07823692f2f6325:34009ee20b024cfb843d984e5b9b30aa:abe1d615c8c24a47a915717c969bf571",
  "placement": 26,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "04799fbb72364817a07823692f2f6325:34009ee20b024cfb843d984e5b9b30aa:abe1d615c8c24a47a915717c969bf571",
  "placement": 24,
  "time_alive": 1028,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "04799fbb72364817a07823692f2f6325:34009ee20b024cfb843d984e5b9b30aa:abe1d615c8c24a47a915717c969bf571",
  "placement": 26,
  "time_alive": 915,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "04799fbb72364817a07823692f2f6325:34009ee20b024cfb843d984e5b9b30aa:abe1d615c8c24a47a915717c969bf571",
  "placement": 31,
  "time_alive": 422,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "04799fbb72364817a07823692f2f6325:34009ee20b024cfb843d984e5b9b30aa:abe1d615c8c24a47a915717c969bf571",
  "placement": 10,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:46db22849dae49f5a13f039469969bc0:eabc71165d7342a29ff28510f29ae425",
  "placement": 28,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:46db22849dae49f5a13f039469969bc0:eabc71165d7342a29ff28510f29ae425",
  "placement": 10,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:46db22849dae49f5a13f039469969bc0:eabc71165d7342a29ff28510f29ae425",
  "placement": 21,
  "time_alive": 1092,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:46db22849dae49f5a13f039469969bc0:eabc71165d7342a29ff28510f29ae425",
  "placement": 12,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:46db22849dae49f5a13f039469969bc0:eabc71165d7342a29ff28510f29ae425",
  "placement": 14,
  "time_alive": 1302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:46db22849dae49f5a13f039469969bc0:eabc71165d7342a29ff28510f29ae425",
  "placement": 24,
  "time_alive": 959,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "7e62d037611e428f87411f751ab41aaf:b56c72582796457390a26dea9eb234ca:f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 7,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "7e62d037611e428f87411f751ab41aaf:b56c72582796457390a26dea9eb234ca:f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 28,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "7e62d037611e428f87411f751ab41aaf:b56c72582796457390a26dea9eb234ca:f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 17,
  "time_alive": 1228,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "7e62d037611e428f87411f751ab41aaf:b56c72582796457390a26dea9eb234ca:f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 19,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "7e62d037611e428f87411f751ab41aaf:b56c72582796457390a26dea9eb234ca:f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 29,
  "time_alive": 518,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "7e62d037611e428f87411f751ab41aaf:b56c72582796457390a26dea9eb234ca:f770a904414e4ba18fb08227cdd9b3e9",
  "placement": 26,
  "time_alive": 822,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 32,
  "time_alive": 108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 25,
  "time_alive": 933,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 32,
  "time_alive": 237,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 17,
  "time_alive": 1213,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 16,
  "time_alive": 1283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 31,
  "time_alive": 425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "2f5e246a94dd41de83009745647a73a0:68b3cff286064e34bcbf2e293446208d:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 12,
  "time_alive": 1307,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "2f5e246a94dd41de83009745647a73a0:68b3cff286064e34bcbf2e293446208d:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 15,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "2f5e246a94dd41de83009745647a73a0:68b3cff286064e34bcbf2e293446208d:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 15,
  "time_alive": 1257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "2f5e246a94dd41de83009745647a73a0:68b3cff286064e34bcbf2e293446208d:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 32,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "2f5e246a94dd41de83009745647a73a0:68b3cff286064e34bcbf2e293446208d:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 24,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "2f5e246a94dd41de83009745647a73a0:68b3cff286064e34bcbf2e293446208d:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 20,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "3272b8170cee4a37a80c28bf5ef7783b:ba6848ae9cc84e54b92cb85ec8ffa3fb:de7dbbd3b9bb442f881e5d1808517e79",
  "placement": 24,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "3272b8170cee4a37a80c28bf5ef7783b:ba6848ae9cc84e54b92cb85ec8ffa3fb:de7dbbd3b9bb442f881e5d1808517e79",
  "placement": 13,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "3272b8170cee4a37a80c28bf5ef7783b:ba6848ae9cc84e54b92cb85ec8ffa3fb:de7dbbd3b9bb442f881e5d1808517e79",
  "placement": 26,
  "time_alive": 824,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "3272b8170cee4a37a80c28bf5ef7783b:ba6848ae9cc84e54b92cb85ec8ffa3fb:de7dbbd3b9bb442f881e5d1808517e79",
  "placement": 18,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "3272b8170cee4a37a80c28bf5ef7783b:ba6848ae9cc84e54b92cb85ec8ffa3fb:de7dbbd3b9bb442f881e5d1808517e79",
  "placement": 30,
  "time_alive": 507,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "3272b8170cee4a37a80c28bf5ef7783b:ba6848ae9cc84e54b92cb85ec8ffa3fb:de7dbbd3b9bb442f881e5d1808517e79",
  "placement": 16,
  "time_alive": 1300,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "6398f134fe1b4612be72eba99f429dbd:ac924f441cb94f27b7bbd23a0fdbb9a2:e1f90941c308448c9288332750148b3d",
  "placement": 21,
  "time_alive": 1023,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "6398f134fe1b4612be72eba99f429dbd:ac924f441cb94f27b7bbd23a0fdbb9a2:e1f90941c308448c9288332750148b3d",
  "placement": 18,
  "time_alive": 1199,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "6398f134fe1b4612be72eba99f429dbd:ac924f441cb94f27b7bbd23a0fdbb9a2:e1f90941c308448c9288332750148b3d",
  "placement": 16,
  "time_alive": 1230,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "6398f134fe1b4612be72eba99f429dbd:ac924f441cb94f27b7bbd23a0fdbb9a2:e1f90941c308448c9288332750148b3d",
  "placement": 20,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "6398f134fe1b4612be72eba99f429dbd:ac924f441cb94f27b7bbd23a0fdbb9a2:e1f90941c308448c9288332750148b3d",
  "placement": 11,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "6398f134fe1b4612be72eba99f429dbd:ac924f441cb94f27b7bbd23a0fdbb9a2:e1f90941c308448c9288332750148b3d",
  "placement": 22,
  "time_alive": 1089,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "0da11626da7a437a981844aac9d5c6cc:7abcbf346948458280f12e381a8e1832:c30726e222dd41b39354a15d30057ae8",
  "placement": 27,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "0da11626da7a437a981844aac9d5c6cc:7abcbf346948458280f12e381a8e1832:c30726e222dd41b39354a15d30057ae8",
  "placement": 16,
  "time_alive": 1266,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "0da11626da7a437a981844aac9d5c6cc:7abcbf346948458280f12e381a8e1832:c30726e222dd41b39354a15d30057ae8",
  "placement": 29,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "0da11626da7a437a981844aac9d5c6cc:7abcbf346948458280f12e381a8e1832:c30726e222dd41b39354a15d30057ae8",
  "placement": 31,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "0da11626da7a437a981844aac9d5c6cc:7abcbf346948458280f12e381a8e1832:c30726e222dd41b39354a15d30057ae8",
  "placement": 28,
  "time_alive": 559,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "0da11626da7a437a981844aac9d5c6cc:7abcbf346948458280f12e381a8e1832:c30726e222dd41b39354a15d30057ae8",
  "placement": 33,
  "time_alive": 73,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a7bf0b2-5a02-445f-8811-81e19f311798",
  "team_id": "35a8327c7d584226befe0bf73d02085a:5db6a109e91f46ecb682cd696158d4de:9e2fed9126da49538e074716b47a87b5",
  "placement": 25,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0",
  "team_id": "35a8327c7d584226befe0bf73d02085a:5db6a109e91f46ecb682cd696158d4de:9e2fed9126da49538e074716b47a87b5",
  "placement": 32,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2bc12a2c-de86-4c45-9398-526c7201bf8f",
  "team_id": "35a8327c7d584226befe0bf73d02085a:5db6a109e91f46ecb682cd696158d4de:9e2fed9126da49538e074716b47a87b5",
  "placement": 23,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "35a8327c7d584226befe0bf73d02085a:5db6a109e91f46ecb682cd696158d4de:9e2fed9126da49538e074716b47a87b5",
  "placement": 23,
  "time_alive": 1095,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "35a8327c7d584226befe0bf73d02085a:5db6a109e91f46ecb682cd696158d4de:9e2fed9126da49538e074716b47a87b5",
  "placement": 25,
  "time_alive": 940,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "35a8327c7d584226befe0bf73d02085a:5db6a109e91f46ecb682cd696158d4de:9e2fed9126da49538e074716b47a87b5",
  "placement": 32,
  "time_alive": 365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2647809c-337e-48ea-a809-84a9f263cf72",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 33,
  "time_alive": 135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08ce4552-d4e0-4a79-861c-faca1e2d3b89",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 27,
  "time_alive": 860,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "91de61ae-b862-46d0-89a3-a644831a7d87",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 30,
  "time_alive": 510,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 10,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1492,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1452,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 9,
  "time_alive": 1358,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 22,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1470,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 10,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1493,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1468,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 4,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 30,
  "time_alive": 703,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 3,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 1,
  "time_alive": 1476,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 7,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 28,
  "time_alive": 533,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1499,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 7,
  "time_alive": 1451,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1511,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 4,
  "time_alive": 1403,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 21,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 5,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 28,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 11,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 5,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 2,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 4,
  "time_alive": 1465,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 3,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 26,
  "time_alive": 937,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 12,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 4,
  "time_alive": 1489,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 10,
  "time_alive": 1354,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 2,
  "time_alive": 1488,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1505,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 15,
  "time_alive": 1296,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 1,
  "time_alive": 1499,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 8,
  "time_alive": 1363,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 6,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1501,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 21,
  "time_alive": 1096,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1487,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 13,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 19,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1390,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 22,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1476,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 27,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 12,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 12,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 13,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1506,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 15,
  "time_alive": 1309,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 11,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 3,
  "time_alive": 1478,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1511,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1438,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 6,
  "time_alive": 1447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 13,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 12,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 5,
  "time_alive": 1481,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 7,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 5,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 27,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 1,
  "time_alive": 1437,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 9,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 24,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 15,
  "time_alive": 1295,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 7,
  "time_alive": 1367,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 9,
  "time_alive": 1406,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 21,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1463,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 26,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1452,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1429,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 12,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 30,
  "time_alive": 407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 18,
  "time_alive": 1206,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1487,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 12,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 12,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 25,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 16,
  "time_alive": 1298,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 8,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 19,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 32,
  "time_alive": 92,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 23,
  "time_alive": 972,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 33,
  "time_alive": 74,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 11,
  "time_alive": 1325,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1499,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 16,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 5,
  "time_alive": 1459,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 15,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 28,
  "time_alive": 469,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 2,
  "time_alive": 1505,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 6,
  "time_alive": 1408,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 20,
  "time_alive": 1137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 20,
  "time_alive": 1127,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 20,
  "time_alive": 1093,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 17,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 14,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 19,
  "time_alive": 1176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 11,
  "time_alive": 1408,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 9,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 2,
  "time_alive": 1438,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 7,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 10,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 5,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 10,
  "time_alive": 1405,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 27,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 16,
  "time_alive": 1255,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 9,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 26,
  "time_alive": 857,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 22,
  "time_alive": 1127,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 8,
  "time_alive": 1445,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 22,
  "time_alive": 1082,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 31,
  "time_alive": 328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 3,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 11,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 1,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 33,
  "time_alive": 134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 30,
  "time_alive": 721,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 24,
  "time_alive": 954,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 2,
  "time_alive": 1506,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 29,
  "time_alive": 448,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 28,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 14,
  "time_alive": 1340,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 16,
  "time_alive": 1276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 8,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 27,
  "time_alive": 631,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 29,
  "time_alive": 315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 17,
  "time_alive": 1273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 21,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 21,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 7,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 5,
  "time_alive": 1453,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 6,
  "time_alive": 1363,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 20,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 6,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 8,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 17,
  "time_alive": 1283,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 12,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 8,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 23,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 2,
  "time_alive": 1499,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 18,
  "time_alive": 1273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 12,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 21,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 7,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 5,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 4,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 21,
  "time_alive": 1089,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 9,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 11,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 15,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 19,
  "time_alive": 1243,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 7,
  "time_alive": 1444,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 29,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 19,
  "time_alive": 1136,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 11,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 2,
  "time_alive": 1437,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 13,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 26,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 10,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 27,
  "time_alive": 757,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 16,
  "time_alive": 1309,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 14,
  "time_alive": 1338,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 11,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 22,
  "time_alive": 936,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 15,
  "time_alive": 1311,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 28,
  "time_alive": 513,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 20,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 9,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 8,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 5,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 17,
  "time_alive": 1191,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 22,
  "time_alive": 1065,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 1,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 22,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 22,
  "time_alive": 1171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 18,
  "time_alive": 1195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 25,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 32,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 16,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 4,
  "time_alive": 1401,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 7,
  "time_alive": 1402,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 21,
  "time_alive": 1106,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 13,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 14,
  "time_alive": 1330,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 23,
  "time_alive": 975,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 6,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 9,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 3,
  "time_alive": 1496,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 31,
  "time_alive": 452,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 17,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 32,
  "time_alive": 91,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 32,
  "time_alive": 146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 16,
  "time_alive": 1295,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 9,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 28,
  "time_alive": 799,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 21,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 10,
  "time_alive": 1391,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 26,
  "time_alive": 927,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 16,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 17,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 24,
  "time_alive": 909,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 10,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 14,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 10,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 14,
  "time_alive": 1303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 2,
  "time_alive": 1487,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 6,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 13,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 29,
  "time_alive": 451,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 9,
  "time_alive": 1423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 3,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 6,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 9,
  "time_alive": 1357,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 25,
  "time_alive": 938,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 26,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 22,
  "time_alive": 958,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 27,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 22,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 18,
  "time_alive": 1181,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 11,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 18,
  "time_alive": 1278,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 25,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 21,
  "time_alive": 1212,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 8,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 11,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 31,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 18,
  "time_alive": 1278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 13,
  "time_alive": 1313,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 15,
  "time_alive": 1298,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 17,
  "time_alive": 1262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 7,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 25,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 24,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 18,
  "time_alive": 1280,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 14,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 24,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 4,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 15,
  "time_alive": 1317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 8,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 25,
  "time_alive": 918,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 29,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 18,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 14,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 19,
  "time_alive": 1130,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 5,
  "time_alive": 1451,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 20,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 18,
  "time_alive": 1254,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 15,
  "time_alive": 1265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 6,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 14,
  "time_alive": 1323,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 23,
  "time_alive": 1111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 12,
  "time_alive": 1316,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 23,
  "time_alive": 990,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 23,
  "time_alive": 1067,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 27,
  "time_alive": 802,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 18,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 8,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 30,
  "time_alive": 297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 13,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 16,
  "time_alive": 1198,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 23,
  "time_alive": 1065,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 3,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 6,
  "time_alive": 1447,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 20,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 17,
  "time_alive": 1229,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 15,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 31,
  "time_alive": 424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 24,
  "time_alive": 961,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 15,
  "time_alive": 1315,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 19,
  "time_alive": 1218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 20,
  "time_alive": 1216,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 9,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 26,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 26,
  "time_alive": 938,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 25,
  "time_alive": 915,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 24,
  "time_alive": 932,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 12,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 31,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 32,
  "time_alive": 305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 32,
  "time_alive": 252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 13,
  "time_alive": 1339,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 12,
  "time_alive": 1357,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 32,
  "time_alive": 48,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 13,
  "time_alive": 1378,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 33,
  "time_alive": 46,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 33,
  "time_alive": 103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 31,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 17,
  "time_alive": 1271,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 10,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 20,
  "time_alive": 1132,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 24,
  "time_alive": 991,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 28,
  "time_alive": 613,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 14,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 17,
  "time_alive": 1290,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 26,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 14,
  "time_alive": 1276,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 13,
  "time_alive": 1325,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 30,
  "time_alive": 346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 10,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 5,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 21,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 25,
  "time_alive": 933,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 30,
  "time_alive": 788,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 29,
  "time_alive": 592,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 31,
  "time_alive": 114,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 23,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 29,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 25,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 17,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 8,
  "time_alive": 1366,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 24,
  "time_alive": 1107,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 31,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 6,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 19,
  "time_alive": 1134,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 29,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 6,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 17,
  "time_alive": 1281,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 27,
  "time_alive": 674,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 7,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 28,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 10,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 11,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 28,
  "time_alive": 803,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 16,
  "time_alive": 1287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 30,
  "time_alive": 688,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 27,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 20,
  "time_alive": 1159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 20,
  "time_alive": 1130,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 20,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 31,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 25,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 27,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 14,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 29,
  "time_alive": 460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 13,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 18,
  "time_alive": 1215,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 31,
  "time_alive": 145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 30,
  "time_alive": 652,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 25,
  "time_alive": 892,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 23,
  "time_alive": 961,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 30,
  "time_alive": 384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "9af7baa13e8e40e0a4ade45735de9d45:a5aacd58a1bd4a9ab4bc55fccba5df5e:c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 24,
  "time_alive": 1097,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 23,
  "time_alive": 918,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 28,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 18,
  "time_alive": 1194,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 19,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 23,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 24,
  "time_alive": 964,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 29,
  "time_alive": 684,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 11,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 16,
  "time_alive": 1291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 19,
  "time_alive": 1271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "00305d46885743f4b3bae606acb1af38:1e1a068ecb0449ae9c0dac4b9a0af813:d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 7,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 30,
  "time_alive": 798,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 32,
  "time_alive": 364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 22,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 27,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 15,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 27,
  "time_alive": 749,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 25,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 28,
  "time_alive": 753,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 26,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 30,
  "time_alive": 499,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 26,
  "time_alive": 685,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 28,
  "time_alive": 349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10323d0c-5623-48cc-ba93-e905a5603c31",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 31,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ceaa30b9-8896-47b6-84aa-404398dc9e27",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 31,
  "time_alive": 409,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0602e559-9d1c-454d-8a20-8d2c18feeade",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 19,
  "time_alive": 1208,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bc8753a-5549-4368-837e-e01f46c7830e",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 22,
  "time_alive": 975,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "520e1446-d459-4997-af69-149a1cf3a5ef",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 29,
  "time_alive": 202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 19,
  "time_alive": 1159,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70e4bdd0-8950-44d0-822d-0c2101e39a0f",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 32,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4b9326c-b79b-483c-8b0a-97d1e29642c1",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 32,
  "time_alive": 232,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e86cd793-ebe6-40c3-9b94-210a67527af7",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 23,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b21688c9-c579-4f0a-a3de-faafe198b0f7",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 26,
  "time_alive": 831,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f68bacc6-0cbc-4676-9163-6a33ed5e9628",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 32,
  "time_alive": 112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 32,
  "time_alive": 145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1481,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 6,
  "time_alive": 1423,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:c3fed2a8f12f4d39ada7a8aeb784285a:fa81291771cf4b90ae1b444d727df46e",
  "placement": 2,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 3,
  "time_alive": 1453,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "27492772ffce4586b68833131ca6deea:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 15,
  "time_alive": 1334,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 10,
  "time_alive": 1385,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 5,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 9,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 13,
  "time_alive": 1348,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 4,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 11,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:6fa024b0e13d44be9b6d299d1e38ac0c:ec755cf0df0244e59dc4840688c900a1",
  "placement": 12,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 7,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 8,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 14,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 21,
  "time_alive": 1146,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 28,
  "time_alive": 310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 22,
  "time_alive": 1105,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "76edd46c839945c8baecf7608b322668:8e9ea98a6f1a4af784c04e5ee4b1d4fb:e0d1d4acdce0430abd329eed358062cd",
  "placement": 23,
  "time_alive": 1079,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 16,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 17,
  "time_alive": 1300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:34316b82e61c4ab98e19bff8922c4592:5baf908041114bccaff845a6194144ce",
  "placement": 18,
  "time_alive": 1300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "077343a20e474723aecc78d877aec8d3:803c263c083143e6b103c6e390696823:cbfa6071b14a43108e99c22313431944",
  "placement": 19,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "96100f9b2871486aad7cc61d01236695:9e24ee30d65d440f8d03a4946a9f1d43:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 20,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 24,
  "time_alive": 956,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "2d386ad29dd84db189f2755362071753:752fbff5aafa4d87bea75749aa07a8b4:7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 25,
  "time_alive": 936,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "3f429aacd44f4a1c83dca963097bd010:44e24373be324775b57aafe239dd0802:ac93a141290349afa522f0ba8ddc3715",
  "placement": 26,
  "time_alive": 776,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "94fa99b737c6452ebce597a35306decd:da5494905e1547b89045269240ff2b50:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 27,
  "time_alive": 530,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54:f8eeece803924b9093db2812e6772743",
  "placement": 29,
  "time_alive": 290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95c5d5d2-8302-450c-8a63-30945ffb06c7",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 30,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1544,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1506,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 40,
  "time_alive": 855,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 8,
  "time_alive": 1486,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 1,
  "time_alive": 1527,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 1,
  "time_alive": 1528,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 13,
  "time_alive": 1441,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 13,
  "time_alive": 1445,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 5,
  "time_alive": 1460,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 2,
  "time_alive": 1542,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 6,
  "time_alive": 1496,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 24,
  "time_alive": 1320,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 3,
  "time_alive": 1524,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 24,
  "time_alive": 1303,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 18,
  "time_alive": 1375,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 5,
  "time_alive": 1497,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 3,
  "time_alive": 1525,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 6,
  "time_alive": 1469,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 8,
  "time_alive": 1482,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 50,
  "time_alive": 125,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 3,
  "time_alive": 1470,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 50,
  "time_alive": 75,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 16,
  "time_alive": 1416,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 2,
  "time_alive": 1528,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 18,
  "time_alive": 1404,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 16,
  "time_alive": 1418,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 15,
  "time_alive": 1397,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 1,
  "time_alive": 1542,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 4,
  "time_alive": 1501,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:7004cd495bd34662945c508d118f65a7",
  "placement": 23,
  "time_alive": 1321,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 16,
  "time_alive": 1409,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 19,
  "time_alive": 1387,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1479,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 17,
  "time_alive": 1412,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 2,
  "time_alive": 1527,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 18,
  "time_alive": 1357,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 19,
  "time_alive": 1404,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 28,
  "time_alive": 1150,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 4,
  "time_alive": 1464,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 31,
  "time_alive": 1146,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 5,
  "time_alive": 1501,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 10,
  "time_alive": 1414,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 1,
  "time_alive": 1544,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 18,
  "time_alive": 1395,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 9,
  "time_alive": 1439,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 39,
  "time_alive": 641,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 47,
  "time_alive": 189,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 40,
  "time_alive": 441,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 23,
  "time_alive": 1360,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 29,
  "time_alive": 1142,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 13,
  "time_alive": 1409,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 42,
  "time_alive": 310,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 10,
  "time_alive": 1469,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 3,
  "time_alive": 1519,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 4,
  "time_alive": 1512,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 3,
  "time_alive": 1502,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 46,
  "time_alive": 290,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 15,
  "time_alive": 1423,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 19,
  "time_alive": 1389,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 49,
  "time_alive": 210,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 12,
  "time_alive": 1461,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 34,
  "time_alive": 937,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 10,
  "time_alive": 1437,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 3,
  "time_alive": 1533,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 32,
  "time_alive": 1096,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 13,
  "time_alive": 1402,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 22,
  "time_alive": 1365,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 15,
  "time_alive": 1431,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 14,
  "time_alive": 1407,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 32,
  "time_alive": 1133,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 9,
  "time_alive": 1471,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 15,
  "time_alive": 1380,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 5,
  "time_alive": 1511,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 47,
  "time_alive": 283,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 41,
  "time_alive": 839,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "ca1b38ae-694f-4d91-8596-fa698feeb578",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 35,
  "time_alive": 915,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0e208450-6c05-492d-9d03-6f228ccd0ac1",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 12,
  "time_alive": 1453,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 9,
  "time_alive": 1424,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "6dcc940c-ce63-4fb5-9f26-2b08fa333a91",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 26,
  "time_alive": 1338,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "8fba85ed-a646-49d7-b3ff-702e1d679fe1",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 1,
  "time_alive": 1506,
  "elims": 11,
  "mode": 2
 },
 {
  "game_id": "3f9a373d-8dae-4940-891e-32d339902e39",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 42,
  "time_alive": 819,
  "elims": 0,
  "mode": 2
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
    