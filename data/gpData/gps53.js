const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 17,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 28,
  "time_alive": 522,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 9,
  "time_alive": 1445,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 23,
  "time_alive": 1082,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 33,
  "time_alive": 212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 31,
  "time_alive": 232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 14,
  "time_alive": 1375,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 25,
  "time_alive": 866,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 25,
  "time_alive": 1079,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 18,
  "time_alive": 1340,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 30,
  "time_alive": 528,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 33,
  "time_alive": 128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 32,
  "time_alive": 125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "c33ebd57cce04e18a313996e176b42ac:d581fe5f6dcd4fadbd73c6295594ff1f:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 11,
  "time_alive": 1397,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 18,
  "time_alive": 1153,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 32,
  "time_alive": 369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 29,
  "time_alive": 799,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 30,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 27,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 32,
  "time_alive": 131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 8,
  "time_alive": 1418,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 31,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 9,
  "time_alive": 1410,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 10,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 33,
  "time_alive": 94,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "7ff08be71a3045658a388fe952068afa:81fb65540c214c63a2b91905164182b1:e90dfc38f97f41259bd34e01a210e884",
  "placement": 31,
  "time_alive": 248,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 8,
  "time_alive": 1447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 31,
  "time_alive": 381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 6,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 27,
  "time_alive": 710,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 24,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 30,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 24,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 22,
  "time_alive": 1004,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 26,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 27,
  "time_alive": 663,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 25,
  "time_alive": 727,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "341c179499594c18924bb1e421347321:3a21b075f43c4fefab5a1f34f386950e:9e803fa9b145489c91c22dafd3c2f261",
  "placement": 21,
  "time_alive": 1091,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 16,
  "time_alive": 1273,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 25,
  "time_alive": 999,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 24,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 29,
  "time_alive": 403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 31,
  "time_alive": 352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 15,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 15,
  "time_alive": 1333,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 30,
  "time_alive": 343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 27,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 29,
  "time_alive": 449,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 31,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 8,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 10,
  "time_alive": 1444,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 15,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 20,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 12,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 23,
  "time_alive": 1034,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 27,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 29,
  "time_alive": 445,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 10,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 21,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 31,
  "time_alive": 197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 29,
  "time_alive": 345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 23,
  "time_alive": 911,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 28,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 12,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 30,
  "time_alive": 346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 17,
  "time_alive": 1290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 30,
  "time_alive": 360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 31,
  "time_alive": 141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 22,
  "time_alive": 1161,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 25,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 5,
  "time_alive": 1436,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 20,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 24,
  "time_alive": 797,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "1eeaa0d768894a5cbe9a6f98f83ccaff:9bcf1155b3014d499816f2213eacf8db:a10062626d42442ba5ced279ab851af1",
  "placement": 22,
  "time_alive": 1025,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 27,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 22,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 28,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 20,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 12,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 24,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 28,
  "time_alive": 585,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 16,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "02a401fdab1145b3839a6d866d55c335:4e9961558e124f688cedf704b5794bff:b339763466084ca3b7cc01193ffee7f8",
  "placement": 30,
  "time_alive": 267,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 33,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 33,
  "time_alive": 183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 23,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 15,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 25,
  "time_alive": 866,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 33,
  "time_alive": 125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 30,
  "time_alive": 366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 14,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 25,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 18,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 26,
  "time_alive": 657,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "850c4251a7214bb6a5d34840218a803f:e20ed7495bd548a28ef499f3cb5bba49:feb8a1cd090a46169518b16f30a1ee7b",
  "placement": 33,
  "time_alive": 121,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 17,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 3,
  "time_alive": 1480,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 8,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 4,
  "time_alive": 1528,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 3,
  "time_alive": 1469,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 4,
  "time_alive": 1497,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 7,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 1,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 21,
  "time_alive": 1252,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 15,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 11,
  "time_alive": 1405,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 8,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 11,
  "time_alive": 1388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 1,
  "time_alive": 1466,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 2,
  "time_alive": 1534,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 15,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 16,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 6,
  "time_alive": 1440,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 25,
  "time_alive": 907,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 14,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 7,
  "time_alive": 1430,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 2,
  "time_alive": 1528,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 7,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 16,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 2,
  "time_alive": 1481,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 6,
  "time_alive": 1428,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 9,
  "time_alive": 1455,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 11,
  "time_alive": 1386,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 2,
  "time_alive": 1520,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 9,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 18,
  "time_alive": 1283,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 6,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 8,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 5,
  "time_alive": 1485,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 20,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 3,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 7,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 15,
  "time_alive": 1331,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 18,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 10,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 12,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 18,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 5,
  "time_alive": 1464,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 20,
  "time_alive": 1266,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 2,
  "time_alive": 1505,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 9,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 21,
  "time_alive": 1124,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 29,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 12,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 10,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 7,
  "time_alive": 1494,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 6,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 7,
  "time_alive": 1470,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 1,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 3,
  "time_alive": 1470,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 12,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 13,
  "time_alive": 1345,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 13,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 8,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 5,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 11,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 6,
  "time_alive": 1496,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 12,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 18,
  "time_alive": 1228,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 12,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 2,
  "time_alive": 1525,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 2,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 22,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 7,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 9,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 21,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 8,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 32,
  "time_alive": 163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 1,
  "time_alive": 1534,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 1,
  "time_alive": 1484,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 24,
  "time_alive": 871,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 10,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 16,
  "time_alive": 1328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 26,
  "time_alive": 866,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 5,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 8,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 6,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 23,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 10,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 18,
  "time_alive": 1265,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 12,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 7,
  "time_alive": 1413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 5,
  "time_alive": 1497,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 3,
  "time_alive": 1465,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 21,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 3,
  "time_alive": 1461,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 23,
  "time_alive": 1006,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 1,
  "time_alive": 1528,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 5,
  "time_alive": 1462,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 15,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 16,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 12,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 5,
  "time_alive": 1525,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 2,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 25,
  "time_alive": 578,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 4,
  "time_alive": 1466,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 5,
  "time_alive": 1427,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 1,
  "time_alive": 1505,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 25,
  "time_alive": 657,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 3,
  "time_alive": 1485,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 14,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 23,
  "time_alive": 1182,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 4,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 26,
  "time_alive": 940,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 31,
  "time_alive": 503,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 6,
  "time_alive": 1479,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 15,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 8,
  "time_alive": 1424,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 9,
  "time_alive": 1388,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 12,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 6,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "822c6a5a12ff4148b358da33a9569313:bd4dde96a5ff4c7f8c4a14aff8d0b79c:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 1,
  "time_alive": 1508,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 6,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 4,
  "time_alive": 1456,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 16,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 10,
  "time_alive": 1451,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 23,
  "time_alive": 1090,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 1,
  "time_alive": 1520,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 23,
  "time_alive": 1060,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 9,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 4,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 6,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 10,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 17,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 10,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 6,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 17,
  "time_alive": 1315,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 24,
  "time_alive": 1009,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 33,
  "time_alive": 187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 30,
  "time_alive": 248,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 5,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 19,
  "time_alive": 1162,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 24,
  "time_alive": 965,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 4,
  "time_alive": 1452,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 3,
  "time_alive": 1519,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:1d82a8f61d16496abe82819952252481:a9716111ba114088b2a04484e94c2b40",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 4,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 14,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 2,
  "time_alive": 1466,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 22,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 16,
  "time_alive": 1258,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 13,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 8,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 7,
  "time_alive": 1442,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 13,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 29,
  "time_alive": 422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef:ebac60e883df47f6a933096780b5ee64:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 22,
  "time_alive": 928,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 28,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 1,
  "time_alive": 1481,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 30,
  "time_alive": 383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 33,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 13,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 31,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 31,
  "time_alive": 408,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 17,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 7,
  "time_alive": 1416,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 9,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 12,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 11,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 1,
  "time_alive": 1498,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 29,
  "time_alive": 366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 22,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 3,
  "time_alive": 1533,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 18,
  "time_alive": 1232,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 28,
  "time_alive": 347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 11,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 29,
  "time_alive": 301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 30,
  "time_alive": 371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 31,
  "time_alive": 280,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 4,
  "time_alive": 1487,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 26,
  "time_alive": 484,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 9,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 20,
  "time_alive": 1236,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 27,
  "time_alive": 504,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 17,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 4,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 14,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 11,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 16,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 20,
  "time_alive": 1093,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 16,
  "time_alive": 1353,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 13,
  "time_alive": 1386,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 7,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 26,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 5,
  "time_alive": 1441,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 8,
  "time_alive": 1490,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 32,
  "time_alive": 196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 3,
  "time_alive": 1514,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 27,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 20,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 33,
  "time_alive": 258,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 27,
  "time_alive": 465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 30,
  "time_alive": 250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 16,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 12,
  "time_alive": 1406,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 24,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 14,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 25,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 25,
  "time_alive": 845,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 11,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 2,
  "time_alive": 1474,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 6,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 23,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 18,
  "time_alive": 1128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 23,
  "time_alive": 717,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "08c2805cfb6643298354292fefcae7b0:1c7f6564102a4ea4bd171d8c528e5b30:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 24,
  "time_alive": 632,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 18,
  "time_alive": 1320,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 30,
  "time_alive": 341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 25,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 15,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 8,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 8,
  "time_alive": 1464,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 24,
  "time_alive": 980,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 26,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 1,
  "time_alive": 1475,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 21,
  "time_alive": 1032,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 22,
  "time_alive": 1068,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 22,
  "time_alive": 1150,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 28,
  "time_alive": 621,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 9,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 13,
  "time_alive": 1397,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 9,
  "time_alive": 1409,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 14,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 29,
  "time_alive": 552,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 28,
  "time_alive": 312,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 15,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 10,
  "time_alive": 1406,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 18,
  "time_alive": 1141,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "08b89277f6ab4408a326a388ac0b8277:3524aa3a4b614323aec1c03bbacf4f8c:897945edbfb34a448539ace11d5e4154",
  "placement": 30,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 32,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 15,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 13,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 23,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 19,
  "time_alive": 1221,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 17,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 20,
  "time_alive": 1129,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 15,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 10,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 30,
  "time_alive": 379,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 24,
  "time_alive": 669,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "055757ad94454afeb62d63ae153e8e93:409cde616d8c4557836f0e86dd3f549a:b56cf6498c4642c4ad4a57d519663253",
  "placement": 2,
  "time_alive": 1508,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 20,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 21,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 3,
  "time_alive": 1462,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 14,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 26,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 15,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 4,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 27,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 11,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 19,
  "time_alive": 1120,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 28,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183:a2c54f4570d2482396c5510c2c2926ce:dbfc57ea79524892bd5d5ca9549f954f",
  "placement": 25,
  "time_alive": 508,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 27,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 27,
  "time_alive": 829,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 24,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 30,
  "time_alive": 476,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 21,
  "time_alive": 1150,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 10,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 22,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 10,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 18,
  "time_alive": 1272,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 3,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 26,
  "time_alive": 651,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 10,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 11,
  "time_alive": 1409,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 25,
  "time_alive": 934,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 32,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 22,
  "time_alive": 1135,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 9,
  "time_alive": 1456,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 21,
  "time_alive": 1067,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 12,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 17,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 24,
  "time_alive": 989,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 19,
  "time_alive": 1085,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "416878be023448b09001e555b545e315:8b6b602902c34c188c68544c2c615e45:f4ddf6ffb6214ac8856ce93f0f13566f",
  "placement": 15,
  "time_alive": 1375,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 30,
  "time_alive": 850,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 5,
  "time_alive": 1443,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 19,
  "time_alive": 1227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 29,
  "time_alive": 499,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 27,
  "time_alive": 794,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 26,
  "time_alive": 482,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 17,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 32,
  "time_alive": 194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 28,
  "time_alive": 479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 17,
  "time_alive": 1228,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 21,
  "time_alive": 935,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 23,
  "time_alive": 656,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 2,
  "time_alive": 1498,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 18,
  "time_alive": 1240,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 29,
  "time_alive": 430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 20,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 14,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 22,
  "time_alive": 1056,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 26,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 30,
  "time_alive": 284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 32,
  "time_alive": 282,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 25,
  "time_alive": 699,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 29,
  "time_alive": 258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 28,
  "time_alive": 249,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 25,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 32,
  "time_alive": 160,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 7,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 21,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 17,
  "time_alive": 1255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 23,
  "time_alive": 901,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 13,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 14,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 27,
  "time_alive": 782,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 11,
  "time_alive": 1376,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 20,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "49e75dc7017340958ae8ceee472b53c2:6157ffbf1ff74fccb4a35685c13b6062:7fcc47823b024a93a7578fc8c80c3abe",
  "placement": 27,
  "time_alive": 343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 19,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 13,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 31,
  "time_alive": 354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 28,
  "time_alive": 528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 30,
  "time_alive": 553,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 19,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 19,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 23,
  "time_alive": 1046,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 8,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 16,
  "time_alive": 1304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 27,
  "time_alive": 535,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "8ab8a4ebdfba483f93046905e3026430:98c0ea0bdefa47f8bbb7b2fb66d91912:c9b62c077f9e448fa94cc69e9ac82a07",
  "placement": 14,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 24,
  "time_alive": 990,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 9,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 21,
  "time_alive": 1216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 16,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 28,
  "time_alive": 758,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 25,
  "time_alive": 906,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 31,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 19,
  "time_alive": 1271,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 26,
  "time_alive": 586,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 15,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e:5a3de56dfdef45409440ebecc4dbfb38:89f157daa0aa48039569da1291f42843",
  "placement": 18,
  "time_alive": 1284,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 33,
  "time_alive": 116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 31,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 28,
  "time_alive": 489,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 19,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 5,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 29,
  "time_alive": 311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 32,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 33,
  "time_alive": 154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 29,
  "time_alive": 379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 32,
  "time_alive": 193,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 17,
  "time_alive": 1212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "7c88adcffa614df49a9398181234dff5:ae768fbcaec7485090a922f939e9b9c8:ddb006f27b0241088f378b2c4e16c899",
  "placement": 31,
  "time_alive": 192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 13,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 19,
  "time_alive": 1236,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 23,
  "time_alive": 1144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 24,
  "time_alive": 979,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 20,
  "time_alive": 1217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 30,
  "time_alive": 493,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 24,
  "time_alive": 1009,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 22,
  "time_alive": 1197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 28,
  "time_alive": 423,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 31,
  "time_alive": 220,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "3cfa3b5f0e5f4fe3809dd106662571f9:6b8207881a04452b85aa70c5d3df8798:ddf0172619474ddeb19f855dc065b80c",
  "placement": 29,
  "time_alive": 226,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 31,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 22,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 20,
  "time_alive": 1218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 11,
  "time_alive": 1442,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 29,
  "time_alive": 748,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 21,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 13,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 31,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 14,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "25cd6894-c84c-4da1-b2dd-483a19f07f4e",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 14,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ebeceed-05a3-4e2d-b571-f6e3877b5af7",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f:5853c28eb45c4bf3bf145b66fd2d5ff6:b461bf069d894062b4f57c6a207ff19f",
  "placement": 19,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "117a40c6-ed4e-4b1c-b120-165fefa5f14c",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 26,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 17,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0650246b-840c-4e48-8408-736789c93350",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 26,
  "time_alive": 767,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21bcbf9a-cf90-47af-bd3c-220aabae2e4c",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 31,
  "time_alive": 464,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7832bbf-5e3a-4f1c-8def-0731c0d39416",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 20,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed711cc9-ce63-415f-a466-9687cca1c7fb",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 27,
  "time_alive": 417,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c118590c-33f0-42e5-b7de-5546a76d85f9",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 28,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 22,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a13305f-5949-4e48-b113-ed002f2194cf",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 25,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c1455a-8015-40ff-8512-895a80c648e6",
  "team_id": "45c4c914534e46bb84fe546107f63a6d:89c2c589d31749afaab9d10457a266cf:a4b7329083af4cb3aae5d5054de682ce",
  "placement": 33,
  "time_alive": 141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 7,
  "time_alive": 1472,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1470,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 3,
  "time_alive": 1526,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 6,
  "time_alive": 1421,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1524,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 4,
  "time_alive": 1501,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1493,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 32,
  "time_alive": 129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 21,
  "time_alive": 1122,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 31,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 25,
  "time_alive": 938,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 22,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 4,
  "time_alive": 1517,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1538,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 13,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 9,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 17,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1445,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 7,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 8,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1521,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 27,
  "time_alive": 884,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 14,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 2,
  "time_alive": 1548,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 15,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 19,
  "time_alive": 1220,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 21,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1413,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1518,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 3,
  "time_alive": 1499,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1416,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 9,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1401,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 5,
  "time_alive": 1490,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 13,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 7,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 21,
  "time_alive": 1051,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 19,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 1,
  "time_alive": 1509,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 11,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 27,
  "time_alive": 870,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 1,
  "time_alive": 1576,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 8,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 17,
  "time_alive": 1280,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 9,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 24,
  "time_alive": 953,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 15,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 12,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 3,
  "time_alive": 1496,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 22,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 7,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 2,
  "time_alive": 1518,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 11,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 27,
  "time_alive": 851,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 3,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d:6f7115e8ca7b44dc9948c6d5ed71a248:dbf1edb8b2b947b080e80d3004ff3390",
  "placement": 9,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 1,
  "time_alive": 1548,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 26,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 10,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 5,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 17,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 2,
  "time_alive": 1509,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 2,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 18,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 19,
  "time_alive": 1204,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 16,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 20,
  "time_alive": 1125,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 19,
  "time_alive": 1229,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 3,
  "time_alive": 1527,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 5,
  "time_alive": 1429,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 24,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 26,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 6,
  "time_alive": 1471,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 3,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 20,
  "time_alive": 1113,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 17,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 22,
  "time_alive": 1106,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 7,
  "time_alive": 1496,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 16,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 11,
  "time_alive": 1377,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 10,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 4,
  "time_alive": 1430,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 32,
  "time_alive": 367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 2,
  "time_alive": 1506,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 12,
  "time_alive": 1443,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 19,
  "time_alive": 1374,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 17,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 31,
  "time_alive": 221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 15,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 29,
  "time_alive": 555,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 2,
  "time_alive": 1499,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 20,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 27,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 25,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 6,
  "time_alive": 1504,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 11,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 22,
  "time_alive": 1096,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 20,
  "time_alive": 1176,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 4,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 10,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1499,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 6,
  "time_alive": 1510,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 23,
  "time_alive": 1005,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 15,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 11,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 11,
  "time_alive": 1372,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 28,
  "time_alive": 915,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 4,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 13,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 12,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 18,
  "time_alive": 1244,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 5,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 7,
  "time_alive": 1426,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 12,
  "time_alive": 1459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 12,
  "time_alive": 1364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 6,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 13,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 28,
  "time_alive": 369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 31,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 1,
  "time_alive": 1506,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 28,
  "time_alive": 791,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 8,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 6,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 14,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 17,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 15,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 26,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 2,
  "time_alive": 1448,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 18,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 29,
  "time_alive": 357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 20,
  "time_alive": 1111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 16,
  "time_alive": 1326,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 27,
  "time_alive": 803,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 9,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 12,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 3,
  "time_alive": 1501,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 18,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 2,
  "time_alive": 1576,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 7,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 21,
  "time_alive": 1089,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 16,
  "time_alive": 1314,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 14,
  "time_alive": 1358,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 9,
  "time_alive": 1459,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 7,
  "time_alive": 1409,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 5,
  "time_alive": 1474,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 6,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 15,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 21,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 6,
  "time_alive": 1437,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 26,
  "time_alive": 911,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 18,
  "time_alive": 1269,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "25a6264790f742ecbf177e19db1f1f47:9836fa7208e547f9964fe84ab7ab69ed:a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 5,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 6,
  "time_alive": 1482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 20,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 29,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 22,
  "time_alive": 1010,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 8,
  "time_alive": 1465,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 7,
  "time_alive": 1485,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 27,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 12,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 12,
  "time_alive": 1390,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 11,
  "time_alive": 1466,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 5,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 18,
  "time_alive": 1255,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 24,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 9,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 4,
  "time_alive": 1518,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 8,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 4,
  "time_alive": 1487,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 21,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 29,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 13,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 30,
  "time_alive": 252,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 20,
  "time_alive": 1252,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 24,
  "time_alive": 970,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 10,
  "time_alive": 1387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 12,
  "time_alive": 1354,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 17,
  "time_alive": 1268,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 5,
  "time_alive": 1507,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 20,
  "time_alive": 1103,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 23,
  "time_alive": 1024,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 25,
  "time_alive": 1009,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 10,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 16,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 10,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 19,
  "time_alive": 1265,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 17,
  "time_alive": 1348,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 4,
  "time_alive": 1436,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 26,
  "time_alive": 913,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 3,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 33,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 29,
  "time_alive": 434,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1524,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 24,
  "time_alive": 1027,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 31,
  "time_alive": 817,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 15,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 32,
  "time_alive": 162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 9,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 4,
  "time_alive": 1471,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 31,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 19,
  "time_alive": 1283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 6,
  "time_alive": 1424,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 17,
  "time_alive": 1257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 27,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 18,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 13,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 23,
  "time_alive": 1018,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 26,
  "time_alive": 984,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 13,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 4,
  "time_alive": 1521,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 10,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 8,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 20,
  "time_alive": 1270,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 8,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 12,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 10,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 15,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 16,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 16,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 9,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 33,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 3,
  "time_alive": 1530,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 22,
  "time_alive": 1051,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 12,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 30,
  "time_alive": 628,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 12,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 16,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 14,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 31,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 28,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 3,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 4,
  "time_alive": 1484,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 31,
  "time_alive": 219,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 13,
  "time_alive": 1444,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 6,
  "time_alive": 1459,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 23,
  "time_alive": 990,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 25,
  "time_alive": 982,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 10,
  "time_alive": 1386,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 11,
  "time_alive": 1432,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 28,
  "time_alive": 565,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 20,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 11,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 9,
  "time_alive": 1393,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 6,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 16,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 21,
  "time_alive": 1222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 11,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:4e4af55e6d1d4369a02c020ed6b2b602:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 30,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 15,
  "time_alive": 1348,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 21,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 26,
  "time_alive": 924,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 33,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 7,
  "time_alive": 1470,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 30,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 8,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 20,
  "time_alive": 1081,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 26,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 32,
  "time_alive": 236,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 21,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 1,
  "time_alive": 1448,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 29,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 2,
  "time_alive": 1538,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 30,
  "time_alive": 395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 25,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 18,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 13,
  "time_alive": 1364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 8,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 9,
  "time_alive": 1418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 22,
  "time_alive": 1195,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 14,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 13,
  "time_alive": 1373,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 8,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 18,
  "time_alive": 1200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 23,
  "time_alive": 1006,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 3,
  "time_alive": 1491,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 16,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 5,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 21,
  "time_alive": 1046,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 24,
  "time_alive": 1021,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 20,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 18,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 30,
  "time_alive": 385,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 28,
  "time_alive": 390,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 28,
  "time_alive": 898,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 30,
  "time_alive": 335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 13,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 15,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 10,
  "time_alive": 1450,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 29,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 30,
  "time_alive": 830,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 25,
  "time_alive": 989,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 14,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 17,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 13,
  "time_alive": 1359,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 3,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 32,
  "time_alive": 475,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 7,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 8,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 18,
  "time_alive": 1233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 14,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 31,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 28,
  "time_alive": 866,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 19,
  "time_alive": 1146,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 28,
  "time_alive": 676,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 10,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 28,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 29,
  "time_alive": 361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 23,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 33,
  "time_alive": 145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 19,
  "time_alive": 1171,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 31,
  "time_alive": 352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 30,
  "time_alive": 285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 27,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 22,
  "time_alive": 1041,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 30,
  "time_alive": 348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 24,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 25,
  "time_alive": 924,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 1,
  "time_alive": 1499,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 25,
  "time_alive": 951,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 31,
  "time_alive": 476,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 31,
  "time_alive": 310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 21,
  "time_alive": 1022,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 23,
  "time_alive": 977,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 24,
  "time_alive": 1023,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 15,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 24,
  "time_alive": 984,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 22,
  "time_alive": 1043,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 29,
  "time_alive": 523,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 8,
  "time_alive": 1489,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 15,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 16,
  "time_alive": 1326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 17,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 22,
  "time_alive": 1139,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 18,
  "time_alive": 1243,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 17,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 29,
  "time_alive": 456,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 26,
  "time_alive": 902,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 32,
  "time_alive": 403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 5,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 30,
  "time_alive": 505,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 32,
  "time_alive": 223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 26,
  "time_alive": 946,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 14,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 16,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 27,
  "time_alive": 915,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 24,
  "time_alive": 951,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 11,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 10,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 19,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 28,
  "time_alive": 859,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 27,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 24,
  "time_alive": 1125,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 19,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 24,
  "time_alive": 980,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 33,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 32,
  "time_alive": 271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 30,
  "time_alive": 887,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 32,
  "time_alive": 264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 33,
  "time_alive": 100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 33,
  "time_alive": 480,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 26,
  "time_alive": 900,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 29,
  "time_alive": 454,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 2,
  "time_alive": 1499,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 33,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 33,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9:c6fb6f4d065a4202a767308bae3298b4",
  "placement": 27,
  "time_alive": 851,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 22,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 19,
  "time_alive": 1178,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 22,
  "time_alive": 1018,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 9,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 32,
  "time_alive": 216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 32,
  "time_alive": 673,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 25,
  "time_alive": 983,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 33,
  "time_alive": 98,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 23,
  "time_alive": 1091,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 23,
  "time_alive": 1195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 31,
  "time_alive": 305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 32,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5aff8bc-6c96-4267-a251-d063b960cf8d",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 21,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90c5a2d8-8aab-4be4-b24b-e88644392cbf",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 23,
  "time_alive": 1070,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07f9e2b3-0d74-4061-99f9-2c2cad908ad0",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 25,
  "time_alive": 973,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "681cf3c3-36b4-4b80-b9d2-77174459d471",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 25,
  "time_alive": 930,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "32c5f756-03db-4ee7-90e5-5762068931bb",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 26,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "157f2a69-556d-49bc-8d84-2990ad648a6e",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 23,
  "time_alive": 1033,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b39352b-67aa-461b-9783-a9fb08e693cd",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 33,
  "time_alive": 291,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6132fe4d-edd2-4ca2-aaed-7b2c76d65424",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 23,
  "time_alive": 1039,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e8faea0-35a9-4051-bac9-0f6522e08d3e",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 25,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bee2bcd-7f4f-446f-94b9-32d02d2ff861",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 28,
  "time_alive": 618,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21922a45-0eae-4bdf-8118-6ea608b08f33",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 29,
  "time_alive": 531,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "434a5114-77ef-456f-8d6d-6c19acb1de67",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 33,
  "time_alive": 122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 6,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 49,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 4,
  "time_alive": 1517,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 12,
  "time_alive": 1409,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 3,
  "time_alive": 1535,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 13,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 30,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 44,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 55,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 2,
  "time_alive": 1484,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 1,
  "time_alive": 1554,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 5,
  "time_alive": 1486,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 2,
  "time_alive": 1521,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 37,
  "time_alive": 1286,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 3,
  "time_alive": 1523,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 15,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 74,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 12,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 11,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 10,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 42,
  "time_alive": 1292,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 27,
  "time_alive": 1353,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 8,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "8723f8c420c44c9f883c13401217f948",
  "placement": 22,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 83,
  "time_alive": 700,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 2,
  "time_alive": 1558,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 29,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 34,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 13,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 79,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 11,
  "time_alive": 1456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 9,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 7,
  "time_alive": 1468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102",
  "placement": 4,
  "time_alive": 1498,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 40,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 8,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 10,
  "time_alive": 1483,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 14,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 26,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 24,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 5,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 3,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 13,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 42,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 37,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 18,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 23,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 68,
  "time_alive": 908,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 66,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 16,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 5,
  "time_alive": 1500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 3,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 48,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 16,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 83,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 67,
  "time_alive": 966,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 4,
  "time_alive": 1534,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f29a43d32f04412f810b393c3f7b58fa",
  "placement": 15,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 7,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 11,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 32,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 98,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 54,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 2,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 1,
  "time_alive": 1521,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 65,
  "time_alive": 1071,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 9,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 8,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 61,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 60,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 46,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 62,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 44,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 1,
  "time_alive": 1484,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 31,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 32,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 33,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 2,
  "time_alive": 1476,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 20,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 35,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 60,
  "time_alive": 1065,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 74,
  "time_alive": 563,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 39,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 24,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 56,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 38,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 6,
  "time_alive": 1497,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 10,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 81,
  "time_alive": 467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 1,
  "time_alive": 1476,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 39,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 11,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 39,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 83,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 54,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 18,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 15,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 6,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 78,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809",
  "placement": 33,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 51,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 19,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 71,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 23,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 22,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 11,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 100,
  "time_alive": 80,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 26,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 12,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 7,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 35,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 41,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 66,
  "time_alive": 1020,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 14,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12798295-2ee6-49f2-988a-0827bf47f748",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 23,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "057c8578-b775-4f91-90d9-adc58a8717fb",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 10,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "637929b3-0ad7-4c9b-8b79-301bf8d91384",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 24,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4da6b76b-9d61-4a0e-b782-1f4e67404d10",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 49,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03ea7a23-3ca2-4468-938c-5a6c8a25a950",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 25,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18bfa040-9511-454c-80eb-66f491882100",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 13,
  "time_alive": 1377,
  "elims": 2,
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
    