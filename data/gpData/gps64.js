const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 22,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 12,
  "time_alive": 1433,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 11,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 22,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 3,
  "time_alive": 1513,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 26,
  "time_alive": 722,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 24,
  "time_alive": 917,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 25,
  "time_alive": 491,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 28,
  "time_alive": 473,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 19,
  "time_alive": 1326,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1486,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 30,
  "time_alive": 628,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 24,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 5,
  "time_alive": 1510,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 30,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1503,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1473,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 11,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1463,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 8,
  "time_alive": 1481,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 9,
  "time_alive": 1438,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 10,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 14,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 11,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 2,
  "time_alive": 1544,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 18,
  "time_alive": 1244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 18,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 18,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 21,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 9,
  "time_alive": 1421,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 5,
  "time_alive": 1489,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 6,
  "time_alive": 1461,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 12,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 10,
  "time_alive": 1477,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 33,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 33,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 10,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 13,
  "time_alive": 1387,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 14,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 27,
  "time_alive": 535,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 14,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 20,
  "time_alive": 1163,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 31,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 14,
  "time_alive": 1373,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 16,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 11,
  "time_alive": 1445,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 31,
  "time_alive": 301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 20,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 4,
  "time_alive": 1523,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 15,
  "time_alive": 1374,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 18,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 22,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 17,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 4,
  "time_alive": 1508,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 26,
  "time_alive": 490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 18,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 18,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 27,
  "time_alive": 711,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 13,
  "time_alive": 1385,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 21,
  "time_alive": 835,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 8,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 17,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 4,
  "time_alive": 1497,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 18,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 17,
  "time_alive": 1313,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 9,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 8,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 20,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 20,
  "time_alive": 1251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 20,
  "time_alive": 1181,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 27,
  "time_alive": 399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 32,
  "time_alive": 165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 16,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 32,
  "time_alive": 159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 26,
  "time_alive": 1072,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 13,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 26,
  "time_alive": 701,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "0eae3d457e594c1594bc1127e28312ac:1bf60fbc1af943bf8d53f5826557062a:ce4020852bb44e09a776cdf57828c790",
  "placement": 16,
  "time_alive": 1380,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 23,
  "time_alive": 1044,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 30,
  "time_alive": 262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 33,
  "time_alive": 281,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 32,
  "time_alive": 177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 12,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 31,
  "time_alive": 261,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 29,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 23,
  "time_alive": 1150,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 30,
  "time_alive": 369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 29,
  "time_alive": 341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 30,
  "time_alive": 382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 4,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 24,
  "time_alive": 1032,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 28,
  "time_alive": 318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 28,
  "time_alive": 512,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 9,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 19,
  "time_alive": 1226,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 20,
  "time_alive": 921,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 24,
  "time_alive": 934,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 21,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 11,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 16,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 27,
  "time_alive": 572,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:e6d28f410cae4938b483614c50e47826",
  "placement": 30,
  "time_alive": 269,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 29,
  "time_alive": 436,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 33,
  "time_alive": 156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 32,
  "time_alive": 300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 10,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 18,
  "time_alive": 1256,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 27,
  "time_alive": 516,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 26,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 30,
  "time_alive": 388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 17,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 27,
  "time_alive": 511,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 28,
  "time_alive": 473,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 10,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 30,
  "time_alive": 369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 23,
  "time_alive": 1128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 16,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 26,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 8,
  "time_alive": 1506,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 22,
  "time_alive": 746,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 31,
  "time_alive": 161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 24,
  "time_alive": 1127,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 24,
  "time_alive": 992,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 18,
  "time_alive": 1281,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:7626f7c885fc4eb9ac8ea2b2a33ba5ae:8de4ce322454462b802bef2ca7f60595",
  "placement": 19,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 17,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 23,
  "time_alive": 1172,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 16,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 26,
  "time_alive": 473,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 29,
  "time_alive": 313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 28,
  "time_alive": 362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 26,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 14,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 15,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 11,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 18,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 17,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 22,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 24,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 24,
  "time_alive": 1061,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 32,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 33,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 19,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 28,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 33,
  "time_alive": 182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 3,
  "time_alive": 1509,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 15,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 21,
  "time_alive": 1191,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 22,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 31,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 22,
  "time_alive": 1194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 25,
  "time_alive": 1009,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 29,
  "time_alive": 294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 23,
  "time_alive": 628,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 22,
  "time_alive": 1183,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 5,
  "time_alive": 1495,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 23,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 19,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 25,
  "time_alive": 719,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "15459bd9b5854121bf2c9cc7168bdc8a:67f6e8a2e9f1473fab0aaad7730bfab4:6e669a22b6354425a3c478b442d0f7dd",
  "placement": 15,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 31,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 27,
  "time_alive": 459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 30,
  "time_alive": 414,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 27,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 16,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 19,
  "time_alive": 1014,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 21,
  "time_alive": 1206,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 12,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 16,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 25,
  "time_alive": 745,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 22,
  "time_alive": 1088,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 23,
  "time_alive": 957,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 19,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 8,
  "time_alive": 1457,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 17,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 29,
  "time_alive": 649,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 31,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 11,
  "time_alive": 1435,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 31,
  "time_alive": 326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 27,
  "time_alive": 861,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 25,
  "time_alive": 1081,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 32,
  "time_alive": 169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 32,
  "time_alive": 199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 24,
  "time_alive": 835,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 16,
  "time_alive": 1358,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 24,
  "time_alive": 816,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 15,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 15,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 28,
  "time_alive": 364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 24,
  "time_alive": 589,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 17,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 24,
  "time_alive": 977,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 28,
  "time_alive": 509,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 22,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 19,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 33,
  "time_alive": 88,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 32,
  "time_alive": 132,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 25,
  "time_alive": 701,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 21,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 12,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 23,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 26,
  "time_alive": 531,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 32,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 15,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 31,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 23,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 16,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "4a8d7201e08243b882c4655ee9e8466b:51ec0da0a5834f3c9871268d4751ec51:bf14960331834ee59f960bc698dca94f",
  "placement": 27,
  "time_alive": 455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 20,
  "time_alive": 1289,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 21,
  "time_alive": 1219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 31,
  "time_alive": 387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 23,
  "time_alive": 1101,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 13,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 28,
  "time_alive": 496,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 20,
  "time_alive": 1306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 29,
  "time_alive": 655,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 29,
  "time_alive": 398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 33,
  "time_alive": 129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 31,
  "time_alive": 309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 32,
  "time_alive": 209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ecd946e-e460-4013-8d2f-4596d851df3d",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 26,
  "time_alive": 641,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1e685c-6339-4b07-b552-1c1a56799ee8",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 32,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5346bd33-d75b-4156-a49a-8ca00d0f25ff",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 26,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a58680df-df9c-4e6a-b409-edf52ee45067",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 28,
  "time_alive": 749,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5182358a-8a2f-433b-9a71-ebd18e15dd07",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 17,
  "time_alive": 1263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 30,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57e645f8-79bc-44d2-aa81-21138f39a05b",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 27,
  "time_alive": 410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bc5a494-77fe-4a3d-88d8-376bd09ecea9",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 9,
  "time_alive": 1454,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5454c91c-52cb-4054-83ea-9424de4f63ff",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 20,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dac456-49ec-4f48-9097-c08a6a687c36",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 31,
  "time_alive": 262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9b3872c5-6084-42e2-a803-75b9000f33ab",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 29,
  "time_alive": 470,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4d0604e-3194-4177-b3de-ab153f9f12fc",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 22,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 10,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 3,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 15,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 7,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 3,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 6,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 10,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 2,
  "time_alive": 1522,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 4,
  "time_alive": 1439,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 4,
  "time_alive": 1433,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 9,
  "time_alive": 1403,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 9,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 21,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1559,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 4,
  "time_alive": 1503,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 33,
  "time_alive": 202,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 8,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 8,
  "time_alive": 1478,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 23,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 6,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 4,
  "time_alive": 1520,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 2,
  "time_alive": 1526,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 9,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 5,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1246,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 1,
  "time_alive": 1500,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1425,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 10,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 6,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 3,
  "time_alive": 1486,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1559,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 27,
  "time_alive": 614,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 2,
  "time_alive": 1489,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 32,
  "time_alive": 215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 2,
  "time_alive": 1538,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 31,
  "time_alive": 641,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 26,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 23,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 14,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 18,
  "time_alive": 1065,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 17,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 8,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 12,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 4,
  "time_alive": 1459,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 1,
  "time_alive": 1538,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 2,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 6,
  "time_alive": 1501,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 4,
  "time_alive": 1467,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 21,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 23,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 8,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 13,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 25,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 15,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 15,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 3,
  "time_alive": 1510,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 10,
  "time_alive": 1426,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 3,
  "time_alive": 1495,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 15,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 1,
  "time_alive": 1522,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 12,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 2,
  "time_alive": 1477,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 17,
  "time_alive": 966,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 20,
  "time_alive": 834,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 29,
  "time_alive": 338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 12,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 13,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 1,
  "time_alive": 1527,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 18,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 18,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 4,
  "time_alive": 1521,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 11,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 10,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 10,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 1,
  "time_alive": 1490,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 14,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 18,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 5,
  "time_alive": 1489,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1527,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 3,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 22,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1448,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1532,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 3,
  "time_alive": 1503,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 15,
  "time_alive": 1303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 17,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 20,
  "time_alive": 688,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 19,
  "time_alive": 943,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 11,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 11,
  "time_alive": 1460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 31,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 11,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 6,
  "time_alive": 1444,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 5,
  "time_alive": 1467,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 9,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 6,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 3,
  "time_alive": 1449,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 16,
  "time_alive": 1252,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 13,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 12,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 21,
  "time_alive": 1232,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 1,
  "time_alive": 1526,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 21,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 12,
  "time_alive": 1394,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 11,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 9,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 22,
  "time_alive": 1002,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 5,
  "time_alive": 1462,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 14,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 9,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 26,
  "time_alive": 494,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 5,
  "time_alive": 1456,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 14,
  "time_alive": 1424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 6,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 14,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 10,
  "time_alive": 1402,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 10,
  "time_alive": 1430,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 7,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 7,
  "time_alive": 1500,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 22,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 6,
  "time_alive": 1427,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 11,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 12,
  "time_alive": 1364,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 22,
  "time_alive": 599,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 16,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 5,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 20,
  "time_alive": 1204,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 8,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 20,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 13,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 11,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 10,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 7,
  "time_alive": 1425,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 18,
  "time_alive": 1205,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 23,
  "time_alive": 517,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 2,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 32,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 29,
  "time_alive": 716,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 25,
  "time_alive": 970,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 17,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 32,
  "time_alive": 237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 4,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 17,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 7,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 26,
  "time_alive": 565,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 3,
  "time_alive": 1450,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 4,
  "time_alive": 1450,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 8,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 30,
  "time_alive": 258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 7,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 24,
  "time_alive": 593,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 18,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 31,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 12,
  "time_alive": 1403,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 1,
  "time_alive": 1532,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 19,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 17,
  "time_alive": 1240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 12,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 7,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 11,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 27,
  "time_alive": 421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 22,
  "time_alive": 1194,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 7,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 6,
  "time_alive": 1434,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 27,
  "time_alive": 812,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 29,
  "time_alive": 548,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 30,
  "time_alive": 659,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 16,
  "time_alive": 1374,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 31,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 7,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 18,
  "time_alive": 822,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 3,
  "time_alive": 1478,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 8,
  "time_alive": 1468,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 4,
  "time_alive": 1473,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 23,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 21,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 16,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 5,
  "time_alive": 1447,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 13,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 20,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 22,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 15,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 5,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 7,
  "time_alive": 1386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 26,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 23,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 20,
  "time_alive": 1233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 19,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 19,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 9,
  "time_alive": 1430,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 3,
  "time_alive": 1532,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 9,
  "time_alive": 1421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 2,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 25,
  "time_alive": 613,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 25,
  "time_alive": 508,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b1f944ebd84947cb92de909c6f924016:b5f3a8feaf884b12911669ecd126bfe8",
  "placement": 24,
  "time_alive": 371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 22,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 13,
  "time_alive": 1436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 10,
  "time_alive": 1437,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 1,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 17,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 11,
  "time_alive": 1421,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 18,
  "time_alive": 1286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 21,
  "time_alive": 1146,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 11,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 21,
  "time_alive": 1174,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "38cb321847844c1faacf68da221378c8:78d1fba3e9f345709797e69e2c3e946b:cc840c6454b84b958b9454d8104491b7",
  "placement": 21,
  "time_alive": 655,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 13,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 10,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 31,
  "time_alive": 140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 26,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 30,
  "time_alive": 285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 8,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 12,
  "time_alive": 1447,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 14,
  "time_alive": 1377,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 18,
  "time_alive": 1186,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 20,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 6,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:15bb4ba32c484cb38ba00a5ab19f7aa6:3750138919cb423db8deeffebe52c4ed",
  "placement": 15,
  "time_alive": 1212,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 9,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 32,
  "time_alive": 134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 32,
  "time_alive": 164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 33,
  "time_alive": 106,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 30,
  "time_alive": 347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 32,
  "time_alive": 271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 23,
  "time_alive": 961,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 13,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 5,
  "time_alive": 1430,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 31,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 3,
  "time_alive": 1484,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b952068bc7b447e9a97980395208739d:d20bad044cb24f52bcef40a423aba45d",
  "placement": 16,
  "time_alive": 1191,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 33,
  "time_alive": 124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 18,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 16,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 14,
  "time_alive": 1352,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 15,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 14,
  "time_alive": 1388,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 25,
  "time_alive": 924,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 33,
  "time_alive": 134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 32,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 5,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 30,
  "time_alive": 151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "0814bdf46a7b4165bf74f99cb8216089:0f1010742b474ff1922b8a64d6ecd9fb:999143a2a00c4fffa23367506123658e",
  "placement": 28,
  "time_alive": 240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 26,
  "time_alive": 1140,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 25,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 16,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 9,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 26,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 7,
  "time_alive": 1466,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 27,
  "time_alive": 858,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 27,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 19,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 13,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 15,
  "time_alive": 1257,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:eedf9396ecb64d558cb71fc3eaaf591c:f49c772018d54f9c9a1bb42138a0047d",
  "placement": 4,
  "time_alive": 1464,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 12,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 9,
  "time_alive": 1467,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 11,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 29,
  "time_alive": 381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 17,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 14,
  "time_alive": 1417,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 12,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 25,
  "time_alive": 756,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 26,
  "time_alive": 552,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 24,
  "time_alive": 515,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:e802d3f914404c21afdc176269306cc8",
  "placement": 26,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 24,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 7,
  "time_alive": 1428,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 33,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 30,
  "time_alive": 192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 14,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 15,
  "time_alive": 1374,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 21,
  "time_alive": 1003,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 30,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 27,
  "time_alive": 447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 28,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 28,
  "time_alive": 387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:c1a22f8c3f21472ba161c28f4e75234d",
  "placement": 25,
  "time_alive": 359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 19,
  "time_alive": 1342,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 14,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 28,
  "time_alive": 304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 28,
  "time_alive": 397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 31,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 21,
  "time_alive": 1195,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 16,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 24,
  "time_alive": 1032,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 30,
  "time_alive": 318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 14,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 22,
  "time_alive": 592,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:9d213c60c03b4e8c9b73e1917cf16008:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 17,
  "time_alive": 1138,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 31,
  "time_alive": 222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 29,
  "time_alive": 383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 13,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 24,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 23,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 33,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 24,
  "time_alive": 951,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 29,
  "time_alive": 494,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 9,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 22,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 29,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "647a22d530cd47e3804944d82e347a1f:81a992f90ce84d55977572ab909cadfc:e42f54702e5648a0a95dbc4e3708c701",
  "placement": 10,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 17,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 6,
  "time_alive": 1485,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 19,
  "time_alive": 1239,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 18,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 28,
  "time_alive": 741,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 21,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 29,
  "time_alive": 753,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 17,
  "time_alive": 1363,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 20,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "28a9ee0f2aa045d38a6a520dd387afd2:52eda2217034432e9b067fb810a7971d:d422413cbd244bab9a6f0f5c24866023",
  "placement": 32,
  "time_alive": 99,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 31,
  "time_alive": 315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 19,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 27,
  "time_alive": 412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 24,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 26,
  "time_alive": 993,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 16,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 28,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 31,
  "time_alive": 249,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 16,
  "time_alive": 1262,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 24,
  "time_alive": 622,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 11,
  "time_alive": 1374,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:b75590bc26214154a435f8a37c249b3a:f02c7fbbeb8c4c8da7ad7feecb56869b",
  "placement": 23,
  "time_alive": 499,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 24,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 15,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 25,
  "time_alive": 522,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 22,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 25,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 25,
  "time_alive": 1060,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 5,
  "time_alive": 1504,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 15,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 13,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 19,
  "time_alive": 777,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "6a09bc417df44fe7b058543294d00dc1:990be36c05b7441db2407b43335e1993:dc83263544ef43dba0b84912cbae975b",
  "placement": 27,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 20,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 20,
  "time_alive": 1262,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 17,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 8,
  "time_alive": 1418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 27,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 12,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 20,
  "time_alive": 1015,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 28,
  "time_alive": 568,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 19,
  "time_alive": 1195,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 16,
  "time_alive": 1082,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "209aeb4bff884df59abc29adac862913:34cf60755dec4d17b4e6957bf8c11ab1:b58c31e482df401cad326a81ae604d84",
  "placement": 21,
  "time_alive": 674,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 27,
  "time_alive": 871,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 16,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 22,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 6,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 23,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 22,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 32,
  "time_alive": 564,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 25,
  "time_alive": 1013,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 24,
  "time_alive": 817,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "82203a3d8040462297a8e282a100d2d2:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 29,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 30,
  "time_alive": 330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 23,
  "time_alive": 1219,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 26,
  "time_alive": 686,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 23,
  "time_alive": 1027,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 20,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 13,
  "time_alive": 1407,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 26,
  "time_alive": 879,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 32,
  "time_alive": 204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 28,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 30,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e2a52c92-383b-4a69-9930-acc2fac873e3",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 27,
  "time_alive": 394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "89c8c78a-43e2-4296-b2f6-508606b59500",
  "team_id": "1e60dcbb531c49749009dee86ed55c68:8e3551ec51d342a1aca191673cd53490:dbe85ceea7fc4324a32535ef3d18ec57",
  "placement": 29,
  "time_alive": 122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d080a81-4dd2-464e-b9f8-4f7ec0292447",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 28,
  "time_alive": 730,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0efd39c4-f2db-4d33-bd34-1da2f7203f27",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 28,
  "time_alive": 391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "98675477-6936-4c91-9c3d-ebc3f8b76985",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 30,
  "time_alive": 353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f227356-cf71-414f-9b56-acd397adceb8",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 29,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99387cff-fa4e-420a-af9f-2ccdb599ad75",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 28,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "424a5738-8f01-4b34-b7ef-717dcc786294",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 24,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64f03f96-282e-43af-8cad-d76e44812bb9",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 33,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26219221-e081-4339-be46-ae78ddb162e3",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 18,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bc3997d-dd94-4bd6-a87b-08a242b6b681",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 29,
  "time_alive": 328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d428b214-2e0c-471b-bb4b-d2c9494dc0e4",
  "team_id": "1c7697a54c9a4e0095ffce5b6a452117:436b7c2ff89e473eb150af72c4e61da8:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 27,
  "time_alive": 361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 9,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 1,
  "time_alive": 1488,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 4,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 1,
  "time_alive": 1500,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 3,
  "time_alive": 1502,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 3,
  "time_alive": 1489,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 1,
  "time_alive": 1534,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 4,
  "time_alive": 1471,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 3,
  "time_alive": 1480,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 30,
  "time_alive": 317,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 17,
  "time_alive": 1308,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 19,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 10,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 7,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 6,
  "time_alive": 1420,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 5,
  "time_alive": 1501,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1499,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1534,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 17,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 4,
  "time_alive": 1477,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1534,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1467,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 5,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 2,
  "time_alive": 1529,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 24,
  "time_alive": 705,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 3,
  "time_alive": 1468,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 1,
  "time_alive": 1525,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 9,
  "time_alive": 1453,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 14,
  "time_alive": 1365,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 1,
  "time_alive": 1500,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 28,
  "time_alive": 836,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 7,
  "time_alive": 1460,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 12,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 28,
  "time_alive": 733,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 4,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 23,
  "time_alive": 1006,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 9,
  "time_alive": 1429,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 4,
  "time_alive": 1505,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1507,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 5,
  "time_alive": 1474,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 4,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 22,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1485,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 12,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 18,
  "time_alive": 1257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 18,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 1,
  "time_alive": 1529,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 15,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 8,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 15,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 11,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 12,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 8,
  "time_alive": 1444,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 3,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 13,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 5,
  "time_alive": 1516,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 2,
  "time_alive": 1467,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 30,
  "time_alive": 556,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 2,
  "time_alive": 1488,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 24,
  "time_alive": 1120,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 13,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 23,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 2,
  "time_alive": 1507,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 8,
  "time_alive": 1461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 13,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 12,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 29,
  "time_alive": 382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 3,
  "time_alive": 1521,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 16,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 11,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 7,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 7,
  "time_alive": 1469,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 2,
  "time_alive": 1484,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 7,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 9,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 13,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 27,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 11,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 26,
  "time_alive": 927,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 11,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 24,
  "time_alive": 680,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 6,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 13,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 3,
  "time_alive": 1493,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 32,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 21,
  "time_alive": 1215,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 6,
  "time_alive": 1473,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 15,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 23,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 23,
  "time_alive": 1022,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 14,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 5,
  "time_alive": 1426,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 3,
  "time_alive": 1510,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 3,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 30,
  "time_alive": 306,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 1,
  "time_alive": 1484,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 28,
  "time_alive": 348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 9,
  "time_alive": 1409,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 4,
  "time_alive": 1487,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 29,
  "time_alive": 671,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 21,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 18,
  "time_alive": 1269,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 13,
  "time_alive": 1382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 23,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 24,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 7,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 18,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 11,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 12,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 5,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 7,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 20,
  "time_alive": 1219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 10,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 9,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 19,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 8,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 28,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 16,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 8,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 6,
  "time_alive": 1476,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 19,
  "time_alive": 1299,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 3,
  "time_alive": 1522,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 18,
  "time_alive": 1241,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 22,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 27,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 7,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 8,
  "time_alive": 1415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 3,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 27,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 22,
  "time_alive": 1130,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 16,
  "time_alive": 1353,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 5,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 2,
  "time_alive": 1525,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 30,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 6,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 8,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 22,
  "time_alive": 1029,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 29,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 28,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 21,
  "time_alive": 1140,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 11,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 6,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 5,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 30,
  "time_alive": 300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 15,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 26,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 10,
  "time_alive": 1396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 19,
  "time_alive": 1259,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 11,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 4,
  "time_alive": 1521,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 14,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 10,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 22,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 15,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 29,
  "time_alive": 296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 13,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 32,
  "time_alive": 288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 10,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 5,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 9,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 25,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 16,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 4,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 21,
  "time_alive": 1182,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 4,
  "time_alive": 1485,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 31,
  "time_alive": 293,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 12,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 28,
  "time_alive": 679,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 17,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 14,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 11,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 2,
  "time_alive": 1500,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 15,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 28,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 22,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 25,
  "time_alive": 1008,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 18,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 23,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 20,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 18,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 8,
  "time_alive": 1411,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 16,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 9,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 7,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 5,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 6,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 15,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 17,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 9,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 27,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 11,
  "time_alive": 1418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 26,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 13,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 15,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 7,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 13,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 6,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 18,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "38044319899040eca9910bef4048b7d1:6e31343b2e46499c84aebc077f92fede:d68c85aa4d4744a2a4ba955355123b36",
  "placement": 6,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 12,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 12,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 28,
  "time_alive": 537,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 12,
  "time_alive": 1405,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 29,
  "time_alive": 649,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 16,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 21,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 12,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 5,
  "time_alive": 1467,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 14,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 10,
  "time_alive": 1397,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "4b5983cd00bd4330b42d595ccc46a1e6:9f5340a9fe76409aad5ebe1f6961cfed:a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 11,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 26,
  "time_alive": 961,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 15,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 29,
  "time_alive": 440,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 9,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 22,
  "time_alive": 1167,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 11,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 31,
  "time_alive": 176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 32,
  "time_alive": 216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 31,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 2,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 17,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "12783d4abdbc4d1db0c72b4477a32373:5820d012a9a04ace925f48dc7cc76091:aed693dbe097478cbdb38b317025eb06",
  "placement": 9,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 25,
  "time_alive": 850,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 17,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 19,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 16,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 23,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 19,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 2,
  "time_alive": 1499,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 18,
  "time_alive": 1240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 26,
  "time_alive": 988,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 12,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 20,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f:9d603ecc657d439a82c794e733604379:bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 7,
  "time_alive": 1420,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 26,
  "time_alive": 826,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 8,
  "time_alive": 1386,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 17,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 17,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 24,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 12,
  "time_alive": 1397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 11,
  "time_alive": 1432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 21,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 18,
  "time_alive": 1285,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 19,
  "time_alive": 1219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 2,
  "time_alive": 1534,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:d2fe75ba95fa4295a0c53a015824c0a9:f540d4d752174b598f4b9f85b99e4384",
  "placement": 20,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 31,
  "time_alive": 357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 6,
  "time_alive": 1472,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 18,
  "time_alive": 1374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 14,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 18,
  "time_alive": 1309,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 7,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 19,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 16,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 28,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 21,
  "time_alive": 1046,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 9,
  "time_alive": 1406,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 13,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 19,
  "time_alive": 1214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 13,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 14,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 10,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 21,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 20,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 27,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 3,
  "time_alive": 1509,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 6,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 24,
  "time_alive": 1005,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 15,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 26,
  "time_alive": 466,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 23,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 19,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 2,
  "time_alive": 1500,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 10,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 6,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 31,
  "time_alive": 508,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 20,
  "time_alive": 1204,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 23,
  "time_alive": 1049,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 29,
  "time_alive": 804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 30,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 22,
  "time_alive": 1041,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:c31c40ca2c3741a296e81930f42c1c55:d9bb1522642d4de58999f17c244e909a",
  "placement": 25,
  "time_alive": 490,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 23,
  "time_alive": 1082,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 15,
  "time_alive": 1333,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 26,
  "time_alive": 568,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 25,
  "time_alive": 999,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 14,
  "time_alive": 1372,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 8,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 23,
  "time_alive": 1169,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 30,
  "time_alive": 334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 25,
  "time_alive": 1010,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 17,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 21,
  "time_alive": 1044,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "7722884f5146440699591978f5563953:9942822dd25b409591a936ed3eb4c1ac:de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 19,
  "time_alive": 1247,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 20,
  "time_alive": 1202,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 8,
  "time_alive": 1457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 32,
  "time_alive": 283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 21,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 30,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 24,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 29,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 24,
  "time_alive": 975,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 20,
  "time_alive": 1231,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 10,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 31,
  "time_alive": 224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "a396550c25134720b4530089ee26fe35:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 10,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 27,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 29,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 31,
  "time_alive": 350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 29,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 16,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 14,
  "time_alive": 1391,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 25,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 19,
  "time_alive": 1229,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 15,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 8,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "38e1686622b641a399838abb0cba9493:54aaf20cfb0a4ba4ade959a258390b35:e9936643249f40f7bd8738a650c04512",
  "placement": 27,
  "time_alive": 657,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 22,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 14,
  "time_alive": 1366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 20,
  "time_alive": 1241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 4,
  "time_alive": 1485,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 31,
  "time_alive": 234,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 17,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 24,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 25,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 24,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 20,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 25,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "231ef7fe16c14fd483303852f1e85673:ade4d3b78a764b2d861e5b382886b70d:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 30,
  "time_alive": 115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 30,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 13,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 22,
  "time_alive": 1137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 10,
  "time_alive": 1421,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 33,
  "time_alive": 114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 25,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 17,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 17,
  "time_alive": 1245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 16,
  "time_alive": 1302,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 16,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 23,
  "time_alive": 1019,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "8f182f961a3b412c91e9a263f9c7f811:c6a2eb33a68a46bb86b0c0d2001fa452:d825a5fcfcfa4f3c9e3a11555c8a1fb0",
  "placement": 21,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 29,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 14,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 32,
  "time_alive": 341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 25,
  "time_alive": 661,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 27,
  "time_alive": 702,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 27,
  "time_alive": 676,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 22,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 31,
  "time_alive": 235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 14,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 32,
  "time_alive": 269,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 32,
  "time_alive": 193,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "065e9fbe90c64b119185967580b932b1:e614ed7521584e08bbfc1af6c0165e1d:efcb3e576540466f926b74f93fca5fb5",
  "placement": 29,
  "time_alive": 139,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 20,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 16,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 27,
  "time_alive": 401,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 26,
  "time_alive": 924,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 26,
  "time_alive": 831,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 20,
  "time_alive": 1235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 26,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 30,
  "time_alive": 463,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 27,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 26,
  "time_alive": 745,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "897e866d97af44d78d333c7f9b4e9033:ef8c3b1fdb894ff4a7657c08d5b4a117:ff2a3a83d36b4d30872581abd40b2ca2",
  "placement": 31,
  "time_alive": 108,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 24,
  "time_alive": 1026,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 30,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 21,
  "time_alive": 1165,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 25,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 22,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 28,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 28,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 33,
  "time_alive": 129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 33,
  "time_alive": 259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a1d9e7c-f01e-4252-b5ad-2f80759791bd",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 24,
  "time_alive": 1017,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e5c17c9e-e152-48e5-84bb-78bab2804898",
  "team_id": "181af74c136d4648b34568dbd387f32c:29d53632449a46ea8d7d99af55da591f:31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 27,
  "time_alive": 408,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16286fb8-0db2-475a-adc9-d8a1ec826a17",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 32,
  "time_alive": 139,
  "elims": 1,
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
    