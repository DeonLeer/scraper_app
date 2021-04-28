const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 26,
  "time_alive": 993,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 16,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 7,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 12,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 28,
  "time_alive": 510,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 22,
  "time_alive": 1068,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 29,
  "time_alive": 470,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 31,
  "time_alive": 173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 9,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 8,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 20,
  "time_alive": 1291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 11,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 12,
  "time_alive": 1392,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 17,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 31,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 8,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 17,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 5,
  "time_alive": 1471,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 19,
  "time_alive": 1254,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 11,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 18,
  "time_alive": 1328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 15,
  "time_alive": 1367,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 15,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 29,
  "time_alive": 643,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 18,
  "time_alive": 1270,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 28,
  "time_alive": 910,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 16,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 29,
  "time_alive": 697,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 14,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 2,
  "time_alive": 1501,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 26,
  "time_alive": 851,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 25,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 6,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 28,
  "time_alive": 472,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 9,
  "time_alive": 1376,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 21,
  "time_alive": 1206,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 5,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 25,
  "time_alive": 1002,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 18,
  "time_alive": 1285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 30,
  "time_alive": 569,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 24,
  "time_alive": 956,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 26,
  "time_alive": 859,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 13,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 17,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 23,
  "time_alive": 975,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 6,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 1,
  "time_alive": 1578,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 19,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 22,
  "time_alive": 1063,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 27,
  "time_alive": 972,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 11,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 29,
  "time_alive": 400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 33,
  "time_alive": 268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 23,
  "time_alive": 1062,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 7,
  "time_alive": 1426,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 11,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 12,
  "time_alive": 1455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 21,
  "time_alive": 1172,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 4,
  "time_alive": 1518,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 10,
  "time_alive": 1456,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 10,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 26,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 23,
  "time_alive": 1026,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 13,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 22,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 10,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 26,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 14,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 23,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 24,
  "time_alive": 1046,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 22,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 15,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 16,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 30,
  "time_alive": 520,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 17,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 7,
  "time_alive": 1388,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 12,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 18,
  "time_alive": 1323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 5,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 18,
  "time_alive": 1399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 29,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 9,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 26,
  "time_alive": 990,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 26,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 25,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 8,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 27,
  "time_alive": 841,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 5,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 28,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 22,
  "time_alive": 1015,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 14,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 20,
  "time_alive": 1285,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 22,
  "time_alive": 1165,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 21,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 20,
  "time_alive": 1249,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 23,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 23,
  "time_alive": 964,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 17,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 14,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 24,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 21,
  "time_alive": 1142,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 16,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 3,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 9,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 32,
  "time_alive": 183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 32,
  "time_alive": 415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 19,
  "time_alive": 1267,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 13,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 30,
  "time_alive": 297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 31,
  "time_alive": 404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 9,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 23,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 10,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 6,
  "time_alive": 1431,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 25,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 27,
  "time_alive": 901,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 28,
  "time_alive": 941,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 20,
  "time_alive": 1229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 8,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 27,
  "time_alive": 847,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 8,
  "time_alive": 1374,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 9,
  "time_alive": 1446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 30,
  "time_alive": 391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 18,
  "time_alive": 1266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 33,
  "time_alive": 191,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 32,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 17,
  "time_alive": 1330,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 24,
  "time_alive": 1062,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 17,
  "time_alive": 1306,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 30,
  "time_alive": 508,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 21,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 31,
  "time_alive": 348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 32,
  "time_alive": 129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 29,
  "time_alive": 584,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 18,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 6,
  "time_alive": 1392,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 26,
  "time_alive": 933,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 17,
  "time_alive": 1331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 13,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 17,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 25,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 12,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 24,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 28,
  "time_alive": 845,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 10,
  "time_alive": 1363,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 32,
  "time_alive": 309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 31,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 16,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 13,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 21,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 18,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 13,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 14,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 11,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 29,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 16,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 19,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 12,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 12,
  "time_alive": 1374,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 26,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 20,
  "time_alive": 1177,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 19,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 31,
  "time_alive": 324,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 31,
  "time_alive": 371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 2,
  "time_alive": 1496,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 23,
  "time_alive": 1049,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 23,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 17,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 21,
  "time_alive": 1032,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 25,
  "time_alive": 984,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 23,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 12,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 31,
  "time_alive": 432,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 29,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 28,
  "time_alive": 512,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 33,
  "time_alive": 120,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 16,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 31,
  "time_alive": 445,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 32,
  "time_alive": 255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 33,
  "time_alive": 170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 27,
  "time_alive": 571,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 11,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 22,
  "time_alive": 1042,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 30,
  "time_alive": 231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 27,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 31,
  "time_alive": 184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 29,
  "time_alive": 380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 32,
  "time_alive": 271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 30,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 29,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 17,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 24,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 18,
  "time_alive": 1215,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 21,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 20,
  "time_alive": 1247,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 20,
  "time_alive": 1095,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 30,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 26,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 24,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 25,
  "time_alive": 965,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 10,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 2,
  "time_alive": 1521,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 8,
  "time_alive": 1460,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 28,
  "time_alive": 535,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 2,
  "time_alive": 1519,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1481,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1521,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 25,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1538,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 20,
  "time_alive": 1051,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 17,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 6,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 20,
  "time_alive": 1169,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1521,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 6,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 6,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1519,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 15,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 11,
  "time_alive": 1431,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 29,
  "time_alive": 643,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1456,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 21,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 11,
  "time_alive": 1388,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 28,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 16,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 9,
  "time_alive": 1455,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1490,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 26,
  "time_alive": 896,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 21,
  "time_alive": 972,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 7,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 4,
  "time_alive": 1500,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 10,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 8,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 6,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 10,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 3,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 7,
  "time_alive": 1465,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 1,
  "time_alive": 1544,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 14,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 12,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 31,
  "time_alive": 346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 2,
  "time_alive": 1521,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 5,
  "time_alive": 1495,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 15,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 4,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 9,
  "time_alive": 1400,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 22,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "181beaa62fab430596ecc32ac20c6491:1ae73eb60d1a4bed839e6690f87f5163:4985cb16109e44a6baf11718ee098872",
  "placement": 6,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "181beaa62fab430596ecc32ac20c6491:1ae73eb60d1a4bed839e6690f87f5163:4985cb16109e44a6baf11718ee098872",
  "placement": 14,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "181beaa62fab430596ecc32ac20c6491:1ae73eb60d1a4bed839e6690f87f5163:4985cb16109e44a6baf11718ee098872",
  "placement": 4,
  "time_alive": 1522,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "181beaa62fab430596ecc32ac20c6491:1ae73eb60d1a4bed839e6690f87f5163:4985cb16109e44a6baf11718ee098872",
  "placement": 30,
  "time_alive": 255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "181beaa62fab430596ecc32ac20c6491:1ae73eb60d1a4bed839e6690f87f5163:4985cb16109e44a6baf11718ee098872",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "181beaa62fab430596ecc32ac20c6491:1ae73eb60d1a4bed839e6690f87f5163:4985cb16109e44a6baf11718ee098872",
  "placement": 14,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 18,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 12,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 5,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 5,
  "time_alive": 1447,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 22,
  "time_alive": 1159,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 28,
  "time_alive": 520,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 21,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 3,
  "time_alive": 1510,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 18,
  "time_alive": 1234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 2,
  "time_alive": 1490,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 4,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 5,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 25,
  "time_alive": 1111,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 30,
  "time_alive": 653,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 21,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 7,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 25,
  "time_alive": 999,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 4,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 4,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 27,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 14,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 16,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 3,
  "time_alive": 1502,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 13,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 12,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 26,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 2,
  "time_alive": 1544,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 9,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 18,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 17,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 17,
  "time_alive": 1236,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 9,
  "time_alive": 1456,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 13,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 23,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 8,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 9,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 14,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 15,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 20,
  "time_alive": 1225,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 24,
  "time_alive": 701,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 7,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 1,
  "time_alive": 1490,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 13,
  "time_alive": 1361,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 22,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 19,
  "time_alive": 1228,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 27,
  "time_alive": 586,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 16,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 26,
  "time_alive": 593,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 19,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 18,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 30,
  "time_alive": 630,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 15,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 27,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 32,
  "time_alive": 266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 31,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 6,
  "time_alive": 1481,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 33,
  "time_alive": 418,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 32,
  "time_alive": 183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 29,
  "time_alive": 369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 27,
  "time_alive": 552,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82:ee30c24b8b22406f8fd82a6dbe8c3841:f4b918cfe0654eca898f2143665e899a",
  "placement": 5,
  "time_alive": 1448,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82:ee30c24b8b22406f8fd82a6dbe8c3841:f4b918cfe0654eca898f2143665e899a",
  "placement": 29,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82:ee30c24b8b22406f8fd82a6dbe8c3841:f4b918cfe0654eca898f2143665e899a",
  "placement": 23,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82:ee30c24b8b22406f8fd82a6dbe8c3841:f4b918cfe0654eca898f2143665e899a",
  "placement": 11,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82:ee30c24b8b22406f8fd82a6dbe8c3841:f4b918cfe0654eca898f2143665e899a",
  "placement": 14,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82:ee30c24b8b22406f8fd82a6dbe8c3841:f4b918cfe0654eca898f2143665e899a",
  "placement": 18,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 22,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 19,
  "time_alive": 1294,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 11,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 29,
  "time_alive": 471,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 20,
  "time_alive": 1164,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 16,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 32,
  "time_alive": 127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 8,
  "time_alive": 1462,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 26,
  "time_alive": 741,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 12,
  "time_alive": 1371,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 33,
  "time_alive": 96,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 29,
  "time_alive": 491,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 16,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 10,
  "time_alive": 1446,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 17,
  "time_alive": 1264,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 26,
  "time_alive": 632,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 24,
  "time_alive": 1050,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 20,
  "time_alive": 984,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 27,
  "time_alive": 1063,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 24,
  "time_alive": 951,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 453,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 21,
  "time_alive": 893,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 28,
  "time_alive": 500,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 33,
  "time_alive": 241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 9,
  "time_alive": 1375,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 31,
  "time_alive": 592,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 28,
  "time_alive": 662,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 17,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 10,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 19,
  "time_alive": 1002,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "071ecdc117164e70aad9206c986969c1:3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf",
  "placement": 8,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "071ecdc117164e70aad9206c986969c1:3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf",
  "placement": 20,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "071ecdc117164e70aad9206c986969c1:3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf",
  "placement": 7,
  "time_alive": 1477,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "071ecdc117164e70aad9206c986969c1:3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf",
  "placement": 13,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "071ecdc117164e70aad9206c986969c1:3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf",
  "placement": 30,
  "time_alive": 271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "071ecdc117164e70aad9206c986969c1:3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf",
  "placement": 24,
  "time_alive": 674,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 30,
  "time_alive": 236,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 13,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 31,
  "time_alive": 455,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 18,
  "time_alive": 1303,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 32,
  "time_alive": 130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 7,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 24,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 33,
  "time_alive": 352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 22,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 10,
  "time_alive": 1384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 23,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 8,
  "time_alive": 1396,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 23,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 17,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 27,
  "time_alive": 671,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 19,
  "time_alive": 1082,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 13,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 2,
  "time_alive": 1490,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 29,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 28,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 12,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 22,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 15,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 15,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 11,
  "time_alive": 1366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 23,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 25,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 25,
  "time_alive": 699,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 5,
  "time_alive": 1469,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 23,
  "time_alive": 897,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5081a612-ace6-4471-8573-51483eec2ec4",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 26,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 21,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 16,
  "time_alive": 1302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 33,
  "time_alive": 136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 31,
  "time_alive": 200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 25,
  "time_alive": 621,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "018aea5d-96a3-41bc-b5ee-e677b68cdfb3",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 14,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82e16cfb-8aff-4250-904e-6cfb94d78ea0",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 32,
  "time_alive": 369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13126440-0313-40c6-a467-7953510530a7",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 24,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08aa9d13-f9db-42af-8e20-733c538f9eeb",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 31,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c6f7f6f-ac29-464f-ae0f-b94487424b03",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 19,
  "time_alive": 1170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "85619cb5-883d-4dec-a308-6caa9d699750",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 30,
  "time_alive": 372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 7,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 16,
  "time_alive": 1331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 8,
  "time_alive": 1477,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 5,
  "time_alive": 1442,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 10,
  "time_alive": 1378,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 21,
  "time_alive": 764,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 15,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 1,
  "time_alive": 1528,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1520,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 25,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 2,
  "time_alive": 1541,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1480,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 5,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 4,
  "time_alive": 1528,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 14,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1495,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 23,
  "time_alive": 642,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 24,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 10,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 6,
  "time_alive": 1492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1540,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 21,
  "time_alive": 1211,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 7,
  "time_alive": 1436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1466,
  "elims": 20,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 9,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1494,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 2,
  "time_alive": 1495,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 5,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 12,
  "time_alive": 1371,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 10,
  "time_alive": 1424,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 19,
  "time_alive": 1221,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 31,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 32,
  "time_alive": 155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 15,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 32,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 8,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 8,
  "time_alive": 1447,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 11,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 15,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 14,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 2,
  "time_alive": 1503,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 25,
  "time_alive": 973,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 7,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 2,
  "time_alive": 1530,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 5,
  "time_alive": 1495,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 5,
  "time_alive": 1501,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 8,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 24,
  "time_alive": 926,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 6,
  "time_alive": 1452,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 2,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 24,
  "time_alive": 945,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 2,
  "time_alive": 1492,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 3,
  "time_alive": 1464,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 3,
  "time_alive": 1532,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 2,
  "time_alive": 1528,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 25,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 4,
  "time_alive": 1510,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 26,
  "time_alive": 712,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 17,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 25,
  "time_alive": 711,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1542,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 3,
  "time_alive": 1486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 11,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 6,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1503,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 12,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 5,
  "time_alive": 1513,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 24,
  "time_alive": 955,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 16,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 6,
  "time_alive": 1471,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 25,
  "time_alive": 696,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 17,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 11,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 23,
  "time_alive": 964,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 6,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 4,
  "time_alive": 1454,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 17,
  "time_alive": 1258,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 9,
  "time_alive": 1430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 22,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 5,
  "time_alive": 1496,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 2,
  "time_alive": 1540,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 16,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 2,
  "time_alive": 1482,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 7,
  "time_alive": 1447,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 25,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 7,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 18,
  "time_alive": 1325,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 16,
  "time_alive": 1296,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 8,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 8,
  "time_alive": 1483,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 10,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 4,
  "time_alive": 1463,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 2,
  "time_alive": 1466,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 2,
  "time_alive": 1542,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 29,
  "time_alive": 723,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 10,
  "time_alive": 1394,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 25,
  "time_alive": 639,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 8,
  "time_alive": 1435,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 17,
  "time_alive": 1273,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 19,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 15,
  "time_alive": 1410,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 19,
  "time_alive": 1259,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 23,
  "time_alive": 798,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 6,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 3,
  "time_alive": 1529,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 27,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 12,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 11,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 7,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 1,
  "time_alive": 1542,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 20,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 16,
  "time_alive": 1390,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 6,
  "time_alive": 1493,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 23,
  "time_alive": 904,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 26,
  "time_alive": 539,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 4,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 33,
  "time_alive": 126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 30,
  "time_alive": 533,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 8,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 20,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 19,
  "time_alive": 1176,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 5,
  "time_alive": 1516,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 4,
  "time_alive": 1524,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 17,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 11,
  "time_alive": 1440,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 27,
  "time_alive": 605,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 1,
  "time_alive": 1482,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 15,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 12,
  "time_alive": 1392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 6,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 27,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 18,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 13,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 17,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 9,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 4,
  "time_alive": 1514,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 21,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 1,
  "time_alive": 1541,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 5,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 30,
  "time_alive": 276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 10,
  "time_alive": 1438,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 9,
  "time_alive": 1474,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 4,
  "time_alive": 1464,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 3,
  "time_alive": 1485,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 5,
  "time_alive": 1445,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 14,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 23,
  "time_alive": 986,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 13,
  "time_alive": 1449,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 13,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 22,
  "time_alive": 1027,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 24,
  "time_alive": 795,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 10,
  "time_alive": 1403,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 28,
  "time_alive": 820,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 19,
  "time_alive": 1291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 3,
  "time_alive": 1466,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 22,
  "time_alive": 1057,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 10,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 13,
  "time_alive": 1407,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 13,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 11,
  "time_alive": 1469,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 7,
  "time_alive": 1492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 7,
  "time_alive": 1463,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 18,
  "time_alive": 1108,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 18,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 20,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 10,
  "time_alive": 1445,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 21,
  "time_alive": 972,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 12,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 25,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 3,
  "time_alive": 1527,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 1,
  "time_alive": 1530,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 12,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 12,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 30,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 11,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 14,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 15,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 20,
  "time_alive": 1011,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 16,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 16,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 7,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 6,
  "time_alive": 1495,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 27,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 9,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 18,
  "time_alive": 1265,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 12,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 17,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 13,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 30,
  "time_alive": 322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 23,
  "time_alive": 844,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 32,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 30,
  "time_alive": 284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 24,
  "time_alive": 983,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 22,
  "time_alive": 1066,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 30,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 8,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 9,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 28,
  "time_alive": 321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 13,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 4,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 26,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 26,
  "time_alive": 545,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 4,
  "time_alive": 1447,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 20,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 30,
  "time_alive": 697,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 7,
  "time_alive": 1488,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 20,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 9,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 16,
  "time_alive": 1309,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 27,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 12,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 19,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 15,
  "time_alive": 1355,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 27,
  "time_alive": 268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 2,
  "time_alive": 1542,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 21,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 10,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 17,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 25,
  "time_alive": 728,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 13,
  "time_alive": 1349,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 5,
  "time_alive": 1526,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 24,
  "time_alive": 946,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 18,
  "time_alive": 1255,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 15,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 14,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 18,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 26,
  "time_alive": 969,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 4,
  "time_alive": 1507,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 11,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 16,
  "time_alive": 1327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 25,
  "time_alive": 1120,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 33,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 14,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 21,
  "time_alive": 1077,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 6,
  "time_alive": 1436,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 26,
  "time_alive": 942,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 25,
  "time_alive": 910,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 32,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 3,
  "time_alive": 1539,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 32,
  "time_alive": 346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 6,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 26,
  "time_alive": 604,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 23,
  "time_alive": 1168,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 7,
  "time_alive": 1480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 13,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 24,
  "time_alive": 710,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 14,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 6,
  "time_alive": 1511,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 8,
  "time_alive": 1400,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 14,
  "time_alive": 1439,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 19,
  "time_alive": 1200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 11,
  "time_alive": 1435,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 15,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 29,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 32,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 16,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 31,
  "time_alive": 292,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 7,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 18,
  "time_alive": 1181,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 4,
  "time_alive": 1523,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 11,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 15,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 24,
  "time_alive": 1054,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 13,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 27,
  "time_alive": 493,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 27,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 26,
  "time_alive": 1110,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 5,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 33,
  "time_alive": 115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 33,
  "time_alive": 122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 30,
  "time_alive": 176,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 28,
  "time_alive": 385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 18,
  "time_alive": 1246,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 26,
  "time_alive": 932,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 33,
  "time_alive": 146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 3,
  "time_alive": 1531,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 21,
  "time_alive": 951,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 12,
  "time_alive": 1374,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 18,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 21,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 17,
  "time_alive": 1256,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 9,
  "time_alive": 1380,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 11,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 16,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 29,
  "time_alive": 763,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 20,
  "time_alive": 1287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 23,
  "time_alive": 1058,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 24,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 19,
  "time_alive": 991,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 31,
  "time_alive": 270,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 19,
  "time_alive": 1306,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 17,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 32,
  "time_alive": 177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 8,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 31,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 29,
  "time_alive": 297,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 32,
  "time_alive": 387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 30,
  "time_alive": 285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 29,
  "time_alive": 366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 17,
  "time_alive": 1285,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 10,
  "time_alive": 1399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 20,
  "time_alive": 1217,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 21,
  "time_alive": 1189,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 22,
  "time_alive": 985,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 9,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 17,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 28,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 31,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 15,
  "time_alive": 1301,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 29,
  "time_alive": 344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 22,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 28,
  "time_alive": 517,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 28,
  "time_alive": 463,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 22,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 30,
  "time_alive": 292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 31,
  "time_alive": 315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 23,
  "time_alive": 948,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 31,
  "time_alive": 213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 8,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 27,
  "time_alive": 636,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 33,
  "time_alive": 241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 21,
  "time_alive": 1245,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 18,
  "time_alive": 1258,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 29,
  "time_alive": 448,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "0085ff34ac254b93ab384cdbe05063f2:7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26",
  "placement": 14,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 14,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 29,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 20,
  "time_alive": 1242,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 28,
  "time_alive": 782,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 19,
  "time_alive": 1197,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 24,
  "time_alive": 474,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 11,
  "time_alive": 1417,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 27,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 9,
  "time_alive": 1480,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 31,
  "time_alive": 278,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 33,
  "time_alive": 312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 33,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 13,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 15,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 28,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 16,
  "time_alive": 1262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 13,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 22,
  "time_alive": 743,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 23,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 28,
  "time_alive": 801,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 23,
  "time_alive": 1023,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 10,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 20,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 20,
  "time_alive": 984,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 19,
  "time_alive": 1248,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 31,
  "time_alive": 284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 18,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 25,
  "time_alive": 865,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 27,
  "time_alive": 470,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 29,
  "time_alive": 190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 19,
  "time_alive": 1245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 31,
  "time_alive": 393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 12,
  "time_alive": 1453,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 14,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 14,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "0cffbabe7fab49ecb0032258666992c3:1e7a856cd4f248e0824499291cb62010:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 29,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 23,
  "time_alive": 959,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 22,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 26,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 22,
  "time_alive": 972,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 29,
  "time_alive": 242,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 20,
  "time_alive": 934,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 22,
  "time_alive": 1170,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 12,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 33,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 27,
  "time_alive": 745,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 31,
  "time_alive": 392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 31,
  "time_alive": 187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "286ff342-5ae8-4646-b8c4-6638c1972393",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 21,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0976042d-0087-4985-8788-ca06d40439a2",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 24,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0dfe6b63-8091-4a36-ad80-9f66a1781fcd",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 32,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5f9080-7c4f-471a-adc7-493b3989e319",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 29,
  "time_alive": 403,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "402b8491-7945-4f01-81d8-7be7187d95a6",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 28,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "099cca3c-2ce3-463a-96f2-b0ea655ac9a5",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 26,
  "time_alive": 391,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50f97e5f-b57f-4dfd-a480-d13db00e81fa",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 21,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb37152-3834-4670-bc89-921b2f36d939",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 26,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b0fb982-c7e3-431c-8a73-f57373a15c73",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 28,
  "time_alive": 396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07716c3a-6550-429a-8686-9a7a0b1bcd1f",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 28,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d9d6f126-70e0-4e17-980c-5e1e2c163194",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 30,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "613c2fd4-6fc8-49cd-84c2-f5d4a302e964",
  "team_id": "55a2688d2bdd49faa8483b6ca2d7e367:8dbf0dfcbfac419bafd0b7305d006b00:cd347929307d4e8ab340035678bd3119",
  "placement": 22,
  "time_alive": 864,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1540,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 14,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 6,
  "time_alive": 1468,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 17,
  "time_alive": 1329,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 5,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 6,
  "time_alive": 1511,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1524,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 9,
  "time_alive": 1447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 21,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 4,
  "time_alive": 1500,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 6,
  "time_alive": 1467,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1495,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 10,
  "time_alive": 1426,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1515,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1496,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 22,
  "time_alive": 1114,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1558,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1500,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1527,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 2,
  "time_alive": 1504,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 10,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 14,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 17,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 22,
  "time_alive": 1090,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 4,
  "time_alive": 1476,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 8,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 2,
  "time_alive": 1553,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 11,
  "time_alive": 1444,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 21,
  "time_alive": 1157,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 3,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 24,
  "time_alive": 927,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 17,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 4,
  "time_alive": 1460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1503,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 11,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 16,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 27,
  "time_alive": 892,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 5,
  "time_alive": 1495,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 2,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1531,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 20,
  "time_alive": 1191,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 24,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 10,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 9,
  "time_alive": 1409,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 10,
  "time_alive": 1425,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 2,
  "time_alive": 1503,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 19,
  "time_alive": 1130,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 33,
  "time_alive": 210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 5,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 11,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 11,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 9,
  "time_alive": 1480,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 22,
  "time_alive": 1144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 6,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 5,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1518,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 5,
  "time_alive": 1485,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 31,
  "time_alive": 373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1560,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 23,
  "time_alive": 510,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 8,
  "time_alive": 1430,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 23,
  "time_alive": 799,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 2,
  "time_alive": 1524,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 2,
  "time_alive": 1527,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 747,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 173,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 29,
  "time_alive": 555,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 13,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 13,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 30,
  "time_alive": 608,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 2,
  "time_alive": 1560,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 6,
  "time_alive": 1479,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 14,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 20,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 18,
  "time_alive": 1282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 4,
  "time_alive": 1492,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 9,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 8,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 5,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 15,
  "time_alive": 1364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 31,
  "time_alive": 662,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 20,
  "time_alive": 1129,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1524,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 33,
  "time_alive": 189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 30,
  "time_alive": 350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 13,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 8,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 16,
  "time_alive": 1341,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 16,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1498,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 8,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 7,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 12,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 3,
  "time_alive": 1542,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 9,
  "time_alive": 1423,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 10,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 12,
  "time_alive": 1394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 21,
  "time_alive": 1153,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 25,
  "time_alive": 863,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 14,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 9,
  "time_alive": 1440,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 7,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 10,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 28,
  "time_alive": 787,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 7,
  "time_alive": 1468,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 29,
  "time_alive": 425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 13,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 17,
  "time_alive": 1282,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 24,
  "time_alive": 1013,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 12,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 1,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 6,
  "time_alive": 1470,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 17,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 22,
  "time_alive": 1220,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 9,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 24,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 9,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 13,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 15,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 18,
  "time_alive": 1268,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 29,
  "time_alive": 701,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 15,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 7,
  "time_alive": 1420,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1518,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 18,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 23,
  "time_alive": 1039,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 8,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 21,
  "time_alive": 1241,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 31,
  "time_alive": 342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 31,
  "time_alive": 237,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 30,
  "time_alive": 399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 9,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 27,
  "time_alive": 938,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 6,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 5,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 13,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 4,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 21,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 1,
  "time_alive": 1559,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 10,
  "time_alive": 1413,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 19,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 7,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 5,
  "time_alive": 1518,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 13,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 26,
  "time_alive": 1023,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 29,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 23,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "181beaa62fab430596ecc32ac20c6491:4ca98f4f36174ff28a37dab540fff22c:ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 10,
  "time_alive": 1418,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 3,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 23,
  "time_alive": 916,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 31,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 1,
  "time_alive": 1553,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 33,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 27,
  "time_alive": 538,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 19,
  "time_alive": 1210,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 16,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 27,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 15,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 7,
  "time_alive": 1447,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 32,
  "time_alive": 182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 529,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 11,
  "time_alive": 1423,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 26,
  "time_alive": 919,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 16,
  "time_alive": 1344,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 19,
  "time_alive": 1232,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 12,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 27,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 30,
  "time_alive": 641,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 3,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 11,
  "time_alive": 1394,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 8,
  "time_alive": 1442,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 30,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 2,
  "time_alive": 1540,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 2,
  "time_alive": 1559,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 22,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 14,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 10,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 26,
  "time_alive": 581,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 15,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 18,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 13,
  "time_alive": 1396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 28,
  "time_alive": 731,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 30,
  "time_alive": 426,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 14,
  "time_alive": 1361,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 9,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 25,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 10,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 32,
  "time_alive": 165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 8,
  "time_alive": 1485,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 23,
  "time_alive": 1055,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 11,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 18,
  "time_alive": 1236,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 19,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 32,
  "time_alive": 176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 9,
  "time_alive": 1437,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 27,
  "time_alive": 928,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 26,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 14,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 15,
  "time_alive": 1371,
  "elims": 5,
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
    