const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 82,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 56,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 43,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 95,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 59,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 43,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 60,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 33,
  "time_alive": 1355,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 5,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 69,
  "time_alive": 769,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 87,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 98,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 87,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 93,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 40,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 39,
  "time_alive": 1348,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 44,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 75,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 73,
  "time_alive": 477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 52,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 70,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 49,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 61,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 44,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 17,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 38,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 54,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 13,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 38,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 52,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 88,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 83,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 37,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 20,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 52,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 62,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 42,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 22,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 23,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 67,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 51,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 79,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 92,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "afcff2b29bca462cb7733a1f1db8a1f5",
  "placement": 78,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "afcff2b29bca462cb7733a1f1db8a1f5",
  "placement": 47,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "afcff2b29bca462cb7733a1f1db8a1f5",
  "placement": 46,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "afcff2b29bca462cb7733a1f1db8a1f5",
  "placement": 67,
  "time_alive": 880,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "afcff2b29bca462cb7733a1f1db8a1f5",
  "placement": 36,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "afcff2b29bca462cb7733a1f1db8a1f5",
  "placement": 58,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "4f0d7b2c836341989dbe6e322f652b00",
  "placement": 81,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "4f0d7b2c836341989dbe6e322f652b00",
  "placement": 57,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "4f0d7b2c836341989dbe6e322f652b00",
  "placement": 53,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "4f0d7b2c836341989dbe6e322f652b00",
  "placement": 70,
  "time_alive": 860,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "4f0d7b2c836341989dbe6e322f652b00",
  "placement": 30,
  "time_alive": 1355,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "4f0d7b2c836341989dbe6e322f652b00",
  "placement": 74,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 90,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 46,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 95,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 97,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 95,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 20,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 75,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 62,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 43,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 78,
  "time_alive": 496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 84,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 24,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 92,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 11,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 53,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 54,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 78,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 33,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 81,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 88,
  "time_alive": 431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 68,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 76,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 29,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "5b8e347345c24e92aef2da7b55080fca",
  "placement": 73,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "5b8e347345c24e92aef2da7b55080fca",
  "placement": 78,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "5b8e347345c24e92aef2da7b55080fca",
  "placement": 40,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "5b8e347345c24e92aef2da7b55080fca",
  "placement": 39,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "5b8e347345c24e92aef2da7b55080fca",
  "placement": 49,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 46,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 36,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 58,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 92,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 66,
  "time_alive": 790,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 50,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "ea2c176cc1e24209b30c1f81f65ea423",
  "placement": 38,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "ea2c176cc1e24209b30c1f81f65ea423",
  "placement": 59,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "ea2c176cc1e24209b30c1f81f65ea423",
  "placement": 38,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "ea2c176cc1e24209b30c1f81f65ea423",
  "placement": 45,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "ea2c176cc1e24209b30c1f81f65ea423",
  "placement": 55,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "ea2c176cc1e24209b30c1f81f65ea423",
  "placement": 76,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "563dd5dfec1e49d98f2b5027a87077ac",
  "placement": 93,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "563dd5dfec1e49d98f2b5027a87077ac",
  "placement": 26,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "563dd5dfec1e49d98f2b5027a87077ac",
  "placement": 34,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "563dd5dfec1e49d98f2b5027a87077ac",
  "placement": 55,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "563dd5dfec1e49d98f2b5027a87077ac",
  "placement": 37,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "563dd5dfec1e49d98f2b5027a87077ac",
  "placement": 89,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 98,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 67,
  "time_alive": 834,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 60,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 41,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 31,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 65,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 71,
  "time_alive": 717,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 73,
  "time_alive": 700,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 85,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 62,
  "time_alive": 1055,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 67,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 61,
  "time_alive": 800,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 80,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 83,
  "time_alive": 369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 66,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 15,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 82,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 80,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 89,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 48,
  "time_alive": 1282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 94,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 66,
  "time_alive": 882,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 59,
  "time_alive": 1026,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 82,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 49,
  "time_alive": 1249,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 31,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 98,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 96,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 94,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 59,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 66,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 76,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 72,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 86,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 38,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 37,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c0924ced26d6430fa481853fa480a411",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "c0924ced26d6430fa481853fa480a411",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c0924ced26d6430fa481853fa480a411",
  "placement": 97,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c0924ced26d6430fa481853fa480a411",
  "placement": 94,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c0924ced26d6430fa481853fa480a411",
  "placement": 35,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c0924ced26d6430fa481853fa480a411",
  "placement": 72,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 67,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 60,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 36,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 77,
  "time_alive": 531,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 87,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 74,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 61,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 39,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 47,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 77,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 81,
  "time_alive": 384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 37,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 27,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 83,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 89,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 86,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 84,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 91,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 82,
  "time_alive": 376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 63,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 93,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 40,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 71,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "7a41f89aea154d7aafd9e03a96cda5e7",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "7a41f89aea154d7aafd9e03a96cda5e7",
  "placement": 71,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "7a41f89aea154d7aafd9e03a96cda5e7",
  "placement": 35,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "7a41f89aea154d7aafd9e03a96cda5e7",
  "placement": 83,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "7a41f89aea154d7aafd9e03a96cda5e7",
  "placement": 74,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "7a41f89aea154d7aafd9e03a96cda5e7",
  "placement": 75,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 52,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 88,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 84,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 80,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 61,
  "time_alive": 950,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 54,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "3affaf5cf5b14125a06f560ea9d9dc83",
  "placement": 69,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "3affaf5cf5b14125a06f560ea9d9dc83",
  "placement": 86,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "3affaf5cf5b14125a06f560ea9d9dc83",
  "placement": 89,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "3affaf5cf5b14125a06f560ea9d9dc83",
  "placement": 61,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "3affaf5cf5b14125a06f560ea9d9dc83",
  "placement": 64,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "3affaf5cf5b14125a06f560ea9d9dc83",
  "placement": 63,
  "time_alive": 780,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 86,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 38,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 57,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 63,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 92,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 94,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 76,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 43,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 52,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 87,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 82,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 96,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 80,
  "time_alive": 567,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 72,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 44,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 57,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 72,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 64,
  "time_alive": 984,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 88,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 63,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 63,
  "time_alive": 1033,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 90,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 76,
  "time_alive": 571,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 89,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 95,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 79,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 55,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 92,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 91,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 85,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 90,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 47,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 87,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 92,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 51,
  "time_alive": 1227,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 14,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1555,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 68,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1544,
  "elims": 11,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1449,
  "elims": 11,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 15,
  "time_alive": 1424,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 1,
  "time_alive": 1540,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 30,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 31,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 44,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 17,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 36,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 4,
  "time_alive": 1518,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 77,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 22,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 5,
  "time_alive": 1518,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "78adba4307684249b39b8433fd659d00",
  "placement": 2,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 6,
  "time_alive": 1480,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 18,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 22,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 9,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 50,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 12,
  "time_alive": 1413,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 91,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 2,
  "time_alive": 1540,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 1,
  "time_alive": 1555,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 12,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b",
  "placement": 79,
  "time_alive": 431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 10,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 89,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 32,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 1,
  "time_alive": 1535,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 79,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "272a09797b5845c08c40a80dae51e056",
  "placement": 54,
  "time_alive": 973,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 1,
  "time_alive": 1525,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 9,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 48,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 57,
  "time_alive": 1178,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 8,
  "time_alive": 1507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 64,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 2,
  "time_alive": 1525,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 10,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 7,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 89,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 92,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 75,
  "time_alive": 491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 9,
  "time_alive": 1465,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 52,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 4,
  "time_alive": 1511,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 52,
  "time_alive": 1209,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 23,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6",
  "placement": 74,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 13,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 49,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 99,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 2,
  "time_alive": 1535,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 16,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 45,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 5,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 28,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 72,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 24,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 6,
  "time_alive": 1513,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 53,
  "time_alive": 1021,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 8,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 54,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 56,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 10,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 3,
  "time_alive": 1537,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 49,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 29,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 6,
  "time_alive": 1512,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 12,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 34,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 58,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 5,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 25,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 42,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 69,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 96,
  "time_alive": 154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 13,
  "time_alive": 1448,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "74fe530a19cf445fa4262b01c901cddd",
  "placement": 9,
  "time_alive": 1431,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 96,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 5,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 25,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 14,
  "time_alive": 1457,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 48,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 69,
  "time_alive": 627,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 49,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 94,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 20,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 6,
  "time_alive": 1492,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 19,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 14,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 45,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 21,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 51,
  "time_alive": 1211,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 13,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 4,
  "time_alive": 1537,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "43c0937a1b724e3988ef1e182ecefc23",
  "placement": 50,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 64,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 84,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 13,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 3,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 14,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2",
  "placement": 59,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 30,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 100,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 16,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 1,
  "time_alive": 1544,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 72,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 32,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 16,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 29,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 61,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 27,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 18,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 75,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 29,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 64,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 32,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 9,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 4,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 60,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 85,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 19,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 5,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 30,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 15,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 7,
  "time_alive": 1508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 9,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 38,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 17,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 26,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 4,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 79,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 53,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 30,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 15,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 27,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 57,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 83,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 35,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 78,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 11,
  "time_alive": 1493,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "76c425fe12b24731b3ec7d740a4f9776",
  "placement": 3,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "c371e935468641d69332e5919b0e6f8b",
  "placement": 12,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "c371e935468641d69332e5919b0e6f8b",
  "placement": 71,
  "time_alive": 931,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "c371e935468641d69332e5919b0e6f8b",
  "placement": 16,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "c371e935468641d69332e5919b0e6f8b",
  "placement": 87,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "c371e935468641d69332e5919b0e6f8b",
  "placement": 7,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "c371e935468641d69332e5919b0e6f8b",
  "placement": 82,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 40,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 47,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 42,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 50,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 31,
  "time_alive": 1355,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 7,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 16,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 81,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 46,
  "time_alive": 1254,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 15,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 22,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 66,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 3,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 15,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 76,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 42,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 77,
  "time_alive": 795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 32,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 94,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 39,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 37,
  "time_alive": 1346,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 25,
  "time_alive": 1404,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 28,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 41,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 43,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 64,
  "time_alive": 1062,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 14,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 46,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 29,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 28,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "5ffacf06d15e438286b8e0af5f72eb73",
  "placement": 46,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "5ffacf06d15e438286b8e0af5f72eb73",
  "placement": 19,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "5ffacf06d15e438286b8e0af5f72eb73",
  "placement": 85,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "5ffacf06d15e438286b8e0af5f72eb73",
  "placement": 41,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "5ffacf06d15e438286b8e0af5f72eb73",
  "placement": 51,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "5ffacf06d15e438286b8e0af5f72eb73",
  "placement": 10,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 28,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 56,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 3,
  "time_alive": 1514,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 56,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 71,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 44,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 18,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 17,
  "time_alive": 1407,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 94,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 75,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 25,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 14,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 55,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 80,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 11,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 76,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 22,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 77,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 46,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 88,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 4,
  "time_alive": 1523,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 26,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 37,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "7b6bce734e9c4a7695fcbcb865f53345",
  "placement": 21,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "7b6bce734e9c4a7695fcbcb865f53345",
  "placement": 34,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "7b6bce734e9c4a7695fcbcb865f53345",
  "placement": 52,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "7b6bce734e9c4a7695fcbcb865f53345",
  "placement": 26,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "7b6bce734e9c4a7695fcbcb865f53345",
  "placement": 32,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "7b6bce734e9c4a7695fcbcb865f53345",
  "placement": 33,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "8b0e3413aaad469394df36a499f3605f",
  "placement": 73,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "8b0e3413aaad469394df36a499f3605f",
  "placement": 11,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "8b0e3413aaad469394df36a499f3605f",
  "placement": 45,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "8b0e3413aaad469394df36a499f3605f",
  "placement": 82,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "8b0e3413aaad469394df36a499f3605f",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "8b0e3413aaad469394df36a499f3605f",
  "placement": 19,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "fc0ee3edaea84148ad91f1f926a42331",
  "placement": 26,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "fc0ee3edaea84148ad91f1f926a42331",
  "placement": 20,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "fc0ee3edaea84148ad91f1f926a42331",
  "placement": 91,
  "time_alive": 291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "fc0ee3edaea84148ad91f1f926a42331",
  "placement": 23,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "fc0ee3edaea84148ad91f1f926a42331",
  "placement": 33,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "fc0ee3edaea84148ad91f1f926a42331",
  "placement": 47,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 65,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 50,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 38,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 12,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 25,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 31,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 11,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 53,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 18,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 44,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 67,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 30,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 34,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 32,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 26,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 20,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 68,
  "time_alive": 996,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 71,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 56,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 12,
  "time_alive": 1481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 23,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 33,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 62,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09",
  "placement": 34,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 39,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 86,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 87,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 18,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 42,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 13,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 17,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 48,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 17,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 69,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 24,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 86,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 76,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 90,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 6,
  "time_alive": 1494,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 60,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 63,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "765df88b420f452ba6682fc549bf2231",
  "placement": 24,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 70,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 22,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 10,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 55,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 73,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 60,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 78,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 72,
  "time_alive": 888,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 15,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 28,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 74,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 16,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 89,
  "time_alive": 655,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 3,
  "time_alive": 1523,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 65,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 83,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 54,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 61,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 27,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 95,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 21,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 34,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 55,
  "time_alive": 968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "4a9f5b60d3454796860845940c3289ee",
  "placement": 88,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "4a9f5b60d3454796860845940c3289ee",
  "placement": 40,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "4a9f5b60d3454796860845940c3289ee",
  "placement": 49,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "4a9f5b60d3454796860845940c3289ee",
  "placement": 64,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "4a9f5b60d3454796860845940c3289ee",
  "placement": 36,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "4a9f5b60d3454796860845940c3289ee",
  "placement": 6,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 30,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 45,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 60,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 49,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 57,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 8,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 20,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 63,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 8,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 72,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 82,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 43,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 31,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 60,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 58,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 65,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 18,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 38,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 42,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 38,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 24,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 53,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 86,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 48,
  "time_alive": 1210,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 67,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 23,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 44,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 43,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 64,
  "time_alive": 1065,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 35,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 63,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 67,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 50,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 37,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 10,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 57,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7",
  "placement": 37,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7",
  "placement": 61,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7",
  "placement": 5,
  "time_alive": 1510,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7",
  "placement": 94,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7",
  "placement": 85,
  "time_alive": 260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "97014e9c00cc40c1b08863ab22bd45a1",
  "placement": 38,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "97014e9c00cc40c1b08863ab22bd45a1",
  "placement": 44,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "97014e9c00cc40c1b08863ab22bd45a1",
  "placement": 68,
  "time_alive": 1038,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "97014e9c00cc40c1b08863ab22bd45a1",
  "placement": 36,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "97014e9c00cc40c1b08863ab22bd45a1",
  "placement": 39,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "97014e9c00cc40c1b08863ab22bd45a1",
  "placement": 42,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "43978dba168744c59b15403aff7d1371",
  "placement": 48,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "43978dba168744c59b15403aff7d1371",
  "placement": 82,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "43978dba168744c59b15403aff7d1371",
  "placement": 11,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "43978dba168744c59b15403aff7d1371",
  "placement": 47,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "43978dba168744c59b15403aff7d1371",
  "placement": 37,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "43978dba168744c59b15403aff7d1371",
  "placement": 83,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "65aa5d99d746499b8af29b109800bda9",
  "placement": 72,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "65aa5d99d746499b8af29b109800bda9",
  "placement": 66,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "65aa5d99d746499b8af29b109800bda9",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "65aa5d99d746499b8af29b109800bda9",
  "placement": 88,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "65aa5d99d746499b8af29b109800bda9",
  "placement": 38,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "65aa5d99d746499b8af29b109800bda9",
  "placement": 20,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 35,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 27,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 43,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 48,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 47,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 46,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 66,
  "time_alive": 1097,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 87,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 63,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 63,
  "time_alive": 1149,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 93,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "c46c24e9b11a4d9a9b297d32f2ee19aa",
  "placement": 11,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "70a8e8f746674210b2daa53e783f9c53",
  "placement": 68,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "70a8e8f746674210b2daa53e783f9c53",
  "placement": 62,
  "time_alive": 1107,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "70a8e8f746674210b2daa53e783f9c53",
  "placement": 19,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "70a8e8f746674210b2daa53e783f9c53",
  "placement": 45,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "70a8e8f746674210b2daa53e783f9c53",
  "placement": 63,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 86,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 65,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 28,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 27,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 49,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 70,
  "time_alive": 580,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 54,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 51,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 79,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 7,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 78,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 40,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "c3509ec5f975405684c111215f18d41f",
  "placement": 22,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "c3509ec5f975405684c111215f18d41f",
  "placement": 80,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "c3509ec5f975405684c111215f18d41f",
  "placement": 34,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "c3509ec5f975405684c111215f18d41f",
  "placement": 74,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "c3509ec5f975405684c111215f18d41f",
  "placement": 56,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "f22e91ef067141ebac162cd99573b9fd",
  "placement": 87,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "f22e91ef067141ebac162cd99573b9fd",
  "placement": 26,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "f22e91ef067141ebac162cd99573b9fd",
  "placement": 59,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "f22e91ef067141ebac162cd99573b9fd",
  "placement": 40,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "f22e91ef067141ebac162cd99573b9fd",
  "placement": 35,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "f22e91ef067141ebac162cd99573b9fd",
  "placement": 81,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 7,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 57,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 81,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 73,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 83,
  "time_alive": 517,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "3b6db23ca6a541a8bc7a5068116bafe9",
  "placement": 67,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "abe8ed75906c4864860f1229bfefbc10",
  "placement": 79,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "abe8ed75906c4864860f1229bfefbc10",
  "placement": 68,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "abe8ed75906c4864860f1229bfefbc10",
  "placement": 21,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "abe8ed75906c4864860f1229bfefbc10",
  "placement": 85,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "abe8ed75906c4864860f1229bfefbc10",
  "placement": 69,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "abe8ed75906c4864860f1229bfefbc10",
  "placement": 21,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 24,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 24,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 73,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 80,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 46,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 91,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "77999a7f609d40bbb621223df590b4d2",
  "placement": 33,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "77999a7f609d40bbb621223df590b4d2",
  "placement": 27,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "77999a7f609d40bbb621223df590b4d2",
  "placement": 67,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "77999a7f609d40bbb621223df590b4d2",
  "placement": 43,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "77999a7f609d40bbb621223df590b4d2",
  "placement": 93,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 33,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 58,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 47,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 58,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 60,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 39,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "7a9d7d8038e642c49d1d019c94a7ab6c",
  "placement": 83,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "7a9d7d8038e642c49d1d019c94a7ab6c",
  "placement": 13,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "7a9d7d8038e642c49d1d019c94a7ab6c",
  "placement": 39,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "7a9d7d8038e642c49d1d019c94a7ab6c",
  "placement": 35,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "7a9d7d8038e642c49d1d019c94a7ab6c",
  "placement": 88,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "7a9d7d8038e642c49d1d019c94a7ab6c",
  "placement": 88,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 85,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 70,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 90,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 17,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 85,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "e02a1f799cae4e24ab4609717150cf4d",
  "placement": 56,
  "time_alive": 936,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 41,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 69,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 40,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 71,
  "time_alive": 918,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 70,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 52,
  "time_alive": 1071,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 19,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 78,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 78,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 45,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 91,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 62,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "6c34ff314d88437d8a66cd131b936d10",
  "placement": 97,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "6c34ff314d88437d8a66cd131b936d10",
  "placement": 59,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "6c34ff314d88437d8a66cd131b936d10",
  "placement": 61,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "6c34ff314d88437d8a66cd131b936d10",
  "placement": 29,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "6c34ff314d88437d8a66cd131b936d10",
  "placement": 21,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "6c34ff314d88437d8a66cd131b936d10",
  "placement": 77,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 52,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 8,
  "time_alive": 1499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 86,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 54,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 41,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 87,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 84,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 92,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 54,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 8,
  "time_alive": 1480,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 84,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 78,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "c2eb271a63aa45e39c80316cc6955886",
  "placement": 23,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "c2eb271a63aa45e39c80316cc6955886",
  "placement": 31,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "c2eb271a63aa45e39c80316cc6955886",
  "placement": 67,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "c2eb271a63aa45e39c80316cc6955886",
  "placement": 81,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "c2eb271a63aa45e39c80316cc6955886",
  "placement": 80,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "c2eb271a63aa45e39c80316cc6955886",
  "placement": 58,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 44,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 43,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 82,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 59,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 61,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "b08b963b721140369df683b4b8f8dd93",
  "placement": 65,
  "time_alive": 742,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 81,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 36,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 75,
  "time_alive": 850,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 39,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 97,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "a0541330374b41618d58a337b8c76b12",
  "placement": 92,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 50,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 73,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 74,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 99,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 75,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "ed348b9e0f394f1f8667ca7a511709b0",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "4c9d8c540a8448669636b98bcc4ef934",
  "placement": 80,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "4c9d8c540a8448669636b98bcc4ef934",
  "placement": 91,
  "time_alive": 356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "4c9d8c540a8448669636b98bcc4ef934",
  "placement": 33,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "4c9d8c540a8448669636b98bcc4ef934",
  "placement": 62,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "4c9d8c540a8448669636b98bcc4ef934",
  "placement": 98,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "4c9d8c540a8448669636b98bcc4ef934",
  "placement": 51,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 47,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 35,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 97,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 90,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 89,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "abdb56da839f43fea231293d085d38cb",
  "placement": 80,
  "time_alive": 424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 90,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 88,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 96,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 98,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 20,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "df07624687ec4fe497c2f739f39ea38f",
  "placement": 84,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "211c2f0bb56b446a92b3f6cd8c2bb3bd",
  "placement": 95,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "211c2f0bb56b446a92b3f6cd8c2bb3bd",
  "placement": 62,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "211c2f0bb56b446a92b3f6cd8c2bb3bd",
  "placement": 83,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "211c2f0bb56b446a92b3f6cd8c2bb3bd",
  "placement": 70,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "211c2f0bb56b446a92b3f6cd8c2bb3bd",
  "placement": 52,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "211c2f0bb56b446a92b3f6cd8c2bb3bd",
  "placement": 23,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "4c9e4e91f90746dd9ecc5df7e0cbaee3",
  "placement": 61,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "4c9e4e91f90746dd9ecc5df7e0cbaee3",
  "placement": 57,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "4c9e4e91f90746dd9ecc5df7e0cbaee3",
  "placement": 66,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "4c9e4e91f90746dd9ecc5df7e0cbaee3",
  "placement": 81,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "4c9e4e91f90746dd9ecc5df7e0cbaee3",
  "placement": 68,
  "time_alive": 628,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 62,
  "time_alive": 1112,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 37,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 89,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 84,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 95,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 59,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 74,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 41,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 93,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 66,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 53,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 55,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 86,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 55,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 36,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 71,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 25,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 95,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 92,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 90,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 74,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 41,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 71,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 91,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 65,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "8e57aa7681e94e4cb79dd3af45057b61",
  "placement": 76,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 55,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 93,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 70,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 77,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 87,
  "time_alive": 410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 90,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 92,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 97,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 93,
  "time_alive": 274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 76,
  "time_alive": 825,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 72,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 73,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 93,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 96,
  "time_alive": 150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 92,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 51,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 59,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "373fff00-32d5-42b1-ba96-e5a6d3f59454",
  "team_id": "eef51017417b416daef84f6d8889269a",
  "placement": 89,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 69,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 75,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 84,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "524aaadc17b54853a38a28255aaae12a",
  "placement": 97,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 82,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 76,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 66,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 79,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10107d65-140d-4eac-9e37-6494483537db",
  "team_id": "d96c88e476a34ba08e2947316ab4c73f",
  "placement": 96,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "114310b0-1a4d-495d-8c57-7454ec35e43c",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 58,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a958b3-be2c-40b7-8ce7-470623a75069",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 77,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05bdc0c5-106a-40ed-8b3d-38d280830610",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 98,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "11bc447e-9bed-43e0-b58d-72488245e999",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 95,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 7,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 2,
  "time_alive": 1542,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 1,
  "time_alive": 1531,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 7,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 1,
  "time_alive": 1531,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 9,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 73,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 62,
  "time_alive": 1081,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 8,
  "time_alive": 1481,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 52,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 2,
  "time_alive": 1531,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 2,
  "time_alive": 1520,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 4,
  "time_alive": 1516,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 79,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 9,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 4,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 33,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 3,
  "time_alive": 1510,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 31,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 1,
  "time_alive": 1542,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 6,
  "time_alive": 1501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 29,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 5,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 39,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 15,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 14,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 39,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 15,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 16,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 13,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 11,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 9,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 24,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 18,
  "time_alive": 1436,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 30,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 17,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 87,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 7,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 54,
  "time_alive": 1142,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 64,
  "time_alive": 897,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 11,
  "time_alive": 1442,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 6,
  "time_alive": 1469,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 48,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 15,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 30,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1502,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 60,
  "time_alive": 1042,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 4,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 19,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 55,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 4,
  "time_alive": 1513,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 22,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 6,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 56,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 35,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 23,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 24,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 44,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 12,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 89,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 19,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 11,
  "time_alive": 1465,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 24,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 5,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 50,
  "time_alive": 1273,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 43,
  "time_alive": 1326,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 49,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 6,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 9,
  "time_alive": 1446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 8,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 5,
  "time_alive": 1507,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 16,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 7,
  "time_alive": 1496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 60,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 79,
  "time_alive": 497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 7,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 16,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 37,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 16,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 17,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 58,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 36,
  "time_alive": 1274,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 14,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 42,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 56,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 13,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 13,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 59,
  "time_alive": 1024,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 20,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 3,
  "time_alive": 1533,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 25,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 59,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 49,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 30,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 41,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 48,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 75,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 41,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 57,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 1,
  "time_alive": 1520,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 28,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 11,
  "time_alive": 1471,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 74,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 53,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 74,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 10,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 3,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 13,
  "time_alive": 1469,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 52,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 67,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 27,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 63,
  "time_alive": 734,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 12,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 5,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 14,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 84,
  "time_alive": 275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 95,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 25,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 91,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 95,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 3,
  "time_alive": 1494,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 58,
  "time_alive": 1043,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 25,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 66,
  "time_alive": 1030,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 27,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 38,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 12,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 34,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 46,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 92,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 23,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 9,
  "time_alive": 1476,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 28,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 21,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 17,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 65,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 2,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 66,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 90,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "722957a8f7924ec0afaeb3c5971c3014",
  "placement": 27,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 6,
  "time_alive": 1503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 41,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 93,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 4,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 75,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 22,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 46,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 15,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 33,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 17,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 42,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 8,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 35,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 77,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 12,
  "time_alive": 1460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 19,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 65,
  "time_alive": 699,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 55,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 4,
  "time_alive": 1516,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 37,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 70,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 45,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 24,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 90,
  "time_alive": 264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 95,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 76,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 1,
  "time_alive": 1502,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 35,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 60,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 21,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 85,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 11,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 47,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 21,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 80,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 56,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 39,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 10,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 35,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 37,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81",
  "placement": 32,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 33,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 17,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 85,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 30,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 26,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 91,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08cf7c56-a95f-4128-9930-8f2a9496b75f",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 10,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ee7ea97-b230-49f9-a287-20d813be3fca",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 33,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04d4e449-b252-4c19-84d3-c2f749d31fd4",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 61,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0764035d-c607-44fe-a691-d606fb742f95",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 23,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0622294f-ec63-46ca-9b93-2cb98f77d303",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 70,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c9b5636-237d-468b-bf9b-2a5279e16ab3",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 53,
  "time_alive": 1096,
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
    